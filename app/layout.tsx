import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flex Well | Physiotherapy & Hijama Center",
  description: "Helping you heal, move, and thrive in DHA 2, Islamabad.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={manrope.variable}><body>{children}</body></html>;
}
