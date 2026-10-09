// SIWES.jsx

import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  Compass,
  BookOpen,
  Layers,
  GitBranch,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Users,
  Rocket,
  Cpu,
  FileText,
  Target,
  Lightbulb,
  Laptop,
  HelpCircle,
  Network
} from 'lucide-react';

export default function SIWES() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Who is this pathway intended for?",
      a: "This pathway is designed for university and polytechnic students, SIWES / Industrial Training candidates, self-taught learners, and early-career technology enthusiasts who want to bridge the gap between academic theory and practical software engineering."
    },
    {
      q: "Do I need to be an experienced developer?",
      a: "No. You don't need to be an expert to start. A foundational understanding of general computer concepts or basic programming logic is helpful, but curiosity, consistency, and a willingness to learn independently are far more important."
    },
    {
      q: "What should I prepare before reaching out?",
      a: "Prepare a clear summary of your current technical background, any personal projects or code samples you've worked on, your core learning goals, and details regarding your SIWES or Industrial Training timeline if applicable."
    },
    {
      q: "Does IEURION guarantee a SIWES placement?",
      a: "No. IEURION offers a guidance framework, community ecosystem, and practical project pathways. Formal SIWES or Industrial Training placements depend entirely on internal project capacity, mentor availability, and direct individual confirmation."
    },
    {
      q: "How can I find out about available opportunities?",
      a: "You can follow our public ecosystem updates, explore community project repositories, or connect directly through our official community channels to stay informed about active student initiatives, open-source tasks, or available openings."
    }
  ];

  const pathwaySteps = [
    {
      number: "01",
      title: "Discover",
      desc: "Identify your technical interests, evaluate your foundational skills, and pinpoint specific domain areas you want to explore."
    },
    {
      number: "02",
      title: "Learn",
      desc: "Strengthen core technical knowledge through targeted practice, official developer documentation, and hands-on coding exercises."
    },
    {
      number: "03",
      title: "Build",
      desc: "Apply your learning to practical tasks, personal software experiments, or collaborative community builds where opportunities are available."
    },
    {
      number: "04",
      title: "Grow",
      desc: "Reflect on your technical output, document your code contributions, gather constructive feedback, and continuously refine your skills."
    }
  ];

  const areas = [
    {
      title: "Software Development",
      icon: Code2,
      desc: "Explore web applications, modern frontend interfaces, backend systems, APIs, and fundamental software engineering practices."
    },
    {
      title: "Product Building",
      icon: Rocket,
      desc: "Learn how raw technical ideas transform into useful digital products through user problem definition, iteration, and practical execution."
    },
    {
      title: "Research & Experimentation",
      icon: Cpu,
      desc: "Investigate emerging technology concepts, test algorithmic logic, and construct functional prototypes through structured experimentation."
    },
    {
      title: "Open Source & Collaboration",
      icon: GitBranch,
      desc: "Understand version control with Git, navigate public codebases, practice pull request workflows, and contribute to shared software."
    }
  ];

  const expectations = [
    {
      title: "Curiosity & Willingness to Learn",
      desc: "A genuine drive to investigate how modern software systems function under the hood."
    },
    {
      title: "Basic Technical Foundations",
      desc: "General computer literacy and elementary programming concepts relevant to your area of interest."
    },
    {
      title: "Consistent Daily Practice",
      desc: "Dedication to allocating regular time for writing code, solving logic challenges, and asking questions."
    },
    {
      title: "Openness to Feedback",
      desc: "A positive attitude toward peer code reviews, technical critiques, and iterative improvement."
    },
    {
      title: "Documenting Your Progress",
      desc: "Commitment to keeping a clear log of your learning milestones, challenges overcome, and projects built."
    }
  ];

  const prepTips = [
    {
      num: "1",
      title: "Set Clear Learning Goals",
      desc: "Define the specific technical stacks, tools, or software engineering concepts you aim to master during your training."
    },
    {
      num: "2",
      title: "Practise Relevant Technical Skills",
      desc: "Build small starter applications and become comfortable with Git version control, command line tools, and code editors beforehand."
    },
    {
      num: "3",
      title: "Keep a Detailed Task Log",
      desc: "Maintain a daily record of engineering problems tackled, code written, and lessons learned to simplify your logbook reporting."
    },
    {
      num: "4",
      title: "Document Project Contributions",
      desc: "Curate a public GitHub profile or digital portfolio highlighting code samples and functional projects you have built."
    },
    {
      num: "5",
      title: "Ask for Feedback & Reflect",
      desc: "Engage with experienced developers or peers to review your code quality and provide actionable suggestions for growth."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Lighting & Grid Effects */}
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
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>CAMPUS / SIWES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              TURN WHAT YOU LEARN <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                INTO WHAT YOU CAN BUILD.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              Move beyond the classroom. Explore practical technology, collaborate with builders, and develop the experience to take your skills further.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#pathway-section"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Explore the Pathway</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Join the Community</span>
              </a>
            </div>
          </div>

          {/* Student Journey Code Visual Panel */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl bg-slate-900/70 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="ml-2 text-slate-300 font-semibold">student_journey.ts</span>
                </div>
                <span className="text-cyan-400/80">BUILD_LOG</span>
              </div>

              {/* Code-inspired Workflow Nodes */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-300">Classroom Theory</span>
                  </div>
                  <span className="text-slate-500">[Foundations]</span>
                </div>

                <div className="pl-4 text-cyan-500/60 font-bold text-xs">↓ .applyToPractice()</div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between shadow-[0_0_15px_rgba(6,182,212,0.08)]">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-white font-semibold">Practical Code Sprint</span>
                  </div>
                  <span className="text-cyan-400 text-xs font-semibold">[Active]</span>
                </div>

                <div className="pl-4 text-cyan-500/60 font-bold text-xs">↓ .collaborate()</div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Network className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-300">Ecosystem Contribution</span>
                  </div>
                  <span className="text-slate-500">[Output]</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Student Engineering</span>
                </span>
                <span className="font-mono text-slate-500">v1.0.0</span>
              </div>
            </div>
          </div>
        </header>


        {/* SECTION 2 — THE OPPORTUNITY */}
        <section className="py-16 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                Bridging Theory & Practice
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                LEARNING IS THE STARTING POINT. <br />
                <span className="text-slate-400">BUILDING IS THE NEXT STEP.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Academic education provides the essential concepts, but software engineering demands real-world execution. Connecting textbook logic with modern developer toolchains, collaborative workflows, and structured problem-solving is how technical confidence is developed.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our campus focus helps students navigate this transition—encouraging self-directed practice, exposure to industry standards, and community interaction to help you build software that matters.
              </p>
            </div>

            {/* Split Visual Panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Hands-on Toolchains</h3>
                      <p className="text-xs text-slate-400 mt-1">Get comfortable with professional IDEs, terminal environments, Git, and deployment pipelines.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Peer Collaboration</h3>
                      <p className="text-xs text-slate-400 mt-1">Work alongside other ambitious student developers to solve complex technical problems together.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Portfolio Building</h3>
                      <p className="text-xs text-slate-400 mt-1">Turn personal exercises and open-source contributions into a tangible engineering record.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3 — THE PATHWAY */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="pathway-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Development Journey
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              FROM CAMPUS TO PRACTICAL EXPERIENCE.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A suggested step-by-step framework to guide your growth from student learner to confident builder.
            </p>
          </div>

          {/* Connected Pathway Steps (Desktop Horizontal / Mobile Vertical) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {pathwaySteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-extrabold text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>STAGE {step.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8 font-mono">
            * This represents a recommended self-directed skill progression model.
          </p>
        </section>


        {/* SECTION 4 — AREAS TO EXPLORE */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              FIND YOUR TECHNICAL DIRECTION.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Discover key software domains to focus your practice and deepen your engineering capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => {
              const IconComp = area.icon;
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
                      {area.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center text-xs text-cyan-400 font-mono opacity-80 group-hover:opacity-100">
                    <span>Focus Track</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 5 — WHAT TO BRING */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                Mindset & Requirements
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                START WITH WHAT YOU KNOW. <br />
                <span className="text-slate-400">BUILD FROM THERE.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                You don't need years of industry experience to get started. What matters most is a proactive approach to learning, attention to detail, and a commitment to personal progress.
              </p>
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300">
                💡 Beginners are encouraged to start with core programming fundamentals before tackling advanced framework architectures.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {expectations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 6 — SIWES PREPARATION */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Industrial Training Guidance
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              MAKE YOUR INDUSTRIAL TRAINING COUNT.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Maximize your SIWES period with actionable strategies for skill acquisition and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 font-mono font-bold flex items-center justify-center mb-4">
                    0{tip.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}

            {/* Practical Note Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
                <FileText className="w-5 h-5" />
                <span>Documentation Tip</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Logbook entries written immediately after completing technical tasks are significantly higher quality than those assembled at the last minute.
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 7 — FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Common Queries</span>
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
              <GraduationCap className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              YOUR NEXT STEP STARTS WITH WHAT YOU BUILD.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Keep learning, keep experimenting, and connect with people who are building the future of technology.
            </p>

            <div className="flex justify-center">
              <a
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Explore the IEURION Community</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}