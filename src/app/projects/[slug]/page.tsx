import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowRight, ArrowLeft, Check, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import projectsData from "@/data/projects.json";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Shivom Builders Indore`,
    description: project.excerpt,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Next project link
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="w-full bg-white text-[#131313]">
      {/* ====================================================================
          TOP BREADCRUMB
         ==================================================================== */}
      <div className="pt-24 px-[26px] bg-white">
        <div className="max-w-[1335px] mx-auto flex items-center justify-between py-4 border-b border-[#e4e4e4] text-[12px] font-mono">
          <div className="flex items-center gap-2 text-[#6e6e6e]">
            <Link href="/" className="hover:text-[#131313] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#131313] transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#131313] font-medium truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[#131313] hover:text-[#ff2600] transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All projects</span>
          </Link>
        </div>
      </div>

      {/* ====================================================================
          PROJECT HEADER GRID
         ==================================================================== */}
      <header className="pt-12 px-[26px] pb-12 bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#f2f2f2] text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] border border-[#e4e4e4] font-medium">
                  {project.categoryLabel}
                </span>
                <span className="text-[12px] font-mono text-[#6e6e6e]">
                  {project.location} &middot; {project.year}
                </span>
              </div>
              <h1 className="font-display text-[38px] sm:text-[52px] lg:text-[64px] font-medium tracking-tight text-[#131313] leading-[1.05]">
                {project.title}
              </h1>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="font-sans text-[18px] text-[#4a4a4a] leading-[26px]">
                {project.excerpt}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          COVER HERO PHOTO & TECHNICAL RULER
         ==================================================================== */}
      <div className="px-[10px] sm:px-[26px]">
        <div className="max-w-[1335px] mx-auto">
          <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[720px] rounded-[10px] overflow-hidden bg-zinc-900 border border-[#e4e4e4]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div data-framer-name="Ruler" className="w-full h-[14px] bg-ruler-ticks opacity-35 mt-2" />
        </div>
      </div>

      {/* ====================================================================
          STATS BAND (4 Metric Cells)
         ==================================================================== */}
      <section className="py-12 px-[26px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[#e4e4e4]">
            <div className="border-l-2 border-[#ff2600] pl-5">
              <p className="font-display text-[32px] sm:text-[40px] font-medium text-[#131313] leading-none">
                {project.builtUpArea}
              </p>
              <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-2">
                Built-Up Area
              </p>
            </div>
            <div className="border-l-2 border-[#e4e4e4] pl-5">
              <p className="font-display text-[32px] sm:text-[40px] font-medium text-[#131313] leading-none">
                {project.timeline.split(" ")[0]} {project.timeline.split(" ")[1]}
              </p>
              <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-2">
                Groundbreak to Handover
              </p>
            </div>
            <div className="border-l-2 border-[#e4e4e4] pl-5">
              <p className="font-display text-[32px] sm:text-[40px] font-medium text-[#ff2600] leading-none">
                100%
              </p>
              <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-2">
                On-Schedule Delivery
              </p>
            </div>
            <div className="border-l-2 border-[#e4e4e4] pl-5">
              <p className="font-display text-[32px] sm:text-[40px] font-medium text-[#131313] leading-none">
                Zero
              </p>
              <p className="text-[12px] font-mono text-[#6e6e6e] uppercase tracking-[0.04em] mt-2">
                Cost Overruns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SPLIT STICKY DETAILS & NARRATIVE BODY
         ==================================================================== */}
      <section className="py-16 px-[26px] bg-white">
        <div className="max-w-[1335px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Project Details Card */}
            <aside className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="p-6 rounded-[10px] bg-[#f2f2f2] border border-[#e4e4e4]">
                <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-4 font-medium">
                  Project Details
                </span>

                <dl className="divide-y divide-[#e4e4e4] text-[13px]">
                  <div className="py-3 flex justify-between">
                    <dt className="font-mono text-[#6e6e6e]">Location</dt>
                    <dd className="font-medium text-[#131313]">{project.location}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="font-mono text-[#6e6e6e]">Sector</dt>
                    <dd className="font-medium text-[#131313]">{project.categoryLabel}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="font-mono text-[#6e6e6e]">Plot Size</dt>
                    <dd className="font-medium text-[#131313]">{project.plotSize}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="font-mono text-[#6e6e6e]">Built-up Area</dt>
                    <dd className="font-medium text-[#131313]">{project.builtUpArea}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="font-mono text-[#6e6e6e]">Handover Year</dt>
                    <dd className="font-medium text-[#131313]">{project.year}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="font-mono text-[#6e6e6e]">Status</dt>
                    <dd className="font-medium text-[#127a37] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#127a37]" />
                      {project.status}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 pt-6 border-t border-[#e4e4e4]">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-[6px] bg-[#131313] hover:bg-[#ff2600] text-white font-mono font-medium text-[12.5px] uppercase tracking-[0.02em] transition-colors flex items-center justify-center gap-2 group"
                  >
                    <span>Start a similar project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Narrative Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-2 font-medium">
                  The Brief &amp; Context
                </span>
                <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#131313] tracking-tight mb-4">
                  Engineering an enduring architectural sanctuary.
                </h2>
                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[24px]">
                  {project.overview}
                </p>
              </div>

              <div>
                <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-2 font-medium">
                  Civil Execution
                </span>
                <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#131313] tracking-tight mb-4">
                  Precision structural execution from ground up.
                </h2>
                <p className="font-sans text-[16px] text-[#4a4a4a] leading-[24px]">
                  {project.architectureStory}
                </p>
              </div>

              {/* Specifications Table */}
              <div>
                <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-4 font-medium">
                  Material &amp; Structural Specs
                </span>
                <div className="rounded-[10px] border border-[#e4e4e4] overflow-hidden divide-y divide-[#e4e4e4] bg-[#f2f2f2]">
                  {project.specifications.map((spec, i) => (
                    <div key={i} className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 text-[14px]">
                      <span className="sm:col-span-4 font-mono text-[#6e6e6e] font-medium">
                        {spec.label}
                      </span>
                      <span className="sm:col-span-8 text-[#131313] font-sans">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-4 font-medium">
                  Key Milestones Achieved
                </span>
                <div className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-[6px] bg-[#f2f2f2] border border-[#e4e4e4]">
                      <div className="w-5 h-5 rounded-full bg-[#127a37]/10 text-[#127a37] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[14px] text-[#131313] font-sans">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PHOTO GALLERY
         ==================================================================== */}
      <section className="py-16 px-[26px] bg-[#f2f2f2]">
        <div className="max-w-[1335px] mx-auto">
          <div className="pb-8 border-b border-[#e4e4e4] mb-8">
            <span className="text-[12px] font-mono uppercase tracking-[0.04em] text-[#ff2600] block mb-2 font-medium">
              Visual Documentation
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#131313] tracking-tight">
              On-site craftsmanship &amp; finished elevations.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.slice(0, 4).map((img, i) => (
              <div key={i} className="relative h-[320px] sm:h-[400px] rounded-[10px] overflow-hidden bg-zinc-900 border border-[#e4e4e4] group">
                <Image
                  src={img}
                  alt={`${project.title} view ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          NEXT PROJECT BANNER
         ==================================================================== */}
      <section className="py-16 px-[26px] bg-white border-t border-[#e4e4e4]">
        <div className="max-w-[1335px] mx-auto">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 rounded-[10px] bg-[#131313] text-white hover:bg-black transition-all"
          >
            <div>
              <span className="text-[12px] font-mono text-[#ff2600] uppercase tracking-[0.04em] block mb-2 font-medium">
                Next Case Study
              </span>
              <h3 className="font-display text-[26px] sm:text-[32px] font-medium group-hover:text-[#ff2600] transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-[13px] font-mono text-zinc-400 mt-1">
                {nextProject.location} &middot; {nextProject.categoryLabel}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-[#131313] flex items-center justify-center group-hover:bg-[#ff2600] group-hover:text-white transition-colors flex-shrink-0">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </section>

      {/* ====================================================================
          CTA BLOCK
         ==================================================================== */}
      <CTASection
        title="Ready to build?"
        subtitle="Let's talk about your plot."
        intro={`Like what you see in ${project.title}? Discuss your plot requirements and timeline with our engineering desk.`}
      />
    </article>
  );
}
