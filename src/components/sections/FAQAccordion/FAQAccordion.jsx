import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "../../../components/ui/Container";
import FAQAccordion from "./FAQAccordion";

function FAQSection({ items = [] }) {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#020914] text-white overflow-hidden border-t border-slate-800/40">
      {/* Background Atmosphere */}
      <div 
        className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,195,255,0.06)_0%,_transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container>
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#00c3ff] uppercase mb-4 drop-shadow-[0_0_12px_rgba(0,195,255,0.4)]">
              <span className="font-bold">10</span>
              <span className="text-slate-500">/</span>
              <span>FAQ</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              QUESTIONS ABOUT <br />
              <span className="text-[#00c3ff] drop-shadow-[0_0_20px_rgba(0,195,255,0.3)]">
                IEURION?
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Everything you need to know about the ecosystem, programmes, community, and ways to get involved.
            </p>
          </div>

          {/* View All Link */}
          <a
            href="#all-faqs"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#061221]/80 border border-[#00c3ff]/30 text-[#00c3ff] font-semibold text-sm tracking-wide transition-all duration-300 hover:border-[#00c3ff] hover:bg-[#00c3ff]/10 hover:shadow-[0_0_20px_rgba(0,195,255,0.25)] hover:-translate-y-0.5 self-start md:self-end"
          >
            <span>View all FAQs</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Accordion Component */}
        <FAQAccordion items={items} />
      </Container>
    </section>
  );
}

export default FAQSection;