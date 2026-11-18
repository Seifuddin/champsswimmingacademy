
import Image from "next/image";
import { Heart, Target, Waves } from "lucide-react";

const storyPoints = [
  {
    icon: Heart,
    title: "A Passion for Swimming",
    description:
      "A belief in the value of swimming as an essential life skill and a rewarding activity.",
  },
  {
    icon: Target,
    title: "A Purpose to Teach",
    description:
      "An approach centred on helping learners develop at their own pace.",
  },
  {
    icon: Waves,
    title: "A Journey of Growth",
    description:
      "Encouraging continuous learning, confidence and personal improvement.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-[#F7FAFC] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB] sm:text-xs">
            Our Story
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172B3A] sm:text-4xl lg:text-5xl">
            Built Around a Passion
            <span className="text-[#087EAB]"> for Swimming.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Every great swimming journey begins with an opportunity
            to learn. Our story is rooted in the belief that
            everyone deserves the chance to become confident
            in the water.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">

          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Swimmer practising in a swimming pool"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-4 py-2">
              <p className="text-xs font-bold text-[#172B3A]">
                Every swimmer has a beginning.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {storyPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <div key={point.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DCEEF2] bg-white text-[#087EAB]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div className="flex-1 border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                    <p className="mb-1 text-[10px] font-bold tracking-widest text-[#087EAB]">
                      0{index + 1}
                    </p>
                    <h3 className="text-base font-bold text-[#172B3A]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
