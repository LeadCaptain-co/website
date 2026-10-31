import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

// Same URLs as the original public/sitemap.xml. /delete-account is noindex, so it is left out.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-07");
  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
