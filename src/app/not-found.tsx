import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white p-[10px] flex items-center justify-center">
      <div className="w-full max-w-[1387px] min-h-[calc(100vh-20px)] rounded-[10px] bg-[#131313] text-white flex flex-col justify-between pt-[150px] px-[26px] pb-12 relative overflow-hidden">
        {/* Subtle grid ticks */}
        <div data-framer-name="Ruler" className="absolute top-10 left-10 right-10 h-[14px] bg-ruler-ticks opacity-25" />

        <div className="max-w-[900px] mx-auto text-center my-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/[0.12] backdrop-blur-md border border-white/15 text-[12px] font-mono uppercase tracking-[0.08em] text-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600]" />
            <span>Error 404 &middot; Page Not Found</span>
          </div>

          <h1 className="font-display text-[60px] sm:text-[90px] font-medium tracking-tight leading-[0.98] text-white mb-6">
            <span className="text-white/55">Blueprint </span>
            <span className="text-white">not found.</span>
          </h1>

          <p className="font-sans text-[16px] sm:text-[18px] text-white/70 max-w-lg mx-auto leading-[26px] mb-8">
            The page or project documentation you are looking for has been moved, archived, or is currently under revision.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2.5 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-colors shadow-lg group mx-auto"
          >
            <span>Return to Homepage</span>
            <div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center text-[#ff2600] transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </Link>
        </div>

        <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
      </div>
    </div>
  );
}
