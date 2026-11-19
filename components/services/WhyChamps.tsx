
import {
  ShieldCheck,
  Users,
  Target,
  HeartHandshake,
  Waves,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Safety Comes First",
    description:
      "Water awareness, safe practices and responsible instruction are at the heart of every learning experience.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    number: "02",
    title: "Personalised Learning",
    description:
      "Every swimmer is different. We respect individual abilities, learning speeds and personal goals.",
    icon: Users,
  },
  {
    number: "03",
    title: "Structured Training",
    description:
      "A purposeful approach that develops fundamental skills before progressing to more advanced abilities.",
    icon: Target,
  },
  {
    number: "04",
    title: "Supportive Environment",
    description:
      "An encouraging atmosphere where learners can overcome fear, build confidence and enjoy learning.",
    icon: HeartHandshake,
  },
  {
    number: "05",
    title: "Practical Skills",
    description:
      "Useful swimming skills and water confidence that go beyond the swimming lesson.",
    icon: Waves,
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description:
      "We encourage consistency, practice and steady improvement at every stage of the swimming journey.",
    icon: TrendingUp,
  },
];

export default function WhyChamps() {
  return (
    <section className="bg-[#F7FBFC] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">

          {/* Left introduction */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#22B8C7]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087EAB]">
                  Why Choose Champs
                </span>
              </div>

              <h2 className="max-w-lg text-3xl font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
                The Difference
                <span className="text-[#087EAB]"> Is in How</span>
                <span className="block">We Teach.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#647B89] sm:text-[15px]">
                Learning to swim is about more than mastering movements.
                It is about feeling safe, gaining confidence and developing
                skills that stay with you for life.
              </p>
            </div>

            {/* Trust statement */}
            <div className="mt-6 border-l-2 border-[#22B8C7] py-1 pl-4 lg:mt-8">
              <p className="text-sm font-bold text-[#082F49]">
                Every learner matters.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#647B89]">
                Every skill counts. Every step forward matters.
              </p>
            </div>
          </div>

          {/* Right benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.number}
                  className={`group relative border-[#DCE8ED] py-4 sm:px-4 sm:py-5 ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  } ${
                    index < 4 ? "border-b" : ""
                  } ${
                    benefit.featured
                      ? "bg-[#082F49] sm:col-span-2 sm:px-5"
                      : "transition-colors duration-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Icon */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300 ${
                        benefit.featured
                          ? "bg-[#22B8C7] text-[#082F49]"
                          : "bg-[#087EAB]/[0.08] text-[#087EAB] group-hover:bg-[#22B8C7] group-hover:text-[#082F49]"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className={`text-sm font-extrabold ${
                            benefit.featured
                              ? "text-white"
                              : "text-[#082F49]"
                          }`}
                        >
                          {benefit.title}
                        </h3>

                        <span
                          className={`text-[9px] font-bold tracking-[0.15em] ${
                            benefit.featured
                              ? "text-[#56D1DB]"
                              : "text-[#91A9B5]"
                          }`}
                        >
                          {benefit.number}
                        </span>
                      </div>

                      <p
                        className={`mt-1.5 text-xs leading-[1.7] ${
                          benefit.featured
                            ? "max-w-xl text-white/65"
                            : "text-[#647B89]"
                        }`}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Featured accent */}
                  {benefit.featured && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#22B8C7] to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom brand strip */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#DCE8ED] pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8299A5]">
            Champs Swimming Academy
          </p>

          <div className="flex items-center gap-2 text-xs font-bold text-[#087EAB]">
            <span>Confidence in every stroke</span>
            <ArrowUpRight size={15} />
          </div>
        </div>

      </div>
    </section>
  );
}
