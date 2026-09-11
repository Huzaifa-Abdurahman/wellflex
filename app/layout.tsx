import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

const metadataBase = new URL(
  deploymentHost
    ? deploymentHost.startsWith("http")
      ? deploymentHost
      : `https://${deploymentHost}`
    : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title: "Flex Well Physiotherapy Center",
  description: "Helping you heal, move, and thrive in DHA 2, Islamabad.",
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
  openGraph: {
    type: "website",
    title: "Flex Well Physiotherapy Center",
    description: "Helping you heal, move, and thrive in DHA 2, Islamabad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flex Well Physiotherapy Center",
    description: "Helping you heal, move, and thrive in DHA 2, Islamabad.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={montserrat.variable}><body>{children}</body></html>;
}
