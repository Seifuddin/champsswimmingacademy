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
    <div className="min-h-screen overflow-x-clip bg-[#f5f7fa]">
      <AdminSidebar />

      <div className="min-h-screen min-w-0 lg:pl-[250px]">
        <AdminHeader
          fullName={fullName}
          email={email}
          role={role}
        />

        <main className="mx-auto w-full min-w-0 max-w-[1600px] px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}