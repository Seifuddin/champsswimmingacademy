
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Search,
  RefreshCw,
  MessageSquare,
  Phone,
  Mail,
  Clock3,
  CheckCircle2,
  CircleDot,
  Trash2,
  ExternalLink,
  Loader2,
  Inbox,
  X,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type EnquiryStatus = "new" | "contacted" | "resolved";

type Enquiry = {
  id: string;
  full_name: string;
  email: string | null;
  phone: string;
  subject: string | null;
  message: string;
  status: EnquiryStatus;
  created_at: string;
};

const statusConfig = {
  new: {
    label: "New",
    color: "bg-sky-50 text-sky-700 ring-sky-200",
    icon: CircleDot,
  },
  contacted: {
    label: "Contacted",
    color: "bg-amber-50 text-amber-700 ring-amber-200",
    icon: Clock3,
  },
  resolved: {
    label: "Resolved",
    color: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: CheckCircle2,
  },
};

const filters = ["all", "new", "contacted", "resolved"] as const;

type Filter = (typeof filters)[number];

function formatDate(date: string) {
  return new Date(date).toLocaleString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function cleanPhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

function StatusBadge({ status }: { status: EnquiryStatus }) {
  const config = statusConfig[status] ?? statusConfig.new;
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${config.color}`}
    >
      <Icon size={12} />
      {config.label}
    </span>
  );
}

export default function EnquiriesManager() {
  const supabase = useMemo(() => createClient(), []);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const loadEnquiries = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    setError("");

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Unable to load enquiries. Please try again.");
      console.error("Enquiries fetch error:", error.message);
    } else {
      setEnquiries((data ?? []) as Enquiry[]);
    }

    setLoading(false);
    setRefreshing(false);
  }, [supabase]);

  useEffect(() => {
    loadEnquiries();
  }, [loadEnquiries]);

  const counts = useMemo(() => ({
    total: enquiries.length,
    new: enquiries.filter((item) => item.status === "new").length,
    contacted: enquiries.filter((item) => item.status === "contacted").length,
    resolved: enquiries.filter((item) => item.status === "resolved").length,
  }), [enquiries]);

  const filteredEnquiries = useMemo(() => {
    const term = search.trim().toLowerCase();

    return enquiries.filter((item) => {
      const matchesFilter = filter === "all" || item.status === filter;

      const matchesSearch =
        !term ||
        item.full_name?.toLowerCase().includes(term) ||
        item.phone?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.subject?.toLowerCase().includes(term) ||
        item.message?.toLowerCase().includes(term);

      return matchesFilter && matchesSearch;
    });
  }, [enquiries, search, filter]);

  async function updateStatus(id: string, status: EnquiryStatus) {
    setUpdatingId(id);
    setError("");

    const { error } = await supabase
      .from("enquiries")
      .update({ status })
      .eq("id", id);

    if (error) {
      setError("Could not update enquiry status.");
      console.error("Enquiry update error:", error.message);
    } else {
      setEnquiries((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status } : item
        )
      );

      setSelected((prev) =>
        prev?.id === id ? { ...prev, status } : prev
      );
    }

    setUpdatingId(null);
  }

  async function deleteEnquiry(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this enquiry? This action cannot be undone."
    );

    if (!confirmed) return;

    setDeletingId(id);
    setError("");

    const { error } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", id);

    if (error) {
      setError("Could not delete this enquiry.");
      console.error("Enquiry delete error:", error.message);
    } else {
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
      setSelected((prev) => (prev?.id === id ? null : prev));
    }

    setDeletingId(null);
  }

  const statCards = [
    {
      label: "Total Enquiries",
      value: counts.total,
      icon: Inbox,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
    },
    {
      label: "New",
      value: counts.new,
      icon: CircleDot,
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
    },
    {
      label: "Contacted",
      value: counts.contacted,
      icon: Clock3,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      label: "Resolved",
      value: counts.resolved,
      icon: CheckCircle2,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <div className="min-w-0 space-y-5 pb-8">
      {/* Page heading */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0891B2]">
            Communication
          </p>
          <h1 className="text-2xl font-black tracking-tight text-[#102B3C] sm:text-3xl">
            Enquiries
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage enquiries and keep track of conversations.
          </p>
        </div>

        <button
          onClick={() => loadEnquiries(true)}
          disabled={refreshing || loading}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
        >
          <RefreshCw
            size={15}
            className={refreshing ? "animate-spin" : ""}
          />
          Refresh
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.iconBg} ${stat.iconColor}`}
                >
                  <Icon size={16} />
                </div>
              </div>

              <p className="mt-2 text-2xl font-black tracking-tight text-[#102B3C] sm:text-3xl">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main panel */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {/* Search and filters */}
        <div className="space-y-3 border-b border-slate-100 p-3.5 sm:p-4">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, email or message..."
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-9 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0891B2] focus:bg-white focus:ring-2 focus:ring-[#0891B2]/10"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-0.5">
            {filters.map((item) => {
              const count =
                item === "all"
                  ? counts.total
                  : counts[item as EnquiryStatus];

              return (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold capitalize transition ${
                    filter === item
                      ? "bg-[#102B3C] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item === "all" ? "All" : item}
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] ${
                      filter === item
                        ? "bg-white/15 text-white"
                        : "bg-white text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mx-3 mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 sm:mx-4">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[220px] flex-col items-center justify-center gap-3">
            <Loader2 size={24} className="animate-spin text-[#0891B2]" />
            <p className="text-sm text-slate-500">Loading enquiries...</p>
          </div>
        ) : filteredEnquiries.length === 0 ? (
          /* Empty state */
          <div className="flex min-h-[230px] flex-col items-center justify-center px-5 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <MessageSquare size={22} />
            </div>

            <h3 className="text-sm font-bold text-slate-800">
              {search || filter !== "all"
                ? "No enquiries found"
                : "No enquiries yet"}
            </h3>

            <p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">
              {search || filter !== "all"
                ? "Try adjusting your search or filter."
                : "Website enquiries will appear here as soon as someone contacts the academy."}
            </p>
          </div>
        ) : (
          /* Enquiry list */
          <div className="divide-y divide-slate-100">
            {filteredEnquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                className="p-3.5 transition hover:bg-slate-50/70 sm:p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <button
                    onClick={() => setSelected(enquiry)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-sm font-bold text-[#102B3C]">
                        {enquiry.full_name}
                      </h3>
                      <StatusBadge status={enquiry.status} />
                    </div>

                    <p className="mt-1 truncate text-xs font-medium text-slate-500">
                      {enquiry.subject || "General enquiry"}
                    </p>
                  </button>

                  <button
                    onClick={() => deleteEnquiry(enquiry.id)}
                    disabled={deletingId === enquiry.id}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                    title="Delete enquiry"
                    aria-label="Delete enquiry"
                  >
                    {deletingId === enquiry.id ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : (
                      <Trash2 size={15} />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => setSelected(enquiry)}
                  className="mt-2 block w-full text-left"
                >
                  <p className="line-clamp-2 text-xs leading-5 text-slate-600">
                    {enquiry.message}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Phone size={11} />
                      {enquiry.phone}
                    </span>

                    {enquiry.email && (
                      <span className="inline-flex min-w-0 items-center gap-1">
                        <Mail size={11} />
                        <span className="truncate">{enquiry.email}</span>
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={11} />
                      {formatDate(enquiry.created_at)}
                    </span>
                  </div>
                </button>

                {/* Quick status update */}
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Update status
                  </span>

                  <select
                    value={enquiry.status}
                    disabled={updatingId === enquiry.id}
                    onChange={(e) =>
                      updateStatus(enquiry.id, e.target.value as EnquiryStatus)
                    }
                    className="max-w-[150px] rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-700 outline-none focus:border-[#0891B2] disabled:opacity-50"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {!loading && filteredEnquiries.length > 0 && (
          <div className="border-t border-slate-100 bg-slate-50 px-3.5 py-3 sm:px-4">
            <p className="text-xs text-slate-500">
              Showing {filteredEnquiries.length} of {enquiries.length} enquiries
            </p>
          </div>
        )}
      </div>

      {/* Enquiry detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071B2A]/65 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between border-b border-slate-100 p-4 sm:p-5">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0891B2]">
                  Enquiry Details
                </p>
                <h2 className="mt-1 text-lg font-black text-[#102B3C]">
                  {selected.full_name}
                </h2>
                <div className="mt-2">
                  <StatusBadge status={selected.status} />
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal body */}
            <div className="space-y-4 p-4 sm:p-5">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <a
                  href={`https://wa.me/${cleanPhone(selected.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#E9F8F2] px-3 py-2.5 text-xs font-bold text-[#16804A] transition hover:bg-[#D8F2E5]"
                >
                  <Phone size={15} />
                  WhatsApp
                  <ExternalLink size={12} />
                </a>

                <a
                  href={`tel:${selected.phone}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200"
                >
                  <Phone size={15} />
                  Call
                </a>

                {selected.email && (
                  <a
                    href={`mailto:${selected.email}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-sky-50 px-3 py-2.5 text-xs font-bold text-sky-700 transition hover:bg-sky-100 sm:col-span-2"
                  >
                    <Mail size={15} />
                    Send Email
                  </a>
                )}
              </div>

              <div className="space-y-3 rounded-xl bg-slate-50 p-3.5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selected.phone}
                  </p>
                </div>

                {selected.email && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                      {selected.email}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Subject
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selected.subject || "General enquiry"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Received
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatDate(selected.created_at)}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Message
                </p>
                <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                  <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {selected.message}
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Enquiry Status
                </label>

                <select
                  value={selected.status}
                  disabled={updatingId === selected.id}
                  onChange={(e) =>
                    updateStatus(selected.id, e.target.value as EnquiryStatus)
                  }
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 outline-none focus:border-[#0891B2] disabled:opacity-50"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>

              <button
                onClick={() => deleteEnquiry(selected.id)}
                disabled={deletingId === selected.id}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
              >
                <Trash2 size={14} />
                Delete Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
