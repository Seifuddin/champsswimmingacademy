
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="relative isolate overflow-hidden rounded-2xl">

          <Image
            src="/images/about-cta.jpg"
            alt="Swimming pool at Champs Swimming Academy"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-[#071F30]/70" />

          <div className="relative z-10 max-w-3xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#55D2DE] sm:text-xs">
              Your Journey Starts Here
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Make a
              <span className="block text-[#55D2DE]">
                Splash?
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Whether you're taking your first steps into the
              water or looking to improve your swimming abilities,
              we're ready to help you explore the possibilities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#087EAB] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#22B8C7] hover:text-[#172B3A] sm:text-sm"
              >
                Start Your Journey
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/programmes"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white hover:text-[#172B3A] sm:text-sm"
              >
                Explore Programmes
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
