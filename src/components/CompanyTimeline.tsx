"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { STRUKT_EASE } from "@/components/MotionReveal";

export interface Milestone {
  year: string;
  step: string;
  title: string;
  desc: string;
  image: string;
}

interface CompanyTimelineProps {
  milestones: Milestone[];
}

export default function CompanyTimeline({ milestones }: CompanyTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = milestones[activeIndex];
  const total = milestones.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  return (
    <section
      data-framer-name="Timeline"
      className="bg-[#131313] text-white py-[110px] px-[26px] relative overflow-hidden"
    >
      <div className="max-w-[1335px] mx-auto">
        {/* Timeline Head */}
        <div
          data-framer-name="Timeline Head"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/10"
        >
          <div data-framer-name="Head Left">
            <div data-framer-name="Tag" className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-white/15 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600]" />
                Milestones
              </span>
            </div>
            <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-white md:leading-[1.12]">
              10 years, <br />
              <span className="text-white/45">one building at a time.</span>
            </h2>
          </div>

          <div data-framer-name="Timeline Counter" className="font-mono text-[14px] text-white/50">
            <span className="text-white font-medium">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* Timeline Stage (Sticky pinned stage layout) */}
        <div
          data-framer-name="Timeline Stage"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-12 min-h-[480px]"
        >
          {/* Left Column: Timeline Copy */}
          <div data-framer-name="Timeline Copy" className="lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: STRUKT_EASE }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-mono uppercase tracking-[0.08em] text-[#ff2600] font-semibold">
                    {current.year}
                  </span>
                  <span className="text-white/30">&middot;</span>
                  <span className="text-[12px] font-mono text-white/50 uppercase tracking-[0.04em]">
                    {current.step}
                  </span>
                </div>

                <h3 className="font-display text-[28px] sm:text-[34px] font-medium text-white tracking-tight leading-[1.15]">
                  {current.title}
                </h3>

                <p className="font-sans text-[16px] text-white/70 leading-[24px] max-w-md pt-2">
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-3 pt-8 mt-6 border-t border-white/10">
              <button
                onClick={handlePrev}
                aria-label="Previous milestone"
                className="w-10 h-10 rounded-[6px] bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next milestone"
                className="w-10 h-10 rounded-[6px] bg-white hover:bg-zinc-200 text-[#131313] flex items-center justify-center transition-all group"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <span className="text-[12px] font-mono text-white/40 ml-2">
                Step through {milestones[0].year} — {milestones[total - 1].year}
              </span>
            </div>
          </div>

          {/* Right Column: Timeline Media (Image with Ruler) */}
          <div data-framer-name="Timeline Media" className="lg:col-span-7">
            <div className="relative w-full h-[360px] sm:h-[460px] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.year}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: STRUKT_EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Year badge overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-[4px] bg-black/75 backdrop-blur text-white font-mono text-[12px] font-medium">
                  {current.year}
                </span>
              </div>

              {/* Technical ruler at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[14px] bg-ruler-ticks opacity-35 z-10" />
            </div>
          </div>
        </div>

        {/* Timeline Bar (Track, Fill & Clickable Nodes) */}
        <div data-framer-name="Timeline Bar" className="pt-8 mt-4 border-t border-white/10">
          <div className="relative w-full">
            {/* Timeline Track */}
            <div
              data-framer-name="Timeline Track"
              className="relative w-full h-[2px] bg-white/15 rounded-full overflow-hidden"
            >
              <motion.div
                data-framer-name="Timeline Fill"
                className="h-full bg-[#ff2600]"
                initial={false}
                animate={{
                  width: `${(activeIndex / (total - 1)) * 100}%`,
                }}
                transition={{ duration: 0.45, ease: STRUKT_EASE }}
              />
            </div>

            {/* Timeline Nodes */}
            <div
              data-framer-name="Timeline Nodes"
              className="flex items-center justify-between mt-4"
            >
              {milestones.map((m, idx) => {
                const isActive = activeIndex === idx;
                const isPassed = activeIndex >= idx;
                return (
                  <button
                    key={m.year}
                    onClick={() => setActiveIndex(idx)}
                    data-framer-name="Timeline Node"
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      data-framer-name="Dot"
                      className={`w-3 h-3 rounded-full transition-all duration-200 mb-1.5 ${
                        isActive
                          ? "bg-[#ff2600] ring-4 ring-[#ff2600]/30 scale-125"
                          : isPassed
                          ? "bg-[#ff2600]"
                          : "bg-white/30 group-hover:bg-white/60"
                      }`}
                    />
                    <span
                      className={`text-[12px] font-mono transition-colors ${
                        isActive
                          ? "text-white font-medium"
                          : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {m.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
