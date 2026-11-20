import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminDashboardShell from "@/components/admin/AdminDashboardShell";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
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
    .select("id, full_name, role, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (
    profileError ||
    !profile ||
    !profile.is_active ||
    !["admin", "editor"].includes(profile.role)
  ) {
    redirect("/admin/login");
  }

  return (
    <AdminDashboardShell
      fullName={profile.full_name}
      email={user.email ?? ""}
      role={profile.role}
    >
      {children}
    </AdminDashboardShell>
  );
}