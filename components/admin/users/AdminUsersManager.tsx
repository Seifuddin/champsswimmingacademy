"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  ShieldCheck,
  FilePenLine,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Mail,
  Loader2,
  X,
  Power,
} from "lucide-react";

type CMSUser = {
  id: string;
  full_name: string;
  email: string;
  role: "admin" | "editor";
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

type InviteForm = {
  fullName: string;
  email: string;
  role: "admin" | "editor";
};

type AdminUsersManagerProps = {
  currentUserId: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function RoleBadge({ role }: { role: string }) {
  const isAdmin = role === "admin";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        isAdmin
          ? "bg-violet-50 text-violet-700"
          : "bg-blue-50 text-blue-700"
      }`}
    >
      {isAdmin ? <ShieldCheck size={12} /> : <FilePenLine size={12} />}
      {isAdmin ? "Administrator" : "Editor"}
    </span>
  );
}

function StatusBadge({ active }: { active: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        active
          ? "bg-emerald-50 text-emerald-700"
          : "bg-slate-100 text-slate-500"
      }`}
    >
      {active ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
      {active ? "Active" : "Inactive"}
    </span>
  );
}

function StatCard({
  label,
  value,
  description,
  icon: Icon,
  accent,
}: {
  label: string;
  value: number;
  description: string;
  icon: typeof Users;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-800">
            {value}
          </p>
          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent}`}
        >
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}

export default function AdminUsersManager({
  currentUserId,
}: AdminUsersManagerProps) {
  const [users, setUsers] = useState<CMSUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [showInvite, setShowInvite] = useState(false);

  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);

  const [form, setForm] = useState<InviteForm>({
    fullName: "",
    email: "",
    role: "editor",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchUsers = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      const response = await fetch("/api/admin/users", {
        method: "GET",
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to load users.");
      }

      setUsers(result.users || []);
      setError("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to load CMS users."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return users;

    return users.filter(
      (user) =>
        user.full_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
  }, [users, search]);

  const totalAdmins = users.filter((user) => user.role === "admin").length;
  const totalEditors = users.filter((user) => user.role === "editor").length;
  const activeUsers = users.filter((user) => user.is_active).length;

  function openInvite() {
    setError("");
    setSuccess("");

    setForm({
      fullName: "",
      email: "",
      role: "editor",
    });

    setShowInvite(true);
  }

  function closeInvite() {
    if (submitting) return;
    setShowInvite(false);
  }

  async function handleInvite(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim().toLowerCase(),
          role: form.role,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send invitation.");
      }

      setSuccess(
        `Invitation successfully sent to ${form.email.trim().toLowerCase()}.`
      );

      setShowInvite(false);

      setForm({
        fullName: "",
        email: "",
        role: "editor",
      });

      await fetchUsers(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleUpdateUser(
    user: CMSUser,
    changes: { role?: "admin" | "editor"; is_active?: boolean }
  ) {
    setError("");
    setSuccess("");

    if (user.id === currentUserId) {
      setError("You cannot modify your own account here.");
      return;
    }

    if (
      changes.is_active === false &&
      !window.confirm(`Deactivate ${user.full_name}'s account?`)
    ) {
      return;
    }

    if (
      changes.role &&
      changes.role !== user.role &&
      !window.confirm(
        `Change ${user.full_name}'s role to ${changes.role === "admin" ? "Administrator" : "Editor"}?`
      )
    ) {
      return;
    }

    setUpdatingUserId(user.id);

    try {
      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          ...changes,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to update user.");
      }

      setSuccess(result.message || "User updated successfully.");

      await fetchUsers(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to update user."
      );
    } finally {
      setUpdatingUserId(null);
    }
  }

  function UserActions({ user }: { user: CMSUser }) {
    const isSelf = user.id === currentUserId;
    const isUpdating = updatingUserId === user.id;

    return (
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={user.role}
          disabled={isSelf || isUpdating || updatingUserId !== null}
          onChange={(e) =>
            handleUpdateUser(user, {
              role: e.target.value as "admin" | "editor",
            })
          }
          aria-label={`Change role for ${user.full_name}`}
          className="h-8 rounded-lg border border-slate-200 bg-white px-2 text-[11px] text-slate-700 outline-none focus:border-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>

        <button
          type="button"
          disabled={isSelf || isUpdating || updatingUserId !== null}
          onClick={() =>
            handleUpdateUser(user, {
              is_active: !user.is_active,
            })
          }
          className={`inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-[11px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
            user.is_active
              ? "border border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
              : "border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          }`}
        >
          {isUpdating ? (
            <Loader2 size={12} className="animate-spin" />
          ) : (
            <Power size={12} />
          )}
          {user.is_active ? "Deactivate" : "Activate"}
        </button>

        {isSelf && (
          <span className="text-[10px] text-slate-400">Your account</span>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Page heading */}
      <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
            <Users size={14} />
            Access control
          </div>

          <h1 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Admin Management
          </h1>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Manage academy administrators and content editors.
          </p>
        </div>

        <button
          type="button"
          onClick={openInvite}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b2033] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#16354f]"
        >
          <UserPlus size={15} />
          Invite user
        </button>
      </section>

      {/* Success message */}
      {success && (
        <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
          <p>{success}</p>
        </div>
      )}

      {/* Error message */}
      {error && !showInvite && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          <XCircle size={16} className="mt-0.5 shrink-0" />
          <p>{error}</p>
          <button
            type="button"
            onClick={() => setError("")}
            className="ml-auto"
            aria-label="Dismiss error"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Statistics */}
      <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard
          label="Total users"
          value={users.length}
          description="Registered CMS accounts"
          icon={Users}
          accent="bg-blue-50 text-blue-700"
        />

        <StatCard
          label="Administrators"
          value={totalAdmins}
          description="Full management access"
          icon={ShieldCheck}
          accent="bg-violet-50 text-violet-700"
        />

        <StatCard
          label="Editors"
          value={totalEditors}
          description="Content management access"
          icon={FilePenLine}
          accent="bg-cyan-50 text-cyan-700"
        />

        <StatCard
          label="Active accounts"
          value={activeUsers}
          description="Accounts enabled for access"
          icon={CheckCircle2}
          accent="bg-emerald-50 text-emerald-700"
        />
      </section>

      {/* Users panel */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {/* Toolbar */}
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              CMS accounts
            </h2>
            <p className="mt-0.5 text-[11px] text-slate-500">
              {users.length} registered {users.length === 1 ? "user" : "users"}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative min-w-0 sm:w-64">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email or role..."
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <button
              type="button"
              onClick={() => fetchUsers(true)}
              disabled={refreshing || updatingUserId !== null}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
            >
              <RefreshCw
                size={14}
                className={refreshing ? "animate-spin" : ""}
              />
              Refresh
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 size={24} className="animate-spin text-cyan-600" />
            <p className="mt-3 text-xs text-slate-500">Loading CMS users...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          /* Empty state */
          <div className="px-4 py-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <Users size={22} />
            </div>

            <h3 className="mt-3 text-sm font-semibold text-slate-700">
              {search ? "No users found" : "No CMS accounts"}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {search
                ? "Try searching using a different name, email or role."
                : "Invite an administrator or editor to get started."}
            </p>

            {!search && (
              <button
                type="button"
                onClick={openInvite}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0b2033] px-4 py-2 text-xs font-semibold text-white hover:bg-[#16354f]"
              >
                <UserPlus size={14} />
                Invite first user
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[1000px] text-left">
                <thead className="bg-slate-50">
                  <tr className="border-b border-slate-100">
                    <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      User
                    </th>
                    <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Role
                    </th>
                    <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>
                    <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Date added
                    </th>
                    <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="transition hover:bg-slate-50/70">
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b2033] text-xs font-semibold text-cyan-300">
                            {user.full_name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-slate-800">
                              {user.full_name}
                            </p>
                            <p className="mt-0.5 flex items-center gap-1 truncate text-[11px] text-slate-500">
                              <Mail size={11} />
                              {user.email || "No email available"}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3.5">
                        <RoleBadge role={user.role} />
                      </td>

                      <td className="px-4 py-3.5">
                        <StatusBadge active={user.is_active} />
                      </td>

                      <td className="px-4 py-3.5 text-xs text-slate-500">
                        {formatDate(user.created_at)}
                      </td>

                      <td className="px-4 py-3.5">
                        <UserActions user={user} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile user cards */}
            <div className="divide-y divide-slate-100 md:hidden">
              {filteredUsers.map((user) => (
                <div key={user.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b2033] text-xs font-semibold text-cyan-300">
                      {user.full_name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="break-words text-xs font-semibold text-slate-800">
                        {user.full_name}
                      </p>

                      <p className="mt-1 flex items-start gap-1 break-all text-[11px] text-slate-500">
                        <Mail size={12} className="mt-0.5 shrink-0" />
                        {user.email || "No email available"}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <RoleBadge role={user.role} />
                        <StatusBadge active={user.is_active} />
                      </div>

                      <p className="mt-2 text-[10px] text-slate-400">
                        Added {formatDate(user.created_at)}
                      </p>

                      <div className="mt-3">
                        <UserActions user={user} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Invite modal */}
      {showInvite && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5">
          <div className="my-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal header */}
            <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  <UserPlus size={14} />
                  Account invitation
                </div>

                <h2 className="mt-1.5 text-base font-bold text-slate-900">
                  Invite a CMS user
                </h2>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  Send an email invitation to join the academy management team.
                </p>
              </div>

              <button
                type="button"
                onClick={closeInvite}
                disabled={submitting}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40"
                aria-label="Close invitation form"
              >
                <X size={17} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleInvite} className="space-y-4 p-5">
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-700">
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="invite-fullname"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Full name
                </label>

                <input
                  id="invite-fullname"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  placeholder="Enter full name"
                  className="h-10 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="invite-email"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="invite-email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="name@example.com"
                  className="h-10 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="invite-role"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Account role
                </label>

                <select
                  id="invite-role"
                  value={form.role}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      role: e.target.value as "admin" | "editor",
                    }))
                  }
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value="editor">Editor — Content management</option>
                  <option value="admin">Administrator — Full access</option>
                </select>

                <p className="mt-2 text-[10px] leading-4 text-slate-500">
                  Editors manage website content. Administrators have access to
                  account management and all CMS features.
                </p>
              </div>

              <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeInvite}
                  disabled={submitting}
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b2033] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#16354f] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending invitation...
                    </>
                  ) : (
                    <>
                      <Mail size={14} />
                      Send invitation
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}