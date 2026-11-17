
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Waves,
  Target,
} from "lucide-react";

import {
  programmes,
  getProgrammeBySlug,
} from "@/lib/programmes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return programmes.map((programme) => ({
    slug: programme.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);

  if (!programme) {
    return {
      title: "Programme Not Found | Champs Swimming Academy",
    };
  }

  return {
    title: `${programme.title} | Champs Swimming Academy`,
    description: programme.description,
    alternates: {
      canonical: `/programmes/${programme.slug}`,
    },
    openGraph: {
      title: `${programme.title} | Champs Swimming Academy`,
      description: programme.description,
      images: [programme.image],
    },
  };
}

export default async function ProgrammeDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);

  if (!programme) {
    notFound();
  }

  const otherProgrammes = programmes
    .filter((item) => item.slug !== programme.slug)
    .slice(0, 3);

  const enquiryUrl = `/contact?programme=${programme.slug}`;

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#082F49] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src={programme.image}
            alt={programme.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031D2D]/95 via-[#082F49]/85 to-[#082F49]/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031D2D]/65 to-transparent" />

        <div className="mx-auto max-w-7xl px-5 pb-12 pt-7 sm:px-8 sm:pb-16 sm:pt-9 lg:px-10 lg:pb-[76px]">
          <Link
            href="/programmes"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-[#22B8C7]"
          >
            <ArrowLeft size={16} />
            All programmes
          </Link>

          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#22B8C7]/40 bg-[#22B8C7]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6CE0E7]">
                {programme.category}
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-white/50">
                PROGRAMME {programme.number}
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[60px]">
              {programme.title}
              <span className="mt-2 block text-[#22B8C7]">
                {programme.shortTitle}.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              {programme.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={enquiryUrl}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#22B8C7] px-5 py-3 text-sm font-bold text-[#062B40] transition hover:bg-[#5DD8E0]"
              >
                Enquire About This Programme
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Contact Us
                <MessageCircle size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="border-b border-slate-100 bg-[#F7FBFC]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-6 sm:grid-cols-3 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#087EAB] shadow-sm">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#082F49]">
                Guided Learning
              </p>
              <p className="mt-0.5 text-xs text-[#647B89]">
                Qualified swimming instructors
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#087EAB] shadow-sm">
              <Waves size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#082F49]">
                Swimming Facility
              </p>
              <p className="mt-0.5 text-xs text-[#647B89]">
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#087EAB] shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#082F49]">
                Safety Conscious
              </p>
              <p className="mt-0.5 text-xs text-[#647B89]">
                Responsible swimming practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#22B8C7]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                About This Programme
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl">
              Develop your skills.
              <span className="text-[#087EAB]"> Grow with confidence.</span>
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-[#647B89]">
              {programme.introduction}
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCECEF] bg-[#F7FBFC] p-6 sm:p-7">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#087EAB] shadow-sm">
              <Target size={21} />
            </div>

            <h3 className="text-xl font-extrabold text-[#082F49]">
              Who Is This For?
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#647B89]">
              {programme.audience}
            </p>

            <div className="mt-6 border-t border-[#DCECEF] pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#087EAB]">
                Our Approach
              </p>

              <p className="mt-2 text-sm leading-7 text-[#647B89]">
                {programme.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="bg-[#F7FBFC] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#22B8C7]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                What You Will Work On
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl">
              Building the right
              <span className="text-[#087EAB]"> swimming skills.</span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#647B89] sm:text-base">
              Each learning area contributes to your swimming development.
              Activities are guided according to your current ability and
              learning needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programme.learningAreas.map((area, index) => (
              <div
                key={area.title}
                className="rounded-xl border border-[#E2EDF0] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#22B8C7]/50 hover:shadow-lg hover:shadow-[#082F49]/5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8FA] text-[#087EAB]">
                    {index === 0 ? (
                      <Waves size={20} />
                    ) : index === 1 ? (
                      <Target size={20} />
                    ) : index === 2 ? (
                      <GraduationCap size={20} />
                    ) : (
                      <ShieldCheck size={20} />
                    )}
                  </span>

                  <span className="text-xs font-bold tracking-widest text-[#A5B8C0]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#082F49]">
                  {area.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#647B89]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#22B8C7]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Your Development
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl">
              Skills that move you forward.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#647B89] sm:text-base">
              Our aim is to help you develop useful swimming skills through
              structured instruction, practice and constructive feedback.
              Your progress will depend on your starting point and individual
              learning journey.
            </p>

            <Link
              href={enquiryUrl}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition hover:text-[#082F49]"
            >
              Start your swimming journey
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-2xl border border-[#E2EDF0] bg-white p-5 sm:p-7">
            <h3 className="mb-5 text-lg font-extrabold text-[#082F49]">
              What you can work towards
            </h3>

            <div className="space-y-4">
              {programme.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#16A6B4]"
                  />
                  <p className="text-sm leading-6 text-[#647B89]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-[#F7FBFC] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
              Need More Information?
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#082F49] sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto max-w-3xl divide-y divide-[#DCECEF] rounded-2xl border border-[#DCECEF] bg-white px-5 sm:px-8">
            {programme.faqs.map((faq) => (
              <div key={faq.question} className="py-5">
                <h3 className="text-base font-bold text-[#082F49]">
                  {faq.question}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#647B89]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="bg-[#082F49] py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-[#22B8C7]">
              <Waves size={19} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                Take the Next Step
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Ready to make progress in the water?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
              Get in touch with Champs Swimming Academy to discuss
              {` ${programme.title.toLowerCase()} `}and find out how to get started.
            </p>
          </div>

          <div className="flex w-full flex-wrap gap-3 sm:w-auto">
            <Link
              href={enquiryUrl}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#22B8C7] px-5 py-3 text-sm font-bold text-[#062B40] transition hover:bg-[#5DD8E0] sm:flex-none"
            >
              Enquire Now
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:flex-none"
            >
              Other Programmes
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER PROGRAMMES */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
                Keep Exploring
              </p>
              <h2 className="text-2xl font-black tracking-tight text-[#082F49] sm:text-3xl">
                Explore other programmes
              </h2>
            </div>

            <Link
              href="/programmes"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#087EAB] hover:text-[#082F49]"
            >
              View all programmes
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {otherProgrammes.map((item) => (
              <Link
                key={item.slug}
                href={`/programmes/${item.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-[#E2EDF0] bg-white p-3 transition hover:border-[#22B8C7]/50 hover:shadow-md"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-[#EAF8FA]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="96px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#087EAB]">
                    Programme {item.number}
                  </p>

                  <h3 className="mt-1 text-sm font-extrabold leading-snug text-[#082F49]">
                    {item.title}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#087EAB]">
                    Explore
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
