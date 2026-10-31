"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/Image";
import { Quote } from "lucide-react";

const items = [
  { q: "עברנו מ־40 דקות תגובה ל־10 שניות. יומן הפגישות מתמלא לבד, ואני מגיע רק לשיחות שסוגרות.", n: "עדי לוי", r: "מנכ״לית, סטודיו עיצוב פנים", c: "text-[#00D4FF]/70" },
  { q: "הסינון האוטומטי חסך לנו נציג שלם. הקפטן שואל בדיוק את מה שהיינו שואלים, רק בלי לישון.", n: "רון בן־חיים", r: "בעלים, חברת שיפוצים", c: "text-[#FFC24B]/70" },
  { q: "לראשונה יש לנו תמונה מסודרת של כל פנייה בוואטסאפ. שקט תפעולי אמיתי.", n: "מיכל אזולאי", r: "סמנכ״לית שיווק, רשת קליניקות", c: "text-[#FF7E67]/70" },
];

export default function Proof() {
  return (
    <section id="proof" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/img/lighthouse.png" alt="מגדלור זכוכית עתידני על ים שקט" className="w-full h-full opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/70 to-[#0A192F]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-[13px] tracking-[0.25em] text-[#FFC24B]">אמון על הסיפון</span>
          <h2 className="mt-4 font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            עסקים ששינו כיוון ולא חזרו
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-[#0A192F]/50 backdrop-blur-xl p-8"
            >
              <Quote className={`w-7 h-7 ${t.c}`} />
              <blockquote className="mt-5 text-[17px] leading-[1.85] text-[#E0F2F7]/85">{t.q}</blockquote>
              <figcaption className="mt-7 pt-5 border-t border-white/10">
                <div className="font-heading font-bold text-white">{t.n}</div>
                <div className="text-sm text-[#E0F2F7]/55 mt-0.5">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}