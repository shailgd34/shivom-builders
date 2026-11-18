"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", count: "04" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      data-framer-name="Navigation"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 sm:pt-6"
    >
      <div className="max-w-[1336px] mx-auto px-6 sm:px-8 flex items-center justify-between pointer-events-auto">
        {/* Left: Brand Logo (Transparent background, larger horizontal dimensions) */}
        <Link
          href="/"
          data-framer-name="Brand"
          className="flex items-center transition-transform hover:scale-[1.02] duration-200"
          aria-label="Shivom Builder"
        >
          <div data-framer-name="Mark" className="relative h-10 sm:h-12 w-[145px] sm:w-[175px]">
            <Image
              src="/images/logo.webp"
              alt="Shivom Builder"
              fill
              priority
              className="object-contain object-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            />
          </div>
        </Link>

        {/* Center/Right: Menu Bar & CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Menu Links Pill */}
          <nav
            data-framer-name="Menu"
            className="flex items-center gap-1 p-1 rounded-[6px] bg-[#262626cc] backdrop-blur-[40px] border border-white/10 shadow-lg text-white"
          >
            {navItems.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-framer-name={`Link ${link.label}`}
                  className={`px-3.5 py-2 rounded-[4px] font-display text-[16px] font-medium leading-[20.8px] transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? "text-white bg-white/15"
                      : "text-white/75 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.count && (
                    <span
                      data-framer-name="Count"
                      className="text-[11px] font-mono px-1.5 py-0.5 rounded-[4px] bg-white/[0.14] text-white font-medium leading-none"
                    >
                      {link.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Red CTA Button with Attached White Arrow Box */}
          <Link
            href="/contact"
            data-framer-name="CTA"
            className="flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] border border-white/20 text-white font-medium text-[12px] font-mono tracking-[0.02em] uppercase transition-all duration-200 shadow-md group"
          >
            <span>Get estimate</span>
            <div
              data-framer-name="Icon"
              className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#ff2600] transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/contact"
            className="px-3 py-1.5 rounded-[6px] bg-[#ff2600] text-white text-[11px] font-mono font-medium uppercase tracking-wider"
          >
            Estimate
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[6px] bg-[#262626cc] text-white border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3 rounded-[10px] bg-[#131313] border border-white/15 shadow-2xl pointer-events-auto">
          <div className="flex flex-col gap-1">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-[4px] text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.count && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white">
                    {link.count}
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 rounded-[6px] bg-[#ff2600] text-white text-xs font-mono font-bold uppercase text-center flex items-center justify-center gap-2"
            >
              <span>Get estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
