import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { services } from "./data";

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function ServicesPage() {
  return <PageShell><main className="services-page">
    <section className="services-intro">
      <div>
        <p className="section-label">Our services</p>
        <h1>Care designed around how you want to live.</h1>
      </div>
      <p>From pain relief and rehabilitation to traditional Hijama care, every service begins with a conversation and a plan tailored to you.</p>
    </section>

    <section className="services-grid" aria-label="Flex Well treatments">
      {services.map((service, index) => <article className="service-card" key={service.slug}>
        <Link className="service-image" href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>
          <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 34vw, (max-width: 1050px) 50vw, 33vw" priority={index < 3} />
        </Link>
        <div className="service-card-copy">
          <p className="service-number">0{index + 1}</p>
          <h2><Link href={`/services/${service.slug}`}>{service.title}</Link></h2>
          <p>{service.description}</p>
          <Link className="service-link" href={`/services/${service.slug}`}>Learn more <ArrowIcon /></Link>
        </div>
      </article>)}
    </section>

    <section className="services-cta">
      <div><p className="section-label">Not sure where to start?</p><h2>Tell us what is holding you back.</h2></div>
      <Link className="button button-primary" href="/contact">Talk to our clinic <ArrowIcon /></Link>
    </section>
  </main></PageShell>;
}
