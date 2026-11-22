import { sanitizeArticleHtml } from "@/lib/blog/sanitizeArticleHtml";

type CMSArticleContentProps = {
  content: string;
};

export default function CMSArticleContent({
  content,
}: CMSArticleContentProps) {
  const safeContent = sanitizeArticleHtml(content);

  return (
    <article
      className="prose prose-slate max-w-none
        prose-headings:font-bold
        prose-headings:tracking-tight
        prose-headings:text-[#102b40]
        prose-h1:text-3xl
        prose-h2:text-2xl
        prose-h3:text-xl
        prose-p:leading-8
        prose-p:text-slate-600
        prose-a:text-sky-700
        prose-a:font-semibold
        prose-a:underline
        prose-img:rounded-xl
        prose-img:my-8
        prose-blockquote:border-l-sky-500
        prose-blockquote:text-slate-600
        prose-li:text-slate-600
        prose-hr:border-slate-200"
      dangerouslySetInnerHTML={{ __html: safeContent }}
    />
  );
}