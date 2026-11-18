import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative bg-white border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-brand-accent/50 hover:shadow-lg">
      {/* Top Image Preview */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-surface">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-brand-charcoal text-white font-mono text-xs font-bold tracking-wider">
            {service.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold block mb-1">
            {service.tagline}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-charcoal">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
          <Link
            href={`/services#${service.id}`}
            className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal group-hover:text-brand-accent flex items-center gap-1.5 transition-colors"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/contact"
            className="text-xs font-mono text-brand-muted hover:text-brand-charcoal"
          >
            Get Estimate &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
