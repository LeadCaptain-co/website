"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[13px] tracking-[0.25em] text-[#FF7E67]">יומן הקפטן</span>
        <h2 className="mt-4 font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          שאלות לפני שמפליגים
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {FAQ.map((x, i) => (
            <AccordionItem key={x.q} value={`i${i}`} className="border-white/10">
              <AccordionTrigger className="text-right text-[18px] font-heading font-bold text-white hover:text-[#00D4FF] hover:no-underline py-6">
                {x.q}
              </AccordionTrigger>
              <AccordionContent className="text-[17px] leading-[1.85] text-[#E0F2F7]/70 pb-6">{x.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
