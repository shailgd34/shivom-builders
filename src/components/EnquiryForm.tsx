"use client";

import React, { useState } from "react";
import { Send, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import companyData from "@/data/company.json";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plotSize: "",
    location: "",
    service: "Residential Construction",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Submit lead to email via Web3Forms
    try {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f48a0e88-4505-4a78-8752-50537216c97c",
          subject: `New Consultation Request from ${formData.name} — Shivom Builders`,
          from_name: "Shivom Builders Website",
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "Not specified",
          service: formData.service,
          plot_size: formData.plotSize || "Not specified",
          location: formData.location || "Indore",
          message: formData.message || "Requesting initial consultation and estimate.",
        }),
      });
    } catch {
      // Continue to WhatsApp
    }

    // 2. Construct formatted WhatsApp message
    const waText = `*New Construction Consultation Request — Shivom Builders*
----------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*Service Required:* ${formData.service}
*Plot Size / Built-up:* ${formData.plotSize || "Not specified"}
*Location in Indore:* ${formData.location || "Indore"}
*Project Notes:* ${formData.message || "Requesting initial consultation and estimate."}
----------------------------------------
Sent via shivombuilder.com`;

    const encoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/918818879126?text=${encoded}`;

    // Open WhatsApp
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-brand-border rounded-3xl p-8 md:p-12 shadow-sm">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-accent font-semibold block mb-2">
          Consultation &amp; Feasibility
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-charcoal">
          Request Free Site Visit &amp; Estimate
        </h3>
        <p className="text-sm text-brand-muted mt-2">
          Fill out your plot details below. Your enquiry opens directly in WhatsApp for immediate response from our civil engineering team.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="font-display text-2xl font-bold text-brand-charcoal">
            Consultation Initiated!
          </h4>
          <p className="text-sm text-brand-muted max-w-md mt-2">
            Your project details have been prepared for WhatsApp. If WhatsApp did not open automatically, please click below:
          </p>
          <a
            href={companyData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs tracking-wider uppercase"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp Chat Directly</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-mono text-brand-muted underline"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold mb-2">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/50 text-brand-charcoal text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold mb-2">
                Mobile / WhatsApp No. *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/50 text-brand-charcoal text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold mb-2">
                Service Type
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/50 text-brand-charcoal text-sm focus:outline-none focus:border-brand-accent transition-colors"
              >
                <option value="Residential Construction">Residential Villa / Duplex</option>
                <option value="Commercial Construction">Commercial Complex</option>
                <option value="Architectural Design">Architectural &amp; 3D Elevation</option>
                <option value="Turnkey Interior">Turnkey Interior Fitout</option>
                <option value="Civil Contracting">Civil Structural Contracting</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold mb-2">
                Plot Size / Area
              </label>
              <input
                type="text"
                placeholder="e.g. 1500 sq.ft (30x50)"
                value={formData.plotSize}
                onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/50 text-brand-charcoal text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold mb-2">
                Location in Indore
              </label>
              <input
                type="text"
                placeholder="e.g. Bypass / Vijay Nagar"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/50 text-brand-charcoal text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/50 text-brand-charcoal text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold mb-2">
              Project Vision / Notes
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your requirements, timeline, or any specific elevation style you admire..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/50 text-brand-charcoal text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-charcoal text-white text-xs font-semibold tracking-wider uppercase hover:bg-brand-accent transition-colors shadow-sm"
            >
              <span>Connect on WhatsApp for Immediate Estimate</span>
              <Send className="w-4 h-4" />
            </button>
            <p className="text-[11px] font-mono text-brand-muted mt-3">
              Direct connection to founder &amp; senior engineer &middot; Zero spam guarantee
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
