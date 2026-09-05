import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { getBookingWhatsAppUrl } from "../site-config";

export const metadata: Metadata = {
  title: "About Flex Well | Physiotherapy & Hijama in Islamabad",
  description: "Learn about Flex Well's patient-centred approach to physiotherapy, rehabilitation and Hijama wellness care in DHA Phase 2, Islamabad.",
};

const values = [
  { title: "Experienced therapists", text: "Thoughtful care guided by clinical reasoning.", icon: "experience" },
  { title: "Modern equipment", text: "A calm clinic prepared for active rehabilitation.", icon: "equipment" },
  { title: "Personalised care", text: "A plan shaped around your body and your goals.", icon: "personal" },
  { title: "Holistic approach", text: "Supporting movement, confidence and wellbeing.", icon: "holistic" },
] as const;

function ValueIcon({ type }: { type: (typeof values)[number]["icon"] }) {
  if (type === "experience") return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 24s-8-4.5-8-10.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8C22 19.5 14 24 14 24Z"/><path d="M10 15h2.5l1.3-3.5 1.7 7 1.3-3.5H19"/></svg>;
  if (type === "equipment") return <svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="10" cy="8" r="3"/><circle cx="19" cy="10" r="2.5"/><path d="M4 22c.5-5 2.5-7.5 6-7.5s5.5 2.5 6 7.5M16 16c4-1 7 1 8 6"/></svg>;
  if (type === "personal") return <svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="9" cy="10" r="3"/><circle cx="19" cy="10" r="3"/><path d="M3 22c.5-4.5 2.5-7 6-7s5.5 2.5 6 7M13 22c.5-4.5 2.5-7 6-7s5.5 2.5 6 7"/></svg>;
  return <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 24C8 21 5 17 5 11l9-6 9 6c0 6-3 10-9 13Z"/><path d="M10 15h2.5l1.3-3 1.7 6 1.3-3H19"/></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function AboutPage() {
  return <PageShell><main className="about-page">
    <section className="about-hero">
      <div className="about-image">
        <Image src="/about.jfif" alt="Bright and welcoming Flex Well therapy room" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
        <span>Our space in DHA Phase 2</span>
      </div>

      <div className="about-copy">
        <p className="section-label">About Flex Well</p>
        <h1>Empowering lives through movement &amp; wellness.</h1>
        <p>At Flex Well Physiotherapy &amp; Hijama Center, we are dedicated to providing expert, compassionate care that helps you heal, move and thrive.</p>
        <p>Our goal is to improve your quality of life through personalised treatment, clear guidance and a thoughtful approach to whole-person wellbeing.</p>

        <div className="about-values">
          {values.map((value) => <article key={value.title}><ValueIcon type={value.icon} /><div><h2>{value.title}</h2><p>{value.text}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="about-principles">
      <div><p className="section-label">How we care</p><h2>Professional treatment should feel personal.</h2></div>
      <div className="principle-grid">
        <article><span>01</span><h3>We listen first</h3><p>Your concerns, daily routine and goals guide the direction of care from the first conversation.</p></article>
        <article><span>02</span><h3>We explain clearly</h3><p>You should understand what we are working on, why it matters and what progress may look like.</p></article>
        <article><span>03</span><h3>We progress together</h3><p>Your plan develops with you, building the movement and confidence needed beyond the clinic.</p></article>
      </div>
    </section>

    <section className="about-cta">
      <div><p className="section-label">Visit Flex Well</p><h2>Begin your next chapter with confident movement.</h2><p>Find us on Street 19, J Sector, DHA Phase 2, Islamabad.</p></div>
      <div><Link className="button button-primary" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link><Link className="text-link" href="/therapists">Meet our therapists</Link></div>
    </section>
  </main></PageShell>;
}
