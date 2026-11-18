"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Room {
  id: string;
  name: string;
  dimensions: string;
  x: number;
  y: number;
  w: number;
  h: number;
  tag?: string;
}

const rooms: Room[] = [
  { id: "living", name: "Living & Lounge", dimensions: "24'0\" × 18'6\"", x: 18, y: 35, w: 140, h: 90, tag: "Double Height" },
  { id: "courtyard", name: "Vastu Courtyard", dimensions: "12'0\" × 10'0\"", x: 164, y: 35, w: 60, h: 60, tag: "Open to Sky" },
  { id: "kitchen", name: "Modular Kitchen", dimensions: "14'0\" × 12'0\"", x: 230, y: 35, w: 75, h: 60, tag: "South-East" },
  { id: "dining", name: "Dining Hall", dimensions: "14'0\" × 11'0\"", x: 164, y: 100, w: 141, h: 45 },
  { id: "master", name: "Master Suite", dimensions: "18'0\" × 15'0\"", x: 18, y: 132, w: 120, h: 68, tag: "Wooden Flooring" },
  { id: "bath", name: "En-Suite Bath", dimensions: "10'0\" × 8'0\"", x: 144, y: 151, w: 60, h: 49 },
  { id: "deck", name: "Garden Deck", dimensions: "18'0\" × 7'0\"", x: 210, y: 151, w: 95, h: 49, tag: "Landscape" },
];

export default function InteractiveFloorPlanPreview() {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>("living");

  return (
    <div className="relative w-full h-full bg-[#0a0f1d] overflow-hidden select-none group/plan">
      {/* CAD Blueprint Grid Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cad-small-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
          </pattern>
          <pattern id="cad-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="url(#cad-small-grid)" />
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0284c7" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cad-grid)" />
      </svg>

      {/* Main Architectural SVG Floor Plan */}
      <svg
        viewBox="0 0 320 215"
        className="w-full h-full relative z-10 p-2 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Laser Scanner Gradient */}
          <linearGradient id="laser-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff2600" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff2600" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff2600" stopOpacity="0" />
          </linearGradient>

          {/* Hatching for outer boundary walls */}
          <pattern id="wall-hatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#475569" strokeWidth="1.5" />
          </pattern>
        </defs>

        {/* Outer Boundary Frame with Double Wall Thickness */}
        <rect
          x="14"
          y="31"
          width="294"
          height="172"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeOpacity="0.8"
          rx="2"
        />
        <rect
          x="12"
          y="29"
          width="298"
          height="176"
          fill="none"
          stroke="#0284c7"
          strokeWidth="1"
          strokeOpacity="0.5"
          rx="3"
        />

        {/* Room Rectangles */}
        {rooms.map((room) => {
          const isSelected = hoveredRoom === room.id;
          return (
            <g
              key={room.id}
              onMouseEnter={() => setHoveredRoom(room.id)}
              className="cursor-pointer transition-all duration-200"
            >
              {/* Room Fill */}
              <rect
                x={room.x}
                y={room.y}
                width={room.w}
                height={room.h}
                fill={isSelected ? "rgba(255, 38, 0, 0.18)" : "rgba(15, 23, 42, 0.75)"}
                stroke={isSelected ? "#ff2600" : "#38bdf8"}
                strokeWidth={isSelected ? "1.8" : "1.2"}
                strokeDasharray={room.tag === "Open to Sky" ? "4 3" : undefined}
                className="transition-all duration-300"
              />

              {/* Room Text Label */}
              <text
                x={room.x + room.w / 2}
                y={room.y + room.h / 2 - 4}
                textAnchor="middle"
                fontSize="7.5"
                fontFamily="monospace"
                fontWeight="600"
                fill={isSelected ? "#ffffff" : "#93c5fd"}
                className="transition-colors duration-200 uppercase tracking-wider select-none pointer-events-none"
              >
                {room.name}
              </text>

              {/* Room Dimensions */}
              <text
                x={room.x + room.w / 2}
                y={room.y + room.h / 2 + 7}
                textAnchor="middle"
                fontSize="6"
                fontFamily="monospace"
                fill={isSelected ? "#ff8a75" : "#64748b"}
                className="transition-colors duration-200 select-none pointer-events-none"
              >
                {room.dimensions}
              </text>

              {/* Optional tag */}
              {room.tag && (
                <text
                  x={room.x + room.w / 2}
                  y={room.y + room.h / 2 + 16}
                  textAnchor="middle"
                  fontSize="5"
                  fontFamily="monospace"
                  fill={isSelected ? "#ff2600" : "#0284c7"}
                  className="font-medium select-none pointer-events-none"
                >
                  [{room.tag}]
                </text>
              )}
            </g>
          );
        })}

        {/* Architectural Door Swing Arcs */}
        {/* Living Room Entry Door */}
        <g stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.8">
          <path d="M 18 100 A 18 18 0 0 1 36 118" strokeDasharray="2 2" />
          <line x1="18" y1="100" x2="18" y2="118" strokeWidth="1.5" />
        </g>
        {/* Master Bedroom Door */}
        <g stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.8">
          <path d="M 138 140 A 14 14 0 0 1 124 154" strokeDasharray="2 2" />
          <line x1="138" y1="140" x2="138" y2="154" strokeWidth="1.5" />
        </g>

        {/* Windows (Double Lines with Ticks) */}
        <line x1="30" y1="31" x2="80" y2="31" stroke="#ffffff" strokeWidth="2.5" />
        <line x1="240" y1="31" x2="280" y2="31" stroke="#ffffff" strokeWidth="2.5" />
        <line x1="30" y1="203" x2="70" y2="203" stroke="#ffffff" strokeWidth="2.5" />
        <line x1="230" y1="200" x2="280" y2="200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Dimension Lines (Top Dimension Line: 38' 0") */}
        <g stroke="#38bdf8" strokeWidth="0.8" opacity="0.6">
          <line x1="14" y1="20" x2="308" y2="20" />
          <line x1="14" y1="16" x2="14" y2="24" />
          <line x1="308" y1="16" x2="308" y2="24" />
          <text x="161" y="17" textAnchor="middle" fontSize="6.5" fill="#38bdf8" fontFamily="monospace" fontWeight="bold">
            38&apos; 0&quot;
          </text>
        </g>

        {/* Dimension Lines (Left Dimension Line: 42' 0") */}
        <g stroke="#38bdf8" strokeWidth="0.8" opacity="0.6">
          <line x1="6" y1="31" x2="6" y2="203" />
          <line x1="3" y1="31" x2="9" y2="31" />
          <line x1="3" y1="203" x2="9" y2="203" />
          <text x="5" y="120" textAnchor="middle" fontSize="6.5" fill="#38bdf8" fontFamily="monospace" fontWeight="bold" transform="rotate(-90 5 120)">
            42&apos; 0&quot;
          </text>
        </g>

        {/* North Compass Arrow */}
        <g transform="translate(292, 46)">
          <circle cx="0" cy="0" r="8" fill="rgba(15,23,42,0.9)" stroke="#38bdf8" strokeWidth="0.8" />
          <polygon points="0,-7 3,1 0,0 -3,1" fill="#ff2600" />
          <polygon points="0,7 3,-1 0,0 -3,-1" fill="#64748b" />
          <text x="0" y="-8.5" textAnchor="middle" fontSize="5" fill="#ffffff" fontFamily="monospace" fontWeight="bold">
            N
          </text>
        </g>

        {/* Moving CAD Laser Scanning Line Animation */}
        <motion.g
          animate={{ x: [-20, 320, -20] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
        >
          <line x1="0" y1="20" x2="0" y2="208" stroke="#ff2600" strokeWidth="1.5" strokeOpacity="0.9" />
          <rect x="-8" y="20" width="16" height="188" fill="url(#laser-grad)" />
          {/* Scan head dot */}
          <circle cx="0" cy="114" r="2.5" fill="#ffffff" stroke="#ff2600" strokeWidth="1.5" />
        </motion.g>
      </svg>

      {/* Floating Info Overlay Tags */}
      <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] bg-black/85 backdrop-blur border border-white/20 text-[10px] font-mono font-medium text-white shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CAD DRAFTING
        </span>
        <span className="px-2 py-0.5 rounded-[4px] bg-[#ff2600]/85 text-white font-mono text-[10px] font-semibold">
          2,450 SQ FT
        </span>
      </div>

      {/* Bottom Interactive Prompt */}
      <div className="absolute bottom-2 inset-x-2.5 z-20 flex items-center justify-between text-[10px] font-mono text-zinc-400 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-[4px] border border-white/10 pointer-events-none">
        <span className="text-[#38bdf8] font-medium truncate">
          {hoveredRoom ? rooms.find(r => r.id === hoveredRoom)?.name : "Hover to Inspect Rooms"}
        </span>
        <span className="text-zinc-400 shrink-0">Vastu Verified</span>
      </div>
    </div>
  );
}

