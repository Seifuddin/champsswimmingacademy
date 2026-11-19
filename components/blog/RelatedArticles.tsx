
import BlogCard from "./BlogCard";
import type { BlogArticle } from "@/lib/blog";

type RelatedArticlesProps = {
  articles: BlogArticle[];
};

export default function RelatedArticles({
  articles,
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t border-slate-200 pt-10 sm:pt-14">
      <div className="mb-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
          Keep Exploring
        </span>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          You May Also Like
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
