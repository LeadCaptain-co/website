import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogShell from "@/components/blog/BlogShell";
import PostMarkdown from "@/components/blog/PostMarkdown";
import { getPublishedPost, resolveSeo } from "@/lib/blog";
import { SITE } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

const dateFmt = new Intl.DateTimeFormat("he-IL", { dateStyle: "long" });
const decode = (s: string) => {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost(decode((await params).slug));
  if (!post) return { title: "הפוסט לא נמצא", robots: { index: false } };
  const seo = resolveSeo(post, SITE.url, SITE.ogImage);
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: post.author ? [{ name: post.author }] : undefined,
    alternates: { canonical: seo.canonical },
    robots: seo.noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "article",
      url: seo.canonical,
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [{ url: seo.image }],
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_date || undefined,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: seo.ogTitle, description: seo.ogDescription, images: [seo.image] },
  };
}

async function Article({ params }: Props) {
  const slug = decode((await params).slug);
  const post = await getPublishedPost(slug);
  if (!post) notFound();
  const seo = resolveSeo(post, SITE.url, SITE.ogImage);
  const abs = (u: string) => (u.startsWith("http") ? u : `${SITE.url}${u}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: seo.description,
    image: abs(seo.image),
    datePublished: post.published_at || undefined,
    dateModified: post.updated_date || post.published_at || undefined,
    inLanguage: "he-IL",
    mainEntityOfPage: seo.canonical,
    author: { "@type": post.author ? "Person" : "Organization", name: post.author || SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/img/captain-hat.png` } },
    keywords: post.tags?.join(", ") || undefined,
  };

  return (
    <BlogShell narrow>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className="text-[14px] text-[#00D4FF] hover:underline">← חזרה לבלוג</Link>
      <article className="mt-6">
        <h1 className="font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>{post.title}</h1>
        <p className="mt-4 text-[15px] text-[#E0F2F7]/55">
          {post.author && <span>{post.author} · </span>}
          {post.published_at && <time dateTime={post.published_at}>{dateFmt.format(new Date(post.published_at))}</time>}
        </p>
        {post.cover_image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover_image} alt="" className="mt-8 w-full rounded-2xl border border-white/10" />
        )}
        <div className="mt-6">
          <PostMarkdown content={post.content ?? ""} />
        </div>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[13px] text-[#E0F2F7]/70">{t}</li>
            ))}
          </ul>
        )}
      </article>
    </BlogShell>
  );
}

export default function BlogPostPage(props: Props) {
  return (
    <Suspense fallback={null}>
      <Article {...props} />
    </Suspense>
  );
}
