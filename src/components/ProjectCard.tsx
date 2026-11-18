import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  priority?: boolean;
  className?: string;
}

export default function ProjectCard({
  project,
  featured = false,
  priority = false,
  className = "",
}: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between bg-white border border-brand-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand-accent/40 hover:shadow-xl ${className}`}
    >
      <Link href={`/projects/${project.slug}`} className="block relative w-full overflow-hidden bg-brand-surface">
        <div className={`relative w-full ${featured ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden`}>
          <Image
            src={project.heroImage}
            alt={`${project.title} — ${project.category} in ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority}
          />
          {/* Subtle gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Top category chip */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-brand-charcoal font-semibold shadow-sm">
              {project.categoryLabel || project.category}
            </span>
          </div>

          {/* Status chip */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-charcoal/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-medium">
              &bull; {project.status}
            </span>
          </div>

          {/* Bottom quick stats */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
            <span className="flex items-center gap-1.5 font-medium drop-shadow-md">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>{project.location}</span>
            </span>
            <span className="font-mono text-[11px] tracking-wide bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
              {project.builtUpArea}
            </span>
          </div>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-muted">
              {project.year} &middot; {project.category}
            </span>
            <div className="w-7 h-7 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-colors flex-shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-bold text-brand-charcoal group-hover:text-brand-accent transition-colors">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="mt-3 text-sm text-brand-muted line-clamp-2 leading-relaxed">
            {project.excerpt}
          </p>
        </div>

        <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-charcoal font-medium">
          <span className="font-mono text-brand-muted">Plot: {project.plotSize}</span>
          <Link
            href={`/projects/${project.slug}`}
            className="text-brand-accent hover:text-brand-accentHover font-semibold inline-flex items-center gap-1"
          >
            <span>View Architecture</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
