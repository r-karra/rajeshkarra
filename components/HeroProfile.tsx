'use client';

import React from 'react';
import {
  ExternalLink,
  Mail,
  Award,
  Target,
  Globe2,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { PROFILE_DATA, STRANGEWORKS_EARTH_VISION } from '@/data/portfolio-data';
import { SkillsGrid } from './SkillsGrid';

interface HeroProfileProps {
  onNavigateToVision?: () => void;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ onNavigateToVision }) => {
  return (
    <section className="space-y-10">
      {/* Top Banner - JAX Light Mode */}
      <div className="jax-card rounded-2xl p-6 sm:p-10 relative overflow-hidden bg-white border border-slate-200 shadow-jax-card">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Google Research & DeepMind Ecosystem Alignment · JAX AI Stack</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {PROFILE_DATA.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-blue-700 font-semibold">
            {PROFILE_DATA.title}
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            {PROFILE_DATA.bio}
          </p>

          {/* Social Profiles Grid */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={PROFILE_DATA.links.strangeworks}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-xs font-mono font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>StrangeWorks (Save Earth)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={PROFILE_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-white transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={PROFILE_DATA.links.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-white transition-colors"
            >
              <span>Kaggle</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={PROFILE_DATA.links.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-white transition-colors"
            >
              <span>Hugging Face</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={PROFILE_DATA.links.googleDeveloper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-white transition-colors"
            >
              <span>Google Developer Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={PROFILE_DATA.links.bearBlog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-white transition-colors"
            >
              <span>Bear Blog</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PROFILE_DATA.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Prominent Save Earth & Humanity Vision Highlight Card */}
      <div className="earth-flagship-card rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Main Future Project · Save Earth & Humanity Vision</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {STRANGEWORKS_EARTH_VISION.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {STRANGEWORKS_EARTH_VISION.tagline} — An open-science laboratory dedicated to climate intelligence, sensor telemetry, and deploying hybrid TPU-quantum computing to safeguard Earth and human flourishing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
            <a
              href={STRANGEWORKS_EARTH_VISION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
            >
              <span>Open Strangeworks ↗</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {onNavigateToVision && (
              <button
                onClick={onNavigateToVision}
                className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium text-xs transition-colors"
              >
                <span>Read Full Vision</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Strategic Research Agenda Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="jax-card rounded-xl p-6 bg-white border border-slate-200">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Target Research Paths</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Targeting doctoral &amp; Master&apos;s research at <strong>TIFR (Computer Science / LIDS)</strong> with emphasis on proof-oriented analysis, discrete mathematics, and continuous linear operator theory.
          </p>
        </div>

        <div className="jax-card rounded-xl p-6 bg-white border border-slate-200">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Qiskit &amp; Quantum AI</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Advancing through the <strong>IBM Quantum Learning</strong> path, Qiskit Advocate Program, and NISQ-level quantum machine learning simulations utilizing Cirq and TensorFlow Quantum.
          </p>
        </div>

        <div className="jax-card rounded-xl p-6 bg-white border border-slate-200">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
            <Globe2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Planetary AI &amp; Climate</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Developing high-resolution micro-climate telemetry, <strong>DeepMind GraphCast</strong> neural weather forecasting, and bioacoustic species recognition with the StrangeWorks Open Lab.
          </p>
        </div>
      </div>

      {/* Core Technical Capabilities & Frameworks Grid */}
      <div className="pt-2">
        <SkillsGrid />
      </div>
    </section>
  );
};
