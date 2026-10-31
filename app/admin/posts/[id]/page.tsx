import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import type { BlogPost } from "@/lib/blog";
import PostForm from "../../PostForm";

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const { client } = await requireAdmin();
  const { id } = await params;
  let post: BlogPost | null = null;
  try {
    post = (await client.entities.BlogPost.get(id)) as BlogPost;
  } catch {
    post = null;
  }
  if (!post) notFound();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 font-heading text-3xl font-bold text-white">עריכת פוסט</h1>
      <PostForm post={post} />
    </main>
  );
}
