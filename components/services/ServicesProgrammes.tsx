
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const programmes = [
  {
    number: "01",
    slug: "beginner-swimming",
    title: "Beginner Swimming",
    description:
      "Learn to float, breathe, move and feel confident in the water through structured beginner-friendly lessons.",
    image: "/images/programmes/beginner.jpg",
    alt: "Beginner swimmer learning essential swimming skills",
    label: "Start Here",
  },
  {
    number: "02",
    slug: "childrens-swimming",
    title: "Children's Swimming",
    description:
      "Fun, structured lessons that develop children's confidence, coordination and essential swimming abilities.",
    image: "/images/programmes/children.jpeg",
    alt: "Children participating in swimming lessons",
    label: "Young Swimmers",
  },
  {
    number: "03",
    slug: "adult-swimming",
    title: "Adult Swimming",
    description:
      "Learn from scratch, overcome water fear or develop your swimming ability at your own pace.",
    image: "/images/programmes/adult.avif",
    alt: "Adult swimmer developing swimming confidence",
    label: "Learn at Your Pace",
  },
  {
    number: "04",
    slug: "technique-improvement",
    title: "Technique Improvement",
    description:
      "Improve stroke mechanics, breathing, coordination, endurance and overall swimming efficiency.",
    image: "/images/programmes/butterfly.avif",
    alt: "Swimmer working on advanced swimming technique",
    label: "Refine Your Skills",
  },
  {
    number: "05",
    slug: "private-swimming-lessons",
    title: "Private Swimming Lessons",
    description:
      "Individual coaching tailored to your abilities, goals, learning pace and specific needs.",
    image: "/images/programmes/private.webp",
    alt: "Private swimming instructor coaching a swimmer",
    label: "Personal Coaching",
  },
  {
    number: "06",
    slug: "residential-swimming-lessons",
    title: "Residential Swimming Lessons",
    description:
      "Convenient swimming instruction at suitable residential swimming facilities, subject to arrangements.",
    image: "/images/programmes/residential.jpeg",
    alt: "Residential swimming pool for swimming lessons",
    label: "Flexible Location",
  },
  {
    number: "07",
    slug: "water-safety-survival",
    title: "Water Safety & Survival",
    description:
      "Learn water awareness, floating, survival skills and safer responses to challenging water situations.",
    image: "/images/programmes/safety.jpg",
    alt: "Water safety and survival swimming instruction",
    label: "Life Skills",
  },
];

export default function ServicesProgrammes() {
  return (
    <section
      id="our-programmes"
      className="bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 lg:mb-9 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#22B8C7]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087EAB]">
                Our Swimming Programmes
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.65rem]">
              Find Your Place
              <span className="text-[#087EAB]"> in the Water.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#647B89] sm:text-[15px]">
              From your first swim to advanced skills, discover training
              designed to help you become safer, stronger and more confident
              in the water.
            </p>
          </div>

          {/* Programme count */}
          <div className="flex items-center gap-3 lg:pb-1">
            <span className="text-3xl font-black text-[#087EAB]">
              07
            </span>

            <div className="border-l border-[#DCE8ED] pl-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#082F49]">
                Programmes
              </p>
              <p className="text-xs text-[#8296A3]">
                Different goals. One academy.
              </p>
            </div>
          </div>
        </div>

        {/* Programme grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {programmes.map((programme, index) => (
            <Link
              key={programme.slug}
              href={`/programmes/${programme.slug}`}
              className={`group relative isolate overflow-hidden rounded-lg border border-[#E5EDF1] bg-[#082F49] ${
                index === 0
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0
                    ? "h-[245px] sm:h-[270px] lg:h-[290px]"
                    : "h-[225px] sm:h-[240px] lg:h-[230px]"
                }`}
              >
                {/* Image */}
                <Image
                  src={programme.image}
                  alt={programme.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031D2D]/95 via-[#031D2D]/40 to-[#031D2D]/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#082F49]/25 to-transparent" />

                {/* Top labels */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-[#082F49]/35 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    {programme.label}
                  </span>

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75">
                    {programme.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="mb-2 h-[2px] w-7 bg-[#22B8C7] transition-all duration-300 group-hover:w-12" />

                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-extrabold leading-tight text-white sm:text-xl">
                        {programme.title}
                      </h3>

                      <p className="mt-1.5 max-w-xl text-[11px] leading-[1.65] text-white/75 sm:text-xs">
                        {programme.description}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-[#22B8C7] group-hover:bg-[#22B8C7] group-hover:text-[#082F49]">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom contact strip */}
        <div className="mt-6 flex flex-col gap-3 border-t border-[#E5EEF2] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#647B89] sm:text-sm">
            Unsure which programme is right for you? Let us help you get started.
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs font-bold text-[#087EAB] transition-colors hover:text-[#082F49] sm:text-sm"
          >
            Talk to our team
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
