import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { SITE } from "@/lib/content";

// Same URLs as the original public/sitemap.xml, plus the blog. /delete-account is noindex, so it is left out.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date("2026-10-07");
  const posts = (await getPublishedPosts()).filter((p) => !p.noindex);
  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/blog`, lastModified: posts[0]?.updated_date ? new Date(posts[0].updated_date) : lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.updated_date ?? p.published_at ?? lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${SITE.url}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
