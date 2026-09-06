import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flex Well Physiotherapy Center",
  description: "Helping you heal, move, and thrive in DHA 2, Islamabad.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={montserrat.variable}><body>{children}</body></html>;
}
