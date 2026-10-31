"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Video, Camera, Heart } from "lucide-react";

export default function InstagramMockup({ chat }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px] rounded-[2.75rem] border-[10px] border-[#11161d] bg-[#11161d] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.08)]">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-5 w-24 rounded-full bg-[#11161d]" />
      <div className="overflow-hidden rounded-[2.1rem] bg-black text-white">
        <div className="pt-8 pb-2.5 px-3 flex items-center gap-2 border-b border-white/10">
          <ArrowRight className="w-4 h-4" />
          <div className="w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[11px] font-bold">N</div>
          </div>
          <div className="flex-1 min-w-0 text-[13px] font-semibold truncate" dir="ltr">{chat.business}</div>
          <Phone className="w-4 h-4" />
          <Video className="w-4 h-4" />
        </div>
        <div className="h-[460px] px-3 py-3 space-y-2">
          {chat.messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.35 }} className={`flex ${m.from === "lead" ? "justify-end" : "justify-start"}`}>
              <p className={`max-w-[78%] rounded-3xl px-3.5 py-2 text-[13px] leading-[1.45] ${m.from === "lead" ? "bg-gradient-to-l from-[#7B2FF7] to-[#C13584]" : "bg-[#262626]"}`}>{m.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2 m-2 rounded-full bg-[#262626] px-3 py-2 text-white/50">
          <div className="w-7 h-7 rounded-full bg-[#3797F0] flex items-center justify-center text-white"><Camera className="w-4 h-4" /></div>
          <span className="flex-1 text-[12px]">הודעה...</span>
          <Heart className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}