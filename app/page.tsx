import Link from "next/link";
import { PageShell } from "./components";
import { getBookingWhatsAppUrl } from "./site-config";

const googleListingUrl = "https://www.google.com/maps/search/?api=1&query=Flex+Well+Physiotherapy+Clinic+DHA+2+Sector+J+Islamabad";

const benefits = [
  { title: "Expert care", icon: "care" },
  { title: "Modern therapy", icon: "therapy" },
  { title: "Hijama therapy", icon: "hijama" },
  { title: "Personalised treatment", icon: "personal" },
] as const;

function BenefitIcon({ type }: { type: (typeof benefits)[number]["icon"] }) {
  if (type === "care") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 27s-10-5.5-10-13a5.5 5.5 0 0 1 10-3.2A5.5 5.5 0 0 1 26 14c0 7.5-10 13-10 13Z"/><path d="M11 17h3l1.5-4 2 8 1.5-4h3"/></svg>;
  if (type === "therapy") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 22c3-1 4-4 4-7 0-4 2-7 6-7 3 0 5 2 5 5 0 4-3 5-6 5h-2"/><path d="M7 25c4-1 7-1 10 0 4 1 7-1 8-5M7 20h5M20 11l3-3M22 15h4"/></svg>;
  if (type === "hijama") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 12h10l2 12H9l2-12Z"/><path d="M13 8h6v4M12 24v2h8v-2M16 5v3M9 8l2 2M23 8l-2 2"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="11" r="4"/><circle cx="22" cy="13" r="3"/><path d="M4 26c.5-6 3-9 8-9s7.5 3 8 9M19 19c4-1 7 1 8 6"/></svg>;
}

function GoogleLogo() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A19.9 19.9 0 0 0 24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4Z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A19.9 19.9 0 0 0 24 4 20 20 0 0 0 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2A11.9 11.9 0 0 1 12.9 28l-6.5 5A20 20 0 0 0 24 44Z"/><path fill="#1976D2" d="M43.6 20H24v8h11.3a12 12 0 0 1-4 5.6l6.2 5.2C41.5 35.1 44 30 44 24c0-1.3-.1-2.7-.4-4Z"/></svg>;
}

export default function Home() {
  return <PageShell><main className="home-main">
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Move well. Live well.</p>
          <h1>FLEX WELL</h1>
          <p className="hero-subtitle">PHYSIOTHERAPY &amp; HIJAMA CENTER</p>
          <p className="hero-tagline">Healing today, stronger tomorrow.</p>
          <p className="hero-description">Thoughtful, one-to-one care that helps you reduce pain, restore movement, and return to the life you enjoy.</p>
          <div className="hero-actions"><Link className="button button-primary" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer">Book an appointment</Link><Link className="button button-light" href="/services">Explore services</Link></div>
          <p className="hero-note">Street 19, J Sector, DHA Phase 2, Islamabad</p>
        </div>
        <div className="hero-visual" role="img" aria-label="Physiotherapist providing treatment to a patient" />
      </div>
    </section>
    <section className="benefit-panel" aria-label="Why choose Flex Well">
      <div className="feature-strip">
        {benefits.map((benefit) => <div className="feature" key={benefit.title}><BenefitIcon type={benefit.icon} /><span>{benefit.title}</span></div>)}
      </div>
      <Link className="mobile-booking button button-primary" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer">Book an appointment</Link>
    </section>

    <section className="care-journey">
      <div className="care-journey-heading"><p className="section-label">The Flex Well difference</p><h2>Simple care.<br />Meaningful progress.</h2><p>Three clear steps, one plan built around you.</p></div>
      <div className="care-journey-steps">
        <article><span>01</span><div><h3>Understand</h3><p>Listen, assess and set your goal.</p></div></article>
        <article><span>02</span><div><h3>Personalise</h3><p>Shape the right care around you.</p></div></article>
        <article><span>03</span><div><h3>Progress</h3><p>Build strength and confidence together.</p></div></article>
      </div>
      <Link className="text-link" href="/about">Discover our approach</Link>
    </section>

    <section className="reviews-section">
      <div className="reviews-heading"><div><p className="section-label">Patient reviews</p><h2>Experiences shared<br />by our patients.</h2></div><p>Discover recent patient experiences and the latest clinic rating directly on our Google profile.</p></div>
      <div className="google-review-panel">
        <div className="google-review-summary">
          <span className="google-mark"><GoogleLogo /></span>
          <div><p>Google Reviews</p><h3>Patient feedback<br />you can trust.</h3></div>
        </div>
        <div className="google-review-feature">
          <div className="google-review-stars" aria-label="Five star reviews"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          <h3>See what people are saying</h3>
          <p>Read current ratings and patient comments on Google, where every experience is shared in the reviewer&apos;s own words.</p>
        </div>
        <div className="google-review-actions">
          <Link className="button button-light" href={googleListingUrl} target="_blank" rel="noreferrer">View Google reviews</Link>
          <Link className="text-link" href={googleListingUrl} target="_blank" rel="noreferrer">Leave a Google review <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  </main></PageShell>;
}
