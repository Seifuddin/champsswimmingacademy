import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Waves } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#172B3A] sm:min-h-[430px] lg:min-h-[470px]">
      <Image
        src="/images/hero.jpg"
        alt="Swimming lessons at Champs Swimming Academy"
        fill
        priority
        className="object-cover -z-20"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102432]/95 via-[#102432]/75 to-[#102432]/25" />

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            <Waves size={15} className="text-[#22B8C7]" />
            We're Here to Help
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Get You
            <span className="block text-[#22B8C7]">Swimming.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            Have questions about our swimming programmes, lessons or
            registration? Get in touch with our team. We'd love to help you
            take the next step.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-md bg-[#087EAB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#06698F]"
            >
              Send an Enquiry
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="#contact-information"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Details
              <ArrowDown size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden h-2 w-1/3 bg-[#22B8C7] sm:block" />
    </section>
  );
}