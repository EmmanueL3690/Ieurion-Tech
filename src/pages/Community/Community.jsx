// Community.jsx

import React from 'react';
import { 
  Users, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  GitPullRequest, 
  ArrowRight, 
  Sparkles, 
  Network, 
  Terminal, 
  Zap, 
  Layers, 
  Compass,
  MessageSquareCode,
  Share2,
  Rocket
} from 'lucide-react';

export default function Community() {
  const pathways = [
    {
      title: "Builders",
      href: "/community",
      icon: Users,
      description: "Connect with software engineers, designers, and tech creators across the ecosystem to share knowledge and engineer real-world software.",
      cta: "Meet the Builders"
    },
    {
      title: "Projects",
      href: "/projects",
      icon: FolderGit2,
      description: "Discover community-driven initiatives, active software builds, and technical endeavors built collaboratively by IEURION members.",
      cta: "Explore Projects"
    },
    {
      title: "Campus / SIWES",
      href: "/siwes",
      icon: GraduationCap,
      description: "Tailored programs, technical mentorship, and real-world internship experiences designed for students and early-career developers.",
      cta: "Explore SIWES"
    },
    {
      title: "Open Source",
      href: "/open-source",
      icon: GitPullRequest,
      description: "Contribute to open codebase repositories, review pull requests, and collaborate on public software infrastructure.",
      cta: "View Open Source"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect with the Community",
      description: "Join our active developer hub, introduce your tech stack, and network with creators who share your passion for engineering.",
      icon: MessageSquareCode
    },
    {
      number: "02",
      title: "Find a Project or Opportunity",
      description: "Browse active repositories, ecosystem initiatives, or campus programs that align with your technical goals.",
      icon: Compass
    },
    {
      number: "03",
      title: "Build, Collaborate & Share",
      description: "Ship code, receive code reviews from peers, showcase your technical output, and grow alongside fellow builders.",
      icon: Share2
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
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 pb-16 lg:py-16">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs sm:text-sm tracking-wider uppercase font-medium mb-6 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>The IEURION Community</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              BUILT BY BUILDERS. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                POWERED BY COMMUNITY.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              An ecosystem for developers, students, creators, and technology enthusiasts who want to build ambitious projects, share knowledge, collaborate on code, and master their skills together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]"
              >
                <span>Join the Community</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md"
              >
                <span>Explore Our Projects</span>
              </a>
            </div>
          </div>

          {/* Connected Ecosystem Visual (CSS/SVG Shapes) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-md aspect-square relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Subtle Grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

              {/* Top Bar Visual */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500/80" />
                </div>
                <div className="text-xs font-mono text-cyan-400/80 flex items-center gap-1.5 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ieu_ecosystem.v2</span>
                </div>
              </div>

              {/* Node Visualization Graph */}
              <div className="relative my-auto h-52 flex items-center justify-center z-10">
                {/* Connecting SVGs */}
                <svg className="absolute inset-0 w-full h-full stroke-slate-700" strokeWidth="1.5" strokeDasharray="4 4">
                  <line x1="50%" y1="50%" x2="20%" y2="25%" />
                  <line x1="50%" y1="50%" x2="80%" y2="25%" />
                  <line x1="50%" y1="50%" x2="20%" y2="75%" />
                  <line x1="50%" y1="50%" x2="80%" y2="75%" />
                </svg>

                {/* Central Hub Node */}
                <div className="relative z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-200/50">
                  <Network className="w-8 h-8 text-slate-950" />
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-2 left-6 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center gap-2 shadow-lg">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Code</span>
                </div>

                <div className="absolute top-2 right-6 p-2.5 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 flex items-center gap-2 shadow-lg">
                  <FolderGit2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono">Builds</span>
                </div>

                <div className="absolute bottom-2 left-6 p-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-indigo-300 flex items-center gap-2 shadow-lg">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono">Mentorship</span>
                </div>

                <div className="absolute bottom-2 right-6 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center gap-2 shadow-lg">
                  <GitPullRequest className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Collaborate</span>
                </div>
              </div>

              {/* Floating Live Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Network Active</span>
                </div>
                <span className="font-mono text-slate-500">Real-time Collaboration</span>
              </div>
            </div>
          </div>
        </section>


        {/* COMMUNITY INTRODUCTION SECTION */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Peer Knowledge Sharing</h4>
                      <p className="text-xs text-slate-400 mt-1">Exchange architecture insights, modern frameworks, and engineering best practices.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Collaborative Software</h4>
                      <p className="text-xs text-slate-400 mt-1">Move from lone coders to high-impact project teams shipping production applications.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Skill Acceleration</h4>
                      <p className="text-xs text-slate-400 mt-1">Refine code quality, tackle complex logic, and grow through practical feedback.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                Core Philosophy
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                MORE THAN A NETWORK. <br />
                <span className="text-slate-400">A PLACE TO BUILD.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                IEURION brings together passionate technical talent to turn creative concepts into functional software. We believe that true growth happens when developers step beyond theoretical study and dive into real engineering problems with peers.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you are refining full-stack development skills, building open-source packages, or seeking hands-on project collaboration during your academic journey, our community provides the canvas and the community to support your technical trajectory.
              </p>
            </div>

          </div>
        </section>


        {/* COMMUNITY PATHWAYS SECTION */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Community Pathways
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore dedicated channels within the IEURION ecosystem designed to fit your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pathways.map((pathway, index) => {
              const IconComp = pathway.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] backdrop-blur-sm"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 shadow-md">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {pathway.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                      {pathway.description}
                    </p>
                  </div>

                  <div>
                    <a
                      href={pathway.href}
                      className="inline-flex items-center gap-2 font-semibold text-sm text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>{pathway.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* HOW TO GET INVOLVED */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="get-involved">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Getting Started
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              How to Get Involved
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Three straightforward steps to jump right into the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-mono font-extrabold text-cyan-500/40">
                        {step.number}
                      </span>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* COLLABORATION CTA SECTION */}
        <section className="mt-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-cyan-500/25 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_75%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              YOUR NEXT BIG IDEA NEEDS PEOPLE.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Connect with fellow developers, solve complex challenges, and become an active participant in the IEURION builder ecosystem.
            </p>

            <div className="flex justify-center">
              <a
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)]"
              >
                <span>Join the Ecosystem</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}