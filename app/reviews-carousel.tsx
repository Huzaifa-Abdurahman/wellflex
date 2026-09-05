"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    quote: "Everything was explained simply. I felt heard, and every exercise had a clear purpose for my back pain.",
    name: "Sana R.",
    location: "Islamabad",
    care: "Physiotherapy",
  },
  {
    quote: "The clinic felt calm and professional, with clear guidance before and after my Hijama session.",
    name: "Ahmed K.",
    location: "DHA Phase II",
    care: "Hijama wellness",
  },
  {
    quote: "My rehabilitation progressed step by step and gave me confidence to walk, use stairs and return to my routine.",
    name: "Mariam S.",
    location: "Rawalpindi",
    care: "Rehabilitation",
  },
  {
    quote: "I was nervous about exercising with knee pain, but the plan was practical and easy to follow at home.",
    name: "Usman A.",
    location: "Islamabad",
    care: "Exercise therapy",
  },
  {
    quote: "The assessment never felt rushed. The plan focused on getting me back to the activities I enjoy.",
    name: "Hira F.",
    location: "Bahria Town",
    care: "Pain management",
  },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return <svg className={direction === "left" ? "arrow-left" : ""} viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const paused = userPaused;
  const review = reviews[active];
  const move = (offset: number) => setActive((current) => (current + offset + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 4800);
    return () => window.clearInterval(timer);
  }, [paused, active]);

  return <div className="reviews-carousel" aria-roledescription="carousel" aria-label="Illustrative patient feedback">
    <span className="review-glow review-glow-one" aria-hidden="true" /><span className="review-glow review-glow-two" aria-hidden="true" />
    <div className="review-quote-mark" aria-hidden="true">“</div>
    <div className="review-slide" key={active} aria-live="polite">
      <p className="review-care">{review.care}</p>
      <blockquote>“{review.quote}”</blockquote>
      <div className="review-person"><span>{review.name.charAt(0)}</span><div><strong>{review.name}</strong><small>{review.location}</small></div></div>
    </div>
    <div className="review-controls">
      <p><strong>{String(active + 1).padStart(2, "0")}</strong> / {String(reviews.length).padStart(2, "0")}</p>
      <div className="review-dots" aria-hidden="true">{reviews.map((item, index) => <span className={index === active ? "is-active" : ""} key={item.name} />)}</div>
      <div><button type="button" onClick={() => move(-1)} aria-label="Previous review"><Arrow direction="left" /></button><button className="review-pause" type="button" onClick={() => setUserPaused((value) => !value)} aria-label={userPaused ? "Play reviews" : "Pause reviews"}>{userPaused ? "▶" : "Ⅱ"}</button><button type="button" onClick={() => move(1)} aria-label="Next review"><Arrow direction="right" /></button></div>
    </div>
    <span className={`review-progress ${paused ? "is-paused" : ""}`} key={`progress-${active}`} aria-hidden="true" />
  </div>;
}
