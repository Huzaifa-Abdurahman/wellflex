import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { createPageMetadata, defaultDescription, safeJsonLd } from "./seo";
import { siteConfig } from "./site-config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({
    title: "Physiotherapy Center in DHA 2 Islamabad | Flex Well",
    description: defaultDescription,
  }),
  applicationName: siteConfig.name,
  category: "health",
  keywords: [
    "physiotherapy Islamabad",
    "physiotherapist DHA 2 Islamabad",
    "physiotherapy center Islamabad",
    "rehabilitation Islamabad",
    "home physiotherapy Islamabad",
    "Hijama Islamabad",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/apple/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple/apple-touch-icon-167x167.png", sizes: "167x167", type: "image/png" },
      { url: "/apple/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${siteConfig.url}/#clinic`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/full_logo/flexwell-full-512x512.png`,
  image: `${siteConfig.url}/opengraph-image.jpg`,
  description: defaultDescription,
  telephone: "+923097708828",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Street 19, J Sector, DHA Phase 2",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  areaServed: ["Islamabad", "Rawalpindi", "DHA Phase 2"],
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.googleMaps.location],
  medicalSpecialty: "Physiotherapy",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#clinic` },
  inLanguage: "en-PK",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en-PK" className={montserrat.variable}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(clinicJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteJsonLd) }} />
    {children}
  </body></html>;
}
