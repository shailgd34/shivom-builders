"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Allow instant bypass via query param (e.g. for testing/screenshots)
    if (typeof window !== "undefined" && window.location.search.includes("noload")) {
      setLoading(false);
      return;
    }

    // Only show full loader on initial load per session
    const hasLoaded = sessionStorage.getItem("shivom_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Fast, smooth realistic counter interpolation over ~1.1s
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 6;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          try { sessionStorage.setItem("shivom_loaded", "true"); } catch {}
        }, 200);
      } else {
        setProgress(current);
      }
    }, 40);

    // Guaranteed safety auto-complete after 1.1s
    const safety = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => {
      clearInterval(interval);
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="cinematic-loader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] bg-[#0c0c0c] text-white flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Top Row: Brand & Location */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2600] animate-ping" />
              <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-white font-medium">
                Shivom Builders &amp; Developers
              </span>
            </div>
            <span className="font-mono text-[11px] text-white/50 uppercase tracking-[0.1em]">
              Indore &middot; Est. 2016
            </span>
          </div>

          {/* Center: Cinematic Slogan & Large Counter */}
          <div className="relative z-10 max-w-[1200px] mx-auto w-full py-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ff2600] mb-3">
                  Architectural Construction
                </p>
                <h2 className="font-display text-[32px] sm:text-[48px] md:text-[62px] font-medium tracking-tight text-white leading-[1.05]">
                  <span className="text-white/50 block">We build your home,</span>
                  <span>dreams come true.</span>
                </h2>
              </div>

              {/* Large Monospace Percentage Counter */}
              <div className="flex items-baseline">
                <span className="font-mono text-[64px] sm:text-[84px] md:text-[104px] font-bold text-white tracking-tighter leading-none">
                  {progress < 10 ? `0${progress}` : progress}
                </span>
                <span className="font-mono text-[24px] sm:text-[32px] text-[#ff2600] font-bold ml-1">
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row: 1px Progress Line & Status */}
          <div className="relative z-10 space-y-4">
            {/* Hairline Progress Track */}
            <div className="w-full h-[2px] bg-white/15 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff2600] via-[#ff6b52] to-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white/60 uppercase tracking-widest pt-1">
              <span>Turnkey Home Construction in Indore</span>
              <span>100% Genuine Materials</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
