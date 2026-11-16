
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
    title: "Professional Instruction",
    description: "Qualified swimming instructors guiding learner development.",
  },
  {
    icon: Users,
    title: "Individual Progress",
    description: "Recognising different abilities, learning needs and goals.",
  },
  {
    icon: Waves,
    title: "A Supportive Approach",
    description: "Encouraging confidence and continuous improvement in the water.",
  },
];

export default function CoachesSection() {
  return (
    <section className="overflow-hidden bg-[#F7FBFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Coaching Image */}
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#082F49]">
              <Image
                src="/images/coaching-session.jpg"
                alt="Swimming instruction and coaching session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052438]/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                  Guided by Experience
                </span>

                <h3 className="mt-2 max-w-sm text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Every swimmer deserves the right guidance.
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:-right-5">
              <p className="text-2xl font-black text-[#087EAB]">
                All Ages
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Children & Adults
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-5 lg:pt-0">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#22B8C7]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Meet Our Coaches
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              Great Guidance.
              <span className="block text-[#087EAB]">
                Stronger Swimmers.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Behind every confident swimmer is guidance, encouragement
              and a commitment to improvement. At Champs Swimming Academy,
              our qualified swimming instructors support learners through
              their individual swimming journeys.
            </p>

            <div className="mt-9 space-y-6">
              {coachingPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FB] text-[#087EAB]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#082F49]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/coaches"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#082F49] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#087EAB]"
            >
              Meet Our Coaching Team
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
