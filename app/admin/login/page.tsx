import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  if (await getAdminSession()) redirect("/admin");
  return (
    <main className="mx-auto max-w-sm px-6 py-24">
      <h1 className="font-heading font-bold text-3xl text-white">כניסת מנהל</h1>
      <p className="mt-2 text-[15px] text-[#E0F2F7]/60">התחברו עם חשבון ה-Base44 של האתר (נדרשת הרשאת admin).</p>
      <LoginForm />
    </main>
  );
}
