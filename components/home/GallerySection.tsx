
import Link from "next/link";
import { ArrowUpRight, Images, Waves } from "lucide-react";
import { getGalleryImages } from "@/lib/gallery/getGalleryImages";

export default async function GallerySection() {
  const images = await getGalleryImages();
  const gallery = images.slice(0, 4);

  return (
    <section className="overflow-hidden bg-[#052438] py-10 text-white sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                Life at Champs
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.7rem]">
              Where Every{" "}
              <span className="text-[#7DE5EC]">
                Journey Takes Shape.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-[15px]">
              A glimpse into our swimming environment, coaching activities
              and the experiences that make every swimming journey unique.
            </p>
          </div>

          <Link
            href="/facilities"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-[13px] font-bold text-[#7DE5EC] transition-colors hover:text-white"
          >
            Explore Our Facilities
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* CMS Gallery */}
        {gallery.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative h-[135px] overflow-hidden rounded-xl bg-[#087EAB]/20 sm:h-[165px] lg:h-[190px]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#052438]/90 via-[#052438]/10 to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-1.5 p-2.5 sm:p-3">
                  <div className="min-w-0">
                    <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#7DE5EC] sm:text-[9px]">
                      Champs Swimming Academy
                    </span>

                    <h3 className="mt-1 line-clamp-2 text-[11px] font-extrabold leading-tight text-white sm:text-sm">
                      {item.caption || item.alt}
                    </h3>
                  </div>

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all group-hover:bg-[#087EAB] sm:h-8 sm:w-8">
                    <Images size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[150px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 text-center">
            <p className="text-sm text-slate-400">
              Gallery moments are coming soon.
            </p>
          </div>
        )}

        {/* Bottom strip */}
        <div className="mt-4 flex flex-col justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Waves size={18} className="shrink-0 text-[#7DE5EC]" />
            <p className="text-xs text-slate-300 sm:text-sm">
              Real moments. Real learning. Every step of the way.
            </p>
          </div>

          <Link
            href="/contact"
            className="text-xs font-bold text-[#7DE5EC] transition-colors hover:text-white sm:text-sm"
          >
            Visit or enquire about our training environment →
          </Link>
        </div>

      </div>
    </section>
  );
}
