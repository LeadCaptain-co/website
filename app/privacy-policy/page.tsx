import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import LegalShell, { NumberedSections } from "@/components/legal/LegalShell";
import { SEO } from "@/lib/content";

export const metadata: Metadata = {
  title: SEO.privacy.title,
  description: SEO.privacy.description,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: { title: SEO.privacy.title, description: SEO.privacy.description, url: "/privacy-policy" },
  twitter: { title: SEO.privacy.title, description: SEO.privacy.description },
};

const sections = [
  { h: "מי אנחנו", b: "leadcaptain.co מספקת שירות אוטומציית לידים בוואטסאפ מונע AI. המדיניות זו מפרטת איזה מידע נאסף, כיצד נעשה בו שימוש ומה הן זכויותיך." },
  { h: "מידע שנאסף", b: "אנו אוספים פרטים שאתה מוסר מרצון בטפסי ההרשמה ופנייה באתר: שם מלא, מספר טלפון, כתובת דוא״ל ופרטי עסק. בנוסף נאספים נתוני שימוש טכניים (סוג דפדפן, עמודי צפייה, כתובת IP) לצורכי אבטחה ושיפור השירות." },
  { h: "כיצד נעשה שימוש במידע", b: "המידע משמש למתן שירות אוטומטי לפניות וואטסאפ, ניתוח ושיפור איכות השיחות, יצירת קשר עסקית, שליחת עדכונים שיווקיים (ניתן לבטל בכל עת) ועמידה בהתחייבויות חוקיות." },
  { h: "שיתוף מידע עם צדדים שלישיים", b: "איננו מוכרים את המידע שלך. נשתף נתונים רק עם ספקי שירותים המסייעים בהפעלת הפלטפורמה (כגון אחסון, תשתיות הודעות ו-CRM), בכפוף להסכמי סודיות, או כאשר נדרש על-פי דין." },
  { h: "שמירת המידע", b: "נשמור את המידע למשך התקופה הנחוצה להפעלת השירות ולעמידה בדרישות חוקיות. ניתן לבקש מחיקת נתונים בכל עת." },
  { h: "אבטחת מידע", b: "אנו נוקטים אמצעי אבטחה טכניים וארגוניים סבירים, לרבות הצפנה ובקרת גישה, כדי להגן על המידע מפני גישה לא מורשית, גילוי או שינוי." },
  { h: "זכויותיך", b: "עומדות לך הזכויות הבאות: גישה למידע שמור עליך, תיקון מידע לא מדויק, מחיקת מידע, הגבלת עיבוד והעברת נתונים. למימוש הזכויות נא לפנות לפרטי הקשר בתחתית העמוד." },
  { h: "קובצי cookie", b: "האתר משתמש בקובצי cookie לשיפור חוויית השימוש ולניתוח תעבורה. ניתן לנהל את העדפות ה-cookie בהגדרות הדפדפן." },
  { h: "שינויים במדיניות", b: "עשויות לחול שינויים במדיניות זו. נפרסם גרסה מעודכנת בעמוד זה ונעדכן את תאריך העדכון האחרון." },
];

export default function PrivacyPolicy() {
  return (
    <LegalShell icon={ShieldCheck} badge="מדיניות פרטיות" title="מדיניות פרטיות" subtitle="עודכן לאחרונה: 19 באוגוסט 2026">
      <NumberedSections items={sections} />
      <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6">
        <h3 className="font-heading font-bold text-white">יצירת קשר לענייני פרטיות</h3>
        <p className="mt-3 text-[17px] leading-[1.8] text-[#E0F2F7]/70">
          לכל שאלה בנוגע לפרטיות או למימוש זכויותיך, נא לפנות אלינו בכתובת{" "}
          <a href="mailto:contact@leadcaptain.co" className="text-[#00D4FF] hover:underline">contact@leadcaptain.co</a>.
        </p>
      </div>
    </LegalShell>
  );
}
