
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Star } from "lucide-react";
import type { BlogArticle } from "@/lib/blog";

type FeaturedArticleProps = {
  article: BlogArticle;
};

export default function FeaturedArticle({
  article,
}: FeaturedArticleProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-6 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
          <Star size={16} />
        </span>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
            Editor's Pick
          </p>
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Featured Article
          </h2>
        </div>
      </div>

      <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg lg:grid-cols-[1.1fr_0.9fr] lg:rounded-3xl">
        <Link
          href={`/blog/${article.slug}`}
          className="group relative block min-h-[230px] overflow-hidden bg-slate-100 sm:min-h-[340px] lg:min-h-[390px]"
          aria-label={`Read ${article.title}`}
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-sky-700 sm:left-6 sm:top-6">
            {article.category}
          </span>
        </Link>

        <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
          <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            <Clock3 size={14} />
            {article.readTime}
          </div>

          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {article.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            {article.excerpt}
          </p>

          <div className="mt-7">
            <Link
              href={`/blog/${article.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#102b40] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-sky-700 sm:text-sm"
            >
              Read Featured Article
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
