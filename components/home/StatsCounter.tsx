
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Waves,
  Award,
  Users,
  Target,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    value: "03",
    label: "Learning Levels",
    description:
      "Beginner, Intermediate and Advanced swimming programmes.",
    icon: Waves,
  },
  {
    value: "Qualified",
    label: "Swimming Instructors",
    description:
      "Learn under the guidance of qualified swimming instructors.",
    icon: Award,
  },
  {
    value: "01",
    label: "Shared Goal",
    description:
      "Developing confident and capable swimmers.",
    icon: Target,
  },
  {
    value: "All",
    label: "Skill Levels",
    description:
      "A learning pathway for swimmers at different ability levels.",
    icon: Users,
  },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Champs Swimming Academy statistics"
      className="bg-white py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">
          <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 sm:text-xs">
            Champs Swimming Academy
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Building Better Swimmers.
            <span className="text-sky-600"> One Stroke at a Time.</span>
          </h2>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group relative flex flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:rounded-2xl sm:p-4 lg:p-5 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Card Top */}
                <div className="mb-2 flex items-center justify-between sm:mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white sm:h-10 sm:w-10 sm:rounded-xl">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <span className="text-[10px] font-semibold tracking-widest text-slate-400 sm:text-xs">
                    0{index + 1}
                  </span>
                </div>

                {/* Stat Value */}
                <div className="mb-1 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                  {stat.value}
                </div>

                {/* Stat Details */}
                <div className="flex-1">
                  <h3 className="text-xs font-bold leading-snug text-slate-900 sm:text-sm">
                    {stat.label}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-relaxed text-slate-500 sm:text-xs sm:leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 sm:mt-4 sm:pt-3">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-sky-600 sm:text-[10px]">
                    Champs Academy
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
