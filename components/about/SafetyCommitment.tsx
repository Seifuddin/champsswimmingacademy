import Image from "next/image";
import {
  ShieldCheck,
  Eye,
  HeartHandshake,
  Waves,
  ArrowUpRight,
} from "lucide-react";

const safetyFeatures = [
  {
    number: "01",
    icon: Eye,
    title: "Responsible Supervision",
    description:
      "Promoting attentive supervision and responsible participation during swimming activities.",
  },
  {
    number: "02",
    icon: Waves,
    title: "Water Awareness",
    description:
      "Developing respect for water, awareness of surroundings and safer behaviour.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Guided Confidence",
    description:
      "Helping learners become comfortable in the water through patient, supportive instruction.",
  },
];

export default function SafetyCommitment() {
  return (
    <section className="bg-white py-9 sm:py-11 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#087EAB]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Our Commitment to Safety
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              A Skill to Learn.
              <span className="text-[#087EAB]"> A Responsibility to Respect.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:pb-1">
            Swimming education is about more than ability. It is
            about developing awareness, respect for water and
            understanding the importance of safety.
          </p>
        </div>

        {/* Image strip */}
        <div className="relative mt-7 h-[170px] overflow-hidden sm:h-[210px] lg:h-[230px]">
          <Image
            src="/images/safety.jpg"
            alt="Water safety and swimming instruction"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#082F49]/30" />

          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-white px-4 py-3 sm:px-6">
            <ShieldCheck
              size={21}
              strokeWidth={1.8}
              className="text-[#087EAB]"
            />

            <p className="text-xs font-bold text-[#082F49] sm:text-sm">
              Water safety belongs in every swimming journey.
            </p>
          </div>

          <div className="absolute right-0 top-0 h-1 w-24 bg-[#22B8C7]" />
        </div>

        {/* Safety principles */}
        <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {safetyFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="relative border-t border-slate-200 pt-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#087EAB]/60">
                    {feature.number}
                  </span>

                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="text-[#087EAB]"
                  />
                </div>

                <h3 className="mt-3 text-base font-extrabold text-[#082F49]">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22B8C7]" />
            <p className="text-[10px] font-semibold text-slate-500 sm:text-xs">
              Building skills. Encouraging awareness. Respecting water.
            </p>
          </div>

          <ArrowUpRight
            size={16}
            className="shrink-0 text-[#087EAB]"
          />
        </div>

      </div>
    </section>
  );
}