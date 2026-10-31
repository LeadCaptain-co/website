"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/Image";
import { Wind, Droplets } from "lucide-react";

const levels = [
  { l: "לידים נכנסים", v: 88, g: "bg-gradient-to-l from-[#00D4FF] to-[#3f8ecf]", tc: "text-[#00D4FF]" },
  { l: "לידים מוסמכים", v: 64, g: "bg-gradient-to-l from-[#2DD4BF] to-[#0E9BB0]", tc: "text-[#2DD4BF]" },
  { l: "פגישות שנקבעו", v: 41, g: "bg-gradient-to-l from-[#FFC24B] to-[#FF9A5C]", tc: "text-[#FFC24B]" },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-[13px] tracking-[0.25em] text-[#00D4FF]">גשר הפיקוד</span>
          <h2 className="mt-4 font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            יותר שקט. פחות ערימות של הודעות.
          </h2>
          <p className="mt-5 text-[18px] leading-[1.8] text-[#E0F2F7]/70">
            כל הפניות, השיחות והמשימות מרוכזות במקום אחד, כדי שתוכלו לראות מה קורה בעסק, להגיב בזמן, ולא לפספס אף לקוח או לקוחה.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#00D4FF]/30" />
              <div className="absolute inset-4 rounded-full border border-dashed border-white/15" />
              <div>
                <div className="font-heading font-bold text-white text-6xl">1,284</div>
                <div className="mt-2 text-[13px] tracking-widest text-[#00D4FF]">סה״כ המרות</div>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-[#E0F2F7]/60">מתחילת הרבעון, אצל 40 עסקים על הסיפון</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-md p-8"
          >
            <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-semibold">
              <Droplets className="w-4 h-4" /> מפלס הלידים
            </div>
            <div className="mt-8 space-y-7">
              {levels.map((x) => (
                <div key={x.l}>
                  <div className="flex justify-between text-[15px] text-[#E0F2F7]/75">
                    <span>{x.l}</span>
                    <span className={`font-mono ${x.tc}`}>{x.v}%</span>
                  </div>
                  {/* The track (real size) is what gets observed; the fill inherits "show" from it.
                      Observing the fill itself is fragile because it starts with zero area. */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-2 h-2.5 rounded-full bg-white/10 overflow-hidden"
                  >
                    <motion.div
                      variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      style={{ width: `${x.v}%`, transformOrigin: "right" }}
                      className={`h-full rounded-full ${x.g}`}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="mt-9 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Wind className="w-5 h-5 text-[#FFC24B]" />
              <span className="text-[15px] text-[#E0F2F7]/75">כיוון הרוח: מגמת המרה עולה, ‎+18% החודש</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="group rounded-[2rem] overflow-hidden border border-white/10 relative"
          >
            <Image
              src="/img/compass-map.png"
              alt="מצפן זוהר ומפת ניווט ימית על גשר הפיקוד של ספינה"
              className="w-full h-full min-h-[22rem] transition-transform duration-700 group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#00D4FF]/40 transition-all" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}