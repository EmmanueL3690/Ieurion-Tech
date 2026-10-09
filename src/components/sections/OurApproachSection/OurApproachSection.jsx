// src/components/sections/02-OurApproachSection.jsx

import React from "react";
import { Search, Code2, TestTube2, Rocket } from "lucide-react";

const APPROACH_DATA = {
  eyebrow: "OUR APPROACH",
  title: "FROM CURIOSITY TO CREATION.",
  description:
    "Explore possibilities, build solutions, research new ideas, and ship meaningful technology.",
  steps: [
    {
      id: "explore",
      stepNumber: "01",
      title: "Explore",
      description: "Ask questions and find opportunities.",
      icon: Search,
    },
    {
      id: "build",
      stepNumber: "02",
      title: "Build",
      description: "Turn ideas into real solutions.",
      icon: Code2,
    },
    {
      id: "research",
      stepNumber: "03",
      title: "Research",
      description: "Investigate and learn new things.",
      icon: TestTube2,
    },
    {
      id: "ship",
      stepNumber: "04",
      title: "Ship",
      description: "Create, test and make an impact.",
      icon: Rocket,
    },
  ],
};

export default function OurApproachSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {APPROACH_DATA.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
            {APPROACH_DATA.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base md:text-lg leading-relaxed">
            {APPROACH_DATA.description}
          </p>
        </div>

        {/* Step Flow Component */}
        <div className="mt-16 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400/50 to-blue-500/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {APPROACH_DATA.steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {/* Step Header / Icon Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 transition-colors shadow-inner">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold group-hover:text-cyan-400 transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}