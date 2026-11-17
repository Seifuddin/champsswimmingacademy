
import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogListing from "@/components/blog/BlogListing";
import BlogCTA from "@/components/blog/BlogCTA";
import { blogArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Swimming Blog | Tips, Training & Water Safety",
  description:
    "Explore swimming tips, beginner guides, water safety advice and training insights from Champs Swimming Academy in Nairobi.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featuredArticle = blogArticles[0];
  const remainingArticles = blogArticles.slice(1);

  return (
    <main>
      <BlogHero />

      <FeaturedArticle article={featuredArticle} />

      <BlogListing articles={remainingArticles} />

      <BlogCTA />
    </main>
  );
}
