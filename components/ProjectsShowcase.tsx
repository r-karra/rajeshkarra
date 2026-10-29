import React from 'react';
import { ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { ACTIVE_PROJECTS, NOTEBOOKS_AND_MATERIALS } from '@/data/portfolio-data';

export const ProjectsShowcase: React.FC = () => {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Active Developments & Repositories</h2>
        <p className="text-sm text-slate-400 mt-1">
          Open-source projects, research prototypes, and public codebases across the Google AI and JAX ecosystem.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ACTIVE_PROJECTS.map((proj, idx) => (
          <article key={idx} className="glass-card rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-base font-semibold text-white tracking-tight">{proj.title}</h3>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                    proj.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : proj.status === 'Prototype'
                      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                  }`}
                >
                  {proj.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{proj.description}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-white/[0.06]">
                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-300 hover:underline"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>View Repository ↗</span>
                  </a>
                )}
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-purple-300 hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Architecture / Link ↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Notebooks & Research Loops */}
      <div className="pt-6">
        <h2 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span>Interactive Notebooks & Kernel Loops</span>
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Direct executable environments on Google Colab and Kaggle for JAX benchmarks, mathematical formulations, and quantum simulations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NOTEBOOKS_AND_MATERIALS.map((item, idx) => (
            <div key={idx} className="glass-card rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                    {item.category}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-cyan-400 hover:text-cyan-300 font-semibold px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40"
                  >
                    {item.badgeText}
                  </a>
                </div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 mt-1">{item.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <code className="text-[11px] font-mono text-slate-400 truncate max-w-[280px]">
                  {item.url}
                </code>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-200 hover:text-cyan-300 font-mono inline-flex items-center space-x-1"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
