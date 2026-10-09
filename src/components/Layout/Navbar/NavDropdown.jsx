import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function NavDropdown({ label, items = [] }) {
  return (
    <div className="relative group py-2">
      <button 
        type="button" 
        className="flex items-center gap-1 text-[12px] font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 focus:outline-none" 
        aria-haspopup="true" 
      >
        <span>{label}</span>
        <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div className="absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
        <div className="bg-[#061221]/95 backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-2 shadow-2xl flex flex-col gap-1">
          {items.map((item, index) => {
            // Combines item.id, item.href, and array index to guarantee key uniqueness
            const itemKey = item.id || `${item.href || "nav-item"}-${index}`;

            return (
              <Link 
                key={itemKey} 
                to={item.href || "#"} 
                className="flex flex-col px-3 py-2 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 transition-all duration-150"
              >
                <span className="text-[12px] font-medium nav-dropdown__item-title"> 
                  {item.label} 
                </span> 

                {item.description && ( 
                  <span className="text-[10px] text-slate-400 nav-dropdown__item-description"> 
                    {item.description} 
                  </span> 
                )} 
              </Link> 
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;