import Link from "next/link";
import {
  Images,
  MessageSquare,
  FileText,
  CalendarDays,
  ArrowUpRight,
  Upload,
  PenSquare,
  Settings2,
  Waves,
  ChevronRight,
} from "lucide-react";
import AdminStatCard from "@/components/admin/AdminStatCard";

type AdminOverviewProps = {
  galleryCount: number;
  enquiryCount: number;
  blogCount: number;
  eventCount: number;
  fullName: string;
};

const quickActions = [
  {
    title: "Upload photos",
    description: "Add new images to the academy gallery.",
    href: "/admin/gallery",
    icon: Upload,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
  },
  {
    title: "Write an article",
    description: "Create a blog post for your website.",
    href: "/admin/blog",
    icon: PenSquare,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    title: "View enquiries",
    description: "Review messages from prospective swimmers.",
    href: "/admin/enquiries",
    icon: MessageSquare,
    color: "text-violet-700",
    bg: "bg-violet-50",
  },
  {
    title: "Update settings",
    description: "Manage your academy's website information.",
    href: "/admin/settings",
    icon: Settings2,
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
];

export default function AdminOverview({
  galleryCount,
  enquiryCount,
  blogCount,
  eventCount,
  fullName,
}: AdminOverviewProps) {
  const firstName = fullName.trim().split(/\s+/)[0] || "Administrator";

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <section className="relative overflow-hidden rounded-2xl bg-[#0b2033] px-5 py-6 text-white sm:px-7 sm:py-7">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <Waves size={15} />
            Academy management
          </div>

          <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, {firstName}.
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
            Your academy workspace is ready. Manage content, review enquiries,
            and keep your swimming community updated.
          </p>

          <Link
            href="/admin/gallery"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-[#08283d] transition hover:bg-cyan-300"
          >
            Manage academy content
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Decorative water rings */}
        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -right-6 -top-16 h-48 w-48 rounded-full border border-white/[0.08]" />
        <div className="pointer-events-none absolute -right-1 -top-10 h-32 w-32 rounded-full border border-cyan-300/[0.12]" />
      </section>

      {/* Statistics */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-800">
            Academy overview
          </h2>

          <span className="text-[10px] font-medium text-slate-400">
            Database totals
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <AdminStatCard
            title="Gallery images"
            value={galleryCount}
            description="Images stored in your gallery"
            icon={Images}
            accent="cyan"
            href="/admin/gallery"
          />

          <AdminStatCard
            title="Enquiries"
            value={enquiryCount}
            description="Messages received by the academy"
            icon={MessageSquare}
            accent="blue"
            href="/admin/enquiries"
          />

          <AdminStatCard
            title="Blog articles"
            value={blogCount}
            description="Articles stored in your CMS"
            icon={FileText}
            accent="violet"
            href="/admin/blog"
          />

          <AdminStatCard
            title="Events"
            value={eventCount}
            description="Academy events in your CMS"
            icon={CalendarDays}
            accent="amber"
            href="/admin/events"
          />
        </div>
      </section>

      {/* Quick actions */}
      <section>
        <div className="mb-3">
          <h2 className="text-sm font-semibold text-slate-800">
            Quick actions
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Common tasks, accessible in one click.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                href={action.href}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${action.bg} ${action.color}`}
                >
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-semibold text-slate-800">
                    {action.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    {action.description}
                  </p>
                </div>

                <ChevronRight
                  size={16}
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700"
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* CMS modules */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Content management
            </h2>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Access and manage your academy's content.
            </p>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {[
            {
              title: "Swimming gallery",
              description: "Manage academy photos and visual memories.",
              href: "/admin/gallery",
              icon: Images,
            },
            {
              title: "Enquiry inbox",
              description: "Manage messages and prospective students.",
              href: "/admin/enquiries",
              icon: MessageSquare,
            },
            {
              title: "Academy blog",
              description: "Publish articles, news and updates.",
              href: "/admin/blog",
              icon: FileText,
            },
            {
              title: "Academy events",
              description: "Manage events and upcoming activities.",
              href: "/admin/events",
              icon: CalendarDays,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-slate-50"
              >
                <Icon size={17} className="shrink-0 text-slate-500" />

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-800">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-slate-400"
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}