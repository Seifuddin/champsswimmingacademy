
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Waves,
  Activity,
  Gauge,
  Trophy,
} from "lucide-react";

const programmes = [
  {
    number: "01",
    title: "Baby & Toddler Swimming",
    level: "EARLY WATER EXPERIENCE",
    description:
      "Gentle, age-appropriate water experiences that introduce little ones to the aquatic environment.",
    icon: Baby,
    featured: false,
  },
  {
    number: "02",
    title: "Beginner Swimming",
    level: "START YOUR JOURNEY",
    description:
      "Build water confidence and learn essential swimming fundamentals, including floating, breathing and movement.",
    icon: Waves,
    featured: true,
  },
  {
    number: "03",
    title: "Intermediate Swimming",
    level: "BUILD YOUR SKILLS",
    description:
      "Improve swimming technique, coordination and endurance while developing greater independence in the water.",
    icon: Activity,
    featured: false,
  },
  {
    number: "04",
    title: "Advanced Swimming",
    level: "REFINE YOUR TECHNIQUE",
    description:
      "Develop stronger technique, improve efficiency and refine your swimming abilities through focused instruction.",
    icon: Gauge,
    featured: false,
  },
  {
    number: "05",
    title: "Competitive Swimming",
    level: "PURSUUE EXCELLENCE",
    description:
      "For swimmers interested in developing their performance, competitive skills and potential in the sport.",
    icon: Trophy,
    featured: false,
  },
];

export default function ProgrammesSection() {
  return (
    <section className="bg-[#EAF7FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#22B8C7]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Our Programmes
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              A Swimming Journey
              <span className="block text-[#087EAB]">
                For Every Ability.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              From first experiences in the water to advanced skill
              development, discover a programme that matches your swimming
              journey.
            </p>
          </div>

          <Link
            href="/programmes"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#087EAB]/30 pb-2 text-sm font-bold text-[#087EAB] transition-colors hover:border-[#082F49] hover:text-[#082F49]"
          >
            View All Programmes
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Programme Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {programmes.map((programme) => {
            const Icon = programme.icon;

            return (
              <Link
                key={programme.number}
                href="/programmes"
                className={`group relative flex min-h-[275px] flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#082F49]/10 sm:p-7 lg:col-span-2 ${
                  programme.featured
                    ? "border-[#087EAB] bg-[#082F49] text-white"
                    : "border-white bg-white text-[#082F49]"
                } ${
                  programme.number === "04"
                    ? "lg:col-start-2"
                    : ""
                }`}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      programme.featured
                        ? "bg-white/10 text-[#7DE5EC]"
                        : "bg-[#EAF7FB] text-[#087EAB]"
                    }`}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <span
                    className={`text-xs font-bold tracking-widest ${
                      programme.featured
                        ? "text-white/40"
                        : "text-slate-300"
                    }`}
                  >
                    {programme.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mt-8">
                  <p
                    className={`text-[10px] font-bold tracking-[0.16em] ${
                      programme.featured
                        ? "text-[#7DE5EC]"
                        : "text-[#087EAB]"
                    }`}
                  >
                    {programme.level}
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold leading-snug">
                    {programme.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-7 ${
                      programme.featured
                        ? "text-slate-300"
                        : "text-slate-500"
                    }`}
                  >
                    {programme.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div
                  className={`mt-auto flex items-center justify-between border-t pt-5 ${
                    programme.featured
                      ? "border-white/15"
                      : "border-slate-100"
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${
                      programme.featured
                        ? "text-white"
                        : "text-[#087EAB]"
                    }`}
                  >
                    Explore Programme
                  </span>

                  <ArrowRight
                    size={17}
                    className={`transition-transform group-hover:translate-x-1 ${
                      programme.featured
                        ? "text-[#7DE5EC]"
                        : "text-[#087EAB]"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#087EAB]/10 bg-white/70 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h3 className="font-bold text-[#082F49]">
              Not sure where to begin?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Talk to our team and find a suitable programme for your goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#087EAB] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#082F49]"
          >
            Enquire Now
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
