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

  return (
    <header className="flex min-h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 pl-[68px] sm:px-6 sm:pl-[76px] lg:px-8 lg:pl-8">
      {/* Page context */}
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Champs Swimming Academy
        </p>

        <h2 className="mt-1 truncate text-sm font-semibold text-slate-800">
          Administration
        </h2>
      </div>

      {/* Account */}
      <div className="flex shrink-0 items-center gap-3">
        <Link
          href="/"
          target="_blank"
          className="hidden items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-cyan-300 hover:text-[#0d526e] sm:flex"
        >
          View website
          <ExternalLink size={13} />
        </Link>

        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f6f8] text-xs font-bold text-[#0b6074]">
            {initials || "CA"}
          </div>

          <div className="hidden max-w-[160px] md:block">
            <p className="truncate text-xs font-semibold text-slate-800">
              {fullName}
            </p>

            <p className="mt-0.5 truncate text-[10px] text-slate-500">
              {email}
            </p>
          </div>
        </div>
      </div>
    </header>
    );
}