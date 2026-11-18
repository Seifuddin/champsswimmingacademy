
import {
  Compass,
  Eye,
  HeartHandshake,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Our Mission",
    description:
      "To provide engaging and structured swimming education that helps learners develop confidence, practical skills and a lasting appreciation for swimming.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a trusted swimming academy recognised for encouraging confident swimmers, promoting water safety and supporting continuous development.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Our Values",
    description:
      "We value safety, patience, professionalism, inclusion and continuous improvement in every learning experience.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB] sm:text-xs">
            What Guides Us
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172B3A] sm:text-4xl lg:text-5xl">
            Our Purpose.
            <span className="text-[#087EAB]"> Our Principles.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="relative rounded-xl border border-slate-200 p-5 transition-colors hover:border-[#8CCEDB] sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF8FA] text-[#087EAB]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#172B3A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
