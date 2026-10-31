"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import PostMarkdown from "@/components/blog/PostMarkdown";
import type { BlogPost } from "@/lib/blog";
import { savePost } from "./actions";

const input = "mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[#00D4FF]";
const hint = "mt-1 text-xs text-[#E0F2F7]/45";

function Field({ label, hintText, children }: { label: string; hintText?: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      {label}
      {children}
      {hintText && <span className={`block ${hint}`}>{hintText}</span>}
    </label>
  );
}

const toLocalInput = (iso?: string) => (iso ? new Date(new Date(iso).getTime() - new Date(iso).getTimezoneOffset() * 60000).toISOString().slice(0, 16) : "");

export default function PostForm({ post }: { post?: BlogPost }) {
  const [state, action, pending] = useActionState(savePost, undefined);
  const [content, setContent] = useState(post?.content ?? "");
  const [preview, setPreview] = useState(false);
  const [metaTitle, setMetaTitle] = useState(post?.meta_title ?? "");
  const [metaDesc, setMetaDesc] = useState(post?.meta_description ?? "");

  return (
    <form action={action} className="space-y-10">
      {post && <input type="hidden" name="id" value={post.id} />}

      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold text-[#00D4FF]">תוכן</h2>
        <Field label="כותרת"><input name="title" required defaultValue={post?.title} className={input} /></Field>
        <Field label="Slug" hintText="כתובת הפוסט: /blog/<slug> (אותיות, ספרות ומקפים)">
          <input name="slug" required defaultValue={post?.slug} dir="ltr" className={input} />
        </Field>
        <Field label="תקציר" hintText="מוצג ברשימת הבלוג, ומשמש כברירת מחדל ל-meta description">
          <textarea name="excerpt" rows={2} defaultValue={post?.excerpt} className={input} />
        </Field>
        <div>
          <div className="flex items-center justify-between text-sm">
            <span>תוכן (Markdown)</span>
            <button type="button" onClick={() => setPreview(!preview)} className="text-[#00D4FF] hover:underline">
              {preview ? "חזרה לעריכה" : "תצוגה מקדימה"}
            </button>
          </div>
          <textarea
            name="content"
            rows={20}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            hidden={preview}
            className={`${input} font-mono text-[14px] leading-6`}
          />
          {preview && (
            <div className="mt-1 rounded-lg border border-white/15 bg-white/[0.03] p-5"><PostMarkdown content={content} /></div>
          )}
          <span className={`block ${hint}`}>## כותרת משנה, **מודגש**, [קישור](https://…), ![alt](כתובת-תמונה), רשימות עם - או 1.</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="תמונה ראשית (URL)"><input name="cover_image" defaultValue={post?.cover_image} dir="ltr" className={input} /></Field>
          <Field label="כותב/ת"><input name="author" defaultValue={post?.author} className={input} /></Field>
          <Field label="תגיות" hintText="מופרדות בפסיק"><input name="tags" defaultValue={post?.tags?.join(", ")} className={input} /></Field>
          <Field label="תאריך פרסום" hintText="ריק = ברגע הפרסום">
            <input name="published_at" type="datetime-local" defaultValue={toLocalInput(post?.published_at)} dir="ltr" className={input} />
          </Field>
        </div>
        <Field label="סטטוס">
          <select name="status" defaultValue={post?.status ?? "draft"} className={input}>
            <option value="draft">טיוטה</option>
            <option value="published">מפורסם</option>
          </select>
        </Field>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold text-[#00D4FF]">SEO ותגיות Meta</h2>
        <Field label="Meta title" hintText={`${metaTitle.length} תווים (מומלץ עד 60). ריק = כותרת הפוסט`}>
          <input name="meta_title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className={input} />
        </Field>
        <Field label="Meta description" hintText={`${metaDesc.length} תווים (מומלץ עד 160). ריק = התקציר`}>
          <textarea name="meta_description" rows={3} value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} className={input} />
        </Field>
        <Field label="Meta keywords" hintText="מופרדות בפסיק"><input name="meta_keywords" defaultValue={post?.meta_keywords} className={input} /></Field>
        <Field label="Canonical URL" hintText="ריק = https://leadcaptain.co/blog/<slug>">
          <input name="canonical_url" defaultValue={post?.canonical_url} dir="ltr" className={input} />
        </Field>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Open Graph title" hintText="ריק = Meta title"><input name="og_title" defaultValue={post?.og_title} className={input} /></Field>
          <Field label="Open Graph image (URL)" hintText="ריק = התמונה הראשית"><input name="og_image" defaultValue={post?.og_image} dir="ltr" className={input} /></Field>
        </div>
        <Field label="Open Graph description" hintText="ריק = Meta description">
          <textarea name="og_description" rows={2} defaultValue={post?.og_description} className={input} />
        </Field>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="noindex" defaultChecked={post?.noindex} className="h-4 w-4" />
          noindex: אל תאפשרו למנועי חיפוש לאנדקס את הפוסט
        </label>
      </section>

      {state?.error && <p role="alert" className="text-sm text-red-400">{state.error}</p>}
      <div className="flex items-center gap-4">
        <button disabled={pending} className="rounded-full bg-[#00D4FF] px-8 py-2.5 font-semibold text-[#0A192F] disabled:opacity-60">
          {pending ? "שומר…" : "שמירה"}
        </button>
        <Link href="/admin" className="text-sm text-[#E0F2F7]/70 hover:underline">ביטול</Link>
      </div>
    </form>
  );
}
