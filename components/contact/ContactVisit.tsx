import {
  MapPin,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function ContactVisit() {
  return (
    <section
      id="visit-us"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#172B3A] sm:text-4xl">
              Come and Visit Champs
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We'd be happy to welcome you, answer your questions and help
              you explore our swimming programmes.
            </p>

            <div className="mt-7 flex items-start gap-4 border-t border-slate-200 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#E6F5F8] text-[#087EAB]">
                <MapPin size={21} />
              </div>

              <div>
                <h3 className="font-bold text-[#172B3A]">Our Location</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Add the academy's full physical address here.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4 border-t border-slate-200 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#E6F5F8] text-[#087EAB]">
                <Navigation size={21} />
              </div>

              <div>
                <h3 className="font-bold text-[#172B3A]">
                  Planning a Visit?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Contact our team before visiting so we can assist you
                  with directions and availability.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#EAF3F6] p-6 sm:min-h-[360px] sm:p-10">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[30px] border-[#22B8C7]/10" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full border-[35px] border-[#087EAB]/10" />

            <div className="relative z-10 max-w-sm text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#087EAB] shadow-sm">
                <MapPin size={30} />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-[#172B3A]">
                Champs Swimming Academy
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your destination for swimming lessons, confidence and
                lifelong aquatic skills.
              </p>

              <Link
                href="/contact#contact-form"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition hover:text-[#172B3A]"
              >
                Ask for Directions
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}