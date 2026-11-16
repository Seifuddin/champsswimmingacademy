
import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Quote,
  Heart,
} from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#F7FBFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Introduction */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#22B8C7]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                The Champs Community
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              Every Swimming Journey
              <span className="block text-[#087EAB]">
                Has a Story.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
              From first experiences in the water to the pursuit of
              competitive goals, every learner has a journey worth
              celebrating.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7FB] text-[#087EAB]">
                <Heart size={21} />
              </div>

              <p className="text-sm font-semibold text-[#082F49]">
                Every learner. Every milestone. Every achievement.
              </p>
            </div>
          </div>

          {/* Testimonial invitation */}
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#082F49] p-8 sm:p-11">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#087EAB]/30 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#7DE5EC]">
                <Quote size={24} />
              </div>

              <p className="mt-8 max-w-lg text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                Your experience could inspire someone else's first step
                into the water.
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                We believe in sharing genuine experiences from our
                swimming community. Speak with our team to learn more
                about the academy and its programmes.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#22B8C7] px-6 py-3.5 text-sm font-bold text-[#052438] transition-all hover:bg-white"
              >
                Talk to Our Team
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
