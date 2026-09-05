"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getBookingWhatsAppUrl, siteConfig } from "./site-config";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
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
        <p><LocationIcon /> Street 19, J Sector, DHA Phase 2, Islamabad</p>
        <p>Physiotherapy &amp; Hijama care in Islamabad</p>
      </div>
      <div className="topbar">
        <Link className="brand" href="/" aria-label="Flex Well home">
          <span className="brand-logo"><Image src="/logo.jpg" alt="" width={58} height={58} priority /></span>
          <span className="brand-name">Flex Well<small>Physiotherapy &amp; Hijama Center</small></span>
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
          <span className="brand-name">Flex Well<small>Physiotherapy &amp; Hijama Center</small></span>
        </Link>
        <button className="drawer-close" type="button" aria-label="Close navigation menu" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>&#215;</button>
      </div>
      <p className="drawer-label">Explore</p>
      <nav className="drawer-nav" aria-label="Mobile navigation">
        {navigation.map((item, index) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return <Link className={active ? "is-active" : ""} aria-current={active ? "page" : undefined} href={item.href} key={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowIcon /></Link>;
        })}
      </nav>
      <div className="drawer-footer">
        <p><LocationIcon /> DHA Phase 2, Islamabad</p>
        <Link className="button button-primary" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Book an appointment <ArrowIcon /></Link>
      </div>
    </aside>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Link className="brand" href="/" aria-label="Flex Well home">
          <span className="brand-logo"><Image src="/logo.jpg" alt="" width={64} height={64} /></span>
          <span className="brand-name">Flex Well<small>Physiotherapy &amp; Hijama Center</small></span>
        </Link>
        <p>Helping Islamabad move with less pain, greater confidence, and lasting strength through thoughtful one-to-one care.</p>
        <div className="footer-socials">
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Flex Well on Instagram">Instagram</a>
          <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Flex Well on Facebook">Facebook</a>
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
          <Link href="/services/hijama-therapy">Hijama therapy</Link>
          <Link href="/services/pain-management">Pain management</Link>
          <Link href="/services/rehabilitation">Rehabilitation</Link>
        </nav>
      </div>

      <div className="footer-contact">
        <p className="footer-kicker">Start your recovery</p>
        <h2>Ready to move better?</h2>
        <p>Street 19, J Sector<br />DHA Phase 2, Islamabad</p>
        <div className="footer-contact-links"><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
        <Link className="footer-button" href={getBookingWhatsAppUrl()} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© Flex Well Physiotherapy &amp; Hijama Center</p>
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

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><Header />{children}<Footer /></div>;
}
