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
    image: "/physciotherapy.jpg",
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
    image: "/hajjama.jpg",
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
    image: "/backpain.jpg",
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
    image: "/rehabillation.jpg",
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
    image: "/manual-therapy.jpg",
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
    image: "/exercise-therapy.jpg",
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
  {
    slug: "orthopaedic-physiotherapy",
    title: "Orthopaedic Physiotherapy",
    description: "Assessment and rehabilitation for bone, joint, muscle and tendon concerns.",
    image: "/manual-therapy.jpg",
    imageAlt: "Physiotherapist assessing a patient's joint movement",
    introduction: [
      "Orthopaedic physiotherapy supports people affected by pain, injury, stiffness or reduced function involving muscles, joints, tendons and ligaments. Care begins with understanding the activities that have become difficult and identifying the physical factors relevant to them.",
      "Your plan may combine education, progressive exercise, activity guidance and appropriate hands-on treatment. When symptoms suggest that imaging, medical assessment or another professional opinion is needed, we explain the next step clearly.",
    ],
    suitableFor: ["Joint and muscle pain", "Sprains, strains and tendon concerns", "Arthritis-related movement difficulties", "Recovery after immobilisation", "Work or activity-related injuries"],
    benefits: ["A clear movement-based assessment", "Exercise matched to your starting point", "Improved strength and everyday function", "Guidance for returning to valued activities"],
    approach: [
      { title: "Assess", text: "We review symptoms, movement, strength and the tasks you want to regain." },
      { title: "Set priorities", text: "Together we define practical goals and any activities that need temporary modification." },
      { title: "Rehabilitate", text: "Treatment combines active rehabilitation with other appropriate techniques." },
      { title: "Return", text: "Your programme progresses toward work, home, exercise or sporting demands." },
    ],
  },
  {
    slug: "neurological-physiotherapy",
    title: "Neurological Physiotherapy",
    description: "Goal-led movement and mobility support for neurological conditions.",
    image: "/rehabillation.jpg",
    imageAlt: "Therapist supporting a patient during walking rehabilitation",
    introduction: [
      "Neurological physiotherapy helps people whose movement, balance, strength or coordination has been affected by a condition involving the brain, spinal cord or nerves. Assessment considers the person as a whole, including mobility, transfers, fatigue, confidence and the support available at home.",
      "Programmes are individual and may focus on practising meaningful tasks, maintaining movement, building strength and improving safe participation in daily life. Care may need coordination with the patient's doctor and wider rehabilitation team.",
    ],
    suitableFor: ["Recovery after stroke", "Parkinson's-related mobility changes", "Balance and coordination difficulties", "Reduced mobility following neurological illness", "People requiring task-specific movement practice"],
    benefits: ["Practice centred on personal goals", "Support for mobility and transfers", "Strength, balance and endurance work", "Practical guidance for patients and families"],
    approach: [
      { title: "Understand", text: "We discuss the diagnosis, current abilities, medical guidance and daily priorities." },
      { title: "Measure", text: "Relevant movement, balance, strength and functional tasks are assessed." },
      { title: "Practise", text: "Sessions use repetition and graded challenge around meaningful activities." },
      { title: "Coordinate", text: "Progress and concerns are reviewed with referral or team input when appropriate." },
    ],
  },
  {
    slug: "paediatric-physiotherapy",
    title: "Paediatric Physiotherapy",
    description: "Child-centred movement support developed with families and clinical guidance.",
    image: "/exercise-therapy.jpg",
    imageAlt: "Physiotherapist guiding supported movement practice",
    introduction: [
      "Paediatric physiotherapy supports children whose movement, balance, strength or physical development affects play and everyday participation. Care should be age-appropriate, engaging and developed in partnership with parents or caregivers.",
      "Some children require multidisciplinary or specialist paediatric input. We review each enquiry before booking and recommend referral when a child's needs fall outside the clinic's available expertise or facilities.",
    ],
    suitableFor: ["Movement and balance difficulties", "Recovery after a musculoskeletal injury", "Reduced strength or physical confidence", "Cerebral palsy rehabilitation support", "Home activity guidance for families"],
    benefits: ["Goals connected to play and daily life", "Family involvement and practical education", "Age-appropriate movement practice", "Referral guidance when specialist input is required"],
    approach: [
      { title: "Listen", text: "We learn about the child's history, abilities and priorities from the child and family." },
      { title: "Observe", text: "Movement is assessed through suitable functional activities." },
      { title: "Engage", text: "Practice is adapted to the child's age, interests and tolerance." },
      { title: "Support", text: "Families receive realistic ideas for safe practice between appointments." },
    ],
  },
  {
    slug: "older-adult-physiotherapy",
    title: "Older Adult Physiotherapy",
    description: "Practical support for strength, balance, mobility and everyday independence.",
    image: "/rehabillation.jpg",
    imageAlt: "Older adult practising mobility with a physiotherapist",
    introduction: [
      "Physiotherapy for older adults focuses on the abilities that protect independence: getting up, walking, using stairs, maintaining balance and completing everyday activities with confidence. Plans account for health conditions, medicines, fatigue and the person's usual environment.",
      "Treatment is paced carefully and may include strength, balance, mobility and endurance exercises alongside advice for safer activity. Sudden changes, repeated falls or concerning symptoms may require medical review.",
    ],
    suitableFor: ["Reduced strength or walking tolerance", "Balance concerns or falls risk", "Recovery after illness or inactivity", "Joint stiffness affecting daily tasks", "Older adults needing home-based support"],
    benefits: ["Improved confidence with daily movement", "Progressive strength and balance practice", "Support for safer transfers and walking", "A manageable home activity plan"],
    approach: [
      { title: "Review", text: "We consider health history, mobility, falls, home demands and personal goals." },
      { title: "Establish safety", text: "Exercises and mobility practice begin at an appropriate level of support." },
      { title: "Build capacity", text: "Strength, balance and endurance progress gradually." },
      { title: "Maintain", text: "A practical routine helps carry improvements into everyday life." },
    ],
  },
  {
    slug: "post-surgical-physiotherapy",
    title: "Post-Surgical Physiotherapy",
    description: "Rehabilitation aligned with your procedure, precautions and recovery goals.",
    image: "/post-surgery-pain.jpg",
    imageAlt: "Patient receiving physiotherapy support after surgery",
    introduction: [
      "Post-surgical physiotherapy supports movement, strength and independence after an operation. The right pace depends on the procedure, healing stage, surgeon's instructions and your current function.",
      "We review available discharge information and precautions before progressing exercise. Rehabilitation may include mobility practice, range-of-motion work, strengthening, balance and preparation for everyday or occupational demands.",
    ],
    suitableFor: ["Joint replacement recovery", "Orthopaedic procedures", "Reduced mobility after surgery", "Weakness following hospitalisation", "Return to work or activity after clearance"],
    benefits: ["Rehabilitation matched to clinical guidance", "Clear stage-based goals", "Improved movement and strength", "Support for regaining independence"],
    approach: [
      { title: "Check guidance", text: "We review the procedure, precautions and advice from your surgical team." },
      { title: "Restore basics", text: "Early priorities include safe movement and essential daily tasks." },
      { title: "Progress exercise", text: "Strength, balance and mobility advance as healing and guidance allow." },
      { title: "Prepare to return", text: "Later work reflects your home, job or recreational goals." },
    ],
  },
  {
    slug: "dry-needling",
    title: "Dry Needling",
    description: "A needle-based technique considered only after assessment and informed consent.",
    image: "/manual-therapy.jpg",
    imageAlt: "Clinical physiotherapy treatment setting",
    introduction: [
      "Dry needling uses a fine, sterile needle without medication and may be considered for selected muscle-related pain and movement concerns. It is different from acupuncture and should form only one part of a broader rehabilitation plan.",
      "Suitability depends on assessment, practitioner training, consent and individual health factors. Availability is confirmed before booking; you can always choose another treatment approach.",
    ],
    suitableFor: ["Selected muscle pain or sensitivity", "Movement restricted by muscular symptoms", "People assessed as clinically suitable", "Patients comfortable with a needle-based option"],
    benefits: ["Considered within a complete treatment plan", "Clear explanation and informed consent", "Single-use sterile needles", "Exercise used to support functional progress"],
    approach: [
      { title: "Screen", text: "We review symptoms, medicines, health factors and whether the technique is appropriate." },
      { title: "Explain", text: "The procedure, alternatives, expected sensations and risks are discussed." },
      { title: "Treat", text: "A suitably trained practitioner uses sterile single-use needles when agreed." },
      { title: "Integrate", text: "Movement and exercise connect the session to your longer-term goals." },
    ],
  },
  {
    slug: "wet-hijama",
    title: "Wet Hijama",
    description: "Traditional wet cupping with screening, consent and careful infection control.",
    image: "/hajjama-cupping.jpg",
    imageAlt: "Cups prepared for a Hijama session",
    introduction: [
      "Wet Hijama is a traditional cupping practice in which suction is combined with controlled superficial skin incisions. Because blood exposure is involved, careful screening, single-use supplies, sharps handling and aftercare are essential.",
      "Evidence for health benefits remains limited, so we present Hijama as an optional complementary wellness practice rather than a cure or replacement for medical care.",
    ],
    suitableFor: ["Adults requesting traditional wet cupping", "People who complete suitability screening", "Clients who understand expected marks and aftercare", "Those seeking complementary rather than replacement care"],
    benefits: ["Private pre-treatment consultation", "Single-use blades and consumables", "Clear consent and aftercare guidance", "Published hygiene and safety standards"],
    approach: [
      { title: "Screen", text: "Health history, medicines, skin condition and contraindications are reviewed." },
      { title: "Consent", text: "The process, uncertainty of benefit, risks and alternatives are explained." },
      { title: "Provide care", text: "Agreed areas are treated using single-use supplies and infection-control precautions." },
      { title: "Aftercare", text: "You receive skin-care guidance and advice on when to seek medical help." },
    ],
  },
  {
    slug: "dry-cupping",
    title: "Dry Cupping",
    description: "Non-incisional cupping offered as an optional complementary wellness practice.",
    image: "/hajjama.jpg",
    imageAlt: "Dry cupping equipment in a treatment room",
    introduction: [
      "Dry cupping creates suction on the skin without making incisions. Some people choose it for relaxation or as part of a personal wellness routine, although strong evidence for treating health conditions is limited.",
      "We explain expected temporary marks, possible side effects and alternative approaches before treatment. Equipment hygiene and individual suitability remain important even when the skin is not intentionally pierced.",
    ],
    suitableFor: ["Adults interested in non-incisional cupping", "People assessed as suitable", "Clients who understand temporary skin marks", "Those seeking an optional wellness experience"],
    benefits: ["No intentional skin incision", "Consultation before treatment", "Clear expectations and consent", "Practical aftercare information"],
    approach: [
      { title: "Discuss", text: "We review your expectations, relevant health information and skin condition." },
      { title: "Explain", text: "Likely marks, sensations, uncertainties and alternatives are covered." },
      { title: "Apply", text: "Cups are placed on agreed areas and comfort is monitored." },
      { title: "Guide", text: "Aftercare advice is provided before you leave." },
    ],
  },
  {
    slug: "sunnah-hijama",
    title: "Sunnah Hijama",
    description: "Faith-sensitive Hijama care delivered with clinical screening and honest guidance.",
    image: "/hajjama-cupping.jpg",
    imageAlt: "Hijama cups arranged for traditional wellness care",
    introduction: [
      "Many Muslims choose Hijama because of its place in Islamic tradition. We respect that motivation while maintaining the same consultation, consent, hygiene and suitability standards used for every wet-cupping appointment.",
      "Religious significance does not remove clinical risks or guarantee a health outcome. Hijama remains complementary care and should not delay medical assessment, prescribed treatment or emergency help.",
    ],
    suitableFor: ["Adults choosing Hijama for faith-related reasons", "People assessed as suitable for wet cupping", "Clients seeking privacy and respectful communication", "Those who understand its complementary role"],
    benefits: ["Faith-sensitive and respectful service", "Individual screening before treatment", "Single-use consumables and sharps control", "Clear preparation and aftercare"],
    approach: [
      { title: "Understand", text: "We listen to your preference and clarify the service you are requesting." },
      { title: "Screen", text: "Medical history and possible contraindications are reviewed before proceeding." },
      { title: "Treat safely", text: "Consent, hygiene and single-use supplies remain central throughout." },
      { title: "Support", text: "We provide aftercare without making unsupported treatment promises." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
