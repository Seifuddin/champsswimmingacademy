
import Link from "next/link";
import {
  Waves,
  Wind,
  Activity,
  Target,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Water Confidence",
    description:
      "Become comfortable in the water, develop familiarity with the aquatic environment and build confidence.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Essential Skills",
    description:
      "Develop foundational abilities such as floating, breathing, kicking and body positioning.",
    icon: Wind,
  },
  {
    number: "03",
    title: "Stroke Development",
    description:
      "Learn and improve swimming techniques, coordination and controlled movement through the water.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Skill Advancement",
    description:
      "Refine technique, build endurance and improve swimming efficiency through continued practice.",
    icon: Target,
  },
  {
    number: "05",
    title: "Performance",
    description:
      "Explore higher-level swimming development and prepare for more demanding swimming goals.",
    icon: Trophy,
  },
];

export default function LearningJourney() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
            The Champs Experience
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-5xl">
            Every Great Swimmer
            <span className="block text-[#087EAB]">
              Has a Starting Point.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-500">
            Swimming development happens one skill at a time. We encourage
            learners to build their abilities progressively and work
            towards their individual goals.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative mt-16 lg:mt-20">

          {/* Desktop connecting line */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-[#22B8C7]/20 via-[#087EAB] to-[#22B8C7]/20 lg:block" />

          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.number} className="relative">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">

                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#22B8C7]/20 bg-[#EAF7FB] text-[#087EAB] shadow-sm transition-all duration-300 hover:bg-[#087EAB] hover:text-white">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.18em] text-slate-300 lg:absolute lg:right-0 lg:top-4">
                      {stage.number}
                    </span>

                  </div>

                  <div className="mt-4 lg:mt-7">
                    <h3 className="text-lg font-extrabold text-[#082F49]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {stage.description}
                    </p>
                  </div>

                  {index !== stages.length - 1 && (
                    <div className="absolute -bottom-6 left-7 top-16 w-px bg-slate-100 lg:hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#EAF7FB] px-6 py-7 sm:flex-row sm:px-9">
          <div>
            <h3 className="text-lg font-extrabold text-[#082F49]">
              Your swimming journey starts with one step.
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Find a programme that matches your current ability.
            </p>
          </div>

          <Link
            href="/programmes"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#087EAB] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#082F49]"
          >
            Explore Programmes
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
