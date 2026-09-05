import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { treatments } from "./data";

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function TreatmentsPage() {
  return <PageShell><main className="services-page treatments-page">
    <section className="services-intro">
      <div><p className="section-label">Treatment areas</p><h1>Support for the pain that gets in your way.</h1></div>
      <p>Understand your symptoms, rebuild confidence and return to meaningful movement with a plan shaped around your needs.</p>
    </section>

    <section className="services-grid treatments-grid" aria-label="Conditions and treatment areas">
      {treatments.map((treatment, index) => <article className="service-card" key={treatment.slug}>
        <Link className="service-image" href={`/treatments/${treatment.slug}`} aria-label={`Learn more about ${treatment.title}`}>
          <Image src={treatment.image} alt={treatment.imageAlt} fill sizes="(max-width: 700px) 34vw, (max-width: 1050px) 50vw, 33vw" priority={index < 3} />
        </Link>
        <div className="service-card-copy">
          <p className="service-number">0{index + 1}</p>
          <h2><Link href={`/treatments/${treatment.slug}`}>{treatment.title}</Link></h2>
          <p>{treatment.description}</p>
          <Link className="service-link" href={`/treatments/${treatment.slug}`}>Learn more <ArrowIcon /></Link>
        </div>
      </article>)}
    </section>

    <section className="services-cta">
      <div><p className="section-label">Need some guidance?</p><h2>Let&apos;s identify the right next step together.</h2></div>
      <Link className="button button-primary" href="/contact">Talk to our clinic <ArrowIcon /></Link>
    </section>
  </main></PageShell>;
}
