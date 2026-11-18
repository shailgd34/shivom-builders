"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import navData from "@/data/navigation.json";
import companyData from "@/data/company.json";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      data-framer-name="Footer"
      className="bg-white p-[0px_10px_10px] relative z-10"
    >
      <div
        data-framer-name="Inner"
        className="rounded-[10px] bg-[#131313] text-white p-[40px_0px] sm:p-[60px_0px] lg:p-[70px_0px_40px] border border-white/5 relative overflow-hidden"
      >
        <div data-framer-name="Container" className="max-w-[1336px] mx-auto px-6 sm:px-8 relative z-10">
          {/* Top: Headline & Status Row */}
          <div data-framer-name="Top" className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-white/10">
            <div data-framer-name="Headline">
              <h2 data-framer-name="Line 1" className="font-display text-[38px] sm:text-[46px] md:text-[54px] font-medium tracking-[-0.05em] text-white leading-[1.02]">
                Built to last.
              </h2>
              <p data-framer-name="Line 2" className="font-display text-[38px] sm:text-[46px] md:text-[54px] font-normal tracking-[-0.05em] text-zinc-400 leading-[1.02] mt-2.5">
                Planned from day one.
              </p>
            </div>

            <div data-framer-name="Footer CTA" className="flex flex-wrap items-center gap-4">
              <div data-framer-name="Status" className="flex items-center gap-2 px-3.5 py-2 rounded-[6px] bg-white/[0.06] border border-white/10 text-[12px] font-mono text-zinc-300">
                <span data-framer-name="Dot" className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#127a37] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#127a37]" />
                </span>
                <span className="uppercase tracking-[0.04em]">Booking projects for 2027</span>
              </div>

              {/* Light Button: White bg, black text, black arrow box */}
              <Link
                href="/contact"
                data-framer-name="Button"
                className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-white hover:bg-zinc-100 text-[#131313] text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] transition-colors shadow-sm group"
              >
                <span>Get an estimate</span>
                <div className="w-6 h-6 rounded-[4px] bg-[#000000] flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Technical Ruler Divider (Exact STRUKT) */}
          <div data-framer-name="Footer Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-25 my-6" />

          {/* Directory Columns */}
          <div data-framer-name="Columns" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-10 border-b border-white/10">
            {/* Brand Column */}
            <div data-framer-name="Brand Column" className="lg:col-span-4 flex flex-col gap-5">
              <Link href="/" data-framer-name="Brand" className="inline-flex items-center" aria-label="Shivom Builder">
                <div data-framer-name="Mark" className="relative h-12 sm:h-14 w-[160px] sm:w-[190px]">
                  <Image
                    src="/images/logo.webp"
                    alt="Shivom Builder"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <p className="font-sans text-zinc-400 text-[16px] leading-[23.2px] max-w-sm">
                General contractor building luxury residential villas, independent duplexes, and commercial landmarks in Indore. Delivered on schedule since 2016.
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={companyData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[6px] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#ff2600] transition-colors bg-white/[0.04]"
                  aria-label="Instagram"
                >
                  <span className="text-[12px] font-mono font-medium">IG</span>
                </a>
                <a
                  href={companyData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[6px] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#ff2600] transition-colors bg-white/[0.04]"
                  aria-label="Facebook"
                >
                  <span className="text-[12px] font-mono font-medium">FB</span>
                </a>
                <a
                  href={companyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[6px] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors bg-white/[0.04]"
                  aria-label="WhatsApp"
                >
                  <span className="text-[12px] font-mono font-medium">WA</span>
                </a>
              </div>
            </div>

            {/* Pages Column */}
            <div data-framer-name="Pages Column" className="lg:col-span-2 flex flex-col gap-3.5">
              <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 font-medium">
                Pages
              </span>
              <ul className="flex flex-col gap-2.5">
                {navData.footerLinks.pages.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-framer-name={`Link ${link.label}`}
                      className="font-display text-[16px] font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div data-framer-name="Services Column" className="lg:col-span-3 flex flex-col gap-3.5">
              <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 font-medium">
                Services
              </span>
              <ul className="flex flex-col gap-2.5">
                {navData.footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-display text-[16px] font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Column */}
            <div data-framer-name="Office Column" className="lg:col-span-3 flex flex-col gap-3.5">
              <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 font-medium">
                Office
              </span>
              <div className="flex flex-col gap-3 text-zinc-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#ff2600] flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-[16px] leading-[23.2px] text-zinc-400">{companyData.contact.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ff2600] flex-shrink-0" />
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    data-framer-name="Link Phone"
                    className="font-display text-[16px] font-medium hover:text-white transition-colors"
                  >
                    {companyData.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#ff2600] flex-shrink-0" />
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    data-framer-name="Link Email"
                    className="font-display text-[16px] font-medium hover:text-white transition-colors"
                  >
                    {companyData.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-2 pt-1 text-[12px] text-zinc-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#ff2600] flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{companyData.contact.workingHours.weekdays}</p>
                    <p>{companyData.contact.workingHours.weekends}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Wordmark Marquee (SHIVOM BUILDER - Slow Speed Marquee) */}
          <div
            data-framer-name="Wordmark Wrap"
            className="w-full select-none pointer-events-none py-6 md:py-10 overflow-hidden relative"
          >
            <motion.div
              className="flex whitespace-nowrap items-center will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 45, // very slow architectural drift
              }}
            >
              {[0, 1].map((copyIndex) => (
                <div key={copyIndex} className="flex items-center shrink-0">
                  <span className="font-display font-medium tracking-tight text-[15vw] sm:text-[17vw] leading-none text-white/[0.06] uppercase whitespace-nowrap pr-10 md:pr-16">
                    SHIVOM BUILDER
                  </span>
                  <span className="text-white/[0.04] text-[6vw] font-display pr-10 md:pr-16">
                    &bull;
                  </span>
                  <span className="font-display font-medium tracking-tight text-[15vw] sm:text-[17vw] leading-none text-white/[0.06] uppercase whitespace-nowrap pr-10 md:pr-16">
                    SHIVOM BUILDER
                  </span>
                  <span className="text-white/[0.04] text-[6vw] font-display pr-10 md:pr-16">
                    &bull;
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom: Credits & Back to Top (Exact STRUKT) */}
          <div data-framer-name="Bottom" className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500 border-t border-white/5 font-mono">
            <div data-framer-name="Credits" className="flex items-center gap-6">
              <span>BUILT IN INDORE</span>
              <span>&middot;</span>
              <span>CRAFTED BY SHIVOM BUILDER</span>
            </div>
            <div className="flex items-center gap-6">
              <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                INSTAGRAM
              </a>
              <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                FACEBOOK
              </a>
              <a href={companyData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WHATSAPP
              </a>
            </div>
            <div>
              <button
                onClick={scrollToTop}
                data-framer-name="Link Back to top"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors uppercase"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
