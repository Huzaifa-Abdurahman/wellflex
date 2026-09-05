"use client";

import { FormEvent } from "react";
import { siteConfig } from "../site-config";

const serviceOptions = [
  "Physiotherapy",
  "Pain management",
  "Rehabilitation",
  "Manual therapy",
  "Exercise therapy",
  "Hijama therapy",
  "Not sure yet",
];

export function ContactForm() {
  function submitToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Flex Well, I would like to enquire about an appointment.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Service: ${data.get("service")}`,
      `Preferred time: ${data.get("preferredTime") || "Flexible"}`,
      "",
      `How can you help: ${data.get("message")}`,
    ].join("\n");

    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <form className="contact-form" onSubmit={submitToWhatsApp}>
    <div className="form-heading"><p className="section-label">Appointment enquiry</p><h2>Tell us how we can help.</h2><p>Share a few details and we’ll prepare your message for WhatsApp.</p></div>
    <div className="form-grid">
      <label><span>Your name *</span><input type="text" name="name" autoComplete="name" placeholder="Full name" required /></label>
      <label><span>Phone number *</span><input type="tel" name="phone" autoComplete="tel" placeholder="03XX XXXXXXX" required /></label>
      <label><span>Email address</span><input type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
      <label><span>Preferred time</span><input type="text" name="preferredTime" placeholder="Morning, afternoon or evening" /></label>
      <label className="form-wide"><span>Service or treatment *</span><select name="service" defaultValue="" required><option value="" disabled>Select an option</option>{serviceOptions.map((service) => <option value={service} key={service}>{service}</option>)}</select></label>
      <label className="form-wide"><span>What would you like help with? *</span><textarea name="message" rows={5} placeholder="Briefly describe your symptoms, goals or question…" required /></label>
    </div>
    <button className="form-submit" type="submit">Send enquiry on WhatsApp <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg></button>
    <p className="form-note">WhatsApp will open with your details ready to review and send. Please do not include urgent or highly sensitive medical information.</p>
  </form>;
}
