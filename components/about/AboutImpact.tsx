
import {
  UsersRound,
  Waves,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: UsersRound,
    title: "All Ages",
    description: "Children and adults",
  },
  {
    icon: Waves,
    title: "All Levels",
    description: "Different skill stages",
  },
  {
    icon: GraduationCap,
    title: "Skill Building",
    description: "Progressive learning",
  },
  {
    icon: ShieldCheck,
    title: "Water Awareness",
    description: "Responsible swimming",
  },
];

export default function AboutImpact() {
  return (
    <section className="border-y border-slate-100 bg-[#F7FAFC]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-4 lg:px-10">

        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`
                flex items-center gap-3 py-3
                ${index % 2 === 1 ? "border-l border-slate-200 pl-4 sm:pl-6 lg:pl-0 lg:border-l-0" : "pr-3 sm:pr-5"}
                ${index >= 2 ? "border-t border-slate-200 lg:border-t-0" : ""}
                ${index >= 2 ? "pt-4 lg:pt-3" : ""}
                lg:justify-center
              `}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#087EAB]">
                <Icon size={18} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-extrabold text-[#172B3A] sm:text-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
