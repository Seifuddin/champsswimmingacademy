
import Link from "next/link";
import {
  ArrowUpRight,
  Waves,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  "Programmes for all ages",
  "Qualified swimming instructors",
  "Beginner to competitive development",
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#087EAB] py-20 sm:py-24">

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#22B8C7]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <Waves size={16} className="text-[#A7F1F2]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Your Journey Starts Here
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every Champion
              <span className="block text-[#A7F1F2]">
                Starts Somewhere.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Whether you're taking your first steps into the water or
              pursuing higher swimming goals, your journey deserves the
              right guidance. Let's begin.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="shrink-0 text-[#A7F1F2]" />
                  <span className="text-xs font-semibold text-white/90 sm:text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="group inline-flex min-w-[205px] items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#082F49] shadow-xl transition-all hover:-translate-y-1 hover:bg-[#EAF7FB]"
            >
              Enquire About Enrolment
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore Programmes
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
