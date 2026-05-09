import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  noindex?: boolean;
}

const SITE_URL = "https://baixarvideoskwai.com";
const SITE_NAME = "KwaiSave";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c93a6f8-946d-4bd7-87a5-3098021ed53e/id-preview-fed4d97f--b13535f0-46da-49d0-99d4-2ca3e62ee0c7.lovable.app-1775345774080.png";

export function SEOHead({ title, description, canonical, breadcrumbs, faq, noindex }: SEOHeadProps) {
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} - ${SITE_NAME}`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["Baixar Videos Kwai", "Baixador de Videos do Kwai", "Kwai Download Video"],
    url: SITE_URL,
    description: "Baixar vídeos Kwai sem marca d'água em alta qualidade. Baixador de vídeos do Kwai online, grátis e ilimitado.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Baixar Videos Kwai",
    alternateName: ["KwaiSave", "Baixador de Videos do Kwai", "Kwai Download Vídeo"],
    url: SITE_URL,
    description: "Baixar vídeos do Kwai sem marca d'água em alta qualidade. Baixador de vídeos do Kwai 100% grátis, online e ilimitado. Salvar vídeo do Kwai por link.",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    keywords: "baixar videos kwai, kwai baixar vídeos, baixar video do kwai, baixar video do kwai sem marca d agua, baixador de videos do kwai, download vídeo kwai, salvar video do kwai",
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  } : null;

  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={fullCanonical} />
      <link rel="alternate" hrefLang="pt-BR" href={fullCanonical} />
      <link rel="alternate" hrefLang="pt" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
}