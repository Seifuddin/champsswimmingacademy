
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Programs", href: "/programmes", dropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const programmes = [
  {
    number: "01",
    name: "Beginner Swimming",
    href: "/programmes/beginner-swimming",
  },
  {
    number: "02",
    name: "Children's Swimming",
    href: "/programmes/childrens-swimming",
  },
  {
    number: "03",
    name: "Adult Swimming",
    href: "/programmes/adult-swimming",
  },
  {
    number: "04",
    name: "Technique Improvement",
    href: "/programmes/technique-improvement",
  },
  {
    number: "05",
    name: "Private Swimming Lessons",
    href: "/programmes/private-swimming-lessons",
  },
  {
    number: "06",
    name: "Residential Swimming Lessons",
    href: "/programmes/residential-swimming-lessons",
  },
  {
    number: "07",
    name: "Water Safety & Survival",
    href: "/programmes/water-safety-survival",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => {
            setMobileOpen(false);
            setProgrammesOpen(false);
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082F49] text-white">
            <span className="text-xl font-black">C</span>
          </div>

          <div className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-[#082F49]">
              CHAMPS
            </span>
            <span className="block text-[9px] font-bold tracking-[0.22em] text-[#087EAB]">
              SWIMMING ACADEMY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="group relative"
              >
                {/* Programs trigger */}
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 transition-colors hover:text-[#087EAB]"
                >
                  {item.name}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </Link>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-[0_15px_45px_rgba(8,47,73,0.13)]">

                    {/* Dropdown heading */}
                    <div className="border-b border-slate-100 px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087EAB]">
                        Explore Our Programmes
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Find the right swimming programme for you.
                      </p>
                    </div>

                    {/* Programme links */}
                    <div className="py-1">
                      {programmes.map((programme) => (
                        <Link
                          key={programme.number}
                          href={programme.href}
                          className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#F2FAFC]"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#087EAB]/[0.07] text-[10px] font-bold text-[#087EAB] transition-colors group-hover/item:bg-[#22B8C7]/20">
                            {programme.number}
                          </span>

                          <span className="flex-1 text-[12px] font-semibold text-[#082F49] transition-colors group-hover/item:text-[#087EAB]">
                            {programme.name}
                          </span>

                          <ArrowUpRight
                            size={14}
                            className="text-slate-400 opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>

                    {/* View all */}
                    <div className="border-t border-slate-100 px-2 pt-2">
                      <Link
                        href="/programmes"
                        className="flex items-center justify-between rounded-lg px-3 py-3 text-xs font-bold text-[#087EAB] transition-colors hover:bg-[#F2FAFC]"
                      >
                        View All Programmes
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-[#087EAB]"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#087EAB] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#082F49]"
          >
            Enrol Now
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setProgrammesOpen(false);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#082F49] transition-colors hover:bg-[#EAF7FB] lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">
          <nav className="flex flex-col">

            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="border-b border-slate-100">

                  {/* Programs toggle */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-3.5 text-sm font-semibold text-[#082F49] transition-colors hover:text-[#087EAB]"
                    >
                      {item.name}
                    </Link>

                    <button
                      type="button"
                      aria-label="Toggle programmes dropdown"
                      aria-expanded={programmesOpen}
                      onClick={() => setProgrammesOpen(!programmesOpen)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-[#087EAB] transition-colors hover:bg-[#EAF7FB]"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          programmesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mobile programme dropdown */}
                  {programmesOpen && (
                    <div className="mb-3 ml-2 border-l-2 border-[#22B8C7] pl-3">
                      {programmes.map((programme) => (
                        <Link
                          key={programme.number}
                          href={programme.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setProgrammesOpen(false);
                          }}
                          className="flex items-center gap-3 py-2.5 text-[13px] font-medium text-slate-600 transition-colors hover:text-[#087EAB]"
                        >
                          <span className="text-[10px] font-bold text-[#22B8C7]">
                            {programme.number}
                          </span>
                          {programme.name}
                        </Link>
                      ))}

                      <Link
                        href="/gallery"
                        onClick={() => {
                          setMobileOpen(false);
                          setProgrammesOpen(false);
                        }}
                        className="mt-1 flex items-center gap-2 py-3 text-xs font-bold text-[#087EAB]"
                      >
                        View Gallery
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-slate-100 py-3.5 text-sm font-semibold text-[#082F49] transition-colors hover:text-[#087EAB]"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#087EAB] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#082F49]"
            >
              Enrol Now
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
