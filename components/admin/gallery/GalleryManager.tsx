
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Images,
  Upload,
  Search,
  ImagePlus,
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Image as ImageIcon,
  ChevronDown,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type GalleryImage = {
  id: string;
  title: string;
  caption: string | null;
  image_url: string;
  storage_path: string | null;
  category: string | null;
  is_published: boolean;
  display_order: number;
  created_at: string;
};

const CATEGORIES = [
  "general",
  "training",
  "competitions",
  "events",
  "coaches",
  "facilities",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function formatCategory(category: string | null) {
  if (!category) return "General";

  return category
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getFileName(file: File) {
  return file.name
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function GalleryManager() {
  const supabase = useMemo(() => createClient(), []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadCategory, setUploadCategory] = useState("general");
  const [uploadCaption, setUploadCaption] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [savingEdit, setSavingEdit] = useState(false);
  const [busyImageId, setBusyImageId] = useState<string | null>(null);
  const [deletingImageId, setDeletingImageId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadImages = useCallback(async () => {
    setLoading(true);
    setError("");

    const { data, error: fetchError } = await supabase
      .from("gallery_images")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
      setLoading(false);
      return;
    }

    setImages((data ?? []) as GalleryImage[]);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    void loadImages();
  }, [loadImages]);

  const publishedCount = images.filter((image) => image.is_published).length;
  const draftCount = images.filter((image) => !image.is_published).length;

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(search.toLowerCase()) ||
      (image.caption ?? "").toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "published" && image.is_published) ||
      (statusFilter === "draft" && !image.is_published);

    const matchesCategory =
      categoryFilter === "all" || image.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  function openUpload() {
    setSelectedFiles([]);
    setUploadCaption("");
    setUploadCategory("general");
    setError("");
    setShowUpload(true);
  }

  function handleFilesSelected(files: FileList | null) {
    if (!files) return;

    const incoming = Array.from(files);
    const validFiles: File[] = [];
    const problems: string[] = [];

    for (const file of incoming) {
      if (!file.type.startsWith("image/")) {
        problems.push(`${file.name} is not an image.`);
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        problems.push(`${file.name} exceeds the 10 MB limit.`);
        continue;
      }

      validFiles.push(file);
    }

    setSelectedFiles(validFiles);
    setError(problems.join(" "));
  }

  async function uploadImages() {
    if (!selectedFiles.length) {
      setError("Please select at least one image.");
      return;
    }

    setUploading(true);
    setError("");
    setSuccess("");

    let uploadedCount = 0;

    for (let index = 0; index < selectedFiles.length; index++) {
      const file = selectedFiles[index];

      setUploadProgress(
        `Uploading image ${index + 1} of ${selectedFiles.length}...`
      );

      const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const safeName = file.name
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9._-]/g, "");

      const storagePath = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(storagePath, file, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        setError(`Failed to upload ${file.name}: ${uploadError.message}`);
        continue;
      }

      const { data: publicUrlData } = supabase.storage
        .from("gallery")
        .getPublicUrl(storagePath);

      const { error: insertError } = await supabase
        .from("gallery_images")
      .insert({
        title: getFileName(file),
        caption: uploadCaption.trim() || null,
        image_url: publicUrlData.publicUrl,
        storage_path: storagePath,
        category: uploadCategory,
        is_published: false,
        display_order: images.length + uploadedCount,
      });

      if (insertError) {
        await supabase.storage.from("gallery").remove([storagePath]);
        setError(
          `Image uploaded but database record failed for ${file.name}: ${insertError.message}`
        );
        continue;
      }

      uploadedCount++;
    }

    setUploading(false);
    setUploadProgress("");

    if (uploadedCount > 0) {
      setSuccess(
        `${uploadedCount} image${uploadedCount === 1 ? "" : "s"} uploaded successfully.`
      );
      setShowUpload(false);
      setSelectedFiles([]);
      await loadImages();
    }
  }

  async function togglePublish(image: GalleryImage) {
    setBusyImageId(image.id);
    setError("");
    setSuccess("");

    const newStatus = !image.is_published;

    const { error: updateError } = await supabase
      .from("gallery_images")
      .update({ is_published: newStatus })
      .eq("id", image.id);

    if (updateError) {
      setError(updateError.message);
    } else {
      setImages((current) =>
        current.map((item) =>
          item.id === image.id
            ? { ...item, is_published: newStatus }
            : item
        )
      );

      setSuccess(
        newStatus ? "Image published successfully." : "Image unpublished successfully."
      );
    }

    setBusyImageId(null);
  }

  async function saveEdit() {
    if (!editingImage) return;

    setSavingEdit(true);
    setError("");
    setSuccess("");

    const { error: updateError } = await supabase
      .from("gallery_images")
      .update({
        title: editingImage.title.trim(),
        caption: editingImage.caption?.trim() || null,
        category: editingImage.category || "general",
        is_published: editingImage.is_published,
      })
      .eq("id", editingImage.id);

    if (updateError) {
      setError(updateError.message);
    } else {
      setImages((current) =>
        current.map((item) =>
          item.id === editingImage.id ? editingImage : item
        )
      );
      setSuccess("Image details updated successfully.");
      setEditingImage(null);
    }

    setSavingEdit(false);
  }

  async function deleteImage(image: GalleryImage) {
    const confirmed = window.confirm(
      `Delete "${image.title}" permanently? This will remove the image and its database record.`
    );

    if (!confirmed) return;

    setDeletingImageId(image.id);
    setError("");
    setSuccess("");

    // Delete the storage file first, if its path is available.
    if (image.storage_path) {
      const { error: storageError } = await supabase.storage
        .from("gallery")
        .remove([image.storage_path]);

      if (storageError) {
        setError(`Could not delete image file: ${storageError.message}`);
        setDeletingImageId(null);
        return;
      }
    }

    const { error: databaseError } = await supabase
      .from("gallery_images")
      .delete()
      .eq("id", image.id);

    if (databaseError) {
      setError(
        `Storage file deleted, but database record removal failed: ${databaseError.message}`
      );
      await loadImages();
      setDeletingImageId(null);
      return;
    }

    setImages((current) => current.filter((item) => item.id !== image.id));
    setSuccess("Image deleted successfully.");
    setDeletingImageId(null);
  }

  return (
    <div className="space-y-5">
      {/* Page heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            <Images size={15} />
            Content management
          </div>

          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Gallery
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage swimming academy photos and publications.
          </p>
        </div>

        <button
          onClick={openUpload}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#173b67] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#102d50]"
        >
          <Upload size={17} />
          Upload images
        </button>
      </div>

      {/* Feedback */}
      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={17} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard
          label="Total images"
          value={images.length}
          icon={<Images size={19} />}
          color="blue"
        />
        <StatCard
          label="Published"
          value={publishedCount}
          icon={<Eye size={19} />}
          color="green"
        />
        <StatCard
          label="Drafts"
          value={draftCount}
          icon={<EyeOff size={19} />}
          color="amber"
        />
      </div>

      {/* Gallery controls */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search gallery..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterSelect
              value={statusFilter}
              onChange={setStatusFilter}
              options={[
                { value: "all", label: "All statuses" },
                { value: "published", label: "Published" },
                { value: "draft", label: "Drafts" },
              ]}
            />

            <FilterSelect
              value={categoryFilter}
              onChange={setCategoryFilter}
              options={[
                { value: "all", label: "All categories" },
                ...CATEGORIES.map((category) => ({
                  value: category,
                  label: formatCategory(category),
                })),
              ]}
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <p className="text-xs text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {filteredImages.length}
            </span>{" "}
            of {images.length} images
          </p>

          <button
            onClick={() => {
              setSearch("");
              setStatusFilter("all");
              setCategoryFilter("all");
            }}
            className="text-xs font-medium text-blue-600 transition hover:text-blue-800"
          >
            Reset filters
          </button>
        </div>
      </div>

      {/* Gallery */}
      {loading ? (
        <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Loader2 size={18} className="animate-spin" />
            Loading gallery...
          </div>
        </div>
      ) : filteredImages.length === 0 ? (
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <ImagePlus size={25} />
          </div>

          <h3 className="mt-4 font-semibold text-slate-800">
            {images.length === 0
              ? "Your gallery is empty"
              : "No images found"}
          </h3>

          <p className="mt-1 max-w-sm text-sm text-slate-500">
            {images.length === 0
              ? "Upload your first swimming academy photos to get started."
              : "Try adjusting your search or filters."}
          </p>

          {images.length === 0 && (
            <button
              onClick={openUpload}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#173b67] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102d50]"
            >
              <Upload size={16} />
              Upload first images
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredImages.map((image) => (
            <article
              key={image.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={image.image_url}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute left-3 top-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm ${
                      image.is_published
                        ? "bg-emerald-500 text-white"
                        : "bg-amber-400 text-slate-900"
                    }`}
                  >
                    {image.is_published ? "Published" : "Draft"}
                  </span>
                </div>

                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {formatCategory(image.category)}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-slate-900">
                    {image.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
                    {image.caption || "No caption added."}
                  </p>

                  <p className="mt-2 text-[11px] text-slate-400">
                    Added {formatDate(image.created_at)}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
                  <button
                    disabled={busyImageId === image.id}
                    onClick={() => togglePublish(image)}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold transition disabled:opacity-50 ${
                      image.is_published
                        ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                        : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    }`}
                  >
                    {busyImageId === image.id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : image.is_published ? (
                      <EyeOff size={14} />
                    ) : (
                      <Eye size={14} />
                    )}
                    {image.is_published ? "Hide" : "Publish"}
                  </button>

                  <button
                    onClick={() => setEditingImage({ ...image })}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-2 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>

                  <button
                    disabled={deletingImageId === image.id}
                    onClick={() => deleteImage(image)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-red-50 px-2 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                  >
                    {deletingImageId === image.id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Trash2 size={14} />
                    )}
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Upload modal */}
      {showUpload && (
        <Modal onClose={() => !uploading && setShowUpload(false)}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Upload gallery images
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Add photos to your academy gallery.
              </p>
            </div>

            <button
              disabled={uploading}
              onClick={() => setShowUpload(false)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-5 space-y-4">
            <button
              disabled={uploading}
              onClick={() => fileInputRef.current?.click()}
              className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-8 transition hover:border-blue-400 hover:bg-blue-50/50"
            >
              <Upload size={25} className="text-blue-600" />
              <span className="mt-2 text-sm font-semibold text-slate-800">
                Select images from your device
              </span>
              <span className="mt-1 text-xs text-slate-500">
                JPG, PNG or WebP · Maximum 10 MB per image
              </span>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              hidden
              onChange={(event) => handleFilesSelected(event.target.files)}
            />

            {selectedFiles.length > 0 && (
              <div className="rounded-xl border border-slate-200 p-3">
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  {selectedFiles.length} selected image
                  {selectedFiles.length === 1 ? "" : "s"}
                </p>

                <div className="max-h-36 space-y-1.5 overflow-y-auto">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2"
                    >
                      <ImageIcon size={15} className="shrink-0 text-blue-500" />
                      <span className="min-w-0 flex-1 truncate text-xs text-slate-700">
                        {file.name}
                      </span>
                      <span className="shrink-0 text-[10px] text-slate-400">
                        {(file.size / (1024 * 1024)).toFixed(1)} MB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Category
              </label>

              <select
                value={uploadCategory}
                onChange={(event) => setUploadCategory(event.target.value)}
                disabled={uploading}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {formatCategory(category)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Caption <span className="font-normal text-slate-400">(optional)</span>
              </label>

              <textarea
                value={uploadCaption}
                onChange={(event) => setUploadCaption(event.target.value)}
                disabled={uploading}
                rows={3}
                placeholder="Add a description for these images..."
                className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {uploading && (
              <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2.5 text-sm text-blue-700">
                <Loader2 size={16} className="animate-spin" />
                {uploadProgress}
              </div>
            )}

            <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-end">
              <button
                disabled={uploading}
                onClick={() => setShowUpload(false)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                disabled={uploading || selectedFiles.length === 0}
                onClick={uploadImages}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#173b67] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102d50] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Upload size={16} />
                )}
                {uploading ? "Uploading..." : "Upload images"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Edit modal */}
      {editingImage && (
        <Modal onClose={() => !savingEdit && setEditingImage(null)}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Edit image details
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Update the image information.
              </p>
            </div>

            <button
              disabled={savingEdit}
              onClick={() => setEditingImage(null)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl bg-slate-100">
            <img
              src={editingImage.image_url}
              alt={editingImage.title}
              className="max-h-52 w-full object-contain"
            />
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Title
              </label>
              <input
                value={editingImage.title}
                onChange={(event) =>
                  setEditingImage({
                    ...editingImage,
                    title: event.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Caption
              </label>
              <textarea
                rows={3}
                value={editingImage.caption ?? ""}
                onChange={(event) =>
                  setEditingImage({
                    ...editingImage,
                    caption: event.target.value,
                  })
                }
                className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Category
              </label>
              <select
                value={editingImage.category ?? "general"}
                onChange={(event) =>
                  setEditingImage({
                    ...editingImage,
                    category: event.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {formatCategory(category)}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3">
              <input
                type="checkbox"
                checked={editingImage.is_published}
                onChange={(event) =>
                  setEditingImage({
                    ...editingImage,
                    is_published: event.target.checked,
                  })
                }
                className="size-4 accent-blue-600"
              />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Publish this image
                </p>
                <p className="text-xs text-slate-500">
                  Published images are visible on the public website.
                </p>
              </div>
            </label>

            <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-end">
              <button
                disabled={savingEdit}
                onClick={() => setEditingImage(null)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                disabled={savingEdit || !editingImage.title.trim()}
                onClick={saveEdit}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#173b67] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102d50] disabled:opacity-50"
              >
                {savingEdit && <Loader2 size={16} className="animate-spin" />}
                {savingEdit ? "Saving..." : "Save changes"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function StatCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: "blue" | "green" | "amber";
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}>
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-slate-500">{label}</p>
        <p className="mt-0.5 text-2xl font-bold tracking-tight text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   FILTER SELECT
============================================================ */

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-600 outline-none transition hover:border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

/* ============================================================
   MODAL
============================================================ */

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/50 p-3 backdrop-blur-[2px] sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="my-auto w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
        {children}
      </div>
    </div>
  );
}
