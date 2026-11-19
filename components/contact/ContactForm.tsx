
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact-form" className="bg-[#F3F8FA] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[0.78fr_1.22fr]">

          {/* Visual panel */}
          <div className="relative min-h-[260px] overflow-hidden bg-[#082F49] sm:min-h-[300px] lg:min-h-full">
            <Image
              src="/images/swimmers.jpg"
              alt="Swimming training at Champs Swimming Academy"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/95 via-[#082F49]/40 to-[#082F49]/10" />

            <div className="absolute bottom-0 left-0 max-w-lg p-5 sm:p-7 lg:p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#22B8C7] text-white">
                <MessageCircle size={19} />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#22B8C7]">
                Let's Get You Started
              </p>

              <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Your Swimming Journey Starts Here.
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                Whether you're learning from scratch or refining your skills,
                we have a programme to help you move forward.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 border-t border-white/20 pt-3 text-xs font-medium text-white">
                <CheckCircle2 size={15} className="text-[#22B8C7]" />
                Programmes for different ages and abilities
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="p-5 sm:p-7 lg:p-8 xl:p-9">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                  Contact Champs
                </p>

                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#082F49] sm:text-3xl">
                  Make an Enquiry
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Tell us what you're looking for and we'll guide you.
                </p>
              </div>

              <div className="hidden shrink-0 border-l-2 border-[#22B8C7] pl-3 sm:block">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Get in touch
                </span>
                <p className="mt-1 text-xs font-semibold text-[#082F49]">
                  We're here to help
                </p>
              </div>
            </div>

            <form
              action="mailto:your-email@example.com"
              method="POST"
              encType="text/plain"
              className="space-y-3.5"
            >
              {/* Name & Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-xs font-semibold text-[#172B3A]"
                  >
                    Full Name <span className="text-[#087EAB]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-sm border border-slate-200 bg-[#F8FAFB] px-3.5 py-2.5 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-semibold text-[#172B3A]"
                  >
                    Email Address <span className="text-[#087EAB]">*</span>
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full rounded-sm border border-slate-200 bg-[#F8FAFB] px-3.5 py-2.5 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone & Programme */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-semibold text-[#172B3A]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="Phone"
                    type="tel"
                    placeholder="+254..."
                    className="w-full rounded-sm border border-slate-200 bg-[#F8FAFB] px-3.5 py-2.5 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="programme"
                    className="mb-1.5 block text-xs font-semibold text-[#172B3A]"
                  >
                    Programme of Interest <span className="text-[#087EAB]">*</span>
                  </label>
                  <select
                    id="programme"
                    name="Programme"
                    defaultValue=""
                    required
                    className="w-full rounded-sm border border-slate-200 bg-[#F8FAFB] px-3.5 py-2.5 text-sm text-slate-600 outline-none transition focus:border-[#087EAB] focus:bg-white"
                  >
                    <option value="" disabled>
                      Choose a programme
                    </option>
                    <option>Beginner Swimming</option>
                    <option>Children's Swimming</option>
                    <option>Adult Swimming</option>
                    <option>Intermediate Swimming</option>
                    <option>Advanced Swimming</option>
                    <option>Technique Improvement</option>
                    <option>Private Swimming Lessons</option>
                    <option>Residential Swimming Lessons</option>
                    <option>Water Safety & Survival</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-semibold text-[#172B3A]"
                >
                  Subject <span className="text-[#087EAB]">*</span>
                </label>
                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  placeholder="Brief subject of your enquiry"
                  required
                  className="w-full rounded-sm border border-slate-200 bg-[#F8FAFB] px-3.5 py-2.5 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold text-[#172B3A]"
                >
                  Your Message <span className="text-[#087EAB]">*</span>
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={3}
                  placeholder="Tell us a little more about what you need..."
                  required
                  className="w-full resize-y rounded-sm border border-slate-200 bg-[#F8FAFB] px-3.5 py-2.5 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:bg-white"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#087EAB] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#06698F]"
                >
                  Send Your Enquiry
                  <ArrowUpRight size={17} />
                </button>

                <p className="text-[11px] leading-5 text-slate-500">
                  Your information is only used to respond to your enquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
