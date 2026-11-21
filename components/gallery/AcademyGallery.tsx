
"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Expand,
  Images,
} from "lucide-react";

import type { GalleryImage } from "@/lib/gallery/getGalleryImages";

type AcademyGalleryProps = {
  images: GalleryImage[];
  title?: string;
  description?: string;
};

export default function AcademyGallery({
  images = [],
  title = "Life in the Water",
  description = "Moments of learning, confidence, progress and joy at Champs Swimming Academy.",
}: AcademyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );
  }, [images.length]);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, closeModal, showNext, showPrevious]);

  if (!images.length) {
    return (
      <section className="bg-[#F7FAFC] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Images className="mx-auto mb-4 text-[#087EAB]" size={36} />

          <h2 className="text-2xl font-bold text-[#082F49]">
            {title}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Our gallery moments are coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22B8C7]" />
              <span>Our Gallery</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#082F49] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              {description}
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-[#DCE8EF] bg-white px-4 py-2 text-xs font-semibold text-[#082F49] sm:flex">
            <Images size={15} className="text-[#087EAB]" />
            <span>{images.length} Moments Captured</span>
          </div>
        </div>

        {/* MASONRY GALLERY */}
        <div className="columns-2 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image ${index + 1}: ${image.alt}`}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-[#E2EAF0] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:mb-4"
            >
              {/* IMAGE */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.035]"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#061D2C]/90 via-[#061D2C]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-end justify-between gap-2 p-3 sm:p-4">
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#22B8C7]">
                      Champs Swimming Academy
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-white sm:text-sm">
                      {image.caption || image.alt}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Expand size={14} />
                  </span>
                </div>
              </div>

              {/* IMAGE NUMBER */}
              <div className="absolute left-2 top-2 rounded-md bg-[#082F49]/80 px-2 py-1 text-[9px] font-bold tracking-wider text-white backdrop-blur-sm sm:left-3 sm:top-3">
                {String(index + 1).padStart(2, "0")}
              </div>
            </button>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-5 flex items-center justify-between border-t border-[#DDE8EF] pt-4">
          <p className="text-xs text-slate-500">
            Every moment in the water is a step towards confidence.
          </p>

          <span className="hidden text-[10px] font-bold uppercase tracking-widest text-[#087EAB] sm:block">
            Learn · Grow · Swim
          </span>
        </div>
      </div>

      {/* LIGHTBOX / MODAL */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#041521]/95 p-3 backdrop-blur-md sm:p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>

          {/* PREVIOUS BUTTON */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-[110] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {/* IMAGE CONTENT */}
          <div
            className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <img
                key={images[activeIndex].src}
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* CAPTION */}
            <div className="mt-4 flex w-full max-w-3xl items-center justify-between gap-4 px-2">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22B8C7]">
                  Champs Swimming Academy
                </p>

                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  {images[activeIndex].caption || images[activeIndex].alt}
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* NEXT BUTTON */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-[110] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
            >
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
