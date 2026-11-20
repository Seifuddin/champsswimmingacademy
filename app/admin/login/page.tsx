
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Waves,
  ShieldCheck,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (authError) {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
        return;
      }

      const user = authData.user;

      if (!user) {
        setError("We couldn't verify your account. Please try again.");
        await supabase.auth.signOut();
        setLoading(false);
        return;
      }

      // Verify that the authenticated user has an active admin profile.
      const { data: profile, error: profileError } = await supabase
        .from("admin_profiles")
        .select("id, full_name, role, is_active")
        .eq("id", user.id)
        .maybeSingle();

      if (
        profileError ||
        !profile ||
        !profile.is_active ||
        !["admin", "editor"].includes(profile.role)
      ) {
        await supabase.auth.signOut();

        setError(
          "This account is not authorized to access the administration portal."
        );

        setLoading(false);
        return;
      }

      // Login successful.
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#f4f7fb]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid w-full max-w-[1100px] overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_30px_100px_rgba(15,35,65,0.10)] lg:min-h-[650px] lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT PANEL */}
          <section className="relative hidden overflow-hidden bg-[#082b49] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-36 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Brand */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Waves className="h-6 w-6 text-cyan-300" />
              </div>

              <div>
                <p className="text-lg font-bold tracking-[0.12em]">
                  CHAMPS
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-200">
                  Swimming Academy
                </p>
              </div>
            </div>

            {/* Main message */}
            <div className="relative z-10 my-16 max-w-md">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Administration Portal
              </span>

              <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight xl:text-5xl">
                Manage the academy.
                <span className="mt-2 block text-cyan-300">
                  Inspire every swimmer.
                </span>
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/70">
                Your central space to manage academy activities, share moments,
                publish stories, and stay connected with your swimming community.
              </p>

              {/* Decorative swimming lines */}
              <div className="mt-12 space-y-3 opacity-50">
                <div className="h-px w-full bg-gradient-to-r from-cyan-300/60 to-transparent" />
                <div className="h-px w-4/5 bg-gradient-to-r from-blue-300/40 to-transparent" />
                <div className="h-px w-3/5 bg-gradient-to-r from-cyan-300/30 to-transparent" />
              </div>
            </div>

            {/* Bottom note */}
            <div className="relative z-10 flex items-center gap-3 text-xs text-blue-100/60">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Secure access for authorized academy personnel
            </div>
          </section>

          {/* RIGHT PANEL */}
          <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
            <div className="w-full max-w-[420px]">
              {/* Mobile brand */}
              <div className="mb-10 flex items-center gap-3 lg:hidden">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#082b49]">
                  <Waves className="h-5 w-5 text-cyan-300" />
                </div>

                <div>
                  <p className="text-base font-bold tracking-[0.12em] text-[#082b49]">
                    CHAMPS
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Swimming Academy
                  </p>
                </div>
              </div>

              {/* Form heading */}
              <div className="mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0b4168]">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1683b7]">
                  Welcome back
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-[#102d46] sm:text-[34px]">
                  Admin sign in
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Sign in to access your academy management dashboard.
                </p>
              </div>

              {/* Login form */}
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@example.com"
                      disabled={loading}
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1683b7] focus:bg-white focus:ring-4 focus:ring-blue-100 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      disabled={loading}
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1683b7] focus:bg-white focus:ring-4 focus:ring-blue-100 disabled:opacity-60"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      disabled={loading}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-[18px] w-[18px]" />
                      ) : (
                        <Eye className="h-[18px] w-[18px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
                  >
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#0b4168] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition hover:bg-[#0d527f] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing you in...
                    </>
                  ) : (
                    <>
                      Sign in to dashboard
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Security note */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1683b7]" />

                <p className="text-xs leading-5 text-slate-500">
                  This portal is restricted to authorized Champs Swimming Academy
                  administrators and staff.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-10 border-t border-slate-100 pt-5 text-center">
                <p className="text-[11px] text-white/45">
            © 2026 Champs Swimming Academy. All rights reserved.
          </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Secure administration portal
                </p>
                     </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}