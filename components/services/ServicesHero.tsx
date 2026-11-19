
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#082F49]">

      {/* Background image */}
      <Image
        src="/images/programmes/beginner.jpg"
        alt="Swimming training at Champs Swimming Academy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-[#041E30]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041E30]/95 via-[#082F49]/75 to-[#082F49]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#041E30]/70 via-transparent to-[#041E30]/20" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#22B8C7]/10 blur-[100px]" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/[0.07] lg:block" />
      <div className="pointer-events-none absolute -right-16 top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[470px] max-w-7xl flex-col justify-center px-5 py-16 sm:min-h-[520px] sm:px-8 sm:py-20 lg:min-h-[590px] lg:px-10">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#22B8C7]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#72E0E7] sm:text-xs">
              Champs Swimming Academy
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[2.75rem] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
            More Than Swimming.
            <span className="mt-2 block text-[#43D1DA]">
              A Skill for Life.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Whether you're stepping into the water for the first time,
            helping your child learn to swim, or refining your technique,
            we offer structured training designed to help you grow,
            improve and thrive with confidence.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#our-programmes"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#22B8C7] px-5 py-3.5 text-sm font-bold text-[#082F49] transition-all duration-300 hover:bg-white"
            >
              Explore Programmes
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/[0.06] px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#22B8C7] hover:bg-white/10 hover:text-[#72E0E7]"
            >
              Enquire Now
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Programme categories */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/15 pt-6 sm:mt-12">
            {["Beginners", "Children & Adults", "Skill Development"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#22B8C7]/30 bg-[#22B8C7]/10 text-[#72E0E7]">
                    <Waves size={13} />
                  </span>

                  <span className="text-xs font-semibold text-white/80">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom-right decorative label */}
        <div className="absolute bottom-6 right-5 hidden items-center gap-3 sm:flex lg:right-10">
          <div className="h-px w-10 bg-[#22B8C7]/70" />
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
            Learn · Improve · Thrive
          </span>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#22B8C7] via-[#087EAB] to-transparent" />
    </section>
  );
}
