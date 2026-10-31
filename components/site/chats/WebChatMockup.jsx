"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";

export default function WebChatMockup({ chat }) {
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-3xl overflow-hidden bg-[#F5F7FB] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.08)]">
      <div className="bg-[#1E4FB8] px-4 py-4 flex items-center gap-3 text-white">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">{chat.business[0]}</div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold truncate">{chat.business}</div>
          <div className="text-[11px] text-white/80 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#22C55E]" /> זמינים עכשיו</div>
        </div>
        <X className="w-4 h-4" />
      </div>
      <div className="h-[480px] px-3 py-4 space-y-2.5">
        {chat.messages.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.35 }} className={`flex ${m.from === "lead" ? "justify-end" : "justify-start"}`}>
            <p className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13px] leading-[1.45] ${m.from === "lead" ? "bg-[#1E4FB8] text-white" : "bg-white text-[#111B21] border border-[#E5E7EB]"}`}>{m.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-[#E5E7EB] bg-white px-3 py-2.5 flex items-center gap-2">
        <div className="flex-1 rounded-full border border-[#1E4FB8] px-3 py-2 text-[12px] text-[#8696A0]">כתבו הודעה...</div>
        <div className="w-9 h-9 rounded-full bg-[#1E4FB8]/40 flex items-center justify-center text-white"><Send className="w-4 h-4" /></div>
      </div>
      <div className="bg-white pb-2 text-center text-[11px] text-[#8696A0]">Powered by LeadCaptain</div>
    </div>
  );
}