import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-[#F3F8FA] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left image panel */}
          <div className="relative min-h-[300px] overflow-hidden bg-[#172B3A] lg:min-h-[600px]">
            <Image
              src="/images/swimmers.jpg"
              alt="Swimming pool at Champs Swimming Academy"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102432]/95 via-[#102432]/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#22B8C7] text-white">
                <MessageCircle size={22} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#22B8C7]">
                Start Your Journey
              </p>

              <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                Every Great Swimmer Starts Somewhere.
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                Reach out to us today and let us help you find the right
                swimming programme.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                <CheckCircle2 size={17} className="text-[#22B8C7]" />
                Beginner-friendly programmes
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Send Us a Message
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172B3A] sm:text-4xl">
                Make an Enquiry
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Fill in the form below and tell us how we can assist you.
              </p>
            </div>

            <form
              action="mailto:your-email@example.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-[#172B3A]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-sm border border-slate-200 bg-[#F9FBFC] px-4 py-3 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:ring-2 focus:ring-[#087EAB]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#172B3A]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-sm border border-slate-200 bg-[#F9FBFC] px-4 py-3 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:ring-2 focus:ring-[#087EAB]/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#172B3A]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="Phone"
                    type="tel"
                    placeholder="+254..."
                    className="w-full rounded-sm border border-slate-200 bg-[#F9FBFC] px-4 py-3 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:ring-2 focus:ring-[#087EAB]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="programme"
                    className="mb-2 block text-sm font-semibold text-[#172B3A]"
                  >
                    Programme of Interest
                  </label>
                  <select
                    id="programme"
                    name="Programme"
                    defaultValue=""
                    required
                    className="w-full rounded-sm border border-slate-200 bg-[#F9FBFC] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#087EAB] focus:ring-2 focus:ring-[#087EAB]/10"
                  >
                    <option value="" disabled>
                      Select a programme
                    </option>
                    <option>Beginner Swimming</option>
                    <option>Children's Swimming</option>
                    <option>Adult Swimming</option>
                    <option>Intermediate Swimming</option>
                    <option>Advanced Swimming</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#172B3A]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  placeholder="What is your enquiry about?"
                  required
                  className="w-full rounded-sm border border-slate-200 bg-[#F9FBFC] px-4 py-3 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:ring-2 focus:ring-[#087EAB]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#172B3A]"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  placeholder="Tell us a little more about what you need..."
                  required
                  className="w-full resize-y rounded-sm border border-slate-200 bg-[#F9FBFC] px-4 py-3 text-sm text-[#172B3A] outline-none transition placeholder:text-slate-400 focus:border-[#087EAB] focus:ring-2 focus:ring-[#087EAB]/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#087EAB] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#06698F] sm:w-auto"
              >
                Submit Enquiry
                <ArrowUpRight size={18} />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Your information will only be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}