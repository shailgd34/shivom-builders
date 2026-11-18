"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { motion } from "framer-motion";

import CTASection from "@/components/CTASection";
import CompanyTimeline, { Milestone } from "@/components/CompanyTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SlideUp, FadeIn, StaggerContainer, StaggerItem, STRUKT_EASE } from "@/components/MotionReveal";
import AwwwardsTeam from "@/components/AwwwardsTeam";
import GoogleReviews from "@/components/GoogleReviews";
import InstagramFeed from "@/components/InstagramFeed";
import BrandLogosTicker from "@/components/BrandLogosTicker";

const milestones: Milestone[] = [
  {
    year: "2016",
    step: "01 / 06",
    title: "Shivom Founded in Indore",
    desc: "Deepak Rajak establishes Shivom Builders with a core crew of engineers and master craftsmen, delivering bespoke residences in Suman Nagar and across Indore.",
    image: "/images/hero/villa-exterior.jpg",
  },
  {
    year: "2018",
    step: "02 / 06",
    title: "First Major Commercial Complex",
    desc: "Handover of a 28,000 sq ft retail arcade in Vijay Nagar three weeks ahead of schedule. Commercial civil contracting becomes a major pillar.",
    image: "/images/projects/project-03.jpg",
  },
  {
    year: "2020",
    step: "03 / 06",
    title: "In-House Architecture & Engineering",
    desc: "Structural civil engineers, 3D elevation specialists, and quantity surveyors join the core team, providing single-contract delivery from blueprint to keys.",
    image: "/images/hero/architect-craft.jpg",
  },
  {
    year: "2022",
    step: "04 / 06",
    title: "ISO 9001 & 45001 Certification",
    desc: "Quality, health, and site-safety protocols formalized across every active site, with standardized weekly milestone reports delivered to every client.",
    image: "/images/projects/project-01.jpg",
  },
  {
    year: "2024",
    step: "05 / 06",
    title: "Grand Aranya Ultra-Luxury Villa",
    desc: "Completion of our largest private residence: 14,500 sq ft cantilevered luxury villa featuring double-height glass facades and Italian marble work.",
    image: "/images/projects/project-04.jpg",
  },
  {
    year: "2026",
    step: "06 / 06",
    title: "100+ Handover Milestone",
    desc: "Over 100 homes and commercial landmarks completed across Indore with a 98% on-time handover record and zero cost overruns.",
    image: "/images/projects/project-02.jpg",
  },
];

const teamMembers = [
  {
    name: "Deepak Rajak",
    role: "Owner & Founder",
    experience: "14+ years experience",
    image: "/images/hero/estimator-avatar.jpg",
    bio: "Founder of Shivom Builder. Directs architectural partnerships, client trust, structural quality governance, and turnkey villa delivery across Indore.",
  },
  {
    name: "Kapil Parmar",
    role: "Team Coordinator",
    experience: "8+ years experience",
    image: "/images/hero/architect-craft.jpg",
    bio: "Coordinates on-site civil teams, IMC municipal liaisons, trade scheduling, and daily milestone reporting directly to homeowners.",
  },
  {
    name: "Vinod",
    role: "Project Management",
    experience: "12+ years experience",
    image: "/images/hero/villa-exterior.jpg",
    bio: "Oversees project budgeting, material procurement, locked BOQ quality checks, and on-ground structural inspections on active sites.",
  },
  {
    name: "Pramod Patel",
    role: "Chief Civil Engineer",
    experience: "16+ years experience",
    image: "/images/projects/project-03.jpg",
    bio: "Supervises RCC column casting, slab reinforcement audits, and our certified 10-year structural warranty compliance across Indore.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-[#131313]">
      {/* ====================================================================
          SECTION 01: HERO SECTION
          Exact STRUKT metrics: 10px outer padding, 10px rounded dark frame,
          150px top padding, 90px Switzer headline.
         ==================================================================== */}
      <section data-framer-name="Hero" className="bg-white p-[10px] relative z-20">
        <div
          data-framer-name="Hero Frame"
          className="relative min-h-[580px] sm:min-h-[640px] rounded-[10px] overflow-hidden flex flex-col justify-between pt-[150px] px-[26px] pb-0 text-white bg-[#131313]"
        >
          {/* Cinematic Background Video from Shivom Builders Reel */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/about/shivom-reel-hero.jpg"
              className="w-full h-full object-cover object-center filter contrast-105 brightness-90 scale-[1.03]"
            >
              <source src="/videos/villa-construction.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/45 to-black/90 pointer-events-none" />

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
                <span>About us &middot; Indore, MP</span>
              </div>
            </motion.div>

            <div className="max-w-[960px]">
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: STRUKT_EASE }}
                className="font-display text-[48px] sm:text-[68px] md:text-[80px] lg:text-[90px] font-medium tracking-[-0.05em] leading-[0.98] text-white"
              >
                <span className="text-white/55">Built on a plan. </span>
                <span className="text-white">Since 2016.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: STRUKT_EASE }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12 pb-8 border-b border-white/15"
            >
              <p className="font-sans text-[16px] text-white/70 font-normal leading-[23.2px] max-w-xl">
                Shivom Builder is an Indore general contractor with over a decade of luxury residential villas, independent duplexes, and commercial landmarks behind it. We lock scope, cost and schedule before ground is broken, then build exactly what we promised.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] border border-white/20 text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-colors shadow-md group"
                >
                  <span>Get an estimate</span>
                  <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#ff2600] transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-[15px] border border-white/20 text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-all group"
                >
                  <span>Our projects</span>
                  <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#000000] transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Technical Ruler Pattern */}
            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* Certified Materials & Brand Partners Ticker (STRUKT Minimal Style) */}
      <BrandLogosTicker />

      {/* ====================================================================
          SECTION 02: STORY & STAT BAND (With Sticky Tag Column)
          Exact STRUKT metrics: padding: 60px 26px 140px, bg: #ffffff
         ==================================================================== */}
      <section data-framer-name="Story" className="pt-[60px] px-[26px] pb-[140px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#e4e4e4] items-start">
            {/* Sticky Tag Column */}
            <div className="lg:col-span-3 lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
                Our story
              </span>
            </div>

            <div className="lg:col-span-9">
              <SlideUp>
                <h2 className="font-display text-[26px] sm:text-[34px] md:text-[40px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.25] max-w-[860px]">
                  At Shivom Builders &amp; Developers, we craft spaces that inspire and endure.{" "}
                  <span className="text-[#6e6e6e] font-normal">
                    With decades of construction excellence in Indore, we combine trusted engineering, integrity, and genuine materials to build homes that stand the test of time.
                  </span>
                </h2>
              </SlideUp>

              <SlideUp delay={0.15}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-[15px] sm:text-[16px] text-[#4a4a4a] leading-[24px]">
                  <p>
                    Every project begins with a fixed scope, a locked Bill of Quantities (BOQ), and a guaranteed timeline. Zero hidden costs, zero surprises.
                  </p>
                  <p>
                    Founded in Indore, we manage the entire build in-house &mdash; from 2D floor plans and IMC permissions to turnkey RCC construction with Tata Tiscon steel and UltraTech cement.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>

          {/* 4-Column Stat Band with Animated Counters */}
          <SlideUp delay={0.2}>
            <div data-framer-name="Stat Band" className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="border-l-2 border-[#ff2600] pl-6">
                <p className="font-display text-[44px] sm:text-[56px] font-medium text-[#131313] leading-none flex items-baseline">
                  <AnimatedCounter to={10} />
                  <span className="text-[#ff2600]">+</span>
                </p>
                <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-3">
                  Years building
                </p>
              </div>
              <div className="border-l-2 border-[#e4e4e4] pl-6">
                <p className="font-display text-[44px] sm:text-[56px] font-medium text-[#131313] leading-none flex items-baseline">
                  <AnimatedCounter to={100} />
                  <span className="text-[#ff2600]">+</span>
                </p>
                <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-3">
                  Projects delivered
                </p>
              </div>
              <div className="border-l-2 border-[#e4e4e4] pl-6">
                <p className="font-display text-[44px] sm:text-[56px] font-medium text-[#ff2600] leading-none flex items-baseline">
                  <AnimatedCounter to={98} />
                  <span>%</span>
                </p>
                <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-3">
                  Handed over on time
                </p>
              </div>
              <div className="border-l-2 border-[#e4e4e4] pl-6">
                <p className="font-display text-[44px] sm:text-[56px] font-medium text-[#131313] leading-none">
                  0
                </p>
                <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-3">
                  Cost overruns
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: THREE PRINCIPLES (Values Grid)
         ==================================================================== */}
      <section data-framer-name="Values" className="bg-[#f2f2f2] pt-[140px] px-[26px] pb-[140px]">
        <div className="max-w-[1335px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#e4e4e4]">
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
                  What we stand for
                </span>
              </div>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
                Three principles, <br />
                <span className="text-[#6e6e6e]">on every site.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px]">
                They shape how we estimate, how we staff a project and how we talk to clients when conditions change on the ground.
              </p>
            </div>
          </div>

          <StaggerContainer data-framer-name="Values Grid" className="grid grid-cols-1 md:grid-cols-3 gap-[20px] pt-[40px]">
            <StaggerItem>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-[32px] rounded-[10px] bg-white border border-[#e4e4e4] flex flex-col justify-between min-h-[300px] shadow-sm"
              >
                <div>
                  <span className="text-[12px] font-mono text-[#ff2600] uppercase tracking-[0.04em] block mb-4 font-medium">
                    01 — Plan
                  </span>
                  <h3 className="font-display text-[22px] font-medium text-[#131313] mb-3 leading-[26.4px]">
                    Lock everything before digging.
                  </h3>
                </div>
                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px]">
                  Every scope is priced line by line and scheduled to the week before anything is signed. Most construction problems are 10x cheaper to solve on paper.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-[32px] rounded-[10px] bg-white border border-[#e4e4e4] flex flex-col justify-between min-h-[300px] shadow-sm"
              >
                <div>
                  <span className="text-[12px] font-mono text-[#ff2600] uppercase tracking-[0.04em] block mb-4 font-medium">
                    02 — Own
                  </span>
                  <h3 className="font-display text-[22px] font-medium text-[#131313] mb-3 leading-[26.4px]">
                    One accountable engineer.
                  </h3>
                </div>
                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px]">
                  A single project lead is accountable from pre-construction to handover, and reports directly on cost, structural quality and safety every single week.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-[32px] rounded-[10px] bg-[#131313] text-white border border-white/10 flex flex-col justify-between min-h-[300px] shadow-xl"
              >
                <div>
                  <span className="text-[12px] font-mono text-[#ff2600] uppercase tracking-[0.04em] block mb-4 font-medium">
                    03 — Last
                  </span>
                  <h3 className="font-display text-[22px] font-medium text-white mb-3 leading-[26.4px]">
                    Engineered for generations.
                  </h3>
                </div>
                <p className="font-sans text-[16px] text-white/70 leading-[23.2px]">
                  We choose concrete grades, structural steel, and plumbing specs for the next generation, not just the handover inspection. Backed by guaranteed warranty.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: PINNED COMPANY TIMELINE (STRUKT Exact Interactive Stage)
         ==================================================================== */}
      <CompanyTimeline milestones={milestones} />

      {/* ====================================================================
          SECTION 05: AWWWARDS-STYLE TEAM (Big Owner Card + Lower Secondary Cards)
         ==================================================================== */}
      <AwwwardsTeam />

      {/* ====================================================================
          SECTION 06: GOOGLE REVIEWS SECTION (4.9 Rating in Indore)
         ==================================================================== */}
      <GoogleReviews />

      {/* ====================================================================
          SECTION 07: INSTAGRAM FEED SHOWCASE (@shivom.builders)
         ==================================================================== */}
      <InstagramFeed />

      {/* ====================================================================
          SECTION 08: CTA BLOCK
         ==================================================================== */}
      <CTASection
        title="Ready to build?"
        subtitle="Let's talk about your plot."
        intro="Schedule a site visit in Indore or discuss your architectural drawings with our lead engineer."
      />
    </div>
  );
}
