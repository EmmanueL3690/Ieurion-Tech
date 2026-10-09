// src/components/sections/11-FaqSection.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";

const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "QUESTIONS BUILDERS ASK.",
  description: "Quick answers to common questions about IEURION.",
  seeAllHref: "/faq",
  faqs: [
    {
      id: "faq-1",
      question: "Is there internet access at the House?",
      answer:
        "Yes! We provide high-speed fiber internet infrastructure designed for heavy developer workflows, deployment, and live streaming.",
    },
    {
      id: "faq-2",
      question: "What happens when the power goes out?",
      answer:
        "We have heavy-duty backup power systems and uninterrupted power supply (UPS) setups so work never gets interrupted.",
    },
    {
      id: "faq-3",
      question: "Who can join?",
      answer:
        "Developers, designers, researchers, students, founders, and anyone passionate about exploring emerging technology and building products.",
    },
    {
      id: "faq-4",
      question: "Does it cost anything?",
      answer:
        "Core community events, open-source projects, and general membership access are free. Specialty residencies or specialized facility access may have application criteria.",
    },
  ],
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header & CTA */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                {FAQ_DATA.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
                {FAQ_DATA.title}
              </h2>
              <p className="text-slate-400 mt-3 text-base leading-relaxed">
                {FAQ_DATA.description}
              </p>
            </div>

            <div>
              <Link
                to={FAQ_DATA.seeAllHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold text-xs tracking-wide transition-all"
              >
                See all FAQs
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_DATA.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm md:text-base font-bold text-white flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-cyan-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-slate-800/40 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}