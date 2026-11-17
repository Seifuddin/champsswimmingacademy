
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
    <section className="relative isolate overflow-hidden bg-[#082F49] py-12 sm:py-14 lg:py-16">

      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/programmes/butterfly.avif')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031D2D]/95 via-[#031D2D]/90 to-[#031D2D]/75" />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-36 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-10 -top-24 h-60 w-60 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#22B8C7]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto] lg:gap-12">

          {/* Content */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <Waves size={14} className="text-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
                Your Journey Starts Here
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Every Champion Starts
              <span className="text-[#22B8C7]"> Somewhere.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              Whether you're taking your first steps into the water or
              pursuing higher swimming goals, your journey deserves the
              right guidance. Let's begin.
            </p>

            {/* Benefits */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#22B8C7]"
                  />
                  <span className="text-xs font-medium text-white/90 sm:text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2.5 sm:flex-row lg:min-w-[210px] lg:flex-col">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#22B8C7] px-6 py-3 text-center text-xs font-extrabold text-[#031D2D] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A7F1F2] sm:text-sm"
            >
              Enquire About Enrolment
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15 sm:text-sm"
            >
              Explore Programmes
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
