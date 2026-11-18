"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Phone, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Home } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/MotionReveal";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  responsibility: string;
  image: string;
  phone?: string;
}

const employees: TeamMember[] = [
  {
    id: "kapil-parmar",
    name: "Kapil Parmar",
    role: "Team Coordinator & Approvals",
    experience: "8+ Years",
    responsibility: "Coordinates client communications, milestone schedules, and Indore Municipal Corporation (IMC) building permissions.",
    image: "/images/hero/architect-craft.jpg",
  },
  {
    id: "pramod-patel",
    name: "Er. Pramod Patel",
    role: "Chief Civil Engineer",
    experience: "11+ Years",
    responsibility: "Leads RCC structural analysis, soil load bearing checks, beam-column casting, and seismic safety standards.",
    image: "/images/about/team-pramod-patel.jpg",
  },
  {
    id: "vinod",
    name: "Vinod",
    role: "Lead Site Supervisor",
    experience: "9+ Years",
    responsibility: "Supervises daily on-site work, batch quality checks on cement and steel, and guarantees clean milestone handover.",
    image: "/images/about/team-vinod.jpg",
  },
];

export default function AwwwardsTeam() {
  return (
    <section
      data-framer-name="Team Section"
      className="bg-white pt-[80px] sm:pt-[100px] px-[26px] pb-[120px] border-b border-[#e4e4e4]"
    >
      <div className="max-w-[1335px] mx-auto">
        <SlideUp>
          {/* Section Header (Clean Minimal STRUKT Architecture Style) */}
          <div className="pb-10 border-b border-[#e4e4e4] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Leadership &amp; Execution Team</span>
              </div>
              <h2 className="font-display text-[32px] sm:text-[42px] md:text-[48px] font-medium tracking-[-0.035em] text-[#131313] leading-[1.08]">
                The team behind <br />
                <span className="text-[#6e6e6e]">every Indore handover.</span>
              </h2>
            </div>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#4a4a4a] max-w-md leading-[23px]">
              Direct access to the founder and licensed civil engineers from initial 2D drawings to final key handover. 100% accountable on site.
            </p>
          </div>
        </SlideUp>

        {/* ====================================================================
            BIG OWNER CARD (Full Single Row — Deepak Rajak)
           ==================================================================== */}
        <SlideUp delay={0.15}>
          <div
            data-framer-name="Owner Card"
            className="mt-10 rounded-[14px] bg-[#fafafa] border border-[#e4e4e4] p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Owner Photo with Badges (Equal col-span-6) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[660px] rounded-[10px] overflow-hidden bg-zinc-900 border border-[#e4e4e4] shadow-sm group">
                  <Image
                    src="/images/deepakrajak.png"
                    alt="Deepak Rajak — Founder & Owner of Shivom Builders"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top contrast-105 transition-all duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge: Founder */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2600] text-white text-[11px] font-mono uppercase tracking-wider font-semibold shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Founder &amp; Owner</span>
                  </div>

                  {/* Bottom Strip: Direct Site Supervision */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-[6px] bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Direct On-Site Supervision</span>
                    </span>
                    <span className="text-white/70">Indore, MP</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Story in Simple, Readable English (Equal col-span-6) */}
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white text-[12px] font-mono uppercase tracking-[0.05em] text-[#ff2600] border border-[#e4e4e4] font-semibold mb-3">
                    Leadership &middot; Est. 2016
                  </div>

                  <h3 className="font-display text-[32px] sm:text-[40px] font-semibold text-[#131313] tracking-tight leading-[1.1]">
                    Deepak Rajak
                  </h3>
                  <p className="font-mono text-[13px] text-[#6e6e6e] uppercase tracking-wider mt-1 mb-5">
                    Founder &amp; Owner, Shivom Builders &amp; Developers
                  </p>

                  <div className="space-y-3.5 text-[#333333] font-sans text-[15px] sm:text-[16px] leading-[25px]">
                    <p>
                      Deepak Rajak started Shivom Builders in 2016 with a simple mission: to build quality, honest, and long-lasting homes for families in Indore. Through hard work and dedicated service, Shivom Builders has successfully delivered over 100+ residential and commercial projects across Indore &mdash; and is still growing every day.
                    </p>
                    <p className="text-[#555555]">
                      With deep practical knowledge of construction, architectural planning, and RCC structural engineering, Deepak personally oversees every project from foundation to final paint. He ensures only genuine Tata Tiscon steel and UltraTech cement are used, guaranteeing every home is delivered on time with a 10-year warranty.
                    </p>
                  </div>

                  {/* 4 Quick Stat Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-6 border-t border-[#e4e4e4]">
                    <div>
                      <p className="font-display text-[26px] sm:text-[28px] font-semibold text-[#131313] leading-none">2016</p>
                      <p className="font-mono text-[11px] text-[#6e6e6e] uppercase tracking-wider mt-1.5">Founded</p>
                    </div>
                    <div>
                      <p className="font-display text-[26px] sm:text-[28px] font-semibold text-[#ff2600] leading-none">100+</p>
                      <p className="font-mono text-[11px] text-[#6e6e6e] uppercase tracking-wider mt-1.5">Projects Built</p>
                    </div>
                    <div>
                      <p className="font-display text-[26px] sm:text-[28px] font-semibold text-[#131313] leading-none">100%</p>
                      <p className="font-mono text-[11px] text-[#6e6e6e] uppercase tracking-wider mt-1.5">On-Time</p>
                    </div>
                    <div>
                      <p className="font-display text-[26px] sm:text-[28px] font-semibold text-[#131313] leading-none">10-Yr</p>
                      <p className="font-mono text-[11px] text-[#6e6e6e] uppercase tracking-wider mt-1.5">Warranty</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Row */}
                <div className="pt-6 mt-6 border-t border-[#e4e4e4] flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="tel:+918818879126"
                    className="inline-flex items-center gap-2 text-[13px] font-mono font-medium text-[#131313] hover:text-[#ff2600] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ff2600]/10 text-[#ff2600] flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>Direct Call: +91 88188 79126</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-[#131313] hover:bg-[#ff2600] text-white text-[12px] font-mono uppercase tracking-[0.04em] transition-colors shadow-sm group"
                  >
                    <span>Book a Free Plot Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SlideUp>

        {/* ====================================================================
            OTHER TEAM ROW (3 Employees in a Row)
           ==================================================================== */}
        <div className="mt-12">
          <div className="flex items-center justify-between pb-4 border-b border-[#e4e4e4] mb-8">
            <span className="text-[12px] font-mono uppercase tracking-[0.06em] text-[#6e6e6e] font-medium">
              Core Engineering &amp; Site Team
            </span>
            <span className="text-[12px] font-mono text-[#6e6e6e]">
              3 Dedicated Specialists
            </span>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {employees.map((member) => (
              <StaggerItem key={member.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group rounded-[10px] bg-white p-4 border border-[#e4e4e4] hover:border-zinc-300 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Photo with Elegant Aspect Ratio */}
                    <div className="relative w-full aspect-[4/4.5] rounded-[6px] overflow-hidden bg-zinc-900 mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
                      />

                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-[4px] bg-black/75 backdrop-blur-md text-white/90 text-[10px] font-mono uppercase tracking-wider">
                        {member.experience}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-1">
                      <span className="text-[11px] font-mono uppercase tracking-[0.05em] text-[#ff2600] font-semibold block mb-1">
                        {member.role}
                      </span>
                      <h4 className="font-display text-[20px] sm:text-[22px] font-semibold text-[#131313] tracking-tight group-hover:text-[#ff2600] transition-colors mb-2">
                        {member.name}
                      </h4>
                      <p className="font-sans text-[13.5px] text-[#555555] leading-[21px] mb-4">
                        {member.responsibility}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Verified Role Tag */}
                  <div className="pt-3 px-1 border-t border-[#e4e4e4] flex items-center justify-between text-[11px] font-mono text-[#6e6e6e]">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified On-Site</span>
                    </span>
                    <span className="text-[#8a8a8a]">Indore Team</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
