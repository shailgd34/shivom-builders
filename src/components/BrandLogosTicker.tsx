"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface BrandPartner {
  id: string;
  name: string;
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
  scale?: string;
}

export const brandPartnersList: BrandPartner[] = [
  {
    id: "ultratech",
    name: "UltraTech Cement",
    imageSrc: "/images/partners/ultratech-official.png",
    alt: "UltraTech Cement Official Brand Logo",
    width: 180,
    height: 52,
  },
  {
    id: "ambuja",
    name: "Ambuja Cement",
    imageSrc: "/images/partners/ambuja-official.png",
    alt: "Ambuja Cement Official Brand Logo",
    width: 170,
    height: 52,
  },
  {
    id: "kajaria",
    name: "Kajaria Ceramics",
    imageSrc: "/images/partners/kajaria.svg",
    alt: "Kajaria Ceramics Official Brand Logo",
    width: 175,
    height: 44,
  },
  {
    id: "asian-paints",
    name: "Asian Paints",
    imageSrc: "/images/partners/asian-paints.png",
    alt: "Asian Paints Official Brand Logo",
    width: 180,
    height: 60,
    scale: "scale-125 sm:scale-135",
  },
  {
    id: "kohler",
    name: "Kohler",
    imageSrc: "/images/partners/kohler.svg",
    alt: "Kohler Official Brand Logo",
    width: 175,
    height: 48,
  },
  {
    id: "havells",
    name: "Havells",
    imageSrc: "/images/partners/havells.svg",
    alt: "Havells Official Brand Logo",
    width: 160,
    height: 50,
  },
  {
    id: "tata-tiscon",
    name: "Tata Tiscon",
    imageSrc: "/images/partners/tata-tiscon.webp",
    alt: "Tata Tiscon Official Brand Logo",
    width: 175,
    height: 52,
  },
  {
    id: "hindware",
    name: "Hindware",
    imageSrc: "/images/partners/hindware.png",
    alt: "Hindware Official Brand Logo",
    width: 160,
    height: 62,
    scale: "scale-[1.9] sm:scale-[2.2]",
  },
  {
    id: "polycab",
    name: "Polycab",
    imageSrc: "/images/partners/polycab.png",
    alt: "Polycab Official Brand Logo",
    width: 155,
    height: 56,
    scale: "scale-125 sm:scale-140",
  },
  {
    id: "rr-kabel",
    name: "RR Kabel",
    imageSrc: "/images/partners/rr-kabel.png",
    alt: "RR Kabel Official Brand Logo",
    width: 145,
    height: 50,
    scale: "scale-110 sm:scale-125",
  },
];

interface BrandLogosTickerProps {
  title?: string;
  speed?: number; // duration in seconds
  theme?: "light" | "dark";
  className?: string;
}

export default function BrandLogosTicker({
  title = "TRUSTED BY LEADING DEVELOPERS",
  speed = 40,
  theme = "light",
  className = "",
}: BrandLogosTickerProps) {
  const isDark = theme === "dark";

  return (
    <section
      data-framer-name="Trusted By Section"
      className={`relative w-full pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden ${
        isDark ? "bg-[#131313] text-white" : "bg-white text-[#131313]"
      } ${className}`}
    >
      {/* Centered Pill Badge (Exact STRUKT Reference Design) */}
      <div className="max-w-[1335px] mx-auto px-4 sm:px-6 mb-6 sm:mb-8 text-center">
        <div
          className={`inline-flex items-center px-3.5 py-1 rounded-[4px] text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.08em] font-semibold border ${
            isDark
              ? "bg-white/10 text-white border-white/15"
              : "bg-[#f2f2f2] text-[#131313] border-[#e4e4e4]"
          }`}
        >
          {title}
        </div>
      </div>

      {/* Ribbon with Exact STRUKT Top & Bottom Border Lines + Vertical Dividers */}
      <div
        className={`relative w-full overflow-hidden flex items-center border-y ${
          isDark ? "border-white/10" : "border-[#e4e4e4]"
        }`}
      >
        {/* Left Gradient Edge Fade */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-r from-[#131313] to-transparent"
              : "bg-gradient-to-r from-white to-transparent"
          }`}
        />
        {/* Right Gradient Edge Fade */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-l from-[#131313] to-transparent"
              : "bg-gradient-to-l from-white to-transparent"
          }`}
        />

        {/* Seamless Infinite Marquee of Bordered Grid Cells */}
        <motion.div
          className="flex items-center shrink-0 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...brandPartnersList, ...brandPartnersList].map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className={`h-[95px] sm:h-[115px] w-[210px] sm:w-[250px] shrink-0 border-r flex items-center justify-center px-6 transition-colors ${
                isDark
                  ? "border-white/10 hover:bg-white/[0.04]"
                  : "border-[#e4e4e4] hover:bg-[#fafafa]"
              }`}
              title={brand.name}
            >
              <div
                className={`relative flex items-center justify-center ${brand.scale || ""}`}
                style={{
                  height: `${brand.height}px`,
                  width: `${brand.width}px`,
                }}
              >
                <Image
                  src={brand.imageSrc}
                  alt={brand.alt}
                  fill
                  sizes={`${brand.width}px`}
                  className={`object-contain object-center ${
                    isDark && brand.id === "kohler" ? "invert brightness-200" : ""
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
