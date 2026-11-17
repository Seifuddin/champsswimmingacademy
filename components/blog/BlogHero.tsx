
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Waves,
} from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#102b40] text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/blog/hero.jpg"
          alt="Swimmer training in a swimming pool"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081c2b]/95 via-[#102b40]/85 to-[#102b40]/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081c2b]/60 via-transparent to-transparent" />

      {/* Decorative detail */}
      <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-80 w-80 rounded-full border border-white/10 sm:h-[440px] sm:w-[440px]" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sky-300 backdrop-blur-sm">
              <Waves size={19} />
            </span>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-sky-300 sm:text-xs">
                Champs Swimming Academy
              </p>
              <p className="mt-0.5 text-xs text-white/65">
                Knowledge for every swimmer
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[62px]">
            The Champs
            <span className="block text-sky-300">Swimming Journal.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Explore practical swimming advice, water safety insights,
            beginner guides and training knowledge to help you grow
            with confidence in the water.
          </p>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#articles"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
            >
              Explore Articles
              <ArrowDown size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Learn to Swim
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Editorial marker */}
          <div className="mt-9 flex items-center gap-3 border-t border-white/15 pt-5">
            <BookOpen size={16} className="text-sky-300" />
            <p className="text-xs font-medium tracking-wide text-white/65 sm:text-sm">
              Swimming Basics <span className="mx-2 text-white/30">/</span>
              Water Safety <span className="mx-2 text-white/30">/</span>
              Training & Technique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
