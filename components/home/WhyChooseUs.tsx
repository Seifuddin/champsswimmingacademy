
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  Users,
  Target,
  HeartHandshake,
  ArrowUpRight,
  Check,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Qualified Instructors",
    description:
      "Learn with qualified swimming instructors committed to professional guidance and learner development.",
  },
  {
    number: "02",
    icon: Users,
    title: "For Every Age & Ability",
    description:
      "Programmes designed to accommodate babies, children, adults and swimmers at different skill levels.",
  },
  {
    number: "03",
    icon: Target,
    title: "Structured Development",
    description:
      "A progressive learning approach that supports individual abilities, improvement and personal goals.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Safety-Conscious Learning",
    description:
      "An approach that places water awareness, responsible instruction and learner confidence at the centre.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Personal Attention",
    description:
      "Recognising that every learner is different and encouraging development at an appropriate pace.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#082F49] py-20 text-white sm:py-24">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#087EAB]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#22B8C7]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#22B8C7]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                The Champs Difference
              </span>
            </div>

            <h2 className="max-w-lg text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[3.15rem]">
              More Than Lessons.
              <span className="block text-[#7DE5EC]">
                A Commitment to Growth.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
              Choosing a swimming academy is about more than finding a place
              to learn. It is about finding the right environment, guidance
              and encouragement for every stage of development.
            </p>

            <div className="mt-9 border-l-2 border-[#22B8C7] py-2 pl-5">
              <p className="text-xl font-bold leading-relaxed text-white">
                Building confident swimmers. Developing exceptional potential.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#7DE5EC] transition-colors hover:text-white"
            >
              Discover Our Approach
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Reasons */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group flex gap-5 py-7 sm:gap-7 sm:py-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#7DE5EC] transition-all duration-300 group-hover:border-[#22B8C7]/40 group-hover:bg-[#087EAB]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-bold text-white">
                        {reason.title}
                      </h3>

                      <span className="text-xs font-bold tracking-widest text-white/25">
                        {reason.number}
                      </span>
                    </div>

                    <p className="mt-2 max-w-lg text-sm leading-7 text-slate-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Closing statement */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-9">
          {["Excellence", "Confidence", "Growth", "Achievement"].map(
            (value) => (
              <div key={value} className="flex items-center gap-2">
                <Check size={15} className="text-[#22B8C7]" />
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                  {value}
                </span>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
