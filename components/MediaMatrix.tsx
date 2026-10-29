import React, { useState } from 'react';
import { ExternalLink, PlayCircle, Clock, Filter } from 'lucide-react';
import { MEDIA_LECTURES } from '@/data/portfolio-data';

export const MediaMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Deep Learning & JAX', 'Quantum AI', 'Mathematics', 'Speech & Phonetics'];

  const filteredMedia = selectedCategory === 'All'
    ? MEDIA_LECTURES
    : MEDIA_LECTURES.filter((m) => m.category === selectedCategory);

  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Media, Explanations & Lecture Matrix</h2>
          <p className="text-sm text-slate-400 mt-1">
            2-column matrix of academic lectures, video explanations, and foundational tutorials with direct timestamps.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 items-center bg-space-900/90 p-1.5 rounded-xl border border-white/[0.06]">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-2.5 py-1 rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Minimalist Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredMedia.map((video, idx) => (
          <article
            key={idx}
            className="glass-card rounded-xl p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  {video.category}
                </span>
                {video.timestamp && (
                  <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    <Clock className="w-3 h-3" />
                    <span>{video.timestamp}</span>
                  </span>
                )}
              </div>

              <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {video.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">{video.channelOrSeries}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                <PlayCircle className="w-3.5 h-3.5 text-rose-500" />
                <span>YouTube Lecture Link</span>
              </span>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-mono text-cyan-300 hover:underline"
              >
                <span>Watch Video</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
