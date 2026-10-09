// src/components/sections/12-JoinJourneySection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const JOIN_DATA = {
  eyebrow: "JOIN THE JOURNEY",
  title: "WHAT WILL YOU BUILD?",
  description:
    "Explore the ecosystem, discover projects, and find your place in the work ahead.",
  primaryCta: {
    label: "Join the House",
    href: "/community",
  },
  secondaryCta: {
    label: "Partner With IEURION",
    href: "/partners",
  },
  bgImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80",
};

export default function JoinJourneySection() {
  return (
    <section className="relative px-6 py-28 md:py-36 md:px-12 lg:px-20 overflow-hidden bg-[#060913]">
      {/* Background Graphic & Glow Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src={JOIN_DATA.bgImage}
          alt="IEURION Mountain Horizon"
          className="w-full h-full object-cover object-bottom opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/80 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {JOIN_DATA.eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight">
          {JOIN_DATA.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {JOIN_DATA.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={JOIN_DATA.primaryCta.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm transition-all shadow-xl shadow-cyan-500/20 hover:scale-105"
          >
            {JOIN_DATA.primaryCta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to={JOIN_DATA.secondaryCta.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-sm transition-all"
          >
            {JOIN_DATA.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}