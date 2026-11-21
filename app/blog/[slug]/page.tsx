
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import RelatedArticles from "@/components/blog/RelatedArticles";
import BlogCTA from "@/components/blog/BlogCTA";
import { blogArticles, getArticleBySlug } from "@/lib/blog";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Champs Swimming Academy",
    };
  }

  return {
    title: `${article.title} | Champs Swimming Academy`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category
    )
    .concat(
      blogArticles.filter(
        (item) =>
          item.slug !== article.slug &&
          item.category !== article.category
      )
    )
    .slice(0, 3);

  return (
    <main className="bg-white">
      <ArticleHero article={article} />

      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <ArticleContent article={article} />

        <div className="mt-12 border-t border-slate-200 pt-9 sm:mt-16 sm:pt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>

    </main>
  );
}
