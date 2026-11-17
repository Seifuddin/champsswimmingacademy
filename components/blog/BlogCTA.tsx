
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Waves } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#102b40] px-6 py-9 sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14">
        <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[35px] border-white/[0.04]" />
        <div className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300 sm:text-xs">
              <Waves size={15} />
              Your Swimming Journey Starts Here
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to Make Your Next Move in the Water?
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm sm:leading-6">
              Turn what you've learned into action. Explore swimming
              programmes designed to help you develop your skills and
              confidence in the water.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-sky-400 sm:text-sm"
            >
              Enquire About Lessons
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-white/10 sm:text-sm"
            >
              <MessageCircle size={16} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
