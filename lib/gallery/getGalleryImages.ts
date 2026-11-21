
import { createClient } from "@/lib/supabase/server";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
};

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("gallery_images")
    .select("id, title, caption, image_url, category, display_order")
    .eq("is_published", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch gallery images:", error.message);
    return [];
  }

  return (data ?? []).map((image) => ({
    id: image.id,
    src: image.image_url,
    alt: image.title,
    caption: image.caption || image.title,
    category: image.category || "general",
  }));
}
