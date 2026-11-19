
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+254 7XX XXX XXX",
    description: "Speak directly with our team.",
    href: "tel:+2547XXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "your-email@example.com",
    description: "Send us your questions anytime.",
    href: "mailto:your-email@example.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Add Academy Location",
    description: "Come and meet our team.",
    href: "#visit-us",
  },
  {
    icon: Clock3,
    label: "Opening Hours",
    value: "Add Opening Hours",
    description: "Contact us to confirm availability.",
    href: "#contact-form",
  },
];

export default function ContactInformation() {
  return (
    <section id="contact-information" className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">

          {/* INTRODUCTION */}
          <div className="lg:pr-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-7 bg-[#22B8C7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087EAB]">
                Contact Information
      </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-[#082F49] sm:text-4xl">
              Let's Start
              <span className="text-[#087EAB]"> a Conversation.</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Have a question about swimming lessons, programmes or
              registration? Reach out to us. We're happy to help.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#082F49]">
              <span className="h-2 w-2 rounded-full bg-[#22B8C7]" />
              We're here to help you get started.
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex gap-3 py-4 transition-colors hover:bg-[#F7FAFC] sm:px-4 ${
                    index < 2 ? "border-b border-slate-200" : ""
                  } ${index % 2 === 1 ? "sm:border-l sm:border-slate-200" : ""}`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#EAF6F9] text-[#087EAB] transition-colors group-hover:bg-[#087EAB] group-hover:text-white">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        {item.label}
                      </p>

                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087EAB]"
                      />
                    </div>

                    <p className="mt-1 break-words text-sm font-bold text-[#082F49]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
