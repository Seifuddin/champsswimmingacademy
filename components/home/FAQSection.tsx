
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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#087EAB]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
              Here to Help
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#082F49] sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-[#087EAB]">Questions.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14">

          {/* Introduction */}
          <div className="lg:sticky lg:top-24">
            <p className="max-w-md text-sm leading-7 text-[#647B89]">
              Starting something new comes with questions. We've put
              together helpful answers to guide you through our swimming
              programmes and help you take the next step.
            </p>

            <div className="mt-5 border-t border-[#E6EFF2] pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FB] text-[#087EAB]">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#082F49]">
                    Still have questions?
                  </p>
                  <p className="mt-0.5 text-xs text-[#81939D]">
                    Our team is happy to help.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
              >
                Get in Touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* FAQ accordion */}
          <div>
            <div className="mb-3 flex items-center justify-between border-b border-[#E6EFF2] pb-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#647B89]">
                Everything You Need to Know
              </p>

              <span className="text-xs font-semibold tabular-nums text-[#087EAB]">
                08 Questions
              </span>
            </div>

            <div className="divide-ydivide-[#EAF0F2]">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div key={faq.question} className="group border-b border-blue-200 px-1 rounded-md">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setActiveIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center gap-3 py-3.5 text-left sm:py-4"
                    >
                      <span
                        className={`flex-1 text-[13px] font-bold leading-6 transition-colors sm:text-sm ${
                          isOpen
                            ? "text-[#087EAB]"
                            : "text-[#082F49] group-hover:text-[#087EAB]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#087EAB] text-white"
                            : "bg-[#EAF7FB] text-[#087EAB]"
                        }`}
                      >
                        <ChevronDown size={15} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="max-w-2xl pb-4 pr-8">
                        <p className="text-[13px] leading-6 text-[#647B89]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom link */}
            <div className="mt-3 flex items-center justify-between border-t border-[#E6EFF2] pt-4">
              <p className="text-[11px] text-[#81939D]">
                Your swimming journey starts with one step.
              </p>

              <Link
                href="/programmes"
                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#087EAB] transition-colors hover:text-[#082F49]"
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
