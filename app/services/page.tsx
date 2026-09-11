import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { services } from "./data";

const hijamaServiceSlugs = new Set(["hijama-therapy"]);
const serviceGroups = [
  { label: "Physiotherapy & rehabilitation", title: "Movement care for every stage of life.", items: services.filter((service) => !hijamaServiceSlugs.has(service.slug)) },
  { label: "Hijama & cupping", title: "Traditional wellness care, clearly explained.", items: services.filter((service) => hijamaServiceSlugs.has(service.slug)) },
];

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function ServicesPage() {
  return <PageShell><main className="services-page">
    <section className="services-intro">
      <div>
        <p className="section-label">Our services</p>
        <h1>Care built around you.</h1>
      </div>
      <p>Physiotherapy, rehabilitation and Hijama care.</p>
    </section>

    <section className="home-service-banner">
      <div className="home-service-banner-image"><Image src="/home-visits-v2.png" alt="Physiotherapist guiding an older patient through an exercise at home" fill sizes="(max-width: 700px) 100vw, 40vw" /></div>
      <div><p className="section-label">Care at your doorstep</p><h2>Home physiotherapy.</h2><p>Personal rehabilitation across Islamabad and Rawalpindi.</p><Link className="button button-primary" href="/home-physiotherapy">Explore home visits <ArrowIcon /></Link></div>
    </section>

    {serviceGroups.map((group) => <section className="service-group" key={group.label}>
      <div className="service-group-heading"><p className="section-label">{group.label}</p><h2>{group.title}</h2></div>
      <div className="services-grid" aria-label={group.label}>
        {group.items.map((service, index) => <article className="service-card" key={service.slug}>
          <Link className="service-image" href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>
            <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 34vw, (max-width: 1050px) 50vw, 33vw" priority={group.label.startsWith("Physiotherapy") && index < 3} />
          </Link>
          <div className="service-card-copy">
            <h2><Link href={`/services/${service.slug}`}>{service.title}</Link></h2>
          </div>
        </article>)}
      </div>
    </section>)}

    <section className="women-care-banner"><div><p className="section-label">Care for women</p><h2>Female physiotherapy &amp; Hijama.</h2><p>Private, respectful care.</p></div><Link className="button button-light" href="/women-care">Explore women&apos;s care <ArrowIcon /></Link></section>

    <section className="services-cta">
      <div><p className="section-label">Not sure where to start?</p><h2>Tell us what is holding you back.</h2></div>
      <Link className="button button-primary" href="/contact">Talk to our clinic <ArrowIcon /></Link>
    </section>
  </main></PageShell>;
}
