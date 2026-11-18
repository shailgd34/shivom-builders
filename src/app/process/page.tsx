import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Process — Shivom Builders Indore | Four stages, one fixed schedule",
  description:
    "Learn how Shivom Builders executes construction projects in Indore from initial plot soil testing to final key handover with locked BOQ pricing.",
};

const stages = [
  {
    num: "01",
    phase: "Phase 1 &middot; Weeks 1–2",
    title: "Consultation, Soil Testing & Land Survey",
    desc: "Every timeless home starts with deep site comprehension. We meet directly on your plot in Indore to perform geological soil core tests, analyze solar paths for summer shading, and establish municipal boundary setback coordinates.",
    deliverable: "Comprehensive Site Feasibility Dossier & Soil Bearing Report",
    items: [
      "In-person plot walk with senior structural engineer and architect",
      "Geotechnical soil bearing capacity (SBC) laboratory report",
      "Topographical land survey verifying exact plot boundary markers",
      "Vastu compliance and directional energy assessment",
    ],
  },
  {
    num: "02",
    phase: "Phase 2 &middot; Weeks 3–5",
    title: "Architectural Drafting & 3D Visualization",
    desc: "We believe you should inhabit your home virtually before the first foundation trench is dug. Our architects craft tailored 2D working drawings, cross-sections, and photorealistic 3D front elevations alongside a line-item locked BOQ.",
    deliverable: "Complete Architectural Blueprint Set & Signed Locked BOQ Contract",
    items: [
      "Iterative 2D floor plans optimized for cross-ventilation and daylight",
      "Photorealistic daytime and twilight 3D front elevation renders",
      "Detailed structural RCC column, beam, and footing reinforcement drawings",
      "Line-item Bill of Quantities (BOQ) with guaranteed material brands",
    ],
  },
  {
    num: "03",
    phase: "Phase 3 &middot; Months 2–10",
    title: "Structural Civil Engineering & Construction",
    desc: "This is where engineering precision reigns supreme. Our full-time site supervisors manage foundation excavation, Tata Tiscon Fe-550D reinforcement tying, UltraTech M25 machine-vibrated concrete pours, and double-coat exterior plastering.",
    deliverable: "Weekly WhatsApp Milestone Photo Reports & Certified Cube Test Logs",
    items: [
      "Heavy excavation down to hard rock strata with anti-termite chemical barrier",
      "Cast-in-situ reinforced concrete footings and plinth beam casting",
      "Columns and floor slab casting with on-site concrete cube strength tests",
      "Class-A kiln-baked red brickwork with seismic lintel bands",
    ],
  },
  {
    num: "04",
    phase: "Phase 4 &middot; Months 11–12",
    title: "Finishing, Quality Audit & Handover",
    desc: "The transformation of a civil structure into an intimate luxury sanctuary. We install flooring, Gyproc false ceilings, sanitaryware fixtures, and Asian Paints Royale wall finishes, followed by a rigorous 120-point pre-handover audit.",
    deliverable: "Keys, As-Built Drawings, Structural Safety Certificate & 10-Year Warranty Dossier",
    items: [
      "Precision marble laying, wall tiling, and acoustic interior doors",
      "Concealed electrical fixtures, Schneider switches & Jaquar sanitary fittings",
      "Comprehensive 120-point snag checklist signed by lead engineer",
      "Ceremonial key handover on the exact contract date promised",
    ],
  },
];

export default function ProcessPage() {
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
              src="/images/hero/architect-craft.jpg"
              alt="Shivom Builders Execution Process"
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
                <span>Our Methodology &middot; Indore, MP</span>
              </div>
            </div>

            <div className="max-w-[960px]">
              <h1 className="font-display text-[48px] sm:text-[68px] md:text-[80px] lg:text-[90px] font-medium tracking-[-0.05em] leading-[0.98] text-white">
                <span className="text-white/55">How we build. </span>
                <span className="text-white">The 4-stage process.</span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12 pb-8 border-b border-white/15">
              <p className="font-sans text-[16px] text-white/70 font-normal leading-[23.2px] max-w-xl">
                Every scope is locked, priced and scheduled to the week before groundbreaking. Discover how our systematic civil execution eliminates surprise costs and delays.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-2 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] border border-white/20 text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-colors shadow-md group self-start lg:self-auto"
              >
                <span>Book a site review</span>
                <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#ff2600] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </Link>
            </div>

            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: STAGES BREAKDOWN
         ==================================================================== */}
      <section className="pt-[140px] px-[26px] pb-[140px] bg-white">
        <div className="max-w-[1335px] mx-auto space-y-16">
          <div className="pb-10 border-b border-[#e4e4e4]">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-4">
              Execution Roadmap
            </span>
            <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
              From soil testing to keys, <br />
              <span className="text-[#6e6e6e]">transparent at every step.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4] p-[28px] sm:p-[40px] shadow-sm"
              >
                <div className="flex items-center justify-between text-[12px] font-mono text-[#6e6e6e] pb-4 border-b border-[#e4e4e4]">
                  <span className="font-medium text-[#ff2600] text-[16px]">{stage.num}</span>
                  <span dangerouslySetInnerHTML={{ __html: stage.phase }} />
                </div>

                <div className="pt-6">
                  <h3 className="font-display text-[26px] sm:text-[32px] font-medium text-[#131313] tracking-tight mb-3">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px] max-w-3xl mb-8">
                    {stage.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {stage.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[14px] text-[#131313]">
                        <div className="w-5 h-5 rounded-full bg-white border border-[#e4e4e4] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#ff2600]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-[6px] bg-white border border-[#e4e4e4] flex items-center gap-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#ff2600] font-medium whitespace-nowrap">
                      Key Deliverable:
                    </span>
                    <span className="text-[13px] font-medium text-[#131313]">
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CTA BLOCK
         ==================================================================== */}
      <CTASection
        title="Ready to begin?"
        subtitle="Schedule a free site review."
        intro="Our senior civil engineer will visit your plot in Indore to assess soil, setbacks and preliminary structural feasibility."
      />
    </div>
  );
}
