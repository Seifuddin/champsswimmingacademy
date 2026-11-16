
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Waves,
} from "lucide-react";

const highlights = [
  "Professional swimming instruction",
  "Programmes for all ages and skill levels",
  "A journey built around your progress",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-14 lg:px-10 lg:py-20">

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#22B8C7]/30 bg-[#EAF7FB] px-4 py-2">
            <Waves size={15} className="text-[#087EAB]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#087EAB]">
              Where Champions Begin
            </span>
          </div>

          <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-5xl lg:text-[3.65rem]">
            Discover the
            <span className="block text-[#087EAB]">
              Champion
            </span>
            Within You.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Every great swimmer starts somewhere. Whether you're introducing
            your child to the water, learning to swim for the first time or
            developing advanced swimming skills, we're here to guide your
            journey.
          </p>

          {/* Highlights */}
          <div className="mt-7 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#22B8C7]"
                />
                <span className="text-sm font-medium text-[#19394B]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#087EAB] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#087EAB]/15 transition-all hover:-translate-y-0.5 hover:bg-[#082F49]"
            >
              Start Your Swimming Journey
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-4 text-sm font-bold text-[#082F49] transition-colors hover:border-[#22B8C7] hover:bg-[#EAF7FB]"
            >
              Explore Programmes
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Audience */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-6">
            <div>
              <p className="text-sm font-extrabold text-[#082F49]">All Ages</p>
              <p className="mt-1 text-xs text-slate-500">Children & Adults</p>
            </div>

            <div className="h-9 w-px bg-slate-200" />

            <div>
              <p className="text-sm font-extrabold text-[#082F49]">All Levels</p>
              <p className="mt-1 text-xs text-slate-500">Beginner to Advanced</p>
            </div>

            <div className="h-9 w-px bg-slate-200" />

            <div>
              <p className="text-sm font-extrabold text-[#082F49]">Professional</p>
              <p className="mt-1 text-xs text-slate-500">Guided Instruction</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[#22B8C7]/15 blur-3xl" />

          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] bg-[#082F49] shadow-2xl shadow-[#082F49]/15">
            <Image
              src="/images/hero-swimming.jpg"
              alt="Swimmer training in a swimming pool"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#052438]/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                Every Stroke Matters
              </p>
              <h2 className="mt-2 max-w-sm text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Building confidence. Creating possibilities.
              </h2>
            </div>
          </div>

          {/* Floating Information */}
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-7 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7FB]">
                <Waves size={23} className="text-[#087EAB]" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#082F49]">
                  Your Journey Starts Here
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Learn. Improve. Achieve.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
