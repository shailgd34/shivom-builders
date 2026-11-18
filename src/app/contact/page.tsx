"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp, FadeIn, STRUKT_EASE } from "@/components/MotionReveal";
import companyData from "@/data/company.json";

const contactFaqs = [
  {
    q: "How quickly will I receive an estimate after submitting?",
    a: "Our lead civil estimator will call you within one business day to clarify plot details and requirements. You will receive a detailed line-item Bill of Quantities (BOQ) within 5 business days.",
  },
  {
    q: "Do I need ready blueprints before requesting an estimate?",
    a: "No. If you have blueprints from an architect, we will cost them directly. If not, our in-house architectural team can prepare full 2D floor plans and 3D elevations based on your plot dimensions.",
  },
  {
    q: "Do you offer free on-site inspections in Indore?",
    a: "Yes. For serious inquiries across Indore (including Bypass Road, Super Corridor, Suman Nagar, Vijay Nagar, Nipania, and Rau), our civil engineers conduct an on-ground site visit at no cost.",
  },
  {
    q: "What payment structure does Shivom follow?",
    a: "We work strictly on milestone-based disbursements linked to certified structural stages (e.g. Foundation, Plinth, Ground Floor Slab, First Floor Slab, Brickwork & Plaster, Handover). You only pay as physical work is verified.",
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "Turnkey Luxury Villa",
    budget: "₹1 Crore — ₹2.5 Crores",
    requirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f48a0e88-4505-4a78-8752-50537216c97c",
          subject: `Detailed Estimate Request from ${contactData.name} — Shivom Builders`,
          from_name: "Shivom Builders Website Contact",
          name: contactData.name,
          phone: contactData.phone,
          email: contactData.email || "Not specified",
          location: contactData.location,
          project_type: contactData.projectType,
          budget: contactData.budget,
          requirements: contactData.requirements || "Detailed estimate requested.",
        }),
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white text-[#131313]">
      {/* ====================================================================
          SECTION 01: HERO SECTION
         ==================================================================== */}
      <section data-framer-name="Page Header" className="bg-white p-[10px] relative z-20">
        <div
          data-framer-name="Hero Frame"
          className="relative min-h-[520px] lg:min-h-[580px] rounded-[10px] overflow-hidden flex flex-col justify-between pt-[150px] px-[26px] pb-0 text-white bg-[#131313]"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/villa-exterior.jpg"
              alt="Shivom Builders Architectural Studio"
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
                <span>Contact &middot; Estimating Desk</span>
              </div>
            </div>

            <div className="max-w-[960px]">
              <h1 className="font-display text-[44px] sm:text-[62px] md:text-[76px] lg:text-[84px] font-medium tracking-[-0.04em] leading-[1.05] text-white">
                <span className="text-white/60">Begin your journey with </span>
                <span className="text-white">Shivom Builders &amp; Developers.</span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12 pb-8 border-b border-white/15">
              <p className="font-sans text-[16px] text-white/80 font-normal leading-[25px] max-w-xl">
                Best Construction Company in Indore &mdash; Build Your Dream Home With Us. Share your plot dimensions or drawings. We provide a transparent, locked Bill of Quantities (BOQ) with zero commitment.
              </p>

              <div className="flex items-center gap-4 text-[12px] font-mono text-white/80">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#127a37]" />
                  Desk open today
                </span>
                <span>&middot;</span>
                <span>Replies in ~1h</span>
              </div>
            </div>

            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: ESTIMATE FORM & DIRECT CONTACTS
         ==================================================================== */}
      <section className="pt-[100px] px-[26px] pb-[140px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="p-[40px] sm:p-[60px] lg:p-[70px_70px_84px] rounded-[10px] bg-[#131313] text-white shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Direct Contacts */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[#ff2600] font-mono text-[12px] uppercase tracking-[0.04em] mb-4 font-medium">
                    Request an estimate
                  </div>
                  <h2 className="font-display text-[36px] sm:text-[48px] font-medium tracking-tight text-white leading-[1.05]">
                    Tell us what <br />
                    <span className="text-zinc-400 font-normal">you want to build.</span>
                  </h2>
                  <p className="mt-5 font-sans text-[16px] text-white/70 leading-[24px]">
                    Every Shivom estimate includes line-item pricing, concrete grades, rebar specs, and an exact milestone schedule. Zero commitment required.
                  </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="pt-8 border-t border-white/10 mt-8 space-y-3">
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="flex items-center justify-between p-3.5 rounded-[6px] bg-white/[0.04] border border-white/10 hover:border-[#ff2600] hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[4px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-zinc-400 block">Direct Email</span>
                        <span className="text-[15px] font-display font-medium text-white group-hover:text-[#ff2600] transition-colors">
                          {companyData.contact.email}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="flex items-center justify-between p-3.5 rounded-[6px] bg-white/[0.04] border border-white/10 hover:border-[#ff2600] hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[4px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-zinc-400 block">Call Engineering Desk</span>
                        <span className="text-[15px] font-display font-medium text-white group-hover:text-[#ff2600] transition-colors">
                          {companyData.contact.phoneDisplay}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </a>

                  <div className="p-3.5 rounded-[6px] bg-white/[0.04] border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-[4px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600] flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block">Indore Studio</span>
                      <p className="text-[14px] text-zinc-300 leading-snug font-sans">
                        {companyData.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Interactive Form */}
              <div className="lg:col-span-7 bg-white/[0.03] p-6 sm:p-10 rounded-[8px] border border-white/10">
                {formSubmitted ? (
                  <div className="py-16 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-[24px] font-medium text-white mb-2">Estimate Request Received</h3>
                    <p className="text-[16px] text-zinc-300 max-w-sm">
                      Our senior civil estimating engineer will review your site details and call you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Full Name *
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <input
                            type="text"
                            required
                            value={contactData.name}
                            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                            placeholder="e.g. Vikramaditya Rathore"
                            className="w-full bg-transparent border-b border-white/20 py-2.5 text-[16px] text-white placeholder-zinc-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Phone Number *
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <input
                            type="tel"
                            required
                            value={contactData.phone}
                            onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full bg-transparent border-b border-white/20 py-2.5 text-[16px] text-white placeholder-zinc-500 focus:outline-none font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Email Address
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <input
                            type="email"
                            value={contactData.email}
                            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                            placeholder="vikram@example.com"
                            className="w-full bg-transparent border-b border-white/20 py-2.5 text-[16px] text-white placeholder-zinc-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Plot Location in Indore *
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <input
                            type="text"
                            required
                            value={contactData.location}
                            onChange={(e) => setContactData({ ...contactData, location: e.target.value })}
                            placeholder="e.g. Bypass Road / Suman Nagar"
                            className="w-full bg-transparent border-b border-white/20 py-2.5 text-[16px] text-white placeholder-zinc-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Project Type
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <select
                            value={contactData.projectType}
                            onChange={(e) => setContactData({ ...contactData, projectType: e.target.value })}
                            className="w-full bg-[#131313] border-b border-white/20 py-2.5 text-[16px] text-white focus:outline-none"
                          >
                            <option value="Turnkey Luxury Villa">Turnkey Luxury Villa</option>
                            <option value="Independent Duplex Bungalow">Independent Duplex Bungalow</option>
                            <option value="Commercial Complex / Arcade">Commercial Complex / Arcade</option>
                            <option value="Turnkey Architectural Interiors">Turnkey Architectural Interiors</option>
                            <option value="Structural Civil Contracting">Structural Civil Contracting</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                          Estimated Budget
                        </label>
                        <div className="framer-form-input-wrapper pb-1">
                          <select
                            value={contactData.budget}
                            onChange={(e) => setContactData({ ...contactData, budget: e.target.value })}
                            className="w-full bg-[#131313] border-b border-white/20 py-2.5 text-[16px] text-white focus:outline-none"
                          >
                            <option value="₹50 Lakhs — ₹1 Crore">₹50 Lakhs — ₹1 Crore</option>
                            <option value="₹1 Crore — ₹2.5 Crores">₹1 Crore — ₹2.5 Crores</option>
                            <option value="₹2.5 Crores — ₹5 Crores">₹2.5 Crores — ₹5 Crores</option>
                            <option value="₹5 Crores+">₹5 Crores+</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                        Plot Size &amp; Project Requirements
                      </label>
                      <div className="framer-form-input-wrapper pb-1">
                        <textarea
                          rows={3}
                          value={contactData.requirements}
                          onChange={(e) => setContactData({ ...contactData, requirements: e.target.value })}
                          placeholder="Plot dimensions (e.g. 40x60 ft), floors planned (G+1 / G+2), architectural style preferences, or current sanction status..."
                          className="w-full bg-transparent border-b border-white/20 py-2.5 text-[16px] text-white placeholder-zinc-500 focus:outline-none resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-framer-name="Default"
                      className="w-full py-3.5 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] disabled:opacity-60 text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg group"
                    >
                      <span>{isSubmitting ? "Sending to Estimating Desk..." : "Submit Estimate Request"}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    <p className="text-[12px] font-mono text-zinc-400 text-center pt-1">
                      We reply within one business day &middot; 100% confidential
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: PRE-ESTIMATE FAQ ACCORDIONS
         ==================================================================== */}
      <section className="py-16 px-[26px] bg-[#f2f2f2]">
        <div className="max-w-[1335px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-4">
                Good to know
              </span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-tight text-[#131313] leading-[1.12]">
                Before requesting <br />
                <span className="text-[#6e6e6e]">an estimate.</span>
              </h2>
              <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px] mt-6 max-w-sm">
                Common questions about site studies, architectural drawings, and contract execution.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col divide-y divide-[#e4e4e4] border-y border-[#e4e4e4] bg-white p-6 rounded-[10px]">
              {contactFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-5 first:pt-0 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left gap-4 group"
                    >
                      <span className="font-display text-[18px] sm:text-[20px] font-medium text-[#131313] group-hover:text-[#ff2600] transition-colors leading-[24px]">
                        {faq.q}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#f2f2f2] group-hover:bg-[#ff2600] group-hover:text-white flex items-center justify-center text-[#131313] transition-colors flex-shrink-0">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="mt-3 pr-8">
                        <p className="font-sans text-[15px] text-[#4a4a4a] leading-[22px]">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
