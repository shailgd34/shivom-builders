import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  actionText,
  actionHref,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 ${
        align === "center" ? "text-center md:items-center" : ""
      } ${className}`}
    >
      <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
        {eyebrow && (
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
            <span
              className={`text-xs font-mono uppercase tracking-[0.2em] font-semibold ${
                isDark ? "text-zinc-400" : "text-brand-muted"
              }`}
            >
              {eyebrow}
            </span>
          </div>
        )}
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
            isDark ? "text-white" : "text-brand-charcoal"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-base md:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-brand-muted"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionHref && (
        <div className="flex-shrink-0">
          <Link
            href={actionHref}
            className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase pb-1 border-b transition-colors group ${
              isDark
                ? "text-zinc-300 border-zinc-700 hover:text-white hover:border-brand-accent"
                : "text-brand-charcoal border-brand-charcoal/30 hover:text-brand-accent hover:border-brand-accent"
            }`}
          >
            <span>{actionText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
