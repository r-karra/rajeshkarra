'use client';

import React from 'react';
import { ExternalLink, BookCheck, FileText, Bookmark, BookOpen } from 'lucide-react';
import { LITERATURE_READINGS } from '@/data/portfolio-data';

export const LiteratureList: React.FC = () => {
  return (
    <section className="space-y-8">
      <div>
        <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>Academic Bibliography</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Suggested Literature &amp; Research Readings</h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Curated bibliography of textbooks, landmark research papers, and technical reports across Deep Learning, JAX, Climate AI, and Quantum Computing.
        </p>
      </div>

      <div className="space-y-4">
        {LITERATURE_READINGS.map((item, idx) => (
          <article
            key={idx}
            className="jax-card rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200"
          >
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 shrink-0 mt-0.5">
                {item.type === 'Textbook' ? (
                  <BookCheck className="w-4 h-4" />
                ) : item.type === 'Paper' ? (
                  <FileText className="w-4 h-4" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{item.authorOrSource}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-1">{item.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.annotation}</p>
              </div>
            </div>

            <div className="shrink-0 self-end sm:self-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700 transition-colors"
              >
                <span>Read Reference</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
