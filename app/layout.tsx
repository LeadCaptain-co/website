import type { Metadata, Viewport } from "next";
import { Assistant, Heebo } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/site/CookieBanner";
import { SEO, SITE } from "@/lib/content";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SEO.home.title,
  description: SEO.home.description,
  keywords: SITE.keywords,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    locale: "he_IL",
    title: SEO.home.ogTitle,
    description: SEO.home.ogDescription,
    images: [{ url: SITE.ogImage, alt: SITE.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.ogTitle,
    description: SEO.home.twitterDescription,
    images: [SITE.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A192F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${heebo.variable}`}>
      <body>
        {children}
        <CookieBanner />
        {/* Public widget key, same as the original index.html */}
        <Script
          src="https://widget.leadcaptain.co/v1/loader.js"
          data-lc-key="wk_live_cd29dc4652c9b7ad2471b13d"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
