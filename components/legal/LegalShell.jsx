import React from "react";
import Nav from "@/components/site/Nav";
import Horizon from "@/components/site/Horizon";
import Footer from "@/components/site/Footer";

// Shared frame for the legal pages (the original repeated this markup per page).
export default function LegalShell({ icon: Icon, badge, title, subtitle, children }) {
  return (
    <div dir="rtl" className="bg-[#0A192F] min-h-screen font-body antialiased selection:bg-[#00D4FF]/30">
      <Nav />
      <main className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_0%,#14315a_0%,#0A192F_55%,#061223_100%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[13px] text-[#E0F2F7]/80">
            <Icon className="w-4 h-4 text-[#00D4FF]" /> {badge}
          </div>
          <h1 className="mt-6 font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {title}
          </h1>
          <p className="mt-4 text-[16px] text-[#E0F2F7]/55">{subtitle}</p>
          {children}
        </div>
      </main>
      <Horizon />
      <Footer />
    </div>
  );
}

export function NumberedSections({ items }) {
  return (
    <div className="mt-12 space-y-10">
      {items.map((s, i) => (
        <section key={s.h}>
          <h2 className="font-heading font-bold text-xl text-[#00D4FF] flex items-baseline gap-3">
            <span className="font-mono text-sm text-[#00D4FF]/60">0{i + 1}</span>
            {s.h}
          </h2>
          <p className="mt-3 text-[18px] leading-[1.8] text-[#E0F2F7]/75">{s.b}</p>
        </section>
      ))}
    </div>
  );
}
