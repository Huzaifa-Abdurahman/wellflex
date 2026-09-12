import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export const defaultDescription =
  "Personalised physiotherapy, rehabilitation, pain care, home visits and Hijama therapy in DHA Phase 2, Islamabad.";

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = "/" }: PageMetadata): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_PK",
      title,
      description,
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.jpg"],
    },
  };
}

export function safeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}


export function createBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function createServiceJsonLd(service: {
  name: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: new URL(service.path, siteConfig.url).toString(),
    image: new URL(service.image, siteConfig.url).toString(),
    areaServed: [
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
    ],
    provider: { "@id": `${siteConfig.url}/#clinic` },
  };
}
