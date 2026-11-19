
import {
  Waves,
  Heart,
  TrendingUp,
} from "lucide-react";

const philosophy = [
  {
    number: "01",
    title: "Learn at Your Own Pace",
    description:
      "Every learner is different. We adapt our teaching to individual abilities, comfort and progress.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Confidence Before Complexity",
    description:
      "We build water confidence and strong fundamentals before introducing more challenging skills.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Progress Through Practice",
    description:
      "Consistent guidance and practice help turn small improvements into lasting swimming ability.",
    icon: TrendingUp,
  },
];

export default function SwimmingPhilosophy() {
  return (
    <section className="bg-white py-9 sm:py-11 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT — PHILOSOPHY STATEMENT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-0.5 w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Our Philosophy
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.08] tracking-[-0.04em] text-[#082F49] sm:text-4xl lg:text-[3.25rem]">
              Great swimmers
              <br />
              aren't rushed.
              <span className="block text-[#087EAB]">
                They're developed.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              We believe meaningful progress in swimming comes from
              patience, trust and the right guidance. Every lesson
              is an opportunity to build skills, overcome fear and
              become more confident in the water.
            </p>

            <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#082F49]/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22B8C7]" />
              Learn. Develop. Thrive.
            </div>
          </div>

          {/* RIGHT — TEACHING PRINCIPLES */}
          <div className="lg:pt-1">
            {philosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`group relative flex gap-4 py-5 sm:gap-6 sm:py-6 ${
                    index !== philosophy.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <span className="pt-1 text-[11px] font-bold tracking-wider text-[#087EAB]/60">
                    {item.number}
                  </span>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-extrabold tracking-tight text-[#082F49] sm:text-lg">
                        {item.title}
                      </h3>

                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        className="shrink-0 text-[#087EAB] transition-transform duration-300 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM DETAIL */}
        <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-4">
          <p className="text-[10px] font-semibold tracking-wide text-slate-400">
            Every learner deserves the opportunity to succeed.
          </p>

          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="h-1 w-7 bg-[#082F49]" />
            <span className="h-1 w-7 bg-[#087EAB]" />
            <span className="h-1 w-7 bg-[#22B8C7]" />
          </div>
        </div>

      </div>
    </section>
  );
}
