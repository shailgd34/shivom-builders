import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Star } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Testimonials — Shivom Builders Indore | Client Reviews",
  description:
    "Read real client reviews and architectural case studies from homeowners and commercial developers across Indore who built with Shivom Builders.",
};

const reviews = [
  {
    quote: "They finished our 4,200 sq.ft luxury duplex two weeks early. The structural finish on the travertine cantilever is breathtaking, and the weekly BOQ reports kept costs 100% predictable.",
    author: "Dr. Arvind Sharma & Dr. Priya Sharma",
    role: "Homeowners, The Grand Aranya Villa",
    location: "Bypass Corridor, Indore",
    rating: 5,
  },
  {
    quote: "Building in an established area like Suman Nagar is tricky due to tight plot boundaries and neighbor walls. Shivom’s civil team handled foundation vibration testing and site logistics with surgical precision.",
    author: "Deepak & Sunita Agrawal",
    role: "Homeowners, Suman Nagar Residence",
    location: "Suman Nagar, Indore",
    rating: 5,
  },
  {
    quote: "Commercial arcades have zero tolerance for schedule slippage. Shivom cast 12,500 sq.ft across G+3 floors inside 16 months, enabling our anchor retail tenants to open ahead of Diwali.",
    author: "Manish Chhabra",
    role: "Managing Partner, The Onyx Arcade",
    location: "Vijay Nagar, Indore",
    rating: 5,
  },
  {
    quote: "Transparency was our priority after hearing nightmare contractor stories in Indore. Shivom locked every material brand from UltraTech concrete to Polycab wires in a signed BOQ before excavation.",
    author: "Siddharth & Radhika Mehta",
    role: "Homeowners, Minimalist Duplex",
    location: "Vasant Vihar, Indore",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-white text-[#131313]">
      {/* ====================================================================
          SECTION 01: HERO SECTION
         ==================================================================== */}
      <section data-framer-name="Page Header" className="bg-white p-[10px] relative z-20">
        <div
          data-framer-name="Hero Frame"
          className="relative min-h-[580px] lg:min-h-[640px] rounded-[10px] overflow-hidden flex flex-col justify-between pt-[150px] px-[26px] pb-0 text-white bg-[#131313]"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/luxury-villa.jpg"
              alt="Shivom Builders Client Reviews"
              fill
              priority
              className="object-cover object-center opacity-30 filter grayscale"
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/90 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-[1335px] mx-auto w-full">
            <div data-framer-name="Tag Wrap" className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/[0.12] backdrop-blur-md border border-white/15 text-[12px] font-mono uppercase tracking-[0.08em] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2600]" />
                <span>Client Words &middot; Indore, MP</span>
              </div>
            </div>

            <div className="max-w-[960px]">
              <h1 className="font-display text-[48px] sm:text-[68px] md:text-[80px] lg:text-[90px] font-medium tracking-[-0.05em] leading-[0.98] text-white">
                <span className="text-white/55">Proof in </span>
                <span className="text-white">every handover.</span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12 pb-8 border-b border-white/15">
              <p className="font-sans text-[16px] text-white/70 font-normal leading-[23.2px] max-w-xl">
                Real feedback from Indore families, doctors, and commercial developers who trusted Shivom Builders with their life&apos;s most significant capital investment.
              </p>

              {/* Review Metric */}
              <div className="flex items-center gap-4 text-[12px] font-mono">
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-display font-medium text-white">4.9</span>
                  <span className="text-white/60">/ 5.0</span>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <span className="text-white/70">85+ verified client reviews</span>
              </div>
            </div>

            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: REVIEWS GRID
         ==================================================================== */}
      <section className="pt-[140px] px-[26px] pb-[140px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="pb-10 border-b border-[#e4e4e4]">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-4">
              Client Feedback
            </span>
            <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
              What owners say <br />
              <span className="text-[#6e6e6e]">after receiving the keys.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#ff2600] mb-6">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#ff2600]" />
                    ))}
                  </div>

                  <p className="font-display text-[20px] sm:text-[22px] font-medium text-[#131313] leading-[28.6px]">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#e4e4e4] flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-[16px] font-medium text-[#131313]">
                      {rev.author}
                    </h3>
                    <p className="font-mono text-[12px] text-[#6e6e6e]">
                      {rev.role}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#ff2600] bg-white px-2.5 py-1 rounded-[4px] border border-[#e4e4e4]">
                    {rev.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CTA BLOCK
         ==================================================================== */}
      <CTASection
        title="Have a project?"
        subtitle="Let's build it."
        intro="Tell us about your site, timeline and budget. You'll get a clear, fixed estimate within 5 business days."
      />
    </div>
  );
}
