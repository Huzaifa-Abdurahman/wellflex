import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { getBookingWhatsAppUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Hijama Safety & Hygiene Protocol | Flex Well Islamabad",
  description: "Learn about Flex Well's consultation, screening, single-use equipment, hygiene, sharps disposal and aftercare approach for Hijama therapy.",
};

const protocol = [
  { title: "Patient consultation", text: "We discuss what you are seeking from Hijama, explain the procedure and give you time to ask questions before deciding." },
  { title: "Medical-history screening", text: "Relevant health conditions, current symptoms, previous reactions, medicines and allergies are reviewed before treatment." },
  { title: "Contraindication check", text: "We consider factors that may require treatment to be changed, postponed or declined, or medical clearance to be requested." },
  { title: "Informed consent", text: "Expected sensations, possible marks, common after-effects, alternatives and aftercare are explained before consent is obtained." },
  { title: "Individual point selection", text: "Treatment areas are chosen following consultation rather than applying the same routine to every person." },
  { title: "Single-use supplies", text: "Sharps, gloves and items intended for one-time use are new for each patient and disposed of after the procedure." },
  { title: "Hand hygiene & protective equipment", text: "Hands are cleaned at the appropriate stages and gloves or other protective equipment are used according to exposure risk." },
  { title: "Skin preparation", text: "The treatment area is inspected and prepared using an appropriate skin-cleaning method before any skin procedure." },
  { title: "Sharps and waste control", text: "Used sharps are placed directly into a puncture-resistant sharps container, while contaminated waste is contained for appropriate disposal." },
  { title: "Cleaning and aftercare", text: "The treatment space is cleaned between patients and you receive straightforward guidance for caring for the skin and monitoring recovery." },
];

const screeningPoints = [
  "Bleeding disorders or medicines that affect clotting",
  "Current skin infection, open wounds or active irritation",
  "Significant anaemia, weakness or a history of fainting",
  "Pregnancy or a recently completed medical procedure",
  "Poor wound healing, immune-system concerns or uncontrolled illness",
  "Fever, acute illness or feeling generally unwell on the day",
];

const beforeCare = ["Eat a light meal and remain comfortably hydrated.", "Tell us about medicines, allergies and relevant health conditions.", "Avoid applying oils or heavy creams to the planned area.", "Wear comfortable clothing that allows appropriate access while preserving privacy."];
const afterCare = ["Follow the individual dressing and skin-care instructions provided.", "Keep treated areas clean and avoid scratching or rubbing them.", "Allow time for rest and normal hydration after the session.", "Contact the clinic if you have an unexpected or concerning reaction."];

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function HijamaSafetyPage() {
  const bookingUrl = getBookingWhatsAppUrl("Hijama consultation");

  return <PageShell><main className="hijama-safety-page">
    <section className="hijama-safety-hero">
      <div className="hijama-safety-image"><Image src="/hajjama-cupping.jfif" alt="Hijama cups prepared for a wellness treatment" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
      <div className="hijama-safety-copy"><p className="section-label">Hijama safety &amp; hygiene</p><h1>Your safety is part of the treatment.</h1><p>A professional Hijama experience begins before the first cup is applied. Consultation, informed consent, careful hygiene and responsible aftercare guide every stage.</p><div><Link className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Ask about Hijama <ArrowIcon /></Link><Link className="text-link" href="#safety-protocol">View our protocol</Link></div></div>
    </section>

    <section className="safety-intro">
      <p className="section-label">A considered approach</p>
      <h2>Clean practice. Clear information. Informed choice.</h2>
      <p>Hijama involves contact with skin and, in wet cupping, controlled superficial skin incisions. That makes screening and infection-control practices essential—not optional extras. Our published protocol sets out the standard patients should expect at Flex Well.</p>
    </section>

    <section className="safety-protocol" id="safety-protocol">
      <div className="safety-protocol-heading"><p className="section-label">Our 10-step protocol</p><h2>Safety at every stage.</h2><p>From the first health question to the final aftercare instruction.</p></div>
      <div className="safety-protocol-grid">{protocol.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
    </section>

    <section className="screening-section">
      <div><p className="section-label">Before treatment</p><h2>Why screening matters.</h2><p>Hijama is not suitable for everyone at every time. Please answer health questions honestly so the practitioner can make a safer decision. The following examples are not a complete contraindication list.</p></div>
      <div className="screening-list">{screeningPoints.map((point) => <div key={point}><CheckIcon /><span>{point}</span></div>)}</div>
    </section>

    <section className="hijama-care-guides">
      <article><p className="section-label">Preparing for your visit</p><h2>Before Hijama</h2><ul>{beforeCare.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><p className="section-label">Supporting recovery</p><h2>After Hijama</h2><ul>{afterCare.map((item) => <li key={item}>{item}</li>)}</ul></article>
    </section>

    <section className="hijama-safety-cta"><div><p className="section-label">Have a question?</p><h2>Talk to us before you book.</h2><p>Share any health concerns privately so we can discuss whether an appointment is appropriate.</p></div><Link className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Message on WhatsApp <ArrowIcon /></Link></section>

    <section className="safety-source-note"><strong>Clinical note</strong><p>This page reflects general infection-control principles including hand hygiene, protective equipment, skin preparation, sterile single-use sharps, surface cleaning and puncture-resistant sharps disposal. It does not replace practitioner training, local clinical-waste requirements or individual medical assessment.</p></section>
  </main></PageShell>;
}
