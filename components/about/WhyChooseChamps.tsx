
import {
  ShieldCheck,
  UsersRound,
  GraduationCap,
  Target,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Safety-Conscious Learning",
    description:
      "Promoting responsible swimming practices and awareness throughout the learning journey.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Inclusive for All Ages",
    description:
      "Swimming opportunities designed to accommodate children and adult learners.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Structured Instruction",
    description:
      "A progressive approach that supports learners as they develop their swimming abilities.",
  },
  {
    number: "04",
    icon: Target,
    title: "Individual Development",
    description:
      "Encouraging learners to improve their skills, confidence and personal performance.",
  },
];

export default function WhyChooseChamps() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB] sm:text-xs">
              The Champs Difference
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172B3A] sm:text-4xl lg:text-5xl">
              Why Learn With
              <span className="text-[#087EAB]"> Champs?</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-600">
            We believe a positive swimming experience begins
            with the right learning environment and approach.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:gap-x-12">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="flex gap-4 border-t border-slate-200 pt-5"
              >
                <span className="pt-1 text-xs font-bold tracking-widest text-[#087EAB]">
                  {reason.number}
                </span>

                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="text-[#087EAB]"
                    />
                    <h3 className="text-base font-extrabold text-[#172B3A]">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
