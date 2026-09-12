import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components";
import { createPageMetadata } from "../seo";
import { getBookingWhatsAppUrl } from "../site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Sunnah Hijama Dates | Flex Well Physiotherapy Center Islamabad",
  description: "Understand commonly preferred lunar dates for Sunnah Hijama and arrange a screened appointment at Flex Well Physiotherapy Center Islamabad.",
  path: "/hijama-sunnah-dates",
});

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function HijamaSunnahDatesPage() {
  const bookingUrl = getBookingWhatsAppUrl("Sunnah Hijama date enquiry");
  return <PageShell><main className="sunnah-dates-page">
    <section className="sunnah-dates-hero"><p className="section-label">Sunnah Hijama</p><h1>Choose your Hijama date.</h1><p>Many people prefer the 17th, 19th or 21st lunar day. Confirm local dates with our team.</p><Link className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Ask about upcoming dates <ArrowIcon /></Link></section>
    <section className="lunar-date-cards" aria-label="Commonly preferred lunar dates"><article><span>17</span><p>17th lunar day</p></article><article><span>19</span><p>19th lunar day</p></article><article><span>21</span><p>21st lunar day</p></article></section>
    <section className="sunnah-date-guidance"><div><p className="section-label">Important guidance</p><h2>Suitability comes before the calendar.</h2></div><div><p>A preferred date does not make Hijama appropriate for every person. We still review relevant health conditions, medicines, skin concerns and other contraindications before treatment.</p><p>Hijama is offered as complementary wellness care. It should not replace medical diagnosis, prescribed treatment or urgent healthcare.</p><Link className="text-link" href="/hijama-safety">Read our safety and hygiene protocol <ArrowIcon /></Link></div></section>
    <section className="sunnah-date-cta"><div><p className="section-label">Plan your visit</p><h2>Confirm your date.</h2></div><Link className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Message Flex Well Physiotherapy Center <ArrowIcon /></Link></section>
  </main></PageShell>;
}
