import Link from "next/link";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export default function NotFound() {
  return (
    <div dir="rtl" className="bg-[#0A192F] min-h-screen font-body antialiased">
      <Nav />
      <main className="relative flex min-h-[70vh] items-center justify-center px-6 pt-32 pb-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_0%,#14315a_0%,#0A192F_55%,#061223_100%)]" />
        <div className="relative">
          <p className="font-heading text-7xl font-bold text-[#00D4FF]">404</p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-white">העמוד לא נמצא</h1>
          <p className="mt-3 text-[18px] text-[#E0F2F7]/70">העמוד המבוקש אינו קיים.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-[#00D4FF] px-8 py-3.5 font-bold text-[#0A192F]">
            חזרה לדף הבית
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
