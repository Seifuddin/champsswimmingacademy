
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import CMSArticleContent from "@/components/blog/CMSArticleContent";
import RelatedArticles from "@/components/blog/RelatedArticles";

import {
  blogArticles,
  getArticleBySlug,
  type BlogArticle,
} from "@/lib/blog";

import { getPublishedPosts } from "@/lib/blog/getPublishedPosts";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

function getCMSArticleDisplay(post: {
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
}): BlogArticle {
  const wordCount = post.content
    .replace(/<[^>]*>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return {
    slug: post.slug,
    title: post.title,
    excerpt:
      post.excerpt ||
      "Discover swimming insights, practical tips and guidance from Champs Swimming Academy.",
    category: "Swimming & Water Safety",
    readTime: `${readTime} min read`,
    image: post.featured_image || "/images/blog/hero.jpg",
    imageAlt: post.title,
  };
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  // Existing static articles
  const staticArticle = getArticleBySlug(slug);

  if (staticArticle) {
    return {
      title: `${staticArticle.title} | Champs Swimming Academy`,
      description: staticArticle.excerpt,
      alternates: {
        canonical: `/blog/${staticArticle.slug}`,
      },
      openGraph: {
        title: staticArticle.title,
        description: staticArticle.excerpt,
        images: [staticArticle.image],
        type: "article",
      },
    };
  }

  // Published CMS articles
  const cmsPosts = await getPublishedPosts();
  const cmsPost = cmsPosts.find((post) => post.slug === slug);

  if (!cmsPost) {
    return {
      title: "Article Not Found | Champs Swimming Academy",
    };
  }

  const article = getCMSArticleDisplay(cmsPost);

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

  // Check existing static articles first
  const staticArticle = getArticleBySlug(slug);

  // Fetch CMS articles
  const cmsPosts = staticArticle ? [] : await getPublishedPosts();

  const cmsPost = cmsPosts.find((post) => post.slug === slug);

  // Neither static nor published CMS article exists
  if (!staticArticle && !cmsPost) {
    notFound();
  }

  // Use the correct article information
  const article = staticArticle || getCMSArticleDisplay(cmsPost!);

  // Existing related article system
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
        {staticArticle ? (
          <ArticleContent article={staticArticle} />
        ) : (
          <CMSArticleContent content={cmsPost!.content} />
        )}

        <div className="mt-12 border-t border-slate-200 pt-9 sm:mt-16 sm:pt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </main>
  );
}
