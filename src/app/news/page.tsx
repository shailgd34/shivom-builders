"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/CTASection";
import { SlideUp, FadeIn, StaggerContainer, StaggerItem, STRUKT_EASE } from "@/components/MotionReveal";

const articles = [
  {
    id: "news-1",
    category: "Safety",
    title: "How we hit zero lost-time incidents across 85+ active construction sites",
    date: "Oct 24, 2024",
    readTime: "4 min read",
    author: "Vikramaditya Rathore",
    authorRole: "Quality & Safety Director",
    image: "/images/hero/architect-craft.jpg",
    excerpt: "Over one million worked hours, multiple active tower cranes, zero lost-time incidents. The record came from strict daily toolbox talks, not motivational slogans.",
  },
  {
    id: "news-2",
    category: "Architecture",
    title: "Designing for Daylight: Modern Courtyard Villas in Central India",
    date: "Nov 12, 2024",
    readTime: "4 min read",
    author: "Ananya Sharma",
    authorRole: "Head of Pre-construction",
    image: "/images/projects/project-02.jpg",
    excerpt: "How double-height glass atriums and shaded travertine louvers welcome golden morning light while keeping peak summer indoor temperatures 6°C cooler.",
  },
  {
    id: "news-3",
    category: "Insights",
    title: "Pre-construction: Where Most Luxury Home Budgets Are Won or Lost",
    date: "Dec 08, 2024",
    readTime: "6 min read",
    author: "Pramod Patel",
    authorRole: "Managing Director",
    image: "/images/projects/project-03.jpg",
    excerpt: "Why spending an extra three weeks locking down geotechnical soil tests and line-item BOQs saves months of delays and millions in change orders.",
  },
  {
    id: "news-4",
    category: "Engineering",
    title: "Deep Foundation Engineering in Indore's Black Cotton Soil",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    author: "Rajesh Chouhan",
    authorRole: "Chief Civil Engineer",
    image: "/images/projects/project-04.jpg",
    excerpt: "A technical breakdown of under-reamed pile foundations, moisture barriers, and ground beam reinforcements that prevent soil settlement fissures.",
  },
  {
    id: "news-5",
    category: "Architecture",
    title: "Cantilevered Balconies: Structural Steel Meets Natural Stone",
    date: "Feb 02, 2025",
    readTime: "3 min read",
    author: "Ananya Sharma",
    authorRole: "Head of Pre-construction",
    image: "/images/projects/project-05.jpg",
    excerpt: "Engineering a 22-foot floating upper veranda for The Grand Aranya Villa using Fe-550D structural steel framing without vertical support columns.",
  },
  {
    id: "news-6",
    category: "Safety",
    title: "The 2025 Quality Playbook: Standardizing Raw Material Batch Testing",
    date: "Feb 28, 2025",
    readTime: "4 min read",
    author: "Vikramaditya Rathore",
    authorRole: "Quality & Safety Director",
    image: "/images/projects/project-06.jpg",
    excerpt: "Every batch of UltraTech M25 ready-mix concrete and Tata Tiscon TMT rebar undergoes independent laboratory 7-day and 28-day compression testing.",
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase());

  const featured = articles[0];

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
              src="/images/hero/architect-craft.jpg"
              alt="Shivom Builders Field Insights"
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
                <span>Field Notes &middot; Indore, MP</span>
              </div>
            </div>

            <div className="max-w-[960px]">
              <h1 className="font-display text-[48px] sm:text-[68px] md:text-[80px] lg:text-[90px] font-medium tracking-[-0.05em] leading-[0.98] text-white">
                <span className="text-white/55">From the site. </span>
                <span className="text-white">Notes on building well.</span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12 pb-8 border-b border-white/15">
              <p className="font-sans text-[16px] text-white/70 font-normal leading-[23.2px] max-w-xl">
                Project milestones, jobsite safety records, and what we have learned from over a decade of fixed-scope, fixed-schedule building in Central India — written by the civil engineers who run our sites.
              </p>

              <div className="flex items-center gap-2 text-[12px] font-mono text-white/60">
                <span>(06) Articles Published</span>
              </div>
            </div>

            <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: FEATURED ARTICLE BANNER
         ==================================================================== */}
      <section data-framer-name="Featured Article" className="pt-[100px] px-[26px] pb-[80px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="pb-6 border-b border-[#e4e4e4] flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
              Latest article
            </span>
            <span className="text-[12px] font-mono text-[#6e6e6e]">{featured.date}</span>
          </div>

          <div className="mt-8 rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4] p-[10px] sm:p-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
            <div className="lg:col-span-6 relative w-full h-[340px] sm:h-[420px] rounded-[6px] overflow-hidden bg-zinc-900">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-[4px] bg-black/75 backdrop-blur text-white text-[11px] font-mono uppercase tracking-wider font-medium">
                  {featured.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[12px] font-mono text-[#6e6e6e] mb-3">
                  <span>{featured.date}</span>
                  <span>&middot;</span>
                  <span>{featured.readTime}</span>
                </div>

                <h2 className="font-display text-[26px] sm:text-[34px] font-medium text-[#131313] leading-[1.15] tracking-tight mb-4">
                  {featured.title}
                </h2>

                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[23.2px] mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#e4e4e4] flex items-center justify-between">
                <div>
                  <p className="font-display font-medium text-[15px] text-[#131313]">{featured.author}</p>
                  <p className="font-mono text-[11px] text-[#6e6e6e]">{featured.authorRole}</p>
                </div>

                <span className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-[6px] bg-[#131313] text-white text-[12px] font-mono font-medium uppercase tracking-[0.02em]">
                  <span>Read article</span>
                  <div className="w-6 h-6 rounded-[4px] bg-white text-[#131313] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: ALL ARTICLES WITH CATEGORY FILTER
         ==================================================================== */}
      <section data-framer-name="News List" className="pt-[40px] px-[26px] pb-[100px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          {/* Category Bar */}
          <div className="pb-8 border-b border-[#e4e4e4] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium mb-3">
                All articles
              </span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] text-[#131313] md:leading-[1.12]">
                Field notes, <br />
                <span className="text-[#6e6e6e]">from our team.</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-[#f2f2f2] p-1 rounded-[6px] border border-[#e4e4e4]">
              {["All", "Safety", "Architecture", "Engineering", "Insights"].map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-[4px] text-[12px] font-mono uppercase tracking-[0.04em] font-medium transition-all duration-150 ${
                      isSelected
                        ? "bg-[#131313] text-white shadow-sm"
                        : "text-[#6e6e6e] hover:text-[#131313]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Articles Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] pt-[40px]">
            <AnimatePresence>
              {filteredArticles.map((article) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: STRUKT_EASE }}
                  whileHover={{ y: -6 }}
                  key={article.id}
                  className="h-full"
                >
                  <div
                    className="group flex flex-col justify-between p-[10px] rounded-[10px] bg-white border border-[#e4e4e4] hover:border-[#ff2600]/50 shadow-sm hover:shadow-md transition-all duration-300 min-h-[480px] h-full"
                  >
                    <div>
                      <div className="relative w-full h-[280px] rounded-[4px] overflow-hidden mb-4 bg-zinc-900">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-[4px] bg-white/95 backdrop-blur text-[#131313] font-mono text-[11px] uppercase font-medium tracking-wider">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <div className="px-2">
                        <div className="flex items-center gap-2 text-[12px] font-mono text-[#6e6e6e] mb-2">
                          <span>{article.date}</span>
                          <span>&middot;</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3 className="font-display text-[22px] font-medium text-[#131313] group-hover:text-[#ff2600] transition-colors leading-[26.4px] tracking-tight">
                          {article.title}
                        </h3>

                        <p className="font-sans text-[14px] text-[#4a4a4a] leading-[21px] mt-2 line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 px-2 pb-1 border-t border-[#e4e4e4] flex items-center justify-between mt-4">
                      <span className="text-[12px] font-mono text-[#6e6e6e]">
                        {article.author}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#f2f2f2] group-hover:bg-[#ff2600] flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-[#131313] group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: NEWSLETTER SIGNUP BLOCK
         ==================================================================== */}
      <section data-framer-name="Newsletter" className="py-16 px-[26px] bg-[#f2f2f2]">
        <div className="max-w-[1335px] mx-auto">
          <div className="p-8 sm:p-14 rounded-[10px] bg-[#131313] text-white flex flex-col md:flex-row md:items-center justify-between gap-8 border border-white/10 shadow-xl">
            <div className="max-w-xl">
              <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-2 font-medium">
                Civil Engineering Dispatches
              </span>
              <h3 className="font-display text-[28px] sm:text-[36px] font-medium text-white leading-[1.15] tracking-tight">
                Get site notes delivered directly to your inbox.
              </h3>
              <p className="font-sans text-[16px] text-white/70 leading-[23.2px] mt-3">
                Monthly breakdowns of structural methodologies, municipal approval insights, and cost engineering for Central India.
              </p>
            </div>

            <div className="w-full md:w-auto min-w-[320px]">
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-[14px]">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail) setSubscribed(true);
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="px-4 py-3 rounded-[6px] bg-white/[0.08] border border-white/20 text-white placeholder-zinc-500 font-sans text-[14px] focus:outline-none focus:border-[#ff2600]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-[6px] bg-[#ff2600] hover:bg-[#e02200] text-white font-mono text-[12.5px] uppercase font-medium tracking-[0.02em] transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 05: CTA BLOCK
         ==================================================================== */}
      <CTASection
        title="Have a project?"
        subtitle="Let's build it."
        intro="Tell us about your plot in Indore, timeline and budget. You'll get a clear, fixed estimate within 5 business days."
      />
    </div>
  );
}
