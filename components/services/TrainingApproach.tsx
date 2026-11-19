
import {
  ArrowRight,
  Waves,
  ShieldCheck,
  Activity,
  Trophy,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Water Confidence",
    subtitle: "Feel comfortable",
    description:
      "Relax, overcome water fear and build a positive relationship with the water.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Essential Skills",
    subtitle: "Master the basics",
    description:
      "Learn breathing, floating, balance and the fundamental skills of swimming.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Swimming Development",
    subtitle: "Build ability",
    description:
      "Develop coordination, swimming movements, stroke skills and independence.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Technique & Performance",
    subtitle: "Swim with purpose",
    description:
      "Refine technique, improve endurance and become a stronger, more efficient swimmer.",
    icon: Trophy,
  },
];

export default function TrainingApproach() {
  return (
    <section className="relative overflow-hidden bg-[#082F49] py-10 sm:py-12 lg:py-14">
      {/* Background detail */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#22B8C7]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:mb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#56D1DB]">
                The Champs Learning Journey
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
              Progress in the Water.
              <span className="text-[#22B8C7]"> One Stage at a Time.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-[15px]">
              From building confidence to mastering technique, our approach
              gives every swimmer the foundation to progress with purpose.
            </p>
          </div>

          {/* Right heading detail */}
          <div className="hidden shrink-0 lg:block lg:pb-1">
            <div className="border-l-2 border-[#22B8C7] pl-4">
              <p className="text-xs font-bold text-white">
                Structured development
              </p>
              <p className="mt-1 text-[11px] text-white/45">
                Confidence to capability
              </p>
            </div>
          </div>
        </div>

        {/* Progression stages */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <div
                key={stage.number}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#22B8C7]/40 hover:bg-white/[0.06] sm:p-5"
              >
                {/* Top row */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#56D1DB]">
                    {stage.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#22B8C7]/20 bg-[#22B8C7]/10 text-[#56D1DB] transition-all duration-300 group-hover:bg-[#22B8C7] group-hover:text-[#082F49]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Stage title */}
                <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                  {stage.subtitle}
                </p>

                <h3 className="text-lg font-extrabold leading-snug text-white sm:text-[19px]">
                  {stage.title}
                </h3>

                {/* Accent */}
                <div className="my-3 h-[2px] w-7 bg-[#22B8C7] transition-all duration-300 group-hover:w-12" />

                {/* Description */}
                <p className="text-xs leading-[1.75] text-white/55 sm:text-[13px]">
                  {stage.description}
                </p>

                {/* Stage progression */}
                <div className="mt-5 flex items-center gap-1.5">
                  {stages.map((item, i) => (
                    <span
                      key={item.number}
                      className={`h-[3px] flex-1 rounded-full ${
                        i <= index
                          ? "bg-[#22B8C7]"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-white/50 sm:text-sm">
            Every swimmer progresses differently. We adapt our training
            to individual ability, confidence and pace.
          </p>

          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#56D1DB]">
            <span>Learn</span>
            <span className="text-white/25">/</span>
            <span>Develop</span>
            <span className="text-white/25">/</span>
            <span>Progress</span>
            <ArrowRight size={14} className="ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
