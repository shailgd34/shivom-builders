"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import companyData from "@/data/company.json";

export default function WhatsAppFloat() {
  return (
    <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-40">
      <a
        href={companyData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba59] transition-all duration-300 transform hover:-translate-y-0.5"
        aria-label="Direct WhatsApp Consultation with Shivom Builders"
      >
        {/* Pulse beacon */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Chat With Us
        </span>
      </a>
    </aside>
  );
}
