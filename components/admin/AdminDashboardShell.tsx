import type { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

type AdminDashboardShellProps = {
  children: ReactNode;
  fullName: string;
  email: string;
  role: string;
};

export default function AdminDashboardShell({
  children,
  fullName,
  email,
  role,
}: AdminDashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <AdminSidebar />

      <div className="min-h-screen lg:pl-[250px]">
        <AdminHeader fullName={fullName} email={email} role={role} />

        <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}