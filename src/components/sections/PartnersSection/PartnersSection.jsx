// src/components/sections/08-PartnersSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Building2,
  Microscope,
  GraduationCap,
  Users,
  Coins,
  Send,
  ArrowRight,
} from "lucide-react";

const PARTNERS_DATA = {
  eyebrow: "PARTNERS & CHALLENGES",
  title: "BUILD WITH US.",
  description:
    "Partner, collaborate, and bring your challenges. Let's build real-world solutions together.",
  categories: [
    { id: "technology", label: "Technology", desc: "Tools & questions", icon: Cpu },
    { id: "industry", label: "Industry", desc: "Real-world problems", icon: Building2 },
    { id: "research", label: "Research", desc: "Explore & innovate", icon: Microscope },
    { id: "university", label: "University", desc: "Foster & learning", icon: GraduationCap },
    { id: "community", label: "Community", desc: "Events & knowledge", icon: Users },
    { id: "funding", label: "Funding", desc: "Growth & research", icon: Coins },
  ],
  challengeBox: {
    badge: "BRING US A HARD PROBLEM.",
    steps: ["Problem", "Research", "Challenge", "Build", "Demo", "Pilot"],
    ctaLabel: "Submit a Challenge",
    href: "/challenges",
  },
};

export default function PartnersSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {PARTNERS_DATA.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
            {PARTNERS_DATA.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base md:text-lg leading-relaxed">
            {PARTNERS_DATA.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Partner Categories Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PARTNERS_DATA.categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  to="/partners"
                  className="group bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {cat.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Hard Problem Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[80px] pointer-events-none rounded-full" />

            <div>
              <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                {PARTNERS_DATA.challengeBox.badge}
              </span>

              {/* Pipeline Step Flow */}
              <div className="mt-8 mb-8">
                <p className="text-xs text-slate-400 font-mono mb-4">
                  CHALLENGE PIPELINE
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {PARTNERS_DATA.challengeBox.steps.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                        {step}
                      </span>
                      {idx < PARTNERS_DATA.challengeBox.steps.length - 1 && (
                        <span className="text-slate-600 text-xs">&rarr;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to={PARTNERS_DATA.challengeBox.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
            >
              <Send className="w-3.5 h-3.5" />
              {PARTNERS_DATA.challengeBox.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}