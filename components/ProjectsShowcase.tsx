import React from 'react';
import { ExternalLink, GitBranch, Terminal, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import { ACTIVE_PROJECTS, STRANGEWORKS_EARTH_VISION } from '@/data/portfolio-data';

export const ProjectsShowcase: React.FC = () => {
  const notebooks = [
    {
      title: 'Gemma 2 Inference using JAX and Flax (Kaggle)',
      platform: 'Kaggle Kernel',
      category: 'JAX / Gemma',
      url: 'https://www.kaggle.com/code/nilaychauhan/gemma-2-inference-using-jax-and-flax',
      badgeText: '[open on kaggle]',
      description: 'Zero-overhead inference pipeline for Gemma 2 weights on Cloud TPUs with XLA optimization and Flax Linen layers.'
    },
    {
      title: 'RecurrentGemma Inference with JAX (Google AI)',
      platform: 'Google Developers',
      category: 'DeepMind RecurrentGemma',
      url: 'https://ai.google.dev/gemma/docs/recurrentgemma/recurrentgemma_jax_inference',
      badgeText: '[docs & colab]',
      description: 'Linear attention RNN architecture implementing Griffin model for unlimited context processing.'
    },
    {
      title: 'Jraph Graph Neural Network Tutorial (Colab)',
      platform: 'Google Colab',
      category: 'Graph ML / DeepMind',
      url: 'https://github.com/google-deepmind/jraph',
      badgeText: '[open with colab]',
      description: 'End-to-end graph neural network training loop in pure JAX using jraph library on molecular datasets.'
    },
    {
      title: 'Quantum Circuits with Google Cirq (Colab)',
      platform: 'Google Colab',
      category: 'Quantum AI',
      url: 'https://github.com/quantumlib/Cirq',
      badgeText: '[open with colab]',
      description: 'Simulating noisy quantum gates and variational algorithms using Cirq and TensorFlow Quantum.'
    }
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-1">
          <Terminal className="w-3.5 h-3.5 text-blue-600" />
          <span>Codebases, Deployments &amp; Research Assets</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Active Developments, Flagship Projects &amp; Repositories
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Open-source repositories, planetary intelligence initiatives, and production cloud systems across JAX, DeepMind, and Quantum architectures.
        </p>
      </div>

      {/* Flagship Highlight Banner for StrangeWorks */}
      <div className="earth-flagship-card rounded-2xl p-6 sm:p-8 bg-white border-2 border-emerald-400">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>{STRANGEWORKS_EARTH_VISION.highlightBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {STRANGEWORKS_EARTH_VISION.title}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
              {STRANGEWORKS_EARTH_VISION.tagline}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {STRANGEWORKS_EARTH_VISION.mission} Combines sensor telemetry, Fourier Neural Operators, GraphCast neural weather modeling, and hybrid TPU-quantum computing to preserve planetary ecosystems.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                #SaveEarth
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                #ClimateAI
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                #MicroClimateTelemetry
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                #GraphCast
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                #HybridTPUQuantum
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 w-full lg:w-auto">
            <a
              href={STRANGEWORKS_EARTH_VISION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <Globe2 className="w-4 h-4" />
              <span>Open Strange Works Platform ↗</span>
            </a>
            <div className="text-center text-[11px] font-mono text-emerald-800 font-semibold flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>https://strangeworks-six.vercel.app/</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACTIVE_PROJECTS.map((proj, idx) => (
          <article
            key={idx}
            className={`jax-card rounded-2xl p-6 flex flex-col justify-between bg-white border ${
              proj.isHighlighted ? 'border-blue-300 shadow-md ring-1 ring-blue-100' : 'border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {proj.title}
                </h3>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider shrink-0 font-semibold ${
                    proj.status === 'Flagship Vision'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : proj.status === 'Active'
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : proj.status === 'Prototype'
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : proj.status === 'Deployed'
                      ? 'bg-teal-50 text-teal-700 border-teal-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {proj.status}
                </span>
              </div>

              {proj.highlightBadge && (
                <div className="text-[11px] font-mono text-blue-600 font-semibold mb-2">
                  ✦ {proj.highlightBadge}
                </div>
              )}

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {proj.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-slate-100">
                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-blue-600 hover:text-blue-800 hover:underline"
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
                    className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-emerald-700 hover:text-emerald-900 hover:underline"
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

      {/* Notebooks & Executable Research Loops */}
      <div className="pt-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-blue-600" />
            <span>Interactive Notebooks &amp; Executable Environments</span>
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Executable notebooks on Google Colab and Kaggle for JAX benchmarks, GNNs, and quantum circuit simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notebooks.map((item, idx) => (
            <div
              key={idx}
              className="jax-card rounded-xl p-5 flex flex-col justify-between bg-white border border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                    {item.category}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1"
                  >
                    <span>{item.badgeText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Platform: {item.platform}</span>
                <span className="text-emerald-600 font-medium">● Verified Execution</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
