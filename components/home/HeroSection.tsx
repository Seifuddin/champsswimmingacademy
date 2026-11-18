
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Swimmers training in a swimming pool"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle image overlay */}
      <div className="absolute inset-0 -z-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[490px] w-full max-w-7xl flex-col justify-center px-5 py-12 sm:min-h-[510px] sm:px-8 sm:py-14 lg:min-h-[550px] lg:px-10 lg:py-16">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
            <Waves
              size={19}
              className="shrink-0 text-[#55D2DE]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-xs sm:tracking-[0.24em]">
              Champs Swimming Academy
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[2.45rem] font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Discover the
            <span className="block text-[#55D2DE]">
              Champion Within You.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            From first strokes to confident swimming, we provide
            professional, personalised lessons that help children
            and adults build skills, overcome challenges and
            discover their potential in the water.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:mt-7">

            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg[#087EAB] px-5 py-2.5 text-xs font-bold text-white transition-colors duration-300 hover: bg-[#22B8C7] hover:text-[#052438] sm:text-sm"
            >
              Start Your Journey
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/programmes"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-xs font-bold text-white transition-colors duration-300 hover: bg-white/70 hover:text-[#052438] sm:text-sm"
            >
              Explore Programmes
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Supporting Statement */}
          <div className="mt-6 flex items-center gap-3 sm:mt-7">
            <span className="h-px w-8 bg-[#55D2DE]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-[10px]">
              Where Champions Begin
            </p>
          </div>

        </div>

        {/* Supporting Information */}
        <div className="mt-8 grid max-w-2xl grid-cols-3 border-t border-white/30 pt-4 sm:mt-10 sm:pt-5">

          <div className="pr-2">
            <p className="text-sm font-extrabold text-white sm:text-base">
              All Ages
            </p>
            <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-xs">
              Children & Adults
            </p>
          </div>

          <div className="border-l border-white/30 px-3 sm:px-5">
            <p className="text-sm font-extrabold text-white sm:text-base">
              All Levels
            </p>
            <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-xs">
              Beginner to Advanced
            </p>
          </div>

          <div className="border-l border-white/30 pl-3 sm:pl-5">
            <p className="text-sm font-extrabold text-white sm:text-base">
              Personalised
            </p>
            <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-xs">
              Guided Instruction
            </p>
          </div>

        </div>

      </div>

      {/* Small bottom accent */}
      <div className="absolute bottom-0 left-0 z-20 h-[3px] w-32 bg-[#22B8C7]" />

    </section>
  );
}
