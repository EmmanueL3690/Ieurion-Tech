// OurStory.jsx

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Users,
  Layers,
  Compass,
  Rocket,
  Share2,
  Terminal,
  GraduationCap,
  GitPullRequest,
  Handshake,
  Target,
  Bot,
  Trophy,
  Box,
  FlaskConical,
  FolderGit2,
  Calendar,
  Lightbulb,
  ShieldCheck,
  Globe,
  Network
} from 'lucide-react';

export default function OurStory() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const beliefs = [
    {
      id: 'ideas',
      title: 'Ideas deserve exploration.',
      description: 'Good ideas become more useful when they are investigated, tested, and refined through direct practice and technical curiosity.',
      icon: Lightbulb,
      tag: '01 / EXPLORATION'
    },
    {
      id: 'technology',
      title: 'Technology should be practical.',
      description: 'We value learning by building and exploring how technology can address real needs, tackle complex friction, and deliver tangible output.',
      icon: Cpu,
      tag: '02 / UTILITY'
    },
    {
      id: 'progress',
      title: 'Progress happens together.',
      description: 'Builders, researchers, students, and collaborators can learn from one another and create significantly better work together than in isolation.',
      icon: Users,
      tag: '03 / COLLABORATION'
    }
  ];

  const ecosystemGroups = [
    {
      category: 'Core Programs & Labs',
      description: 'Dedicated spaces and structured initiatives for technical innovation and engineering practice.',
      items: [
        { name: 'Developer House', path: '/developer-house', icon: Terminal, desc: 'Central technical hub for software development.' },
        { name: 'Build Forge', path: '/build-forge', icon: Code2, desc: 'Rapid execution environment for software builds.' },
        { name: 'Builder Residency', path: '/residency', icon: Target, desc: 'Focused immersion for dedicated creators.' },
        { name: 'Robotics Lab', path: '/robotics', icon: Bot, desc: 'Hardware-software integration and automated systems.' },
        { name: 'Research', path: '/research', icon: FlaskConical, desc: 'Applied technical inquiry and experimental models.' }
      ]
    },
    {
      category: 'Products & Initiatives',
      description: 'Software outputs, open-source repositories, and practical build challenges.',
      items: [
        { name: 'Products', path: '/products', icon: Box, desc: 'Deployed software designed for real users.' },
        { name: 'Projects', path: '/projects', icon: FolderGit2, desc: 'Active builds across early and mature stages.' },
        { name: 'Open Source', path: '/open-source', icon: GitPullRequest, desc: 'Public repositories and community code bases.' },
        { name: 'Challenge Submissions', path: '/submit-challenge', icon: Compass, desc: 'Real-world problem briefs submitted by organizations.' }
      ]
    },
    {
      category: 'Events & Competitions',
      description: 'Competitive programming, build marathons, and technical gatherings.',
      items: [
        { name: 'Coders Cup', path: '/coders-cup', icon: Trophy, desc: 'Flagship algorithmic programming contest.' },
        { name: 'Hackathons', path: '/hackathons', icon: Rocket, desc: 'High-octane rapid product building events.' },
        { name: 'Events', path: '/events', icon: Calendar, desc: 'Technical sessions, workshops, and ecosystem meetups.' }
      ]
    },
    {
      category: 'Community & Pathways',
      description: 'Talent development, student pathways, and institutional alignment.',
      items: [
        { name: 'Community', path: '/community', icon: Users, desc: 'Network of engineers, designers, and creators.' },
        { name: 'Campus / SIWES', path: '/siwes', icon: GraduationCap, desc: 'Practical industry exposure for student talent.' },
        { name: 'Partnerships', path: '/partnerships', icon: Handshake, desc: 'Collaborative avenues for industry and education.' }
      ]
    }
  ];

  const buildSteps = [
    {
      step: '01',
      title: 'Explore',
      subtitle: 'Identify & Investigate',
      description: 'Ask questions, investigate technical problems, examine real-world friction, and identify areas worth building in.',
      icon: Compass
    },
    {
      step: '02',
      title: 'Experiment',
      subtitle: 'Test & Prototype',
      description: 'Test hypotheses rapidly, learn through practical iteration, build prototypes, and refine technical approaches.',
      icon: FlaskConical
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Construct & Ship',
      description: 'Turn promising prototypes into functional, production-ready applications, systems, and practical digital products.',
      icon: Code2
    },
    {
      step: '04',
      title: 'Share',
      subtitle: 'Document & Collaborate',
      description: 'Document engineering insights, contribute to open codebases, exchange knowledge, and grow alongside peers.',
      icon: Share2
    }
  ];

  const builderProfiles = [
    { title: 'Developers & Aspiring Coders', desc: 'Engineers, software enthusiasts, and learners driven to write production-grade code.', icon: Code2 },
    { title: 'Students & Emerging Talent', desc: 'Campus innovators and SIWES trainees seeking practical engineering experience.', icon: GraduationCap },
    { title: 'Product Thinkers & Designers', desc: 'Creators focused on user experience, system architecture, and product viability.', icon: Box },
    { title: 'Researchers & Experimenters', desc: 'Technical minds exploring emerging technologies, algorithms, and automated systems.', icon: FlaskConical },
    { title: 'Organizations & Collaborators', desc: 'Businesses and partners looking to pose real-world challenges to talented builders.', icon: Handshake }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Ambient Lighting & Backdrop Grid */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28">

        {/* SECTION 1 — HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 pb-16 lg:py-20">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs sm:text-sm tracking-wider uppercase font-semibold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>ABOUT IEURION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              WE'RE HERE TO <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                BUILD WHAT COMES NEXT.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              IEURION is a developer house and innovation ecosystem where people, ideas, technology, and experimentation come together to build what matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                type="button"
                onClick={() => scrollToSection('ecosystem-section')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Meet the Community</span>
              </a>
            </div>
          </div>

          {/* Hero Node / Orbital Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-md aspect-square relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-between">
              
              <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                </div>
                <div className="text-xs font-mono text-cyan-400/80 flex items-center gap-1.5 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ieu_orbit.system</span>
                </div>
              </div>

              {/* Orbital Connected Graphic */}
              <div className="relative my-auto h-60 flex items-center justify-center z-10">
                {/* Orbital Rings */}
                <div className="absolute w-52 h-52 rounded-full border border-slate-800/80 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-40 h-40 rounded-full border border-cyan-500/20 animate-[spin_12s_linear_infinite_reverse]" />

                {/* Central Hub */}
                <div className="relative z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-200/50">
                  <Network className="w-8 h-8 text-slate-950" />
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-2 left-4 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center gap-2 shadow-lg">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Builders</span>
                </div>

                <div className="absolute top-2 right-4 p-2.5 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 flex items-center gap-2 shadow-lg">
                  <FlaskConical className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono">Research</span>
                </div>

                <div className="absolute bottom-2 left-4 p-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-indigo-300 flex items-center gap-2 shadow-lg">
                  <Box className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono">Products</span>
                </div>

                <div className="absolute bottom-2 right-4 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center gap-2 shadow-lg">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Ecosystem</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Innovation House</span>
                </div>
                <span>Building in the open</span>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2 — OUR STORY */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
                Mission & Identity
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                A PLACE WHERE IDEAS <br />
                <span className="text-slate-400">BECOME REAL.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                IEURION exists as a dedicated environment for building modern technology, investigating real-world problems, and turning ambitious concepts into practical software. We believe that true engineering mastery develops when talented individuals step beyond passive study to tackle meaningful technical challenges together.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From core software development and algorithmic competitions to campus mentorship and industry collaboration, our platform provides the structure, community, and practical avenues needed to support builders at every stage of their technical journey.
              </p>
            </div>

            {/* Visual Panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 relative overflow-hidden backdrop-blur-md shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Developer House Culture</h3>
                      <p className="text-xs text-slate-400 mt-1">An environment where writing code, testing logic, and shipping software are core priorities.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Connected Ecosystem</h3>
                      <p className="text-xs text-slate-400 mt-1">Bridging the space between student ambition, open-source builds, and industry collaboration.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Practical Impact</h3>
                      <p className="text-xs text-slate-400 mt-1">Focusing effort on functional applications, transparent research, and verifiable outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3 — OUR BELIEF */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Guiding Principles
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              BUILDING IS HOW WE MOVE FORWARD.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Three core beliefs that guide our technical exploration, project choices, and community interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {beliefs.map((belief) => {
              const IconComp = belief.icon;
              return (
                <div
                  key={belief.id}
                  className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 tracking-widest">
                        {belief.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {belief.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 4 — THE IEURION ECOSYSTEM */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60" id="ecosystem-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Architecture & Sitemap
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              ONE ECOSYSTEM. DIFFERENT WAYS TO BUILD.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore the dedicated channels, labs, and programs that power the IEURION builder network.
            </p>
          </div>

          <div className="space-y-12">
            {ecosystemGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-6">
                <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-400">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, iIdx) => {
                    const ItemIcon = item.icon;
                    return (
                      <a
                        key={iIdx}
                        href={item.path}
                        className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-4 hover:bg-slate-900/80"
                      >
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 shrink-0 transition-colors">
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.name}
                            </h4>
                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 5 — HOW WE APPROACH BUILDING */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Engineering Mindset
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              FROM CURIOSITY TO CREATION.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A general guiding approach that moves projects from early questions to shared code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-mono font-extrabold text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                        {step.step}
                      </span>
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                      {step.subtitle}
                    </p>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800/60 text-right">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      STAGE {step.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 6 — WHO WE WELCOME */}
        <section className="py-16 sm:py-24 border-t border-slate-800/60">
          <div className="max-w-3xl mb-12">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Inclusivity & Participants
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              THERE'S MORE THAN ONE WAY TO BE A BUILDER.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Our ecosystem thrives on diverse technical perspectives, background backgrounds, and creative skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builderProfiles.map((profile, idx) => {
              const ProfileIcon = profile.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <ProfileIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{profile.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{profile.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 7 — JOIN THE JOURNEY (CLOSING CTA) */}
        <section className="mt-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-cyan-500/25 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_75%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Rocket className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              THE FUTURE IS BUILT BY PEOPLE WHO SHOW UP.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore the ecosystem, discover projects, and find your place in the work ahead.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Explore the Community</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/partnerships"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:border-cyan-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Partner With IEURION</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}