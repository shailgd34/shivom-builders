"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const STRUKT_EASE = [0.2, 0.7, 0.2, 1] as const;

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 30,
  className = "",
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: STRUKT_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: STRUKT_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleReveal({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: STRUKT_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 25,
  className = "",
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", y: yOffset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: STRUKT_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerChildren = 0.12,
  delayChildren = 0.05,
  className = "",
  ...props
}: RevealProps & { staggerChildren?: number; delayChildren?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  yOffset = 25,
  className = "",
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: STRUKT_EASE },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardLift({
  children,
  className = "",
  liftY = -6,
  ...props
}: RevealProps & { liftY?: number }) {
  return (
    <motion.div
      whileHover={{ y: liftY }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
