export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  introduction: string[];
  suitableFor: string[];
  benefits: string[];
  approach: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    description: "Relieve pain, restore movement and improve your quality of life.",
    image: "/physciotherapy.jfif",
    imageAlt: "Physiotherapist assessing and treating a patient",
    introduction: [
      "Physiotherapy is a personalised, evidence-informed approach to restoring movement and helping you return to the activities that matter. At Flex Well, treatment begins with listening carefully to your concerns, assessing how your body moves, and understanding the demands of your daily life.",
      "Your plan may combine guided movement, hands-on treatment, education and practical home exercises. The aim is not only to ease current symptoms, but also to build the confidence and physical capacity needed for lasting progress.",
    ],
    suitableFor: ["Back, neck or joint pain", "Sports and everyday injuries", "Reduced strength or mobility", "Postural and movement concerns", "Recovery after a period of inactivity"],
    benefits: ["Improved movement and flexibility", "Better strength and physical confidence", "Clear guidance for managing symptoms", "A structured path back to work, sport and daily activity"],
    approach: [
      { title: "Understand", text: "We discuss your symptoms, goals, health history and the activities currently affected." },
      { title: "Assess", text: "Your therapist evaluates movement, strength and relevant physical factors in a comfortable setting." },
      { title: "Treat", text: "We create a focused plan using the techniques and exercises most appropriate for you." },
      { title: "Progress", text: "Your plan develops as you improve, with practical guidance for maintaining the results." },
    ],
  },
  {
    slug: "hijama-therapy",
    title: "Hijama Therapy",
    description: "Traditional cupping care delivered with comfort, hygiene and professionalism.",
    image: "/hajjama.jfif",
    imageAlt: "Hijama cups arranged for a traditional cupping treatment",
    introduction: [
      "Hijama, also known as wet cupping, is a traditional wellness practice chosen by many people as part of their personal self-care routine. At Flex Well, every session is approached calmly and professionally, with careful attention to privacy, hygiene and your comfort.",
      "Before treatment, we discuss your expectations and relevant health information to determine whether the service is appropriate for you. Hijama is offered as a complementary wellness practice and is not a replacement for medical diagnosis or treatment.",
    ],
    suitableFor: ["People seeking traditional wellness care", "Those interested in complementary self-care", "Adults who have been appropriately screened", "Clients seeking a calm, private treatment experience"],
    benefits: ["A carefully managed treatment experience", "Individual placement based on consultation", "Clear preparation and aftercare advice", "Professional hygiene and single-use consumables"],
    approach: [
      { title: "Consult", text: "We review your goals, medical history and any factors that may make Hijama unsuitable." },
      { title: "Prepare", text: "The treatment areas and equipment are prepared using careful hygiene procedures." },
      { title: "Treat", text: "Cups are applied in selected areas while your comfort is monitored throughout." },
      { title: "Aftercare", text: "You receive straightforward advice about rest, hydration and caring for the treated skin." },
    ],
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    description: "Specialised support for persistent pain, recurring symptoms and injuries.",
    image: "/backpain.jfif",
    imageAlt: "Person experiencing lower back pain",
    introduction: [
      "Pain can affect sleep, work, movement and confidence. Our pain management service looks beyond the painful area to understand the physical, lifestyle and movement factors that may be contributing to your experience.",
      "Together, we build a manageable plan that may include movement strategies, graded exercise, hands-on care and education. Progress is measured against meaningful goals, such as walking more comfortably, returning to work or managing everyday tasks with less worry.",
    ],
    suitableFor: ["Persistent back or neck pain", "Recurring joint or muscle symptoms", "Pain following an injury", "Activity-related discomfort", "People worried about movement because of pain"],
    benefits: ["A clearer understanding of your symptoms", "Practical strategies for daily activities", "Gradual restoration of strength and tolerance", "Support focused on function, not only pain scores"],
    approach: [
      { title: "Listen", text: "We explore how pain affects your routine, sleep, work and the activities you value." },
      { title: "Examine", text: "A considered assessment helps identify movement patterns and areas requiring support." },
      { title: "Plan", text: "We agree on realistic priorities and a treatment plan that feels manageable." },
      { title: "Build", text: "Activity and exercise progress gradually as your confidence and capacity improve." },
    ],
  },
  {
    slug: "rehabilitation",
    title: "Rehabilitation",
    description: "Structured post-surgery and injury rehabilitation programmes.",
    image: "/rehabillation.jfif",
    imageAlt: "Physiotherapist supporting a patient during rehabilitation",
    introduction: [
      "Good rehabilitation turns recovery into a clear, progressive process. Whether you are rebuilding after surgery, an injury or a period of reduced mobility, we tailor each stage to your current ability and your clinician's guidance.",
      "Sessions focus on restoring movement, strength, balance and confidence without rushing important milestones. We regularly review your response and adjust the programme so that every exercise has a clear purpose.",
    ],
    suitableFor: ["Recovery following orthopaedic surgery", "Sports or workplace injuries", "Reduced mobility after immobilisation", "Weakness and deconditioning", "A planned return to work or sport"],
    benefits: ["Clear, stage-based recovery goals", "Safer progression of strength and activity", "Improved mobility, balance and confidence", "A practical home programme between visits"],
    approach: [
      { title: "Baseline", text: "We establish your current movement, strength, precautions and recovery goals." },
      { title: "Restore", text: "Early work focuses on comfortable movement, control and essential daily activities." },
      { title: "Rebuild", text: "Strength, balance and endurance are progressed with appropriately challenging exercises." },
      { title: "Return", text: "Later sessions prepare you for the specific demands of work, sport and independent life." },
    ],
  },
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    description: "Skilled hands-on techniques that support comfortable, confident movement.",
    image: "/manual-therapy.jfif",
    imageAlt: "Therapist applying a hands-on manual therapy technique",
    introduction: [
      "Manual therapy uses skilled, hands-on techniques to assess and support the movement of joints and soft tissues. It can be a useful part of treatment when stiffness, sensitivity or restricted movement is limiting your comfort and function.",
      "At Flex Well, hands-on care is never used in isolation. We combine it with movement, education and exercise so that short-term changes contribute to meaningful, longer-term improvement.",
    ],
    suitableFor: ["Joint stiffness and restricted movement", "Muscle tightness or sensitivity", "Neck, back and shoulder concerns", "Recovery where movement feels guarded", "Clients who may benefit from hands-on support"],
    benefits: ["Improved comfort during movement", "Support for joint and soft-tissue mobility", "Reduced guarding and movement apprehension", "Better preparation for active rehabilitation"],
    approach: [
      { title: "Assess", text: "We identify the movements and tissues most relevant to your symptoms and goals." },
      { title: "Explain", text: "Your therapist explains the proposed technique and checks that you are comfortable." },
      { title: "Mobilise", text: "Appropriate, controlled hands-on techniques are applied and your response is monitored." },
      { title: "Integrate", text: "Movement or exercise follows treatment to help you use and maintain the change." },
    ],
  },
  {
    slug: "exercise-therapy",
    title: "Exercise Therapy",
    description: "Personalised exercises for strength, flexibility and lasting progress.",
    image: "/Exercise Therapy.jfif",
    imageAlt: "Therapist guiding a patient through a personalised exercise",
    introduction: [
      "Exercise therapy uses carefully selected movement to improve strength, flexibility, balance and physical resilience. Your programme is built around what you need to do—not a generic list of exercises—and is adapted to your starting point.",
      "We teach each exercise clearly, explain its purpose and choose a realistic amount for your schedule. As your body adapts, we progress the challenge so you continue moving toward your goals safely and confidently.",
    ],
    suitableFor: ["Weakness or reduced flexibility", "Recurring injuries or loss of fitness", "Balance and movement-confidence concerns", "Rehabilitation after pain or injury", "Performance and injury-prevention goals"],
    benefits: ["A programme tailored to your ability", "Better strength, mobility and coordination", "Confidence to exercise independently", "Measurable progression toward personal goals"],
    approach: [
      { title: "Set goals", text: "We define what improved movement should allow you to do in everyday life." },
      { title: "Learn", text: "Exercises are demonstrated and practised with clear feedback on technique." },
      { title: "Practise", text: "You receive a realistic programme that fits your routine and available equipment." },
      { title: "Progress", text: "We review results and adjust resistance, range or complexity at the right time." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
