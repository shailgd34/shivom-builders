"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  Plus,
  Minus,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Emerge } from "@/components/motion/StruktMotion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SlideUp, StaggerContainer, StaggerItem, STRUKT_EASE } from "@/components/MotionReveal";
import HeroImageReveal from "@/components/HeroImageReveal";
import PlotToVillaVisualizer from "@/components/PlotToVillaVisualizer";
import GoogleReviews from "@/components/GoogleReviews";
import InstagramFeed from "@/components/InstagramFeed";
import BrandLogosTicker from "@/components/BrandLogosTicker";
import InteractiveVillaRevealCard from "@/components/InteractiveVillaRevealCard";
import ScrollTextReveal, { ScrollFade } from "@/components/ScrollTextReveal";
import InteractiveFloorPlanPreview from "@/components/InteractiveFloorPlanPreview";
import companyData from "@/data/company.json";
import projectsData from "@/data/projects.json";

const processSteps = [
  {
    step: "01 — Plan",
    title: "Scope & estimate",
    description: "Site review, budget and a fixed schedule before anything is signed.",
  },
  {
    step: "02 — Design",
    title: "Engineer & permit",
    description: "Drawings, value engineering and permits handled in-house.",
  },
  {
    step: "03 — Build",
    title: "Construct & report",
    description: "Weekly cost, quality and safety reports from one dedicated civil lead.",
  },
  {
    step: "04 — Handover",
    title: "Commission & support",
    description: "Snag-free handover with a certified ten-year structural warranty.",
  },
];

const faqs = [
  {
    q: "How do I get an estimate for my project?",
    a: "Share your plot dimensions, location in Indore, and requirements through our quick estimate form or call our civil estimating desk at +91 88188 79126. We conduct a preliminary site inspection and provide a transparent, locked BOQ within 5 business days.",
  },
  {
    q: "How does Shivom Builder prevent cost overruns and delays?",
    a: "We work on a 100% Locked Bill of Quantities (BOQ). Every material grade, plumbing fixture, steel brand, and finish is explicitly documented and priced before groundbreaking. You only pay for verified milestones—zero sudden price escalations.",
  },
  {
    q: "Which areas in Indore do you construct residential villas and duplexes?",
    a: "We actively build across all prime residential corridors in Indore, including Nipania, AB Bypass Road, Super Corridor, Vijay Nagar, Mahalaxmi Nagar, CAT Road, Bicholi Mardana, and Rau.",
  },
  {
    q: "Do you handle Indore municipal sanctions and building permissions?",
    a: "Yes. Our turnkey service includes complete liaison for Indore Municipal Corporation (IMC) building plan approvals, structural stability certificates, and utility connection clearances.",
  },
  {
    q: "What warranties and structural guarantees does Shivom Builder provide?",
    a: "All our residential RCC structures come with a 10-year structural warranty, certified anti-termite treatment warranty, and a 1-year complimentary defect liability coverage on all plumbing and electrical fittings.",
  },
];

const serviceIcons: Record<string, React.ReactNode> = {
  "01": (
    <svg className="w-5 h-5 text-[#ff2600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M3 9h6M3 15h6" />
    </svg>
  ),
  "02": (
    <svg className="w-5 h-5 text-[#ff2600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  "03": (
    <svg className="w-5 h-5 text-[#ff2600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  "04": (
    <svg className="w-5 h-5 text-[#ff2600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="14" height="14" rx="1" />
      <rect x="7" y="7" width="14" height="14" rx="1" />
    </svg>
  ),
};

const services = [
  {
    num: "01",
    stage: "Plan",
    title: "Floor Plan",
    summary: "Planning a floor is the first step in building the floor. And we like to be good at each step!",
    href: "/services",
    image: "/images/projects/stage-01-map.jpg",
    type: "floorplan",
    badge: "CAD DRAFTING",
  },
  {
    num: "02",
    stage: "Elevation",
    title: "Elevation",
    summary: "When people say first impression matters, I think about elevations.",
    href: "/services",
    image: "/images/projects/stage-02-design.jpg",
    video: "/videos/house-construction.mp4",
    type: "video",
    badge: "3D ELEVATION",
  },
  {
    num: "03",
    stage: "Construction",
    title: "Construction",
    summary: "How would you construct if you won't dream? So, you continue to dream, and we will continue to construct.",
    href: "/services",
    image: "/images/projects/stage-03-structure.jpg",
    video: "/videos/construction-frames.mp4",
    type: "video",
    badge: "SITE REEL",
  },
  {
    num: "04",
    stage: "Design",
    title: "Architectural Design",
    summary: "We specialize in innovative design concepts that blend functionality with aesthetic appeal.",
    href: "/services",
    image: "/images/projects/stage-04-lavish.jpg",
    video: "/videos/construction-aerial.mp4",
    type: "video",
    badge: "AERIAL VILLA",
  },
];

const newsArticles = [
  {
    id: "news-1",
    category: "Safety",
    title: "How we hit zero lost-time incidents across 85+ active construction sites",
    date: "Oct 24, 2024",
    readTime: "4 min read",
    image: "/images/hero/architect-craft.jpg",
  },
  {
    id: "news-2",
    category: "Architecture",
    title: "Designing for Daylight: Modern Courtyard Villas in Central India",
    date: "Nov 12, 2024",
    readTime: "4 min read",
    image: "/images/projects/project-02.jpg",
  },
  {
    id: "news-3",
    category: "Insights",
    title: "Pre-construction: Where Most Luxury Home Budgets Are Won or Lost",
    date: "Dec 08, 2024",
    readTime: "6 min read",
    image: "/images/projects/project-03.jpg",
  },
];



export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimateData, setEstimateData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "Luxury Residential Villa",
    message: "",
  });

  const handleEstimateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f48a0e88-4505-4a78-8752-50537216c97c",
          subject: `New Cost Estimate Request from ${estimateData.name} — Shivom Builders`,
          from_name: "Shivom Builders Website",
          name: estimateData.name,
          phone: estimateData.phone,
          location: estimateData.location || "Indore",
          project_type: estimateData.projectType,
          requirements: estimateData.message || "Cost estimate requested.",
        }),
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white text-[#131313] selection:bg-[#ff2600] selection:text-white">
      {/* ====================================================================
          SECTION 01: HERO SECTION
          Exact STRUKT metrics:
          hero => padding: 10px, bg: #ffffff
          heroFrame => height: ~728px (min-h-[calc(100vh-20px)]), padding: 150px 26px 0px, border-radius: 10px, bg: #131313
          heroTitle => width: 900px, 90px Switzer weight 500, letter-spacing: -4.5px, line-height: 88.2px
          talkCard => width: 330px, height: 165.6px, border-radius: 10px, bg: #ffffff (White!)
          heroFacts => width: 1335px, height: 73.6px, padding: 18px 0px 40px
          ruler => height: 14px
         ==================================================================== */}
      <section data-framer-name="Hero" className="bg-white p-[10px] relative z-20">
        <div
          data-framer-name="Hero Frame"
          className="relative h-[calc(100vh-20px)] max-h-[880px] min-h-[580px] rounded-[10px] overflow-hidden flex flex-col justify-between pt-[105px] sm:pt-[115px] lg:pt-[120px] pb-0 text-white bg-[#0e0e0e]"
        >
          {/* Full-bleed Cinematic Construction Video Background (herobanner.mp4) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/hero/after.png"
              className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.92] scale-[1.02]"
            >
              <source src="/images/hero/herobanner.mp4" type="video/mp4" />
              <source src="/videos/herobanner.mp4" type="video/mp4" />
            </video>
            {/* Left-to-Right 100% to 0% gradient overlay: Left side 100% dark for typography contrast, right side transparent so video is clearly visible */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0e0e0e_0%,#0e0e0e_26%,rgba(14,14,14,0.78)_48%,rgba(14,14,14,0.15)_75%,transparent_100%)] pointer-events-none" />
            {/* Subtle bottom vignette to blend seamlessly into facts bar */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent pointer-events-none" />
          </div>

          {/* Hero Top: Tag & Headline (Fitted to viewport so no scroll is needed) */}
          <div data-framer-name="Hero Top" className="relative z-10 max-w-[1336px] mx-auto w-full px-6 sm:px-8">
            <motion.div
              data-framer-name="Tag Wrap"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: STRUKT_EASE }}
              className="mb-3 sm:mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/[0.12] backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-[0.08em] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600]" />
                <span>Turnkey Home Construction in Indore</span>
              </div>
            </motion.div>

            <div data-framer-name="Hero Title" className="max-w-[1100px]">
              <h1 className="font-display text-[32px] sm:text-[46px] md:text-[60px] lg:text-[76px] xl:text-[84px] font-medium tracking-[-0.045em] leading-[0.98] text-white">
                <span className="text-white/55 block sm:whitespace-nowrap">We build your home,</span>
                <span className="text-white block sm:whitespace-nowrap">dreams come true.</span>
              </h1>
            </div>
          </div>

          {/* Hero Bottom: Description, CTA Buttons & Sleek Floating Info Card */}
          <div data-framer-name="Hero Bottom" className="relative z-10 max-w-[1336px] mx-auto w-full px-6 sm:px-8 pt-4 sm:pt-6">
            <div data-framer-name="Hero Container" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-5 sm:pb-6 border-b border-white/15">
              {/* Left Column: Description & Action Buttons */}
              <motion.div
                data-framer-name="Hero Content"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: STRUKT_EASE }}
                className="max-w-[580px] flex flex-col gap-4 sm:gap-5"
              >
                <p className="font-sans text-[14px] sm:text-[15px] lg:text-[16px] text-white/85 font-normal leading-[22px] sm:leading-[24px]">
                  Shivom Builders &amp; Developers &mdash; Indore&rsquo;s trusted builders. We design your plans, get permissions, and construct your home with genuine Tata Steel &amp; UltraTech cement. 100% on-time handover.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Light Button: White bg, black text, black arrow box */}
                  <Link
                    href="/contact"
                    data-framer-name="Light"
                    className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 sm:py-2.5 rounded-[6px] bg-white hover:bg-zinc-100 text-[#131313] text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] transition-colors shadow-lg group"
                  >
                    <span>Get free cost estimate</span>
                    <div className="w-6 h-6 rounded-[4px] bg-[#000000] flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </Link>

                  {/* Glass Button: Glass blur bg, white text, white arrow box with black arrow */}
                  <Link
                    href="/projects"
                    data-framer-name="Glass"
                    className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 sm:py-2.5 rounded-[6px] bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-[15px] border border-white/20 text-white text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] transition-all shadow-lg group"
                  >
                    <span>View Indore villas</span>
                    <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#000000] transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Sleek Floating Information Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: STRUKT_EASE }}
                className="w-full lg:w-auto flex justify-end"
              >
                <div
                  data-framer-name="Talk Card"
                  className="p-4 sm:p-5 rounded-[10px] bg-black/65 backdrop-blur-xl border border-white/15 text-white flex flex-col gap-2.5 min-w-[280px] sm:min-w-[320px] shadow-2xl hover:border-white/30 transition-all"
                >
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/15">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff2600] animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#ff2600] font-semibold">
                        Free Consultation
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-white/50">Indore, MP</span>
                  </div>

                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-white/60 block mb-1">
                      Direct Civil Engineer Desk
                    </span>
                    <a
                      href="tel:+918818879126"
                      className="font-mono text-[16px] sm:text-[17px] font-bold text-white hover:text-[#ff2600] transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#ff2600]" />
                      <span>+91 88188 79126</span>
                    </a>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span>100% Sanctioned IMC Plans</span>
                    <Link
                      href="/contact"
                      className="w-6 h-6 rounded-[4px] bg-[#ff2600] text-white flex items-center justify-center hover:bg-[#e02200] transition-colors"
                      title="Book an appointment"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Facts Row: 4 Columns with Dividers */}
            <div data-framer-name="Hero Facts" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-3 sm:pt-4 pb-4 sm:pb-5">
              <div className="flex items-baseline gap-2">
                <span className="text-[12px] font-mono text-white/50 uppercase tracking-[0.04em]">EST.</span>
                <span className="font-mono text-[12px] font-medium text-white">2016</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[12px] font-mono text-white/50 uppercase tracking-[0.04em]">100+</span>
                <span className="font-mono text-[12px] text-white/80">Projects delivered</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[12px] font-mono text-white/50 uppercase tracking-[0.04em]">150K+</span>
                <span className="font-mono text-[12px] text-white/80">Sq ft built</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[12px] font-mono text-white/50 uppercase tracking-[0.04em]">ISO</span>
                <span className="font-mono text-[12px] text-white/80">9001 · 45001 certified</span>
              </div>
            </div>

            {/* Ruler Pattern along bottom border: Exact STRUKT height 14px */}
            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: EMERGE BLOCK
          Exact STRUKT metrics:
          emerge => max-w-[1336px], bg: #ffffff
          logos => padding: 90px 26px
          about => padding: 60px 26px 140px
          metricCard => width: 519.4px, height: 608px, padding: 32px, radius: 10px, bg: #f2f2f2
          imageCard => width: 748.8px, height: 608px, padding: 20px, radius: 10px
          quoteCard => width: 710.8px, height: 146.3px, padding: 28px, radius: 10px, bg: rgba(30, 30, 30, 0.4)
         ==================================================================== */}
      <Emerge className="bg-white">
        <div data-framer-name="Emerge" className="max-w-[1336px] mx-auto px-6 sm:px-8">
          {/* Certified Brand Logos Ticker (Original Logos for Tata Steel, UltraTech, Ambuja, Kajaria, Asian Paints, etc.) */}
          <BrandLogosTicker />

          {/* About Section: padding 60px 0px 140px */}
          <div data-framer-name="About" className="pt-[60px] pb-[140px]">
            <div data-framer-name="About Head" className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 pb-12">
              <div data-framer-name="Tag Col" className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] font-medium">
                  About us
                </div>
              </div>
              <div data-framer-name="Heading Col" className="lg:col-span-9">
                <ScrollTextReveal
                  text="At Shivom Builders & Developers, we craft spaces that inspire and endure. With decades of construction excellence in Indore, we combine trusted engineering, integrity, and genuine materials to build homes that stand the test of time."
                  className="font-display text-[26px] sm:text-[32px] md:text-[38px] font-medium tracking-[-0.035em] md:leading-[1.25] max-w-[860px]"
                  theme="light"
                />
              </div>
            </div>

            {/* Page Grid: Metric Card (519.4x608px) + Image Card (748.8x608px) */}
            <div data-framer-name="Page Grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
              {/* Left Column: Metric Card (Exact STRUKT: 519.4px, height 608px, padding 32px, radius 10px, bg #f2f2f2) */}
              <div
                data-framer-name="Metric Card"
                className="lg:col-span-5 p-[32px] rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4] flex flex-col justify-between min-h-[608px]"
              >
                <div>
                  <div data-framer-name="Metric Head" className="flex items-center justify-between pb-6 border-b border-[#e4e4e4]">
                    <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#131313] font-medium">
                      On-time handover
                    </span>
                    <span className="text-[12px] font-mono text-[#6e6e6e]">2016 — 2026</span>
                  </div>

                  <div data-framer-name="Metric Number" className="py-8 flex items-baseline gap-1">
                    <span className="font-display text-[72px] sm:text-[84px] font-medium text-[#131313] tracking-[-0.05em] leading-none">
                      <AnimatedCounter to={98} />
                    </span>
                    <span className="font-display text-[36px] font-medium text-[#ff2600] leading-none">%</span>
                  </div>

                  {/* Compare Progress Bars */}
                  <div data-framer-name="Metric Compare" className="space-y-4 pb-8 border-b border-[#e4e4e4]">
                    <div>
                      <div className="flex justify-between text-[12px] font-mono mb-1.5 text-[#131313]">
                        <span>Shivom — 49 of last 50</span>
                        <span className="font-bold text-[#ff2600]">98%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#e4e4e4] overflow-hidden">
                        <motion.div
                          className="h-full bg-[#ff2600] rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "98%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: STRUKT_EASE }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[12px] font-mono mb-1.5 text-[#6e6e6e]">
                        <span>Industry average</span>
                        <span>61%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#e4e4e4] overflow-hidden">
                        <motion.div
                          className="h-full bg-zinc-400 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "61%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2, ease: STRUKT_EASE }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Metric Stats */}
                  <div data-framer-name="Metric Stats" className="grid grid-cols-3 gap-4 py-6 border-b border-[#e4e4e4]">
                    <div>
                      <p className="font-display text-[26px] sm:text-[30px] font-medium text-[#131313] flex items-baseline">
                        <AnimatedCounter to={100} />
                        <span className="text-[#ff2600]">+</span>
                      </p>
                      <p className="text-[12px] font-mono text-[#6e6e6e] mt-1">Delivered</p>
                    </div>
                    <div>
                      <p className="font-display text-[26px] sm:text-[30px] font-medium text-[#ff2600]">0</p>
                      <p className="text-[12px] font-mono text-[#6e6e6e] mt-1">Cost Overruns</p>
                    </div>
                    <div>
                      <p className="font-display text-[26px] sm:text-[30px] font-medium text-[#131313] flex items-baseline">
                        <AnimatedCounter to={150} />
                        <span>K+</span>
                      </p>
                      <p className="text-[12px] font-mono text-[#6e6e6e] mt-1">Sq Ft Built</p>
                    </div>
                  </div>
                </div>

                <div data-framer-name="Metric Bottom" className="pt-6">
                  <p className="font-sans text-[16px] text-[#4a4a4a] leading-[22.4px] mb-6">
                    One accountable team from pre-construction to handover. Our civil engineers own cost, quality and safety — and report on all three weekly.
                  </p>
                  <Link
                    href="/about"
                    data-framer-name="Dark"
                    className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-[6px] bg-[#000000] hover:bg-zinc-800 text-white text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] transition-colors group"
                  >
                    <span>Learn more</span>
                    <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#000000] transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Column: Image Card (Exact STRUKT: 748.8px, height 608px, padding 20px, radius 10px) */}
              <div
                data-framer-name="Image Card"
                className="lg:col-span-7 relative min-h-[608px] rounded-[10px] overflow-hidden border border-[#e4e4e4] flex flex-col justify-end p-[20px]"
              >
                {/* Looping Construction Video from Shivom Reel */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/about/shivom-reel-hero.jpg"
                  className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.88]"
                >
                  <source src="/videos/villa-construction.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Floating Quote Card (Exact STRUKT: 710.8x146.3px, padding 28px, radius 10px, bg rgba(30,30,30,0.4), backdrop blur 20px) */}
                <div
                  data-framer-name="Quote Card"
                  className="relative z-10 p-[28px] rounded-[10px] bg-[rgba(30,30,30,0.4)] backdrop-blur-[20px] border border-white/15 text-white w-full"
                >
                  <p className="font-display text-[20px] sm:text-[22px] font-medium leading-[28.6px] text-white">
                    &ldquo;A building is only as good as the plan behind it. We obsess over the plan, so the build is the easy part.&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/15 text-[12px]">
                    <div>
                      <p className="font-display font-medium text-white text-[16px]">Deepak Rajak</p>
                      <p className="font-mono text-[12px] text-white/60">Owner &amp; Founder, Shivom Builder</p>
                    </div>
                    <div className="px-3 py-1 rounded-[4px] bg-white/10 text-[12px] font-mono text-white">
                      Indore, MP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Emerge>

      {/* ====================================================================
          PLOT TO VILLA INTERACTIVE TRANSFORMATION VISUALIZER (Before / After & Timelapse)
         ==================================================================== */}
      <PlotToVillaVisualizer />

      {/* ====================================================================
          SECTION 03: SERVICES SECTION
          Compact STRUKT layout with Interactive Floor Plan & Video reels
         ==================================================================== */}
      <section data-framer-name="Services" className="bg-[#f2f2f2] pt-[80px] sm:pt-[90px] pb-[80px] sm:pb-[90px]">
        <div data-framer-name="Container" className="max-w-[1336px] mx-auto px-6 sm:px-8">
          {/* Section Head: Tag, Heading, Description & Button */}
          <div data-framer-name="Section Head" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-[#e4e4e4]">
            <div data-framer-name="Head Left" className="lg:col-span-7">
              <div data-framer-name="Tag" className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
                  Services
                </span>
              </div>
              <div data-framer-name="Heading">
                <ScrollTextReveal
                  text="From groundwork to handover, one accountable team."
                  className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] md:leading-[1.12]"
                  theme="light"
                />
              </div>
            </div>

            <div data-framer-name="Head Right" className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
              <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px] max-w-sm mb-6">
                We cover the full building lifecycle in-house, so nothing gets lost between design, procurement and the site.
              </p>
              <Link
                href="/services"
                data-framer-name="Dark"
                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-[6px] bg-[#000000] hover:bg-zinc-800 text-white text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] transition-colors group shadow-sm"
              >
                <span>All services</span>
                <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#000000] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Services 4-Column Grid: Compact Height Cards with Animated Floor Plan & Looping Videos */}
          <StaggerContainer data-framer-name="Services CMS List" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[28px]">
            {services.map((svc) => (
              <StaggerItem key={svc.num}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full"
                >
                  <Link
                    href={svc.href}
                    data-framer-name="Service Card [lift]"
                    className="service-card group rounded-[10px] bg-white p-[10px] border border-[#e4e4e4] flex flex-col justify-between min-h-[440px] h-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      {/* Compact 210px Media Clip with Interactive Floor Plan or Looping Video */}
                      <div data-framer-name="Image Clip" className="relative w-full h-[210px] rounded-[4px] overflow-hidden bg-zinc-900">
                        {svc.type === "floorplan" ? (
                          <InteractiveFloorPlanPreview />
                        ) : svc.video ? (
                          <>
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="metadata"
                              poster={svc.image}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            >
                              <source src={svc.video} type="video/mp4" />
                            </video>
                            <div className="absolute top-2.5 left-2.5 z-10">
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] bg-black/80 backdrop-blur border border-white/20 text-[10px] font-mono uppercase font-semibold text-white shadow-sm">
                                {svc.num === "03" && <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600] animate-pulse" />}
                                {svc.badge}
                              </span>
                            </div>
                          </>
                        ) : (
                          <Image
                            src={svc.image}
                            alt={svc.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="service-card-img object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        )}
                      </div>

                      <div data-framer-name="Service Body" className="pt-[16px] px-[12px] pb-[12px]">
                        <div data-framer-name="Service Top" className="flex items-center justify-between text-[12px] font-mono pb-2 border-b border-[#e4e4e4] text-[#6e6e6e]">
                          <span className="font-medium text-[#ff2600]">{svc.num}</span>
                          <span>{svc.stage}</span>
                        </div>

                        <div className="flex items-center gap-2 mt-2.5 mb-1.5">
                          <div className="w-5 h-5 flex items-center justify-center text-[#ff2600] flex-shrink-0">
                            {serviceIcons[svc.num]}
                          </div>
                          <h4 data-framer-name="CMS Title" className="font-display text-[20px] font-medium tracking-[-0.02em] text-[#131313] group-hover:text-[#ff2600] transition-colors leading-[24px]">
                            {svc.title}
                          </h4>
                        </div>

                        <p data-framer-name="CMS Summary" className="font-sans text-[14px] text-[#4a4a4a] leading-[21px]">
                          {svc.summary}
                        </p>
                      </div>
                    </div>

                    <div data-framer-name="Service Footer" className="pt-2.5 px-[12px] pb-1 border-t border-[#e4e4e4] flex items-center justify-between">
                      <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#131313] font-medium group-hover:text-[#ff2600] transition-colors">
                        Explore
                      </span>
                      <div className="service-card-arrow w-7 h-7 rounded-full bg-[#131313] group-hover:bg-[#ff2600] flex items-center justify-center text-white transition-colors duration-200">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: SELECTED PROJECTS & PROCESS (Dark #131313 Section)
          Exact STRUKT metrics:
          projects => padding: 140px 26px, bg: #131313
          featureCard => width: 766.9px, height: 788px, featureImage: 766.9x704px, radius: 10px
          columnCard => width: 568.1px, height: 384px, columnImage: 568.1x300px, radius: 10px
          process => padding: 40px 0px 0px, height: 258.4px
          processStep => width: 323.8px, height: 140.8px, padding: 22px 0px 0px, border-top: 1px solid rgba(255,255,255,0.15)
         ==================================================================== */}
      <section data-framer-name="Projects" className="bg-[#131313] text-white pt-[140px] pb-[140px]">
        <div data-framer-name="Container" className="max-w-[1336px] mx-auto px-6 sm:px-8">
          {/* Projects Section Head */}
          <div data-framer-name="Section Head" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-white/10">
            <div data-framer-name="Head Left" className="lg:col-span-7">
              <div data-framer-name="Tag" className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-white/15 font-medium">
                  Selected projects
                </span>
              </div>
              <div data-framer-name="Heading">
                <ScrollTextReveal
                  text="Built to spec, on time and on budget."
                  className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] md:leading-[1.12]"
                  theme="dark"
                />
              </div>
            </div>

            <div data-framer-name="Head Right" className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
              <p className="font-sans text-[16px] text-zinc-400 leading-[23.2px] max-w-sm mb-6">
                A few recent builds across luxury residential villas, independent duplexes, and commercial landmarks in Indore.
              </p>
              <Link
                href="/projects"
                data-framer-name="Light"
                className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-[6px] bg-white hover:bg-zinc-100 text-[#131313] text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] transition-colors shadow-sm group"
              >
                <span>View all projects</span>
                <div className="w-6 h-6 rounded-[4px] bg-[#000000] flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Project Showcase: Feature Card Left (766.9x788px) + 2 Stacked Cards Right (568.1x384px) */}
          <div data-framer-name="Project Showcase" className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] pt-[40px]">
            {/* Feature Project Card: Image height 704px */}
            <SlideUp className="lg:col-span-7">
              <Link
                href="/projects/grand-aranya-luxury-villa"
                data-framer-name="Project Card Feature"
                className="group block rounded-[10px] overflow-hidden"
              >
                <div data-framer-name="Image Clip" className="relative w-full h-[500px] sm:h-[620px] lg:h-[704px] rounded-[10px] overflow-hidden bg-zinc-900 mb-4">
                  <Image
                    src={projectsData[0].heroImage}
                    alt={projectsData[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-[4px] bg-black/70 backdrop-blur text-white text-[12px] font-mono uppercase font-medium tracking-wider">
                      Featured
                    </span>
                  </div>
                </div>

                <div data-framer-name="Project Meta" className="flex items-center justify-between pt-1">
                  <div data-framer-name="Meta Left">
                    <h3 data-framer-name="CMS Title" className="font-display text-[26px] sm:text-[30px] font-medium tracking-tight text-white group-hover:text-[#ff2600] transition-colors leading-[36px]">
                      {projectsData[0].title}
                    </h3>
                    <div data-framer-name="Info" className="flex items-center gap-3 text-[12px] font-mono text-zinc-400 mt-1">
                      <span>{projectsData[0].location}</span>
                      <span>&middot;</span>
                      <span>{projectsData[0].category}</span>
                    </div>
                  </div>
                  <div data-framer-name="CMS Feature Year" className="text-[12px] font-mono text-zinc-400 font-medium">
                    {projectsData[0].year}
                  </div>
                </div>
              </Link>
            </SlideUp>

            {/* 2 Stacked Cards Right: Each Image height 300px */}
            <div data-framer-name="Project Column CMS List" className="lg:col-span-5 flex flex-col justify-between gap-[20px]">
              {projectsData.slice(1, 3).map((proj, idx) => (
                <SlideUp key={proj.id} delay={0.15 * (idx + 1)}>
                  <Link
                    href={`/projects/${proj.slug}`}
                    data-framer-name="Project Card"
                    className="group block rounded-[10px] overflow-hidden"
                  >
                    <div data-framer-name="Image Clip" className="relative w-full h-[280px] sm:h-[300px] rounded-[10px] overflow-hidden bg-zinc-900 mb-3">
                      <Image
                        src={proj.heroImage}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div data-framer-name="Project Meta" className="flex items-center justify-between pt-1">
                      <div data-framer-name="Meta Left">
                        <h4 data-framer-name="CMS Title" className="font-display text-[20px] sm:text-[22px] font-medium tracking-tight text-white group-hover:text-[#ff2600] transition-colors leading-[26.4px]">
                          {proj.title}
                        </h4>
                        <div data-framer-name="Info" className="flex items-center gap-2 text-[12px] font-mono text-zinc-400 mt-1">
                          <span>{proj.location}</span>
                          <span>&middot;</span>
                          <span>{proj.category}</span>
                        </div>
                      </div>
                      <div data-framer-name="CMS Column Year" className="text-[12px] font-mono text-zinc-400 font-medium">
                        {proj.year}
                      </div>
                    </div>
                  </Link>
                </SlideUp>
              ))}
            </div>
          </div>

          {/* Process Section directly inside Projects Container (Exact STRUKT: padding 40px 0px 0px, top border divider lines) */}
          <div data-framer-name="Process" className="pt-[60px] mt-[60px] border-t border-white/10">
            <SlideUp>
              <div data-framer-name="Tag" className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-white/15 font-medium">
                  How we build
                </span>
              </div>
            </SlideUp>

            <StaggerContainer data-framer-name="Process Grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {processSteps.map((step) => (
                <StaggerItem
                  key={step.step}
                  data-framer-name="Process Step"
                  className="pt-[22px] border-t border-white/15 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <span className="font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-[#ff2600] block mb-2">
                      {step.step}
                    </span>
                    <h4 className="font-display text-[20px] sm:text-[22px] font-medium text-white mb-2 tracking-tight leading-[26.4px]">
                      {step.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[16px] text-white/65 leading-[23.2px]">
                    {step.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ====================================================================
          GOOGLE REVIEWS SECTION (4.9 Rating in Indore)
         ==================================================================== */}
      <GoogleReviews />

      {/* ====================================================================
          INSTAGRAM FEED SHOWCASE (@shivom.builders)
         ==================================================================== */}
      <InstagramFeed />

      {/* ====================================================================
          SECTION 05: FAQ SECTION
          Exact STRUKT metrics:
          faq => padding: 140px 26px, bg: #ffffff
          faqLeft => width: 500px
          faqList => width: 775px
         ==================================================================== */}
      <section data-framer-name="FAQ" className="bg-white pt-[140px] px-[26px] pb-[140px]">
        <div data-framer-name="Container" className="max-w-[1355px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* FAQ Left Column (width 500px) */}
            <div data-framer-name="FAQ Left" className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div data-framer-name="Tag" className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
                    Help &amp; support
                  </span>
                </div>
                <div data-framer-name="Heading">
                  <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
                    Questions,{" "}
                    <span className="text-[#6e6e6e]">answered.</span>
                  </h2>
                </div>
                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px] mt-6 max-w-sm">
                  Not answered here? Our civil estimating team replies within one business day.
                </p>
              </div>

              {/* Direct Call Card */}
              <div className="mt-10 p-5 rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4]">
                <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-1 font-medium">
                  Direct Engineering Desk
                </span>
                <p className="font-mono text-[12px] text-[#6e6e6e] mb-1">Call us directly</p>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="font-display text-[20px] sm:text-[22px] font-medium text-[#131313] hover:text-[#ff2600] transition-colors"
                >
                  {companyData.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* FAQ Right Column (width 775px) */}
            <div data-framer-name="FAQ List" className="lg:col-span-7 flex flex-col divide-y divide-[#e4e4e4] border-y border-[#e4e4e4]">
              {faFAQsList(openFaq, setOpenFaq)}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 06: NEWS SECTION
          Exact STRUKT metrics:
          news => padding: 140px 26px, bg: #f2f2f2
          newsCard => width: 438.3px, height: 484.4px, padding: 10px, radius: 10px, bg: #ffffff
          newsImageClip => width: 418.3px, height: 280px, radius: 4px
         ==================================================================== */}
      <section data-framer-name="News" className="bg-[#f2f2f2] pt-[140px] pb-[140px]">
        <div data-framer-name="Container" className="max-w-[1336px] mx-auto px-6 sm:px-8">
          {/* News Head */}
          <div data-framer-name="News Head" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#e4e4e4]">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
                  Recent news
                </span>
              </div>
              <ScrollTextReveal
                text="From the site."
                className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]"
                theme="light"
              />
            </div>

            <Link
              href="/about#news"
              data-framer-name="Dark"
              className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-[6px] bg-[#000000] hover:bg-zinc-800 text-white text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] transition-colors group shadow-sm self-start sm:self-auto"
            >
              <span>View all</span>
              <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#000000] transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>
          </div>

          {/* News 3-Column Grid: Cards (438.3x484.4px, Image height 280px, padding 10px, radius 10px) */}
          <StaggerContainer data-framer-name="News CMS List" className="grid grid-cols-1 md:grid-cols-3 gap-[20px] pt-[40px]">
            {newsArticles.map((article) => (
              <StaggerItem key={article.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  data-framer-name="News Card [lift]"
                  className="group flex flex-col justify-between p-[10px] rounded-[10px] bg-white border border-[#e4e4e4] hover:border-[#ff2600]/50 shadow-sm hover:shadow-md transition-all duration-300 min-h-[484px] h-full"
                >
                  <div>
                    <div
                      data-framer-name="News Image [parallax]"
                      className="relative w-full h-[280px] rounded-[4px] overflow-hidden mb-5 bg-zinc-900"
                    >
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span data-framer-name="CMS News Category" className="px-2.5 py-1 rounded-[4px] bg-white/95 backdrop-blur text-[#131313] font-mono text-[12px] uppercase font-medium tracking-wider">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div data-framer-name="News Meta" className="flex items-center gap-2 text-[12px] font-mono text-[#6e6e6e] mb-2 px-1">
                      <span data-framer-name="CMS News Date">{article.date}</span>
                      <span>&middot;</span>
                      <span data-framer-name="CMS News Read time">{article.readTime}</span>
                    </div>

                    <h3 data-framer-name="CMS Title" className="font-display text-[20px] sm:text-[22px] font-medium text-[#131313] group-hover:text-[#ff2600] transition-colors leading-[26.4px] tracking-[-0.02em] px-1">
                      {article.title}
                    </h3>
                  </div>

                  <div data-framer-name="News Footer" className="pt-3 px-1 pb-1 border-t border-[#e4e4e4] flex items-center justify-between">
                    <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#131313] font-medium group-hover:text-[#ff2600] transition-colors">
                      Read article
                    </span>
                    <div data-framer-name="News Arrow" className="w-7 h-7 rounded-full bg-[#131313] group-hover:bg-[#ff2600] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====================================================================
          SECTION 07: STRUKT CTA BLOCK
          Exact STRUKT metrics:
          cta => padding: 140px 26px, bg: #ffffff
          ctaBlock => width: 1355px, height: 653px, padding: 70px 70px 84px, radius: 10px, bg: #131313
          ctaLeft => width: 553.7px
         ==================================================================== */}
      <section data-framer-name="CTA" className="bg-white pt-[140px] pb-[140px]">
        <div data-framer-name="Container" className="max-w-[1336px] mx-auto px-6 sm:px-8">
          <div data-framer-name="CTA Block" className="p-[40px] sm:p-[70px] lg:p-[70px_70px_84px] rounded-[10px] bg-[#131313] text-white shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: CTA Intro & Direct Contacts (width 553.7px) */}
              <div data-framer-name="CTA Left" className="lg:col-span-6 flex flex-col justify-between">
                <div data-framer-name="CTA Intro">
                  <div data-framer-name="Tag" className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[#ff2600] font-mono text-[12px] uppercase tracking-[0.04em] mb-4 font-medium">
                    Request an estimate
                  </div>
                  <h2 data-framer-name="Heading" className="font-display text-[40px] sm:text-[54px] lg:text-[74px] font-medium tracking-[-0.04em] text-white leading-[1.0]">
                    Have a project? <br />
                    <span className="text-zinc-400 font-normal">Let&apos;s build it.</span>
                  </h2>
                  <p className="mt-6 font-sans text-[18px] text-white/70 leading-[26px] max-w-md">
                    Tell us about your plot, timeline and budget. You&apos;ll get a clear, fixed estimate within 5 business days — zero obligation.
                  </p>
                </div>

                {/* Direct Contacts List */}
                <div data-framer-name="CTA Contacts" className="pt-8 border-t border-white/10 mt-8 space-y-3">
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="flex items-center justify-between p-3.5 rounded-[6px] bg-white/[0.04] border border-white/10 hover:border-[#ff2600] hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[4px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[12px] font-mono uppercase text-zinc-400 block">Email</span>
                        <span className="text-[16px] font-display font-medium text-white group-hover:text-[#ff2600] transition-colors">
                          {companyData.contact.email}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="flex items-center justify-between p-3.5 rounded-[6px] bg-white/[0.04] border border-white/10 hover:border-[#ff2600] hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[4px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[12px] font-mono uppercase text-zinc-400 block">Call</span>
                        <span className="text-[16px] font-display font-medium text-white group-hover:text-[#ff2600] transition-colors">
                          {companyData.contact.phoneDisplay}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Right Column: Estimate Form with 1px Expanding Underline */}
              <div className="lg:col-span-6 bg-white/[0.03] p-6 sm:p-8 rounded-[8px] border border-white/10">
                {formSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-[22px] font-medium text-white mb-2">Estimate Request Received</h3>
                    <p className="text-[16px] text-zinc-300 max-w-sm">
                      Our lead civil engineer will review your requirements and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleEstimateSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                        Full Name *
                      </label>
                      <div className="framer-form-input-wrapper pb-1">
                        <input
                          type="text"
                          required
                          value={estimateData.name}
                          onChange={(e) => setEstimateData({ ...estimateData, name: e.target.value })}
                          placeholder="e.g. Vikramaditya Rathore"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Phone Number *
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <input
                            type="tel"
                            required
                            value={estimateData.phone}
                            onChange={(e) => setEstimateData({ ...estimateData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Project Location
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <input
                            type="text"
                            value={estimateData.location}
                            onChange={(e) => setEstimateData({ ...estimateData, location: e.target.value })}
                            placeholder="e.g. Nipania, Indore"
                            className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                        Project Type
                      </label>
                      <div className="framer-form-input-wrapper pb-1">
                        <select
                          value={estimateData.projectType}
                          onChange={(e) => setEstimateData({ ...estimateData, projectType: e.target.value })}
                          className="w-full bg-[#131313] border-b border-white/20 py-2 text-[16px] text-white focus:outline-none"
                        >
                          <option value="Luxury Residential Villa">Luxury Residential Villa</option>
                          <option value="Independent Duplex Bungalow">Independent Duplex Bungalow</option>
                          <option value="Commercial Complex / Arcade">Commercial Complex / Arcade</option>
                          <option value="Turnkey Architectural Interiors">Turnkey Architectural Interiors</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                        Plot Size &amp; Requirements
                      </label>
                      <div className="framer-form-input-wrapper pb-1">
                        <textarea
                          rows={3}
                          value={estimateData.message}
                          onChange={(e) => setEstimateData({ ...estimateData, message: e.target.value })}
                          placeholder="Plot dimensions, floors planned, or key construction preferences..."
                          className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-framer-name="Default"
                      className="w-full py-3 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] disabled:opacity-60 text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg group"
                    >
                      <span>{isSubmitting ? "Sending to Estimating Desk..." : "Submit Estimate Request"}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function faFAQsList(openFaq: number | null, setOpenFaq: React.Dispatch<React.SetStateAction<number | null>>) {
  return faqs.map((faq, index) => {
    const isOpen = openFaq === index;
    return (
      <div key={index} className="py-5">
        <button
          onClick={() => setOpenFaq(isOpen ? null : index)}
          className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
        >
          <span className="font-display text-[20px] sm:text-[22px] font-medium text-[#131313] group-hover:text-[#ff2600] transition-colors tracking-tight leading-[26.4px]">
            {faq.q}
          </span>
          <div className="w-7 h-7 rounded-full bg-[#f2f2f2] group-hover:bg-[#ff2600] group-hover:text-white flex items-center justify-center text-[#131313] transition-colors flex-shrink-0">
            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="faq-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: STRUKT_EASE }}
              className="overflow-hidden"
            >
              <div className="pt-3 pb-2 pr-8">
                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px]">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  });
}
