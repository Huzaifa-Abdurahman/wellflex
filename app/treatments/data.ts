export type Treatment = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overview: string[];
  commonSigns: string[];
  goals: string[];
  plan: { title: string; text: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "neck-pain",
    title: "Neck Pain",
    description: "Focused care for stiffness, strain and discomfort affecting everyday movement.",
    image: "/neck-pain.jpg",
    imageAlt: "Person experiencing discomfort around the neck",
    overview: [
      "Neck pain can make simple tasks—from working at a desk to checking your surroundings—feel tiring or restricted. It may develop gradually through sustained positions and daily habits, or follow a sudden strain, injury or period of reduced activity.",
      "At Flex Well Physiotherapy Center, we assess how your neck, shoulders and upper back work together. Your plan is shaped around the movements you need, with clear advice, appropriate hands-on care and progressive exercises designed to improve comfort and confidence.",
    ],
    commonSigns: ["Stiffness or reduced turning", "Pain around the neck and shoulders", "Symptoms aggravated by desk work", "Muscle tension or movement-related headaches", "Discomfort following a strain"],
    goals: ["Restore comfortable neck movement", "Improve strength and postural endurance", "Reduce sensitivity during daily tasks", "Build confidence with work and exercise"],
    plan: [
      { title: "Detailed assessment", text: "We discuss your symptoms and assess neck, shoulder and upper-back movement." },
      { title: "Settle irritation", text: "Early treatment focuses on comfortable movement and strategies for aggravating activities." },
      { title: "Restore capacity", text: "Targeted mobility and strength exercises are progressed at a manageable pace." },
      { title: "Prevent recurrence", text: "We help you build sustainable habits for work, sleep and physical activity." },
    ],
  },
  {
    slug: "back-pain",
    title: "Back Pain",
    description: "Personalised support to restore movement, strength and confidence in daily life.",
    image: "/treatment-back-pain.jpg",
    imageAlt: "Person holding the lower back because of discomfort",
    overview: [
      "Back pain is common, but its effect on each person is different. It can limit lifting, sitting, walking, sleep or exercise and may create understandable worry about causing further harm.",
      "Our approach looks at the full picture: your symptoms, movement, strength, routine and recovery goals. We use practical education and graded rehabilitation to help you move with greater ease and return to meaningful activity.",
    ],
    commonSigns: ["Lower or mid-back discomfort", "Stiffness after rest or sitting", "Pain during bending or lifting", "Reduced tolerance for standing or walking", "Recurring episodes affecting activity"],
    goals: ["Improve comfortable movement", "Rebuild trunk and hip strength", "Increase tolerance for work and activity", "Develop a clear self-management plan"],
    plan: [
      { title: "Understand", text: "We explore when symptoms began, what affects them and how they influence your routine." },
      { title: "Move comfortably", text: "We introduce positions and movements that help restore confidence without unnecessary fear." },
      { title: "Build strength", text: "Exercise progresses to improve the capacity needed for your work, home and fitness goals." },
      { title: "Stay active", text: "You leave with practical strategies for maintaining progress and responding to future flare-ups." },
    ],
  },
  {
    slug: "shoulder-pain",
    title: "Shoulder Pain",
    description: "Restore comfortable reach, lifting strength and confidence in your shoulder.",
    image: "/shoulder-pain.jpg",
    imageAlt: "Person experiencing pain around the shoulder",
    overview: [
      "Shoulder pain can affect dressing, sleeping, reaching overhead and lifting even light objects. Symptoms may follow an injury, repeated activity or a gradual change in shoulder strength and mobility.",
      "We assess the shoulder alongside the neck, upper back and the specific tasks you need to perform. Treatment focuses on improving useful movement and gradually rebuilding the strength required for daily life, work or sport.",
    ],
    commonSigns: ["Pain when reaching overhead", "Difficulty dressing or reaching behind", "Discomfort when lying on one side", "Weakness during lifting", "Reduced range following an injury"],
    goals: ["Restore useful range of motion", "Improve shoulder and upper-back strength", "Reduce discomfort during reaching", "Support a confident return to lifting or sport"],
    plan: [
      { title: "Assess movement", text: "We examine comfortable range, strength and the tasks that reproduce your symptoms." },
      { title: "Improve mobility", text: "Guided movement and appropriate manual techniques help address stiffness and guarding." },
      { title: "Build control", text: "Exercises develop shoulder-blade control, strength and tolerance through useful ranges." },
      { title: "Return to function", text: "The programme progresses towards your individual work, home or sporting demands." },
    ],
  },
  {
    slug: "knee-pain",
    title: "Knee Pain",
    description: "Practical rehabilitation for walking, stairs, exercise and everyday independence.",
    image: "/knee-pain.jpg",
    imageAlt: "Person supporting a painful knee",
    overview: [
      "Knee pain may affect walking, stairs, prayer positions, squatting or exercise. It can develop after an injury, alongside changes in activity, or gradually over time.",
      "Our assessment considers the knee as part of the whole leg. We look at mobility, strength, balance and the demands you place on the joint, then create a progressive plan centred on the activities most important to you.",
    ],
    commonSigns: ["Pain on stairs or slopes", "Difficulty squatting or kneeling", "Stiffness after sitting", "Reduced confidence following injury", "Swelling or activity-related discomfort"],
    goals: ["Improve lower-limb strength", "Restore comfortable daily movement", "Increase balance and joint confidence", "Support return to exercise or sport"],
    plan: [
      { title: "Establish a baseline", text: "We assess knee movement, leg strength, balance and relevant functional tasks." },
      { title: "Manage load", text: "Activity is adjusted thoughtfully so you can keep moving while symptoms settle." },
      { title: "Strengthen", text: "Exercises progressively build the thigh, hip and calf capacity that supports the knee." },
      { title: "Prepare for life", text: "Later rehabilitation reflects the stairs, work, exercise or sport you want to resume." },
    ],
  },
  {
    slug: "sports-injuries",
    title: "Sports Injuries",
    description: "Goal-led rehabilitation for a safe, confident return to training and performance.",
    image: "/sports-injury.jpg",
    imageAlt: "Athlete receiving support for a sports injury",
    overview: [
      "A sports injury can interrupt more than training—it can affect routine, confidence and personal goals. Whether symptoms developed suddenly or through repeated load, effective rehabilitation should prepare you for the real demands of your sport.",
      "We combine a careful assessment with progressive strength, mobility and sport-specific work. Your return is guided by function and readiness rather than time alone, helping you rebuild capacity with a clear sense of direction.",
    ],
    commonSigns: ["Muscle or tendon injuries", "Joint sprains and strains", "Pain that returns during training", "Reduced speed, power or confidence", "Difficulty returning after time away"],
    goals: ["Restore strength and movement quality", "Rebuild sport-specific capacity", "Improve confidence under load", "Reduce avoidable re-injury risks"],
    plan: [
      { title: "Define the demand", text: "We assess the injury and understand the exact movements and loads your sport requires." },
      { title: "Restore foundations", text: "Early rehabilitation develops comfortable mobility, control and baseline strength." },
      { title: "Build performance", text: "Training progresses through speed, power, endurance or agility as appropriate." },
      { title: "Return with confidence", text: "Sport-specific testing and gradual exposure support a considered return to participation." },
    ],
  },
  {
    slug: "sciatica-pain",
    title: "Sciatica Pain",
    description: "Individual care for back-related leg pain, sensitivity and restricted movement.",
    image: "/sciatica-pain.jpg",
    imageAlt: "Person experiencing pain travelling from the lower back into the leg",
    overview: [
      "Sciatica describes symptoms associated with irritation or sensitivity of the sciatic nerve, often felt from the lower back or buttock into the leg. Experiences vary and may include pain, tingling, altered sensation or weakness.",
      "A careful assessment helps us understand your symptom pattern and identify whether physiotherapy is appropriate. Treatment is paced around your sensitivity and may combine education, comfortable movement and gradual strengthening as symptoms allow.",
    ],
    commonSigns: ["Pain travelling into the buttock or leg", "Tingling or altered sensation", "Symptoms affected by sitting or bending", "Difficulty walking or changing position", "Back pain accompanied by leg symptoms"],
    goals: ["Find more comfortable ways to move", "Reduce sensitivity during daily activity", "Restore strength and walking tolerance", "Recognise when medical review is needed"],
    plan: [
      { title: "Screen carefully", text: "We review your symptoms and check for signs that require medical assessment or referral." },
      { title: "Find comfort", text: "Early advice and movement strategies are selected around your individual symptom response." },
      { title: "Rebuild gradually", text: "Mobility, strength and activity are progressed without forcing sensitive symptoms." },
      { title: "Return to routine", text: "The plan develops towards sitting, walking, work and exercise with more confidence." },
    ],
  },
  {
    slug: "post-surgery-pain",
    title: "Post-Surgery Pain",
    description: "Stage-appropriate recovery support following orthopaedic procedures and surgery.",
    image: "/post-surgery.PNG",
    imageAlt: "Patient receiving supported rehabilitation following surgery",
    overview: [
      "Pain, stiffness and weakness are common concerns during recovery from surgery. A structured rehabilitation plan can help you understand what to do at each stage while respecting your surgeon's precautions and expected healing times.",
      "We coordinate treatment around the procedure you have had, your current ability and the activities you want to regain. Progress is reviewed regularly so exercises remain appropriately challenging without rushing recovery.",
    ],
    commonSigns: ["Pain and stiffness after surgery", "Reduced strength or mobility", "Difficulty walking or using stairs", "Uncertainty about safe activity", "Preparing to return to work or exercise"],
    goals: ["Restore movement within clinical guidance", "Rebuild strength and independence", "Improve confidence with daily tasks", "Progress safely towards work or recreation"],
    plan: [
      { title: "Review guidance", text: "We consider the procedure, surgical advice, precautions and your current recovery stage." },
      { title: "Restore essentials", text: "Early work supports movement, swelling management and important daily activities." },
      { title: "Rebuild capacity", text: "Strength, balance and endurance are developed through progressive rehabilitation." },
      { title: "Regain independence", text: "Later sessions prepare you for the practical demands of home, work and exercise." },
    ],
  },
  {
    slug: "hijama-wellness",
    title: "Hijama Wellness",
    description: "Traditional cupping care provided with thoughtful screening, hygiene and privacy.",
    image: "/hijama-male.jpg",
    imageAlt: "Hijama cups used during a traditional wellness treatment",
    overview: [
      "Hijama, or wet cupping, is a traditional practice that some people choose as part of their personal wellness routine. At Flex Well Physiotherapy Center, the experience is calm, private and centred on careful hygiene and informed choice.",
      "We begin with a consultation to understand your expectations and screen for reasons treatment may not be suitable. Hijama is provided as complementary wellness care; it should not replace medical assessment, prescribed treatment or urgent healthcare.",
    ],
    commonSigns: ["Interest in traditional wellness care", "Preference for a private, professional setting", "Seeking complementary self-care", "Wanting clear preparation and aftercare guidance"],
    goals: ["Provide an informed and comfortable experience", "Use appropriate placement following consultation", "Maintain careful hygiene procedures", "Give clear, practical aftercare advice"],
    plan: [
      { title: "Consultation", text: "We discuss your goals, health history, medications and suitability for treatment." },
      { title: "Preparation", text: "Treatment areas and single-use consumables are prepared using careful hygiene protocols." },
      { title: "Treatment", text: "Cups are applied to agreed areas while your comfort is monitored throughout the session." },
      { title: "Aftercare", text: "You receive guidance on rest, hydration, skin care and when to seek further advice." },
    ],
  },
  {
    slug: "frozen-shoulder",
    title: "Frozen Shoulder",
    description: "Stage-aware support for shoulder pain, stiffness and restricted everyday reach.",
    image: "/frozen-shoulder.jpg",
    imageAlt: "Person experiencing restricted and painful shoulder movement",
    overview: [
      "Frozen shoulder can cause substantial pain and a progressive loss of shoulder movement. Dressing, sleeping, reaching overhead and placing a hand behind the back may become particularly difficult.",
      "Recovery can take time and symptoms vary by stage. We assess your current irritability and function, then select education, movement and strengthening that do not unnecessarily aggravate the shoulder. Medical review may be advised when the diagnosis is uncertain or symptoms require additional investigation.",
    ],
    commonSigns: ["Increasing shoulder stiffness", "Pain during reaching or dressing", "Difficulty lying on the affected side", "Restricted movement in several directions", "Loss of behind-the-back reach"],
    goals: ["Maintain useful movement", "Reduce avoidable symptom aggravation", "Restore range as tolerance improves", "Rebuild strength for daily activity"],
    plan: [
      { title: "Confirm the pattern", text: "We assess movement and screen for other shoulder or neck-related causes." },
      { title: "Match the stage", text: "Advice and exercise intensity reflect current pain and stiffness." },
      { title: "Restore movement", text: "Mobility work progresses without forcing highly irritable symptoms." },
      { title: "Rebuild function", text: "Strength and task practice prepare the shoulder for everyday use." },
    ],
  },
  {
    slug: "stroke-rehabilitation",
    title: "Stroke Rehabilitation",
    description: "Individual movement, balance and mobility practice following a stroke.",
    image: "/stroke-rehabilitation-v2.png",
    imageAlt: "Physiotherapist guiding supported walking practice after stroke",
    overview: [
      "A stroke can affect movement, balance, sensation, coordination, fatigue and confidence in different ways. Physiotherapy is one part of multidisciplinary rehabilitation and should reflect medical guidance, current ability and the person's own priorities.",
      "Sessions may practise bed mobility, transfers, sitting, standing, walking and selected exercises. Suitability for clinic or home care is reviewed individually, and urgent new or worsening stroke symptoms require emergency medical attention.",
    ],
    commonSigns: ["Weakness on one side", "Balance or coordination difficulties", "Reduced walking confidence", "Difficulty with transfers", "Fatigue affecting activity"],
    goals: ["Practise meaningful everyday tasks", "Improve safe mobility where possible", "Build strength and activity tolerance", "Support patients and caregivers with clear guidance"],
    plan: [
      { title: "Review", text: "We consider hospital guidance, current support needs and personal goals." },
      { title: "Establish a baseline", text: "Movement, balance, transfers and mobility are assessed safely." },
      { title: "Practise", text: "Relevant tasks are repeated with an appropriate level of support." },
      { title: "Progress together", text: "The programme adapts with recovery and wider team recommendations." },
    ],
  },
  {
    slug: "knee-replacement-rehabilitation",
    title: "Knee Replacement Rehabilitation",
    description: "Progressive rehabilitation after total or partial knee replacement surgery.",
    image: "/knee-replacement-rehabilitation-v2.png",
    imageAlt: "Physiotherapist guiding knee movement after replacement surgery",
    overview: [
      "Rehabilitation after knee replacement commonly focuses on safe mobility, knee movement, swelling management, leg strength and a gradual return to everyday tasks. Your surgeon's instructions and individual healing remain the priority.",
      "We review your operation details, precautions and current walking ability before progressing exercises. Unexpected wound changes, calf swelling, chest pain, breathing difficulty or sudden deterioration require prompt medical assessment rather than routine physiotherapy.",
    ],
    commonSigns: ["Stiffness after knee replacement", "Reduced thigh strength", "Difficulty walking or using stairs", "Reliance on a walking aid", "Uncertainty about exercise progression"],
    goals: ["Follow surgical precautions", "Restore useful knee movement", "Improve walking and leg strength", "Regain confidence with daily tasks"],
    plan: [
      { title: "Check instructions", text: "We review discharge advice, weight-bearing status and precautions." },
      { title: "Restore essentials", text: "Early work supports transfers, walking and comfortable knee movement." },
      { title: "Build strength", text: "Exercise progresses across the hip, knee and calf as appropriate." },
      { title: "Return to routine", text: "Later practice reflects stairs, community walking and daily demands." },
    ],
  },
  {
    slug: "cerebral-palsy-rehabilitation",
    title: "Cerebral Palsy Rehabilitation",
    description: "Individual movement support developed around ability, participation and family goals.",
    image: "/cerebral-palsy-rehabilitation-v2.png",
    imageAlt: "Paediatric physiotherapist supporting standing and balance practice",
    overview: [
      "Cerebral palsy affects each person differently. Physiotherapy may support movement, strength, range, positioning, mobility and participation, but care is often most effective when coordinated with the person's medical, occupational therapy and wider support team.",
      "We review age, diagnosis, current equipment, communication needs and existing clinical recommendations before accepting an appointment. Specialist referral is recommended whenever needs exceed the clinic's expertise or facilities.",
    ],
    commonSigns: ["Differences in movement or muscle tone", "Reduced balance or coordination", "Muscle weakness or limited range", "Difficulty with transfers or walking", "Changing mobility needs over time"],
    goals: ["Support meaningful movement and participation", "Maintain strength and available range", "Practise mobility and daily tasks", "Give families realistic activity guidance"],
    plan: [
      { title: "Understand the person", text: "We discuss abilities, challenges, equipment and existing care recommendations." },
      { title: "Set shared goals", text: "Priorities are agreed with the patient and family or caregiver." },
      { title: "Practise purposefully", text: "Activities focus on useful movement at an appropriate level." },
      { title: "Review and coordinate", text: "Progress is monitored and wider-team input encouraged where needed." },
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
