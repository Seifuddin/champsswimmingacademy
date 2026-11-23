import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

async function verifyAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { authorized: false as const, status: 401 };
  }

  const { data: profile, error } = await supabase
    .from("admin_profiles")
    .select("role, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (error || !profile || profile.role !== "admin" || !profile.is_active) {
    return { authorized: false as const, status: 403 };
  }

  return { authorized: true as const, user };
}

// GET: Fetch CMS users
export async function GET() {
  try {
    const auth = await verifyAdmin();

    if (!auth.authorized) {
      return NextResponse.json(
        { error: "Unauthorized access." },
        { status: auth.status }
      );
    }

    const { data: profiles, error: profileError } = await supabaseAdmin
      .from("admin_profiles")
      .select("id, full_name, role, is_active, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (profileError) {
      console.error("Admin profiles query failed:", profileError);
      return NextResponse.json(
        { error: "Unable to fetch CMS profiles." },
        { status: 500 }
      );
    }

    const authUsers: Array<{ id: string; email?: string }> = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const { data, error } = await supabaseAdmin.auth.admin.listUsers({
        page,
        perPage: 100,
      });

      if (error) {
        return NextResponse.json(
          { error: "Unable to fetch user emails." },
          { status: 500 }
        );
      }

      authUsers.push(
        ...data.users.map((user) => ({
          id: user.id,
          email: user.email,
        }))
      );

      hasMore = data.users.length === 100;
      page++;
    }

    const users = (profiles || []).map((profile) => {
      const authUser = authUsers.find((user) => user.id === profile.id);

      return {
        ...profile,
        email: authUser?.email || "",
      };
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Admin users GET error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// POST: Invite CMS users
export async function POST(request: Request) {
  try {
    const auth = await verifyAdmin();

    if (!auth.authorized) {
      return NextResponse.json(
        { error: "Unauthorized access." },
        { status: auth.status }
      );
    }

    const body = await request.json();

    const fullName =
      typeof body.fullName === "string" ? body.fullName.trim() : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const role = body.role;

    if (!fullName || !email || !["admin", "editor"].includes(role)) {
      return NextResponse.json(
        { error: "Please provide a valid name, email and role." },
        { status: 400 }
      );
    }

    const { data: invitation, error: invitationError } =
      await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
        data: {
          full_name: fullName,
        },
      });

    if (invitationError || !invitation.user) {
      return NextResponse.json(
        { error: invitationError?.message || "Invitation failed." },
        { status: 400 }
      );
    }

    const { error: profileError } = await supabaseAdmin
      .from("admin_profiles")
      .insert({
        id: invitation.user.id,
        full_name: fullName,
        role,
        is_active: true,
      });

    if (profileError) {
      console.error("Profile creation failed:", profileError);

      // Clean up Auth account if profile creation fails
      await supabaseAdmin.auth.admin.deleteUser(invitation.user.id);

      return NextResponse.json(
        { error: "Account profile creation failed." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: `Invitation successfully sent to ${email}.`,
        user: {
          id: invitation.user.id,
          full_name: fullName,
          email,
          role,
          is_active: true,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admin users POST error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// PATCH: Change user role or active status
export async function PATCH(request: Request) {
  try {
    const auth = await verifyAdmin();

    if (!auth.authorized) {
      return NextResponse.json(
        { error: "Unauthorized access." },
        { status: auth.status }
      );
    }

    const body = await request.json();

    const userId =
      typeof body.userId === "string" ? body.userId : "";

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required." },
        { status: 400 }
      );
    }

    if (userId === auth.user.id) {
      return NextResponse.json(
        { error: "You cannot modify your own admin account here." },
        { status: 403 }
      );
    }

    const hasRole = Object.prototype.hasOwnProperty.call(body, "role");
    const hasStatus = Object.prototype.hasOwnProperty.call(body, "is_active");

    if (!hasRole && !hasStatus) {
      return NextResponse.json(
        { error: "No changes provided." },
        { status: 400 }
      );
    }

    if (hasRole && !["admin", "editor"].includes(body.role)) {
      return NextResponse.json(
        { error: "Invalid role." },
        { status: 400 }
      );
    }

    if (hasStatus && typeof body.is_active !== "boolean") {
      return NextResponse.json(
        { error: "Invalid account status." },
        { status: 400 }
      );
    }

    const { data: target, error: targetError } = await supabaseAdmin
      .from("admin_profiles")
      .select("id, full_name, role, is_active")
      .eq("id", userId)
      .maybeSingle();

    if (targetError || !target) {
      return NextResponse.json(
        { error: "User not found." },
        { status: 404 }
      );
    }

    const newRole = hasRole ? body.role : target.role;
    const newStatus = hasStatus ? body.is_active : target.is_active;

    // Prevent removing the last active administrator
    if (
      target.role === "admin" &&
      target.is_active &&
      (newRole !== "admin" || newStatus !== true)
    ) {
      const { count, error: countError } = await supabaseAdmin
        .from("admin_profiles")
        .select("id", { count: "exact", head: true })
        .eq("role", "admin")
        .eq("is_active", true);

      if (countError) {
        console.error("Active admin count error:", countError);

        return NextResponse.json(
          { error: "Unable to verify administrator safety." },
          { status: 500 }
        );
      }

      if ((count ?? 0) <= 1) {
        return NextResponse.json(
          { error: "You cannot deactivate or demote the last active administrator." },
          { status: 400 }
        );
      }
    }

    const { data: updated, error: updateError } = await supabaseAdmin
      .from("admin_profiles")
      .update({
        role: newRole,
        is_active: newStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)
      .select("id, full_name, role, is_active, updated_at")
      .single();

    if (updateError || !updated) {
      console.error("Admin user update error:", updateError);

      return NextResponse.json(
        { error: "Unable to update user." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "User updated successfully.",
      user: updated,
    });
  } catch (error) {
    console.error("Admin users PATCH error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}