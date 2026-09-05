import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components";
import { getBookingWhatsAppUrl } from "../../site-config";
import { getTreatment, treatments } from "../data";

type TreatmentPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const treatment = getTreatment((await params).slug);
  if (!treatment) return {};
  return { title: `${treatment.title} Treatment in Islamabad | Flex Well`, description: treatment.description };
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const treatment = getTreatment((await params).slug);
  if (!treatment) notFound();
  const related = treatments.filter((item) => item.slug !== treatment.slug).slice(0, 3);

  return <PageShell><main className="service-detail">
    <div className="service-breadcrumb"><Link href="/treatments">Treatments</Link><span>/</span><span>{treatment.title}</span></div>
    <section className="service-detail-hero">
      <div className="service-detail-copy">
        <p className="section-label">How we can help</p>
        <h1>{treatment.title}</h1>
        <p>{treatment.description}</p>
        <div className="service-detail-actions"><Link className="button button-primary" href={getBookingWhatsAppUrl(treatment.title)} target="_blank" rel="noreferrer">Book an assessment <ArrowIcon /></Link><Link className="text-link" href="#your-plan">Your treatment plan</Link></div>
      </div>
      <div className="service-detail-image"><Image src={treatment.image} alt={treatment.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
    </section>

    {treatment.slug === "hijama-wellness" && <aside className="hijama-safety-link"><div><span>Safety first</span><h2>Read our Hijama Safety &amp; Hygiene Protocol</h2><p>Learn how consultation, screening, single-use supplies, hygiene and aftercare shape a responsible treatment experience.</p></div><Link className="button button-light" href="/hijama-safety">View safety protocol <ArrowIcon /></Link></aside>}

    <section className="service-overview">
      <div className="service-prose">
        <p className="section-label">Understanding {treatment.title.toLowerCase()}</p>
        <h2>Care that starts with your experience—not just a label.</h2>
        {treatment.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <aside className="service-facts">
        <div><h2>Common experiences</h2><ul>{treatment.commonSigns.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul></div>
        <div><h2>Your treatment may focus on</h2><ul>{treatment.goals.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul></div>
      </aside>
    </section>

    <section className="treatment-process" id="your-plan">
      <div className="process-heading"><p className="section-label">Your treatment plan</p><h2>Thoughtful progression, guided by how you move and what you want to regain.</h2></div>
      <div className="process-grid">{treatment.plan.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>

    <section className="detail-booking">
      <div><p className="section-label">Move forward</p><h2>Start with a conversation about your symptoms.</h2><p>Arrange an assessment at Flex Well in DHA Phase 2, Islamabad, and take a clear first step towards better movement.</p></div>
      <Link className="button button-primary" href={getBookingWhatsAppUrl(treatment.title)} target="_blank" rel="noreferrer">Book an assessment <ArrowIcon /></Link>
    </section>

    <section className="related-services">
      <div className="related-heading"><div><p className="section-label">More treatment areas</p><h2>Continue exploring</h2></div><Link className="text-link" href="/treatments">View all treatments</Link></div>
      <div className="related-grid">{related.map((item) => <Link href={`/treatments/${item.slug}`} key={item.slug}><span className="related-image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 30vw, 20vw" /></span><span><strong>{item.title}</strong><small>{item.description}</small></span><ArrowIcon /></Link>)}</div>
    </section>
  </main></PageShell>;
}
