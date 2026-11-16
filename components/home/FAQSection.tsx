
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Who can enrol at Champs Swimming Academy?",
    answer:
      "Our swimming programmes cater to children and adults at different ages and ability levels. Get in touch with us and we will help you identify a suitable learning option.",
  },
  {
    question: "Can complete beginners join?",
    answer:
      "Absolutely. Our beginner lessons are suitable for people with little or no previous swimming experience. We focus on building water confidence and developing essential swimming skills.",
  },
  {
    question: "Do you offer adult swimming lessons?",
    answer:
      "Yes. Adults can enquire about lessons suited to their current ability, personal goals and learning pace, whether they are starting from scratch or improving existing skills.",
  },
  {
    question: "What swimming programmes do you offer?",
    answer:
      "Our services include beginner swimming, children's swimming, adult swimming, technique improvement, private swimming lessons, swimming lessons at suitable residential facilities and water safety and survival skills.",
  },
  {
    question: "Where do swimming lessons take place?",
    answer:
      "We conduct training at an existing swimming facility in Nairobi. Contact our team for details about the training venue and directions.",
  },
  {
    question: "How much do swimming lessons cost?",
    answer:
      "Fees depend on the programme and lesson arrangements. Contact our team for current prices, available packages and enrolment details.",
  },
  {
    question: "What should I bring to swimming lessons?",
    answer:
      "Learners should generally bring suitable swimwear, a towel and personal swimming essentials. Our team can advise you on any additional requirements for your programme.",
  },
  {
    question: "How do I register?",
    answer:
      "Simply contact our team to enquire about available programmes, schedules and fees. We will guide you through the next steps towards getting started.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="overflow-hidden bg-[#F3F9FB] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#22B8C7]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087EAB]">
            Here to Help
          </span>
        </div>

        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_15px_50px_rgba(8,47,73,0.06)] lg:grid-cols-[0.78fr_1.22fr]">

          {/* Introduction panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#052438] px-6 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#22B8C7]/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#22B8C7]/10" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DE5EC]">
                Champs Swimming Academy
              </p>

              <h2 className="mt-5 max-w-sm text-[2.2rem] font-black leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
                Good Questions.
                <span className="mt-1 block text-[#55D2DE]">
                  Clear Answers.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                Starting something new comes with questions. Here are
                some helpful answers to guide your swimming journey.
              </p>
            </div>

            <div className="relative z-10 mt-8 border-t border-white/15 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#087EAB] text-white">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Need more information?
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    Talk to our team directly.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#22B8C7] px-5 text-[13px] font-bold text-[#052438] transition-colors hover:bg-white"
              >
                Get in Touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <span className="pointer-events-none absolute bottom-7 right-8 hidden text-7xl font-black tracking-tighter text-white/[0.035] lg:block">
              FAQ
            </span>
          </div>

          {/* Accordion panel */}
          <div className="px-5 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
            <div className="mb-5 flex items-center justify-between border-b border-[#E6EFF2] pb-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#647B89]">
                Frequently Asked Questions
              </p>
              <span className="text-xs font-semibold tabular-nums text-[#087EAB]">
                08 Questions
              </span>
            </div>

            <div className="divide-y divide-[#EAF0F2]">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div key={faq.question} className="group">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setActiveIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center gap-4 py-4 text-left sm:py-[18px]"
                    >
                      <span
                        className={`w-6 shrink-0 text-[10px] font-bold tabular-nums transition-colors ${
                          isOpen ? "text-[#087EAB]" : "text-[#A5B7C0]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 text-[13px] font-bold leading-6 transition-colors sm:text-[15px] ${
                          isOpen
                            ? "text-[#087EAB]"
                            : "text-[#082F49] group-hover:text-[#087EAB]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#087EAB] text-white"
                            : "bg-[#EAF7FB] text-[#087EAB]"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 pl-10 pr-2 sm:pb-5 sm:pl-10">
                        <p className="max-w-xl text-[13px] leading-7 text-[#647B89]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#E6EFF2] pt-4">
              <p className="text-[11px] text-[#81939D]">
                Your swimming journey starts with one step.
              </p>
              <Link
                href="/programmes"
                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#087EAB] transition-colors hover:text-[#052438]"
              >
                Our Programmes
                <ArrowDownRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
