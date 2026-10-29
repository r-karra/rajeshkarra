'use client';

import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Filter, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { CURATED_DOCUMENTATION_LINKS, CuratedLink } from '@/data/portfolio-data';

export const DocumentationHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const categories = useMemo(() => {
    const set = new Set<string>();
    CURATED_DOCUMENTATION_LINKS.forEach((l) => set.add(l.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredLinks = useMemo(() => {
    return CURATED_DOCUMENTATION_LINKS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        q === '' ||
        item.title.toLowerCase().includes(q) ||
        item.url.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredLinks.length / itemsPerPage);
  const paginatedLinks = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredLinks.slice(start, start + itemsPerPage);
  }, [filteredLinks, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>Curated Documentation &amp; Link Knowledge Base</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Comprehensive Research Links &amp; Documentation Matrix
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Direct access to every research paper, framework document, deep-learning tutorial, course syllabus, and tool link synthesized from the master research hub ({CURATED_DOCUMENTATION_LINKS.length} verified references).
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="jax-card rounded-2xl p-5 bg-white border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across 400+ resources (e.g. JAX, Gemma, DeepMind, Earth)..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          <div className="text-xs font-mono text-slate-500 shrink-0">
            Showing <strong className="text-blue-700">{filteredLinks.length}</strong> of{' '}
            {CURATED_DOCUMENTATION_LINKS.length} links
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          <Filter className="w-3.5 h-3.5 text-slate-400 self-center mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-xs px-2.5 py-1 rounded-lg transition-all font-medium ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedLinks.map((item, idx) => (
          <article
            key={idx}
            className="jax-card rounded-xl p-4 flex flex-col justify-between bg-white border border-slate-200 hover:border-blue-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                    item.category.includes('Save Earth')
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : item.category.includes('JAX')
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : item.category.includes('DeepMind')
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {item.badge}
                </span>
                <span className="text-[10px] text-slate-400 font-mono truncate max-w-[140px]">
                  {new URL(item.url.startsWith('http') ? item.url : `https://${item.url}`).hostname.replace('www.', '')}
                </span>
              </div>

              <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                {item.title}
              </h4>
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 truncate max-w-[180px]">
                {item.category}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-blue-600 hover:text-blue-800 hover:underline shrink-0"
              >
                <span>Access</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 pt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 disabled:opacity-40 hover:bg-slate-50 transition-colors"
          >
            Previous
          </button>
          <span className="text-xs font-mono text-slate-600 px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 disabled:opacity-40 hover:bg-slate-50 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

