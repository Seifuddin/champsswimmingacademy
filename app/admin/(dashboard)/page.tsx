import { createClient } from "@/lib/supabase/server";


export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Champs Swimming Academy
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Welcome to the Admin Dashboard
          </h1>

          <p className="mt-3 text-slate-600">
            Your authentication and protected dashboard are working.
          </p>

          <div className="mt-6 rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Authenticated account</p>

            <p className="mt-1 font-semibold text-slate-900">
              {user?.email ?? "No authenticated user"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}