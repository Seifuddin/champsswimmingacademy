
"use client";

import { useState } from "react";
import {
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  Send,
  Save,
  Loader2,
} from "lucide-react";

export type BlogEditorData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  status: "draft" | "published";
};

type BlogEditorProps = {
  onCancel: () => void;
  onSave: (data: BlogEditorData) => Promise<void>;
  initialData?: BlogEditorData | null;
};

export default function BlogEditor({
  onCancel,
  onSave,
  initialData,
}: BlogEditorProps) {
  const isEditing = Boolean(initialData);

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(initialData?.slug));
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [featuredImage, setFeaturedImage] = useState(
    initialData?.featured_image ?? ""
  );
  const [author, setAuthor] = useState(
    initialData?.author ?? "Champs Swimming Academy"
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleTitleChange(value: string) {
    setTitle(value);

    if (!slugEdited) {
      setSlug(generateSlug(value));
    }
  }

  function handleSlugChange(value: string) {
    setSlugEdited(true);
    setSlug(generateSlug(value));
  }

  async function handleSave(status: "draft" | "published") {
    setError("");

    if (!title.trim()) {
      setError("Please enter an article title.");
      return;
    }

    if (!slug.trim()) {
      setError("Please enter an article slug.");
      return;
    }

    if (!content.trim()) {
      setError("Please enter the article content.");
      return;
    }

    const articleData: BlogEditorData = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      featured_image: featuredImage.trim(),
      author: author.trim() || "Champs Swimming Academy",
      status,
    };

    try {
      setSaving(true);
      await onSave(articleData);
    } catch (err) {
      console.error("Blog save error:", err);
      setError(
        isEditing
          ? "Unable to update the article. Please try again."
          : "Unable to save the article. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
            aria-label="Back to blog articles"
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {isEditing ? "Edit Article" : "Create Article"}
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              {isEditing
                ? "Update your article and save your changes."
                : "Write and prepare a new swimming academy blog article."}
            </p>
          </div>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
        {/* Main Editor */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <FileText size={18} className="text-blue-600" />
              <h2 className="font-semibold text-slate-900">
                Article Details
              </h2>
            </div>

            <div className="space-y-5">
              {/* Title */}
              <div>
                <label
                  htmlFor="blog-title"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Article Title <span className="text-red-500">*</span>
                </label>

                <input
                  id="blog-title"
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter your article title"
                  maxLength={200}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Slug */}
              <div>
                <label
                  htmlFor="blog-slug"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Article Slug <span className="text-red-500">*</span>
                </label>

                <div className="flex items-center overflow-hidden rounded-xl border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="border-r border-slate-200 bg-slate-50 px-3 py-3 text-xs text-slate-500">
                    /blog/
                  </span>

                  <input
                    id="blog-slug"
                    type="text"
                    value={slug}
                    onChange={(e) => handleSlugChange(e.target.value)}
                    placeholder="article-url"
                    className="min-w-0 flex-1 px-3 py-3 text-sm text-slate-900 outline-none"
                  />
                </div>

                <p className="mt-1.5 text-xs text-slate-500">
                  Automatically generated from your title. You can edit it.
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label
                  htmlFor="blog-excerpt"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Short Description
                </label>

                <textarea
                  id="blog-excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  maxLength={500}
                  placeholder="Write a short summary of this article..."
                  className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <p className="mt-1 text-right text-xs text-slate-400">
                  {excerpt.length}/500
                </p>
              </div>

              {/* Article Content */}
              <div>
                <label
                  htmlFor="blog-content"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Article Content <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="blog-content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={16}
                  placeholder="Start writing your article here..."
                  className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-7 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <p className="mt-1.5 text-xs text-slate-500">
                  Write your article text. We will improve the content formatting
                  and presentation in a later step.
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Publishing */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-4 font-semibold text-slate-900">
              Publishing
            </h2>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handleSave("draft")}
                disabled={saving}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Save size={16} />
                )}
                {isEditing ? "Save Changes as Draft" : "Save as Draft"}
              </button>

              <button
                type="button"
                onClick={() => handleSave("published")}
                disabled={saving}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {isEditing ? "Save & Publish" : "Publish Article"}
              </button>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Drafts remain unpublished. Publishing makes an article eligible
              to appear on your website.
            </p>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-4 flex items-center gap-2">
              <ImageIcon size={18} className="text-blue-600" />
              <h2 className="font-semibold text-slate-900">
                Featured Image
              </h2>
            </div>

            <label
              htmlFor="blog-image"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Image URL
            </label>

            <input
              id="blog-image"
              type="url"
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {featuredImage && (
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src={featuredImage}
                  alt="Featured image preview"
                  className="aspect-video w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            <p className="mt-2 text-xs leading-5 text-slate-500">
              We will add image uploading directly from your computer in a later
              step.
            </p>
          </div>

          {/* Author */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 font-semibold text-slate-900">
              Author
            </h2>

            <label
              htmlFor="blog-author"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Author Name
            </label>

            <input
              id="blog-author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Article author"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
