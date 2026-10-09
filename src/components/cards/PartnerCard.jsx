// PartnerCard.jsx

import React from 'react';
import {
  Cpu,
  Building2,
  GraduationCap,
  FlaskConical,
  Users,
  Award,
  Code2,
  Rocket,
  Compass,
  Share2,
  ArrowRight,
  Handshake,
  Sparkles,
  Layers
} from 'lucide-react';

export default function PartnerCard({ item, opportunity, data, onSelect }) {
  // Support 'item' prop as specified, with graceful fallbacks for compatibility
  const cardData = item || opportunity || data || {};
  const {
    title = 'Partnership Opportunity',
    description = '',
    icon,
    tagline = '',
    ctaLabel = 'Explore Opportunity'
  } = cardData;

  // Icon Resolver
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Cpu':
        return Cpu;
      case 'Building2':
        return Building2;
      case 'GraduationCap':
        return GraduationCap;
      case 'FlaskConical':
        return FlaskConical;
      case 'Users':
        return Users;
      case 'Award':
        return Award;
      case 'Code2':
        return Code2;
      case 'Rocket':
        return Rocket;
      case 'Compass':
        return Compass;
      case 'Share2':
        return Share2;
      default:
        return Handshake;
    }
  };

  const IconComponent = getIconComponent(icon);

  const handleClick = () => {
    if (typeof onSelect === 'function') {
      onSelect(cardData);
    } else {
      const formElement = document.getElementById('inquiry-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <article className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] backdrop-blur-sm">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Refined Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 shadow-md">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Tagline */}
        {tagline && (
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-medium">
            {tagline}
          </p>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div className="relative z-10 pt-4 border-t border-slate-800/60 mt-auto">
        <button
          type="button"
          onClick={handleClick}
          className="inline-flex items-center gap-2 font-semibold text-sm text-cyan-400 hover:text-cyan-300 transition-colors group/btn cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg py-1 px-2 -ml-2"
          aria-label={`${ctaLabel} for ${title}`}
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover:translate-x-1 transition-transform duration-200 text-cyan-400" />
        </button>
      </div>
    </article>
  );
}