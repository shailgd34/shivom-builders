"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsVisible(window.scrollY > 380);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular circumference for radius = 18
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group flex items-center justify-center cursor-pointer focus:outline-none"
          aria-label="Back to top"
        >
          {/* Circular Progress Ring HUD */}
          <div className="relative w-12 h-12 rounded-full bg-black/85 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 group-hover:border-[#ff2600]/80 group-hover:scale-105">
            <svg className="w-12 h-12 -rotate-90 pointer-events-none absolute inset-0">
              {/* Background circle track */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-white/15"
                strokeWidth="2.5"
                fill="transparent"
              />
              {/* Animated Progress ring */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-[#ff2600] transition-all duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Centered Arrow */}
            <ArrowUp className="w-4 h-4 text-white group-hover:text-[#ff6b52] transition-colors group-hover:-translate-y-0.5 duration-200" />
          </div>

          {/* Hover Tooltip */}
          <span className="absolute right-14 px-2.5 py-1 rounded-[4px] bg-black/90 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
