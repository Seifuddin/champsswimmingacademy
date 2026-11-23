
import Link from "next/link";
import { ExternalLink, ShieldCheck } from "lucide-react";

type AdminHeaderProps = {
  fullName: string;
  email: string;
  role: string;
};

export default function AdminHeader({
  fullName,
  email,
  role,
}: AdminHeaderProps) {
  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const formattedRole =
    role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <header className="sticky top-0 z-20 flex min-h-[72px] items-center justify-between gap-3 border-b border-slate-200/80 bg-white/95 px-4 pl-[68px] backdrop-blur-md sm:px-6 sm:pl-[76px] lg:px-8 lg:pl-8">
      {/* Page context */}
      <div className="min-w-0">
        <p className="truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">
          Champs Swimming Academy
        </p>

        <div className="mt-1 flex items-center gap-1.5">
          <ShieldCheck
            size={14}
            className="shrink-0 text-cyan-600"
          />
          <h2 className="truncate text-sm font-semibold text-slate-800">
            Administration
          </h2>
        </div>
      </div>

      {/* Account */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50/50 hover:text-[#0d526e] sm:inline-flex"
        >
          View website
          <ExternalLink size={13} />
        </Link>

        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-100 bg-[#e6f6f8] text-xs font-bold text-[#0b6074]">
            {initials || "CA"}
          </div>

          <div className="hidden max-w-[160px] md:block">
            <p className="truncate text-xs font-semibold text-slate-800">
              {fullName}
            </p>

            <p className="mt-0.5 truncate text-[10px] text-slate-500">
              {email}
            </p>

            <p className="mt-0.5 text-[9px] font-medium text-cyan-700">
              {formattedRole}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
