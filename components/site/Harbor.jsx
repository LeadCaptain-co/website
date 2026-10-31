"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, CheckCircle2 } from "lucide-react";
import { BUSINESS_TYPES, MONTHLY_LEADS } from "@/lib/content";

export default function Harbor() {
  const [form, setForm] = useState({ full_name: "", phone: "", business_type: "", website: "", monthly_leads: "", marketing_consent: false });
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.business_type || !form.monthly_leads) {
      setError("בחרו תחום עסק והיקף פניות חודשי כדי שנוכל להתאים לכם חבילה.");
      return;
    }
    setState("loading");
    try {
      // Saves the Lead, then appends to the sheet and forwards the webhook (see app/api/lead/route.ts)
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "harbor_cta" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("done");
    } catch {
      setState("idle");
      setError("משהו נתקע בדרך. נסו שוב בבקשה.");
    }
  };

  return (
    <section id="harbor" className="bg-[#E0F2F7] py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[13px] tracking-[0.25em] text-[#0A192F]/60">חוף מבטחים</span>
        <h2 className="mt-4 font-heading font-bold text-[#0A192F] leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
          מוכנים להרים עוגן?
        </h2>
        <p className="mt-5 text-[18px] leading-[1.8] text-[#0A192F]/70">
          השאירו פרטים ונחזור אליכם בוואטסאפ (איך אחרת?) עם הדגמה חיה והצעת חבילה שמותאמת לעסק שלכם.
          <br />14 ימי ניסיון ללא התחייבות, הקמה בשירות עצמי תוך 5–10 דקות או עד 24 שעות בליווי צמוד.
        </p>

        {state === "done" ? (
          <div role="status" className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-6 text-[#0A192F] shadow-lg">
            <CheckCircle2 className="w-6 h-6 text-[#0A7d9c]" />
            <span className="text-[17px] font-semibold">קיבלנו! הקפטן יוצר קשר בקרוב.</span>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-10 max-w-xl mx-auto space-y-4 text-right">
            <Input
              required
              name="full_name"
              autoComplete="name"
              placeholder="שם מלא"
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              className="h-14 bg-white border-[#0A192F]/15 text-[#0A192F] text-[17px] rounded-xl placeholder:text-[#0A192F]/40"
            />
            <Input
              required
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="טלפון לוואטסאפ"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-14 bg-white border-[#0A192F]/15 text-[#0A192F] text-[17px] rounded-xl placeholder:text-[#0A192F]/40"
            />
            <Select dir="rtl" value={form.business_type} onValueChange={(v) => setForm({ ...form, business_type: v })}>
              <SelectTrigger aria-label="תחום העסק" className="h-14 w-full rounded-xl bg-white border-[#0A192F]/15 text-[#0A192F] text-[17px]">
                <SelectValue placeholder="תחום העסק" />
              </SelectTrigger>
              <SelectContent className="bg-white text-[#0A192F]">
                {BUSINESS_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="url"
              name="website"
              autoComplete="url"
              placeholder="אתר אינטרנט (לא חובה)"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="h-14 bg-white border-[#0A192F]/15 text-[#0A192F] text-[17px] rounded-xl placeholder:text-[#0A192F]/40"
            />
            <Select dir="rtl" value={form.monthly_leads} onValueChange={(v) => setForm({ ...form, monthly_leads: v })}>
              <SelectTrigger aria-label="כמה פניות לקוחות מגיעות בחודש?" className="h-14 w-full rounded-xl bg-white border-[#0A192F]/15 text-[#0A192F] text-[17px]">
                <SelectValue placeholder="כמה פניות לקוחות מגיעות בחודש?" />
              </SelectTrigger>
              <SelectContent className="bg-white text-[#0A192F]">
                {MONTHLY_LEADS.map((v) => (
                  <SelectItem key={v} value={v}>{v}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <label className="flex items-start gap-3 pt-1 cursor-pointer text-[15px] leading-relaxed text-[#0A192F]/75">
              <Checkbox
                checked={form.marketing_consent}
                onCheckedChange={(v) => setForm({ ...form, marketing_consent: v === true })}
                className="mt-1 h-5 w-5 border-[#0A192F]/40 bg-white data-[state=checked]:bg-[#0A192F] data-[state=checked]:text-[#E0F2F7]"
              />
              <span>אני מאשר/ת לקבל מ־LeadCaptain עדכונים, טיפים ומידע שיווקי בוואטסאפ ובדוא״ל. אפשר להסיר את ההסכמה בכל עת.</span>
            </label>
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={state === "loading"}
              className="group w-full h-14 rounded-xl bg-[#0A192F] font-heading font-bold text-lg text-[#E0F2F7] hover:text-[#00D4FF] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {state === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
              התחל 14 ימי ניסיון בחינם
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
