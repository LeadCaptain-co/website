import type { Metadata } from "next";
import { ScrollText } from "lucide-react";
import LegalShell from "@/components/legal/LegalShell";
import LegalMarkdown from "@/components/legal/LegalMarkdown";
import termsContent from "@/components/legal/termsContent";
import { SEO } from "@/lib/content";

export const metadata: Metadata = {
  title: SEO.terms.title,
  description: SEO.terms.description,
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
  openGraph: { title: SEO.terms.title, description: SEO.terms.description, url: "/terms-of-service" },
  twitter: { title: SEO.terms.title, description: SEO.terms.description },
};

export default function TermsOfService() {
  return (
    <LegalShell icon={ScrollText} badge="תנאי שימוש" title="תנאי השירות של LeadCaptain" subtitle="עודכן לאחרונה: 12 באוקטובר 2026">
      <div className="mt-8">
        <LegalMarkdown content={termsContent} />
      </div>
    </LegalShell>
  );
}
