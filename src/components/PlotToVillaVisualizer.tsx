"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calendar,
  ShieldCheck,
  Building2,
  FileText,
} from "lucide-react";
import { STRUKT_EASE } from "@/components/MotionReveal";

const stages = [
  {
    step: "01",
    tag: "Day 01 — Land & Plan",
    title: "Empty Plot & 3D Vastu Design",
    description:
      "We survey your plot, test the soil, create custom 3D elevations, and get all Indore Municipal Corporation (IMC) building permissions approved.",
    image: "/images/hero/before.png",
    details: [
      "Soil bearing capacity testing & topography",
      "Vastu-compliant 3D architectural elevations",
      "IMC / Town & Country planning approvals",
      "100% locked line-item cost estimate (Zero cost escalation)",
    ],
    timeline: "Week 1 — 4",
  },
  {
    step: "02",
    tag: "Month 02 — Strong Roots",
    title: "Deep Foundation & RCC Columns",
    description:
      "Excavation and heavy RCC foundation designed for Indore's black-cotton soil using Fe-550D TMT rebar and certified UltraTech M25 ready-mix concrete.",
    image: "/images/hero/Three-Story House Under Construction-2.png",
    details: [
      "Heavy RCC column casting & moisture barriers",
      "Certified 7-day & 28-day concrete cube compression tests",
      "Anti-termite foundation chemical barrier",
      "Weekly WhatsApp photo & video site updates to owner",
    ],
    timeline: "Month 2 — 4",
  },
  {
    step: "03",
    tag: "Month 05 — The Structure",
    title: "Brickwork, Slabs & Cantilevers",
    description:
      "Floor slabs poured, red-clay brick walls constructed, double-height ceilings shaped, and premium electrical/plumbing concealed piping installed.",
    image: "/images/hero/Modern House Under Construction-3.png",
    details: [
      "High-grade fly-ash / red brick masonry",
      "Concealed Polycab fire-resistant wiring & Finolex CPVC pipes",
      "Cantilevered balconies & architectural window frames",
      "Double-coat external weatherproof plaster",
    ],
    timeline: "Month 5 — 8",
  },
  {
    step: "04",
    tag: "Month 10 — Dream Home",
    title: "Finished Luxury Villa & Key Handover",
    description:
      "Italian marble flooring, teakwood main doors, warm architectural facade lighting, deep snag-list audit, and handing over the keys to your family.",
    image: "/images/hero/after.png",
    details: [
      "Italian marble flooring & Grohe / Kohler bath fittings",
      "Asian Paints Royale luxury exterior & interior finishes",
      "Final deep cleaning & 120-point quality snag inspection",
      "10-Year certified structural warranty document handed over",
    ],
    timeline: "Month 9 — 11",
  },
];

export default function PlotToVillaVisualizer() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewMode, setViewMode] = useState<"slider" | "stages">("slider");

  // Auto-play timelapse mode
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
    }, 4200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = stages[activeStage];

  return (
    <section
      data-framer-name="Plot to Villa"
      className="bg-[#131313] text-white pt-[120px] px-[26px] pb-[140px] relative overflow-hidden"
    >
      <div className="max-w-[1335px] mx-auto">
        {/* Section Head: Simple, Indian-friendly, reassuring copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-white/10 items-end">
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-white/15 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600]" />
                From Plot to Dream Home
              </span>
            </div>
            <h2 className="font-display text-[32px] sm:text-[44px] md:text-[52px] font-medium tracking-[-0.035em] text-white leading-[1.08]">
              You bring the plot. <br />
              <span className="text-white/45">We build and hand over your luxury villa.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
            <p className="font-sans text-[16px] text-white/70 leading-[24px] max-w-md mb-6">
              No daily site running. No material theft worries. We manage drawings, IMC permissions, cement, steel, craftsmen, and hand over your ready-to-live home on a locked date.
            </p>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white/10 p-1 rounded-[6px] border border-white/15">
              <button
                onClick={() => setViewMode("slider")}
                className={`px-3.5 py-1.5 rounded-[4px] text-[12px] font-mono uppercase tracking-wider font-medium transition-all ${
                  viewMode === "slider"
                    ? "bg-white text-[#131313] shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Before / After Slider
              </button>
              <button
                onClick={() => setViewMode("stages")}
                className={`px-3.5 py-1.5 rounded-[4px] text-[12px] font-mono uppercase tracking-wider font-medium transition-all ${
                  viewMode === "stages"
                    ? "bg-white text-[#131313] shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                4-Stage Timelapse
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================
            MODE 1: INTERACTIVE BEFORE / AFTER SPLIT SLIDER
           ================================================================ */}
        {viewMode === "slider" && (
          <div className="pt-10">
            <div className="relative w-full h-[450px] sm:h-[580px] lg:h-[660px] rounded-[10px] overflow-hidden border border-white/15 bg-zinc-950 select-none">
              {/* BEFORE IMAGE (Raw Foundation / Plot Construction) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/hero/before.png"
                  alt="Raw plot and foundation stage"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3.5 py-1.5 rounded-[4px] bg-black/80 backdrop-blur border border-white/15 text-white font-mono text-[12px] uppercase font-semibold tracking-wider">
                    BEFORE: Empty Plot &amp; Foundation
                  </span>
                </div>
              </div>

              {/* AFTER IMAGE (Finished Luxury Villa) clipped by slider position */}
              <div
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <Image
                  src="/images/hero/after.png"
                  alt="Finished luxury villa handover"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute top-6 right-6 z-10 pointer-events-auto">
                  <span className="px-3.5 py-1.5 rounded-[4px] bg-[#ff2600] text-white font-mono text-[12px] uppercase font-semibold tracking-wider shadow-lg">
                    AFTER: Completed Luxury Villa
                  </span>
                </div>
              </div>

              {/* SLIDER HANDLE LINE */}
              <div
                style={{ left: `${sliderPosition}%` }}
                className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] pointer-events-none z-20 flex items-center justify-center -translate-x-1/2"
              >
                <div className="w-11 h-11 rounded-full bg-white text-[#131313] shadow-2xl flex items-center justify-center font-mono text-[11px] font-bold uppercase tracking-tighter border-2 border-[#131313]">
                  ◀ ▶
                </div>
              </div>

              {/* INVISIBLE RANGE INPUT OVERLAY FOR DRAGGING */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="Drag slider to compare empty plot and finished villa"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

              {/* Bottom Instructions / Highlights Bar */}
              <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-4 p-4 rounded-[6px] bg-black/75 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[#ff2600]" />
                  <span className="text-[13px] font-mono text-white/90">
                    Slide handle left &amp; right to see how your empty plot becomes a luxury villa
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[12px] font-mono text-zinc-400">
                  <span>Indore Municipal Sanctions Included</span>
                  <span>&middot;</span>
                  <span className="text-white font-medium">10-Year Structural Warranty</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================
            MODE 2: 4-STAGE INTERACTIVE TIMELAPSE
           ================================================================ */}
        {viewMode === "stages" && (
          <div className="pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[520px]">
              {/* Left Column: Stage Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.step}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: STRUKT_EASE }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-[4px] bg-[#ff2600] text-white text-[12px] font-mono font-semibold">
                        STAGE {current.step}
                      </span>
                      <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-wider">
                        {current.tag}
                      </span>
                      <span className="text-white/20">&middot;</span>
                      <span className="text-[12px] font-mono text-emerald-400">
                        {current.timeline}
                      </span>
                    </div>

                    <h3 className="font-display text-[28px] sm:text-[34px] font-medium text-white tracking-tight leading-[1.15]">
                      {current.title}
                    </h3>

                    <p className="font-sans text-[16px] text-white/70 leading-[24px]">
                      {current.description}
                    </p>

                    {/* Scope Checklist */}
                    <div className="pt-4 border-t border-white/10 space-y-2.5 not-italic font-normal">
                      {current.details.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-[14px] text-zinc-300 not-italic font-normal font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#ff2600] flex-shrink-0 mt-0.5" />
                          <span className="not-italic font-normal font-sans text-zinc-200 tracking-normal leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Timelapse Video Controls */}
                <div className="flex items-center gap-4 pt-8 mt-6 border-t border-white/10">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="inline-flex items-center gap-2 pl-3.5 pr-4 py-2 rounded-[6px] bg-white hover:bg-zinc-200 text-[#131313] font-mono text-[12px] uppercase font-semibold tracking-wider transition-colors"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Pause Timelapse</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play Video Timelapse</span>
                      </>
                    )}
                  </button>

                  <span className="text-[12px] font-mono text-zinc-400">
                    Auto-steps through all 4 stages
                  </span>
                </div>
              </div>

              {/* Right Column: Stage Photo with Ruler */}
              <div className="lg:col-span-7">
                <div className="relative w-full h-[380px] sm:h-[480px] rounded-[10px] overflow-hidden bg-zinc-950 border border-white/15">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.step}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.55, ease: STRUKT_EASE }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Stage Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-[4px] bg-black/80 backdrop-blur text-white font-mono text-[12px] font-semibold">
                      {current.step} / 04
                    </span>
                    <span className="px-3 py-1 rounded-[4px] bg-white/10 backdrop-blur text-white font-mono text-[12px]">
                      {current.tag}
                    </span>
                  </div>

                  {/* Ruler Pattern */}
                  <div className="absolute bottom-0 left-0 right-0 h-[14px] bg-ruler-ticks opacity-35 z-10" />
                </div>
              </div>
            </div>

            {/* Stepper Buttons Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 mt-6 border-t border-white/10">
              {stages.map((st, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={st.step}
                    onClick={() => {
                      setActiveStage(idx);
                      setIsPlaying(false);
                    }}
                    className={`p-4 rounded-[6px] border text-left transition-all ${
                      isActive
                        ? "bg-white/15 border-[#ff2600] shadow-lg"
                        : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className={isActive ? "text-[#ff2600] font-bold" : "text-zinc-400"}>
                        STAGE {st.step}
                      </span>
                      <span className="text-zinc-500">{st.timeline}</span>
                    </div>
                    <p className={`font-display text-[15px] font-medium leading-tight ${
                      isActive ? "text-white" : "text-zinc-300"
                    }`}>
                      {st.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 3 Reassuring Guarantees for Indian Homeowners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10 text-[14px]">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-[6px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600] flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="font-display font-medium text-white text-[16px]">100% Locked Cost BOQ</p>
              <p className="text-zinc-400 text-[13px] font-sans mt-0.5">
                Every material rate and finish is documented before signing. Zero surprise price hikes midway.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-[6px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600] flex-shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="font-display font-medium text-white text-[16px]">Fixed Date Handover</p>
              <p className="text-zinc-400 text-[13px] font-sans mt-0.5">
                Penalty-backed delivery timelines. 49 of our last 50 residential builds handed over on or before date.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-[6px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600] flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-display font-medium text-white text-[16px]">10-Year Civil Warranty</p>
              <p className="text-zinc-400 text-[13px] font-sans mt-0.5">
                Certified structural stability, anti-termite treatment warranty, and 1-year free defect liability support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
