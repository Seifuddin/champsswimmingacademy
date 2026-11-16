
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Waves } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#052438] sm:min-h-[660px] lg:min-h-[680px]">

      {/* Background photograph */}
      <Image
        src="/images/hero.jpg"
        alt="Swimmers training in a swimming pool"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#031D2D]/45 via-[#052438]/45 to-[#052438]/20" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-[#031D2D]/45 via-transparent to-[#031D2D]/15" />

      {/* Aquatic accent */}
      <div className="absolute bottom-0 left-0 right-0 -z-0 h-[3px] bg-gradient-to-r from-[#087EAB] via-[#22B8C7] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#7DE5EC]/40 bg-white/10 text-[#7DE5EC] backdrop-blur-sm">
              <Waves size={17} />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DE5EC] sm:text-xs sm:tracking-[0.24em]">
              Champs Swimming Academy
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[2.75rem] font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
            Discover the
            <span className="block text-[#55D2DE]">
              Champion Within You.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/85 sm:mt-6 sm:text-lg sm:leading-8">
            From first strokes to confident swimming, we provide
            professional, personalised lessons that help children
            and adults build skills, overcome challenges and
            discover their potential in the water.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-start gap-3 min-[420px]:flex-row sm:mt-8">

            <Link
              href="/contact"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full bg-[#087EAB] px-5 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#22B8C7] hover:text-[#052438] min-[420px]:w-auto sm:px-6 sm:text-sm"
            >
              Start Your Journey
              <ArrowUpRight
                size={17}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/programmes"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 min-[420px]:w-auto sm:px-6 sm:text-sm"
            >
              Explore Programmes
              <ArrowRight
                size={16}
                className="shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Supporting statement */}
          <div className="mt-8 flex items-center gap-3 sm:mt-10">
            <span className="h-px w-9 bg-[#22B8C7]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.18em]">
              Where Champions Begin
            </p>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-10 grid max-w-3xl grid-cols-3 border-t border-white/20 pt-5 sm:mt-14 sm:pt-7">

          <div className="pr-2 sm:pr-3">
            <p className="text-base font-extrabold text-white sm:text-lg">
              All Ages
            </p>
            <p className="mt-1 text-[10px] leading-4 text-white/70 sm:text-xs">
              Children & Adults
            </p>
          </div>

          <div className="border-l border-white/20 px-3 sm:px-6">
            <p className="text-base font-extrabold text-white sm:text-lg">
              All Levels
            </p>
            <p className="mt-1 text-[10px] leading-4 text-white/70 sm:text-xs">
              Beginner to Advanced
            </p>
          </div>

          <div className="border-l border-white/20 pl-3 sm:pl-6">
            <p className="text-base font-extrabold text-white sm:text-lg">
              Personalised
            </p>
            <p className="mt-1 text-[10px] leading-4 text-white/70 sm:text-xs">
              Guided Instruction
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
