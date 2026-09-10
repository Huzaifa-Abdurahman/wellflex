import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components";
import { siteConfig } from "../site-config";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact & Appointments | Flex Well Physiotherapy Center Islamabad",
  description: "Call, WhatsApp or send an appointment enquiry to Flex Well Physiotherapy Center in DHA Phase 2, Islamabad.",
};

const address = siteConfig.address;
const directionsUrl = siteConfig.googleMaps.location;
const mapEmbedUrl = siteConfig.googleMaps.embed;

function ContactIcon({ type }: { type: "phone" | "whatsapp" | "email" | "location" }) {
  if (type === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-1-1.2 2a15 15 0 0 1-8.8-8.8L8 8 7 3Z" /></svg>;
  if (type === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z"/><path d="M9 8c.4 3 2 4.7 5 5.5l1-1.3 2 .9c-.2 1.3-1 2-2.3 2-3.7-.3-6.5-3-7.2-6.5C7.3 7.5 8 7 9 8Z"/></svg>;
  if (type === "email") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function ContactPage() {
  return <PageShell><main className="contact-page">
    <section className="contact-hero">
      <div><p className="section-label">Contact Flex Well Physiotherapy Center</p><h1>Plan your next step.</h1></div>
      <p>Book a visit or ask our team a question.</p>
    </section>

    <section className="contact-layout">
      <div className="contact-info-column"><div className="contact-details">
        <div className="contact-card contact-card-featured">
          <ContactIcon type="whatsapp" />
          <div><p>Fastest response</p><h2>Chat on WhatsApp</h2><span>Ask about services or availability.</span><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">Start a conversation <ArrowIcon /></a></div>
        </div>
        <div className="contact-card">
          <ContactIcon type="phone" />
          <div><p>Call the clinic</p><h2>{siteConfig.phoneDisplay}</h2><span>Speak directly with our team.</span><a href={siteConfig.phoneHref}>Call now <ArrowIcon /></a></div>
        </div>
        <div className="contact-card">
          <ContactIcon type="email" />
          <div><p>Email</p><h2>{siteConfig.email}</h2><span>For non-urgent questions and general enquiries.</span><a href={`mailto:${siteConfig.email}`}>Send an email <ArrowIcon /></a></div>
        </div>
        <div className="contact-card">
          <ContactIcon type="location" />
          <div><p>Visit us</p><h2>{address}</h2><a href={directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a></div>
        </div>
      </div>
      <div className="contact-socials"><p>Follow Flex Well Physiotherapy Center</p><div><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a><a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">Facebook <ArrowIcon /></a></div></div></div>
      <ContactForm />
    </section>

    <section className="map-section">
      <div className="map-heading"><div><p className="section-label">Find the clinic</p><h2>Conveniently located in DHA Phase II.</h2></div><Link className="text-link" href={directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowIcon /></Link></div>
      <div className="map-frame"><iframe title={`Google map showing Flex Well Physiotherapy Center at ${address}`} src={mapEmbedUrl} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /></div>
    </section>
  </main></PageShell>;
}
