import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminUsersManager from "@/components/admin/users/AdminUsersManager";

export default async function AdminUsersPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("admin_profiles")
    .select("role, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (
    profileError ||
    !profile ||
    profile.role !== "admin" ||
    !profile.is_active
  ) {
    redirect("/admin");
  }

  return <AdminUsersManager currentUserId={user.id} />;
}