
import {
  Waves,
  UsersRound,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Professional Instruction",
    description: "Structured swimming lessons",
  },
  {
    icon: UsersRound,
    title: "All Age Groups",
    description: "Children and adults",
  },
  {
    icon: GraduationCap,
    title: "All Skill Levels",
    description: "Beginner to advanced",
  },
  {
    icon: ShieldCheck,
    title: "Safety Focused",
    description: "Confidence in the water",
  },
];

export default function AcademyCredibilityStrip() {
  return (
    <section
      aria-label="Academy highlights"
      className="border-b border-slate-100 bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-5 sm:px-8 sm:py-6 lg:grid-cols-4 lg:px-10">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`
                flex items-center gap-3 py-3
                lg:justify-center lg:py-1
                ${index % 2 === 1 ? "border-l border-slate-100 pl-4 sm:pl-6 lg:pl-0 lg:border-l-0" : "pr-3 sm:pr-5"}
                ${index >= 2 ? "border-t border-slate-100 lg:border-t-0" : ""}
                ${index === 2 || index === 3 ? "pt-4 lg:pt-1" : ""}
              `}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF8FA] text-[#087EAB]">
                <Icon size={17} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h3 className="text-[11px] font-bold leading-4 text-[#172B3A] sm:text-xs">
                  {feature.title}
                </h3>

                <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-[11px]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
