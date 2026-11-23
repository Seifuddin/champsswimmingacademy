
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FileText,
  Search,
  RefreshCw,
  Eye,
  Clock,
  BookOpen,
  AlertCircle,
  Plus,
  Pencil,
  Trash2,
  X,
  Archive,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import BlogEditor, {
  type BlogEditorData,
} from "@/components/admin/blog/BlogEditor";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  author: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

type BlogView = "articles" | "trash";

export default function BlogManager() {
  const supabase = useMemo(() => createClient(), []);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [activeView, setActiveView] = useState<BlogView>("articles");

  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const [deletingPost, setDeletingPost] = useState<BlogPost | null>(null);
  const [permanentlyDeletingPost, setPermanentlyDeletingPost] =
    useState<BlogPost | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);
  const [isPermanentlyDeleting, setIsPermanentlyDeleting] = useState(false);
  const [restoringPostId, setRestoringPostId] = useState<string | null>(null);

  // Fetch all articles, including trashed articles
  async function fetchPosts() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, title, slug, excerpt, content, featured_image, author, status, published_at, created_at, updated_at, deleted_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Blog fetch error:", error);
      setError("Unable to load blog articles. Please try again.");
      setLoading(false);
      return;
    }

    setPosts((data as BlogPost[]) || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create new article
  async function handleSaveArticle(article: BlogEditorData) {
    const now = new Date().toISOString();

    const { error } = await supabase.from("blog_posts").insert({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt || null,
      content: article.content,
      featured_image: article.featured_image || null,
      author: article.author,
      status: article.status,
      published_at: article.status === "published" ? now : null,
      updated_at: now,
    });

    if (error) {
      console.error("Blog save error:", error);
      throw error;
    }

    await fetchPosts();
    setIsCreating(false);
  }

  // Update existing article
  async function handleUpdateArticle(article: BlogEditorData) {
    if (!editingPost) return;

    const now = new Date().toISOString();

    let publishedAt = editingPost.published_at;

    if (article.status === "published" && !publishedAt) {
      publishedAt = now;
    }

    if (article.status === "draft") {
      publishedAt = null;
    }

    const { error } = await supabase
      .from("blog_posts")
      .update({
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt || null,
        content: article.content,
        featured_image: article.featured_image || null,
        author: article.author,
        status: article.status,
        published_at: publishedAt,
        updated_at: now,
      })
      .eq("id", editingPost.id);

    if (error) {
      console.error("Blog update error:", error);
      throw error;
    }

    setEditingPost(null);
    await fetchPosts();
  }

  // Move an article to Trash
  async function handleMoveToTrash() {
    if (!deletingPost || isDeleting) return;

    setIsDeleting(true);
    setError("");
    setNotice("");

    const postToDelete = deletingPost;
    const now = new Date().toISOString();

    const { error } = await supabase
      .from("blog_posts")
      .update({
        deleted_at: now,
        updated_at: now,
      })
      .eq("id", postToDelete.id)
      .is("deleted_at", null);

    if (error) {
      console.error("Move to trash error:", error);
      setError("Unable to move this article to Trash. Please try again.");
      setIsDeleting(false);
      return;
    }

    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postToDelete.id
          ? { ...post, deleted_at: now, updated_at: now }
          : post
      )
    );

    setDeletingPost(null);
    setIsDeleting(false);
    setNotice("Article moved to Trash successfully.");
  }

  // Restore an article from Trash
  async function handleRestorePost(post: BlogPost) {
    if (restoringPostId) return;

    setRestoringPostId(post.id);
    setError("");
    setNotice("");

    const now = new Date().toISOString();

    const { error } = await supabase
      .from("blog_posts")
      .update({
        deleted_at: null,
        updated_at: now,
      })
      .eq("id", post.id)
      .not("deleted_at", "is", null);

    if (error) {
      console.error("Article restore error:", error);
      setError("Unable to restore this article. Please try again.");
      setRestoringPostId(null);
      return;
    }

    setPosts((currentPosts) =>
      currentPosts.map((item) =>
        item.id === post.id
          ? { ...item, deleted_at: null, updated_at: now }
          : item
      )
    );

    setRestoringPostId(null);
    setNotice("Article restored successfully.");
  }

  // Permanently delete an article from Trash
  async function handlePermanentDelete() {
    if (!permanentlyDeletingPost || isPermanentlyDeleting) return;

    setIsPermanentlyDeleting(true);
    setError("");
    setNotice("");

    const postToDelete = permanentlyDeletingPost;

    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", postToDelete.id)
      .not("deleted_at", "is", null);

    if (error) {
      console.error("Permanent delete error:", error);
      setError("Unable to permanently delete this article. Please try again.");
      setIsPermanentlyDeleting(false);
      return;
    }

    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postToDelete.id)
    );

    setPermanentlyDeletingPost(null);
    setIsPermanentlyDeleting(false);
    setNotice("Article permanently deleted.");
  }

  // Open article editor
  function handleEditPost(post: BlogPost) {
    setIsCreating(false);
    setEditingPost(post);
    setError("");
    setNotice("");
  }

  // Open new article editor
  function handleCreatePost() {
    setEditingPost(null);
    setIsCreating(true);
    setError("");
    setNotice("");
  }

  // Close editor
  function handleCloseEditor() {
    setIsCreating(false);
    setEditingPost(null);
  }

  // Separate active and trashed articles
  const activePosts = posts.filter((post) => post.deleted_at === null);
  const trashedPosts = posts.filter((post) => post.deleted_at !== null);

  // Statistics only count active articles
  const publishedCount = activePosts.filter(
    (post) => post.status === "published"
  ).length;

  const draftCount = activePosts.filter(
    (post) => post.status === "draft"
  ).length;

  // Search the currently selected view
  const currentPosts =
    activeView === "articles" ? activePosts : trashedPosts;

  const filteredPosts = currentPosts.filter((post) => {
    const searchValue = search.toLowerCase().trim();

    return (
      post.title.toLowerCase().includes(searchValue) ||
      post.slug.toLowerCase().includes(searchValue) ||
      (post.excerpt ?? "").toLowerCase().includes(searchValue)
    );
  });

  // Switch between Articles and Trash
  function handleViewChange(view: BlogView) {
    setActiveView(view);
    setSearch("");
    setError("");
    setNotice("");
  }

  // Format dates
  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-KE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  // Show editor for creating or editing
  if (isCreating || editingPost) {
    const initialData: BlogEditorData | null = editingPost
      ? {
          title: editingPost.title,
          slug: editingPost.slug,
          excerpt: editingPost.excerpt ?? "",
          content: editingPost.content,
          featured_image: editingPost.featured_image ?? "",
          author: editingPost.author ?? "Champs Swimming Academy",
          status:
            editingPost.status === "published" ? "published" : "draft",
        }
      : null;

    return (
      <BlogEditor
        key={editingPost?.id ?? "new-article"}
        initialData={initialData}
        onCancel={handleCloseEditor}
        onSave={editingPost ? handleUpdateArticle : handleSaveArticle}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Blog Management
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage articles, drafts and published content.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {activeView === "articles" && (
            <button
              type="button"
              onClick={handleCreatePost}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <Plus size={16} />
              New Article
            </button>
          )}

          <button
            type="button"
            onClick={fetchPosts}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>
      </div>

      {/* Articles / Trash Navigation */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2">
        <button
          type="button"
          onClick={() => handleViewChange("articles")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            activeView === "articles"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <BookOpen size={16} />
          Articles
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${
              activeView === "articles"
                ? "bg-white/20 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {activePosts.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleViewChange("trash")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            activeView === "trash"
              ? "bg-red-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Archive size={16} />
          Trash
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${
              activeView === "trash"
                ? "bg-white/20 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {trashedPosts.length}
          </span>
        </button>
      </div>

      {/* Statistics */}
      {activeView === "articles" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <StatCard
            title="Total Articles"
            value={activePosts.length}
            icon={BookOpen}
            description="Active blog articles"
          />

          <StatCard
            title="Published"
            value={publishedCount}
            icon={Eye}
            description="Live articles"
          />

          <StatCard
            title="Drafts"
            value={draftCount}
            icon={Clock}
            description="Unpublished articles"
          />
        </div>
      )}

      {/* Trash Information */}
      {activeView === "trash" && (
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <Archive size={20} className="mt-0.5 shrink-0 text-amber-700" />
          <div>
            <h2 className="text-sm font-semibold text-amber-900">
              Recently trashed articles
            </h2>
            <p className="mt-1 text-sm leading-5 text-amber-800">
              Articles in Trash are hidden from the public website. You can
              restore them or permanently delete them.
            </p>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              activeView === "articles"
                ? "Search articles by title, slug or excerpt..."
                : "Search trashed articles..."
            }
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Success Notice */}
      {notice && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          <p>{notice}</p>
        </div>
      )}

      {/* Article List */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <h2 className="font-semibold text-slate-900">
              {activeView === "articles" ? "Articles" : "Trash"}
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {filteredPosts.length} article
              {filteredPosts.length === 1 ? "" : "s"} found
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-56 flex-col items-center justify-center gap-3 text-slate-500">
            <RefreshCw size={24} className="animate-spin text-blue-600" />
            <p className="text-sm">Loading blog articles...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          /* Empty State */
          <div className="flex min-h-64 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              {activeView === "articles" ? (
                <FileText size={24} className="text-slate-400" />
              ) : (
                <Archive size={24} className="text-slate-400" />
              )}
            </div>

            <h3 className="font-semibold text-slate-800">
              {search
                ? "No matching articles"
                : activeView === "articles"
                  ? "No blog articles yet"
                  : "Your Trash is empty"}
            </h3>

            <p className="mt-2 max-w-sm text-sm text-slate-500">
              {search
                ? "Try searching with another title or keyword."
                : activeView === "articles"
                  ? "Your blog articles will appear here once they are added."
                  : "Articles you move to Trash will appear here. You can restore them whenever you need."}
            </p>

            {!search && activeView === "articles" && (
              <button
                type="button"
                onClick={handleCreatePost}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <Plus size={16} />
                Create Your First Article
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    <th className="px-5 py-3.5">Article</th>
                    <th className="px-5 py-3.5">Status</th>
                    <th className="px-5 py-3.5">Author</th>
                    <th className="px-5 py-3.5">
                      {activeView === "articles" ? "Date Created" : "Date Trashed"}
                    </th>
                    <th className="px-5 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredPosts.map((post) => (
                    <tr
                      key={post.id}
                      className="transition hover:bg-slate-50/70"
                    >
                      <td className="max-w-md px-5 py-4">
                        <p className="font-medium text-slate-800">
                          {post.title}
                        </p>

                        <p className="mt-1 truncate text-xs text-slate-500">
                          /{post.slug}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={post.status} />
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {post.author || "Champs Swimming Academy"}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {formatDate(
                          activeView === "articles"
                            ? post.created_at
                            : post.deleted_at!
                        )}
                      </td>

                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {activeView === "articles" ? (
                            <>
                              <button
                                type="button"
                                onClick={() => handleEditPost(post)}
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                              >
                                <Pencil size={15} />
                                Edit
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setError("");
                                  setNotice("");
                                  setDeletingPost(post);
                                }}
                                className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
                              >
                                <Archive size={15} />
                                Move to Trash
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                onClick={() => handleRestorePost(post)}
                                disabled={restoringPostId !== null}
                                className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 disabled:opacity-50"
                              >
                                {restoringPostId === post.id ? (
                                  <RefreshCw size={15} className="animate-spin" />
                                ) : (
                                  <RotateCcw size={15} />
                                )}
                                Restore
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setError("");
                                  setNotice("");
                                  setPermanentlyDeletingPost(post);
                                }}
                                className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                              >
                                <Trash2 size={15} />
                                Delete Permanently
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Article List */}
            <div className="divide-y divide-slate-100 md:hidden">
              {filteredPosts.map((post) => (
                <div key={post.id} className="space-y-3 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-slate-800">
                        {post.title}
                      </h3>

                      <p className="mt-1 break-all text-xs text-slate-500">
                        /{post.slug}
                      </p>
                    </div>

                    <StatusBadge status={post.status} />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <span>{post.author || "Champs Swimming Academy"}</span>

                    <span>
                      {formatDate(
                        activeView === "articles"
                          ? post.created_at
                          : post.deleted_at!
                      )}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeView === "articles" ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleEditPost(post)}
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Pencil size={15} />
                          Edit Article
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setError("");
                            setNotice("");
                            setDeletingPost(post);
                          }}
                          className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
                        >
                          <Archive size={15} />
                          Move to Trash
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => handleRestorePost(post)}
                          disabled={restoringPostId !== null}
                          className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 disabled:opacity-50"
                        >
                          {restoringPostId === post.id ? (
                            <RefreshCw size={15} className="animate-spin" />
                          ) : (
                            <RotateCcw size={15} />
                          )}
                          Restore
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setError("");
                            setNotice("");
                            setPermanentlyDeletingPost(post);
                          }}
                          className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                        >
                          <Trash2 size={15} />
                          Delete Permanently
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Move to Trash Confirmation Dialog */}
      {deletingPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => !isDeleting && setDeletingPost(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Archive size={22} />
              </div>

              <button
                type="button"
                onClick={() => !isDeleting && setDeletingPost(null)}
                disabled={isDeleting}
                aria-label="Close confirmation"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
              >
                <X size={18} />
              </button>
            </div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Move article to Trash?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              The following article will be removed from the public website:
            </p>

            <div className="mt-3 rounded-xl border border-amber-100 bg-amber-50 p-3">
              <p className="text-sm font-semibold text-amber-900">
                {deletingPost.title}
              </p>
            </div>

            <p className="mt-3 text-sm text-slate-500">
              You can restore this article later from the Trash section. Its
              content and publication status will be preserved.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setDeletingPost(null)}
                disabled={isDeleting}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleMoveToTrash}
                disabled={isDeleting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isDeleting ? (
                  <>
                    <RefreshCw size={15} className="animate-spin" />
                    Moving...
                  </>
                ) : (
                  <>
                    <Archive size={15} />
                    Move to Trash
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Permanent Delete Confirmation Dialog */}
      {permanentlyDeletingPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() =>
            !isPermanentlyDeleting && setPermanentlyDeletingPost(null)
          }
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Trash2 size={22} />
              </div>

              <button
                type="button"
                onClick={() =>
                  !isPermanentlyDeleting &&
                  setPermanentlyDeletingPost(null)
                }
                disabled={isPermanentlyDeleting}
                aria-label="Close permanent delete confirmation"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
              >
                <X size={18} />
              </button>
            </div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Permanently delete article?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              You are about to permanently delete:
            </p>

            <div className="mt-3 rounded-xl border border-red-100 bg-red-50 p-3">
              <p className="text-sm font-semibold text-red-800">
                {permanentlyDeletingPost.title}
              </p>
            </div>

            <p className="mt-3 text-sm text-slate-500">
              This action cannot be undone. The article will be permanently
              removed from your database and cannot be restored.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setPermanentlyDeletingPost(null)}
                disabled={isPermanentlyDeleting}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handlePermanentDelete}
                disabled={isPermanentlyDeleting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPermanentlyDeleting ? (
                  <>
                    <RefreshCw size={15} className="animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={15} />
                    Delete Permanently
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Statistics Card
function StatCard({
  title,
  value,
  icon: Icon,
  description,
}: {
  title: string;
  value: number;
  icon: React.ElementType;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

// Article Status Badge
function StatusBadge({ status }: { status: string }) {
  const isPublished = status === "published";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        isPublished
          ? "bg-emerald-50 text-emerald-700"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      {isPublished ? "Published" : "Draft"}
    </span>
  );
}
