import { Link } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function MobileMenu({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);

  if (!isOpen) {
    return null;
  }

  const toggleSection = (section) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  const buildItems = [
    ["Developer House", "/developer-house"],
    ["Build Forge", "/build-forge"],
    ["Builder Residency", "/residency"],
    ["Robotics Lab", "/robotics"],
  ];

  const competeItems = [
    ["Hackathons", "/hackathons"],
    ["Coders Cup", "/coders-cup"],
    ["Events", "/events"],
  ];

  const communityItems = [
    ["Builders", "/community"],
    ["Projects", "/projects"],
    ["Campus / SIWES", "/siwes"],
    ["Open Source", "/projects"],
  ];

  const partnerItems = [
    ["Become a Partner", "/partners"],
    ["Submit a Challenge", "/challenges"],
  ];

  const aboutItems = [
    ["Our Story", "/about"],
    ["FAQs", "/faq"],
  ];

  const renderSection = (label, key, items) => {
    const isOpenSection = openSection === key;

    return (
      <div className="border-b border-cyan-400/10 last:border-b-0">
        <button 
          type="button" 
          className="w-full flex items-center justify-between py-3 px-4 text-[13px] font-medium text-slate-300 hover:text-cyan-300 transition-colors"
          onClick={() => toggleSection(key)} 
          aria-expanded={isOpenSection}
        >
          <span>{label}</span>

          <ChevronDown 
            size={18} 
            className={`transition-transform duration-200 ${
              isOpenSection 
                ? "rotate-180 text-cyan-400" 
                : "text-slate-400"
            }`}
          />
        </button>

        {isOpenSection && (
          <div className="flex flex-col bg-cyan-950/20 py-1 pl-4 pr-2 mb-2 rounded-xl gap-1">
            {items.map(([itemLabel, href]) => (
              <Link 
                key={href + itemLabel} 
                to={href} 
                onClick={onClose} 
                className="py-2 px-3 text-[12px] text-slate-400 hover:text-cyan-300 rounded-lg hover:bg-cyan-950/40 transition-colors"
              >
                {itemLabel}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[#020914]/95 backdrop-blur-xl border-b border-cyan-400/10 lg:hidden overflow-y-auto transition-all duration-300">
      <nav 
        className="max-w-md mx-auto px-4 py-6 flex flex-col gap-1" 
        aria-label="Mobile navigation"
      >
        {renderSection(
          "Build",
          "build",
          buildItems
        )}

        <Link 
          to="/products" 
          className="py-3 px-4 text-[13px] font-medium text-slate-300 hover:text-cyan-300 transition-colors border-b border-cyan-400/10"
          onClick={onClose}
        >
          Products
        </Link>

        <Link 
          to="/research" 
          className="py-3 px-4 text-[13px] font-medium text-slate-300 hover:text-cyan-300 transition-colors border-b border-cyan-400/10"
          onClick={onClose}
        >
          Research
        </Link>

        {renderSection(
          "Compete",
          "compete",
          competeItems
        )}

        {renderSection(
          "Community",
          "community",
          communityItems
        )}

        {renderSection(
          "Partners",
          "partners",
          partnerItems
        )}

        {renderSection(
          "About",
          "about",
          aboutItems
        )}

        <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-cyan-400/10">
          <Link 
            to="/partners" 
            className="w-full text-center py-2.5 text-[12px] font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            onClick={onClose}
          >
            Partner With IEURION
          </Link>

          <Link 
            to="/community" 
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-cyan-400 text-[#02111f] text-[13px] font-bold hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            onClick={onClose}
          >
            <span>Join the House</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;