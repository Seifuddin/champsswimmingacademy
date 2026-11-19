
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Waves } from "lucide-react";

export default function AboutIntroduction() {
  return (
    <section className="bg-white py-9 sm:py-11 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-7 lg:grid-cols-[1.05fr_1fr] lg:gap-12">

          {/* Visual side */}
          <div className="relative">
            <div className="group relative h-[260px] overflow-hidden rounded-xl sm:h-[320px] lg:h-[350px]">
              <Image
                src="/images/hero.jpg"
                alt="Swimming lesson at Champs Swimming Academy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Image contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/65 via-transparent to-[#082F49]/10" />

              {/* Image label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-md border border-white/20 bg-[#082F49]/50 px-3 py-2 backdrop-blur-md">
                <Waves size={16} className="text-[#56D1DB]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Learn · Grow · Excel
                </span>
              </div>

              {/* Decorative corner */}
              <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-white/25 bg-white/5 backdrop-blur-sm" />
            </div>

            {/* Image accent */}
            <div className="absolute -bottom-1 -left-1 h-12 w-12 rounded-bl-xl border-b-[3px] border-l-[3px] border-[#22B8C7]" />
          </div>

          {/* Content side */}
          <div>
            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087EAB]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.65rem]">
              Building Confidence.
              <span className="mt-1 block text-[#087EAB]">
                Creating Stronger Swimmers.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#647B89] sm:text-[15px]">
              Champs Swimming Academy helps children and adults
              develop swimming ability, water confidence and a
              lifelong appreciation for swimming.
            </p>

            <p className="mt-2.5 max-w-xl text-sm leading-7 text-[#647B89] sm:text-[15px]">
              Through structured instruction, practical training and
              a supportive learning environment, we help swimmers
              build essential skills and progress at their own pace.
            </p>

            {/* Bottom action */}
            <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-[#E6EEF2] pt-4">
              <Link
                href="/programmes"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
              >
                Explore Our Programmes
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <span className="h-4 w-px bg-[#DCE8ED]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#91A5B0]">
                Swimming for Every Journey
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
