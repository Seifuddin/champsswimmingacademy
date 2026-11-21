import AcademyGallery from "@/components/gallery/AcademyGallery";
import { getGalleryImages } from "@/lib/gallery/getGalleryImages";

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main>
      <AcademyGallery images={images} />
    </main>
  );
}