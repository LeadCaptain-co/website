import React from "react";
import Link from "next/link";
import { Image } from "@/components/ui/Image";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const HAT_URL = "/img/captain-hat.png";

export default function Footer() {
  return (
    <footer className="bg-[#061223] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-right">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 text-[#E0F2F7]">
            <Image src={HAT_URL} alt="leadcaptain.co" fittingType="fit" className="w-11 h-11 mix-blend-screen drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]" />
            <span className="font-heading font-bold text-xl">
              leadcaptain<span className="text-[#00D4FF]">.co</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-[16px] leading-[1.8] text-[#E0F2F7]/55">
            אוטומציית לידים בוואטסאפ מונעת AI. אנחנו מנווטים כל פנייה מהרגע הראשון ועד הפגישה, ואתם נשארים בגשר הפיקוד.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white">ניווט</h4>
          <ul className="mt-4 space-y-3 text-[15px] text-[#E0F2F7]/60">
            <li><Link href="/#how" className="hover:text-[#00D4FF] transition-colors">איך זה עובד</Link></li>
            <li><Link href="/#dashboard" className="hover:text-[#00D4FF] transition-colors">גשר הפיקוד</Link></li>
            <li><Link href="/#pricing" className="hover:text-[#00D4FF] transition-colors">מסלולים</Link></li>
            <li><Link href="/#faq" className="hover:text-[#00D4FF] transition-colors">שאלות נפוצות</Link></li>
            <li><Link href="/blog" className="hover:text-[#00D4FF] transition-colors">בלוג</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white">יצירת קשר</h4>
          <ul className="mt-4 space-y-3 text-[15px] text-[#E0F2F7]/60">
            <li>
              <a href="tel:+972553091668" className="inline-flex items-center gap-2 hover:text-[#00D4FF] transition-colors">
                <Phone className="w-4 h-4" /> 055-309-1668
              </a>
            </li>
            <li>
              <a href="mailto:contact@leadcaptain.co" className="inline-flex items-center gap-2 hover:text-[#00D4FF] transition-colors">
                <Mail className="w-4 h-4" /> contact@leadcaptain.co
              </a>
            </li>
            <li className="flex items-center gap-4 pt-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#00D4FF] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#00D4FF] transition-colors"><Instagram className="w-5 h-5" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-between text-[13px] text-[#E0F2F7]/40">
        <span>© 2026 leadcaptain.co · כל הזכויות שמורות</span>
        <div className="flex gap-6">
          <Link href="/#harbor" className="hover:text-[#00D4FF] transition-colors">הדגמה חיה</Link>
          <Link href="/terms-of-service" className="hover:text-[#00D4FF] transition-colors">תנאי שימוש</Link>
          <Link href="/privacy-policy" className="hover:text-[#00D4FF] transition-colors">מדיניות פרטיות</Link>
          <Link href="/delete-account" className="hover:text-[#00D4FF] transition-colors">מחיקת חשבון</Link>
        </div>
      </div>
    </footer>
  );
}