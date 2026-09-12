import type { MetadataRoute } from "next";
import { legalPages } from "./legal/data";
import { services } from "./services/data";
import { siteConfig } from "./site-config";
import { treatments } from "./treatments/data";

const lastModified = new Date("2026-09-12T00:00:00+05:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/treatments", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/home-physiotherapy", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/women-care", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/therapists", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/hijama-safety", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/hijama-sunnah-dates", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return [
    ...pages.map(({ path, ...entry }) => ({ url: `${siteConfig.url}${path}`, lastModified, ...entry })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteConfig.url}${service.image}`],
    })),
    ...treatments.map((treatment) => ({
      url: `${siteConfig.url}/treatments/${treatment.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteConfig.url}${treatment.image}`],
    })),
    ...legalPages.map((page) => ({
      url: `${siteConfig.url}/legal/${page.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
