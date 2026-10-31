"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/Image";
import { MessageCircle, Brain, Filter, CalendarCheck, Anchor } from "lucide-react";

const steps = [
{ icon: Brain, ic: "text-[#2DD4BF]", bc: "border-[#2DD4BF]/50 shadow-[0_0_18px_rgba(45,212,191,0.35)]", hc: "hover:border-[#2DD4BF]/35", t: "מלמדים אותו להכיר את העסק", d: "מעלים קטלוגים, מסמכים, תמונות, שאלות נפוצות, מוצרים ושירותים. כך הקפטן יודע להציג את המידע הנכון ולתת מענה שמתאים לעסק שלכם." },
{ icon: MessageCircle, ic: "text-[#00D4FF]", bc: "border-[#00D4FF]/50 shadow-[0_0_18px_rgba(0,212,255,0.35)]", hc: "hover:border-[#00D4FF]/35", t: "כל פנייה מקבלת מענה אישי", d: "כשלקוח או לקוחה פונים בשאלה, בהתעניינות או בבקשה לפרטים, הקפטן מזהה את הצורך, עונה באופן טבעי וממשיך את השיחה בצורה נעימה ומכבדת." },
{ icon: Filter, ic: "text-[#FFC24B]", bc: "border-[#FFC24B]/50 shadow-[0_0_18px_rgba(255,194,75,0.35)]", hc: "hover:border-[#FFC24B]/35", t: "מבינים את הצורך לפני שמציעים", d: "הקפטן שואל שאלות חכמות ומקשיב לתשובות, כדי להבין מה באמת מתאים לכל לקוח או לקוחה ולא להציע פתרון כללי." },
{ icon: CalendarCheck, ic: "text-[#FF7E67]", bc: "border-[#FF7E67]/50 shadow-[0_0_18px_rgba(255,126,103,0.35)]", hc: "hover:border-[#FF7E67]/35", t: "הופכים התעניינות לעסקה", d: "לאחר שהצורך ברור, הקפטן מוביל את השיחה עד לסגירה: מציע את השירות או המוצר המתאימים, עונה על שאלות, שולח הצעת מחיר ומאפשר ללקוח או ללקוחה לשריין מועד ביומן או להשלים רכישה גם כשאתם לא זמינים." }];


export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how" ref={ref} className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-[13px] tracking-[0.25em] text-[#2DD4BF]">הזרם האוטומטי</span>
          <h2 className="mt-4 font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            מהמידע של העסק ועד להצעה שמרגישה אישית
          </h2>
          <p className="mt-5 text-[18px] leading-[1.8] text-[#E0F2F7]/70">הקפטן לומד להכיר את העסק שלכם, את השירותים והמוצרים שאתם מציעים ואת סגנון התקשורת שלכם, כדי שכל שיחה עם לקוח או לקוחה תהיה מדויקת, מקצועית ואישית.

          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_0.85fr] gap-14 items-start">
          <div className="relative pr-10">
            <div className="absolute top-0 bottom-0 right-[15px] w-px bg-white/10" />
            <motion.div style={{ height }} className="absolute top-0 right-[15px] w-px bg-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.8)]" />
            <div className="space-y-10">
              {steps.map((s, i) =>
              <motion.div
                key={s.t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative">
                
                  <span className={`absolute -right-10 top-1 w-8 h-8 rounded-full bg-[#0A192F] border flex items-center justify-center ${s.bc}`}>
                    <s.icon className={`w-4 h-4 ${s.ic}`} />
                  </span>
                  <div className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-7 ${s.hc} transition-colors`}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#00D4FF]/70">0{i + 1}</span>
                      <h3 className="font-heading font-bold text-xl text-white">{s.t}</h3>
                    </div>
                    <p className="mt-3 text-[17px] leading-[1.8] text-[#E0F2F7]/70">{s.d}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="group relative rounded-[2rem] overflow-hidden border border-white/10">
            <Image
              src="/img/compass-deck.png"
              alt="מצפן ימי זוהר על סיפון ספינה מול ים לילי ומגדלור"
              className="w-full h-[26rem] transition-transform duration-700 group-hover:scale-[1.06]" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 rounded-2xl border border-white/15 bg-[#0A192F]/60 backdrop-blur-xl p-5">
              <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-semibold">
                <Anchor className="w-4 h-4" /> ניווט אוטונומי
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-[#E0F2F7]/75">
                הקמה בשירות עצמי תוך 5–10 דקות, או עד 24 שעות בליווי צמוד, והבוט מוכן לעבודה מיידית.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}