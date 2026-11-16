
import Link from "next/link";
import {
  ArrowUpRight,
  Waves,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Our Coaches", href: "/coaches" },
      { name: "Facilities", href: "/facilities" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { name: "Baby & Toddler Swimming", href: "/programmes" },
      { name: "Beginner Swimming", href: "/programmes" },
      { name: "Intermediate Swimming", href: "/programmes" },
      { name: "Advanced Swimming", href: "/programmes" },
      { name: "Competitive Swimming", href: "/programmes" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Enrolment Enquiries", href: "/contact" },
      { name: "Frequently Asked Questions", href: "/#faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#052438] text-white">

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_2fr] lg:gap-20">

          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087EAB] text-white">
                <Waves size={26} />
              </div>

              <div className="leading-tight">
                <span className="block text-xl font-black tracking-tight">
                  CHAMPS
                </span>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#7DE5EC]">
                  SWIMMING ACADEMY
                </span>
              </div>
            </Link>

            <p className="mt-7 text-sm leading-7 text-slate-400">
              Building confident swimmers. Developing exceptional
              potential. Discover a swimming journey designed around
              learning, growth and achievement.
            </p>

            <div className="mt-7 flex items-start gap-3 text-sm text-slate-400">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#7DE5EC]" />
              <span>Nairobi, Kenya</span>
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#7DE5EC] transition-colors hover:text-white"
            >
              Get in Touch
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="mb-6 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                  {column.title}
                </h3>

                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-[#7DE5EC]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col justify-between gap-5 pt-7 sm:flex-row sm:items-center">

          <p className="text-xs leading-6 text-slate-500">
            © 2026 Champs Swimming Academy. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>

            <span className="text-slate-600">
              Where Champions Begin.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
