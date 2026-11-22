import { createClient } from "@/lib/supabase/server";

export type CMSBlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  author: string;
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export async function getPublishedPosts(): Promise<CMSBlogPost[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, content, featured_image, author, status, published_at, created_at, updated_at"
    )
    .eq("status", "published")
    .not("published_at", "is", null)
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching published blog posts:", error.message);
    return [];
  }

  return (data ?? []) as CMSBlogPost[];
}