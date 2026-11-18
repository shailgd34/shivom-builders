"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, CheckCircle, ExternalLink, ShieldCheck, ThumbsUp, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/MotionReveal";

const filterChips = [
  { label: "All", count: 171 },
  { label: "House Construction", count: 17 },
  { label: "Quality Materials", count: 11 },
  { label: "Best Builder Indore", count: 4 },
  { label: "On-Time Handover", count: 4 },
];

const googleReviewsList = [
  {
    name: "Anita Agarwal",
    initials: "AA",
    details: "Homeowner · 1 review",
    date: "3 months ago",
    rating: 5,
    tag: "Quality Materials",
    project: "Turnkey Duplex, Suman Nagar",
    text: "Amazing experience with Shivom Builders & Developers. Deepak ji and the civil engineering team are very professional and delivered high quality work. Truly one of the best construction companies in Indore. Highly recommended!",
    location: "Suman Nagar, Indore",
  },
  {
    name: "Sunil Sharma",
    initials: "SS",
    details: "Homeowner · Local Guide",
    date: "2 months ago",
    rating: 5,
    tag: "House Construction",
    project: "3-Storey Luxury Villa, Nipania",
    text: "Deepak Rajak ji and the team built our 3-storey luxury duplex in Nipania. Delivered 2 weeks ahead of committed time. Pure Tata Tiscon saria, UltraTech cement, and flawless marble work. Very trustworthy builder.",
    location: "Nipania, Indore",
  },
  {
    name: "Dr. Rajesh Agrawal",
    initials: "RA",
    details: "Homeowner · 4 reviews",
    date: "4 months ago",
    rating: 5,
    tag: "Best Builder Indore",
    project: "Contemporary Residence, Vijay Nagar",
    text: "Complete transparency from Day 1. The line-item BOQ had zero hidden charges. Kapil Parmar coordinated the IMC building permission smoothly. Highly satisfied with our dream home construction.",
    location: "Vijay Nagar, Indore",
  },
  {
    name: "Vikram Malviya",
    initials: "VM",
    details: "NRI Client · 2 reviews",
    date: "5 months ago",
    rating: 5,
    tag: "On-Time Handover",
    project: "Private Villa, Super Corridor",
    text: "Living outside Indore, I was worried about my parents' villa construction. Vinod ji sent daily WhatsApp video logs of every RCC beam casting and plumbing check. Truly honest, accountable, and professional team.",
    location: "Super Corridor, Indore",
  },
];

export default function GoogleReviews() {
  const [activeChip, setActiveChip] = useState("All");

  const filteredReviews = activeChip === "All"
    ? googleReviewsList
    : googleReviewsList.filter(r => r.tag === activeChip);

  return (
    <section
      data-framer-name="Google Reviews"
      className="bg-white pt-[90px] sm:pt-[110px] px-[26px] pb-[120px] border-b border-[#e4e4e4]"
    >
      <div className="max-w-[1335px] mx-auto">
        {/* Section Header (Consistent STRUKT Design System) */}
        <SlideUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#e4e4e4]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-4">
                <Star className="w-3.5 h-3.5 fill-[#ff2600] text-[#ff2600]" />
                <span>Verified Client Reviews &middot; Google Verified</span>
              </div>
              <h2 className="font-display text-[32px] sm:text-[42px] md:text-[48px] font-medium tracking-[-0.035em] text-[#131313] leading-[1.08]">
                4.9 rating on Google. <br />
                <span className="text-[#6e6e6e]">171 verified Indore families.</span>
              </h2>
            </div>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#4a4a4a] max-w-md leading-[24px]">
              Genuine, unedited feedback from homeowners who built their luxury villas and duplexes with Shivom Builders across Indore.
            </p>
          </div>
        </SlideUp>

        {/* Rating Metrics & Filters Card (STRUKT Minimal Architecture Style) */}
        <SlideUp delay={0.1}>
          <div className="mt-10 rounded-[14px] bg-[#fafafa] border border-[#e4e4e4] p-6 sm:p-8 lg:p-10 mb-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#e4e4e4]">
              {/* Score Block */}
              <div className="flex items-center gap-6">
                {/* Google "G" Badge */}
                <div className="w-12 h-12 rounded-[10px] bg-white border border-[#e4e4e4] flex items-center justify-center p-2.5 shadow-xs flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="font-display font-semibold text-[50px] sm:text-[60px] text-[#131313] leading-none tracking-tight">
                    4.9
                  </span>
                  <div>
                    <div className="flex items-center text-[#ff2600] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ff2600]" />
                      ))}
                    </div>
                    <span className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.06em] mt-1.5 block">
                      Based on 171 Google reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button (Exact STRUKT Light/Dark Pill with Arrow Box) */}
              <a
                href="https://maps.google.com/?q=Shivom+Builders+And+Developers+Suman+Nagar+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-[#131313] hover:bg-[#ff2600] text-white text-[12px] font-mono font-medium uppercase tracking-[0.04em] transition-colors shadow-sm group w-fit"
              >
                <span>Write a Google Review</span>
                <div className="w-6 h-6 rounded-[4px] bg-white text-[#131313] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </a>
            </div>

            {/* STRUKT Filter Chips (Clean Architecture Style, NOT Blue Widget Pills) */}
            <div className="pt-6 flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-mono text-[#6e6e6e] uppercase tracking-wider mr-2">
                Filter by topic:
              </span>
              {filterChips.map((chip) => {
                const isActive = activeChip === chip.label;
                return (
                  <button
                    key={chip.label}
                    onClick={() => setActiveChip(chip.label)}
                    className={`px-3.5 py-1.5 rounded-[4px] text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.04em] font-medium transition-colors border flex items-center gap-2 ${
                      isActive
                        ? "bg-[#131313] text-white border-[#131313]"
                        : "bg-white text-[#4a4a4a] border-[#e4e4e4] hover:bg-[#f2f2f2] hover:text-[#131313]"
                    }`}
                  >
                    <span>{chip.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded ${
                        isActive ? "bg-white/20 text-white" : "bg-[#f2f2f2] text-[#8a8a8a]"
                      }`}
                    >
                      {chip.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </SlideUp>

        {/* 4 Google Reviews Grid (STRUKT 2x2 Architectural Cards) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-[12px] bg-white p-6 sm:p-8 border border-[#e4e4e4] hover:border-zinc-300 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Card Top: Client Avatar, Name, Location & Star Rating */}
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#e4e4e4] mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#131313] text-white font-mono font-medium text-[13px] flex items-center justify-center flex-shrink-0 shadow-xs">
                        {rev.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-semibold text-[17px] text-[#131313] tracking-tight group-hover:text-[#ff2600] transition-colors">
                            {rev.name}
                          </h4>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="text-[12px] font-mono text-[#6e6e6e] block mt-0.5">
                          {rev.details}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex items-center text-[#ff2600] gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#ff2600]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono text-[#8a8a8a] mt-1.5">
                        {rev.date}
                      </span>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.06em] text-[#ff2600] font-semibold">
                      {rev.project}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-[15px] text-[#333333] leading-[25px] mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Footer: Location & Verified on Google */}
                <div className="pt-4 border-t border-[#e4e4e4] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#131313] font-medium">{rev.location}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3 text-emerald-600" /> Verified Google Review
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quality Badges Bar (STRUKT 3-Column Footer Trust Strip) */}
        <div className="mt-12 pt-8 border-t border-[#e4e4e4] grid grid-cols-1 sm:grid-cols-3 gap-6 text-[12px] font-mono text-[#6e6e6e]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#ff2600] flex-shrink-0" />
            <span>10-Year Certified Structural RCC Warranty</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#ff2600] flex-shrink-0" />
            <span>100% Genuine Materials: UltraTech &amp; Tata Tiscon</span>
          </div>
          <div className="flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-[#ff2600] flex-shrink-0" />
            <span>Indore Municipal Corporation (IMC) Sanctions Handled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
