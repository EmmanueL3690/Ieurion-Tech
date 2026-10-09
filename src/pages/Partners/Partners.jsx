// Partner.jsx

import React, { useState } from 'react';
import { partnerData } from '../../data/partners';
import PartnerCard from '../../components/cards/PartnerCard';
import { PartnerForm } from '../../components/forms/PartnerForm';
import {
  Handshake,
  Sparkles,
  ArrowRight,
  Network,
  Code2,
  Rocket,
  Cpu,
  Users,
  Building2,
  GraduationCap,
  CheckCircle2,
  Terminal,
  Share2,
  ShieldCheck,
  Compass,
  Lightbulb,
  MessageSquare
} from 'lucide-react';

export default function Partner() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectOpportunity = (category) => {
    setSelectedCategory(category);
    const element = document.getElementById('inquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themes = [
    {
      title: "Build",
      icon: Code2,
      subtitle: "Product & Technology",
      description: "Explore relevant software engineering challenges, tools, open-source infrastructure, and modern technical architectures."
    },
    {
      title: "Develop",
      icon: GraduationCap,
      subtitle: "Talent & Capability",
      description: "Support practical technical learning, mentorship, and engineering talent growth across campus and developer channels."
    },
    {
      title: "Explore",
      icon: Cpu,
      subtitle: "Research & Innovation",
      description: "Investigate new technical possibilities, evaluate early-stage prototypes, and test novel ideas in real-world environments."
    },
    {
      title: "Connect",
      icon: Users,
      subtitle: "Ecosystem & Community",
      description: "Bring people, technical organisations, mentors, and ambitious builders together for shared knowledge and growth."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Tell Us About Your Organisation",
      description: "Share your core focus, technical capabilities, and the overarching mission driving your team."
    },
    {
      number: "02",
      title: "Share Your Goals & Interests",
      description: "Outline specific areas where technical collaboration or talent development aligns with your objectives."
    },
    {
      number: "03",
      title: "Explore Areas of Alignment",
      description: "Engage in an open, structured dialogue with the IEURION team to evaluate potential mutual value."
    },
    {
      number: "04",
      title: "Discuss Appropriate Next Steps",
      description: "Determine practical channels, initiatives, or milestones for working together effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28">

        {/* SECTION 1 — HERO */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 pb-16 lg:py-16">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs sm:text-sm tracking-wider uppercase font-semibold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
              <Handshake className="w-4 h-4 text-cyan-400" />
              <span>PARTNER WITH IEURION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              LET'S BUILD <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                WHAT COMES NEXT.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              Connect with a technology ecosystem focused on building products, developing talent, exploring ideas, and turning technical ambition into practical solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Explore Partnership Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Start a Conversation</span>
              </a>
            </div>
          </div>

          {/* Connected Ecosystem Node Diagram */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-md aspect-square relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-between">
              
              <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                </div>
                <div className="text-xs font-mono text-cyan-400/80 flex items-center gap-1.5 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>partner_mesh.node</span>
                </div>
              </div>

              {/* Connected Nodes Visual */}
              <div className="relative my-auto h-56 flex items-center justify-center z-10">
                <svg className="absolute inset-0 w-full h-full stroke-slate-700/80" strokeWidth="1.5" strokeDasharray="4 4">
                  <line x1="50%" y1="50%" x2="20%" y2="22%" />
                  <line x1="50%" y1="50%" x2="80%" y2="22%" />
                  <line x1="50%" y1="50%" x2="20%" y2="78%" />
                  <line x1="50%" y1="50%" x2="80%" y2="78%" />
                </svg>

                {/* Center Node */}
                <div className="relative z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-200/50">
                  <Network className="w-8 h-8 text-slate-950" />
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-2 left-4 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center gap-2 shadow-lg">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Organisations</span>
                </div>

                <div className="absolute top-2 right-4 p-2.5 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 flex items-center gap-2 shadow-lg">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono">Technology</span>
                </div>

                <div className="absolute bottom-2 left-4 p-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-indigo-300 flex items-center gap-2 shadow-lg">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono">Talent</span>
                </div>

                <div className="absolute bottom-2 right-4 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center gap-2 shadow-lg">
                  <Lightbulb className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Ideas</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Ecosystem Ready</span>
                </div>
                <span>Collaborative Hub</span>
              </div>
            </div>
          </div>
        </header>


        {/* SECTION 2 — PARTNERSHIP INTRODUCTION */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                Strategic Collaboration
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                MORE THAN A PARTNERSHIP. <br />
                <span className="text-slate-400">A SHARED DIRECTION.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                IEURION collaborates with forward-thinking organisations, industry leaders, educational institutions, and community bodies that want to support technology development, talent growth, applied research, and practical problem-solving.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                By aligning technical capabilities with real-world industry challenges and builder initiatives, we create meaningful frameworks for shared exploration, knowledge exchange, and sustainable technological progress.
              </p>
            </div>

            {/* Split Visual Panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Product & Ecosystem Growth</h3>
                      <p className="text-xs text-slate-400 mt-1">Co-develop software, test modern tools, and explore technical problem spaces.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Talent & Capability Pipeline</h3>
                      <p className="text-xs text-slate-400 mt-1">Connect with emerging developers, support practical learning, and mentor builders.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Applied Technical Exploration</h3>
                      <p className="text-xs text-slate-400 mt-1">Investigate research concepts and validate functional software prototypes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3 — PARTNERSHIP OPPORTUNITIES */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="opportunities">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Collaboration Categories
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              WAYS TO WORK WITH IEURION.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore strategic collaboration pathways tailored to your organisation's goals and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {partnerData && partnerData.map((opportunity, index) => (
              <PartnerCard
                key={opportunity.id || index}
                item={opportunity}
                opportunity={opportunity}
                data={opportunity}
                onSelect={() => handleSelectOpportunity(opportunity.title || opportunity.name || opportunity.id)}
              />
            ))}
          </div>
        </section>


        {/* SECTION 4 — WHAT COLLABORATION CAN LOOK LIKE */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Practical Engagement
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              TURN SHARED INTEREST INTO PRACTICAL WORK.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Four core themes that define how we translate organizational alignment into tangible technical outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, idx) => {
              const IconComp = theme.icon || Code2;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                      {theme.subtitle}
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {theme.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 5 — HOW PARTNERSHIP BEGINS */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Initiation Workflow
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              A CLEAR STARTING POINT.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A straightforward four-step process to explore mutual opportunities and establish alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-extrabold text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                      {step.number || `0${idx + 1}`}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    STAGE 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8 font-mono">
            * Submitting an inquiry initiates an exploratory dialogue to determine potential alignment and does not guarantee a formal partnership arrangement.
          </p>
        </section>


        {/* SECTION 6 — PARTNERSHIP INQUIRY */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="inquiry-form">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                LET'S START A CONVERSATION.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                Tell us what your organisation does, what you're interested in, and how you think we could work together.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-xl">
              <PartnerForm selectedCategory={selectedCategory} />
            </div>
          </div>
        </section>


        {/* SECTION 7 — FINAL CTA */}
        <section className="mt-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-cyan-500/25 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_75%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Handshake className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              HAVE AN IDEA FOR WORKING TOGETHER?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Start with a conversation. Let's explore what we can build together.
            </p>

            <div className="flex justify-center">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Initiate a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export { Partner as Partners };