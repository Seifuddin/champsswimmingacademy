
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Waves } from "lucide-react";

export default function AboutIntroduction() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">

        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Swimming lesson at the academy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-3 right-3 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:right-5">
            <Waves size={22} className="text-[#087EAB]" />
            <div>
              <p className="text-xs font-bold text-[#172B3A]">
                Learn. Grow. Excel.
              </p>
              <p className="text-[10px] text-slate-500">
                Every stroke matters.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 lg:pt-0">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB] sm:text-xs">
            Who We Are
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172B3A] sm:text-4xl">
            Inspiring Confidence,
            <span className="block text-[#087EAB]">
              One Stroke at a Time.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Champs Swimming Academy is dedicated to helping
            children and adults discover the skills, confidence
            and enjoyment that come with learning to swim.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Through structured instruction and an encouraging
            learning approach, we aim to make swimming education
            a rewarding experience for learners at different
            stages of their journey.
          </p>

          <Link
            href="/programmes"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition hover:text-[#22B8C7]"
          >
            Discover What We Offer
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
