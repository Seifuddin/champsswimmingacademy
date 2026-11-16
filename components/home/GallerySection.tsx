
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Images,
  Waves,
} from "lucide-react";

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
    <section className="overflow-hidden bg-[#052438] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#22B8C7]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                Life at Champs
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Where Every
              <span className="block text-[#7DE5EC]">
                Journey Takes Shape.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              A glimpse into our swimming environment, coaching activities
              and the experiences that make every swimming journey unique.
            </p>
          </div>

          <Link
            href="/facilities"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#7DE5EC] transition-colors hover:text-white"
          >
            Explore Our Facilities
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Editorial Gallery */}
        <div className="grid auto-rows-[210px] gap-4 sm:grid-cols-2 md:auto-rows-[230px] md:grid-cols-4">

          {gallery.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl bg-[#087EAB]/20 ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052438]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7DE5EC]">
                    Champs Swimming Academy
                  </span>

                  <h3 className="mt-2 text-base font-extrabold text-white sm:text-lg">
                    {item.label}
                  </h3>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all group-hover:bg-[#087EAB]">
                  <Images size={16} />
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Waves size={20} className="text-[#7DE5EC]" />
            <p className="text-sm text-slate-300">
              Real moments. Real learning. Every step of the way.
            </p>
          </div>

          <Link
            href="/contact"
            className="text-sm font-bold text-[#7DE5EC] transition-colors hover:text-white"
          >
            Visit or enquire about our training environment →
          </Link>
        </div>

      </div>
    </section>
  );
}
