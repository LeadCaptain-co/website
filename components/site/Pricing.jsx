import React from "react";
import Link from "next/link";
import { Check, Anchor, Sailboat, ShipWheel, Compass, Crown } from "lucide-react";
import { PLANS } from "@/lib/content";

// Presentation per plan; the plan data itself lives in lib/content.ts so the
// page and the JSON-LD offers can never disagree.
const STYLE = {
  salt: { icon: Anchor, iconCls: "text-[#E0F2F7] bg-white/10 border-white/25", accentCls: "text-[#E0F2F7]" },
  skipper: { icon: Sailboat, iconCls: "text-[#2DD4BF] bg-[#2DD4BF]/10 border-[#2DD4BF]/30", accentCls: "text-[#2DD4BF]" },
  captain: { icon: ShipWheel, iconCls: "text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/30", accentCls: "text-[#00D4FF]" },
  commodore: { icon: Compass, iconCls: "text-[#FFC24B] bg-[#FFC24B]/10 border-[#FFC24B]/30", accentCls: "text-[#FFC24B]" },
  admiral: { icon: Crown, iconCls: "text-[#FF7E67] bg-[#FF7E67]/10 border-[#FF7E67]/30", accentCls: "text-[#FF7E67]" },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-[13px] tracking-[0.25em] text-[#00D4FF]">מסלולי הפלגה</span>
          <h2 className="mt-4 font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            בוחרים מסלול, אנחנו מרימים מפרש
          </h2>
          <p className="mt-5 text-[18px] leading-[1.8] text-[#E0F2F7]/70">מחירים לחודש, ללא התחייבות. הקמה והדרכה כלולות.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
          {PLANS.map((p) => {
            const s = STYLE[p.id];
            const Icon = s.icon;
            return (
              <div
                key={p.id}
                className={`h-full rounded-[2rem] p-6 border backdrop-blur-md transition-colors flex flex-col ${
                  p.hot ? "border-[#00D4FF]/50 bg-[#00D4FF]/[0.07] shadow-[0_0_50px_rgba(0,212,255,0.12)]" : "border-white/10 bg-white/[0.04] hover:border-white/25"
                }`}
              >
                <div className="h-7 mb-4">
                  {p.hot && (
                    <span className="inline-flex h-7 items-center rounded-full bg-[#00D4FF] text-[#0A192F] text-xs font-bold px-3">הנבחר ביותר</span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className={`w-12 h-12 shrink-0 rounded-2xl border flex items-center justify-center ${s.iconCls}`}>
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white">{p.name}</h3>
                </div>
                <p className="mt-2 min-h-[3.25rem] text-[15px] leading-[1.7] text-[#E0F2F7]/60">{p.tagline}</p>
                <div className={`mt-6 min-h-12 flex items-center font-heading font-bold text-[clamp(1.75rem,3vw,2.25rem)] whitespace-nowrap ${s.accentCls}`}>{p.priceLabel}</div>
                <ul className="mt-7 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[16px] leading-[1.7] text-[#E0F2F7]/80">
                      <Check className={`w-4 h-4 mt-1 shrink-0 ${s.accentCls}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#harbor"
                  className={`mt-8 block text-center rounded-full py-3.5 font-bold transition-all ${
                    p.hot ? "bg-[#00D4FF] text-[#0A192F] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]" : "border border-white/20 text-[#E0F2F7] hover:bg-white/10"
                  }`}
                >
                  {p.cta || "התחל 14 ימי ניסיון בחינם"}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
