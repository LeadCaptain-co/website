"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/Image";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1400], [0, 130]);
  const y = useTransform(scrollY, [0, 900], [0, 120]);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_0%,#14315a_0%,#0A192F_55%,#061223_100%)]" />
      <motion.div style={{ rotate, y }} className="absolute -left-24 top-1/2 -translate-y-1/2 w-[46rem] h-[46rem] hidden md:block">
        <Image
          src="/img/helm.png"
          alt="הגה קפטן זכוכיתי מרחף"
          fittingType="fit"
          className="w-full h-full opacity-40 mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_55%,transparent_78%)]"
        />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A192F] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl mr-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[13px] text-[#E0F2F7]/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            אוטומציית לידים בוואטסאפ מונעת AI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-7 font-heading font-bold text-white leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            הקפטן שמוביל את הלידים שלך
            <span className="block text-[#00D4FF]">לחוף מבטחים</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-[19px] leading-[1.8] text-[#E0F2F7]/75 max-w-2xl"
          >
            הפתרון שמביא אלייך יותר לקוחות ובונה איתם קשר אישי.
            <br />
            הכירו את העוזר הדיגיטלי שעוזר לכם להפוך כל פנייה להזדמנות: להציג את המוצרים והשירותים שלכם בצורה מדויקת, לענות במהירות וביחס אישי, וללוות כל לקוח ולקוחה בדרך שמתאימה להם.
            <br />
            הוא עובד עבורכם גם כשאתם עסוקים, כדי שכל מי שפונה אליכם ירגיש שמקשיבים לו, מבינים את הצורך שלו, ומציעים לו מענה נכון, מקצועי ועיסקי.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <a
              href="#harbor"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00D4FF] text-[#0A192F] px-8 py-4 font-bold hover:shadow-[0_0_36px_rgba(0,212,255,0.5)] transition-shadow"
            >
              התחל 14 ימי ניסיון בחינם
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a href="#how" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-[#E0F2F7] hover:bg-white/10 transition-colors">
              איך זה עובד
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-[#E0F2F7]/55">
              <ShieldCheck className="w-4 h-4 text-[#00D4FF]" /> הקמה ב־5–10 דקות או עד 24 שע׳ בליווי · 14 ימי ניסיון ללא התחייבות
            </span>
          </motion.div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { k: "5 דק׳", v: "הקמה בשירות עצמי", c: "text-[#00D4FF]" },
              { k: "×3.4", v: "יותר פגישות שנקבעו", c: "text-[#FFC24B]" },
              { k: "14 ימים", v: "ניסיון ללא התחייבות", c: "text-[#FF7E67]" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                <div className={`font-heading font-bold text-2xl ${s.c}`}>{s.k}</div>
                <div className="mt-1 text-[13px] leading-relaxed text-[#E0F2F7]/65">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}