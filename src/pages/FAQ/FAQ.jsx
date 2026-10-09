import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { faqData } from '../../data/faqs';

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'about', label: 'About IEURION' },
  { id: 'community', label: 'Community' },
  { id: 'projects', label: 'Projects & Open Source' },
  { id: 'siwes', label: 'Campus / SIWES' },
  { id: 'events', label: 'Events & Competitions' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'challenges', label: 'Submit a Challenge' },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  const getCategoryLabel = (catId) => {
    const found = CATEGORIES.find((c) => c.id === catId);
    return found ? found.label : catId;
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl rounded-full -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        {/* 1. Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            IEURION / FAQs
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase">
            Good Questions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Clear Answers.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
            Everything you need to know about IEURION as a developer house and innovation ecosystem — exploring our programmes, community, open-source initiatives, events, and partnership opportunities.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-md transition-opacity duration-300 opacity-60 group-hover:opacity-100 group-focus-within:opacity-100" />
              <div className="relative flex items-center bg-[#0d121d] border border-slate-800 rounded-2xl focus-within:border-cyan-500/60 shadow-xl transition-all duration-200">
                <svg
                  className="w-5 h-5 ml-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search your question..."
                  className="w-full py-4 pl-3 pr-10 bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base focus:outline-none"
                  aria-label="Search FAQ questions"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mr-3 p-1 text-slate-400 hover:text-white transition-colors focus:outline-none"
                    aria-label="Clear search input"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Category Filters */}
        <section aria-label="FAQ Categories">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    isActive
                      ? 'bg-cyan-500/15 border-cyan-500/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                      : 'bg-[#0d121d]/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-[#121826]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. Filter Summary Bar */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 border-b border-slate-800/60 pb-4">
          <div>
            Showing <span className="font-semibold text-cyan-400">{filteredFaqs.length}</span>{' '}
            {filteredFaqs.length === 1 ? 'question' : 'questions'}
            {activeCategory !== 'all' && (
              <span>
                {' '}in <span className="text-slate-200">{getCategoryLabel(activeCategory)}</span>
              </span>
            )}
            {searchQuery.trim() && (
              <span>
                {' '}matching "<span className="text-slate-200">{searchQuery.trim()}</span>"
              </span>
            )}
          </div>

          {(searchQuery || activeCategory !== 'all') && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset filters
            </button>
          )}
        </div>

        {/* 4. FAQ Accordion List & Empty State */}
        <section aria-label="Frequently Asked Questions List">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-3">
              {filteredFaqs.map((item) => {
                const isOpen = openId === item.id;
                const categoryLabel = getCategoryLabel(item.category);

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-[#0e1422] border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.08)]'
                        : 'bg-[#0d121d]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#0d121d]'
                    }`}
                  >
                    <button
                      id={`faq-header-${item.id}`}
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-2xl"
                    >
                      <div className="space-y-1.5 pr-2">
                        <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded bg-slate-800/80 text-cyan-400 border border-slate-700/50">
                          {categoryLabel}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {item.question}
                        </h3>
                      </div>

                      <div
                        className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400 rotate-180'
                            : 'bg-slate-800/50 border-slate-700/60 text-slate-400'
                        }`}
                      >
                        <svg
                          className="w-4 h-4 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-header-${item.id}`}
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 px-5 sm:px-6 pb-6 pt-0'
                          : 'grid-rows-[0fr] opacity-0 px-5 sm:px-6 pb-0 pt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-6 bg-[#0d121d]/50 border border-slate-800 rounded-3xl space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700/50 text-slate-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-lg font-bold text-slate-200">No questions found</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We couldn't find any questions matching your search criteria. Try adjusting your query or resetting filters.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 text-sm font-semibold transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] focus:outline-none"
              >
                Reset Search & Filters
              </button>
            </div>
          )}
        </section>

        {/* 5. Still Have Questions? CTA */}
        <section className="relative rounded-3xl bg-gradient-to-br from-[#0e1526] via-[#0d121d] to-[#0a0d15] border border-cyan-500/20 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Need More Context?
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Still Have Questions?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              If you couldn't find the answers you were looking for, explore our vibrant builder community or get in touch with us to discuss tailored organization partnerships.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/community"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all transform hover:-translate-y-0.5"
              >
                Join the Community
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/partners"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#131927] hover:bg-[#182033] border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold text-sm transition-all"
              >
                Partner With IEURION
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}