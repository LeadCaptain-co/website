"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Facebook, Instagram, MessagesSquare } from "lucide-react";

const CHANNELS = [
  { icon: MessageCircle, name: "WhatsApp", color: "text-[#25D366]", text: "הערוץ המרכזי. הקפטן עונה ללידים, מסנן ומתאם פגישות ישירות בוואטסאפ העסקי שלכם." },
  { icon: Send, name: "Telegram", color: "text-[#2AABEE]", text: "בוט טלגרם שמגיב מיד, לעסקים וקהילות שמעדיפים את הערוץ הזה." },
  { icon: Facebook, name: "Messenger", color: "text-[#0084FF]", text: "מענה אוטומטי להודעות בעמוד הפייסבוק, כך שאף פנייה מקמפיין לא נשארת בלי תשובה." },
  { icon: Instagram, name: "Instagram", color: "text-[#E1306C]", text: "תשובות להודעות ישירות באינסטגרם, בטון של המותג שלכם." },
  { icon: MessagesSquare, name: "צ'אט באתר", color: "text-[#00D4FF]", text: "וידג'ט צ'אט שמוטמע באתר בשורת קוד אחת, ופוגש את הגולשים בדיוק כשהם מתעניינים." },
];

export default function Channels() {
  return (
    <section id="channels" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading font-bold text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
          קפטן אחד, כל הערוצים
        </h2>
        <p className="mt-4 text-[18px] text-[#E0F2F7]/70 max-w-2xl mx-auto">
          הלקוחות שלכם פונים מכל מקום. הקפטן עונה בכולם, עם אותו ידע עסקי ואותה תיבת שיחות מרוכזת.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CHANNELS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 text-right"
            >
              <c.icon className={`w-8 h-8 ${c.color}`} />
              <h3 className="mt-4 font-heading font-bold text-lg text-white">{c.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#E0F2F7]/70">{c.text}</p>
            </motion.div>
          ))}
        </div>
        <a
          href="https://app.leadcaptain.co/signup"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center rounded-full px-8 py-3.5 font-semibold bg-[#00D4FF] text-[#0A192F] hover:shadow-[0_0_28px_rgba(0,212,255,0.45)] transition-shadow"
        >
          חברו את הערוצים שלכם בחינם
        </a>
      </div>
    </section>
  );
}