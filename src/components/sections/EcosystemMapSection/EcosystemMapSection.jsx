// src/components/sections/10-EcosystemMapSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const ECOSYSTEM_MAP_DATA = {
  eyebrow: "ECOSYSTEM",
  title: "ONE ECOSYSTEM. ENDLESS POSSIBILITIES.",
  description:
    "Everything connects. Every area supports the bigger picture.",
  exploreCta: {
    label: "Explore the Ecosystem",
    href: "/community",
  },
  leftNodes: [
    { label: "Developer House", href: "/developer-house" },
    { label: "Build Forge", href: "/build-forge" },
    { label: "Research", href: "/research" },
    { label: "Hackathons", href: "/hackathons" },
    { label: "Coders Cup", href: "/coders-cup" },
  ],
  rightNodes: [
    { label: "Robotics Lab", href: "/robotics" },
    { label: "Residency", href: "/residency" },
    { label: "Projects & Products", href: "/products" },
    { label: "Community", href: "/community" },
    { label: "Partners", href: "/partners" },
  ],
};

export default function EcosystemMapSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              {ECOSYSTEM_MAP_DATA.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
              {ECOSYSTEM_MAP_DATA.title}
            </h2>
            <p className="text-slate-400 mt-3 text-base md:text-lg leading-relaxed">
              {ECOSYSTEM_MAP_DATA.description}
            </p>
          </div>

          <Link
            to={ECOSYSTEM_MAP_DATA.exploreCta.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold text-xs tracking-wide transition-all self-start md:self-auto"
          >
            {ECOSYSTEM_MAP_DATA.exploreCta.label}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Diagram Interactive Map Layout */}
        <div className="relative bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 md:p-12 overflow-hidden">
          {/* Background Glow Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
            {/* Left Node Column */}
            <div className="space-y-3">
              {ECOSYSTEM_MAP_DATA.leftNodes.map((node) => (
                <Link
                  key={node.label}
                  to={node.href}
                  className="block p-3 px-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 text-right text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 transition-all shadow-sm"
                >
                  {node.label} &rarr;
                </Link>
              ))}
            </div>

            {/* Center Core Node */}
            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative group">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-cyan-500/20 via-slate-900 to-blue-600/20 border-2 border-cyan-400/60 flex flex-col items-center justify-center shadow-2xl shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-cyan-400 mb-1 animate-pulse" />
                  <span className="text-sm font-extrabold tracking-widest text-white font-mono">
                    IEURION
                  </span>
                </div>
              </div>
            </div>

            {/* Right Node Column */}
            <div className="space-y-3">
              {ECOSYSTEM_MAP_DATA.rightNodes.map((node) => (
                <Link
                  key={node.label}
                  to={node.href}
                  className="block p-3 px-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 text-left text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 transition-all shadow-sm"
                >
                  &larr; {node.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}