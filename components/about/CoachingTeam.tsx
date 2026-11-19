
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CoachingTeam() {
  return (
    <section className="bg-white py-9 sm:py-11 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                The People Behind Champs
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-black leading-[1.1] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              Great Coaching.
              <span className="text-[#087EAB]"> Lasting Confidence.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500 sm:pb-1">
            Every swimmer deserves guidance, encouragement and
            someone who believes in their potential.
          </p>
        </div>

        {/* Main composition */}
        <div className="grid overflow-hidden border border-slate-200 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Image */}
          <div className="relative min-h-[250px] sm:min-h-[350px] lg:min-h-[380px]">
            <Image
              src="/images/swimmers.jpg"
              alt="Champs Swimming Academy swimmers and coaching team"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2 sm:bottom-7 sm:left-7">
              <span className="h-2 w-2 rounded-full bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                The Champs Community
              </span>
            </div>
          </div>

          {/* Text panel */}
          <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
                Beyond the Lessons
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#082F49] sm:text-3xl">
                It's not just about teaching strokes.
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-500">
                <p>
                  It's about understanding every learner, recognising
                  their challenges and celebrating the moments they
                  accomplish something new.
                </p>

                <p>
                  Through patience, clear instruction and
                  encouragement, we make the journey to becoming
                  a confident swimmer a rewarding experience.
                </p>
              </div>
            </div>

            {/* Link */}
            <Link
              href="/contact"
              className="group mt-6 inline-flex w-fit items-center gap-2 border-b border-[#087EAB]/30 pb-2 text-sm font-bold text-[#087EAB] transition-colors hover:border-[#22B8C7] hover:text-[#22B8C7]"
            >
              Get to Know Champs
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-[#082F49]">
            Every achievement starts with the right encouragement.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            <span>Learn</span>
            <span className="text-[#22B8C7]">/</span>
            <span>Encourage</span>
            <span className="text-[#22B8C7]">/</span>
            <span>Achieve</span>
          </div>
        </div>

      </div>
    </section>
  );
}
