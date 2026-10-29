import React from 'react';
import { ExternalLink, Mail, Award, Target, Compass } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolio-data';
import { SkillsGrid } from './SkillsGrid';

export const HeroProfile: React.FC = () => {
  return (
    <section className="space-y-12">
      {/* Top Banner */}
      <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Google Research & DeepMind Ecosystem Alignment</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {PROFILE_DATA.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-cyan-300 font-medium">
            {PROFILE_DATA.title}
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            {PROFILE_DATA.bio}
          </p>

          {/* Social Profiles Grid */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={PROFILE_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PROFILE_DATA.links.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Kaggle</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PROFILE_DATA.links.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Hugging Face</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PROFILE_DATA.links.googleDeveloper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Google Developer Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>{PROFILE_DATA.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Strategic Research Agenda Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">Target Research Paths</h3>
          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
            Targeting Integrated PhD and Master&apos;s admissions at <strong>TIFR (Computer Science / LIDS)</strong> and specialized research programs with emphasis on proof-oriented analysis and continuous mathematics.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">Qiskit & Quantum AI</h3>
          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
            Advancing through the <strong>IBM Quantum Learning</strong> path, Qiskit Advocate Program, and NISQ-level quantum machine learning simulations utilizing Cirq and TensorFlow Quantum.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">JAX-Native Scaling</h3>
          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
            Pivoting codebases from standard PyTorch paradigms to JAX/Flax/Optax primitives, enabling multi-host Cloud TPU execution and pure functional neural modeling.
          </p>
        </div>
      </div>

      {/* Skills Matrix */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span>Technical Skills & Frameworks Taxonomy</span>
        </h2>
        <SkillsGrid />
      </div>
    </section>
  );
};
