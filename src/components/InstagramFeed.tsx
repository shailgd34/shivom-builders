"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Heart, MessageCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "@/components/MotionReveal";
import ScrollTextReveal from "@/components/ScrollTextReveal";

const instagramPosts = [
  {
    image: "/images/about/welcome-duplex-clean.jpg",
    caption: "Keys handover celebration at Suman Nagar, Indore. Modern facade with warm architectural illumination.",
    likes: "1,420",
    comments: "84",
    isReel: true,
    tag: "Duplex Handover",
  },
  {
    image: "/images/projects/project-07.jpg",
    caption: "Completed 3-storey luxury villa in Nipania, Indore. CNC jali facade, Tata Tiscon steel and UltraTech cement.",
    likes: "1,180",
    comments: "52",
    isReel: false,
    tag: "Luxury Villa",
  },
  {
    image: "/images/projects/project-13.jpg",
    caption: "Contemporary cantilever balconies and exterior mood lighting ready for client move-in on Bypass Road.",
    likes: "980",
    comments: "42",
    isReel: true,
    tag: "Elevation Reveal",
  },
  {
    image: "/images/projects/project-16.jpg",
    caption: "Multi-tier modern elevation in Indore. 100% matched to sanctioned IMC drawings with zero deviations.",
    likes: "1,340",
    comments: "67",
    isReel: false,
    tag: "Turnkey Home",
  },
  {
    image: "/images/hero/hero-reveal-base.jpg",
    caption: "From empty plot to keys. Full turnkey construction completed with 10-year structural warranty in Indore.",
    likes: "2,340",
    comments: "112",
    isReel: true,
    tag: "Luxury Villa",
  },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" data-framer-name="Instagram Feed" className="bg-[#131313] text-white pt-[100px] pb-[100px] overflow-hidden">
      <div className="max-w-[1336px] mx-auto px-6 sm:px-8">
        <SlideUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/[0.08] backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-[0.08em] text-[#ff2600] font-medium mb-4">
                <Instagram className="w-3.5 h-3.5" />
                <span>On-Site Journeys</span>
              </div>
              <ScrollTextReveal
                text="Follow us on Instagram, @shivom.builders"
                className="font-display text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.035em] text-white leading-[1.05]"
                theme="dark"
              />
            </div>

            <a
              href="https://www.instagram.com/shivom.builders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[6px] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-mono text-[12px] uppercase tracking-wider font-semibold transition-opacity shadow-lg"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow On Instagram</span>
            </a>
          </div>
        </SlideUp>

        {/* 5-Column High-Stature Portrait Project Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 pt-[30px]">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/shivom.builders"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-[10px] overflow-hidden bg-zinc-900 border border-white/10 block shadow-md hover:border-white/30 transition-all"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
              />

              {/* Tag pill at top right */}
              <div className="absolute top-2.5 right-2.5 z-10">
                {post.isReel ? (
                  <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                    <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
                  </div>
                ) : (
                  <div className="px-2.5 py-1 rounded-[4px] bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 uppercase tracking-wider shadow-md">
                    {post.tag}
                  </div>
                )}
              </div>

              {/* Hover Dark Overlay with Caption & Real Engagement */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <p className="text-[12px] font-sans leading-[16px] text-white/90 line-clamp-3 mb-3">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
