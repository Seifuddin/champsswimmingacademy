
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UsersRound } from "lucide-react";

export default function CoachingTeam() {
  return (
    <section className="bg-[#F7FAFC] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">

        <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
          <Image
            src="/images/swimmers.jpg"
            alt="Champs Swimming Academy coaching team"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/95 px-4 py-3">
            <UsersRound size={19} className="text-[#087EAB]" />
            <span className="text-xs font-bold text-[#172B3A]">
              Our Coaching Team
            </span>
          </div>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB] sm:text-xs">
            The People Behind the Progress
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172B3A] sm:text-4xl lg:text-5xl">
            Guided by People.
            <span className="block text-[#087EAB]">
              Driven by Progress.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Behind every swimming lesson is the guidance,
            encouragement and support that helps learners
            move forward.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Our coaching approach is centred on clear instruction,
            patience and helping each learner work towards
            their swimming goals.
          </p>

          <div className="mt-6 border-l-2 border-[#22B8C7] pl-4">
            <p className="text-sm font-semibold leading-6 text-[#172B3A]">
              The right guidance can make every step of the
              swimming journey more rewarding.
            </p>
          </div>

          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] hover:text-[#22B8C7]"
          >
            Connect With Our Team
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
