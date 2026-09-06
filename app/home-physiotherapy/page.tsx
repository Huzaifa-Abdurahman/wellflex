import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { getBookingWhatsAppUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Home Physiotherapy in Islamabad & Rawalpindi | Flex Well Physiotherapy Center",
  description: "Ask about professional home physiotherapy visits for rehabilitation, mobility and exercise support across selected areas of Islamabad and Rawalpindi.",
};

const patientGroups = [
  "Stroke rehabilitation",
  "People with limited or bed-bound mobility",
  "Older adults who need support at home",
  "People living with Parkinson’s disease",
  "Post-surgery rehabilitation",
  "Total knee replacement recovery",
  "Rehabilitation following a fracture",
  "Severe back or neck pain limiting travel",
  "Paediatric and cerebral palsy enquiries",
  "Anyone currently unable to travel to the clinic",
];

const coverageAreas = ["DHA Islamabad", "Bahria Town", "PWD", "Ghauri Town", "Gulberg", "Rawalpindi", "Chaklala", "Saddar", "Other nearby Islamabad sectors"];

const visitSteps = [
  { number: "01", title: "Tell us what you need", text: "Share the patient’s condition, location, mobility and preferred appointment time on WhatsApp." },
  { number: "02", title: "We confirm suitability", text: "Our team reviews whether a home visit is appropriate and confirms coverage, availability and charges." },
  { number: "03", title: "Assessment at home", text: "The therapist assesses movement, function, safety and the practical demands of the home environment." },
  { number: "04", title: "A plan that progresses", text: "Treatment and exercises develop around meaningful goals, with guidance for the patient and family." },
];

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function HomePhysiotherapyPage() {
  const bookingUrl = getBookingWhatsAppUrl("Home physiotherapy visit");

  return <PageShell><main className="home-physio-page">
    <section className="home-physio-hero">
      <div className="home-physio-hero-copy">
        <p className="section-label">Physiotherapy at home</p>
        <h1>Expert care at home.</h1>
        <p>Personal rehabilitation without the clinic journey.</p>
        <div><Link className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Request a home visit <ArrowIcon /></Link><a className="text-link" href="tel:+923097708828">Call +92 309 7708828</a></div>
        <small>Serving selected areas across Islamabad and Rawalpindi.</small>
      </div>
      <div className="home-physio-hero-image"><Image src="/home-visits-v2.png" alt="Physiotherapist guiding an older patient through an exercise at home" fill priority sizes="(max-width: 800px) 100vw, 52vw" /><span>Care in the comfort of home</span></div>
    </section>

    <section className="home-physio-intro">
      <div><p className="section-label">Who we may support</p><h2>When clinic travel is difficult.</h2><p>We review every home-visit request individually.</p></div>
      <div className="patient-groups">{patientGroups.map((group) => <div key={group}><CheckIcon /><span>{group}</span></div>)}</div>
    </section>

    <section className="home-visit-value">
      <div className="home-visit-value-heading"><p className="section-label">Care built around real life</p><h2>Rehabilitation in your space.</h2></div>
      <div className="home-visit-value-grid">
        <article><span>01</span><h3>Practical assessment</h3><p>Care shaped around daily movement.</p></article>
        <article><span>02</span><h3>Personal rehabilitation</h3><p>Exercises matched to current ability.</p></article>
        <article><span>03</span><h3>Family guidance</h3><p>Clear advice for safe support.</p></article>
      </div>
    </section>

    <section className="home-visit-process">
      <div className="home-visit-process-heading"><p className="section-label">How it works</p><h2>Four simple steps.</h2></div>
      <div>{visitSteps.map((step) => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
    </section>

    <section className="coverage-section">
      <div className="coverage-copy"><p className="section-label">Areas we cover</p><h2>Home visits across Islamabad &amp; Rawalpindi.</h2><p>Coverage depends on therapist availability, travel time and the needs of the patient. Contact us with your exact location and we’ll confirm whether a visit can be arranged.</p><Link className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Check your area on WhatsApp <ArrowIcon /></Link></div>
      <div className="coverage-list">{coverageAreas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong></div>)}</div>
    </section>

    <section className="home-visit-note"><strong>Important:</strong><p>Home physiotherapy is not an emergency service. Treatment suitability is confirmed after discussing the patient’s health, current condition and any medical or surgical guidance. Urgent or rapidly worsening symptoms require appropriate medical care.</p></section>
  </main></PageShell>;
}
