
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  BookOpen,
} from "lucide-react";
import type { BlogArticle } from "@/lib/blog";

export default function ArticleHero({
  article,
}: {
  article: BlogArticle;
}) {
  return (
    <section className="overflow-hidden bg-[#102b40] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-9 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 lg:pb-14">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-sky-300"
        >
          <ArrowLeft size={16} />
          Back to Champs Journal
        </Link>

        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          {/* Article information */}
          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-sky-300">
                <BookOpen size={13} />
                {article.category}
              </span>

              <span className="flex items-center gap-1.5 text-xs font-medium text-white/60">
                <Clock3 size={14} />
                {article.readTime}
              </span>
            </div>

            <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[48px]">
              {article.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {article.excerpt}
            </p>

            <div className="mt-7 flex items-center gap-3 border-t border-white/15 pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
                <BookOpen size={19} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  The Champs Journal
                </p>
                <p className="mt-0.5 text-xs text-white/50">
                  Insights from Champs Swimming Academy
                </p>
              </div>
            </div>
          </div>

          {/* Article photograph */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 sm:aspect-[16/9] lg:aspect-[5/4]">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081c2b]/45 via-transparent to-transparent" />
            </div>

            {/* Image caption */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-[#102b40]/75 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300">
                  Champs Journal
                </p>
                <p className="mt-1 text-xs font-medium text-white">
                  Learn. Improve. Swim with confidence.
                </p>
              </div>

              <ArrowUpRight
                size={19}
                className="shrink-0 text-sky-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
