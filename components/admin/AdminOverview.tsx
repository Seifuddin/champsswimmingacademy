
import Link from "next/link";
import {
  Images,
  MessageSquare,
  FileText,
  ArrowUpRight,
  Upload,
  PenSquare,
  Waves,
  ChevronRight,
  CheckCircle2,
  Clock3,
  Archive,
  Eye,
  EyeOff,
} from "lucide-react";

import AdminStatCard from "@/components/admin/AdminStatCard";

type RecentEnquiry = {
  id: string;
  full_name: string;
  subject: string | null;
  status: string;
  created_at: string;
};

type AdminOverviewProps = {
  galleryCount: number;
  galleryPublished: number;
  galleryUnpublished: number;

  enquiryCount: number;
  enquiryNew: number;
  enquiryContacted: number;
  enquiryResolved: number;

  blogPublished: number;
  blogDrafts: number;
  blogTrash: number;

  recentEnquiries: RecentEnquiry[];
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
];

function formatDate(date: string) {
  return new Date(date).toLocaleString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-50 text-blue-700",
    contacted: "bg-amber-50 text-amber-700",
    resolved: "bg-emerald-50 text-emerald-700",
  };

  const labels: Record<string, string> = {
    new: "New",
    contacted: "Contacted",
    resolved: "Resolved",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        styles[status] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {labels[status] ?? status}
    </span>
  );
}

function SummaryItem({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  icon: typeof Eye;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-0">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color}`}>
          <Icon size={15} />
        </div>
        <span className="text-xs text-slate-600">{label}</span>
      </div>

      <span className="text-sm font-semibold tabular-nums text-slate-800">
        {value}
      </span>
    </div>
  );
}

export default function AdminOverview({
  galleryCount,
  galleryPublished,
  galleryUnpublished,
  enquiryCount,
  enquiryNew,
  enquiryContacted,
  enquiryResolved,
  blogPublished,
  blogDrafts,
  blogTrash,
  recentEnquiries,
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

        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -right-6 -top-16 h-48 w-48 rounded-full border border-white/[0.08]" />
        <div className="pointer-events-none absolute -right-1 -top-10 h-32 w-32 rounded-full border border-cyan-300/[0.12]" />
      </section>

      {/* Main statistics */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-800">
            Academy overview
          </h2>

          <span className="text-[10px] font-medium text-slate-400">
            Live database statistics
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <AdminStatCard
            title="Gallery images"
            value={galleryCount}
            description="Images stored in your gallery"
            icon={Images}
            accent="cyan"
            href="/admin/gallery"
          />

          <AdminStatCard
            title="Total enquiries"
            value={enquiryCount}
            description="Messages received by the academy"
            icon={MessageSquare}
            accent="blue"
            href="/admin/enquiries"
          />

          <AdminStatCard
            title="Published articles"
            value={blogPublished}
            description="Articles currently published"
            icon={FileText}
            accent="violet"
            href="/admin/blog"
          />
        </div>
      </section>

      {/* Module summaries */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Enquiries */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare size={17} className="text-blue-600" />
              <h2 className="text-sm font-semibold text-slate-800">
                Enquiry status
              </h2>
            </div>

            <Link
              href="/admin/enquiries"
              className="text-[11px] font-semibold text-blue-600 hover:text-blue-800"
            >
              View inbox
            </Link>
          </div>

          <SummaryItem
            label="New enquiries"
            value={enquiryNew}
            icon={Clock3}
            color="bg-blue-50 text-blue-600"
          />

          <SummaryItem
            label="Contacted"
            value={enquiryContacted}
            icon={MessageSquare}
            color="bg-amber-50 text-amber-600"
          />

          <SummaryItem
            label="Resolved"
            value={enquiryResolved}
            icon={CheckCircle2}
            color="bg-emerald-50 text-emerald-600"
          />
        </div>

        {/* Blog */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={17} className="text-violet-600" />
              <h2 className="text-sm font-semibold text-slate-800">
                Blog publishing
              </h2>
            </div>

            <Link
              href="/admin/blog"
              className="text-[11px] font-semibold text-violet-600 hover:text-violet-800"
            >
              Manage blog
            </Link>
          </div>

          <SummaryItem
            label="Published articles"
            value={blogPublished}
            icon={Eye}
            color="bg-emerald-50 text-emerald-600"
          />

          <SummaryItem
            label="Draft articles"
            value={blogDrafts}
            icon={PenSquare}
            color="bg-blue-50 text-blue-600"
          />

          <SummaryItem
            label="In trash"
            value={blogTrash}
            icon={Archive}
            color="bg-amber-50 text-amber-600"
          />
        </div>
      </section>

      {/* Gallery summary */}
      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Images size={17} className="text-cyan-700" />
            <h2 className="text-sm font-semibold text-slate-800">
              Gallery management
            </h2>
          </div>

          <Link
            href="/admin/gallery"
            className="text-[11px] font-semibold text-cyan-700 hover:text-cyan-900"
          >
            Manage gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-[11px] text-slate-500">Total images</p>
            <p className="mt-1 text-xl font-bold text-slate-800">
              {galleryCount}
            </p>
          </div>

          <div className="rounded-lg bg-emerald-50/70 p-3">
            <div className="flex items-center gap-1.5 text-emerald-700">
              <Eye size={13} />
              <p className="text-[11px]">Published</p>
            </div>
            <p className="mt-1 text-xl font-bold text-emerald-800">
              {galleryPublished}
            </p>
          </div>

          <div className="col-span-2 rounded-lg bg-amber-50/70 p-3 sm:col-span-1">
            <div className="flex items-center gap-1.5 text-amber-700">
              <EyeOff size={13} />
              <p className="text-[11px]">Unpublished</p>
            </div>
            <p className="mt-1 text-xl font-bold text-amber-800">
              {galleryUnpublished}
            </p>
          </div>
        </div>
      </section>

      {/* Recent enquiries */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Recent enquiries
            </h2>
            <p className="mt-0.5 text-[11px] text-slate-500">
              The latest messages received by your academy.
            </p>
          </div>

          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800"
          >
            View all
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {recentEnquiries.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {recentEnquiries.map((enquiry) => (
              <Link
                key={enquiry.id}
                href="/admin/enquiries"
                className="flex flex-col gap-2 px-4 py-3 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-800">
                    {enquiry.full_name}
                  </p>
                  <p className="mt-1 truncate text-[11px] text-slate-500">
                    {enquiry.subject || "General enquiry"}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    {formatDate(enquiry.created_at)}
                  </p>
                </div>

                <div className="flex shrink-0 items-center justify-between gap-3">
                  <StatusBadge status={enquiry.status} />
                  <ChevronRight size={15} className="text-slate-400" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="px-4 py-10 text-center">
            <MessageSquare
              size={24}
              className="mx-auto text-slate-300"
            />
            <p className="mt-3 text-xs font-semibold text-slate-600">
              No enquiries yet
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              New messages from your website will appear here.
            </p>
          </div>
        )}
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="border-b border-slate-100 px-4 py-3.5">
          <h2 className="text-sm font-semibold text-slate-800">
            Content management
          </h2>
          <p className="mt-0.5 text-[11px] text-slate-500">
            Access and manage your academy's content.
          </p>
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
