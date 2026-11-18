"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "./MotionReveal";

const coreServices = [
  {
    id: "floor-plan",
    title: "Floor Plan",
    icon: (
      <svg className="w-9 h-9 text-[#ff2600]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <path d="M10 3v22M3 10h7M3 17h7" />
      </svg>
    ),
    description: "Planning a floor is the first step in building the floor. And we like to be good at each step!",
    href: "/services",
  },
  {
    id: "elevation",
    title: "Elevation",
    icon: (
      <svg className="w-9 h-9 text-[#ff2600]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 22h10M18.5 4.5a2.121 2.121 0 0 1 3 3L8 21l-5 1 1-5L18.5 4.5z" />
      </svg>
    ),
    description: "When people say first impression matters, I think about elevations.",
    href: "/services",
  },
  {
    id: "construction",
    title: "Construction",
    icon: (
      <svg className="w-9 h-9 text-[#ff2600]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M25 18l-6-6L6 25" />
      </svg>
    ),
    description: "How would you construct if you won't dream? So, you continue to dream, and we will continue to construct.",
    href: "/services",
  },
  {
    id: "architectural-design",
    title: "Architectural Design",
    icon: (
      <svg className="w-9 h-9 text-[#ff2600]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="16" height="16" rx="2" />
      </svg>
    ),
    description: "We specialize in innovative design concepts that blend functionality with aesthetic appeal.",
    href: "/services",
  },
];

export default function ServicesGridFeature() {
  return (
    <div className="pt-12 pb-16">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {coreServices.map((svc) => (
          <StaggerItem key={svc.id}>
            <div className="flex items-start gap-4 p-5 rounded-[10px] bg-white hover:bg-zinc-50 border border-[#e4e4e4] shadow-xs transition-all duration-200 group">
              <div className="shrink-0 p-1 rounded-md bg-[#ff2600]/5 flex items-center justify-center">
                {svc.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-display text-[26px] sm:text-[28px] font-semibold text-[#131313] tracking-tight group-hover:text-[#ff2600] transition-colors mb-2">
                  {svc.title}
                </h4>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#555555] leading-[24px]">
                  {svc.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
