"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "lc_cookie_consent";

export default function CookieBanner() {
  // Start hidden so server and first client render match; localStorage is only
  // readable after hydration.
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      setShow(!localStorage.getItem(KEY));
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // Storage can be blocked (private mode); still dismiss for this visit.
    }
    setShow(false);
  };

  return (
    <div
      dir="rtl"
      role="dialog"
      aria-label="הודעת עוגיות"
      className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:max-w-md z-[60] rounded-2xl border border-white/15 bg-[#0A192F]/95 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] font-body"
    >
      <p className="text-[14px] leading-relaxed text-[#E0F2F7]/80">
        אנו משתמשים בעוגיות (Cookies) כדי להפעיל את האתר, לשפר את חוויית הגלישה ולנתח שימוש. המשך הגלישה מהווה הסכמה לשימוש בעוגיות חיוניות. לפרטים נוספים ראו את{" "}
        <Link href="/privacy-policy" className="text-[#00D4FF] hover:underline">מדיניות הפרטיות</Link>.
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => choose("all")} className="rounded-full px-5 py-2 text-sm font-semibold bg-[#00D4FF] text-[#0A192F]">
          מאשר/ת
        </button>
        <button onClick={() => choose("essential")} className="rounded-full px-5 py-2 text-sm font-semibold border border-white/20 text-[#E0F2F7]">
          חיוניות בלבד
        </button>
      </div>
    </div>
  );
}
