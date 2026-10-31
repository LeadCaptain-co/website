"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { ADMIN_COOKIE, requireAdmin } from "@/lib/admin-auth";
import { anonymousClient, BLOG_TAG, type BlogPost, type BlogPostInput } from "@/lib/blog";

export type FormState = { error?: string } | undefined;

export async function login(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "נא למלא אימייל וסיסמה" };

  let token: string;
  try {
    const res = await anonymousClient().auth.loginViaEmailPassword(email, password);
    if (res.user?.role !== "admin") return { error: "לחשבון זה אין הרשאת מנהל" };
    token = res.access_token;
  } catch {
    return { error: "אימייל או סיסמה שגויים" };
  }

  (await cookies()).set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

const SLUG_RE = /^[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*$/u;

function parsePost(formData: FormData): BlogPostInput | { error: string } {
  const str = (k: string, max: number) => String(formData.get(k) ?? "").trim().slice(0, max);
  const status = formData.get("status") === "published" ? "published" : "draft";
  const title = str("title", 200);
  const slug = str("slug", 120).toLowerCase();
  if (!title) return { error: "חסרה כותרת" };
  if (!SLUG_RE.test(slug)) return { error: "ה-slug יכול להכיל אותיות, ספרות ומקפים בלבד" };

  const publishedRaw = str("published_at", 40);
  const published = publishedRaw ? new Date(publishedRaw) : null;
  if (published && Number.isNaN(published.getTime())) return { error: "תאריך פרסום לא תקין" };

  return {
    title,
    slug,
    excerpt: str("excerpt", 500),
    content: String(formData.get("content") ?? ""),
    cover_image: str("cover_image", 500),
    author: str("author", 120),
    tags: str("tags", 500).split(",").map((t) => t.trim()).filter(Boolean),
    status,
    published_at: published ? published.toISOString() : status === "published" ? new Date().toISOString() : "",
    meta_title: str("meta_title", 200),
    meta_description: str("meta_description", 400),
    meta_keywords: str("meta_keywords", 400),
    canonical_url: str("canonical_url", 500),
    og_title: str("og_title", 200),
    og_description: str("og_description", 400),
    og_image: str("og_image", 500),
    noindex: formData.get("noindex") === "on",
  };
}

export async function savePost(_prev: FormState, formData: FormData): Promise<FormState> {
  const { client } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const data = parsePost(formData);
  if ("error" in data) return data;

  try {
    const clash = (await client.entities.BlogPost.filter({ slug: data.slug }, undefined, 5)) as BlogPost[];
    if (clash.some((p) => p.id !== id)) return { error: "ה-slug כבר בשימוש בפוסט אחר" };
    if (id) await client.entities.BlogPost.update(id, data);
    else await client.entities.BlogPost.create(data);
  } catch (err) {
    console.error("savePost failed", err);
    return { error: "השמירה נכשלה, נסו שוב" };
  }

  revalidateTag(BLOG_TAG, { expire: 0 });
  redirect("/admin");
}

export async function deletePost(formData: FormData) {
  const { client } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (id) await client.entities.BlogPost.delete(id);
  revalidateTag(BLOG_TAG, { expire: 0 });
  redirect("/admin");
}
