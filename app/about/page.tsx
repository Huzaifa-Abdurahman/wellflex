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
    <section className="about-hero" id="about-flex-well">
      <div className="about-image">
        <Image src="/about.jpg" alt="Bright and welcoming Flex Well therapy room" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
        <span>Our space in DHA Phase 2</span>
      </div>

      <div className="about-copy">
        <p className="section-label">About Flex Well</p>
        <h1>Move well. Feel stronger.</h1>
        <p>Expert, compassionate care built around you.</p>
        <p>Personal treatment. Clear guidance. Meaningful progress.</p>

        <div className="about-values" id="why-choose">
          {values.map((value) => <article key={value.title}><ValueIcon type={value.icon} /><div><h2>{value.title}</h2><p>{value.text}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="about-principles" id="mission">
      <div><p className="section-label">How we care</p><h2>Professional. Personal. Clear.</h2></div>
      <div className="principle-grid">
        <article><span>01</span><h3>We listen first</h3><p>Your needs and goals guide care.</p></article>
        <article><span>02</span><h3>We explain clearly</h3><p>Know what we are doing and why.</p></article>
        <article><span>03</span><h3>We progress together</h3><p>Build movement and confidence at your pace.</p></article>
      </div>
    </section>

    <section className="about-team" aria-labelledby="about-team-heading">
      <div className="about-team-heading">
        <p className="section-label">Our team</p>
        <h2 id="about-team-heading">Meet your therapists.</h2>
      </div>
      <div className="about-team-grid">
        <Link className="about-team-card" href="/therapists">
          <div className="about-team-image"><Image src="/male-team.jpg" alt="Dr Qadeer at Flex Well" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
          <div><h3>Dr Qadeer</h3><p>Physiotherapy &amp; Rehabilitation</p></div>
        </Link>
        <Link className="about-team-card" href="/therapists">
          <div className="about-team-image about-team-image-female"><Image src="/female-team.jpg" alt="Dr Ayesha at Flex Well" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
          <div><h3>Dr Ayesha</h3><p>Mobility, Exercise &amp; Wellness Care</p></div>
        </Link>
      </div>
    </section>

    <section className="about-cta">
      <div><p className="section-label">Visit Flex Well</p><h2>Start moving with confidence.</h2><p>Street 19, J Sector, DHA Phase 2.</p></div>
      <div><Link className="button button-primary" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link><Link className="text-link" href="/therapists">Meet our therapists</Link></div>
    </section>
  </main></PageShell>;
}
