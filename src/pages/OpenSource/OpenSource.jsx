// OpenSource.jsx

import React, { useState } from 'react';
import {
  GitPullRequest,
  Code2,
  BookOpen,
  Bug,
  Palette,
  Search,
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Terminal,
  Sparkles,
  ArrowRight,
  GitBranch,
  Users,
  HeartHandshake,
  HelpCircle,
  FolderGit2,
  GitCommit,
  Layers,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function OpenSource() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyOpenSource = [
    {
      title: "Learn by Doing",
      icon: BookOpen,
      description: "Read production codebases, observe modern software architecture, and practise industry-standard developer workflows firsthand."
    },
    {
      title: "Build Together",
      icon: Users,
      description: "Collaborate with other engineers through issue discussions, constructive code reviews, and shared technical improvements."
    },
    {
      title: "Give Back",
      icon: HeartHandshake,
      description: "Help strengthen shared developer tools, refine documentation, and build technology that benefits the wider ecosystem."
    }
  ];

  const contributionWays = [
    {
      title: "Code",
      icon: Code2,
      description: "Fix identified bugs, optimize application performance, or implement requested features in project repositories."
    },
    {
      title: "Documentation",
      icon: FileText,
      description: "Improve setup instructions, clarify API reference guides, fix typos, or write tutorials for new contributors."
    },
    {
      title: "Testing & Bug Reports",
      icon: Bug,
      description: "Reproduce software issues, report detailed bug findings, test edge cases, and help verify submitted fixes."
    },
    {
      title: "Design & Ideas",
      icon: Palette,
      description: "Suggest interface enhancements, refine user experience flows, and contribute to architecture discussions."
    }
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Find a Project",
      desc: "Explore public repositories within the ecosystem that align with your technical stack and current learning goals."
    },
    {
      number: "02",
      title: "Read the Guidelines",
      desc: "Review the README, licence terms, contribution guide (CONTRIBUTING.md), and code of conduct before writing code."
    },
    {
      number: "03",
      title: "Choose a Task",
      desc: "Look for beginner-friendly tags like 'good first issue' or consult maintainers to confirm proposed changes."
    },
    {
      number: "04",
      title: "Make Your Contribution",
      desc: "Fork the repository, create a focused feature branch, and adhere to the project's coding and testing standards."
    },
    {
      number: "05",
      title: "Submit & Collaborate",
      desc: "Open a clear Pull Request, explain the problem and solution, and respond constructively to reviewer feedback."
    }
  ];

  const habits = [
    "Read the project instructions and setup guides thoroughly before making changes.",
    "Keep pull requests focused, concise, and easy for maintainers to review.",
    "Explain both the problem and your proposed technical solution clearly.",
    "Test your code changes locally to verify functionality before submission.",
    "Maintain respect and constructive communication with maintainers and peers.",
    "Welcome review feedback graciously and refine your work iteratively."
  ];

  const faqs = [
    {
      q: "Can I contribute if I'm a beginner?",
      a: "Yes. Open source welcomes contributors at all skill levels. Starting with documentation fixes, small bug reports, or beginner-friendly issues is an excellent way to build confidence with Git workflows and collaborative development."
    },
    {
      q: "Do I need to contribute code?",
      a: "No. Non-code contributions are vital to healthy open-source software. Improving documentation, reporting reproducible bugs, testing pull requests, and providing design feedback are deeply valued ways to contribute."
    },
    {
      q: "How do I know whether a project accepts contributions?",
      a: "Check the repository's root directory for a CONTRIBUTING.md file, open issues, or license details. Maintainers usually outline contribution expectations, communication channels, and acceptable submission formats there."
    },
    {
      q: "What is a pull request?",
      a: "A Pull Request (PR) is a submission method on platforms like GitHub where you propose changes from your fork or branch to the main project codebase, allowing maintainers to review, test, and merge your work."
    },
    {
      q: "Where can I discover IEURION project opportunities?",
      a: "You can visit our dedicated Projects page (/projects) to monitor published projects. As public repositories and community open-source initiatives become available, contribution links and guides will be shared there."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Lighting & Grid Texture */}
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
              <GitPullRequest className="w-4 h-4 text-cyan-400" />
              <span>IEURION / OPEN SOURCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              BUILD IN THE OPEN. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                MAKE SOMETHING MATTER.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              Explore collaborative software development, learn from shared code, and discover how your contributions can help projects move forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#contribution-steps"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>How to Contribute</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Explore Projects</span>
              </a>
            </div>
          </div>

          {/* Interactive Code Editor / Git Diff Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Editor Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="ml-2 text-slate-300 font-semibold">pull_request.diff</span>
                </div>
                <span className="text-cyan-400 text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                  OPEN PR
                </span>
              </div>

              {/* Diff Code Visual */}
              <div className="space-y-2.5 font-mono text-xs leading-relaxed">
                <div className="text-slate-500">// Feature Branch: patch/docs-refactor</div>
                <div className="p-2.5 rounded bg-slate-950/90 border border-slate-800/80">
                  <span className="text-blue-400">git</span> checkout -b feature/community-fix
                </div>
                
                <div className="p-2.5 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-200">
                  <span className="text-cyan-400 font-bold">+</span> <span className="text-slate-300">export function</span> <span className="text-white font-semibold">contribute</span>() &#123;
                </div>
                <div className="pl-6 text-slate-300">
                  <span className="text-cyan-400 font-bold">+</span> <span className="text-cyan-300">return</span> "Build in the open";
                </div>
                <div className="p-2.5 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-200">
                  <span className="text-cyan-400 font-bold">+</span> &#125;
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <GitCommit className="w-4 h-4 text-cyan-400" />
                  <span>1 commit ready</span>
                </span>
                <span className="text-cyan-400">Passing Checks</span>
              </div>
            </div>
          </div>
        </header>


        {/* SECTION 2 — WHY OPEN SOURCE? */}
        <section className="py-16 border-t border-slate-800/60">
          <div className="max-w-3xl mb-12">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Collaborative Philosophy
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              GOOD SOFTWARE GROWS THROUGH COLLABORATION.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Open source allows people to inspect, use, improve, and contribute to software according to the project's licence and contribution rules. It turns individual effort into shared technical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyOpenSource.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-slate-900/60 border border-slate-800 p-8 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 3 — WAYS TO CONTRIBUTE */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              YOU DON'T NEED TO START WITH A BIG FEATURE.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Contributions come in many forms. Available contribution types depend on each project's specific needs and maintainer guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionWays.map((way, index) => {
              const IconComp = way.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] backdrop-blur-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {way.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {way.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 4 — YOUR FIRST CONTRIBUTION (5-STEP JOURNEY) */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="contribution-steps">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Step-by-Step Workflow
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              FROM FIRST LOOK TO FIRST PULL REQUEST.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Follow established open-source workflow standards to make your contribution process seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    STEP {step.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 5 — GOOD CONTRIBUTOR HABITS */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Best Practices</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                MAKE YOUR CONTRIBUTIONS COUNT.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {habits.map((habit, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">{habit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SECTION 6 — IEURION PROJECTS & OPPORTUNITIES */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-4">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Ecosystem Projects</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  FIND SOMETHING WORTH CONTRIBUTING TO.
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                  Visitors can explore IEURION's published projects and identify potential areas to collaborate as repositories and open-source initiatives are published.
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  * Note: Contribution opportunities, open issue lists, and guidelines will be linked directly on individual project pages as projects become available.
                </p>

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all text-sm shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                >
                  <span>Explore IEURION Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <Compass className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">Project Discovery</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Check the Projects directory periodically for published software, repos, and open issues.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 7 — FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                      <span className="font-bold text-white text-base sm:text-lg">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* SECTION 8 — FINAL CTA */}
        <section className="mt-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-cyan-500/25 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_75%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Code2 className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              YOUR FIRST CONTRIBUTION CAN START SMALL.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore projects, learn from other builders, and take the first step toward contributing to software built in the open.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:border-cyan-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Join the Community</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}