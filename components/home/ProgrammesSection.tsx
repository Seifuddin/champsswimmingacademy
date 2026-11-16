
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const programmes = [
  {
    number: "01",
    title: "Beginner Swimming",
    description:
      "Build water confidence and master the fundamentals, from floating and breathing to swimming independently.",
    image: "/images/programmes/beginner.jpg",
    alt: "Beginner learning swimming with an instructor",
    className: "md:col-span-2",
  },
  {
    number: "02",
    title: "Children's Swimming",
    description:
      "Fun, supportive lessons that help children develop water confidence, coordination and essential swimming skills.",
    image: "/images/programmes/children.jpeg",
    alt: "Children enjoying a swimming lesson",
    className: "",
  },
  {
    number: "03",
    title: "Adult Swimming",
    description:
      "Patient, personalised instruction for adults learning to swim or building confidence in the water.",
    image: "/images/programmes/adult.avif",
    alt: "Adult practising swimming",
    className: "",
  },
  {
    number: "04",
    title: "Technique Improvement",
    description:
      "Refine freestyle, backstroke, breaststroke and butterfly through focused technique development.",
    image: "/images/programmes/butterfly.avif",
    alt: "Swimmer practising swimming technique",
    className: "",
  },
  {
    number: "05",
    title: "Private Swimming Lessons",
    description:
      "One-on-one coaching tailored to your individual goals, ability and learning pace.",
    image: "/images/programmes/private.webp",
    alt: "Swimming instructor providing individual coaching",
    className: "",
  },
  {
    number: "06",
    title: "Residential Swimming Lessons",
    description:
      "Professional swimming instruction at suitable residential pools, subject to location and facility suitability.",
    image: "/images/programmes/residential.jpeg",
    alt: "Residential swimming pool",
    className: "",
  },
  {
    number: "07",
    title: "Water Safety & Survival",
    description:
      "Learn essential water safety, floating, controlled breathing and basic survival skills.",
    image: "/images/programmes/safety.jpg",
    alt: "Swimmer practising water safety skills",
    className: "",
  },
];

export default function ProgrammesSection() {
  return (
    <section className="bg-[#F7FBFC] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#22B8C7]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                What We Offer
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.65rem]">
              Swimming for Every
              <span className="text-[#087EAB]"> Stage of Life.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#647B89] sm:text-base">
              From first-time swimmers to those refining their technique,
              we offer personalised instruction to help everyone grow
              confidently in the water.
            </p>
          </div>

          <Link
            href="/programmes"
            className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#087EAB]/30 pb-1.5 text-sm font-bold text-[#087EAB] transition-colors hover:border-[#082F49] hover:text-[#082F49]"
          >
            Explore All Services
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Image programme grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {programmes.map((programme) => (
            <Link
              key={programme.number}
              href="/programmes"
              className={`group relative isolate h-[230px] overflow-hidden rounded-xl bg-[#082F49] sm:h-[245px] ${programme.className}`}
            >
              {/* Background image */}
              <Image
                src={programme.image}
                alt={programme.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#031D2D]/95 via-[#031D2D]/20 to-transparent" />
              <div className="absolute inset-0 bg-[#082F49]/5 transition-colors duration-300 group-hover:bg-[#082F49]/15" />

              {/* Number */}
              <span className="absolute right-4 top-4 text-[11px] font-bold tracking-[0.15em] text-white/75">
                {programme.number}
              </span>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-5">
                <div className="mb-2 h-[2px] w-7 bg-[#22B8C7] transition-all duration-300 group-hover:w-12" />

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-extrabold leading-snug text-white sm:text-xl">
                      {programme.title}
                    </h3>

                    <p className="mt-1.5 max-w-md text-xs leading-[1.65] text-white/80 sm:text-[13px]">
                      {programme.description}
                    </p>
                  </div>

                  <span className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-[#22B8C7] group-hover:bg-[#22B8C7]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* Bottom enquiry link */}
        <div className="mt-7 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-[#647B89]">
            Not sure which lesson is right for you? Let us help you choose.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
          >
            Talk to our team
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
