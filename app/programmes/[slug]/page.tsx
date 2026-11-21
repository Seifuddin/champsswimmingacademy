
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
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

  const learningIcons = [
    Waves,
    Target,
    GraduationCap,
    ShieldCheck,
  ];

  return (
    <div className="bg-white text-[#082F49]">
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

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031D2D]/95 via-[#082F49]/80 to-[#082F49]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031D2D]/60 via-transparent to-[#031D2D]/20" />

        <div className="mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 sm:pb-14 sm:pt-7 lg:px-10 lg:pb-16">
          <Link
            href="/programmes"
            className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-white/65 transition hover:text-[#22B8C7]"
          >
            <ArrowLeft size={15} />
            All programmes
          </Link>

          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="border border-[#22B8C7]/40 bg-[#22B8C7]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#7CE5E9]">
                {programme.category}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/50">
                Programme {programme.number}
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-[58px]">
              {programme.title}
              <span className="mt-1 block text-[#22B8C7]">
                {programme.shortTitle}.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-7">
              {programme.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={enquiryUrl}
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#22B8C7] px-5 py-3 text-sm font-bold text-[#062B40] transition hover:bg-[#5DD8E0]"
              >
                Enquire About This Programme
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
                <MessageCircle size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-9 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">
            <span className="h-px w-10 bg-[#22B8C7]" />
            Champs Swimming Academy
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="border-b border-[#E6EEF1] bg-[#F7FAFC]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#E0EAEE] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 py-4 sm:pr-5">
            <GraduationCap
              size={21}
              className="shrink-0 text-[#087EAB]"
            />
            <div>
              <p className="text-xs font-bold text-[#082F49]">
                Guided Learning
              </p>
              <p className="mt-0.5 text-xs text-[#647B89]">
                Qualified swimming instructors
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 py-4 sm:px-5">
            <Waves
              size={21}
              className="shrink-0 text-[#087EAB]"
            />
            <div>
              <p className="text-xs font-bold text-[#082F49]">
                Swimming Facility
              </p>
              <p className="mt-0.5 text-xs text-[#647B89]">
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 py-4 sm:pl-5">
            <ShieldCheck
              size={21}
              className="shrink-0 text-[#087EAB]"
            />
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
      <section className="py-11 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-10">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
                About This Programme
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-black leading-[1.15] tracking-tight sm:text-[38px]">
              Develop your skills.
              <span className="text-[#087EAB]">
                {" "}Grow with confidence.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#647B89]">
              {programme.introduction}
            </p>
          </div>

          <div className="border-l-2 border-[#22B8C7] bg-[#F7FAFC] pl-5 sm:pl-6">
            <div className="pb-5">
              <div className="mb-2 flex items-center gap-2">
                <Target size={17} className="text-[#087EAB]" />
                <h3 className="text-sm font-extrabold text-[#082F49]">
                  Who Is This For?
                </h3>
              </div>

              <p className="text-sm leading-6 text-[#647B89]">
                {programme.audience}
              </p>
            </div>

            <div className="border-t border-[#DCE8ED] pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#087EAB]">
                Our Approach
              </p>

              <p className="text-sm leading-6 text-[#647B89]">
                {programme.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="bg-[#F5FAFC] py-11 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-px w-7 bg-[#22B8C7]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
                  What You Will Work On
                </span>
              </div>

              <h2 className="text-3xl font-black leading-[1.15] tracking-tight sm:text-[38px]">
                Building the right
                <span className="text-[#087EAB]">
                  {" "}swimming skills.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-[#647B89] lg:pb-1">
              Each learning area contributes to your swimming development.
              Activities are guided according to your current ability and
              learning needs.
            </p>
          </div>

          <div className="grid border-t border-[#DCE8ED] sm:grid-cols-2">
            {programme.learningAreas.map((area, index) => {
              const Icon =
                learningIcons[index % learningIcons.length];

              return (
                <div
                  key={area.title}
                  className={`group flex gap-4 border-b border-[#DCE8ED] py-5 sm:py-6 ${
                    index % 2 === 0
                      ? "sm:border-r sm:pr-6"
                      : "sm:pl-6"
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D9E9EE] bg-white text-[#087EAB] transition group-hover:border-[#22B8C7] group-hover:bg-[#E8F8FA]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2.5">
                      <span className="text-[10px] font-bold tracking-widest text-[#22A9B7]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-sm font-extrabold text-[#082F49] sm:text-base">
                        {area.title}
                      </h3>
                    </div>

                    <p className="max-w-lg text-sm leading-6 text-[#647B89]">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="py-11 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-10">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
                Your Development
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.15] tracking-tight sm:text-[38px]">
              Skills that move you forward.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#647B89]">
              Our aim is to help you develop useful swimming skills through
              structured instruction, practice and constructive feedback.
              Your progress will depend on your starting point and individual
              learning journey.
            </p>

            <Link
              href={enquiryUrl}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition hover:text-[#082F49]"
            >
              Start your swimming journey
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="border border-[#DCE8ED] bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-[#DCE8ED] px-5 py-4 sm:px-6">
              <h3 className="text-sm font-extrabold text-[#082F49]">
                What you can work towards
              </h3>

              <Target size={18} className="shrink-0 text-[#087EAB]" />
            </div>

            <div className="grid sm:grid-cols-2">
              {programme.outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className={`flex items-start gap-2.5 px-5 py-4 sm:px-6 ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-[#E7EFF2]"
                      : ""
                  } border-b border-[#E7EFF2]`}
                >
                  <CheckCircle2
                    size={17}
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
      <section className="border-y border-[#E6EEF1] bg-[#F7FAFC] py-11 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-7">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
  Need More Information?
</span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-[38px]">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid gap-x-10 lg:grid-cols-2">
            {programme.faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-t border-[#DCE8ED] py-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[10px] font-bold tracking-widest text-[#22A9B7]">
                    {String(index + 1).padStart(2, "02")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-extrabold leading-6 text-[#082F49]">
                      {faq.question}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#647B89]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="bg-[#082F49] py-9 text-white sm:py-11">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-2 text-[#22B8C7]">
              <Waves size={17} />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Take the Next Step
              </span>
            </div>

            <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">
              Ready to make progress in the water?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
              Get in touch with Champs Swimming Academy to discuss
              {` ${programme.title.toLowerCase()} `}and find out how to get started.
            </p>
          </div>

          <div className="flex w-full flex-wrap gap-3 lg:w-auto lg:shrink-0">
            <Link
              href={enquiryUrl}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 bg-[#22B8C7] px-5 py-3 text-sm font-bold text-[#062B40] transition hover:bg-[#5DD8E0] sm:flex-none"
            >
              Enquire Now
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:flex-none"
            >
              Other Programmes
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER PROGRAMMES */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span className="h-px w-7 bg-[#22B8C7]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
                  Keep Exploring
                </span>
              </div>

              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Explore other programmes
              </h2>
            </div>

            <Link
              href="/programmes"
              className="inline-flex w-fit items-center gap-2 text-xs font-bold text-[#087EAB] transition hover:text-[#082F49]"
            >
              View all programmes
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherProgrammes.map((item) => (
              <Link
                key={item.slug}
                href={`/programmes/${item.slug}`}
                className="group flex items-center gap-3 border border-[#E2EDF0] bg-white p-3 transition hover:border-[#22B8C7]/60 hover:bg-[#F8FCFD]"
              >
                <div className="relative h-[76px] w-[96px] shrink-0 overflow-hidden bg-[#EAF8FA]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="96px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#087EAB]">
                    Programme {item.number}
                  </p>

                  <h3 className="mt-1 line-clamp-2 text-sm font-extrabold leading-snug text-[#082F49]">
                    {item.title}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#087EAB]">
                    Explore
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
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
