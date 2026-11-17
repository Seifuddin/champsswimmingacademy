
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Users,
  Target,
  ShieldCheck,
  HeartHandshake,
  Waves,
} from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Qualified Instruction",
    description:
      "Professional guidance from qualified swimming instructors.",
  },
  {
    icon: Users,
    title: "Learning for Everyone",
    description:
      "Programmes for babies, children and adults at different ability levels.",
  },
  {
    icon: Target,
    title: "Progress with Purpose",
    description:
      "Structured learning that develops skills, confidence and ability.",
  },
  {
    icon: ShieldCheck,
    title: "Water Safety First",
    description:
      "Building water awareness and essential safety skills.",
  },
  {
    icon: HeartHandshake,
    title: "Individual Attention",
    description:
      "Supportive instruction shaped around each swimmer's progress.",
  },
  {
  icon: Waves,
  title: "Supportive Learning Environment",
  description:
    "A welcoming atmosphere where swimmers can learn, practise and build confidence at their own pace.",
},
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#087EAB]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Why Champs
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.7rem]">
              What Makes the{" "}
              <span className="text-[#087EAB]">Difference?</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#647B89]">
            Every swimmer deserves the right guidance, a supportive
            environment and an opportunity to grow.
          </p>
        </div>

        {/* Two-column composition */}
        <div className="grid items-center gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* Image */}
          <div className="relative min-h-[250px] overflow-hidden rounded-2xl sm:min-h-[320px] lg:min-h-[390px]">
            <Image
              src="/images/coach.webp"
              alt="Swimming instruction in a pool"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031D2D]/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-5 sm:p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                Where Champions Begin
              </span>

              <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                Confidence in the water.
                <span className="block text-[#7DE5EC]">
                  Potential without limits.
                </span>
              </h3>
            </div>
          </div>

          {/* Reasons */}
          <div>
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                The Champs Difference
              </p>

              <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-[#082F49] sm:text-2xl">
                More than swimming lessons.
              </h3>
            </div>

            {/* Two-column reasons grid */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div key={reason.title} className="group flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6F9] text-[#087EAB] transition-colors duration-300 group-hover:bg-[#087EAB] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-[#082F49] sm:text-[15px]">
                        {reason.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-[#647B89] sm:text-[13px]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
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
