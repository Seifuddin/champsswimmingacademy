
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Images,
  MessageSquare,
  FileText,
  CalendarDays,
  Settings,
  Users,
  Waves,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const navigation = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Gallery", href: "/admin/gallery", icon: Images },
  { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Events", href: "/admin/events", icon: CalendarDays },
];

const managementNavigation = [
  { label: "Site Settings", href: "/admin/settings", icon: Settings },
  { label: "Administrators", href: "/admin/users", icon: Users },
];

type NavigationItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
};

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const supabase = createClient();

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  async function handleLogout() {
    setLoggingOut(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      setLoggingOut(false);
      return;
    }

    setMobileOpen(false);
    router.replace("/admin/login");
    router.refresh();
  }

  function renderNavigation(items: NavigationItem[]) {
    return items.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.href);

      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className={`group flex items-center justify-between rounded-lg px-3 py-2.5 transition-all ${
            active
              ? "bg-[#143d59] text-white"
              : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
          }`}
        >
          <span className="flex items-center gap-3">
            <Icon
              size={18}
              strokeWidth={active ? 2.2 : 1.8}
              className={active ? "text-cyan-300" : "text-slate-400"}
            />

            <span className="text-[13px] font-medium">{item.label}</span>
          </span>

          {active && <ChevronRight size={15} className="text-cyan-300" />}
        </Link>
      );
    });
  }

  const sidebarContent = (
    <>
      {/* Brand */}
      <div className="flex h-[76px] shrink-0 items-center gap-3 border-b border-white/[0.08] px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-[#09283e]">
          <Waves size={21} strokeWidth={2.4} />
        </div>

        <div>
          <p className="text-[13px] font-bold tracking-[0.16em] text-white">
            CHAMPS
          </p>
          <p className="mt-0.5 text-[9px] tracking-[0.16em] text-slate-400">
            SWIMMING ACADEMY
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
          Workspace
        </p>

        <nav className="space-y-1">{renderNavigation(navigation)}</nav>

        <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
          Management
        </p>

        <nav className="space-y-1">
          {renderNavigation(managementNavigation)}
        </nav>

        {/* Workspace status */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-slate-200">
              Academy workspace
            </span>
          </div>

          <p className="mt-2 text-[11px] leading-5 text-slate-400">
            Manage your academy content and website from one place.
          </p>
        </div>
      </div>

      {/* Sign out */}
      <div className="shrink-0 border-t border-white/[0.08] p-3">
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-slate-400 transition hover:bg-red-500/10 hover:text-red-300 disabled:opacity-50"
        >
          <LogOut size={17} />
          {loggingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu trigger */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open admin navigation"
        className="fixed left-4 top-3.5 z-40 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0b2940] shadow-sm lg:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[250px] flex-col bg-[#0b2033] lg:flex">
        {sidebarContent}
      </aside>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <aside className="absolute inset-y-0 left-0 flex w-[280px] max-w-[85vw] flex-col bg-[#0b2033] shadow-2xl">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
              className="absolute right-3 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
