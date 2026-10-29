import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolio-data';

export const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {SKILL_CATEGORIES.map((cat, idx) => (
        <div key={idx} className="glass-card rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide flex items-center justify-between">
              <span>{cat.category}</span>
              <span className="text-[10px] font-mono text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                Tier 1
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">{cat.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

