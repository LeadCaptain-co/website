import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Horizon from "@/components/site/Horizon";
import HowItWorks from "@/components/site/HowItWorks";
import ChatExamples from "@/components/site/ChatExamples";
import Channels from "@/components/site/Channels";
import Dashboard from "@/components/site/Dashboard";
import Proof from "@/components/site/Proof";
import Pricing from "@/components/site/Pricing";
import Faq from "@/components/site/Faq";
import Harbor from "@/components/site/Harbor";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import Footer from "@/components/site/Footer";
import { homeJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <div dir="rtl" className="bg-[#0A192F] min-h-screen font-body antialiased selection:bg-[#00D4FF]/30">
      {homeJsonLd().map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <Nav />
      <main>
        <Hero />
        <Horizon />
        <HowItWorks />
        <Horizon />
        <ChatExamples />
        <Horizon />
        <Channels />
        <Horizon />
        <Dashboard />
        <Proof />
        <Horizon />
        <Pricing />
        <Horizon />
        <Faq />
        <Harbor />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
