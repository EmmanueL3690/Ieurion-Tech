// Challenge.jsx

import React from 'react';
import ChallengeForm from '../../components/forms/ChallengeForm';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Code2,
  Building2,
  FlaskConical,
  Users,
  CheckCircle2,
  Layers,
  Zap,
  Lightbulb,
  ShieldAlert,
  FileText,
  Workflow,
  Compass,
  HelpCircle,
  Cpu,
  Globe,
  Network,
  Share2
} from 'lucide-react';

export default function Challenge() {
  const challengeTypes = [
    {
      id: 'technology-software',
      title: 'Technology & Software',
      description: 'Software problems, automation opportunities, technical systems, or digital product ideas.',
      icon: Code2,
      tag: 'Code & Architecture'
    },
    {
      id: 'business-operations',
      title: 'Business & Operations',
      description: 'Inefficient workflows, repetitive tasks, or processes that could be improved through technology.',
      icon: Workflow,
      tag: 'Process & Automation'
    },
    {
      id: 'research-experimentation',
      title: 'Research & Experimentation',
      description: 'Technical questions, prototypes, emerging technologies, or problems that need investigation.',
      icon: FlaskConical,
      tag: 'Prototypes & R&D'
    },
    {
      id: 'community-social',
      title: 'Community & Social Impact',
      description: 'Challenges affecting communities, education, access, or everyday experiences where technology may help.',
      icon: Users,
      tag: 'Impact & Access'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Describe the Problem',
      description: 'Explain the core challenge, who it affects, and why finding a solution is important to your team or community.'
    },
    {
      number: '02',
      title: 'Submit the Details',
      description: 'Provide relevant context, desired outcomes, technical constraints, and any prior attempts to solve it.'
    },
    {
      number: '03',
      title: 'Initial Review',
      description: 'The IEURION team evaluates the submission for technical feasibility, scope clarity, and potential builder alignment.'
    },
    {
      number: '04',
      title: 'Discuss Next Steps',
      description: 'If there is a suitable opportunity, our team will reach out to discuss potential exploration or project formats.'
    }
  ];

  const strongChallengeChecklist = [
    {
      title: 'Clear Problem Statement',
      detail: 'Define what is currently broken, inefficient, or missing rather than jumping straight to a specific feature solution.'
    },
    {
      title: 'Target Audience & Impact',
      detail: 'Identify who experiences this problem daily and how severely it impacts their work, business, or routine.'
    },
    {
      title: 'Prior Solution Attempts',
      detail: 'Share existing tools, workarounds, or software you have tried and where those approaches fell short.'
    },
    {
      title: 'Desired Outcome',
      detail: 'Articulate what success looks like—whether it is time saved, automated data flow, or a functional prototype.'
    },
    {
      title: 'Context & Constraints',
      detail: 'Include any technical dependencies, regulatory considerations, or reference links that provide essential context.'
    },
    {
      title: 'Verifiable Contact Info',
      detail: 'Provide a valid email and organization details so our team can reach out for clarification if selected.'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>IEURION / SUBMIT A CHALLENGE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              HAVE A PROBLEM <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                WORTH SOLVING?
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              Share a real-world challenge, technical problem, or ambitious idea. IEURION can explore opportunities to bring builders, technology, and fresh thinking together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                type="button"
                onClick={() => scrollToSection('challenge-form-section')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
              >
                <span>Submit Your Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('how-it-works-section')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
              >
                <span>How It Works</span>
              </button>
            </div>
          </div>

          {/* Hero Technical Problem Map Graphic */}
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
                  <span>challenge_pipeline.map</span>
                </div>
              </div>

              {/* Connected Problem-to-Solution Flow */}
              <div className="relative my-auto h-56 flex items-center justify-center z-10">
                <svg className="absolute inset-0 w-full h-full stroke-slate-700/80" strokeWidth="1.5" strokeDasharray="4 4">
                  <line x1="20%" y1="25%" x2="50%" y2="50%" />
                  <line x1="80%" y1="25%" x2="50%" y2="50%" />
                  <line x1="50%" y1="50%" x2="50%" y2="80%" />
                </svg>

                {/* Top Nodes */}
                <div className="absolute top-2 left-2 p-2.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 flex items-center gap-2 shadow-lg">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono">Real-World Problem</span>
                </div>

                <div className="absolute top-2 right-2 p-2.5 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 flex items-center gap-2 shadow-lg">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono">Context & Data</span>
                </div>

                {/* Central Exploration Hub */}
                <div className="relative z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-200/50">
                  <Compass className="w-8 h-8 text-slate-950 animate-pulse" />
                </div>

                {/* Solution Node */}
                <div className="absolute bottom-1 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 flex items-center gap-2 shadow-lg">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Builder Exploration</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Open Submissions</span>
                </div>
                <span>Problem Discovery</span>
              </div>
            </div>
          </div>
        </header>


        {/* SECTION 2 — INTRODUCTION */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                Problem First Principles
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                EVERY MEANINGFUL SOLUTION <br />
                <span className="text-slate-400">STARTS WITH A CLEAR PROBLEM.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Useful technology is born from authentic friction. Whether you represent a growing business, an educational institution, a research lab, a civic initiative, or an individual creator, defining the challenge accurately is the first step toward building something that truly works.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs font-mono text-cyan-400 mb-1">01. Workflow Friction</p>
                  <p className="text-sm text-slate-300">Repetitive manual tasks or legacy processes ready for software automation.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs font-mono text-cyan-400 mb-1">02. Technical Investigation</p>
                  <p className="text-sm text-slate-300">Unresolved software architecture or algorithmic questions needing R&D.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs font-mono text-cyan-400 mb-1">03. Product Concepts</p>
                  <p className="text-sm text-slate-300">Ambitious early-stage product ideas seeking prototype exploration.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs font-mono text-cyan-400 mb-1">04. Civic & Social Tech</p>
                  <p className="text-sm text-slate-300">Community or educational bottlenecks that digital tools could improve.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 leading-relaxed font-mono">
                * Note: Submitting a challenge initiates exploratory review. It does not guarantee acceptance, dedicated project development, financial backing, or final software delivery.
              </div>
            </div>

            {/* Split Visual Panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Fresh Technical Perspectives</h3>
                      <p className="text-xs text-slate-400 mt-1">Expose your problem space to engineers eager to apply modern stacks to real challenges.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Rapid Prototype Testing</h3>
                      <p className="text-xs text-slate-400 mt-1">Move from abstract problem descriptions to functional proof-of-concept experiments.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Network className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Ecosystem Collaboration</h3>
                      <p className="text-xs text-slate-400 mt-1">Connect with student builders, researchers, and mentors across the IEURION network.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3 — TYPES OF CHALLENGES */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Problem Domains
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              WHAT WOULD YOU LIKE TO EXPLORE?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Below are examples of suitable problem tracks that align with our builder community's skillsets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challengeTypes.map((type) => {
              const IconComp = type.icon;
              return (
                <div
                  key={type.id}
                  className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-medium">
                      {type.tag}
                    </p>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {type.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 4 — HOW IT WORKS */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="how-it-works-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Submission Pipeline
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              FROM CHALLENGE TO POSSIBLE NEXT STEP.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A transparent four-stage pathway from initial submission to potential review and alignment.
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
                      {step.number}
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
                    STAGE {step.number}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8 font-mono">
            * Review speed depends on submission complexity and active project cycles. Reviews are conducted manually by our engineering leads.
          </p>
        </section>


        {/* SECTION 5 — WHAT MAKES A STRONG CHALLENGE? */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-10 text-left">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Quality Guidelines</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                HELP US UNDERSTAND THE REAL PROBLEM.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Detailed submissions make it significantly easier for our team to assess technical feasibility and scope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strongChallengeChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Confidentiality & Security Notice */}
            <div className="mt-8 p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-0.5">Confidentiality & Data Protection Notice</span>
                Please do not submit passwords, API keys, private database credentials, personally identifiable health or financial records, or sensitive proprietary data you are not authorized to disclose publicly.
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 6 — CHALLENGE SUBMISSION FORM */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="challenge-form-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Context Column */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                <FileText className="w-4 h-4" />
                <span>Intake Form</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                TELL US WHAT YOU'RE TRYING TO SOLVE.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Give us enough context to understand the challenge and explore whether there is a useful way forward.
              </p>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-cyan-400" />
                  Submission Tips
                </h3>
                <ul className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    Be specific about current bottlenecks rather than requesting general app ideas.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    Mention any specific technology requirements or API constraints if applicable.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    Double-check your email address so our team can follow up directly.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form Component Container */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-xl">
                <ChallengeForm />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 7 — CLOSING CTA */}
        <section className="mt-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-cyan-500/25 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_75%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Compass className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              A BETTER SOLUTION STARTS WITH A BETTER QUESTION.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Have a challenge worth exploring? Give us the context and let the conversation begin.
            </p>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => scrollToSection('challenge-form-section')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
              >
                <span>Submit Your Challenge</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}