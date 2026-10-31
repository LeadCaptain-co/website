import React from "react";
import Nav from "@/components/site/Nav";
import Horizon from "@/components/site/Horizon";
import Footer from "@/components/site/Footer";

export default function BlogShell({ children, narrow = false }) {
  return (
    <div dir="rtl" className="bg-[#0A192F] min-h-screen font-body antialiased selection:bg-[#00D4FF]/30">
      <Nav />
      <main className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_0%,#14315a_0%,#0A192F_55%,#061223_100%)]" />
        <div className={`relative mx-auto px-6 ${narrow ? "max-w-3xl" : "max-w-6xl"}`}>{children}</div>
      </main>
      <Horizon />
      <Footer />
    </div>
  );
}
