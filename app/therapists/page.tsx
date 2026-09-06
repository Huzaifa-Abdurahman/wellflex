import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components";
import { getBookingWhatsAppUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Our Therapists | Flex Well Islamabad",
  description: "Meet Dr Qadeer and Dr Ayesha, the patient-focused therapy team at Flex Well Physiotherapy and Hijama Center in Islamabad.",
};

const therapists = [
  {
    name: "Dr Qadeer",
    image: "/male-team.jfif",
    imageAlt: "Dr Qadeer at Flex Well Physiotherapy Center",
    focus: "Physiotherapy & Rehabilitation",
    introduction: "Dr Qadeer brings a calm, structured approach to helping people understand pain, rebuild movement and return to the activities that matter to them.",
    philosophy: "Good treatment begins with listening. Every plan should feel clear, achievable and connected to the patient’s real life—not limited to what happens inside the clinic.",
    interests: ["Musculoskeletal physiotherapy", "Pain and movement assessment", "Post-injury rehabilitation", "Manual and exercise therapy"],
    education: "Ongoing clinical development in modern assessment, rehabilitation planning, therapeutic exercise and hands-on physiotherapy care.",
  },
  {
    name: "Dr Ayesha",
    image: "/female-team.jfif",
    imageAlt: "Dr Ayesha at Flex Well Physiotherapy Center",
    focus: "Mobility, Exercise & Wellness Care",
    introduction: "Ayesha supports patients with thoughtful, individual care that makes movement feel approachable, purposeful and relevant to everyday wellbeing.",
    philosophy: "Patients make better progress when they feel heard and understand the reason behind every step. Care should build both physical ability and confidence.",
    interests: ["Therapeutic exercise", "Mobility and flexibility", "Postural and movement concerns", "Patient education and self-management"],
    education: "Continued professional learning focused on movement-based care, personalised exercise, mobility training and supportive patient communication.",
  },
];

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export default function TherapistsPage() {
  return <PageShell><main className="therapists-page">
    <section className="therapists-intro">
      <p className="section-label">Our therapists</p>
      <h1>Meet the people behind your care.</h1>
      <p>Thoughtful practitioners, clear communication and treatment built around the person—not only the symptoms.</p>
    </section>

    <section className="therapist-list" aria-label="Flex Well therapy team">
      {therapists.map((therapist, index) => <article className="therapist-profile" key={therapist.name}>
        <div className={`therapist-portrait therapist-portrait-${index + 1}`}>
          <Image src={therapist.image} alt={therapist.imageAlt} fill priority={index === 0} sizes="(max-width: 700px) 100vw, 40vw" />
        </div>
        <div className="therapist-copy">
          <p className="therapist-role">{therapist.focus}</p>
          <h2>{therapist.name}</h2>
          <p className="therapist-intro">{therapist.introduction}</p>
          <blockquote>“{therapist.philosophy}”</blockquote>
          <div className="therapist-details">
            <div><h3>Clinical interests</h3><ul>{therapist.interests.map((interest) => <li key={interest}><CheckIcon />{interest}</li>)}</ul></div>
            <div><h3>Education &amp; development</h3><p>{therapist.education}</p></div>
          </div>
          <Link className="therapist-button" href={getBookingWhatsAppUrl(`Appointment with ${therapist.name}`)} target="_blank" rel="noreferrer">Book with {therapist.name} <ArrowIcon /></Link>
        </div>
      </article>)}
    </section>

    <div className="women-team-link"><div><p className="section-label">Prefer a female practitioner?</p><h2>Explore our dedicated women&apos;s care options.</h2></div><Link className="button button-light" href="/women-care">View women&apos;s care <ArrowIcon /></Link></div>

    <section className="team-cta">
      <div><p className="section-label">Your first appointment</p><h2>Not sure which therapist is right for you?</h2><p>Tell us what you need help with and we’ll guide you towards the most suitable appointment.</p></div>
      <Link className="button button-primary" href="/contact">Talk to our clinic <ArrowIcon /></Link>
    </section>
  </main></PageShell>;
}
