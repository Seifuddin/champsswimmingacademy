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
    description: "Contact us to confirm lesson availability.",
    href: "#contact-form",
  },
];

export default function ContactInformation() {
  return (
    <section
      id="contact-information"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087EAB]">
            Get in Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172B3A] sm:text-4xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Whether you're enquiring about lessons, registration or general
            information, we're ready to assist.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex min-h-[175px] flex-col border border-slate-200 bg-[#F7FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#22B8C7] hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E6F5F8] text-[#087EAB] transition group-hover:bg-[#087EAB] group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div className="mt-5 flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-[#172B3A]">
                    {item.label}
                  </h3>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-400 transition group-hover:text-[#087EAB]"
                  />
                </div>

                <p className="mt-1 break-words text-sm font-semibold text-[#087EAB]">
                  {item.value}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}