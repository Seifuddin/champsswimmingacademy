
import Link from "next/link";
import {
  ArrowUpRight,
  Waves,
  MapPin,
} from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Gallery", href: "/gallery" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Our Programmes",
    links: [
      { name: "Beginner Swimming", href: "/programmes" },
      { name: "Children's Swimming", href: "/programmes" },
      { name: "Adult Swimming", href: "/programmes" },
      { name: "Private Lessons", href: "/programmes" },
      { name: "Technique & Water Safety", href: "/programmes" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Enrolment Enquiries", href: "/contact" },
      { name: "Frequently Asked Questions", href: "/#faqs" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#052438] text-white">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-9 border-b border-white/10 py-9 sm:py-10 lg:grid-cols-[1.15fr_2fr] lg:gap-16">

          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#087EAB] text-white">
                <Waves size={22} strokeWidth={1.8} />
              </div>

              <div className="leading-tight">
                <span className="block text-lg font-black tracking-tight">
                  CHAMPS
                </span>
                <span className="block text-[9px] font-bold tracking-[0.19em] text-[#7DE5EC]">
                  SWIMMING ACADEMY
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-[13px] leading-6 text-white/60">
              Building confident swimmers. Developing exceptional
              potential. Where every swimming journey begins.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <MapPin size={15} className="shrink-0 text-[#22B8C7]" />
              Nairobi, Kenya
            </div>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#7DE5EC] transition-colors hover:text-white"
            >
              Get in Touch
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#7DE5EC]">
                  {column.title}
                </h3>

                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs leading-5 text-white/60 transition-colors hover:text-white"
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

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] text-white/45">
            © 2026 Champs Swimming Academy. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px]">
            <span className="text-white/45">
              Where Champions Begin.
            </span>

            <span className="hidden h-3 w-px bg-white/15 sm:block" />

            <Link
              href="https://lapsa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-semibold text-white/70 transition-colors hover:text-[#7DE5EC]"
            >
              Built & Maintained by Lapsa East Africa
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}
