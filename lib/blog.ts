
export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "learning-to-swim-for-beginners",
    title: "Learning to Swim: A Beginner's Guide",
    excerpt:
      "Discover the essential first steps to becoming comfortable, confident and capable in the water.",
    category: "Swimming Basics",
    readTime: "5 min read",
    image: "/images/blog/hero.jpg",
    imageAlt: "Beginner swimmer practising in a swimming pool",
  },
  {
    slug: "why-water-safety-matters",
    title: "Why Water Safety Should Come First",
    excerpt:
      "Understand the importance of water awareness, safe swimming habits and responsible behaviour around pools.",
    category: "Water Safety",
    readTime: "4 min read",
    image: "/images/blog/hero.jpg",
    imageAlt: "Swimming instructor guiding a learner in the pool",
  },
  {
    slug: "building-confidence-in-the-water",
    title: "Building Confidence in the Water",
    excerpt:
      "Explore how structured lessons and consistent practice can help swimmers overcome uncertainty.",
    category: "Swimming Tips",
    readTime: "4 min read",
    image: "/images/blog/hero.jpg",
    imageAlt: "Swimmer confidently practising in a pool",
  },
  {
    slug: "benefits-of-learning-to-swim",
    title: "The Benefits of Learning to Swim",
    excerpt:
      "Swimming offers valuable opportunities to develop physical fitness, coordination and confidence.",
    category: "Health & Fitness",
    readTime: "5 min read",
    image: "/images/blog/hero.jpg",
    imageAlt: "Swimmer training in a swimming pool",
  },
  {
    slug: "helping-children-learn-to-swim",
    title: "How Parents Can Support Young Swimmers",
    excerpt:
      "Simple ways parents can encourage practice, confidence and a positive attitude towards swimming.",
    category: "Parents' Guide",
    readTime: "6 min read",
    image: "/images/blog/hero.jpg",
    imageAlt: "Swimming instructor supporting a young learner",
  },
  {
    slug: "improving-your-swimming-technique",
    title: "Simple Ways to Improve Your Swimming Technique",
    excerpt:
      "Learn why body position, breathing and consistent practice matter when developing swimming skills.",
    category: "Training & Technique",
    readTime: "5 min read",
    image: "/images/blog/hero.jpg",
    imageAlt: "Swimmer practising swimming technique",
  },
];

export function getLatestArticles(limit = 3) {
  return blogArticles.slice(0, limit);
}

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
