import { requireAdmin } from "@/lib/admin-auth";
import PostForm from "../../PostForm";

export default async function NewPost() {
  await requireAdmin();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 font-heading text-3xl font-bold text-white">פוסט חדש</h1>
      <PostForm />
    </main>
  );
}
