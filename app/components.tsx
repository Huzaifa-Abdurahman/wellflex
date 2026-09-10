"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getBookingWhatsAppUrl, siteConfig } from "./site-config";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Home Visits", href: "/home-physiotherapy" },
  { label: "Treatments", href: "/treatments" },
  { label: "Therapists", href: "/therapists" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function LocationIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M8 3v6M16 3v6M4 11h16" /></svg>;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.classList.toggle("menu-is-open", menuOpen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return <>
    <header className="site-header">
      <div className="header-ribbon">
        <p><LocationIcon /> {siteConfig.address}</p>
        <Link href="/women-care">Women&apos;s physiotherapy &amp; Hijama care →</Link>
      </div>
      <div className="topbar">
        <Link className="brand" href="/" aria-label="Flex Well Physiotherapy Center home">
          <span className="brand-logo"><Image src="/logo.jpg" alt="" width={58} height={58} priority /></span>
          <span className="brand-name">Flex Well<small>Physiotherapy Center</small></span>
        </Link>
        <nav className="topnav" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link className={active ? "is-active" : ""} aria-current={active ? "page" : undefined} href={item.href} key={item.href}>{item.label}</Link>;
          })}
        </nav>
        <Link className="header-cta" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer">Book appointment <ArrowIcon /></Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
        <Link className="mobile-header-action" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Book an appointment on WhatsApp"><CalendarIcon /></Link>
      </div>
    </header>

    <button className={`drawer-backdrop ${menuOpen ? "is-open" : ""}`} type="button" aria-label="Close navigation menu" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} />
    <aside id="mobile-navigation" className={`mobile-drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
      <div className="drawer-head">
        <Link className="brand" href="/" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
          <span className="brand-logo"><Image src="/logo.jpg" alt="" width={52} height={52} /></span>
          <span className="brand-name">Flex Well<small>Physiotherapy Center</small></span>
        </Link>
        <button className="drawer-close" type="button" aria-label="Close navigation menu" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>&#215;</button>
      </div>
      <p className="drawer-label">Browse care</p>
      <nav className="drawer-nav drawer-nav-standard" aria-label="Mobile navigation">
        {navigation.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return <Link className={active ? "is-active" : ""} aria-current={active ? "page" : undefined} href={item.href} key={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{item.label}</Link>;
        })}
      </nav>
      <div className="drawer-footer">
        <p><LocationIcon /> {siteConfig.address}</p>
        <Link className="button button-primary" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Book an appointment <ArrowIcon /></Link>
      </div>
    </aside>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Link className="brand" href="/" aria-label="Flex Well Physiotherapy Center home">
          <span className="brand-logo"><Image src="/logo.jpg" alt="" width={64} height={64} /></span>
          <span className="brand-name">Flex Well<small>Physiotherapy Center</small></span>
        </Link>
        <p>Helping Islamabad move with less pain and more confidence.</p>
        <div className="footer-socials">
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Flex Well Physiotherapy Center on Instagram">Instagram</a>
          <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Flex Well Physiotherapy Center on Facebook">Facebook</a>
        </div>
      </div>

      <div className="footer-column">
        <h2>Pages</h2>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </div>

      <div className="footer-column">
        <h2>Our care</h2>
        <nav aria-label="Services">
          <Link href="/services/physiotherapy">Physiotherapy</Link>
          <Link href="/services/neurological-physiotherapy">Neurological physiotherapy</Link>
          <Link href="/services/paediatric-physiotherapy">Paediatric physiotherapy</Link>
          <Link href="/home-physiotherapy">Home physiotherapy</Link>
          <Link href="/services/hijama-therapy">Hijama therapy</Link>
          <Link href="/hijama-safety">Hijama safety</Link>
          <Link href="/hijama-sunnah-dates">Sunnah dates</Link>
          <Link href="/women-care">Women&apos;s care</Link>
        </nav>
      </div>

      <div className="footer-contact">
        <p className="footer-kicker">Start your recovery</p>
        <h2>Ready to move better?</h2>
        <p>{siteConfig.address}</p>
        <div className="footer-contact-links"><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
        <Link className="footer-button" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© Flex Well Physiotherapy Center</p>
      <nav aria-label="Legal information">
        <Link href="/legal/privacy-policy">Privacy</Link>
        <Link href="/legal/terms-of-use">Terms</Link>
        <Link href="/legal/medical-disclaimer">Medical disclaimer</Link>
        <Link href="/legal/cookie-notice">Cookies</Link>
        <Link href="/legal/accessibility">Accessibility</Link>
      </nav>
    </div>
  </footer>;
}

function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>([
      "main > section",
      "main > aside",
      "main section > article",
      "main .service-card",
      "main .contact-card",
      "main .info-card",
      ".site-footer .footer-inner > *",
    ].join(",")));

    document.documentElement.classList.add("scroll-motion-ready");
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal", `scroll-reveal-delay-${index % 4}`);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -9%", threshold: 0.08 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><ScrollReveal /><Header />{children}<Footer /></div>;
}
