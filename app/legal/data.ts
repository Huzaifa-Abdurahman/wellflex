export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalPage = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  sections: LegalSection[];
};

export const lastUpdated = "6 September 2026";

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    label: "Your information",
    summary: "This policy explains what information Flex Well Physiotherapy Center may receive through this website, why we use it, and the choices available to you.",
    sections: [
      { heading: "1. Who we are", paragraphs: ["Flex Well Physiotherapy Center is a clinic located on Street 19, Sector J, DHA Phase II, Islamabad, Pakistan. In this policy, “Flex Well Physiotherapy Center”, “we”, “our” and “us” refer to the clinic and its authorised team."] },
      { heading: "2. Information you choose to provide", paragraphs: ["You may provide your name, telephone number, email address, preferred appointment time and a brief description of what you would like help with. You may also share information when you call, email, message us on WhatsApp, or communicate through our social-media pages."], items: ["Only share information that is reasonably necessary for your enquiry.", "Do not use the website form for emergencies or highly sensitive medical records.", "If you provide information about another person, you should have their permission to do so."] },
      { heading: "3. How the website enquiry form works", paragraphs: ["The current appointment form prepares a message on your device and opens WhatsApp. The website itself does not save the completed form in a clinic database before WhatsApp opens. Your message is sent only after you review and send it in WhatsApp.", "Messages sent through WhatsApp are handled through WhatsApp and Meta systems under their own privacy terms. Calls and emails are handled by the relevant telephone and email providers."] },
      { heading: "4. Technical and third-party information", paragraphs: ["Our hosting provider may process routine technical information needed to deliver and secure the website, such as an IP address, browser type, requested page, approximate time and error logs. We do not currently use first-party advertising or analytics cookies.", "The embedded Google Map may allow Google to process device, browser, location or cookie information when the map loads. Social-media links take you to external services only when selected."] },
      { heading: "5. Why we use information", items: ["To respond to questions and appointment requests.", "To arrange, confirm or change clinic visits.", "To understand which service may be appropriate to discuss with you.", "To maintain clinic safety, prevent misuse and protect our legal rights.", "To comply with applicable professional, regulatory or legal responsibilities."] },
      { heading: "6. Health-related information", paragraphs: ["Information about symptoms or treatment may be sensitive. We limit access to authorised people who need it for clinic operations or care. A website enquiry is not a substitute for a clinical assessment, and sending a message does not create a therapist–patient relationship."] },
      { heading: "7. Sharing and international services", paragraphs: ["We do not sell personal information. Information may be processed by service providers that help us communicate, host the website, display maps or maintain security. These may include WhatsApp/Meta, Google, email and hosting providers, some of which may process information outside Pakistan.", "We may disclose information where reasonably necessary to comply with law, protect a person from serious harm, respond to lawful authority, or establish and defend legal rights."] },
      { heading: "8. Retention and security", paragraphs: ["The website does not currently retain submitted form entries. Messages received through WhatsApp or email may be retained for as long as reasonably needed to respond, administer appointments, maintain appropriate clinic records, resolve disputes or meet applicable obligations.", "We use reasonable administrative and technical safeguards, but no internet or messaging service can be guaranteed completely secure. Please choose carefully what you send online."] },
      { heading: "9. Your choices", paragraphs: ["You may ask what personal information the clinic holds about you and request correction or deletion where appropriate. Some information may need to be retained for clinical, legal, safety or record-keeping reasons. You may also choose to contact us by telephone instead of using third-party messaging services."] },
      { heading: "10. Children", paragraphs: ["This website is intended for general audiences and does not knowingly invite children to submit enquiries independently. A parent or legal guardian should contact the clinic for a child or young person where appropriate."] },
      { heading: "11. Changes and contact", paragraphs: ["We may update this policy when the website, clinic practices or applicable requirements change. The current revision date appears above.", "For a privacy question or request, email qadeerkhan3945@gmail.com or call +92 309 7708828."] },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    label: "Website terms",
    summary: "These terms set out the conditions for using the Flex Well Physiotherapy Center website and its appointment and information features.",
    sections: [
      { heading: "1. Acceptance", paragraphs: ["By using this website, you agree to these Terms of Use. If you do not agree, please do not use the website. These terms concern website use; separate information and consent may apply to services delivered at the clinic."] },
      { heading: "2. Information, not individual advice", paragraphs: ["Website content is general information and is not a diagnosis, prescription, emergency service or individual medical recommendation. Your circumstances may require an in-person assessment or advice from an appropriately qualified healthcare professional."] },
      { heading: "3. Appointment enquiries", paragraphs: ["Submitting an enquiry, opening WhatsApp or sending an email does not confirm an appointment. A booking is confirmed only when the clinic expressly agrees to a date and time. Availability, practitioner selection, treatment suitability and fees may be discussed before confirmation."] },
      { heading: "4. Acceptable use", items: ["Use the website only for lawful, genuine and respectful purposes.", "Do not attempt to disrupt, test or gain unauthorised access to the website or connected systems.", "Do not submit false, abusive, harmful or unlawful material.", "Do not copy or exploit website content, branding or design without permission."] },
      { heading: "5. Accuracy and availability", paragraphs: ["We aim to keep information useful and current, but services, team information, availability and website content may change. We do not promise that every page will always be available, error-free or suitable for every purpose."] },
      { heading: "6. Third-party services", paragraphs: ["The website links to or embeds third-party services including Google Maps, WhatsApp, Instagram and Facebook. Flex Well Physiotherapy Center does not control their availability, security, content or privacy practices. Your use of those services is governed by their own terms."] },
      { heading: "7. Intellectual property", paragraphs: ["Unless otherwise stated, the Flex Well Physiotherapy Center name, website copy, layout and original design elements are owned by or licensed to Flex Well Physiotherapy Center. You may view and print pages for personal, non-commercial use, but may not republish or commercially exploit them without written permission."] },
      { heading: "8. Responsibility", paragraphs: ["To the extent permitted by applicable law, Flex Well Physiotherapy Center is not responsible for losses caused solely by reliance on general website information, interruptions outside our reasonable control, or third-party platforms. Nothing in these terms excludes responsibility that cannot lawfully be excluded."] },
      { heading: "9. Governing principles", paragraphs: ["These terms are intended to operate under the applicable laws of Pakistan. Any dispute should first be raised with the clinic in good faith so that a practical resolution can be attempted."] },
      { heading: "10. Contact", paragraphs: ["Questions about these terms may be sent to qadeerkhan3945@gmail.com or discussed by calling +92 309 7708828."] },
    ],
  },
  {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    label: "Important health information",
    summary: "Please understand the limits of online information before using this website to make decisions about your health or treatment.",
    sections: [
      { heading: "1. General information only", paragraphs: ["The articles, service descriptions and treatment pages on this website are provided for general education. They cannot take account of your complete history, examination findings, medication, diagnosis or individual risks and should not be treated as personal medical advice."] },
      { heading: "2. No diagnosis or clinical relationship online", paragraphs: ["Reading the website, completing the enquiry form or messaging the clinic does not itself create a therapist–patient relationship. A clinical relationship begins only through an appropriate consultation and mutual agreement to provide care."] },
      { heading: "3. Emergencies and urgent symptoms", paragraphs: ["This website and its messaging channels are not monitored as emergency services. Seek urgent medical care if you believe you may have a medical emergency or experience severe or rapidly worsening symptoms, major trauma, sudden weakness, difficulty breathing, loss of consciousness, or other alarming changes. Contact the appropriate local emergency service or attend the nearest emergency department."] },
      { heading: "4. Assessment and referral", paragraphs: ["Not every symptom is suitable for physiotherapy, exercise, manual therapy or Hijama. A practitioner may recommend medical assessment, investigation or referral when symptoms fall outside the clinic’s scope or when additional review is appropriate."] },
      { heading: "5. Results vary", paragraphs: ["Responses to treatment differ between people. No webpage, practitioner profile or testimonial guarantees pain relief, recovery time or a particular outcome. Progress may be influenced by diagnosis, health, activity, attendance, adherence, lifestyle and factors outside the clinic’s control."] },
      { heading: "6. Exercise and self-management", paragraphs: ["Do not begin or continue an exercise solely because it appears on a general website. Exercises should be appropriate to your condition and ability. Stop and seek advice if an activity causes concerning symptoms or a significant unexpected worsening."] },
      { heading: "7. Hijama and complementary wellness", paragraphs: ["Hijama is presented as a traditional complementary wellness practice, not a proven cure or replacement for medical care. It may not be appropriate for some people, including those with certain health conditions, skin concerns, bleeding risks or medications. Suitability, informed consent, hygiene and aftercare should be discussed before treatment."] },
      { heading: "8. Contact", paragraphs: ["For a non-urgent question about whether a Flex Well Physiotherapy Center service may be appropriate to discuss, contact the clinic on +92 309 7708828. A message cannot replace an assessment."] },
    ],
  },
  {
    slug: "cookie-notice",
    title: "Cookie Notice",
    label: "Website technology",
    summary: "This notice explains the limited website technologies currently used and how embedded or linked services may use cookies.",
    sections: [
      { heading: "1. What cookies are", paragraphs: ["Cookies are small text files or similar technologies that websites may place on a device to remember information, operate features, measure use or support advertising."] },
      { heading: "2. Our current use", paragraphs: ["Flex Well Physiotherapy Center does not currently use first-party advertising cookies or a first-party analytics service on this website. The website may rely on strictly necessary technical processes from its hosting environment to deliver pages securely and reliably."] },
      { heading: "3. Google Maps", paragraphs: ["The Contact page embeds Google Maps. When the map loads, Google may receive technical information and may use cookies or similar technologies according to Google’s own settings and policies. This can occur even if you do not interact with the map."] },
      { heading: "4. External links", paragraphs: ["Selecting WhatsApp, Instagram, Facebook, email, telephone or Google Maps links takes you to another application or service. Those services may use their own cookies and tracking technologies. Their policies and account settings control that processing."] },
      { heading: "5. Your controls", paragraphs: ["Most browsers allow you to block, delete or limit cookies. Blocking all cookies may affect embedded maps or other functionality. You can also avoid loading the map by not visiting the Contact page and can contact the clinic directly by telephone."] },
      { heading: "6. Future changes", paragraphs: ["If we introduce analytics, advertising or other non-essential cookies, this notice and any required consent controls should be updated before those technologies are enabled."] },
      { heading: "7. Contact", paragraphs: ["Questions about website technology or this notice may be sent to qadeerkhan3945@gmail.com."] },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    label: "Inclusive access",
    summary: "Flex Well Physiotherapy Center aims to make its website understandable and usable for as many people as reasonably possible.",
    sections: [
      { heading: "1. Our commitment", paragraphs: ["We want visitors to be able to find clinic information, understand services and contact us regardless of device, input method or access need. Accessibility is an ongoing responsibility rather than a one-time claim."] },
      { heading: "2. Measures used on this website", items: ["Semantic headings and meaningful page structure.", "Keyboard-accessible navigation, forms and carousel controls.", "Visible focus indicators for interactive elements.", "Text alternatives for meaningful images and accessible labels for controls.", "Responsive layouts, readable contrast and support for reduced-motion preferences."] },
      { heading: "3. Known limitations", paragraphs: ["Third-party experiences such as Google Maps, WhatsApp and social-media sites are outside our direct control. Some uploaded clinical imagery may be decorative and does not provide clinical information. We continue to review content as the website grows."] },
      { heading: "4. Assistance and feedback", paragraphs: ["If you have difficulty using any part of the website or need information in another reasonable format, call +92 309 7708828 or email qadeerkhan3945@gmail.com. Please tell us which page or feature caused difficulty and what assistance would be useful."] },
      { heading: "5. Review", paragraphs: ["We will review accessibility when significant features or content are added and will prioritise issues that prevent visitors from obtaining essential clinic or contact information."] },
    ],
  },
];

export function getLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}
