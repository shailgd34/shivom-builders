"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrent((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const t = testimonials[current];

  return (
    <div className="relative bg-white border border-brand-border rounded-3xl p-8 md:p-14 shadow-sm overflow-hidden">
      <div className="absolute top-8 right-8 text-brand-surface pointer-events-none">
        <Quote className="w-24 h-24 stroke-[1] text-brand-surface" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Project Image */}
        <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border bg-brand-surface">
          <Image
            src={t.avatar}
            alt={t.project}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md p-2.5 rounded-xl text-white text-[11px]">
            <span className="font-semibold block truncate">{t.project}</span>
            <span className="text-zinc-300 font-mono text-[10px]">{t.location}</span>
          </div>
        </div>

        {/* Right: Review Details */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-amber-500 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-xs font-mono font-bold text-brand-charcoal">
                5.0 &middot; Verified Indore Homeowner
              </span>
            </div>

            <blockquote className="text-lg md:text-2xl font-display font-medium text-brand-charcoal leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-brand-border">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-brand-charcoal">{t.author}</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Client</span>
                </span>
              </div>
              <p className="text-xs text-brand-muted mt-0.5">
                {t.role} &middot; {t.project}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-brand-muted mr-2">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal hover:bg-brand-surface hover:border-brand-charcoal transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-brand-charcoal text-white flex items-center justify-center hover:bg-brand-accent transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
