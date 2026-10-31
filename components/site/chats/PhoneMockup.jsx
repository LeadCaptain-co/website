import React from "react";
import { ArrowRight, Video, Phone, Smile, Paperclip, Mic } from "lucide-react";
import ChatBubble from "@/components/site/chats/ChatBubble";

const WALLPAPER = "/img/phone-bg.png";

export default function PhoneMockup({ chat }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px] rounded-[2.75rem] border-[10px] border-[#11161d] bg-[#11161d] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.08)]">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-5 w-24 rounded-full bg-[#11161d]" />
      <div className="overflow-hidden rounded-[2.1rem] bg-[#EFE7DD]">
        <div className="bg-[#008069] pt-8 pb-2.5 px-3 flex items-center gap-2 text-white">
          <ArrowRight className="w-4 h-4 shrink-0" />
          <div className="w-8 h-8 rounded-full bg-[#0A192F] flex items-center justify-center text-[#00D4FF] font-heading font-bold text-sm shrink-0">
            {chat.business[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-semibold truncate">{chat.business}</div>
            <div className="text-[11px] text-white/80">מחובר/ת</div>
          </div>
          <Video className="w-4 h-4" />
          <Phone className="w-4 h-4" />
        </div>
        <div className="h-[460px] px-2.5 py-3 space-y-2 bg-cover bg-center" style={{ backgroundImage: `url(${WALLPAPER})` }}>
          <div className="mx-auto w-fit rounded-md bg-white/90 px-2.5 py-0.5 text-[11px] text-[#54656F] shadow-sm">היום</div>
          {chat.messages.map((m, i) => (
            <ChatBubble key={i} message={m} index={i} />
          ))}
        </div>
        <div className="flex items-center gap-2 px-2 py-2 bg-[#F0F2F5]">
          <div className="flex-1 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[#8696A0]">
            <Smile className="w-4 h-4" />
            <span className="flex-1 text-[12px]">הקלדת הודעה</span>
            <Paperclip className="w-4 h-4" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#00A884] flex items-center justify-center text-white">
            <Mic className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}