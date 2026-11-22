import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogListing from "@/components/blog/BlogListing";
import { blogArticles, type BlogArticle } from "@/lib/blog";
import { getPublishedPosts } from "@/lib/blog/getPublishedPosts";

export const metadata: Metadata = {
  title: "Swimming Blog | Tips, Training & Water Safety",
  description:
    "Explore swimming tips, beginner guides, water safety advice and training insights from Champs Swimming Academy in Nairobi.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const cmsPosts = await getPublishedPosts();

  const cmsArticles: BlogArticle[] = cmsPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || "Discover helpful swimming insights from Champs Swimming Academy.",
    category: "Swimming & Water Safety",
    readTime: `${Math.max(
      1,
      Math.ceil(
        post.content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length / 200
      )
    )} min read`,
    image: post.featured_image || "/images/blog/hero.jpg",
    imageAlt: post.title,
  }));

  const staticSlugs = new Set(blogArticles.map((article) => article.slug));

  const uniqueCMSArticles = cmsArticles.filter(
    (article) => !staticSlugs.has(article.slug)
  );

  const allArticles = [...blogArticles, ...uniqueCMSArticles];

  const featuredArticle = blogArticles[0];

  const remainingArticles = allArticles.filter(
    (article) => article.slug !== featuredArticle.slug
  );

  return (
    <main>
      <BlogHero />

      <FeaturedArticle article={featuredArticle} />

      <BlogListing articles={remainingArticles} />
    </main>
  );
}