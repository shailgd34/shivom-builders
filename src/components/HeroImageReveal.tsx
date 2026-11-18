"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Play, Pause, Compass, Sparkles } from "lucide-react";

interface HeroImageRevealProps {
  baseImage?: string;
  overlayImage?: string;
  videoSrc?: string;
  className?: string;
}

const constructionStages = [
  { id: "01", name: "Plot & Excavation", detail: "Soil testing & foundation trenching" },
  { id: "02", name: "RCC Pillars & Slabs", detail: "Tata Tiscon FE-550D & UltraTech casting" },
  { id: "03", name: "Architectural Elevation", detail: "Cantilevers, CNC jalis & glass facades" },
  { id: "04", name: "Luxury Villa Handover", detail: "Italian marble, turnkey move-in ready" },
];

export default function HeroImageReveal({
  baseImage = "/images/hero/hero-reveal-overlay.png", // Raw RCC concrete structural frame
  overlayImage = "/images/hero/hero-reveal-base.jpg",  // Finished luxury modern villa exterior
  videoSrc = "/videos/house-construction.mp4",        // Real residential construction cinematic video
  className = "",
}: HeroImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoMode, setIsVideoMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Smooth springs for cursor coordinates, circle radius, and 3D tilt
  const mouseX = useMotionValue(950);
  const mouseY = useMotionValue(420);
  const circleRadius = useMotionValue(270); // Visible by default on page load!

  const springX = useSpring(mouseX, { stiffness: 320, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 28 });
  const springRadius = useSpring(circleRadius, { stiffness: 260, damping: 24 });

  // 3D Tilt perspective values
  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const springTiltX = useSpring(rawTiltX, { stiffness: 120, damping: 20 });
  const springTiltY = useSpring(rawTiltY, { stiffness: 120, damping: 20 });

  const [clipStyle, setClipStyle] = useState("circle(270px at 950px 420px)");

  // Automatically cycle through construction milestones every 4.5 seconds
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % constructionStages.length);
    }, 4500);
    return () => clearInterval(stageInterval);
  }, []);

  // Set initial position based on container width
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const initialX = rect.width * 0.72;
      const initialY = rect.height * 0.46;
      mouseX.set(initialX);
      mouseY.set(initialY);
      circleRadius.set(Math.min(280, rect.width * 0.28));
    }
  }, [mouseX, mouseY, circleRadius]);

  // Update clip-path dynamically
  useEffect(() => {
    const updateClip = () => {
      const x = springX.get();
      const y = springY.get();
      const r = springRadius.get();
      setClipStyle(`circle(${Math.max(0, r)}px at ${x}px ${y}px)`);
    };

    const unsubscribeX = springX.on("change", updateClip);
    const unsubscribeY = springY.on("change", updateClip);
    const unsubscribeR = springRadius.on("change", updateClip);

    return () => {
      unsubscribeX();
      unsubscribeY();
      unsubscribeR();
    };
  }, [springX, springY, springRadius]);

  const handlePointerMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      mouseX.set(x);
      mouseY.set(y);
      circleRadius.set(290);

      // Calculate 3D tilt angles based on cursor offset from center (-3 to +3 degrees)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltY = ((x - centerX) / centerX) * 3.2;
      const tiltX = -((y - centerY) / centerY) * 3.2;

      rawTiltX.set(tiltX);
      rawTiltY.set(tiltY);
    },
    [mouseX, mouseY, circleRadius, rawTiltX, rawTiltY]
  );

  const handlePointerLeave = useCallback(() => {
    // Gracefully settle near default focal point instead of collapsing
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width * 0.72);
      mouseY.set(rect.height * 0.46);
      circleRadius.set(Math.min(270, rect.width * 0.28));
    }
    rawTiltX.set(0);
    rawTiltY.set(0);
  }, [mouseX, mouseY, circleRadius, rawTiltX, rawTiltY]);

  const toggleVideoPlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleVideoMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVideoMode((prev) => !prev);
  };

  const currentStage = constructionStages[activeStageIndex];

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Interactive 3D Home Construction Experience. Shows live construction video and completed villa exterior."
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseLeave={handlePointerLeave}
      onTouchMove={(e) => {
        if (e.touches[0]) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      className={`absolute inset-0 w-full h-full overflow-hidden bg-[#0a0a0a] isolate touch-pan-y select-none perspective-[1400px] ${className}`}
    >
      <motion.div
        style={{
          rotateX: springTiltX,
          rotateY: springTiltY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative will-change-transform transition-transform duration-150 ease-out"
      >
        {/* BASE LAYER: Cinematic Construction Video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {isVideoMode ? (
            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                animate={{
                  scale: [1.02, 1.07, 1.02],
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <video
                  ref={videoRef}
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={overlayImage}
                  className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.92] saturate-[1.1]"
                />
              </motion.div>

              {/* Natural Sunlight & Golden-Hour Atmospheric Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-black/60 pointer-events-none" />

              {/* Cinematic Vignette Overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85 pointer-events-none" />
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={baseImage}
                alt="Raw RCC structural concrete frame of house under construction"
                fill
                priority
                quality={92}
                sizes="100vw"
                className="object-cover object-center filter contrast-105 brightness-95 scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85 pointer-events-none" />
            </div>
          )}
        </div>

        {/* OVERLAY LAYER: Finished Modern Luxury Villa Exterior inside Circular 3D Lens (Always Visible!) */}
        <div
          aria-hidden="true"
          style={{ clipPath: clipStyle }}
          className="absolute inset-0 w-full h-full pointer-events-none transition-[clip-path] duration-75 shadow-2xl"
        >
          <Image
            src={overlayImage}
            alt="Finished luxury modern villa exterior in Indore"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center filter contrast-115 brightness-110 saturate-[1.15] scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-amber-500/10 pointer-events-none" />
        </div>

        {/* Interactive 3D HUD Lens Ring Tracker */}
        <motion.div
          className="absolute pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: springX,
            top: springY,
          }}
        >
          <div className="w-[540px] sm:w-[580px] h-[540px] sm:h-[580px] rounded-full border-2 border-white/50 shadow-[0_0_50px_rgba(255,38,0,0.5),inset_0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center relative">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/90 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-widest text-white whitespace-nowrap shadow-xl flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#ff2600]" />
              <span>Vision to Reality &middot; Finished Villa</span>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#ff2600] backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-white whitespace-nowrap shadow-xl font-semibold">
              Shivom Luxury Craftsmanship
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating 3D Experience Badges & Milestone HUD in Top Corner */}
      <div className="absolute top-24 sm:top-28 right-4 sm:right-8 z-30 flex flex-wrap items-center gap-2.5">
        {/* Dynamic Construction Stage Pill */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono uppercase tracking-wider shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600] animate-pulse" />
          <span className="text-[#ff6b52] font-semibold">{currentStage.id}</span>
          <span className="text-white/80">{currentStage.name}</span>
        </div>

        {/* Toggle Mode Button: Video vs Structure */}
        <button
          onClick={toggleVideoMode}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:border-[#ff2600]/70"
          title="Toggle between live construction video and structural wireframe"
        >
          {isVideoMode ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cinematic 3D Video</span>
            </>
          ) : (
            <>
              <Compass className="w-3.5 h-3.5 text-[#ff2600]" />
              <span>3D RCC Structure</span>
            </>
          )}
        </button>

        {/* Video Play/Pause */}
        {isVideoMode && (
          <button
            onClick={toggleVideoPlayback}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer shadow-lg hover:scale-105"
            aria-label={isPlaying ? "Pause construction video" : "Play construction video"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-zinc-300" />
            ) : (
              <Play className="w-3.5 h-3.5 text-zinc-300 ml-0.5" />
            )}
          </button>
        )}
      </div>

      {/* Subtle Hint Indicator at Bottom of Hero Media */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-400 text-[11px] font-mono uppercase tracking-widest">
        <Sparkles className="w-3.5 h-3.5 text-[#ff2600]" />
        <span>Move cursor across frame to reveal finished villa</span>
      </div>
    </div>
  );
}
