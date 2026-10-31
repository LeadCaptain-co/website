"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

export default function ChatBubble({ message, index }) {
  const isLead = message.from === "lead";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.25 + index * 0.35 }}
      className={`flex ${isLead ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[82%] rounded-lg px-2.5 pt-1.5 pb-1 text-[13px] leading-[1.45] text-[#111B21] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] ${
          isLead ? "bg-[#D9FDD3] rounded-tl-none" : "bg-white rounded-tr-none"
        }`}
      >
        <p>{message.text}</p>
        <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-[#667781]">
          {message.time}
          {isLead && <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />}
        </div>
      </div>
    </motion.div>
  );
}