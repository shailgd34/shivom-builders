"use client";

// ============================================================================
// STRUKT MOTION SYSTEM (Next.js & React Native Port of STRUKT Framer Template)
// Inspired by https://strukt-template.framer.website/
// ============================================================================
// Features:
// 1. withEmerge / <Emerge>: The block under the hero rises out of it while scrolling
//    (0 -> 55% of viewport: y 135 -> 0, scale 0.95 -> 1, opacity 0.3 -> 1, blur 18px -> 0).
// 2. withTimeline / <StruktTimeline>: Sticky container pinning the milestone timeline
//    for 4.2x viewport height (420vh). Scrubbed progress line, copy swaps (blur 10px, y 30px),
//    image crossfades (scale 1.08 -> 1), and interactive node click-to-jump.
// 3. withPageMotion / <PageMotion>: Global DOM micro-interactions scanner:
//    - "[count]" text layers count up smoothly from 0 when in view (2s, easeOut)
//    - "Bar Fill" elements animate from 0% to target width with 0.15s stagger
//    - "[parallax]" images smoothly shift -8% to +8% as they cross the viewport
//    - "[lift]" elements elevate 6px on hover (0.4s ease)
//    - "[mono]" elements start grayscale(1) and transition to color on hover
//    - "[vw]" responsive giant typography (e.g. 19vw footer wordmark)
//    - Form field 1px focus accent line expanding from left (0.55s ease)
//    - Service row hover accent & 104% photo scale
// ============================================================================

import React, { ComponentType, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";

const EASE = "cubic-bezier(.2,.7,.2,1)";
const NAV_CLEARANCE = 90;

export function useViewportHeight(): number {
  const [vh, setVh] = useState(900);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setVh(window.innerHeight || 900);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  return vh;
}

// ============================================================================
// 1. EMERGE (Scrubbed Rise & De-blur out of the Hero)
// ============================================================================

export function useEmergeScroll() {
  const reduce = useReducedMotion();
  const vh = useViewportHeight();
  const { scrollY } = useScroll();
  const end = vh * 0.55;

  const y = useTransform(scrollY, [0, end], [135, 0], { clamp: true });
  const scale = useTransform(scrollY, [0, end], [0.95, 1], { clamp: true });
  const opacity = useTransform(scrollY, [0, end], [0.3, 1], { clamp: true });
  const blurVal = useTransform(scrollY, (v: number) => {
    const b = Math.max(0, 18 * (1 - v / end));
    return b < 0.1 ? 0 : Number(b.toFixed(1));
  });
  const filter = useTransform(blurVal, (b: number) => (b === 0 ? "none" : `blur(${b}px)`));

  return { reduce, y, scale, opacity, filter, end };
}

/**
 * Higher-Order Component matching STRUKT's withEmerge
 */
export function withEmerge<P extends object>(Component: ComponentType<P>): React.FC<P> {
  return function WithEmergeComponent(props: P) {
    const { reduce, y, scale, opacity, filter } = useEmergeScroll();

    if (reduce) {
      return <Component {...props} />;
    }

    return (
      <motion.div
        style={{
          y,
          scale,
          opacity,
          filter,
          transformOrigin: "50% 0%",
          willChange: "transform, opacity, filter",
        }}
        className="w-full"
      >
        <Component {...props} />
      </motion.div>
    );
  };
}

/**
 * Idiomatic React / Next.js Component wrapper for Emerge
 */
export function Emerge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { reduce, y, scale, opacity, filter } = useEmergeScroll();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        filter,
        transformOrigin: "50% 0%",
        willChange: "transform, opacity, filter",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// 2. TIMELINE (420vh Sticky Milestone Scrubbing)
// ============================================================================

export interface MilestoneItem {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  duration?: string;
}

/**
 * Standalone STRUKT Sticky 420vh Timeline Component
 */
export function StruktTimeline({
  milestones,
  accentColor = "#C85A32",
}: {
  milestones: MilestoneItem[];
  accentColor?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressVal, setProgressVal] = useState(0);
  const n = milestones.length;

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !containerRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const section = sectionRef.current;
    const container = containerRef.current;

    let range = 1;
    const layout = () => {
      const vh = window.innerHeight;
      container.style.position = "sticky";
      const h = container.getBoundingClientRect().height;
      container.style.top = `${vh >= h + NAV_CLEARANCE ? NAV_CLEARANCE : Math.min(0, vh - h)}px`;
      range = vh * 3.6; // 360vh scrub range for silky smooth transition
      section.style.height = `${h + range}px`;
    };

    let raf = 0;
    const tick = () => {
      raf = 0;
      const top = -section.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, top / range));
      setProgressVal(p);
      const curr = Math.min(n - 1, Math.floor(p * n));
      setActiveIndex(curr);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onResize = () => {
      layout();
      tick();
    };

    layout();
    tick();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n]);

  const jumpTo = (idx: number) => {
    if (!sectionRef.current) return;
    const vh = window.innerHeight;
    const range = vh * 3.6;
    const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + ((idx + 0.5) / n) * range,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-brand-dark text-white overflow-clip">
      {/* Pinned Sticky Viewport Container */}
      <div
        ref={containerRef}
        data-framer-name="Container"
        className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col justify-between min-h-[75vh]"
      >
        {/* Top Header & Progress Bar */}
        <div className="w-full pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-brand-accent mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>THE SHIVOM STANDARD · MILESTONE TIMELINE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              Predictable execution, <br />
              <span className="text-zinc-400 font-light italic">from foundation to key handover.</span>
            </h2>
          </div>

          {/* Milestone Counter */}
          <div data-framer-name="Timeline Counter" className="text-right">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-400 block mb-1">
              Active Milestone
            </span>
            <p className="font-mono text-3xl md:text-4xl font-bold text-white tracking-tighter">
              {String(activeIndex + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Scrubbed Progress Bar */}
        <div className="relative w-full h-[2px] bg-white/10 my-8 overflow-hidden rounded-full">
          <div
            data-framer-name="Timeline Fill"
            className="absolute left-0 top-0 bottom-0 bg-brand-accent transition-transform duration-75"
            style={{
              width: "100%",
              transformOrigin: "0 50%",
              transform: `scaleX(${Math.max(progressVal, 1 / n / 2)})`,
            }}
          />
        </div>

        {/* Milestone Steps Click Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {milestones.map((m, i) => {
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            return (
              <button
                key={m.id}
                onClick={() => jumpTo(i)}
                data-framer-name="Timeline Node"
                className="group text-left flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/[0.03]"
              >
                <div
                  data-framer-name="Dot"
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white scale-125 ring-4 ring-brand-accent/50"
                      : isPast
                      ? "bg-brand-accent"
                      : "bg-zinc-600"
                  }`}
                />
                <div className="overflow-hidden">
                  <span
                    className={`block text-[10px] font-mono uppercase tracking-widest ${
                      isActive ? "text-brand-accent font-bold" : "text-zinc-500"
                    }`}
                  >
                    Step {m.stepNumber}
                  </span>
                  <p
                    className={`text-xs md:text-sm font-medium truncate transition-colors duration-200 ${
                      isActive ? "text-white font-semibold" : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {m.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Split Content Area: Left Copy, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center flex-1">
          {/* Milestone Copy Swap */}
          <div
            data-framer-name="Timeline Copy"
            className="lg:col-span-6 relative min-h-[300px] flex items-center"
          >
            {milestones.map((m, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={m.id}
                  data-framer-name={`Milestone ${i + 1}`}
                  className="absolute inset-0 flex flex-col justify-center transition-all duration-500 pointer-events-none"
                  style={{
                    opacity: isActive ? 1 : 0,
                    filter: isActive ? "none" : "blur(10px)",
                    transform: isActive ? "translateY(0)" : "translateY(30px)",
                    pointerEvents: isActive ? "auto" : "none",
                    transitionTimingFunction: "cubic-bezier(.2,.7,.2,1)",
                  }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-zinc-300 w-fit mb-4">
                    <span>Phase {m.stepNumber}</span>
                    {m.duration && <span>· {m.duration}</span>}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold font-display text-white mb-3">
                    {m.title}
                  </h3>
                  <p className="text-brand-accent text-sm md:text-base font-medium mb-4">
                    {m.tagline}
                  </p>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
                    {m.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {m.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs text-zinc-300 font-mono"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Milestone Media Crossfade with Zoom */}
          <div
            data-framer-name="Timeline Media"
            className="lg:col-span-6 relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
          >
            {milestones.map((m, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={m.id}
                  data-framer-name={`Milestone Image ${i + 1}`}
                  className="absolute inset-0 transition-all duration-700 pointer-events-none"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(1.08)",
                    transitionTimingFunction: "cubic-bezier(.2,.7,.2,1)",
                  }}
                >
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300 font-mono bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <span>{m.title}</span>
                    <span className="text-brand-accent">Step {m.stepNumber} / {String(n).padStart(2, "0")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * HOC version of withTimeline for Framer component compatibility
 */
export function withTimeline<P extends object>(Component: ComponentType<P>): React.FC<P> {
  return function WithTimelineComponent(props: P) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const section = ref.current?.firstElementChild as HTMLElement | null;
      if (!section) return;
      const q = (n: string) => section.querySelector(`[data-framer-name="${n}"]`) as HTMLElement | null;
      const qa = (sel: string) => Array.from(section.querySelectorAll(sel)) as HTMLElement[];
      const container = q("Container");
      const copy = q("Timeline Copy");
      const media = q("Timeline Media");
      const fill = q("Timeline Fill");
      const counter = q("Timeline Counter");
      const items = copy
        ? (Array.from(copy.children) as HTMLElement[]).filter((e) =>
            (e.getAttribute("data-framer-name") || "").startsWith("Milestone")
          )
        : [];
      const images = qa('[data-framer-name^="Milestone Image"]');
      const nodes = qa('[data-framer-name="Timeline Node"]');
      const n = items.length;
      if (!container || !copy || n < 2) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const t = (s: string) => (reduce ? "none" : s);

      copy.style.position = "relative";
      items.forEach((el) => {
        Object.assign(el.style, {
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          transition: t(`opacity .6s ${EASE}, transform .7s ${EASE}, filter .6s ${EASE}`),
        });
      });
      if (media) media.style.position = "relative";
      images.forEach((el) => {
        Object.assign(el.style, {
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          transition: t(`opacity .8s ${EASE}, transform 1.2s ${EASE}`),
        });
      });
      if (fill) Object.assign(fill.style, { width: "100%", transformOrigin: "0 50%" });
      nodes.forEach((node, i) => {
        node.style.cursor = "pointer";
        node.onclick = () => jump(i);
      });

      let range = 1;
      const layout = () => {
        const vh = window.innerHeight;
        container.style.position = "sticky";
        const h = container.getBoundingClientRect().height;
        container.style.top = `${vh >= h + NAV_CLEARANCE ? NAV_CLEARANCE : Math.min(0, vh - h)}px`;
        const cs = getComputedStyle(section);
        const pad = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
        range = vh * 4.2;
        section.style.height = `${h + pad + range}px`;
        section.style.justifyContent = "flex-start";
      };
      let active = -1;
      const setActive = (a: number) => {
        if (a === active) return;
        active = a;
        items.forEach((el, i) => {
          const on = i === a;
          el.style.opacity = on ? "1" : "0";
          el.style.filter = on ? "none" : "blur(10px)";
          el.style.transform = on ? "translateY(0)" : "translateY(30px)";
          el.style.pointerEvents = on ? "auto" : "none";
        });
        images.forEach((el, i) => {
          el.style.opacity = i === a ? "1" : "0";
          el.style.transform = i === a ? "scale(1)" : "scale(1.08)";
        });
        nodes.forEach((node, i) => {
          const c = i === a ? "#fff" : i < a ? "rgba(255,255,255,.7)" : "#8a8a8a";
          const dot = node.querySelector('[data-framer-name="Dot"]') as HTMLElement | null;
          if (dot) dot.style.background = c;
          node.querySelectorAll("p").forEach((p) => ((p as HTMLElement).style.color = c));
        });
        const p = counter?.querySelector("p") as HTMLElement | null;
        if (p) p.textContent = `${String(a + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
      };
      const progress = () => Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range));
      const jump = (i: number) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top + ((i + 0.5) / n) * range,
          behavior: reduce ? "auto" : "smooth",
        });
      };
      let raf = 0;
      const tick = () => {
        raf = 0;
        const p = progress();
        if (fill) fill.style.transform = `scaleX(${Math.max(p, 1 / n / 2)})`;
        setActive(Math.min(n - 1, Math.floor(p * n)));
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(tick);
      };
      const onResize = () => {
        layout();
        tick();
      };
      layout();
      tick();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        if (raf) cancelAnimationFrame(raf);
      };
    }, []);
    return (
      <div ref={ref} style={{ display: "contents" }}>
        <Component {...props} />
      </div>
    );
  };
}

// ============================================================================
// 3. PAGE MOTION (Micro-Interactions, Count, Bar, Lift, Mono, Parallax, Line)
// ============================================================================

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function setupCount(el: HTMLElement, reduce: boolean, io: IntersectionObserver) {
  const p = (el.querySelector("p, h1, h2, h3, h4, h5, h6, span") as HTMLElement) || el;
  const text = p.textContent || "";
  const m = text.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m) return;
  const [, pre, num, post] = m;
  const target = parseFloat(num.replace(",", "."));
  const decimals = (num.split(/[.,]/)[1] || "").length;
  (el as any).__count = () => {
    if (reduce || target === 0) return;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / 2000);
      p.textContent = pre + (target * easeOut(t)).toFixed(decimals) + post;
      if (t < 1) requestAnimationFrame(step);
      else p.textContent = text;
    };
    p.textContent = pre + (0).toFixed(decimals) + post;
    requestAnimationFrame(step);
  };
  io.observe(el);
}

function setupBar(el: HTMLElement, reduce: boolean, io: IntersectionObserver) {
  if (reduce) return;
  const group = el.parentElement?.parentElement?.parentElement;
  const siblings = group ? Array.from(group.querySelectorAll('[data-framer-name="Bar Fill"], .bar-fill')) : [el];
  const delay = Math.max(0, siblings.indexOf(el)) * 0.15;
  el.style.transformOrigin = "0 50%";
  el.style.scale = "0 1";
  (el as any).__count = () => {
    el.style.transition = `scale 1.6s cubic-bezier(.65,0,.35,1) ${delay}s`;
    el.style.scale = "1 1";
  };
  io.observe(el);
}

function setupLift(el: HTMLElement, reduce: boolean) {
  if (reduce) return;
  el.style.transition = `translate .4s ${EASE}`;
  el.addEventListener("pointerenter", () => (el.style.translate = "0 -6px"));
  el.addEventListener("pointerleave", () => (el.style.translate = "0 0"));
}

function setupMono(el: HTMLElement, reduce: boolean) {
  el.style.filter = "grayscale(1)";
  if (!reduce) el.style.transition = `filter .5s ${EASE}`;
  el.addEventListener("pointerenter", () => (el.style.filter = "grayscale(0)"));
  el.addEventListener("pointerleave", () => (el.style.filter = "grayscale(1)"));
}

const SITE_CSS = `
.framer-form-input-wrapper, .strukt-input-wrap {
    background-image: linear-gradient(var(--strukt-accent, #C85A32), var(--strukt-accent, #C85A32));
    background-repeat: no-repeat; background-position: left bottom; background-size: 0% 2px;
    transition: background-size 0.55s cubic-bezier(.2,.7,.2,1);
}
.framer-form-input-wrapper:focus-within, .strukt-input-wrap:focus-within { background-size: 100% 2px; }
[data-strukt-current] { background-color: rgba(200, 90, 50, 0.12) !important; color: #C85A32 !important; }
[data-framer-name="Service Row"] [data-framer-name="Arrow Square"], .service-row-arrow { transition: background-color 0.35s ease, transform 0.35s ease; }
[data-framer-name="Service Row"]:hover [data-framer-name="Arrow Square"], .group:hover .service-row-arrow { background-color: #C85A32 !important; color: #ffffff !important; transform: rotate(45deg); }
[data-framer-name="Service Row"] [data-framer-name="Service Image"], .service-row-img-wrap { overflow: hidden; }
[data-framer-name="Service Row"] [data-framer-name="Service Image"] > img, .service-row-img { transition: transform 0.8s cubic-bezier(.2,.7,.2,1); }
[data-framer-name="Service Row"]:hover [data-framer-name="Service Image"] > img, .group:hover .service-row-img { transform: scale(1.06); }
`;

function injectSiteStyles() {
  if (typeof document === "undefined" || document.getElementById("strukt-site-css")) return;
  const style = document.createElement("style");
  style.id = "strukt-site-css";
  style.textContent = SITE_CSS;
  document.head.appendChild(style);
}

function setupViewportZoom(el: HTMLElement) {
  const text = el.querySelector("p, h1, h2, h3, h4, h5, h6, span") as HTMLElement | null;
  if (!text) return;
  text.style.fontSize = "18.5vw";
  text.style.lineHeight = "1";
}

export function useStruktPageMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    injectSiteStyles();

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          (e.target as any).__count?.();
        }),
      { rootMargin: "0px 0px -15% 0px" }
    );

    const parallax: HTMLElement[] = [];
    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-framer-name], [data-strukt-motion]").forEach((el) => {
        if ((el as any).__strukt) return;
        const name = el.getAttribute("data-framer-name") || el.getAttribute("data-strukt-motion") || "";

        if (name.endsWith("[count]") || el.classList.contains("strukt-count")) {
          setupCount(el, reduce, io);
        } else if (name === "Bar Fill" || el.classList.contains("bar-fill")) {
          setupBar(el, reduce, io);
        } else if (name.endsWith("[lift]") || el.classList.contains("strukt-lift")) {
          setupLift(el, reduce);
        } else if (name.endsWith("[mono]") || el.classList.contains("strukt-mono")) {
          setupMono(el, reduce);
        } else if (name.endsWith("[gray]")) {
          el.style.filter = "grayscale(1)";
        } else if (name.endsWith("[vw]") || el.classList.contains("strukt-vw")) {
          setupViewportZoom(el);
        } else if (name.endsWith("[parallax]") || el.classList.contains("strukt-parallax")) {
          if (!reduce) {
            el.style.overflow = "hidden";
            parallax.push(el);
          }
        }
        (el as any).__strukt = true;
      });
    };

    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of parallax) {
        if (!el.isConnected) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom < -50 || r.top > vh + 50) continue;
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        const fill = (el.querySelector("img, [data-framer-background-image-wrapper]") as HTMLElement) || (el.firstElementChild as HTMLElement);
        if (!fill) continue;
        fill.style.scale = "1.2";
        fill.style.translate = `0 ${((p * 2 - 1) * 0.08 * r.height).toFixed(1)}px`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    scan();
    tick();

    const mo = new MutationObserver(() => {
      scan();
      onScroll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * Global Page Motion component to embed in Root Layout
 */
export function PageMotionProvider({ children }: { children: React.ReactNode }) {
  useStruktPageMotion();
  return <>{children}</>;
}

/**
 * HOC version of withPageMotion for Framer compatibility
 */
export function withPageMotion<P extends object>(Component: ComponentType<P>): React.FC<P> {
  return function WithPageMotionComponent(props: P) {
    useStruktPageMotion();
    return <Component {...props} />;
  };
}
