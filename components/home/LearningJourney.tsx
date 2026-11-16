
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

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
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Editorial heading */}
        <div className="mb-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:mb-12">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#22B8C7]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Your Progress, Our Guidance
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.85rem]">
              From First Strokes
              <span className="text-[#087EAB]"> to Greater Confidence.</span>
            </h2>
          </div>

          <div className="md:justify-self-end md:max-w-md">
            <p className="text-sm leading-7 text-[#647B89] sm:text-[15px]">
              Every swimmer develops at a different pace. Our approach
              encourages steady progress, helping learners build
              essential skills before moving towards more advanced
              swimming abilities.
            </p>
          </div>
        </div>

        {/* Progression line */}
        <div className="relative">

          {/* Desktop connector */}
          <div className="absolute left-0 right-0 top-[23px] hidden h-px bg-[#DCEBF0] lg:block" />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">

            {stages.map((stage, index) => (
              <div key={stage.number} className="relative">

                {/* Stage marker */}
                <div className="relative z-10 flex items-center justify-between lg:justify-start">
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#B9E6EA] bg-white text-sm font-black text-[#087EAB] transition-all duration-300 hover:border-[#087EAB] hover:bg-[#087EAB] hover:text-white">
                    {stage.number}
                  </div>

                  {index < stages.length - 1 && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B5C8D1] lg:hidden">
                      Next
                    </span>
                  )}
                </div>

                {/* Stage content */}
                <div className="mt-4 lg:mt-6">
                  <h3 className="text-base font-extrabold leading-snug text-[#082F49] sm:text-lg">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.8] text-[#647B89]">
                    {stage.description}
                  </p>
                </div>

                {/* Mobile progression connector */}
                {index !== stages.length - 1 && (
                  <div className="absolute left-[22px] top-[52px] hidden h-[calc(100%-35px)] w-px bg-[#DCEBF0] max-sm:block" />
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Compact bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#E8F0F3] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-bold text-[#082F49]">
              Every achievement begins with learning the fundamentals.
            </p>
            <p className="mt-1 text-xs text-[#647B89]">
              Discover a swimming programme suited to your ability.
            </p>
          </div>

          <Link
            href="/programmes"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
          >
            Explore Programmes
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}
