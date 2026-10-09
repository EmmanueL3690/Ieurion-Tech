import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "../../../components/ui/Container";

function CTABand({ eyebrow = "12 / GET STARTED", title = "READY TO BUILD?", description, children }) {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#020914] text-white overflow-hidden border-t border-slate-800/40">
      {/* Cosmic Background Rays & Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,195,255,0.12)_0%,_transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#00c3ff]/40 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      <Container>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#061221]/60 border border-[#00c3ff]/20 backdrop-blur-md shadow-[0_0_50px_rgba(0,195,255,0.08)]"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00c3ff]/10 border border-[#00c3ff]/20 text-xs font-semibold tracking-widest text-[#00c3ff] uppercase mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Sparkles size={13} className="text-[#00c3ff]" />
              <span>{eyebrow}</span>
            </motion.div>
          )}

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
            {typeof title === "string" ? (
              <>
                READY TO <span className="text-[#00c3ff] drop-shadow-[0_0_20px_rgba(0,195,255,0.4)]">BUILD?</span>
              </>
            ) : (
              title
            )}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {description}
            </p>
          )}

          {/* Action Elements */}
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {children ? (
              children
            ) : (
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00c3ff] text-[#020914] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#33d0ff] hover:shadow-[0_0_25px_rgba(0,195,255,0.5)] hover:-translate-y-0.5"
              >
                <span>Start a conversation</span>
                <ArrowRight size={16} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default CTABand;