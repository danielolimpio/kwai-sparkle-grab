import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleMeta {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}

interface CollectionItem {
  name: string;
  url: string;
}

type SchemaType = "home" | "article" | "collection" | "page";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  noindex?: boolean;
  schemaType?: SchemaType;
  article?: ArticleMeta;
  collection?: CollectionItem[];
}

const SITE_URL = "https://baixarvideoskwai.com";
const SITE_NAME = "KwaiSave";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c93a6f8-946d-4bd7-87a5-3098021ed53e/id-preview-fed4d97f--b13535f0-46da-49d0-99d4-2ca3e62ee0c7.lovable.app-1775345774080.png";

export function SEOHead({ title, description, canonical, breadcrumbs, faq, noindex, schemaType = "page", article, collection }: SEOHeadProps) {
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} - ${SITE_NAME}`;

  const websiteSchema = schemaType === "home" ? {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["Baixar Videos Kwai", "Baixador de Videos do Kwai", "Kwai Download Video"],
    url: SITE_URL,
    description: "Baixar vídeos Kwai sem marca d'água em alta qualidade. Baixador de vídeos do Kwai online, grátis e ilimitado.",
  } : null;

  const appSchema = schemaType === "home" ? {
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
    keywords: "baixar video do kwai, baixar video kwai, baixar videos kwai, baixar vídeo do kwai, baixar kwai, baixar kwai grátis, baixar video do kwai sem marca d'água, baixar video kwai sem marca d'água, baixar videos do kwai sem marca d'água, baixar kwai sem marca d'água, kwai sem marca d'água, baixar video sem marca d'água, baixar vídeos sem marca d'água, baixar video do kwai online, baixar vídeo kwai online, baixar video do kwai por link, salvar vídeo do kwai, kwai download, kwai downloader, download video kwai, kwai baixar, kwai baixar vídeos, kwai baixar pelo google, kwai web, kwai video downloader, baixador de vídeos do kwai, kuaishou downloader, kuaishou video download, kwai to mp4, kwai mp4 download, como baixar video do kwai, como baixar videos do kwai sem marca d'água, magicdown, baixar do kwai sem marca d água",
  } : null;

  const articleSchema = schemaType === "article" && article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description,
    image: article.image || OG_IMAGE,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: { "@type": "Organization", name: article.author || SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": fullCanonical },
  } : null;

  const collectionSchema = schemaType === "collection" ? {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: fullTitle,
    description,
    url: fullCanonical,
    inLanguage: "pt-BR",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    ...(collection && collection.length > 0
      ? {
          hasPart: collection.map((c) => ({
            "@type": "CreativeWork",
            name: c.name,
            url: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
          })),
        }
      : {}),
  } : null;

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
      {websiteSchema && (
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      )}
      {appSchema && (
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
      )}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
      {collectionSchema && (
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
}