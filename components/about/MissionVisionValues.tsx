
import {
  Compass,
  Eye,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Our Mission",
    description:
      "To provide engaging and structured swimming education that helps learners develop confidence, practical skills and a lasting appreciation for swimming.",
    type: "mission",
  },
  {
    number: "02",
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a trusted swimming academy recognised for developing confident swimmers, promoting water safety and inspiring continuous growth.",
    type: "vision",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Our Values",
    description:
      "Safety, patience, professionalism, inclusion and continuous improvement guide the way we teach and interact.",
    type: "values",
  },
];

export default function MissionVisionValues() {
  const mission = principles[0];
  const secondary = principles.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#082F49] py-9 sm:py-11 lg:py-12">
      {/* Background detail */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#22B8C7]/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#56D1DB]">
                The Foundation of Champs
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              What We Stand For.
              <span className="text-[#22B8C7]"> What We Aspire To.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-white/50 sm:text-sm">
            Our purpose, our direction and the principles behind
            every swimmer's experience.
          </p>
        </div>

        {/* Main composition */}
        <div className="grid gap-3 lg:grid-cols-[1.05fr_1fr]">

          {/* Featured Mission */}
          <article className="group relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-xl border border-[#22B8C7]/20 bg-[#0D3D58] p-5 sm:min-h-[245px] sm:p-7">
            {/* Decorative number */}
            <span className="pointer-events-none absolute -bottom-12 -right-3 select-none text-[180px] font-black leading-none tracking-tighter text-white/[0.035]">
              01
            </span>

            {/* Top */}
            <div className="relative flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#22B8C7] text-[#082F49]">
                <Compass size={20} strokeWidth={1.8} />
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#56D1DB]">
                Our Mission
              </span>
            </div>

            {/* Content */}
            <div className="relative mt-7 max-w-lg">
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Making Every Swimmer
                <span className="text-[#56D1DB]"> Count.</span>
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                {mission.description}
              </p>
            </div>

            {/* Bottom accent */}
            <div className="relative mt-5 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#22B8C7] transition-all duration-300 group-hover:w-14" />
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                Purpose in Every Lesson
              </span>
            </div>
          </article>

          {/* Vision & Values */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">

            {secondary.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-colors duration-300 hover:border-[#22B8C7]/30 hover:bg-white/[0.06] sm:p-5 lg:min-h-[115px]"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#22B8C7]/20 bg-[#22B8C7]/10 text-[#56D1DB] transition-colors group-hover:bg-[#22B8C7] group-hover:text-[#082F49]">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="text-sm font-extrabold text-white">
                          {item.title}
                        </h3>

                        <span className="text-[9px] font-bold tracking-[0.15em] text-white/30">
                          {item.number}
                        </span>
                      </div>

                      <p className="text-xs leading-[1.75] text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#22B8C7] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom identity strip */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 sm:text-[10px]">
            Our Purpose · Our Direction · Our Principles
          </p>

          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#22B8C7]/30 text-[#56D1DB]">
            <ArrowUpRight size={14} />
          </div>
        </div>

      </div>
    </section>
  );
}
