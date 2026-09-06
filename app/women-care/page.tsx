import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { getBookingWhatsAppUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Female Physiotherapist & Hijama Care in Islamabad | Flex Well",
  description: "Ask about private female physiotherapy and female Hijama appointments at Flex Well in DHA Phase 2, Islamabad.",
};

const careOptions = [
  { title: "Female physiotherapy", text: "Assessment, pain care, rehabilitation and guided exercise with a female practitioner." },
  { title: "Female Hijama care", text: "Traditional wellness care with consultation, screening, privacy and careful hygiene." },
  { title: "Post-surgery rehabilitation", text: "Stage-appropriate support for mobility, strength and everyday independence." },
  { title: "Home physiotherapy", text: "Ask about home visits when pain, health or mobility makes clinic travel difficult." },
];

const privacyPromises = [
  "Female-practitioner availability confirmed before the appointment",
  "A private and respectful treatment environment",
  "Clear explanation and consent before treatment begins",
  "Your concerns discussed with sensitivity and discretion",
  "A companion may be discussed when appropriate",
  "Treatment adapted around comfort, clothing and personal boundaries",
];

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function WomenCarePage() {
  const bookingUrl = getBookingWhatsAppUrl("Women’s care with a female practitioner");

  return <PageShell><main className="women-care-page">
    <section className="women-care-hero">
      <div className="women-care-copy"><p className="section-label">For women</p><h1>Private, respectful care.</h1><p>Female physiotherapy and Hijama in DHA Phase 2.</p><div><Link className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Book with a female practitioner <ArrowIcon /></Link><a className="text-link" href="tel:+923097708828">Call the clinic</a></div><small>Availability is confirmed when you book.</small></div>
      <div className="women-care-image"><Image src="/female-hijama-v2.png" alt="Female Hijama practitioner providing careful cupping treatment in a private clinic room" fill priority sizes="(max-width: 800px) 100vw, 50vw" /><span>Private • respectful • patient-led</span></div>
    </section>

    <section className="women-care-intro"><p className="section-label">Women&apos;s health &amp; wellbeing</p><h2>Professional care. Personal comfort.</h2><p>Tell us your preference. We will confirm the right practitioner and time.</p></section>

    <section className="women-care-options">{careOptions.map((option, index) => <article key={option.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{option.title}</h2><p>{option.text}</p></article>)}</section>

    <section className="women-privacy-section">
      <div><p className="section-label">Your comfort matters</p><h2>What to expect.</h2><p>Safe, clear and respectful care.</p></div>
      <div className="women-privacy-list">{privacyPromises.map((promise) => <div key={promise}><CheckIcon /><span>{promise}</span></div>)}</div>
    </section>

    <section className="women-practitioner">
      <div className="women-practitioner-mark" aria-hidden="true">A</div>
      <div><p className="section-label">Meet a female practitioner</p><h2>Ayesha</h2><p>Movement-focused care with clear guidance.</p><Link className="text-link" href="/therapists">View therapist profile <ArrowIcon /></Link></div>
      <Link className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Request an appointment <ArrowIcon /></Link>
    </section>

    <section className="women-hijama-safety"><div><p className="section-label">Hijama with care</p><h2>Safety, hygiene and informed choice.</h2><p>Learn how screening, single-use supplies, skin preparation, sharps control and aftercare shape our published Hijama standard.</p></div><Link className="button button-light" href="/hijama-safety">Read the safety protocol <ArrowIcon /></Link></section>
  </main></PageShell>;
}
