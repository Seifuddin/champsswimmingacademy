
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Confidence & Safety",
    description:
      "Helping learners become comfortable, capable and confident in the water.",
  },
  {
    icon: Target,
    title: "Structured Learning",
    description:
      "Progressive instruction designed around individual abilities and goals.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "Supporting every swimmer as they develop skills and reach new milestones.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">

          {/* Section Introduction */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#22B8C7]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                About Champs
              </span>
            </div>

            <h2 className="max-w-lg text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              More Than Swimming.
              <span className="block text-[#087EAB]">
                A Skill for Life.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Swimming is more than a sport. It is an essential life skill
              that builds confidence, encourages discipline and creates
              opportunities for personal growth.
            </p>

            <p className="mt-4 max-w-md text-base leading-8 text-slate-600">
              At Champs Swimming Academy, we guide learners of all ages
              through a structured swimming journey, helping each individual
              develop their abilities and discover their potential.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
            >
              Discover Our Academy
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Academy Values */}
          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group flex gap-5 py-7 sm:gap-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FB] transition-colors group-hover:bg-[#087EAB]">
                    <Icon
                      size={23}
                      className="text-[#087EAB] transition-colors group-hover:text-white"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-extrabold text-[#082F49]">
                        {value.title}
                      </h3>

                      <span className="text-xs font-bold tracking-widest text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                      {value.description}
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
