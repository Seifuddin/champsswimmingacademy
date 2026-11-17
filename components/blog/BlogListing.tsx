
"use client";

import { useMemo, useState } from "react";
import { Search, BookOpen } from "lucide-react";
import BlogCard from "./BlogCard";
import type { BlogArticle } from "@/lib/blog";

type BlogListingProps = {
  articles: BlogArticle[];
};

export default function BlogListing({ articles }: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(
    () => [
      "All Articles",
      ...Array.from(new Set(articles.map((article) => article.category))),
    ],
    [articles]
  );

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        article.category === activeCategory;

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  return (
    <section
      id="articles"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
    >
      {/* Section heading */}
      <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-xs">
            Explore the Journal
          </span>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            All Articles
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-500 sm:text-sm">
            Discover helpful resources and insights for every stage
            of your swimming journey.
          </p>
        </div>

        <div className="text-xs font-medium text-slate-400">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"}
        </div>
      </div>

      {/* Search */}
      <div className="mb-5 max-w-md">
        <div className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 transition-colors focus-within:border-sky-400">
          <Search size={17} className="shrink-0 text-slate-400" />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search swimming articles..."
            aria-label="Search swimming articles"
            className="h-full w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400 sm:text-sm"
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:mb-10">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold transition-all duration-200 sm:text-xs ${
                isActive
                  ? "border-sky-600 bg-sky-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Article grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12">
          {filteredArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-5 py-14 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
            <BookOpen size={21} />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            No articles found
          </h3>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Try another search term or choose a different category.
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("All Articles");
              setSearchQuery("");
            }}
            className="mt-5 text-xs font-bold text-sky-700 hover:text-sky-900"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
