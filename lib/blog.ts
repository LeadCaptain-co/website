import "server-only";
import { createClient } from "@base44/sdk";
import { cacheLife, cacheTag } from "next/cache";

// Blog posts live in the Base44 `BlogPost` entity (base44/entities/BlogPost.jsonc), next to `Lead`.
// Public reads use an anonymous client (entity rules only expose published posts);
// admin reads/writes use the signed-in admin's token (see lib/admin-auth.ts).

export const APP_ID = process.env.BASE44_APP_ID ?? "6a835c885ca154bb27d0eb2b"; // public identifier
export const SERVER_URL = process.env.BASE44_SERVER_URL ?? "https://base44.app";
export const BLOG_TAG = "blog";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  cover_image?: string;
  author?: string;
  tags?: string[];
  status?: "draft" | "published";
  published_at?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  noindex?: boolean;
  created_date?: string;
  updated_date?: string;
};

export type BlogPostInput = Omit<BlogPost, "id" | "created_date" | "updated_date">;

export function anonymousClient() {
  return createClient({ appId: APP_ID, serverUrl: SERVER_URL, requiresAuth: false });
}

export function tokenClient(token: string) {
  return createClient({ appId: APP_ID, serverUrl: SERVER_URL, token, requiresAuth: false });
}

const byNewest = (a: BlogPost, b: BlogPost) =>
  (b.published_at ?? b.created_date ?? "").localeCompare(a.published_at ?? a.created_date ?? "");

export async function getPublishedPosts(): Promise<BlogPost[]> {
  "use cache";
  cacheTag(BLOG_TAG);
  cacheLife("minutes");
  try {
    const posts = (await anonymousClient().entities.BlogPost.filter({ status: "published" }, "-published_at", 200)) as BlogPost[];
    return posts.sort(byNewest);
  } catch (err) {
    console.error("getPublishedPosts failed", err);
    return [];
  }
}

export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  "use cache";
  cacheTag(BLOG_TAG);
  cacheLife("minutes");
  try {
    const [post] = (await anonymousClient().entities.BlogPost.filter({ slug, status: "published" }, undefined, 1)) as BlogPost[];
    return post ?? null;
  } catch (err) {
    console.error("getPublishedPost failed", err);
    return null;
  }
}

/** SEO fields resolved with their fallbacks; used by the post page metadata and JSON-LD. */
export function resolveSeo(post: BlogPost, siteUrl: string, defaultImage: string) {
  const title = post.meta_title?.trim() || post.title;
  const description = post.meta_description?.trim() || post.excerpt?.trim() || "";
  const image = post.og_image?.trim() || post.cover_image?.trim() || defaultImage;
  return {
    title,
    description,
    keywords: post.meta_keywords?.split(",").map((k) => k.trim()).filter(Boolean),
    canonical: post.canonical_url?.trim() || `${siteUrl}/blog/${post.slug}`,
    ogTitle: post.og_title?.trim() || title,
    ogDescription: post.og_description?.trim() || description,
    image,
    noindex: post.noindex === true,
  };
}
