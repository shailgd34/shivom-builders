"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import CTASection from "@/components/CTASection";
import { SlideUp, FadeIn, STRUKT_EASE } from "@/components/MotionReveal";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter(
          (p) =>
            p.categoryLabel.toLowerCase().includes(activeFilter.toLowerCase()) ||
            p.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const featured = projectsData[0];

  return (
    <div className="w-full bg-white text-[#131313]">
      {/* ====================================================================
          SECTION 01: HERO SECTION
         ==================================================================== */}
      <section data-framer-name="Page Header" className="bg-white p-[10px] relative z-20">
        <div
          data-framer-name="Hero Frame"
          className="relative min-h-[580px] lg:min-h-[640px] rounded-[10px] overflow-hidden flex flex-col justify-between pt-[150px] px-[26px] pb-0 text-white bg-[#131313]"
        >
          <motion.div
            initial={{ scale: 1.08, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 0.35 }}
            transition={{ duration: 1.2, ease: STRUKT_EASE }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={featured.heroImage}
              alt="Shivom Builders Architectural Portfolio"
              fill
              priority
              className="object-cover object-center filter grayscale"
            />
          </motion.div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/90 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-[1335px] mx-auto w-full">
            <motion.div
              data-framer-name="Tag Wrap"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: STRUKT_EASE }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/[0.12] backdrop-blur-md border border-white/15 text-[12px] font-mono uppercase tracking-[0.08em] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600]" />
                <span>Portfolio &middot; Indore, MP</span>
              </div>
            </motion.div>

            <div className="max-w-[960px]">
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: STRUKT_EASE }}
                className="font-display text-[48px] sm:text-[68px] md:text-[80px] lg:text-[90px] font-medium tracking-[-0.05em] leading-[0.98] text-white"
              >
                <span className="text-white/55">Built to spec, </span>
                <span className="text-white">85 times over.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: STRUKT_EASE }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12 pb-8 border-b border-white/15"
            >
              <p className="font-sans text-[16px] text-white/70 font-normal leading-[23.2px] max-w-xl">
                Offices, luxury residences, independent villas and commercial hubs — each one scoped, priced and scheduled before ground was broken, then handed over on the date we promised.
              </p>

              {/* Stats Band in Hero */}
              <div className="flex items-center gap-6 text-[12px] font-mono">
                <div>
                  <span className="text-white font-medium text-[20px] font-display block leading-none">85+</span>
                  <span className="text-white/60 text-[11px] mt-1 block">Delivered</span>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div>
                  <span className="text-white font-medium text-[20px] font-display block leading-none">150K+</span>
                  <span className="text-white/60 text-[11px] mt-1 block">Sq ft built</span>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div>
                  <span className="text-[#ff2600] font-medium text-[20px] font-display block leading-none">98%</span>
                  <span className="text-white/60 text-[11px] mt-1 block">On time</span>
                </div>
              </div>
            </motion.div>

            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: FEATURED PROJECT HERO CASE STUDY
         ==================================================================== */}
      <section data-framer-name="Latest Project" className="pt-[100px] px-[26px] pb-[80px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <SlideUp>
            <div className="pb-6 border-b border-[#e4e4e4] flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
                Latest project
              </span>
              <span className="text-[12px] font-mono text-[#6e6e6e]">Featured Handover</span>
            </div>
          </SlideUp>

          <SlideUp delay={0.15}>
            <Link
              href={`/projects/${featured.slug}`}
              className="group block mt-8 rounded-[10px] overflow-hidden bg-[#f2f2f2] border border-[#e4e4e4] p-[10px] shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-full h-[400px] sm:h-[540px] lg:h-[620px] rounded-[6px] overflow-hidden bg-zinc-900 mb-6">
                <Image
                  src={featured.heroImage}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1335px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-[4px] bg-black/75 backdrop-blur text-white text-[12px] font-mono uppercase tracking-wider font-medium">
                    {featured.categoryLabel}
                  </span>
                  <span className="px-3 py-1.5 rounded-[4px] bg-white/90 backdrop-blur text-[#131313] text-[12px] font-mono font-medium">
                    {featured.builtUpArea}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e6e] mb-2">
                    <span>{featured.location}</span>
                    <span>&middot;</span>
                    <span>{featured.year}</span>
                  </div>
                  <h2 className="font-display text-[28px] sm:text-[38px] font-medium text-[#131313] group-hover:text-[#ff2600] transition-colors leading-[1.15] tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-3 font-sans text-[16px] text-[#4a4a4a] leading-[23.2px]">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 pl-4 pr-1.5 py-2 rounded-[6px] bg-[#131313] text-white font-mono text-[12.5px] uppercase tracking-[0.02em] font-medium self-start lg:self-auto group-hover:bg-[#ff2600] transition-colors">
                  <span>View case study</span>
                  <div className="w-6 h-6 rounded-[4px] bg-white text-[#131313] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </Link>
          </SlideUp>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: ALL PROJECTS WITH INTERACTIVE SECTOR FILTER
         ==================================================================== */}
      <section data-framer-name="All Projects" className="pt-[60px] px-[26px] pb-[140px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          {/* Header & Sector Filter Bar */}
          <div className="pb-8 border-b border-[#e4e4e4] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-3">
                All projects
              </span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
                Every build, <br />
                <span className="text-[#6e6e6e]">one standard.</span>
              </h2>
            </div>

            {/* Filter Pills with Framer Smooth Pill Transition */}
            <div className="flex flex-wrap items-center gap-2 bg-[#f2f2f2] p-1 rounded-[6px] border border-[#e4e4e4]">
              {["All", "Villa", "Residence", "Commercial"].map((sector) => {
                const isSelected = activeFilter === sector;
                return (
                  <button
                    key={sector}
                    onClick={() => setActiveFilter(sector)}
                    className={`relative px-3.5 py-1.5 rounded-[4px] text-[12px] font-mono uppercase tracking-[0.04em] font-medium transition-colors ${
                      isSelected ? "text-white" : "text-[#6e6e6e] hover:text-[#131313]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-[#131313] rounded-[4px] shadow-sm -z-0"
                        transition={{ duration: 0.3, ease: STRUKT_EASE }}
                      />
                    )}
                    <span className="relative z-10">
                      {sector === "All" ? "All sectors" : sector}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid: 3-Column Grid matching STRUKT */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] pt-[40px]"
          >
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: STRUKT_EASE }}
                  whileHover={{ y: -6 }}
                  key={proj.id}
                  className="h-full"
                >
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="group flex flex-col justify-between p-[10px] rounded-[10px] bg-white border border-[#e4e4e4] hover:border-[#ff2600]/50 shadow-sm hover:shadow-md transition-all duration-300 min-h-[480px] h-full"
                  >
                    <div>
                      <div className="relative w-full h-[280px] rounded-[4px] overflow-hidden mb-4 bg-zinc-900">
                        <Image
                          src={proj.heroImage}
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-[4px] bg-white/95 backdrop-blur text-[#131313] font-mono text-[11px] uppercase font-medium tracking-wider">
                            {proj.categoryLabel}
                          </span>
                        </div>
                      </div>

                      <div className="px-2">
                        <div className="flex items-center justify-between text-[12px] font-mono text-[#6e6e6e] mb-2">
                          <span>{proj.location}</span>
                          <span>{proj.year}</span>
                        </div>

                        <h3 className="font-display text-[22px] font-medium text-[#131313] group-hover:text-[#ff2600] transition-colors leading-[26.4px] tracking-tight">
                          {proj.title}
                        </h3>

                        <p className="font-sans text-[14px] text-[#4a4a4a] leading-[21px] mt-2 line-clamp-2">
                          {proj.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 px-2 pb-1 border-t border-[#e4e4e4] flex items-center justify-between mt-4">
                      <span className="text-[12px] font-mono text-[#6e6e6e]">
                        {proj.builtUpArea}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#f2f2f2] group-hover:bg-[#ff2600] flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-[#131313] group-hover:text-white" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: CTA BLOCK
         ==================================================================== */}
      <CTASection
        title="Have a project?"
        subtitle="Let's build it."
        intro="Tell us about your plot, timeline and budget. You'll get a clear, fixed estimate within 5 business days."
      />
    </div>
  );
}
