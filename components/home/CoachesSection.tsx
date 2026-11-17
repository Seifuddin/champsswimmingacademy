
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Users,
  Waves,
} from "lucide-react";

const coachingPillars = [
  {
    icon: GraduationCap,
    title: "Qualified Instructors",
    description: "Professional swimming guidance.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Learning shaped around individual needs.",
  },
  {
    icon: Waves,
    title: "Confident Progress",
    description: "Building ability and water confidence.",
  },
];

export default function CoachesSection() {
  return (
    <section className="overflow-hidden bg-[#F7FBFC] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[5/3.8] overflow-hidden rounded-2xl bg-[#082F49] sm:rounded-3xl">
              <Image
                src="/images/swimmers.jpg"
                alt="Swimming instruction and coaching session"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052438]/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                  The Champs Approach
                </span>
                <h3 className="mt-2 max-w-sm text-xl font-extrabold leading-tight text-white sm:text-2xl lg:text-[1.8rem]">
                  The right guidance makes every stroke count.
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-3 right-3 flex items-center gap-3 rounded-xl border border-[#E5EEF1] bg-white px-4 py-3 shadow-lg sm:-bottom-4 sm:right-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF7FB] text-[#087EAB]">
                <Waves size={18} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#082F49]">All Ages</p>
                <p className="text-[10px] text-[#647B89]">Children & Adults</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:py-2">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#087EAB]">
                Coaching & Development
              </span>
            </div>

            <h2 className="max-w-xl text-[2rem] font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              Great Guidance.
              <span className="block text-[#087EAB]">
                Stronger Swimmers.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#647B89] sm:text-[15px]">
              Every swimmer learns differently. Our qualified instructors
              provide supportive, personalised guidance to help children
              and adults develop their swimming skills, build confidence
              and make meaningful progress in the water.
            </p>

            {/* Coaching highlights */}
            <div className="hidden mt-6 md:grid gap-4 border-y border-[#DCE9ED] py-5 sm:grid-cols-3 sm:gap-3">
              {coachingPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="flex items-start gap-2.5">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="mt-0.5 shrink-0 text-[#087EAB]"
                    />
                    <div>
                      <h3 className="text-[12px] font-extrabold text-[#082F49]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-5 text-[#647B89]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-5">
              <Link
                href="/coaches"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#082F49] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#087EAB]"
              >
                Meet Our Coaching Team
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#81939D]">
                Where Champions Begin
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
