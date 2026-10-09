// src/components/sections/06-CommunitySection.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  Sparkles,
  Users,
  Compass,
  HeartHandshake,
  Rocket,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const COMMUNITY_DATA = {
  eyebrow: "COMMUNITY",
  title: "BUILDERS MAKE THE HOUSE.",
  description:
    "A community of curious minds, skilled builders, and people who lift others up.",
  primaryCta: {
    label: "Meet the Builders",
    href: "/community",
  },
  secondaryCta: {
    label: "Join the Community",
    href: "/community",
  },
  pillars: [
    {
      id: "curiosity",
      title: "Curiosity",
      description: "Ask better questions",
      icon: HelpCircle,
    },
    {
      id: "craft",
      title: "Craft",
      description: "Build with quality",
      icon: Sparkles,
    },
    {
      id: "collaboration",
      title: "Collaboration",
      description: "Better together",
      icon: Users,
    },
    {
      id: "ownership",
      title: "Ownership",
      description: "Take initiative",
      icon: Compass,
    },
    {
      id: "contribution",
      title: "Contribution",
      description: "Share and support",
      icon: HeartHandshake,
    },
    {
      id: "shipping",
      title: "Shipping",
      description: "Turn ideas into impact",
      icon: Rocket,
    },
  ],
};

export default function CommunitySection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]/80 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Info & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                {COMMUNITY_DATA.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight leading-tight">
                {COMMUNITY_DATA.title}
              </h2>
              <p className="text-slate-400 mt-3 text-base leading-relaxed">
                {COMMUNITY_DATA.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={COMMUNITY_DATA.primaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md shadow-cyan-500/20"
              >
                {COMMUNITY_DATA.primaryCta.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to={COMMUNITY_DATA.secondaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold transition-all"
              >
                {COMMUNITY_DATA.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right Side: 2x3 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {COMMUNITY_DATA.pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {pillar.description}
                    </p>
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