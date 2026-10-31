import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ניהול הבלוג | LeadCaptain",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen bg-[#0A192F] text-[#E0F2F7] font-body antialiased">
      <Suspense fallback={<p className="p-8 text-[#E0F2F7]/60">טוען…</p>}>{children}</Suspense>
    </div>
  );
}
