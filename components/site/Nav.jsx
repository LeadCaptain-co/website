"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "@/components/ui/Image";
import { Menu, X } from "lucide-react";

const HAT_URL = "/img/captain-hat.png";

const links = [
  { href: "/#how", label: "איך זה עובד", deg: "015°" },
  { href: "/#channels", label: "ערוצים", deg: "045°" },
  { href: "/#dashboard", label: "גשר הפיקוד", deg: "090°" },
  { href: "/#proof", label: "לקוחות", deg: "180°" },
  { href: "/#pricing", label: "מסלולים", deg: "270°" },
  { href: "/#faq", label: "שאלות", deg: "330°" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "bg-[#0A192F]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/#top" className="flex items-center gap-3 text-[#E0F2F7]">
          <Image src={HAT_URL} alt="leadcaptain.co" fittingType="fit" sizes="36px" priority className="w-9 h-9 mix-blend-screen" />
          <span className="font-heading font-bold text-lg tracking-tight">
            leadcaptain<span className="text-[#00D4FF]">.co</span>
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="group relative text-[15px] text-[#E0F2F7]/75 hover:text-white transition-colors">
              <span className="absolute -top-4 right-1/2 translate-x-1/2 text-[10px] tracking-widest text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity">
                {l.deg}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://app.leadcaptain.co"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold border border-white/20 bg-white/5 text-[#E0F2F7] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
          >
            כניסה / הרשמה
          </a>
          <Link
            href="/#harbor"
            className="hidden md:inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold bg-[#00D4FF] text-[#0A192F] hover:shadow-[0_0_28px_rgba(0,212,255,0.45)] transition-shadow"
          >
            התחל 14 ימי ניסיון בחינם
          </Link>
          <button
            className="md:hidden text-[#E0F2F7]"
            onClick={() => setOpen(!open)}
            aria-label="תפריט"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A192F]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[#E0F2F7]/85 text-lg">
              {l.label}
            </Link>
          ))}
          <a
            href="https://app.leadcaptain.co"
            target="_blank"
            rel="noreferrer"
            className="block text-center rounded-full py-3 font-semibold border border-white/20 bg-white/5 text-[#E0F2F7]"
          >
            כניסה / הרשמה
          </a>
          <Link
            href="/#harbor"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full py-3 font-semibold bg-[#00D4FF] text-[#0A192F]"
          >
            התחל 14 ימי ניסיון בחינם
          </Link>
        </div>
      )}
    </header>
  );
}
