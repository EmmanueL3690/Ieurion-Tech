// import {
//   Hero,
//   SectionHeading,
//   StepFlow,
//   FeatureGrid,

// } from "../../components/sections";

// import {
//   heroData,
//   modelSteps,
//   ecosystemAreas,
// } from "../../data/HomePage";
// export default function Home() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
//       {/* 1. Hero */}
//       <Hero {...heroData} />

//       {/* 2. Explore, Build, Research, Ship */}
//       <section className="px-6 py-20 md:px-12 lg:px-20">
//         <SectionHeading
//           eyebrow="02 / OUR APPROACH"
//           title="FROM CURIOSITY TO CREATION."
//           description="Explore possibilities, build solutions, research new ideas, and ship meaningful technology."
//         />

//         <div className="mt-12">
//           <StepFlow steps={modelSteps} />
//         </div>
//       </section>

//       {/* 3. Ecosystem areas */}
//       <section className="px-6 py-20 md:px-12 lg:px-20">
//         <SectionHeading
//           eyebrow="03 / ECOSYSTEM"
//           title="A PLACE FOR EVERY BUILDER."
//           description="Explore the spaces where ideas, collaboration, and engineering come together."
//         />

//         <div className="mt-12">
//           <FeatureGrid items={ecosystemAreas} />
//         </div>

        
//       </section>
     
//     </main>
//   );
// }

// src/pages/Home.jsx or src/app/page.jsx

import HeroSection from "../../components/sections/Hero/Hero";
import OurApproachSection from "../../components/sections/OurApproachSection/OurApproachSection";
import EcosystemSection from "../../components/sections/EcosystemSection/EcosystemSection";
import ProductsSection from "../../components/sections/ProductCard/ProductsSection";
import ProjectsSection from "../../components/sections/ProjectCard/ProjectsSection";
import CommunitySection from "../../components/sections/CommunitySection/CommunitySection";
import ProgrammesSection from "../../components/sections/ProgrammesSection/ProgrammesSection";
import PartnersSection from "../../components/sections/PartnersSection/PartnersSection";
import OpenSourceEventsSection from "../../components/sections/OpenSourceEventsSection/OpenSourceEventsSection";
import EcosystemMapSection from "../../components/sections/EcosystemMapSection/EcosystemMapSection";
import FaqSection from "../../components/sections/FaqSection/FaqSection";
import JoinJourneySection from "../../components/sections/JoinJourneySection/JoinJourneySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060913] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Our Approach */}
      <OurApproachSection />

      {/* 03. Ecosystem */}
      <EcosystemSection />

      {/* 04. Our Products */}
      <ProductsSection />

      {/* 05. Projects */}
      <ProjectsSection />

      {/* 06. Community */}
      <CommunitySection />

      {/* 07. Programmes */}
      <ProgrammesSection />

      {/* 08. Partners & Challenges */}
      <PartnersSection />

      {/* 09. Open Source & Events */}
      <OpenSourceEventsSection />

      {/* 10. Ecosystem Map */}
      <EcosystemMapSection />

      {/* 11. FAQ */}
      <FaqSection />

      {/* 12. Join the Journey */}
      <JoinJourneySection />
    </main>
  );
}