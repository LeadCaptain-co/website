import type { Metadata } from "next";
import Link from "next/link";
import BlogShell from "@/components/blog/BlogShell";
import { getPublishedPosts } from "@/lib/blog";
import { SEO } from "@/lib/content";

export const metadata: Metadata = {
  title: SEO.blog.title,
  description: SEO.blog.description,
  alternates: { canonical: "/blog" },
  openGraph: { title: SEO.blog.title, description: SEO.blog.description, url: "/blog" },
  twitter: { title: SEO.blog.title, description: SEO.blog.description },
};

const dateFmt = new Intl.DateTimeFormat("he-IL", { dateStyle: "long" });

export default async function BlogIndex() {
  const posts = await getPublishedPosts();
  return (
    <BlogShell>
      <h1 className="font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        הבלוג של הקפטן
      </h1>
      <p className="mt-4 text-[18px] text-[#E0F2F7]/65 max-w-2xl">טיפים, מדריכים ותובנות על אוטומציית לידים, וואטסאפ עסקי ו-AI.</p>

      {posts.length === 0 ? (
        <p className="mt-16 text-[#E0F2F7]/60">פוסטים חדשים בדרך. חזרו בקרוב.</p>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden hover:border-[#00D4FF]/50 transition-colors"
            >
              {p.cover_image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.cover_image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
              )}
              <div className="p-6">
                {p.published_at && <time className="text-[13px] text-[#00D4FF]/80">{dateFmt.format(new Date(p.published_at))}</time>}
                <h2 className="mt-2 font-heading font-bold text-xl text-white group-hover:text-[#00D4FF] transition-colors">{p.title}</h2>
                {p.excerpt && <p className="mt-3 text-[16px] leading-[1.7] text-[#E0F2F7]/65">{p.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </BlogShell>
  );
}
