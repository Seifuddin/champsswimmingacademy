
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Waves,
  Award,
  Users,
  Target,
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
      className="relative overflow-hidden bg-[#082F49] py-9 sm:py-11 lg:py-12"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-36 h-80 w-80 rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -right-12 -top-24 h-56 w-56 rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#22B8C7]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-6 text-center sm:mb-7">
          <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
            Champs Swimming Academy
          </span>

          <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Building Better Swimmers.
            <span className="block text-[#7DE5EC] sm:inline">
              {" "}One Stroke at a Time.
            </span>
          </h2>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-5 sm:gap-y-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group relative flex items-start gap-3 border-l-2 border-[#22B8C7]/60 py-1 pl-3 transition-all duration-500 sm:gap-4 sm:pl-4 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-[#7DE5EC] transition-colors duration-300 group-hover:bg-[#22B8C7] group-hover:text-[#082F49] sm:h-9 sm:w-9">
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="text-lg font-black tracking-tight text-white sm:text-2xl lg:text-[1.8rem]">
                    {stat.value}
                  </div>

                  <h3 className="mt-0.5 text-xs font-bold leading-snug text-white sm:text-sm">
                    {stat.label}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-relaxed text-white/55 sm:text-xs sm:leading-5">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
