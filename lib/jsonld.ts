import { FAQ, PLANS, SEO, SITE } from "./content";

// Structured data is generated from the same content the page renders,
// so prices/quotas in JSON-LD always match what visitors see.
export function homeJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: `${SITE.url}/`,
      logo: `${SITE.url}/img/captain-hat.png`,
      description: SEO.home.description,
      email: SITE.email,
      telephone: SITE.phone,
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: `${SITE.url}/`,
      inLanguage: "he-IL",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "אוטומציית לידים בוואטסאפ מונעת AI",
      provider: { "@type": "Organization", name: SITE.name, url: `${SITE.url}/` },
      areaServed: "IL",
      description: SEO.home.description,
      offers: PLANS.filter((p) => p.price).map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price,
        priceCurrency: "ILS",
        description: `${p.tagline}. ${p.features[0]}.`,
      })),
    },
  ];
}
