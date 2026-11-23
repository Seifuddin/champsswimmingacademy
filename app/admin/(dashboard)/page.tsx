import { createClient } from "@/lib/supabase/server";
import AdminOverview from "@/components/admin/AdminOverview";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [
    galleryTotal,
    galleryPublished,
    galleryUnpublished,
    enquiryTotal,
    enquiryNew,
    enquiryContacted,
    enquiryResolved,
    blogPublished,
    blogDrafts,
    blogTrash,
    recentEnquiriesResult,
    authResult,
  ] = await Promise.all([
    // Gallery statistics
    supabase
      .from("gallery_images")
      .select("id", { count: "exact", head: true }),

    supabase
      .from("gallery_images")
      .select("id", { count: "exact", head: true })
      .eq("is_published", true),

    supabase
      .from("gallery_images")
      .select("id", { count: "exact", head: true })
      .eq("is_published", false),

    // Enquiry statistics
    supabase
      .from("enquiries")
      .select("id", { count: "exact", head: true }),

    supabase
      .from("enquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "new"),

    supabase
      .from("enquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "contacted"),

    supabase
      .from("enquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "resolved"),

    // Blog statistics (exclude trashed articles)
    supabase
      .from("blog_posts")
      .select("id", { count: "exact", head: true })
      .eq("status", "published")
      .is("deleted_at", null),

    supabase
      .from("blog_posts")
      .select("id", { count: "exact", head: true })
      .eq("status", "draft")
      .is("deleted_at", null),

    supabase
      .from("blog_posts")
      .select("id", { count: "exact", head: true })
      .not("deleted_at", "is", null),

    // Five most recent enquiries
    supabase
      .from("enquiries")
      .select("id, full_name, subject, status, created_at")
      .order("created_at", { ascending: false })
      .limit(5),

    // Authenticated administrator
    supabase.auth.getUser(),
  ]);

  const user = authResult.data.user;

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("full_name")
    .eq("id", user?.id ?? "")
    .maybeSingle();

  return (
    <AdminOverview
      galleryCount={galleryTotal.count ?? 0}
      galleryPublished={galleryPublished.count ?? 0}
      galleryUnpublished={galleryUnpublished.count ?? 0}
      enquiryCount={enquiryTotal.count ?? 0}
      enquiryNew={enquiryNew.count ?? 0}
      enquiryContacted={enquiryContacted.count ?? 0}
      enquiryResolved={enquiryResolved.count ?? 0}
      blogPublished={blogPublished.count ?? 0}
      blogDrafts={blogDrafts.count ?? 0}
      blogTrash={blogTrash.count ?? 0}
      recentEnquiries={recentEnquiriesResult.data ?? []}
      fullName={profile?.full_name ?? "Administrator"}
    />
  );
}