
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import type { BlogArticle } from "@/lib/blog";

type ArticleSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
  tip?: string;
};

type ArticleDetails = {
  introduction: string;
  sections: ArticleSection[];
  faqs: {
    question: string;
    answer: string;
  }[];
  conclusion: string;
};

const articleContent: Record<string, ArticleDetails> = {
  "learning-to-swim-for-beginners": {
    introduction:
      "Learning to swim is an important life skill that can open the door to confidence, recreation, fitness and greater awareness around water. For a beginner, however, stepping into a swimming pool can feel unfamiliar. The sounds, movement of the water, breathing patterns and coordination required may seem challenging at first. The good news is that swimming is a skill that can be developed gradually through proper instruction, patience and consistent practice.",
    sections: [
      {
        title: "Start by becoming comfortable in the water",
        paragraphs: [
          "Before attempting complicated swimming movements, beginners should first become familiar with the water environment. This involves learning how the water feels, understanding the pool area and becoming comfortable with basic movements while supervised by a qualified instructor.",
          "Water confidence develops differently for different people. Some learners become comfortable quickly, while others need more time. There is no need to rush. A supportive learning environment allows beginners to progress without feeling pressured to perform skills they are not ready for.",
        ],
        points: [
          "Enter and leave the pool safely with instructor guidance.",
          "Practise standing, walking and moving comfortably in suitable shallow water.",
          "Learn to follow instructions and understand basic pool rules.",
          "Become familiar with the instructor and the learning environment.",
        ],
        tip: "Confidence is built through positive experiences. Allow yourself time to become comfortable before moving to more demanding skills.",
      },
      {
        title: "Learn breathing and water control",
        paragraphs: [
          "Breathing is one of the most important foundations of swimming. Unlike ordinary movement on land, swimming requires learners to coordinate breathing with their movements. Beginners may initially find it difficult to remain relaxed while their face is near or in the water.",
          "Under qualified supervision, learners can gradually practise controlled breathing and become familiar with the relationship between breathing, body position and movement. The aim is to develop calm, controlled habits rather than rushing through exercises.",
        ],
        points: [
          "Learn to breathe calmly and avoid unnecessary tension.",
          "Practise instructor-guided breathing exercises appropriate to your level.",
          "Understand when to breathe during basic swimming movements.",
          "Avoid holding your breath for extended periods or attempting unsupervised breath-holding challenges.",
        ],
      },
      {
        title: "Develop floating and body position",
        paragraphs: [
          "Floating introduces beginners to the way the body behaves in water. It helps learners understand balance, body position and relaxation. With proper support and guidance, beginners can gradually develop the confidence needed to maintain suitable positions in the water.",
          "Good body position also becomes important when learners start practising movement through the pool. An instructor can help identify unnecessary tension, incorrect positioning and habits that may make swimming more difficult.",
        ],
        points: [
          "Learn suitable floating exercises under direct supervision.",
          "Practise maintaining a relaxed and balanced body position.",
          "Develop awareness of how body position affects movement.",
          "Progress towards independent skills only when the instructor considers it appropriate.",
        ],
      },
      {
        title: "Build basic movement and coordination",
        paragraphs: [
          "Swimming involves coordinating different parts of the body. Beginners gradually learn how arm movements, leg movements, breathing and body position work together. These skills should be introduced progressively rather than all at once.",
          "Early lessons often focus on simple movements that help learners understand direction, balance and control. As confidence improves, these foundations can support the development of recognised swimming techniques.",
        ],
        points: [
          "Practise simple leg movements with appropriate instructor support.",
          "Learn basic arm movements and how they contribute to forward movement.",
          "Develop coordination between breathing and movement.",
          "Focus on controlled technique instead of speed.",
        ],
        tip: "Good technique is more valuable than rushing to swim longer distances. Strong foundations make future progress easier.",
      },
      {
        title: "Make consistent practice part of your learning",
        paragraphs: [
          "Swimming is a practical skill, so regular lessons and appropriate practice are important. A learner who attends consistently has more opportunities to repeat movements, receive feedback and build familiarity with the water.",
          "Progress is not always perfectly linear. Some skills may feel easy one day and challenging the next. This is a normal part of learning. Instructors can help identify areas that need additional attention and adjust activities to suit each learner.",
        ],
        points: [
          "Attend lessons consistently where possible.",
          "Listen carefully to feedback from your instructor.",
          "Ask questions whenever an instruction is unclear.",
          "Celebrate improvements, including small achievements.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can adults learn how to swim?",
        answer:
          "Yes. Adults can learn swimming skills at different stages of life. Lessons should be adapted to the learner's comfort, experience and ability.",
      },
      {
        question: "How long does it take to learn swimming?",
        answer:
          "There is no fixed learning period. Progress depends on consistency, confidence, previous experience, individual learning needs and the skills being developed.",
      },
      {
        question: "Do beginners need previous swimming experience?",
        answer:
          "No. Beginner lessons are designed to introduce foundational skills gradually. Learners should communicate their experience and comfort level to their instructor.",
      },
      {
        question: "Should beginners practise alone?",
        answer:
          "Beginners should learn and practise under appropriate supervision. Never swim alone or attempt unfamiliar skills without qualified guidance.",
      },
    ],
    conclusion:
      "Learning to swim is a journey built on patience, practice and the right guidance. By developing water confidence, breathing control, floating, movement and coordination step by step, beginners can establish a foundation for continued progress. At Champs Swimming Academy, our programmes are designed around progressive learning, helping swimmers work towards the next stage of their development.",
  },

  "why-water-safety-matters": {
    introduction:
      "Water can provide opportunities for learning, recreation and physical activity, but it also requires awareness and responsible behaviour. Knowing how to swim is valuable, yet swimming ability alone does not eliminate every risk associated with water. Water safety involves understanding the environment, recognising potential hazards, following instructions and making responsible decisions around swimming pools and other aquatic settings.",
    sections: [
      {
        title: "Swimming ability and water safety go together",
        paragraphs: [
          "Swimming lessons help learners develop practical abilities, but water safety must remain part of the learning process. A person may be comfortable in a pool and still need to understand the importance of supervision, safe entry and exit, pool rules and recognising situations that require assistance.",
          "Water safety is not something that should be introduced only to beginners. Swimmers at every level benefit from refreshing their knowledge and maintaining responsible habits.",
        ],
        points: [
          "Understand the pool rules before entering the water.",
          "Follow instructions from qualified instructors and facility staff.",
          "Use designated entry and exit points.",
          "Avoid pushing, rough play or distracting other swimmers.",
        ],
      },
      {
        title: "Understand the importance of supervision",
        paragraphs: [
          "Appropriate supervision is an essential part of safe swimming. Children and inexperienced swimmers should not be left to manage water activities independently. A qualified instructor provides guidance during lessons, while parents and guardians should remain attentive to their responsibilities outside formal instruction.",
          "Supervision should be active and appropriate to the swimmer's age, experience and surroundings. Having other people nearby does not automatically mean a learner is being adequately supervised.",
        ],
        tip: "Never assume that swimming ability makes someone completely safe in water. Supervision and responsible behaviour remain important.",
      },
      {
        title: "Recognise common poolside hazards",
        paragraphs: [
          "A swimming pool is an environment with its own rules and potential hazards. Wet surfaces can become slippery, crowded areas can create distractions and inappropriate behaviour can put swimmers at risk.",
          "Learners should be taught to observe their surroundings and avoid activities that interfere with the safety of others. Poolside awareness should become a regular habit rather than something remembered only when a problem occurs.",
        ],
        points: [
          "Walk rather than run around the pool.",
          "Avoid diving in areas where it is not permitted.",
          "Keep electrical devices and unsuitable equipment away from wet areas.",
          "Never enter restricted areas or use equipment without permission.",
          "Report unsafe conditions to the responsible facility staff.",
        ],
      },
      {
        title: "Learn how to respond when someone needs help",
        paragraphs: [
          "Recognising an emergency and responding responsibly are important aspects of water safety. Learners should know how to alert a qualified instructor, lifeguard or other responsible person when someone appears to be in difficulty.",
          "Untrained people should not put themselves in danger by attempting an unsafe rescue. Emergency response and rescue techniques require appropriate training. In a real emergency, alert the facility's emergency personnel and contact local emergency services.",
        ],
        points: [
          "Get the attention of an instructor or lifeguard immediately.",
          "Clearly communicate the location of the person needing assistance.",
          "Follow the facility's emergency procedures.",
          "Do not enter the water to attempt a rescue unless properly trained and equipped.",
        ],
      },
      {
        title: "Make safety part of every swimming lesson",
        paragraphs: [
          "Water safety should be reinforced throughout a swimmer's development. Beginners need to understand basic rules, while more experienced swimmers should continue practising responsible decision-making and respecting the limits of their abilities.",
          "Parents also have an important role in reinforcing safe behaviour. Conversations about pool rules, supervision and respecting instructors can help children understand that safety is a shared responsibility.",
        ],
        tip: "The safest swimming habits are the ones learners practise consistently, not simply the ones they remember during a lesson.",
      },
    ],
    faqs: [
      {
        question: "Does knowing how to swim mean someone is completely safe?",
        answer:
          "No. Swimming ability is valuable, but it does not remove all water-related risks. Conditions, fatigue, supervision and the surrounding environment still matter.",
      },
      {
        question: "Why should children be supervised around water?",
        answer:
          "Children may not recognise hazards or respond appropriately in unexpected situations. Active supervision helps reduce risks and ensures assistance is available.",
      },
      {
        question: "Should learners dive into any swimming pool?",
        answer:
          "No. Diving should only take place where it is specifically permitted and under appropriate instruction and supervision.",
      },
      {
        question: "Is water safety only for beginners?",
        answer:
          "No. Swimmers at every ability level should understand and practise responsible water safety habits.",
      },
    ],
    conclusion:
      "Water safety is an essential part of becoming a responsible swimmer. Developing swimming skills should go hand in hand with understanding pool rules, respecting supervision, recognising hazards and knowing when to seek help. At Champs Swimming Academy, safe learning habits should remain part of every stage of swimming development.",
  },

  "building-confidence-in-the-water": {
    introduction:
      "Confidence plays a major role in learning to swim. For some people, entering a pool feels exciting and natural. For others, the experience can bring uncertainty, hesitation or fear. Both experiences are valid. Building confidence requires a supportive environment, suitable instruction and opportunities to become familiar with the water without unnecessary pressure.",
    sections: [
      {
        title: "Understand why water confidence matters",
        paragraphs: [
          "Confidence influences how comfortably a learner participates in swimming activities. When someone feels uncertain, they may struggle to concentrate on instructions or coordinate basic movements. A comfortable learner is often better positioned to focus on technique and gradual improvement.",
          "Confidence does not mean taking unnecessary risks or pretending to have skills that have not yet been developed. It means understanding your current ability, recognising your progress and becoming increasingly comfortable through appropriate learning experiences.",
        ],
      },
      {
        title: "Avoid comparing your progress with other swimmers",
        paragraphs: [
          "Every learner has a different starting point. Age, previous experiences, familiarity with water and individual learning preferences can all influence how someone approaches swimming lessons.",
          "Comparing yourself with a more experienced swimmer can create unnecessary pressure. A better approach is to focus on personal improvement and the specific skills being taught during each lesson.",
        ],
        points: [
          "Set small, achievable learning goals.",
          "Recognise improvements in comfort and control.",
          "Ask your instructor for feedback on your progress.",
          "Allow yourself time to repeat skills before moving forward.",
        ],
        tip: "Measure progress against your previous ability, not someone else's swimming level.",
      },
      {
        title: "Choose an encouraging learning environment",
        paragraphs: [
          "The learning environment can influence a swimmer's experience. Learners benefit from clear instructions, patient coaching and activities that are suitable for their current ability.",
          "A good instructor should be able to explain skills in a way the learner can understand, observe how the learner responds and adjust the activity where necessary. Learners should also feel comfortable asking questions and expressing uncertainty.",
        ],
      },
      {
        title: "Develop confidence through progressive skills",
        paragraphs: [
          "Confidence is strengthened when learners gradually become familiar with new activities. This may begin with understanding the pool environment and progress towards basic water movement, breathing, floating and coordinated swimming techniques.",
          "Introducing too many challenging activities at once can make learning overwhelming. A progressive approach gives learners time to understand each skill before building on it.",
        ],
        points: [
          "Become familiar with the pool and its safety rules.",
          "Practise basic movements with instructor guidance.",
          "Develop comfort with appropriate breathing exercises.",
          "Work on floating and body position when ready.",
          "Progress to more coordinated movements at a suitable pace.",
        ],
      },
      {
        title: "Use consistency to reinforce confidence",
        paragraphs: [
          "Confidence becomes more reliable when learners have regular opportunities to practise. Repeating familiar activities helps reinforce skills and allows instructors to identify improvements or areas that need further attention.",
          "Missing a skill or needing additional practice does not mean a learner is failing. It simply means more time and guidance may be needed. The goal is to build confidence alongside genuine ability.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it normal to feel afraid of water?",
        answer:
          "Yes. Some learners feel uncertain or uncomfortable around water. A patient, supportive learning approach can help them gradually become more familiar with the environment.",
      },
      {
        question: "Can confidence improve with swimming lessons?",
        answer:
          "Yes. Structured lessons, appropriate practice and constructive feedback can help learners become more comfortable as their skills develop.",
      },
      {
        question: "Should an instructor force a learner to enter the water?",
        answer:
          "Learning should be handled sensitively and progressively. A learner's concerns should be taken seriously, and activities should be appropriate to their readiness and safety.",
      },
      {
        question: "How can parents support a nervous swimmer?",
        answer:
          "Parents can offer encouragement, avoid comparisons, celebrate progress and communicate with the instructor about the learner's concerns.",
      },
    ],
    conclusion:
      "Water confidence grows through positive experiences, suitable guidance and consistent practice. By respecting individual learning speeds and celebrating gradual improvements, swimmers can develop a more comfortable and constructive relationship with the water.",
  },

  "benefits-of-learning-to-swim": {
    introduction:
      "Swimming is more than a recreational activity. It offers an opportunity to develop practical skills, engage in physical activity and build confidence in an aquatic environment. Whether someone is learning for personal development, fitness or enjoyment, swimming can become a valuable part of an active lifestyle.",
    sections: [
      {
        title: "Swimming encourages physical activity",
        paragraphs: [
          "Swimming involves coordinated movement of the arms, legs and body. It provides an opportunity to remain physically active while practising skills in water. The level of physical effort depends on the swimmer's technique, pace, duration and ability.",
          "For beginners, the focus should first be on learning correct movements and becoming comfortable in the water. As technique develops, learners may gradually explore more structured swimming activities suited to their abilities.",
        ],
      },
      {
        title: "Develop coordination and movement control",
        paragraphs: [
          "Swimming requires different movements to work together. Learners practise coordinating arm actions, leg movements, body position and breathing. Developing these skills can help improve familiarity with movement and control in the water.",
          "For children, structured swimming lessons also provide an opportunity to practise following instructions, understanding sequences and repeating movements. These are useful elements of a guided learning experience.",
        ],
        points: [
          "Practise coordinated movements under instructor guidance.",
          "Develop awareness of body position.",
          "Learn how breathing relates to swimming technique.",
          "Work on controlled movement rather than unnecessary speed.",
        ],
      },
      {
        title: "Build confidence and independence",
        paragraphs: [
          "Learning a new skill can be a rewarding experience. As swimmers progress from basic activities to more advanced techniques, they have opportunities to recognise their own improvements and become more confident in their abilities.",
          "This confidence should always be grounded in realistic awareness of personal ability. Learners should understand that progress does not mean ignoring safety rules or attempting activities beyond their current level.",
        ],
      },
      {
        title: "Develop discipline and consistency",
        paragraphs: [
          "Swimming lessons involve listening, practising, receiving feedback and repeating skills. These activities encourage learners to approach improvement as an ongoing process rather than expecting immediate results.",
          "Regular attendance and constructive feedback can help swimmers build a routine. Learning to work towards gradual goals is also a useful experience beyond the swimming pool.",
        ],
      },
      {
        title: "Create opportunities for recreation and enjoyment",
        paragraphs: [
          "Swimming can become an enjoyable recreational activity once a person develops suitable skills and understands how to participate responsibly. It can also provide opportunities for shared activities with family and friends in appropriate supervised environments.",
          "The enjoyment of swimming should never replace water safety. Learners should always choose suitable environments, follow facility rules and remain within their demonstrated ability.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is swimming suitable for beginners?",
        answer:
          "Yes. Beginners can start with foundational skills and progress gradually under appropriate instruction.",
      },
      {
        question: "Does swimming help improve fitness?",
        answer:
          "Swimming is a form of physical activity that involves coordinated movement. Its contribution to fitness depends on the individual's activity level, technique and consistency.",
      },
      {
        question: "Can children benefit from swimming lessons?",
        answer:
          "Swimming lessons can help children develop aquatic skills, coordination, confidence and awareness of water safety when taught appropriately.",
      },
      {
        question: "Do I need to be fit before learning to swim?",
        answer:
          "You do not need to be an experienced athlete to begin. Lessons should be suitable for your ability, and you should communicate any relevant limitations to your instructor.",
      },
    ],
    conclusion:
      "Swimming provides a valuable combination of practical learning, physical activity and personal development. Through structured lessons and consistent practice, learners can develop useful skills while enjoying the experience of becoming more capable and confident in water.",
  },

  "helping-children-learn-to-swim": {
    introduction:
      "Parents and guardians play an important role in a child's swimming journey. While qualified instructors guide the technical side of learning, encouragement and positive support outside lessons can help children approach swimming with confidence and enthusiasm. The most helpful approach is one that respects the child's individual pace while keeping safety at the centre of every activity.",
    sections: [
      {
        title: "Talk positively about swimming lessons",
        paragraphs: [
          "Children may approach swimming with excitement, curiosity or uncertainty. The way parents discuss lessons can influence how children feel about the experience. Present swimming as an opportunity to learn rather than a test that must be passed.",
          "Avoid using pressure, threats or comparisons with other children. A supportive conversation can help a learner feel comfortable explaining what they enjoy and which activities they find difficult.",
        ],
        points: [
          "Ask what the child enjoyed during the lesson.",
          "Encourage questions about unfamiliar activities.",
          "Praise effort, listening and gradual improvement.",
          "Avoid making swimming ability a competition.",
        ],
      },
      {
        title: "Understand your child's learning level",
        paragraphs: [
          "Children do not all develop swimming skills at the same pace. A child who is comfortable entering the pool may still need guidance with breathing, floating or coordinated movement. Another child may need additional time to become comfortable with the water environment.",
          "Parents should understand the learning level recommended by the instructor. Progression should be based on demonstrated ability and readiness, not simply age or comparison with other learners.",
        ],
        tip: "Ask the instructor which skills your child is currently developing and what progress would look like at the next stage.",
      },
      {
        title: "Encourage consistency and preparation",
        paragraphs: [
          "Attending lessons consistently gives children opportunities to repeat skills and become familiar with the learning routine. Parents can support this by planning ahead and helping children arrive prepared.",
          "Following the swimming facility's requirements is also important. Appropriate swimwear, towels and other required items should be prepared before the lesson.",
        ],
        points: [
          "Plan lesson attendance in advance.",
          "Prepare the required swimming equipment.",
          "Allow enough time to arrive without rushing.",
          "Follow the facility's changing and hygiene guidelines.",
        ],
      },
      {
        title: "Communicate with the swimming instructor",
        paragraphs: [
          "Instructors can provide useful information about a child's progress, strengths and areas that need additional practice. Parents should feel comfortable asking questions and sharing information that may help the instructor understand the learner.",
          "Communication is especially important if a child is anxious, has missed several lessons or is experiencing difficulty with a particular activity. Parents and instructors can work together to provide appropriate encouragement and support.",
        ],
      },
      {
        title: "Reinforce water safety outside lessons",
        paragraphs: [
          "Swimming lessons are not a substitute for parental supervision. Children should be reminded that pool rules apply even when they have learned some swimming skills. Their abilities should never be assumed to make unsupervised swimming safe.",
          "Parents should maintain active supervision around water, follow facility rules and ensure children understand that they must seek permission and appropriate adult supervision before entering the water.",
        ],
      },
    ],
    faqs: [
      {
        question: "At what age should a child start swimming lessons?",
        answer:
          "Suitable starting ages and lesson formats vary by programme and individual needs. Parents should discuss the available options and supervision arrangements with the academy.",
      },
      {
        question: "What if my child is afraid of swimming?",
        answer:
          "Share the concern with the instructor. A patient approach, appropriate activities and encouragement can help the child become more comfortable over time.",
      },
      {
        question: "Should parents teach children swimming instead of enrolling them in lessons?",
        answer:
          "Parents can encourage water awareness, but structured swimming instruction should be provided by suitably qualified instructors in an appropriate environment.",
      },
      {
        question: "Can children swim unsupervised after learning?",
        answer:
          "No. Learning swimming skills does not remove the need for active supervision and responsible water safety practices.",
      },
    ],
    conclusion:
      "A child's swimming development is supported by more than the time spent in the pool. Encouragement, consistent attendance, communication with instructors and responsible supervision all contribute to a positive learning experience. Parents can make a meaningful difference by helping children enjoy the process while respecting their individual pace.",
  },

  "improving-your-swimming-technique": {
    introduction:
      "Improving swimming technique is not simply about moving faster or swimming longer distances. Good technique involves developing efficient movement, suitable body position, controlled breathing and coordination. Whether you are progressing beyond beginner level or refining skills you have already learned, focused practice and constructive instruction can help you become a more capable swimmer.",
    sections: [
      {
        title: "Focus on body position",
        paragraphs: [
          "Body position influences how comfortably a swimmer moves through water. Unnecessary tension or poor positioning can make swimming feel more difficult. Developing awareness of alignment and balance is therefore an important part of technique improvement.",
          "The appropriate body position depends on the swimming technique being practised. An instructor can observe your movement and provide specific feedback rather than relying on guesswork.",
        ],
        points: [
          "Listen to feedback about your body alignment.",
          "Avoid unnecessary tension during movement.",
          "Practise suitable positioning exercises.",
          "Focus on controlled technique before increasing speed.",
        ],
      },
      {
        title: "Improve breathing coordination",
        paragraphs: [
          "Breathing needs to work with the movement pattern of the swimming technique. Learners who become tense or interrupt their movement unnecessarily may find it harder to maintain a consistent rhythm.",
          "Improving breathing coordination takes practice. Work on the specific breathing pattern taught by your instructor and avoid forcing movements that feel uncomfortable or unsafe.",
        ],
        tip: "Do not turn breathing practice into prolonged breath-holding challenges. Focus on controlled, instructor-guided breathing.",
      },
      {
        title: "Develop controlled arm and leg movements",
        paragraphs: [
          "Arm and leg movements contribute to propulsion, direction and stability. Technique improvement involves understanding how these movements work together rather than using unnecessary force.",
          "A common challenge is trying to move faster before the movement pattern is properly established. Slowing down and focusing on accuracy can help swimmers identify habits that need improvement.",
        ],
        points: [
          "Practise the movement pattern demonstrated by your instructor.",
          "Pay attention to timing and coordination.",
          "Avoid excessive movements that disrupt balance.",
          "Repeat exercises consistently before increasing difficulty.",
        ],
      },
      {
        title: "Learn to use feedback effectively",
        paragraphs: [
          "Swimming takes place in an environment where it can be difficult to observe your own movements. Instructor feedback is therefore especially valuable. A coach may identify a positioning issue, timing problem or movement habit that the swimmer has not noticed.",
          "Instead of trying to correct everything at once, focus on one or two specific improvements during a practice session. This makes feedback easier to understand and apply.",
        ],
      },
      {
        title: "Practise with a clear objective",
        paragraphs: [
          "A structured swimming session is more useful when each activity has a purpose. Rather than simply repeating movements without direction, swimmers should understand which skill they are practising and what they are trying to improve.",
          "Training objectives should match the swimmer's current ability. An instructor can help choose suitable activities, monitor progress and introduce more challenging work when the swimmer is ready.",
        ],
        points: [
          "Choose a specific skill to focus on.",
          "Follow a suitable practice sequence.",
          "Allow time for feedback and correction.",
          "Record improvements and areas requiring attention.",
          "Maintain appropriate rest and hydration.",
        ],
      },
      {
        title: "Avoid common technique mistakes",
        paragraphs: [
          "Technique improvement can be slowed by habits such as rushing, ignoring feedback or trying to copy a more advanced swimmer without understanding the movement. Another common mistake is focusing only on speed while neglecting control and coordination.",
          "It is also important to recognise fatigue. When swimmers become tired, movement quality may change. Practice should remain appropriate to the swimmer's ability, and instructors should be informed when an activity feels uncomfortable.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can beginners work on swimming technique?",
        answer:
          "Yes. Beginners should establish suitable foundational movements early, with exercises appropriate to their learning level.",
      },
      {
        question: "Does swimming faster mean having better technique?",
        answer:
          "Not necessarily. Speed is only one aspect of swimming performance. Control, coordination, body position and consistency also matter.",
      },
      {
        question: "How often should I practise swimming?",
        answer:
          "A suitable practice schedule depends on your ability, goals, availability and instructor guidance. Consistency is generally more useful than irregular, overly demanding sessions.",
      },
      {
        question: "Why is instructor feedback important?",
        answer:
          "An instructor can observe movement patterns, identify areas for improvement and recommend exercises suited to your current level.",
      },
    ],
    conclusion:
      "Better swimming technique develops through focused practice, appropriate instruction and patience. By working on body position, breathing, coordination and movement control, swimmers can build stronger foundations for continued progress. The goal is not simply to do more, but to understand and improve how you swim.",
  },
};

export default function ArticleContent({
  article,
}: {
  article: BlogArticle;
}) {
  const content = articleContent[article.slug];

  if (!content) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-slate-600">
          This article is being prepared. Please check back soon.
        </p>
      </div>
    );
  }

  const contents = [
    ...content.sections.map((section, index) => ({
      title: section.title,
      id: `section-${index + 1}`,
    })),
    { title: "Frequently asked questions", id: "article-faqs" },
    { title: "Final thoughts", id: "article-conclusion" },
  ];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-10">
      <article className="min-w-0">
        <div className="mb-8 border-b border-slate-200 pb-7">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-sky-700">
            <BookOpen size={17} />
            <span>Article overview</span>
          </div>

          <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
            {content.introduction}
          </p>
        </div>

        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <section
              key={section.title}
              id={`section-${index + 1}`}
              className="scroll-mt-24"
            >
              <div className="mb-3 flex items-start gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-xs font-bold text-sky-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="text-xl font-bold leading-snug tracking-tight text-[#102b40] sm:text-2xl">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3 pl-0 sm:pl-10">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-7"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.points && (
                  <ul className="space-y-2.5 py-1">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[14px] leading-6 text-slate-600 sm:text-[15px]"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-sky-600"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.tip && (
                  <div className="my-4 flex gap-3 rounded-xl border border-sky-100 bg-sky-50/80 p-4 sm:p-5">
                    <Lightbulb
                      size={20}
                      className="mt-0.5 shrink-0 text-sky-700"
                    />
                    <div>
                      <p className="mb-1 text-sm font-bold text-[#102b40]">
                        Champs Tip
                      </p>
                      <p className="text-sm leading-6 text-slate-600">
                        {section.tip}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        <section
          id="article-faqs"
          className="mt-10 scroll-mt-24 border-t border-slate-200 pt-8"
        >
          <div className="mb-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              Common questions
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#102b40] sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="py-4">
                <h3 className="mb-2 text-base font-bold text-[#102b40]">
                  {faq.question}
                </h3>
                <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="article-conclusion"
          className="mt-8 scroll-mt-24 rounded-2xl bg-[#102b40] p-5 text-white sm:p-7"
        >
          <div className="mb-3 flex items-center gap-2 text-sky-300">
            <ShieldCheck size={19} />
            <span className="text-xs font-bold uppercase tracking-[0.16em]">
              Final thoughts
            </span>
          </div>

          <p className="text-sm leading-7 text-slate-200 sm:text-[15px]">
            {content.conclusion}
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-sky-300"
          >
            Explore our swimming programmes
            <ArrowRight size={16} />
          </Link>
        </section>
      </article>

      <aside className="lg:sticky lg:top-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            In this article
          </p>

          <nav className="space-y-1.5">
            {contents.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-start gap-2 rounded-lg px-2 py-2 text-sm leading-5 text-slate-600 transition hover:bg-sky-50 hover:text-sky-800"
              >
                <span className="mt-0.5 text-[11px] font-bold text-slate-400 group-hover:text-sky-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.title}</span>
              </a>
            ))}
          </nav>

          <div className="mt-5 border-t border-slate-100 pt-4">
            <p className="text-sm font-bold text-[#102b40]">
              Ready to learn?
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Discover structured swimming programmes at Champs Swimming Academy.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900"
            >
              Get in touch
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
