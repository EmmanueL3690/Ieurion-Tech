import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  GraduationCap, 
  Sparkles, 
  Users, 
  Briefcase, 
  Microscope 
} from "lucide-react";

const DEFAULT_NODES = [
  { id: "developers", label: "Developers", icon: Code, position: "top" },
  { id: "designers", label: "Designers", icon: Palette, position: "top-left" },
  { id: "students", label: "Students", icon: GraduationCap, position: "left" },
  { id: "creators", label: "Creators", icon: Sparkles, position: "bottom-left" },
  { id: "teams", label: "Teams", icon: Users, position: "bottom-right" },
  { id: "entrepreneurs", label: "Entrepreneurs", icon: Briefcase, position: "right" },
  { id: "researchers", label: "Researchers", icon: Microscope, position: "top-right" },
];

const POSITION_CLASSES = {
  top: "top-[4%] left-1/2 -translate-x-1/2",
  "top-left": "top-[20%] left-[2%] sm:left-[6%]",
  left: "top-1/2 left-[0%] sm:left-[2%] -translate-y-1/2",
  "bottom-left": "bottom-[20%] left-[2%] sm:left-[6%]",
  "bottom-right": "bottom-[20%] right-[2%] sm:right-[6%]",
  right: "top-1/2 right-[0%] sm:right-[2%] -translate-y-1/2",
  "top-right": "top-[20%] right-[2%] sm:right-[6%]",
  default: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

function EcosystemDiagram({ items = DEFAULT_NODES }) {
  const nodesToRender = Array.isArray(items) && items.length > 0 && items[0].label 
    ? items 
    : DEFAULT_NODES;

  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[580px] aspect-square mx-auto flex items-center justify-center select-none py-6 lg:py-0">
      {/* Background Orbital Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#00c3ff]/15 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* SVG Orbital Rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600" fill="none">
        <ellipse 
          cx="300" 
          cy="300" 
          rx="220" 
          ry="220" 
          className="stroke-[#00c3ff]/20 stroke-[1.5]" 
        />
        <ellipse 
          cx="300" 
          cy="300" 
          rx="140" 
          ry="140" 
          className="stroke-[#00c3ff]/15 stroke-[1] stroke-dasharray-[6_6]" 
        />
      </svg>

      {/* Central IEURION Core Hub */}
      <motion.div 
        className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-[#061221]/90 border-2 border-[#00c3ff] backdrop-blur-md flex items-center justify-center text-center shadow-[0_0_35px_rgba(0,195,255,0.35)] cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex flex-col items-center justify-center gap-1.5 text-white">
          <div className="text-[#00c3ff]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
              <path d="M12 3a9 9 0 0 1 9 9" stroke="#00c3ff" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm lg:text-base font-extrabold tracking-widest text-white uppercase">
            IEURION
          </span>
        </div>
      </motion.div>

      {/* Peripheral Orbital Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {nodesToRender.map((node, index) => {
          const IconComponent = node.icon || Code;
          const posClass = POSITION_CLASSES[node.position] || POSITION_CLASSES.default;

          return (
            <motion.div
              key={node.id || index}
              className={`absolute z-20 pointer-events-auto flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#061221]/80 backdrop-blur-md border border-[#00c3ff]/30 text-[#00c3ff] text-xs sm:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#00c3ff] hover:bg-[#00c3ff]/10 hover:shadow-[0_0_15px_rgba(0,195,255,0.4)] cursor-pointer whitespace-nowrap ${posClass}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.08, y: -2 }}
            >
              <span className="text-[#00c3ff]">
                <IconComponent size={15} />
              </span>
              <span className="text-white font-medium">{node.label || node}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default EcosystemDiagram;