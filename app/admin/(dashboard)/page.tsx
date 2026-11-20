import { createClient } from "@/lib/supabase/server";
import AdminOverview from "@/components/admin/AdminOverview";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [
    galleryResult,
    enquiryResult,
    blogResult,
    eventResult,
    profileResult,
  ] = await Promise.all([
    supabase.from("gallery_images").select("*", { count: "exact", head: true }),
    supabase.from("enquiries").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.auth.getUser(),
  ]);

  const user = profileResult.data.user;

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("full_name")
    .eq("id", user?.id ?? "")
    .maybeSingle();

  return (
    <AdminOverview
      galleryCount={galleryResult.count ?? 0}
      enquiryCount={enquiryResult.count ?? 0}
      blogCount={blogResult.count ?? 0}
      eventCount={eventResult.count ?? 0}
      fullName={profile?.full_name ?? "Administrator"}
    />
  );
}