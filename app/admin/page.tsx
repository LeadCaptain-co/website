import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import type { BlogPost } from "@/lib/blog";
import { deletePost, logout } from "./actions";

export default async function AdminHome() {
  const { client, user } = await requireAdmin();
  const posts = (await client.entities.BlogPost.list("-created_date", 500)) as BlogPost[];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-3xl text-white">ניהול הבלוג</h1>
          <p className="mt-1 text-sm text-[#E0F2F7]/55" dir="ltr">{user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/blog" className="text-sm text-[#00D4FF] hover:underline">לצפייה בבלוג</Link>
          <Link href="/admin/posts/new" className="rounded-full bg-[#00D4FF] px-5 py-2 text-sm font-semibold text-[#0A192F]">פוסט חדש</Link>
          <form action={logout}>
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-[#00D4FF]">יציאה</button>
          </form>
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        {posts.length === 0 ? (
          <p className="p-8 text-[#E0F2F7]/60">עדיין אין פוסטים. צרו את הראשון.</p>
        ) : (
          <ul className="divide-y divide-white/10">
            {posts.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-4 p-4">
                <div className="min-w-0">
                  <Link href={`/admin/posts/${p.id}`} className="font-semibold text-white hover:text-[#00D4FF]">{p.title}</Link>
                  <p className="mt-0.5 text-xs text-[#E0F2F7]/50" dir="ltr">/blog/{p.slug}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className={`rounded-full px-3 py-0.5 text-xs ${p.status === "published" ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-[#E0F2F7]/70"}`}>
                    {p.status === "published" ? "מפורסם" : "טיוטה"}
                  </span>
                  {p.status === "published" && <Link href={`/blog/${p.slug}`} className="text-[#00D4FF] hover:underline">צפייה</Link>}
                  <Link href={`/admin/posts/${p.id}`} className="hover:text-[#00D4FF]">עריכה</Link>
                  <form action={deletePost}>
                    <input type="hidden" name="id" value={p.id} />
                    <button className="text-red-400 hover:underline">מחיקה</button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
