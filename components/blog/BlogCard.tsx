
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { BlogArticle } from "@/lib/blog";

type BlogCardProps = {
  article: BlogArticle;
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="group min-w-0">
      <Link
        href={`/blog/${article.slug}`}
        className="block"
        aria-label={`Read ${article.title}`}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 sm:rounded-2xl">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

          <span className="absolute left-2.5 top-2.5 rounded-full border border-white/30 bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-sky-700 backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]">
            {article.category}
          </span>
        </div>

        {/* Article information */}
        <div className="pt-3 sm:pt-4">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-medium text-slate-400 sm:text-xs">
            <Clock3 size={12} />
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-sky-700 sm:text-lg lg:text-xl">
              {article.title}
            </h3>

            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-sky-600 group-hover:bg-sky-600 group-hover:text-white sm:h-8 sm:w-8">
              <ArrowUpRight size={15} />
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:mt-2.5 sm:text-sm">
            {article.excerpt}
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs font-bold text-sky-700">
            Read Article
            <span className="h-px w-5 bg-sky-300 transition-all duration-300 group-hover:w-9 group-hover:bg-sky-600" />
          </div>
        </div>
      </Link>
    </article>
  );
}
