
"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  Send,
  Save,
  Loader2,
  Eye,
  X,
  Calendar,
  Upload,
  Trash2,
} from "lucide-react";
import RichTextEditor from "./RichTextEditor";
import { createClient } from "@/lib/supabase/client";

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

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export default function BlogEditor({
  onCancel,
  onSave,
  initialData,
}: BlogEditorProps) {
  const isEditing = Boolean(initialData);

  const fileInputRef = useRef<HTMLInputElement>(null);

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
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState("");
  const [imageError, setImageError] = useState("");
  const [showPreview, setShowPreview] = useState(false);

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

  async function handleImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    // Allow selecting the same file again
    event.target.value = "";

    if (!file) return;

    setImageError("");

    // Validate image type
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setImageError("Please select a JPG, PNG or WebP image.");
      return;
    }

    // Validate file size
    if (file.size > MAX_IMAGE_SIZE) {
      setImageError("Image must be 5 MB or smaller.");
      return;
    }

    try {
      setUploadingImage(true);

      const supabase = createClient();

      const fileExtension = file.name.split(".").pop()?.toLowerCase() || "jpg";

      const fileName = `featured/${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, file, {
          cacheControl: "3600",
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Blog image upload error:", uploadError);
        throw uploadError;
      }

      const { data } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      setFeaturedImage(data.publicUrl);
      setImageError("");
    } catch (err) {
      console.error("Featured image upload failed:", err);

      setImageError(
        "Unable to upload the image. Please check your connection and try again."
      );
    } finally {
      setUploadingImage(false);
    }
  }

  function handleRemoveImage() {
    setFeaturedImage("");
    setImageError("");
  }

  async function handleSave(status: "draft" | "published") {
    setError("");

    if (uploadingImage) {
      setError("Please wait for the image upload to finish.");
      return;
    }

    if (!title.trim()) {
      setError("Please enter an article title.");
      return;
    }

    if (!slug.trim()) {
      setError("Please enter an article slug.");
      return;
    }

    if (!content.replace(/<[^>]*>/g, "").trim()) {
      setError("Please enter the article content.");
      return;
    }

    const articleData: BlogEditorData = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content,
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
    <>
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

                {/* Rich Article Content */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Article Content <span className="text-red-500">*</span>
                  </label>

                  <RichTextEditor value={content} onChange={setContent} />

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Format your article with headings, bold text, lists, links
                    and images using the toolbar above.
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
                  onClick={() => {
                    setError("");
                    setShowPreview(true);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
                >
                  <Eye size={16} />
                  Preview Article
                </button>

                <button
                  type="button"
                  onClick={() => handleSave("draft")}
                  disabled={saving || uploadingImage}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving || uploadingImage ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Save size={16} />
                  )}
                  {isEditing ? "Save Changes as Draft" : "Save as Draft"}
                </button>

                <button
                  type="button"
                  onClick={() => handleSave("published")}
                  disabled={saving || uploadingImage}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving || uploadingImage ? (
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

            {/* Featured Image Upload */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center gap-2">
                <ImageIcon size={18} className="text-blue-600" />
                <h2 className="font-semibold text-slate-900">
                  Featured Image
                </h2>
              </div>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                className="hidden"
              />

              {/* Upload Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadingImage}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {uploadingImage ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Uploading Image...
                  </>
                ) : (
                  <>
                    <Upload size={17} />
                    {featuredImage ? "Replace Image" : "Upload Image"}
                  </>
                )}
              </button>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                JPG, PNG or WebP · Maximum 5 MB
              </p>

              {/* Upload Error */}
              {imageError && (
                <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">
                  {imageError}
                </div>
              )}

              {/* Image Preview */}
              {featuredImage && (
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <img
                    src={featuredImage}
                    alt="Featured image preview"
                    className="aspect-video w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-3 py-2">
                    <span className="truncate text-xs text-slate-500">
                      Featured image selected
                    </span>

                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      disabled={uploadingImage}
                      className="flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                    >
                      <Trash2 size={13} />
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Manual Image URL */}
              <div className="mt-5 border-t border-slate-200 pt-4">
                <label
                  htmlFor="blog-image"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Or use an image URL
                </label>

                <input
                  id="blog-image"
                  type="url"
                  value={featuredImage}
                  onChange={(e) => {
                    setFeaturedImage(e.target.value);
                    setImageError("");
                  }}
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
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

      {/* Article Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6">
          <div className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Preview Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Eye size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Article Preview
                  </h2>
                  <p className="text-xs text-slate-500">
                    Preview only · Changes are not saved
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </div>

            {/* Preview Content */}
            <div className="overflow-y-auto">
              <article className="mx-auto max-w-3xl px-5 py-8 sm:px-10 sm:py-12">
                <div className="mb-8">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Swimming & Water Safety
                  </span>

                  <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    {title.trim() || "Your Article Title"}
                  </h1>

                  {excerpt.trim() && (
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {excerpt}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span className="font-medium text-slate-700">
                      {author.trim() || "Champs Swimming Academy"}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      Preview
                    </span>
                  </div>
                </div>

                {featuredImage.trim() && (
                  <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={featuredImage}
                      alt={title || "Article featured image"}
                      className="max-h-[480px] w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}

                {/* Formatted Article Body */}
                <div
                  className="blog-preview-content max-w-none text-base leading-8 text-slate-700"
                  dangerouslySetInnerHTML={{
                    __html:
                      content ||
                      "<p>Your article content will appear here once you start writing.</p>",
                  }}
                />
              </article>
            </div>

            {/* Preview Footer */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
              <p className="hidden text-xs text-slate-500 sm:block">
                This preview reflects your current editor content.
              </p>

              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="ml-auto rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Back to Editor
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .blog-preview-content p {
          margin: 0 0 1.25rem;
        }

        .blog-preview-content h1 {
          margin: 2rem 0 1rem;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
          color: #172b3a;
        }

        .blog-preview-content h2 {
          margin: 1.75rem 0 0.85rem;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.4;
          color: #172b3a;
        }

        .blog-preview-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin: 1rem 0;
        }

        .blog-preview-content ol {
          list-style: decimal;
          padding-left: 1.5rem;
          margin: 1rem 0;
        }

        .blog-preview-content li {
          margin: 0.4rem 0;
        }

        .blog-preview-content blockquote {
          border-left: 3px solid #0891b2;
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: #64748b;
        }

        .blog-preview-content a {
          color: #0891b2;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .blog-preview-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 1.5rem 0;
        }

        .blog-preview-content hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 2rem 0;
        }
      `}</style>
    </>
  );
}
