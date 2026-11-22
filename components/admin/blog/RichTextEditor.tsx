
"use client";

import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo2,
  Redo2,
  Quote,
  Minus,
  Pilcrow,
} from "lucide-react";

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RichTextEditor({
  value,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-cyan-600 underline underline-offset-2",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
          class: "rounded-xl max-w-full h-auto my-5",
        },
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[320px] px-5 py-4 text-sm leading-7 text-slate-700 outline-none focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;

    const currentContent = editor.getHTML();

    if (value !== currentContent) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [editor, value]);

  if (!editor) {
    return (
      <div className="min-h-[320px] animate-pulse rounded-xl bg-slate-50" />
    );
  }

  const buttonClass = (active = false) =>
    `inline-flex h-9 w-9 items-center justify-center rounded-lg transition ${
      active
        ? "bg-cyan-100 text-cyan-700"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  const addLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter the link URL:", previousUrl || "https://");

    if (url === null) return;

    if (url.trim() === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url.trim() })
      .run();
  };

  const addImage = () => {
    const url = window.prompt("Enter the image URL:");

    if (!url?.trim()) return;

    editor.chain().focus().setImage({ src: url.trim() }).run();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2">
        <button
          type="button"
          title="Paragraph"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={buttonClass(editor.isActive("paragraph"))}
        >
          <Pilcrow size={17} />
        </button>

        <button
          type="button"
          title="Heading 1"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={buttonClass(editor.isActive("heading", { level: 1 }))}
        >
          <Heading1 size={18} />
        </button>

        <button
          type="button"
          title="Heading 2"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={buttonClass(editor.isActive("heading", { level: 2 }))}
        >
          <Heading2 size={18} />
        </button>

        <span className="mx-1 h-6 w-px bg-slate-200" />

        <button
          type="button"
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass(editor.isActive("bold"))}
        >
          <Bold size={17} />
        </button>

        <button
          type="button"
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonClass(editor.isActive("italic"))}
        >
          <Italic size={17} />
        </button>

        <button
          type="button"
          title="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={buttonClass(editor.isActive("underline"))}
        >
          <UnderlineIcon size={17} />
        </button>

        <span className="mx-1 h-6 w-px bg-slate-200" />

        <button
          type="button"
          title="Bullet list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonClass(editor.isActive("bulletList"))}
        >
          <List size={18} />
        </button>

        <button
          type="button"
          title="Numbered list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={buttonClass(editor.isActive("orderedList"))}
        >
          <ListOrdered size={18} />
        </button>

        <button
          type="button"
          title="Blockquote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={buttonClass(editor.isActive("blockquote"))}
        >
          <Quote size={17} />
        </button>

        <button
          type="button"
          title="Horizontal divider"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={buttonClass()}
        >
          <Minus size={17} />
        </button>

        <span className="mx-1 h-6 w-px bg-slate-200" />

        <button
          type="button"
          title="Add link"
          onClick={addLink}
          className={buttonClass(editor.isActive("link"))}
        >
          <LinkIcon size={17} />
        </button>

        <button
          type="button"
          title="Add image"
          onClick={addImage}
          className={buttonClass()}
        >
          <ImageIcon size={17} />
        </button>

        <span className="mx-1 h-6 w-px bg-slate-200" />

        <button
          type="button"
          title="Undo"
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
          className={`${buttonClass()} disabled:cursor-not-allowed disabled:opacity-30`}
        >
          <Undo2 size={17} />
        </button>

        <button
          type="button"
          title="Redo"
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
          className={`${buttonClass()} disabled:cursor-not-allowed disabled:opacity-30`}
        >
          <Redo2 size={17} />
        </button>
      </div>

      <EditorContent editor={editor} />

      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2">
        <p className="text-xs text-slate-400">
          Use the toolbar to format your article.
        </p>
        <p className="text-xs text-slate-400">
          Rich text editor
        </p>
      </div>

      <style jsx global>{`
        .tiptap {
          min-height: 320px;
        }

        .tiptap p {
          margin: 0.65rem 0;
        }

        .tiptap h1 {
          margin: 1.5rem 0 0.75rem;
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.3;
          color: #172b3a;
        }

        .tiptap h2 {
          margin: 1.25rem 0 0.65rem;
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.4;
          color: #172b3a;
        }

        .tiptap ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin: 0.75rem 0;
        }

        .tiptap ol {
          list-style: decimal;
          padding-left: 1.5rem;
          margin: 0.75rem 0;
        }

        .tiptap li {
          margin: 0.3rem 0;
        }

        .tiptap blockquote {
          border-left: 3px solid #0891b2;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #64748b;
        }

        .tiptap hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 1.5rem 0;
        }

        .tiptap img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 1.25rem 0;
        }

        .tiptap a {
          color: #0891b2;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .tiptap p.is-editor-empty:first-child::before {
          color: #94a3b8;
          content: "Start writing your article here...";
          float: left;
          height: 0;
          pointer-events: none;
        }

        .tiptap:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}
