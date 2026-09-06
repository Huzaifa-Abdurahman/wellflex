"use client";

import { useEffect, useState } from "react";

type Review = {
  readonly name: string;
  readonly date: string;
  readonly quote: string;
};

function GoogleLogo() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A19.9 19.9 0 0 0 24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9-.1-2.7-.4-4Z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A19.9 19.9 0 0 0 24 4 20 20 0 0 0 6.3 14.7Z"/><path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2A11.9 11.9 0 0 1 12.9 28l-6.5 5A20 20 0 0 0 24 44Z"/><path fill="#1976D2" d="M43.6 20H24v8h11.3a12 12 0 0 1-4 5.6l6.2 5.2C41.5 35.1 44 30 44 24c0-1.3-.1-2.7-.4-4Z"/></svg>;
}

export function ReviewCarousel({ reviews }: { reviews: ReadonlyArray<Review> }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused, reviews.length]);

  if (!reviews.length) return null;
  const review = reviews[active];
  const goTo = (index: number) => setActive((index + reviews.length) % reviews.length);

  return <div
    className="review-carousel"
    aria-roledescription="carousel"
    aria-label="Google patient reviews"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocus={() => setPaused(true)}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
  >
    <article className="google-review-card review-carousel-card" key={active} aria-live={paused ? "polite" : "off"}>
      <div className="review-card-top">
        <span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
        <div><h3>{review.name}</h3><p>{review.date} on Google</p></div>
        <span className="review-google-mark"><GoogleLogo /></span>
      </div>
      <div className="review-card-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>“{review.quote}”</blockquote>
    </article>
    <div className="review-carousel-controls">
      <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous review">←</button>
      <div className="review-carousel-dots">
        {reviews.map((item, index) => <button className={index === active ? "is-active" : ""} type="button" aria-label={`Show review from ${item.name}`} aria-current={index === active ? "true" : undefined} onClick={() => goTo(index)} key={item.name} />)}
      </div>
      <button type="button" onClick={() => goTo(active + 1)} aria-label="Next review">→</button>
    </div>
  </div>;
}
