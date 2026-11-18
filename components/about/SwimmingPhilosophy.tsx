
import Image from "next/image";
import {
  CheckCircle2,
  Waves,
  Heart,
  TrendingUp,
} from "lucide-react";

const approach = [
  {
    icon: Waves,
    title: "Learn at Your Own Pace",
    description:
      "We recognise that every learner has a different starting point and learning journey.",
  },
  {
    icon: Heart,
    title: "Confidence Comes First",
    description:
      "A supportive approach helps learners feel comfortable and encouraged in the water.",
  },
  {
    icon: TrendingUp,
    title: "Progress Through Practice",
    description:
      "Consistent practice and guided instruction help develop stronger swimming abilities.",
  },
];

export default function SwimmingPhilosophy() {
  return (
    <section className="bg-[#F7FAFC] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">

        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB] sm:text-xs">
            Our Philosophy
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172B3A] sm:text-4xl lg:text-5xl">
            Every Learner.
            <span className="block text-[#087EAB]">
              Every Achievement.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Learning to swim should be an encouraging and rewarding
            experience. Our approach focuses on building strong
            foundations before progressing towards more advanced
            swimming skills.
          </p>

          <div className="mt-7 space-y-5">
            {approach.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#087EAB]">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#172B3A] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Swimming coach supporting a learner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/95 p-4 shadow-sm sm:bottom-5 sm:left-5 sm:right-5">
            <CheckCircle2 size={22} className="shrink-0 text-[#087EAB]" />
            <p className="text-xs font-bold leading-5 text-[#172B3A] sm:text-sm">
              Building strong foundations for confident swimming.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
