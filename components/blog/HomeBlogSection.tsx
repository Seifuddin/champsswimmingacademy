
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { getLatestArticles } from "@/lib/blog";

export default function HomeBlogSection() {
  const articles = getLatestArticles(3);

  return (
    <section
      aria-labelledby="home-blog-heading"
      className="bg-[#f5faff] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-xs">
              From the Champs Journal
            </span>

            <h2
              id="home-blog-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Insights, Tips &
              <span className="text-sky-600"> Swimming Stories.</span>
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-500 sm:mt-3 sm:text-sm">
              Explore useful swimming advice, training insights and
              practical guidance to help you grow in confidence in the water.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 text-xs font-bold text-sky-700 transition-colors hover:text-sky-900 sm:text-sm"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Three latest articles */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-3 lg:gap-7">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>

        {/* Mobile-friendly all articles link */}
        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2.5 text-xs font-bold text-sky-700 transition-colors hover:bg-sky-50"
          >
            Explore All Articles
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
