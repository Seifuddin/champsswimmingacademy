
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Users,
  Target,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Qualified Instruction",
    description:
      "Professional guidance from qualified swimming instructors.",
  },
  {
    number: "02",
    icon: Users,
    title: "Learning for Everyone",
    description:
      "Programmes for babies, children and adults at different ability levels.",
  },
  {
    number: "03",
    icon: Target,
    title: "Progress with Purpose",
    description:
      "Structured learning that develops skills, confidence and ability.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Water Safety First",
    description:
      "Building water awareness and essential safety skills.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Individual Attention",
    description:
      "Supportive instruction shaped around each swimmer's progress.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-[#F3F9FB] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#087EAB]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Why Champs
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              What Makes the
              <span className="text-[#087EAB]"> Difference?</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#647B89]">
            Every swimmer deserves the right guidance, a supportive
            environment and an opportunity to grow.
          </p>
        </div>

        {/* Main composition */}
        <div className="grid overflow-hidden rounded-2xl bg-[#082F49] lg:grid-cols-[0.88fr_1.12fr]">

          {/* Photography */}
          <div className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-[440px]">
            <Image
              src="/images/coach.webp"
              alt="Swimming instruction in a pool"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031D2D]/90 via-[#031D2D]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-9">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7DE5EC]">
                Where Champions Begin
              </span>

              <h3 className="mt-3 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                Confidence in the water.
                <span className="block text-[#7DE5EC]">
                  Potential without limits.
                </span>
              </h3>
            </div>
          </div>

          {/* Reasons */}
          <div className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-8">

            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                The Champs Difference
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                More than swimming lessons.
              </h3>
            </div>

            <div className="divide-y divide-white/10">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.number}
                    className="group flex items-center gap-4 py-3.5 sm:py-4"
                  >
                    <span className="w-6 shrink-0 text-[10px] font-bold tracking-wider text-[#7DE5EC]/70">
                      {reason.number}
                    </span>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-[#7DE5EC] transition-colors group-hover:bg-[#087EAB]">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-white sm:text-[15px]">
                        {reason.title}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-white/55 sm:text-[13px]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="group mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#7DE5EC] transition-colors hover:text-white"
            >
              Discover Our Approach
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
