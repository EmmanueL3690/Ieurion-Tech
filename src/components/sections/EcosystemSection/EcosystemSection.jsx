// src/components/sections/03-EcosystemSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Hammer,
  Microscope,
  Trophy,
  Terminal,
  Bot,
  Grid,
  ArrowUpRight,
} from "lucide-react";

const ECOSYSTEM_DATA = {
  eyebrow: "ECOSYSTEM",
  title: "A PLACE FOR EVERY BUILDER.",
  description:
    "Explore the spaces where ideas, collaboration, and engineering come together.",
  items: [
    {
      id: "developer-house",
      title: "Developer House",
      description: "A space and house to grow together.",
      href: "/developer-house",
      icon: Code2,
    },
    {
      id: "build-forge",
      title: "Build Forge",
      description: "Turn ideas into real products.",
      href: "/build-forge",
      icon: Hammer,
    },
    {
      id: "research",
      title: "Research",
      description: "Explore and innovate emerging tech.",
      href: "/research",
      icon: Microscope,
    },
    {
      id: "hackathons",
      title: "Hackathons",
      description: "Solve real engineering problems under pressure.",
      href: "/hackathons",
      icon: Trophy,
    },
    {
      id: "coders-cup",
      title: "Coders Cup",
      description: "Compete and level up developer skills.",
      href: "/coders-cup",
      icon: Terminal,
    },
    {
      id: "robotics",
      title: "Robotics Lab",
      description: "Build physical systems and future automation.",
      href: "/robotics",
      icon: Bot,
    },
    {
      id: "more-areas",
      title: "More Areas",
      description: "Community, Projects, Campus, Open Source & Partners.",
      href: "/community",
      icon: Grid,
    },
  ],
};

export default function EcosystemSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {ECOSYSTEM_DATA.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
            {ECOSYSTEM_DATA.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base md:text-lg leading-relaxed">
            {ECOSYSTEM_DATA.description}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ECOSYSTEM_DATA.items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.href}
                className="group relative bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                    Explore Area &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}