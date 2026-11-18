"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/CTASection";
import BrandLogosTicker from "@/components/BrandLogosTicker";
import { SlideUp, FadeIn, StaggerContainer, StaggerItem, STRUKT_EASE } from "@/components/MotionReveal";

const servicesList = [
  {
    num: "01",
    stage: "Plan",
    title: "Floor Plan",
    desc: "Planning a floor is the first step in building the floor. And we like to be good at each step! Detailed 2D architectural layouts, room-by-room space optimization, and Vastu-compliant drafting before breaking ground.",
    image: "/images/projects/stage-01-map.jpg",
    features: [
      "2D architectural floor plans & structural layouts",
      "Vastu Shastra alignment & natural light optimization",
      "Indore Municipal Corporation (IMC) building sanction liaisons",
    ],
  },
  {
    num: "02",
    stage: "Elevation",
    title: "Elevation",
    desc: "When people say first impression matters, I think about elevations. Photo-realistic 3D elevations, exterior facade finishes, contemporary cantilever designs, and lighting geometry tailored for modern Indian luxury homes.",
    image: "/images/projects/stage-02-design.jpg",
    features: [
      "Photo-realistic 3D exterior elevations (Day & Night views)",
      "Facade material detailing: louvers, stone cladding & CNC jali",
      "Elevation structural stability and cantilever load analysis",
    ],
  },
  {
    num: "03",
    stage: "Construction",
    title: "Construction",
    desc: "How would you construct if you won't dream? So, you continue to dream, and we will continue to construct. Heavy-load RCC foundations, Grade-A TMT steel, batch-tested concrete, and end-to-end structural supervision by licensed civil engineers.",
    image: "/images/projects/stage-03-structure.jpg",
    features: [
      "Soil bearing capacity testing & column-beam RCC casting",
      "Grade-A cement, FE-550D TMT rebars & anti-termite treatment",
      "10-year certified structural warranty on civil frame",
    ],
  },
  {
    num: "04",
    stage: "Design",
    title: "Architectural Design",
    desc: "We specialize in innovative design concepts that blend functionality with aesthetic appeal. Turnkey luxury villas, Italian marble flooring, bespoke false ceilings, and turnkey interior finishes delivered ready for move-in.",
    image: "/images/projects/stage-04-lavish.jpg",
    features: [
      "Full turnkey luxury villa & duplex delivery",
      "Lavish interior finishes, ambient cove lighting & smart home wiring",
      "Zero-defect handover on fixed milestone schedules",
    ],
  },
];

const serviceFaqs = [
  {
    q: "How does Shivom ensure no cost overruns during construction?",
    a: "We produce an exhaustive line-item Bill of Quantities (BOQ) with locked material rates before ground is broken. Once the contract is executed, the price is guaranteed — any standard inflation or procurement variance is our responsibility.",
  },
  {
    q: "Do you handle building permits and municipal sanctions in Indore?",
    a: "Yes. Our in-house liaison engineering team manages all Nagar Nigam Indore clearances, building elevation sanctions, structural safety certifications, and water/electricity connection approvals from start to finish.",
  },
  {
    q: "Can I bring my own architect or interior designer?",
    a: "Absolutely. Over 40% of our projects are built in close partnership with third-party architectural practices. We act as the general contractor, coordinating trades, structural engineering, and timelines to deliver their design faithfully.",
  },
  {
    q: "What warranty and post-handover support does Shivom provide?",
    a: "Every home and commercial project we hand over includes a comprehensive structural warranty covering RCC frames, waterproofing, and MEP installations, supported by routine scheduled inspections.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/projects/project-01.jpg"
              alt="Shivom Builders Construction Engineering"
              fill
              priority
              className="object-cover object-center opacity-30 filter grayscale"
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/90 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-[1335px] mx-auto w-full">
            <div data-framer-name="Tag Wrap" className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/[0.12] backdrop-blur-md border border-white/15 text-[12px] font-mono uppercase tracking-[0.08em] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600]" />
                <span>Our Capabilities &middot; Indore, MP</span>
              </div>
            </div>

            <div className="max-w-[960px]">
              <h1 className="font-display text-[48px] sm:text-[68px] md:text-[80px] lg:text-[90px] font-medium tracking-[-0.05em] leading-[0.98] text-white">
                <span className="text-white/55">Groundwork to </span>
                <span className="text-white">handover.</span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12 pb-8 border-b border-white/15">
              <p className="font-sans text-[16px] text-white/70 font-normal leading-[23.2px] max-w-xl">
                Four services, one accountable team. Whether you need a builder for an approved architectural drawing or a design-build partner from the initial elevation, we take full responsibility for cost, schedule, and structural safety.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] border border-white/20 text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-colors shadow-md group"
                >
                  <span>Request estimate</span>
                  <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#ff2600] transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-[15px] border border-white/20 text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-all group"
                >
                  <span>View projects</span>
                  <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#000000] transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            </div>

            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* Brand Logos Ticker with Real Materials Logos */}
      <BrandLogosTicker />

      {/* ====================================================================
          SECTION 02: 4 STACKED SERVICES BREAKDOWN
         ==================================================================== */}
      <section data-framer-name="Services" className="pt-[100px] px-[26px] pb-[140px] bg-white">
        <div className="max-w-[1335px] mx-auto space-y-16">
          <div className="pb-10 border-b border-[#e4e4e4] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-4">
                Our services
              </span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
                The full building lifecycle, <br />
                <span className="text-[#6e6e6e]">in-house.</span>
              </h2>
            </div>
            <span className="text-[12px] font-mono text-[#6e6e6e]">
              (04) Certified Capabilities
            </span>
          </div>

          {/* Service Cards (Sticky Stacked Deck Effect) */}
          <div data-framer-name="Sticky Services Stack" className="relative pt-6 pb-20">
            {servicesList.map((svc, index) => (
              <div
                key={svc.num}
                style={{
                  top: `calc(90px + ${index * 28}px)`,
                  zIndex: index + 1,
                }}
                className="sticky group rounded-[14px] bg-white border border-[#e4e4e4] p-[24px] sm:p-[40px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_-4px_24px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.08)] mb-14 sm:mb-20 transition-all"
              >
                {/* Left Info Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e6e] mb-3">
                      <span className="font-semibold text-[#ff2600]">{svc.num}</span>
                      <span>&middot;</span>
                      <span className="uppercase tracking-[0.06em]">{svc.stage}</span>
                    </div>

                    <h3 className="font-display text-[28px] sm:text-[34px] font-semibold text-[#131313] tracking-tight mb-4">
                      {svc.title}
                    </h3>

                    <p className="font-sans text-[15px] sm:text-[16px] text-[#4a4a4a] leading-[24px] mb-8">
                      {svc.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-8 border-t border-[#e4e4e4] pt-6">
                      {svc.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 text-[14px] text-[#131313] font-sans">
                          <div className="w-5 h-5 rounded-full bg-white border border-[#e4e4e4] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#ff2600]">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[12.5px] font-mono uppercase tracking-[0.04em] text-[#131313] hover:text-[#ff2600] font-medium transition-colors pt-4 border-t border-[#e4e4e4]"
                  >
                    <span>Request estimate for {svc.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right Image Column */}
                <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[360px] rounded-[8px] overflow-hidden bg-zinc-900 border border-[#e4e4e4]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: PROCESS GRID (Dark Section)
         ==================================================================== */}
      <section data-framer-name="Process" className="bg-[#131313] text-white pt-[140px] px-[26px] pb-[140px]">
        <div className="max-w-[1335px] mx-auto">
          <div className="pb-14 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-white/15 font-medium mb-4">
                How we build
              </span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-white md:leading-[1.12]">
                Four stages, <br />
                <span className="text-zinc-400">one fixed schedule.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-[6px] bg-white text-[#131313] text-[12.5px] font-mono font-medium uppercase tracking-[0.02em] hover:bg-zinc-100 transition-colors shadow-sm self-start sm:self-auto group"
            >
              <span>Get an estimate</span>
              <div className="w-6 h-6 rounded-[4px] bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[40px]">
            <div className="pt-[22px] border-t border-white/15 flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-[#ff2600] block mb-2">
                  01 — Plan
                </span>
                <h4 className="font-display text-[22px] font-medium text-white mb-2 leading-[26.4px]">
                  Scope &amp; estimate
                </h4>
              </div>
              <p className="font-sans text-[16px] text-white/65 leading-[23.2px]">
                Site review, topography audit, and a fixed line-item BOQ before ground is broken.
              </p>
            </div>

            <div className="pt-[22px] border-t border-white/15 flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-[#ff2600] block mb-2">
                  02 — Mobilize
                </span>
                <h4 className="font-display text-[22px] font-medium text-white mb-2 leading-[26.4px]">
                  Permits &amp; logistics
                </h4>
              </div>
              <p className="font-sans text-[16px] text-white/65 leading-[23.2px]">
                Nagar Nigam sanctions approved, foundation materials procured, and site team mobilized.
              </p>
            </div>

            <div className="pt-[22px] border-t border-white/15 flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-[#ff2600] block mb-2">
                  03 — Build
                </span>
                <h4 className="font-display text-[22px] font-medium text-white mb-2 leading-[26.4px]">
                  Civil construction
                </h4>
              </div>
              <p className="font-sans text-[16px] text-white/65 leading-[23.2px]">
                RCC structural frame, brickwork, slab casting, and weekly milestone reporting to the client.
              </p>
            </div>

            <div className="pt-[22px] border-t border-white/15 flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="font-mono text-[12px] font-medium uppercase tracking-[0.04em] text-[#ff2600] block mb-2">
                  04 — Handover
                </span>
                <h4 className="font-display text-[22px] font-medium text-white mb-2 leading-[26.4px]">
                  Snag-free delivery
                </h4>
              </div>
              <p className="font-sans text-[16px] text-white/65 leading-[23.2px]">
                Final quality inspections, MEP testing, municipal clearance, and keys handed over on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: SERVICE FAQ ACCORDIONS
         ==================================================================== */}
      <section data-framer-name="FAQ" className="pt-[140px] px-[26px] pb-[140px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-4">
                  FAQ
                </span>
                <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
                  Choosing a service, <br />
                  <span className="text-[#6e6e6e]">simplified.</span>
                </h2>
                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px] mt-6 max-w-sm">
                  Unsure which engagement model fits your project? Our estimating engineers will walk you through the options.
                </p>
              </div>

              <div className="mt-10 p-5 rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4]">
                <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-1 font-medium">
                  Direct Line
                </span>
                <p className="font-mono text-[12px] text-[#6e6e6e] mb-1">Speak with our Chief Civil Engineer</p>
                <a
                  href="tel:+919876543210"
                  className="font-display text-[22px] font-medium text-[#131313] hover:text-[#ff2600] transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col divide-y divide-[#e4e4e4] border-y border-[#e4e4e4]">
              {serviceFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-6">
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
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 05: CTA BLOCK
         ==================================================================== */}
      <CTASection
        title="Have a project?"
        subtitle="Let's build it."
        intro="Tell us about your plot in Indore, timeline and budget. You'll get a clear, fixed estimate within 5 business days."
      />
    </div>
  );
}
