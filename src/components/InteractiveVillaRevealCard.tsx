"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface InteractiveVillaRevealCardProps {
  rawImage?: string;
  finishedImage?: string;
  className?: string;
}

export default function InteractiveVillaRevealCard({
  rawImage = "/images/hero/before.png",
  finishedImage = "/images/hero/after.png",
  className = "",
}: InteractiveVillaRevealCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isInteracting, setIsInteracting] = useState(false);

  // 3D Tilt perspective values
  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const tiltX = useSpring(rawTiltX, { stiffness: 200, damping: 20 });
  const tiltY = useSpring(rawTiltY, { stiffness: 200, damping: 20 });

  const handlePointerMove = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));

    // Update slider position
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPos(percentage);

    // 3D Tilt calculation (-5deg to +5deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rawTiltX.set(-((y - centerY) / centerY) * 4);
    rawTiltY.set(((x - centerX) / centerX) * 4);

    setIsInteracting(true);
  }, [rawTiltX, rawTiltY]);

  const handlePointerLeave = useCallback(() => {
    setIsInteracting(false);
    rawTiltX.set(0);
    rawTiltY.set(0);
    // Smoothly return slider to 50%
    setSliderPos(50);
  }, [rawTiltX, rawTiltY]);

  const handleTouchTap = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.touches[0].clientX - rect.left));
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPos(percentage);
    setIsInteracting(true);
  }, []);

  return (
    <motion.div
      data-framer-name="Cinematic Villa Reveal HUD"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full sm:w-[340px] rounded-[10px] bg-black/60 backdrop-blur-[24px] border border-white/20 p-4 sm:p-5 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group/card ${className}`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between pb-3 border-b border-white/15">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2600] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2600]" />
          </span>
          <span className="font-mono text-[12px] uppercase tracking-wider text-white font-medium">
            3D Villa Reveal
          </span>
        </div>

        {/* 'VISION TO REALITY' Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#ff2600]/20 border border-[#ff2600]/40 text-[10px] font-mono uppercase tracking-[0.08em] text-[#ff6b52] font-semibold">
          <Sparkles className="w-2.5 h-2.5" />
          <span>Vision to Reality</span>
        </div>
      </div>

      {/* Interactive 3D Split-Reveal Viewport */}
      <motion.div
        ref={containerRef}
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
        onMouseLeave={handlePointerLeave}
        onTouchMove={handleTouchTap}
        onTouchStart={handleTouchTap}
        className="relative w-full h-[142px] sm:h-[150px] rounded-[8px] overflow-hidden border border-white/20 my-2 cursor-ew-resize select-none shadow-inner"
      >
        {/* Layer 1: Finished Luxury Villa Exterior (Base Full Image) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={finishedImage}
            alt="Finished luxury modern villa exterior in Indore"
            fill
            sizes="340px"
            className="object-cover object-center filter contrast-105 brightness-105"
          />
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[9px] font-mono uppercase tracking-wider text-emerald-400 border border-white/15 pointer-events-none">
            Finished Villa
          </div>
        </div>

        {/* Layer 2: Raw Construction Structure (Clipped by slider position) */}
        <div
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          className="absolute inset-0 w-full h-full transition-[clip-path] duration-75"
        >
          <Image
            src={rawImage}
            alt="Raw RCC structural concrete frame under construction"
            fill
            sizes="340px"
            className="object-cover object-center filter contrast-105 brightness-95"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[9px] font-mono uppercase tracking-wider text-amber-400 border border-white/15 pointer-events-none">
            Raw RCC Structure
          </div>
        </div>

        {/* Vertical Divider Line with Glow */}
        <div
          style={{ left: `${sliderPos}%` }}
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_24px_rgba(255,38,0,0.8)] -translate-x-1/2 pointer-events-none transition-[left] duration-75 z-10"
        >
          {/* Centered Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#131313] border-2 border-white flex items-center justify-center text-white shadow-lg">
            <span className="text-[10px] font-mono font-bold leading-none tracking-tighter">&harr;</span>
          </div>
        </div>

        {/* Subtle Hover/Tap Hint when Idle */}
        {!isInteracting && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/80 pointer-events-none border border-white/15">
            Slide &middot; Hover &middot; Tap
          </div>
        )}
      </motion.div>

      {/* Explanatory Caption */}
      <p className="font-sans text-[12px] sm:text-[12.5px] text-white/75 leading-[17px]">
        Slide or tap to witness how Shivom transforms raw RCC structural concrete into Indore&rsquo;s most lavish architectural villas.
      </p>

      {/* Consultation & Action Footer */}
      <div className="pt-3 border-t border-white/15 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
            Direct Consultation
          </span>
          <a
            href="tel:+918818879126"
            className="text-white hover:text-[#ff2600] font-mono text-[13px] font-bold tracking-tight transition-colors flex items-center gap-1.5 mt-0.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff2600]" />
            <span>+91 88188 79126</span>
          </a>
        </div>

        <Link
          href="/contact"
          className="w-8 h-8 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] flex items-center justify-center text-white transition-all hover:scale-105 shadow-md"
          aria-label="Book plot visit"
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
