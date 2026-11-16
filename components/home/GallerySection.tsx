
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Images, Waves } from "lucide-react";

const gallery = [
  {
    src: "/images/images.jpeg",
    alt: "Swimming pool and training environment",
    label: "The Environment",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/coach.webp",
    alt: "Swimming coaching session",
    label: "Professional Guidance",
    className: "",
  },
  {
    src: "/images/sessions.jpeg",
    alt: "Swimming training session",
    label: "Learning in Action",
    className: "",
  },
  {
    src: "/images/swimmers.webp",
    alt: "Swimmers developing their abilities",
    label: "Every Stage Matters",
    className: "md:col-span-2",
  },
];

export default function GallerySection() {
  return (
    <section className="overflow-hidden bg-[#052438] py-12 text-white sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
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

        {/* Editorial Gallery */}
        <div className="grid auto-rows-[155px] gap-3 sm:auto-rows-[175px] sm:grid-cols-2 md:auto-rows-[175px] md:grid-cols-4">

          {gallery.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-xl bg-[#087EAB]/20 ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052438]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                <div className="min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7DE5EC]">
                    Champs Swimming Academy
                  </span>

                  <h3 className="mt-1 text-sm font-extrabold text-white sm:text-base">
                    {item.label}
                  </h3>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all group-hover:bg-[#087EAB]">
                  <Images size={14} />
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom strip */}
        <div className="mt-5 flex flex-col justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
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
