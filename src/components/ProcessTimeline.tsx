import React from "react";
import { CheckCircle2, Compass, Layers, ShieldCheck, Key } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Consultation & Plot Survey",
      tagline: "Vision & Site Feasibility",
      description: "We meet at your plot in Indore to study soil bearing capacity, sun-path orientation, Vastu preferences, and municipal setback requirements."
    },
    {
      number: "02",
      icon: Layers,
      title: "Architecture & 3D Modeling",
      tagline: "Precision Before Breaking Ground",
      description: "Our architects draft custom floor layouts, structural load drawings, and photorealistic 3D front elevations alongside a locked material BOQ."
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Civil Construction & Testing",
      tagline: "Uncompromising Structural Rigor",
      description: "RCC framing with Tata Tiscon steel and UltraTech M25 concrete. Weekly milestone updates with live cube strength test reports."
    },
    {
      number: "04",
      icon: Key,
      title: "Finishing & Handover",
      tagline: "Turnkey Generational Space",
      description: "Final sanitary testing, deep cleaning, paint touch-ups, and key handover with all architectural warranties and structural sign-offs."
    }
  ];

  return (
    <div className="relative">
      {/* Desktop connector line */}
      <div className="hidden lg:block absolute top-14 left-12 right-12 h-[1px] bg-brand-border z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="bg-white border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-accent/50 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-charcoal group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-brand-muted/40 group-hover:text-brand-accent transition-colors">
                    {step.number}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-accent font-semibold block mb-1">
                  {step.tagline}
                </span>
                <h3 className="font-display text-lg font-bold text-brand-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-[11px] font-mono text-brand-charcoal">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                <span>Stage Milestone {idx + 1} of 4</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
