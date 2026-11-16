
import Link from "next/link";
import {
  ArrowUpRight,
  Quote,
  Waves,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Add a genuine comment from a parent describing their child's swimming experience, confidence and progress.",
    name: "Parent's Name",
    role: "Parent of a swimming learner",
    initials: "PN",
    number: "01",
  },
  {
    quote:
      "Add feedback from an adult learner about their experience learning to swim, the instruction and their personal progress.",
    name: "Learner's Name",
    role: "Adult swimming learner",
    initials: "AL",
    number: "02",
  },
  {
    quote:
      "Add a genuine review describing the coaching experience, the learning environment or the skills developed.",
    name: "Client's Name",
    role: "Champs Swimming Academy client",
    initials: "CA",
    number: "03",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087EAB]">
                Voices of Our Community
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.12] tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.85rem]">
              Experiences That
              <span className="block text-[#087EAB]">
                Speak for Themselves.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#647B89]">
            Every swimmer has a unique story. Discover the experiences
            and milestones shared by the Champs community.
          </p>
        </div>

        {/* Testimonial panels */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.number}
              className={`group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(8,47,73,0.07)] sm:p-7 ${
                index === 0
                  ? "border-[#CDEBF0] bg-[#F5FBFC]"
                  : "border-[#E7EEF1] bg-white"
              }`}
            >
              {/* Top line */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#22B8C7] transition-all duration-500 group-hover:w-full" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#087EAB]">
                    {item.number} / 03
                  </span>

                  <Quote
                    size={27}
                    strokeWidth={1.5}
                    className="text-[#22B8C7]"
                  />
                </div>

                <p className="mt-7 text-[14px] font-medium leading-[1.9] text-[#365365] sm:text-[15px]">
                  "{item.quote}"
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#BFE6EB] bg-[#EAF7FB] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#087EAB]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22B8C7]" />
                  Awaiting genuine review
                </span>
              </div>

              {/* Author */}
              <div className="mt-8 flex items-center gap-3 border-t border-[#E5EEF1] pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF7FB] text-xs font-extrabold text-[#087EAB]">
                  {item.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#082F49]">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#81939D]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#E5EEF1] pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Waves size={19} className="shrink-0 text-[#22B8C7]" />
            <p className="max-w-lg text-sm leading-6 text-[#647B89]">
              Have you learned with Champs? We'd love to hear about your experience.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full bg-[#087EAB] px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#052438]"
          >
            Share Your Experience
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
