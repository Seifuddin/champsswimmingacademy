
import {
  MapPin,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function ContactVisit() {
  return (
    <section id="visit-us" className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087EAB]">
              Find Our Location
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#082F49] sm:text-3xl">
              Come and Visit Champs.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
            We'd love to welcome you, introduce our programmes and help you
            find the right swimming experience.
          </p>
        </div>

        {/* Location content */}
        <div className="grid overflow-hidden border border-slate-200 md:grid-cols-[1fr_1.25fr]">

          {/* Location details */}
          <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#E8F5F8] text-[#087EAB]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Our Location
                  </p>
                  <h3 className="mt-0.5 text-sm font-bold text-[#082F49]">
                    Champs Swimming Academy
                  </h3>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
                Find us at our swimming facility. Get in touch with our team
                for the exact location, directions and programme availability.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4">
              <div className="flex items-start gap-3">
                <Navigation
                  size={17}
                  className="mt-0.5 shrink-0 text-[#22B8C7]"
                />

                <p className="text-xs leading-5 text-slate-500">
                  We recommend contacting us before your visit to ensure
                  someone is available to welcome and assist you.
                </p>
              </div>

              <Link
                href="/contact#contact-form"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition hover:text-[#082F49]"
              >
                Get in Touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Destination panel */}
          <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden bg-[#082F49] p-6 text-white sm:min-h-[270px] sm:p-8">
            {/* Subtle graphic */}
            <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-5 -top-12 h-48 w-48 rounded-full border border-white/[0.07]" />

            <div className="relative z-10 flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#22B8C7]">
                  Your Destination
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Champs Swimming
                  <br />
                  Academy
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.06] text-[#22B8C7]">
                <MapPin size={21} />
              </div>
            </div>

            <div className="relative z-10 mt-6 flex flex-col gap-4 border-t border-white/15 pt-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xs text-sm leading-6 text-white/65">
                Learning to swim, building confidence and developing skills
                that last a lifetime.
              </p>

              <Link
                href="/contact#contact-form"
                className="inline-flex w-fit shrink-0 items-center gap-2 bg-[#22B8C7] px-4 py-2.5 text-xs font-bold text-[#082F49] transition hover:bg-white"
              >
                Plan Your Visit
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
