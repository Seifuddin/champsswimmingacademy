
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Confidence & Safety",
    description:
      "Developing water confidence, essential swimming abilities and safety awareness.",
  },
  {
    number: "02",
    icon: Target,
    title: "Purposeful Learning",
    description:
      "Guidance shaped around each swimmer's experience, ability and goals.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Personal Growth",
    description:
      "Helping every learner build skills, overcome challenges and progress.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Introduction */}
        <div className="grid items-end gap-6 border-b border-[#E5EEF1] pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-9">

          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#087EAB]">
                Get to Know Champs
              </span>
            </div>

            <h2 className="max-w-2xl text-[2rem] font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-4xl lg:text-[3.15rem]">
              More Than Swimming.
              <span className="block text-[#087EAB]">
                A Skill for Life.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-[14px] leading-7 text-[#647B89] sm:text-[15px]">
              At Champs Swimming Academy, we believe swimming is more
              than a sport. It is a life skill that builds confidence,
              develops discipline and opens doors to new possibilities.
            </p>

            <Link
              href="/about"
              className="group mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#087EAB] transition-colors hover:text-[#052438]"
            >
              Discover Our Academy
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Academy Values */}
        <div className="hidden md:grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-[#E5EEF1]">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.number}
                className="group flex gap-4 border-b border-[#E5EEF1] py-5 first:pt-6 last:border-b-0 sm:border-b-0 sm:px-5 sm:py-6 sm:first:pl-0 sm:last:pr-0 lg:gap-4 lg:py-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF7FB] text-[#087EAB] transition-colors duration-300 group-hover:bg-[#087EAB] group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[9px] font-extrabold tracking-[0.15em] text-[#22B8C7]">
                      {value.number}
                    </span>
                    <h3 className="text-[14px] font-extrabold text-[#082F49] sm:text-[15px]">
                      {value.title}
                    </h3>
                  </div>

                  <p className="max-w-xs text-[12px] leading-[1.8] text-[#647B89] sm:text-[13px]">
                    {value.description}
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
