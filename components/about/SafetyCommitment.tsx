
import Image from "next/image";
import {
  ShieldCheck,
  Eye,
  HeartHandshake,
  Waves,
} from "lucide-react";

const safetyFeatures = [
  {
    icon: Eye,
    title: "Responsible Supervision",
    description:
      "Promoting attentive supervision during swimming activities.",
  },
  {
    icon: Waves,
    title: "Water Awareness",
    description:
      "Encouraging an understanding of water safety and responsible behaviour.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Learning",
    description:
      "Helping learners develop water confidence through appropriate guidance.",
  },
];

export default function SafetyCommitment() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB] sm:text-xs">
              A Responsibility We Value
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172B3A] sm:text-4xl lg:text-5xl">
              Swimming Skills.
              <span className="block text-[#087EAB]">
                Safety for Life.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Learning to swim goes hand in hand with understanding
              the importance of water safety. We believe swimming
              education should encourage awareness, responsible
              behaviour and respect for the water.
            </p>

            <div className="mt-6 space-y-4">
              {safetyFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-3">
                    <Icon
                      size={20}
                      className="mt-0.5 shrink-0 text-[#087EAB]"
                    />

                    <div>
                      <h3 className="text-sm font-bold text-[#172B3A]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/safety.jpg"
              alt="Swimming instruction with a focus on water awareness"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 p-4 sm:inset-x-5 sm:bottom-5">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={25}
                  className="shrink-0 text-[#087EAB]"
                />
                <div>
                  <p className="text-sm font-extrabold text-[#172B3A]">
                    Safety is part of learning.
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Building awareness alongside swimming skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
