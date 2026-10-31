import type { Metadata } from "next";
import { Trash2 } from "lucide-react";
import LegalShell, { NumberedSections } from "@/components/legal/LegalShell";
import { SEO } from "@/lib/content";

// Original SeoManager marks this page noindex,follow
export const metadata: Metadata = {
  title: SEO.deleteAccount.title,
  description: SEO.deleteAccount.description,
  alternates: { canonical: "/delete-account" },
  robots: { index: false, follow: true },
  openGraph: { title: SEO.deleteAccount.title, description: SEO.deleteAccount.description, url: "/delete-account" },
  twitter: { title: SEO.deleteAccount.title, description: SEO.deleteAccount.description },
};

const steps = [
  { h: "מחיקת חשבון ונתונים", b: "התחברת באמצעות כניסה עם Google או Facebook? עומדת לך הזכות לבקש את מחיקת החשבון שלך וכל הנתונים הקשורים אליו בכל עת. התהליך פשוט ואינו כרוך בעלות." },
  { h: "איך מבקשים מחיקה", b: "כדי לבקש את מחיקת הנתונים שלך, שלחו אימייל אל support@leadcaptain.co ובו כתובת האימייל המשויכת לחשבונכם." },
  { h: "משך הטיפול", b: "נמחק את החשבון והנתונים הקשורים אליו בתוך 30 ימים מקבלת הבקשה. לאחר המחיקה לא ניתן יהיה לשחזר את המידע." },
  { h: "אילו נתונים נמחקים", b: "פרטי החשבון, פרטי העסק, הגדרות המערכת ומאגר הידע, היסטוריית השיחות והלידים שנשמרו אצלנו. הכול נמחק באופן סופי ומאובטח." },
];

export default function DeleteAccount() {
  return (
    <LegalShell
      icon={Trash2}
      badge="מחיקת חשבון ונתונים"
      title="מחיקת חשבון ונתונים אישיים"
      subtitle="הוראות למשתמשים המעוניינים למחוק את חשבונם ואת כל הנתונים הקשורים אליו"
    >
      <NumberedSections items={steps} />
    </LegalShell>
  );
}
