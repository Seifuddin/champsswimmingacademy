
export type Programme = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  introduction: string;
  audience: string;
  outcomes: string[];
  learningAreas: {
    title: string;
    description: string;
  }[];
  approach: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const programmes: Programme[] = [
  {
    slug: "beginner-swimming",
    number: "01",
    title: "Beginner Swimming",
    shortTitle: "Start with Confidence",
    category: "Foundational Swimming",
    description:
      "Build water confidence and develop the essential foundations of swimming through patient, structured instruction.",
    image: "/images/programmes/beginner.jpg",
    alt: "Beginner learning swimming with an instructor",
    introduction:
      "Every confident swimmer starts somewhere. Our Beginner Swimming Programme is designed to introduce learners to the water and help them gradually develop the foundational skills needed for swimming. Whether you are entering a pool for the first time or simply want to become more comfortable in the water, the learning process starts with understanding your ability and building confidence at a suitable pace.",
    audience:
      "Ideal for first-time swimmers, learners with limited swimming experience and anyone who wants to establish stronger foundations before progressing to the next level.",
    outcomes: [
      "Develop familiarity and confidence in the swimming environment.",
      "Understand basic pool rules and responsible water behaviour.",
      "Practise breathing control and basic water movement.",
      "Develop floating skills and body-position awareness.",
      "Begin learning coordinated swimming movements.",
      "Build a foundation for progression to intermediate swimming.",
    ],
    learningAreas: [
      {
        title: "Water confidence",
        description:
          "Become more familiar with the water environment through appropriate, guided activities.",
      },
      {
        title: "Breathing and control",
        description:
          "Develop an understanding of controlled breathing and how it relates to swimming movements.",
      },
      {
        title: "Floating and balance",
        description:
          "Explore basic floating skills, relaxation and body positioning with suitable instructor support.",
      },
      {
        title: "Foundational movement",
        description:
          "Begin developing basic arm and leg movements and learn how they work together.",
      },
    ],
    approach:
      "Learning begins with the swimmer's current level of comfort and experience. Skills are introduced progressively, with guidance and feedback from qualified swimming instructors. Learners are given opportunities to practise foundational movements before progressing to more demanding activities.",
    faqs: [
      {
        question: "Do I need previous swimming experience?",
        answer:
          "No. This programme is designed for learners who are new to swimming or have limited experience.",
      },
      {
        question: "Can someone who is afraid of water join?",
        answer:
          "Yes. Let the academy and instructor know about your concerns so the learning approach can take your comfort and readiness into account.",
      },
      {
        question: "Will I learn to swim independently?",
        answer:
          "The programme works towards developing foundational swimming ability. Progress depends on individual learning needs, practice and demonstrated skills.",
      },
      {
        question: "Can beginners progress to another level?",
        answer:
          "Yes. Learners can work towards intermediate swimming when their foundational skills and readiness support progression.",
      },
    ],
  },
  {
    slug: "childrens-swimming",
    number: "02",
    title: "Children's Swimming",
    shortTitle: "Young Swimmers, Strong Foundations",
    category: "Swimming for Children",
    description:
      "Supportive swimming lessons that help children develop water confidence, coordination and essential aquatic skills.",
    image: "/images/programmes/children.jpeg",
    alt: "Children enjoying a swimming lesson",
    introduction:
      "Swimming can be a valuable learning experience for children. It introduces them to an important life skill while giving them opportunities to develop confidence, coordination and an understanding of responsible behaviour around water. Our children's swimming programme focuses on progressive learning in a supportive environment, with activities suited to each learner's experience and ability.",
    audience:
      "For children who are beginning their swimming journey, developing basic aquatic skills or building on previous swimming experience. Parents and guardians should share relevant learning needs and concerns with the academy before lessons begin.",
    outcomes: [
      "Become more comfortable and confident in a swimming environment.",
      "Understand basic pool rules and water safety expectations.",
      "Develop age- and ability-appropriate breathing and floating skills.",
      "Practise coordination and basic swimming movements.",
      "Build confidence through guided learning and repetition.",
      "Work towards greater swimming independence as skills develop.",
    ],
    learningAreas: [
      {
        title: "Water familiarity",
        description:
          "Introduce children to the pool environment and help them become familiar with basic swimming activities.",
      },
      {
        title: "Basic swimming skills",
        description:
          "Develop foundational movements such as floating, kicking and introductory stroke activities when appropriate.",
      },
      {
        title: "Coordination and confidence",
        description:
          "Encourage children to understand instructions, practise movements and recognise their own progress.",
      },
      {
        title: "Water safety awareness",
        description:
          "Reinforce pool rules, responsible behaviour and the importance of adult supervision.",
      },
    ],
    approach:
      "Children learn in different ways and at different speeds. Instructors guide activities according to the child's experience, comfort and developing ability. Parents and guardians are encouraged to communicate with the academy and reinforce responsible water behaviour outside lessons. Swimming lessons do not replace active adult supervision around water.",
    faqs: [
      {
        question: "Can a child with no swimming experience join?",
        answer:
          "Yes. Beginners can start with foundational activities suited to their comfort and learning needs.",
      },
      {
        question: "What if my child is nervous around water?",
        answer:
          "Inform the instructor before lessons. A gradual, encouraging approach can help the child become more familiar with the pool environment.",
      },
      {
        question: "Do parents need to supervise children?",
        answer:
          "Yes. Parents and guardians remain responsible for appropriate supervision around water, including outside lesson times. Follow the swimming facility's supervision arrangements.",
      },
      {
        question: "Will children learn at the same pace?",
        answer:
          "Not necessarily. Progress varies with experience, confidence, practice and individual learning needs.",
      },
    ],
  },
  {
    slug: "adult-swimming",
    number: "03",
    title: "Adult Swimming",
    shortTitle: "It's Never Too Late to Learn",
    category: "Swimming for Adults",
    description:
      "Patient, supportive instruction for adults learning to swim, overcoming uncertainty or developing existing skills.",
    image: "/images/programmes/adult.avif",
    alt: "Adult practising swimming in a pool",
    introduction:
      "Learning to swim is not limited to childhood. Adults can begin learning at any stage, whether their goal is to become more comfortable in water, develop practical swimming skills or improve their existing technique. Our Adult Swimming Programme provides an opportunity to learn in a structured environment where instruction can be adapted to individual experience and ability.",
    audience:
      "Suitable for adults who have never learned to swim, those who are uncomfortable in water and swimmers who want to revisit or strengthen their foundations.",
    outcomes: [
      "Build greater comfort and confidence in water.",
      "Develop basic breathing and floating skills.",
      "Understand body positioning and controlled movement.",
      "Practise foundational swimming techniques.",
      "Identify personal areas for improvement.",
      "Work towards more independent swimming ability.",
    ],
    learningAreas: [
      {
        title: "Learning at your pace",
        description:
          "Begin with your existing experience and work towards achievable swimming goals.",
      },
      {
        title: "Water confidence",
        description:
          "Develop familiarity with the swimming environment and address areas of uncertainty through guided activities.",
      },
      {
        title: "Practical swimming skills",
        description:
          "Work on breathing, floating, movement and foundational swimming techniques.",
      },
      {
        title: "Continued development",
        description:
          "Build on established skills and identify appropriate next steps in your swimming journey.",
      },
    ],
    approach:
      "Adult learners have different reasons for starting swimming lessons. We encourage learners to communicate their goals, previous experiences and concerns so that instruction can be appropriate to their needs. Progress is developed through guided practice, feedback and consistency rather than unnecessary pressure.",
    faqs: [
      {
        question: "Am I too old to learn swimming?",
        answer:
          "No. Adults can develop swimming skills at different stages of life. Lessons should be appropriate to individual ability and needs.",
      },
      {
        question: "Can I join if I am afraid of water?",
        answer:
          "You can discuss your concerns with the academy before starting. The instructor can consider your comfort level when introducing activities.",
      },
      {
        question: "Can experienced adults also join?",
        answer:
          "Yes. Adults with previous swimming experience can discuss their goals and areas they would like to improve.",
      },
      {
        question: "Do I need to be physically fit before starting?",
        answer:
          "You do not need to be an experienced athlete to begin. Share any relevant physical limitations or concerns with the academy before participating.",
      },
    ],
  },
  {
    slug: "technique-improvement",
    number: "04",
    title: "Technique Improvement",
    shortTitle: "Refine Every Movement",
    category: "Swimming Development",
    description:
      "Improve swimming efficiency, coordination and control through focused technique development and constructive coaching.",
    image: "/images/programmes/butterfly.avif",
    alt: "Swimmer practising butterfly swimming technique",
    introduction:
      "Developing swimming ability involves more than simply covering longer distances. Technique plays an important role in how swimmers coordinate movement, maintain body position and control their breathing. Our Technique Improvement Programme is designed for swimmers who already have foundational skills and want to develop more consistent and controlled swimming movements.",
    audience:
      "For intermediate and more experienced swimmers who want to refine existing skills, improve coordination or work on particular aspects of their swimming technique.",
    outcomes: [
      "Develop greater awareness of swimming technique.",
      "Improve body position and movement coordination.",
      "Practise more controlled breathing patterns.",
      "Refine arm and leg movement.",
      "Identify and work on technique weaknesses.",
      "Build consistency across swimming practice.",
    ],
    learningAreas: [
      {
        title: "Body position and balance",
        description:
          "Understand how alignment and balance influence movement through water.",
      },
      {
        title: "Stroke development",
        description:
          "Work on appropriate aspects of freestyle, backstroke, breaststroke and butterfly according to the swimmer's current ability.",
      },
      {
        title: "Breathing and coordination",
        description:
          "Develop better timing between breathing, body position and swimming movements.",
      },
      {
        title: "Technique feedback",
        description:
          "Use instructor observations and practical feedback to identify specific areas for improvement.",
      },
    ],
    approach:
      "The programme begins with an understanding of the swimmer's current ability and development goals. Instructors can focus on selected technical areas and introduce appropriate exercises to support improvement. The emphasis is on controlled movement and sound technique rather than speed alone.",
    faqs: [
      {
        question: "Do I need to know how to swim before joining?",
        answer:
          "Yes. This programme is intended for learners who already have foundational swimming ability. Beginners should consider starting with the beginner or appropriate intermediate programme.",
      },
      {
        question: "Will I learn different swimming strokes?",
        answer:
          "The programme can cover aspects of recognised swimming strokes depending on your existing ability and learning objectives.",
      },
      {
        question: "Can I focus on one particular weakness?",
        answer:
          "You can discuss your goals with the instructor so that suitable areas for improvement can be identified.",
      },
      {
        question: "Is this programme suitable for competitive training?",
        answer:
          "The programme focuses on technique development. Competitive preparation and performance coaching should be discussed separately with the academy.",
      },
    ],
  },
  {
    slug: "private-swimming-lessons",
    number: "05",
    title: "Private Swimming Lessons",
    shortTitle: "Individual Attention. Focused Learning.",
    category: "Personalised Coaching",
    description:
      "One-on-one swimming instruction tailored to your individual ability, goals and learning pace.",
    image: "/images/programmes/private.webp",
    alt: "Swimming instructor providing individual coaching",
    introduction:
      "Some learners prefer a more individual approach to swimming instruction. Private Swimming Lessons provide one-on-one coaching, allowing the instructor to focus on the learner's current ability, specific goals and areas that require attention. Whether you are starting from the beginning or refining existing skills, individual instruction can offer a focused learning experience.",
    audience:
      "For children and adults who prefer individual instruction, have specific learning objectives or would like focused attention while developing their swimming skills.",
    outcomes: [
      "Receive individual attention during instruction.",
      "Work towards personal swimming goals.",
      "Focus on specific skills and areas for improvement.",
      "Receive feedback based on individual progress.",
      "Develop confidence through guided practice.",
      "Follow a learning approach suited to your ability.",
    ],
    learningAreas: [
      {
        title: "Individual skill assessment",
        description:
          "Discuss your swimming experience and identify areas that may need attention.",
      },
      {
        title: "Personal learning goals",
        description:
          "Identify suitable objectives based on your current level and intended progress.",
      },
      {
        title: "Focused instruction",
        description:
          "Work directly with an instructor on relevant swimming skills and technique.",
      },
      {
        title: "Progress and feedback",
        description:
          "Review developing skills and identify appropriate areas for continued practice.",
      },
    ],
    approach:
      "Private lessons are structured around the individual learner. The academy can discuss your preferred learning objectives and availability before confirming arrangements. Lesson scheduling, instructor availability and facility suitability should be confirmed directly with the academy.",
    faqs: [
      {
        question: "Are private lessons one-on-one?",
        answer:
          "This programme is intended for individual one-on-one instruction. Confirm the specific arrangement when enquiring.",
      },
      {
        question: "Can beginners book private lessons?",
        answer:
          "Yes. Beginners can discuss their needs and start with suitable foundational activities.",
      },
      {
        question: "Can I choose what I want to improve?",
        answer:
          "You can share your goals with the academy. The instructor can help identify suitable learning priorities.",
      },
      {
        question: "Are private lesson times fixed?",
        answer:
          "Scheduling depends on instructor availability and facility arrangements. Contact the academy to discuss available options.",
      },
    ],
  },
  {
    slug: "residential-swimming-lessons",
    number: "06",
    title: "Residential Swimming Lessons",
    shortTitle: "Swimming Instruction at Suitable Residential Pools",
    category: "Residential Coaching",
    description:
      "Professional swimming instruction at suitable residential swimming facilities, subject to location and facility assessment.",
    image: "/images/programmes/residential.jpeg",
    alt: "Residential swimming pool",
    introduction:
      "Residential Swimming Lessons provide an option for learners who would like to explore swimming instruction at a suitable residential pool. This programme is subject to location, pool conditions, access arrangements and the suitability of the facility for the intended lessons. The academy can discuss the requirements and assess whether the proposed location is appropriate before confirming an arrangement.",
    audience:
      "For individuals, families or residential groups interested in swimming instruction at a residential facility, subject to the pool and location meeting the academy's requirements.",
    outcomes: [
      "Discuss swimming instruction for a residential setting.",
      "Identify suitable learning objectives for participants.",
      "Explore foundational or developing swimming skills.",
      "Receive instruction from qualified swimming instructors.",
      "Understand the facility and safety requirements before lessons begin.",
      "Arrange a suitable learning approach following assessment.",
    ],
    learningAreas: [
      {
        title: "Facility suitability",
        description:
          "Review the pool environment, access arrangements and other relevant conditions before lessons are agreed.",
      },
      {
        title: "Participant requirements",
        description:
          "Discuss the number of learners, their experience and the type of instruction being requested.",
      },
      {
        title: "Swimming instruction",
        description:
          "Explore suitable swimming activities based on the participants' ability and the facility assessment.",
      },
      {
        title: "Scheduling arrangements",
        description:
          "Discuss practical scheduling and instructor availability with the academy.",
      },
    ],
    approach:
      "Residential enquiries require an initial discussion about the proposed location and swimming facility. The academy will need to consider whether the pool is appropriate for instruction, along with access, safety and scheduling arrangements. Lessons should only proceed once suitability and the necessary arrangements have been confirmed.",
    faqs: [
      {
        question: "Can instructors come to our residential swimming pool?",
        answer:
          "Residential instruction may be considered subject to location, facility suitability and instructor availability.",
      },
      {
        question: "Can an apartment or estate swimming pool be used?",
        answer:
          "It may be possible, but the facility must first be assessed for suitability and appropriate access arrangements.",
      },
      {
        question: "Can several family members participate?",
        answer:
          "You can discuss the number of participants and their different ability levels when making an enquiry. The appropriate arrangement will depend on the facility and instruction requirements.",
      },
      {
        question: "How do I arrange residential lessons?",
        answer:
          "Contact the academy with your location and details of the proposed swimming facility so that the requirements can be discussed.",
      },
    ],
  },
  {
    slug: "water-safety-survival",
    number: "07",
    title: "Water Safety & Survival",
    shortTitle: "Understand Water. Respect Water.",
    category: "Water Safety Education",
    description:
      "Develop water awareness, responsible swimming habits and foundational skills through appropriate supervised instruction.",
    image: "/images/programmes/safety.jpg",
    alt: "Swimmer practising water safety skills",
    introduction:
      "Being around water requires awareness, sound judgement and responsible behaviour. Swimming skills are important, but they should be accompanied by an understanding of water-related risks and safe practices. Our Water Safety & Survival Programme focuses on foundational water awareness, controlled movement and appropriate supervised skills to help learners understand how to behave responsibly in aquatic environments.",
    audience:
      "For learners who want to strengthen their understanding of water safety and develop appropriate foundational skills. The activities covered should reflect the learner's current swimming ability.",
    outcomes: [
      "Understand basic swimming pool safety rules.",
      "Develop awareness of common aquatic hazards.",
      "Practise appropriate floating and controlled movement skills.",
      "Understand the importance of supervision.",
      "Recognise when to alert a responsible adult or trained responder.",
      "Develop more responsible behaviour around water.",
    ],
    learningAreas: [
      {
        title: "Water awareness",
        description:
          "Understand the importance of recognising the swimming environment, following instructions and respecting pool rules.",
      },
      {
        title: "Foundational water skills",
        description:
          "Practise suitable floating, body control and movement activities under appropriate supervision.",
      },
      {
        title: "Safe decision-making",
        description:
          "Understand why learners should recognise their limits and avoid unsafe activities around water.",
      },
      {
        title: "Emergency awareness",
        description:
          "Learn the importance of alerting trained instructors, lifeguards or emergency responders when someone needs help.",
      },
    ],
    approach:
      "The programme combines water safety awareness with practical activities appropriate to the learner's existing ability. Instruction focuses on responsible behaviour, safe participation and understanding personal limits. This programme should not be confused with professional lifeguard, rescue or emergency-response certification.",
    faqs: [
      {
        question: "Is this programme suitable for beginners?",
        answer:
          "Some water safety awareness can be introduced to beginners. Practical activities must be adapted to the learner's ability and comfort level.",
      },
      {
        question: "Will I become a certified lifeguard?",
        answer:
          "No. This programme is not presented as a lifeguard certification or professional rescue qualification.",
      },
      {
        question: "Does knowing water safety mean I can swim anywhere?",
        answer:
          "No. Water conditions vary, and even experienced swimmers should respect their limits, follow local rules and avoid unsafe environments.",
      },
      {
        question: "Why is supervision still important?",
        answer:
          "Swimming ability and water awareness do not eliminate every risk. Appropriate supervision remains important, particularly for children and inexperienced swimmers.",
      },
    ],
  },
];

export function getProgrammeBySlug(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
