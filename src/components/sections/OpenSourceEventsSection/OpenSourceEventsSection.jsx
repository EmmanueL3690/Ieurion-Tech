// src/components/sections/09-OpenSourceEventsSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

// Custom SVG component for the GitHub logo
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const OPEN_SOURCE_DATA = {
  eyebrow: "OPEN SOURCE & EVENTS",
  title: "BUILD IN PUBLIC.",
  description:
    "We believe transparent development builds stronger technology and stronger builders.",
  githubCta: {
    label: "Explore Our GitHub",
    href: "/open-source",
  },
  houseMessage: "THE HOUSE IS ALWAYS BUILDING.",
  tags: [
    { label: "Hackathons", href: "/hackathons" },
    { label: "Coders Cup", href: "/coders-cup" },
    { label: "Events", href: "/events" },
    { label: "Community", href: "/community" },
    { label: "Research", href: "/research" },
    { label: "Workshops", href: "/events" },
    { label: "Talks", href: "/events" },
    { label: "Meetups", href: "/events" },
    { label: "Competitions", href: "/coders-cup" },
  ],
  exploreEventsHref: "/events",
};

export default function OpenSourceEventsSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]/90 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                {OPEN_SOURCE_DATA.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
                {OPEN_SOURCE_DATA.title}
              </h2>
              <p className="text-slate-400 mt-3 text-base leading-relaxed">
                {OPEN_SOURCE_DATA.description}
              </p>
            </div>

            <div>
              <Link
                to={OPEN_SOURCE_DATA.githubCta.href}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-semibold text-xs tracking-wide transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                {OPEN_SOURCE_DATA.githubCta.label}
              </Link>
            </div>
          </div>

          {/* Right Column: Building Activities Card */}
          <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                {OPEN_SOURCE_DATA.houseMessage}
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2">
              {OPEN_SOURCE_DATA.tags.map((tag, i) => (
                <Link
                  key={i}
                  to={tag.href}
                  className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
                >
                  {tag.label}
                </Link>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="pt-2">
              <Link
                to={OPEN_SOURCE_DATA.exploreEventsHref}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Explore Events &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}