
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  Waves,
} from "lucide-react";

export default function EnrolmentCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f4f9fc] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6eaf5] bg-white px-3.5 py-2">
              <Waves size={15} className="text-[#168cc5]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#168cc5]">
                Your journey starts here
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#123454] sm:text-4xl lg:text-[3.25rem]">
              Every Great Swimmer
              <span className="mt-1 block text-[#168cc5]">
                Starts Somewhere.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Whether you're taking your first steps into the water or
              looking to advance your swimming abilities, Champs
              Swimming Academy is ready to help you grow with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#1265a8] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0d4f88] hover:shadow-lg hover:shadow-blue-900/15"
              >
                Enquire About Enrolment
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d5e5ef] bg-white px-5 py-3 text-sm font-semibold text-[#123454] transition-colors hover:border-[#168cc5] hover:text-[#168cc5]"
              >
                <MessageCircle size={17} />
                Chat With Us
              </Link>
            </div>

            <p className="mt-5 text-xs font-medium text-slate-500">
              Beginners · Intermediate · Advanced
            </p>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/programmes/butterfly.avif"
                alt="Swimming lesson at Champs Swimming Academy"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <div className="absolute -bottom-4 left-4 right-4 rounded-xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-slate-900/5 sm:bottom-5 sm:left-5 sm:right-auto sm:min-w-[230px]">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e7f5fc] text-[#168cc5]">
                  <Waves size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#123454]">
                    Learn. Improve. Excel.
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Your swimming journey awaits.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
