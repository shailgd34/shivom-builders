"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react";
import companyData from "@/data/company.json";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  intro?: string;
}

export default function CTASection({
  title = "Have a project?",
  subtitle = "Let's build it.",
  intro = "Tell us about your plot, timeline and budget. You'll get a clear, fixed estimate within 5 business days — zero obligation.",
}: CTASectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ctaData, setCtaData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "Luxury Residential Villa",
    message: "",
  });

  const handleCtaSubmit = async (e: React.FormEvent) => {
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
          subject: `New Project Inquiry from ${ctaData.name} — Shivom Builders`,
          from_name: "Shivom Builders Website",
          name: ctaData.name,
          phone: ctaData.phone,
          location: ctaData.location || "Indore",
          project_type: ctaData.projectType,
          requirements: ctaData.message || "Consultation requested.",
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
    <section data-framer-name="CTA" className="bg-white pt-[140px] px-[26px] pb-[140px]">
      <div data-framer-name="Container" className="max-w-[1355px] mx-auto">
        <div
          data-framer-name="CTA Block"
          className="p-[40px] sm:p-[70px] lg:p-[70px_70px_84px] rounded-[10px] bg-[#131313] text-white shadow-2xl border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: CTA Intro & Direct Contacts (width 553.7px) */}
            <div data-framer-name="CTA Left" className="lg:col-span-6 flex flex-col justify-between">
              <div data-framer-name="CTA Intro">
                <div
                  data-framer-name="Tag"
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 text-[#ff2600] font-mono text-[12px] uppercase tracking-[0.04em] mb-4 font-medium"
                >
                  Request an estimate
                </div>
                <h2
                  data-framer-name="Heading"
                  className="font-display text-[40px] sm:text-[54px] lg:text-[74px] font-medium tracking-[-0.04em] text-white leading-[1.0]"
                >
                  {title} <br />
                  <span className="text-zinc-400 font-normal">{subtitle}</span>
                </h2>
                <p className="mt-6 font-sans text-[18px] text-white/70 leading-[26px] max-w-md">
                  {intro}
                </p>
              </div>

              {/* Direct Contacts List */}
              <div data-framer-name="CTA Contacts" className="pt-8 border-t border-white/10 mt-8 space-y-3">
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center justify-between p-3.5 rounded-[6px] bg-white/[0.04] border border-white/10 hover:border-[#ff2600] hover:bg-white/[0.08] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[4px] bg-[#ff2600]/20 flex items-center justify-center text-[#ff2600]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[12px] font-mono uppercase text-zinc-400 block">Email</span>
                      <span className="text-[16px] font-display font-medium text-white group-hover:text-[#ff2600] transition-colors">
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
                      <span className="text-[12px] font-mono uppercase text-zinc-400 block">Call</span>
                      <span className="text-[16px] font-display font-medium text-white group-hover:text-[#ff2600] transition-colors">
                        {companyData.contact.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column: Estimate Form with 1px Expanding Underline */}
            <div className="lg:col-span-6 bg-white/[0.03] p-6 sm:p-8 rounded-[8px] border border-white/10">
              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-[22px] font-medium text-white mb-2">Estimate Request Received</h3>
                  <p className="text-[16px] text-zinc-300 max-w-sm">
                    Our lead civil engineer will review your requirements and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleCtaSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                      Full Name *
                    </label>
                    <div className="framer-form-input-wrapper pb-1">
                      <input
                        type="text"
                        required
                        value={ctaData.name}
                        onChange={(e) => setCtaData({ ...ctaData, name: e.target.value })}
                        placeholder="e.g. Vikramaditya Rathore"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                        Phone Number *
                      </label>
                      <div className="framer-form-input-wrapper pb-1">
                        <input
                          type="tel"
                          required
                          value={ctaData.phone}
                          onChange={(e) => setCtaData({ ...ctaData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                        Project Location
                      </label>
                      <div className="framer-form-input-wrapper pb-1">
                        <input
                          type="text"
                          value={ctaData.location}
                          onChange={(e) => setCtaData({ ...ctaData, location: e.target.value })}
                          placeholder="e.g. Nipania, Indore"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                      Project Type
                    </label>
                    <div className="framer-form-input-wrapper pb-1">
                      <select
                        value={ctaData.projectType}
                        onChange={(e) => setCtaData({ ...ctaData, projectType: e.target.value })}
                        className="w-full bg-[#131313] border-b border-white/20 py-2 text-[16px] text-white focus:outline-none"
                      >
                        <option value="Luxury Residential Villa">Luxury Residential Villa</option>
                        <option value="Independent Duplex Bungalow">Independent Duplex Bungalow</option>
                        <option value="Commercial Complex / Arcade">Commercial Complex / Arcade</option>
                        <option value="Turnkey Architectural Interiors">Turnkey Architectural Interiors</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono uppercase tracking-[0.04em] text-zinc-400 mb-1">
                      Plot Size &amp; Requirements
                    </label>
                    <div className="framer-form-input-wrapper pb-1">
                      <textarea
                        rows={3}
                        value={ctaData.message}
                        onChange={(e) => setCtaData({ ...ctaData, message: e.target.value })}
                        placeholder="Plot dimensions, floors planned, or key construction preferences..."
                        className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder-zinc-500 focus:outline-none resize-none"
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
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
