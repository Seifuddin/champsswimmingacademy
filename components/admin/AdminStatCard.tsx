import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type AdminStatCardProps = {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "cyan" | "violet" | "amber";
  href?: string;
};

const accents = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-700",
    border: "border-cyan-100",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    border: "border-violet-100",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
};

export default function AdminStatCard({
  title,
  value,
  description,
  icon: Icon,
  accent,
  href,
}: AdminStatCardProps) {
  const style = accents[accent];

  const content = (
    <div className="flex h-full items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-500">{title}</p>

        <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {value}
        </p>

        <p className="mt-1 text-[11px] leading-4 text-slate-500">
          {description}
        </p>
      </div>

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
      >
        <Icon size={19} strokeWidth={1.9} />
      </div>
    </div>
  );

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-4 transition ${
        href ? "hover:border-slate-300 hover:shadow-sm" : ""
      }`}
    >
      {href ? (
        <a href={href} className="block">
          {content}

          <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-slate-500">
            View details
            <ArrowUpRight size={13} />
          </div>
        </a>
      ) : (
        content
      )}
    </div>
  );
}