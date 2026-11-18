"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface WordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  dimClass?: string;
  activeClass?: string;
}

function Word({
  children,
  progress,
  range,
  dimClass = "text-[#6e6e6e]/25",
  activeClass = "text-[#131313]",
}: WordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0 transition-colors">
      <span className={`absolute inset-0 ${dimClass} select-none pointer-events-none`}>
        {children}
      </span>
      <motion.span style={{ opacity }} className={activeClass}>
        {children}
      </motion.span>
    </span>
  );
}

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  dimClass?: string;
  activeClass?: string;
  theme?: "light" | "dark";
  offset?: [string, string];
}

export default function ScrollTextReveal({
  text,
  className = "",
  dimClass,
  activeClass,
  theme = "light",
  offset = ["start 0.88", "end 0.45"],
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as any,
  });

  const defaultDim = theme === "dark" ? "text-white/20" : "text-[#131313]/20";
  const defaultActive = theme === "dark" ? "text-white" : "text-[#131313]";

  const finalDim = dimClass || defaultDim;
  const finalActive = activeClass || defaultActive;

  const words = text.split(/\s+/);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + (1.2 / words.length));
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            dimClass={finalDim}
            activeClass={finalActive}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

/**
 * Universal ScrollFade wrapper that smoothly fades in any element
 * from opacity 0 to 100% as it scrolls into view across the whole website.
 */
export function ScrollFade({
  children,
  className = "",
  yOffset = 25,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.65"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}
