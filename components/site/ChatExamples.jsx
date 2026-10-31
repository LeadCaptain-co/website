import React from "react";
import PhoneMockup from "@/components/site/chats/PhoneMockup";
import { CHATS } from "@/components/site/chats/chatData";
import { INSTAGRAM_CHAT, WEB_CHAT } from "@/components/site/chats/channelChatData";
import InstagramMockup from "@/components/site/chats/InstagramMockup";
import WebChatMockup from "@/components/site/chats/WebChatMockup";

export default function ChatExamples() {
  return (
    <section id="chats" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(0,212,255,0.08),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[13px] tracking-[0.25em] text-[#FFC24B]">מהסיפון</span>
          <h2 className="mt-4 font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            ככה הקפטן מדבר עם הלקוחות שלכם
          </h2>
          <p className="mt-5 text-[18px] leading-[1.8] text-[#E0F2F7]/70">
            דוגמאות לשיחות שמתנהלות בוואטסאפ בכל שעה: מענה מיידי, שאלות מדויקות וסגירה של פגישה או רכישה, בלי שתצטרכו להרים את הטלפון.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {CHATS.map((chat) => (
            <div key={chat.business} className="flex flex-col items-center gap-5">
              <PhoneMockup chat={chat} />
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] text-[#E0F2F7]/75">
                {chat.tag}
              </span>
            </div>
          ))}
        </div>

        <h3 className="mt-24 text-center font-heading font-bold text-white text-2xl md:text-3xl">
          ואותו קפטן, גם באינסטגרם ובאתר שלכם
        </h3>
        <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {[[INSTAGRAM_CHAT, InstagramMockup], [WEB_CHAT, WebChatMockup]].map(([chat, Mock]) => (
            <div key={chat.business} className="flex flex-col items-center gap-5">
              <Mock chat={chat} />
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] text-[#E0F2F7]/75">{chat.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}