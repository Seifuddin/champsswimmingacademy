
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Who can enrol at Champs Swimming Academy?",
    answer:
      "Our programmes cater to learners of different ages and abilities, including babies and toddlers, children and adults. Contact our team to discuss the most suitable programme.",
  },
  {
    question: "Can complete beginners join?",
    answer:
      "Absolutely. Our beginner swimming programme is designed for people starting their swimming journey, including those who have little or no previous swimming experience.",
  },
  {
    question: "Do you offer adult swimming lessons?",
    answer:
      "Yes. Adults can enquire about swimming instruction suitable for their current ability and learning goals.",
  },
  {
    question: "What swimming programmes do you offer?",
    answer:
      "We offer Baby and Toddler Swimming, Beginner Swimming, Intermediate Swimming, Advanced Swimming and Competitive Swimming.",
  },
  {
    question: "Where do swimming lessons take place?",
    answer:
      "Champs Swimming Academy conducts its training at an existing swimming facility in Nairobi. Contact us for the specific venue and directions.",
  },
  {
    question: "How much do swimming lessons cost?",
    answer:
      "Programme fees and available packages can be obtained directly from our team. Contact us for current pricing and enrolment information.",
  },
  {
    question: "What should I bring to swimming lessons?",
    answer:
      "Learners should generally have appropriate swimwear, a towel and personal swimming essentials. Contact the academy for any programme-specific requirements.",
  },
  {
    question: "How do I register?",
    answer:
      "You can contact Champs Swimming Academy through the contact page to enquire about programme availability, schedules, fees and the registration process.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* Heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#22B8C7]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Need to Know
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082F49] sm:text-4xl lg:text-[2.8rem]">
              Questions?
              <span className="block text-[#087EAB]">
                We've Got Answers.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-base leading-8 text-slate-500">
              Everything you need to know before beginning your swimming
              journey with Champs.
            </p>

            <div className="mt-9 rounded-2xl bg-[#EAF7FB] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#087EAB]">
                <MessageCircle size={21} />
              </div>

              <h3 className="mt-5 font-extrabold text-[#082F49]">
                Still have questions?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Our team will be happy to help you find the right programme.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] hover:text-[#082F49]"
              >
                Contact Our Team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Questions */}
          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={faq.question} className="py-1">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span className="text-base font-bold leading-7 text-[#082F49] transition-colors hover:text-[#087EAB]">
                      {faq.question}
                    </span>

                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-[#087EAB] text-white"
                        : "bg-[#EAF7FB] text-[#087EAB]"
                    }`}>
                      {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-10">
                      <p className="max-w-2xl text-sm leading-7 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
