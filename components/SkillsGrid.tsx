import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolio-data';

export const SkillsGrid: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Core Technical Frameworks &amp; Research Stack
        </h2>
        <p className="text-xs text-slate-600 mt-1">
          Proficiency matrix covering JAX, TPU distributed compilation, DeepMind scientific platforms, and mathematical foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="jax-card rounded-xl p-5 flex flex-col justify-between bg-white border border-slate-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-mono font-medium text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 shrink-0">
                  Core Pillar
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
