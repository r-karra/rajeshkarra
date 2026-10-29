import React from 'react';
import { ExternalLink, BookCheck, FileText, Bookmark } from 'lucide-react';
import { LITERATURE_READINGS } from '@/data/portfolio-data';

export const LiteratureList: React.FC = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Suggested Literature & Research Readings</h2>
        <p className="text-sm text-slate-400 mt-1">
          Curated bibliography of textbooks, landmark research papers, and technical reports across Deep Learning, Quantum Computing, and Algorithms.
        </p>
      </div>

      <div className="space-y-4">
        {LITERATURE_READINGS.map((item, idx) => (
          <article
            key={idx}
            className="glass-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start space-x-3.5">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-cyan-400 shrink-0 mt-0.5">
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
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{item.authorOrSource}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mt-1">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.annotation}</p>
              </div>
            </div>

            <div className="shrink-0 self-end sm:self-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
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
