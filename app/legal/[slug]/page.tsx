import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components";
import { getLegalPage, lastUpdated, legalPages } from "../data";

type LegalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const page = getLegalPage((await params).slug);
  if (!page) return {};
  return { title: `${page.title} | Flex Well Physiotherapy Center`, description: page.summary };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const page = getLegalPage((await params).slug);
  if (!page) notFound();

  return <PageShell><main className="legal-page">
    <header className="legal-hero">
      <p className="section-label">{page.label}</p>
      <h1>{page.title}</h1>
      <p>{page.summary}</p>
      <span>Last updated: {lastUpdated}</span>
    </header>

    <div className="legal-layout">
      <aside className="legal-index">
        <p>On this page</p>
        <nav aria-label={`${page.title} sections`}>{page.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading.replace(/^\d+\.\s*/, "")}</a>)}</nav>
        <div><strong>Questions?</strong><a href="mailto:qadeerkhan3945@gmail.com">Email Flex Well Physiotherapy Center</a></div>
      </aside>

      <article className="legal-content">
        {page.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>)}
        <div className="legal-note"><p>These website notices are provided for transparency and general operational guidance. They are not a substitute for advice from a qualified Pakistani lawyer regarding the clinic’s complete legal and regulatory obligations.</p><Link href="/contact">Contact the clinic</Link></div>
      </article>
    </div>
  </main></PageShell>;
}
