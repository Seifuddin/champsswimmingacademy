
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Water Confidence",
    description:
      "Get comfortable in the water, overcome uncertainty and develop confidence in the aquatic environment.",
  },
  {
    number: "02",
    title: "Essential Skills",
    description:
      "Master the foundations of swimming, including floating, breathing, kicking and body positioning.",
  },
  {
    number: "03",
    title: "Stroke Development",
    description:
      "Develop coordinated movement and learn the techniques behind different swimming strokes.",
  },
  {
    number: "04",
    title: "Skill Advancement",
    description:
      "Refine your technique, improve efficiency and build greater endurance through practice.",
  },
  {
    number: "05",
    title: "Performance",
    description:
      "Continue developing your abilities and work towards more advanced personal swimming goals.",
  },
];

export default function LearningJourney() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:mb-10">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#087EAB]">
                Your Progress, Our Guidance
              </span>
            </div>

            <h2 className="max-w-2xl text-[2rem] font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.85rem]">
              From First Strokes
              <span className="text-[#087EAB]">
                {" "}to Greater Confidence.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-7 text-[#647B89] md:justify-self-end sm:text-[14px]">
            Every swimmer develops at a different pace. Our approach
            encourages steady progress, building essential skills
            and confidence along the way.
          </p>
        </div>

        {/* Progression cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {stages.map((stage, index) => (
            <article
              key={stage.number}
              className="group relative overflow-hidden rounded-xl border border-[#E3EDF0] bg-[#F8FBFC] p-4 transition-all duration-300 hover:border-[#B9E6EA] hover:bg-white hover:shadow-[0_8px_25px_rgba(8,47,73,0.06)] sm:p-5 lg:min-h-[218px] lg:p-4 xl:p-5"
            >
              {/* Card top */}
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF7FB] text-[12px] font-black text-[#087EAB] transition-colors group-hover:bg-[#087EAB] group-hover:text-white">
                  {stage.number}
                </span>

                {index === stages.length - 1 ? (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E5F7F7] text-[#087EAB]">
                    <Check size={14} />
                  </span>
                ) : (
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#A2B5BE]">
                    Stage {stage.number}
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-[15px] font-extrabold leading-snug text-[#082F49] sm:text-base">
                {stage.title}
              </h3>

              <p className="mt-2 text-[12px] leading-[1.8] text-[#647B89] sm:text-[13px]">
                {stage.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#22B8C7] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[#E5EEF1] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-extrabold text-[#082F49]">
              Every achievement begins with the fundamentals.
            </p>
            <p className="mt-1 text-[11px] text-[#647B89]">
              Find a swimming programme suited to your ability.
            </p>
          </div>

          <Link
            href="/programmes"
            className="group inline-flex min-h-10 w-fit shrink-0 items-center gap-2 text-[13px] font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
          >
            Explore Programmes
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
