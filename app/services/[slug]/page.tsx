import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components";
import { getBookingWhatsAppUrl } from "../../site-config";
import { getService, services } from "../data";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.title} in Islamabad | Flex Well`,
    description: service.description,
  };
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return <PageShell><main className="service-detail">
    <div className="service-breadcrumb"><Link href="/services">Our services</Link><span>/</span><span>{service.title}</span></div>

    <section className="service-detail-hero">
      <div className="service-detail-copy">
        <p className="section-label">Treatment at Flex Well</p>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <div className="service-detail-actions"><Link className="button button-primary" href={getBookingWhatsAppUrl(service.title)} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link><Link className="text-link" href="#what-to-expect">What to expect</Link></div>
      </div>
      <div className="service-detail-image"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
    </section>

    {["hijama-therapy", "wet-hijama", "dry-cupping", "sunnah-hijama"].includes(service.slug) && <aside className="hijama-safety-link"><div><span>Safety first</span><h2>Read our Hijama Safety &amp; Hygiene Protocol</h2><p>Learn how consultation, screening, single-use supplies, hygiene and aftercare shape a responsible treatment experience.</p></div><Link className="button button-light" href="/hijama-safety">View safety protocol <ArrowIcon /></Link></aside>}

    <section className="service-overview">
      <div className="service-prose">
        <p className="section-label">About this service</p>
        <h2>A considered path towards better movement and wellbeing.</h2>
        {service.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <aside className="service-facts">
        <div><h2>This may be suitable for</h2><ul>{service.suitableFor.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul></div>
        <div><h2>What we focus on</h2><ul>{service.benefits.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul></div>
      </aside>
    </section>

    <section className="treatment-process" id="what-to-expect">
      <div className="process-heading"><p className="section-label">What to expect</p><h2>A clear process, from your first conversation to confident progress.</h2></div>
      <div className="process-grid">{service.approach.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>

    <section className="detail-booking">
      <div><p className="section-label">Your next step</p><h2>Let&apos;s create a plan that fits your goals.</h2><p>Contact Flex Well to ask a question or arrange your first appointment in DHA Phase 2, Islamabad.</p></div>
      <Link className="button button-primary" href={getBookingWhatsAppUrl(service.title)} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link>
    </section>

    <section className="related-services">
      <div className="related-heading"><div><p className="section-label">Continue exploring</p><h2>Related services</h2></div><Link className="text-link" href="/services">View all services</Link></div>
      <div className="related-grid">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span className="related-image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 30vw, 20vw" /></span><span><strong>{item.title}</strong><small>{item.description}</small></span><ArrowIcon /></Link>)}</div>
    </section>
  </main></PageShell>;
}
