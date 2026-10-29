'use client';

import React from 'react';
import {
  Globe2,
  ExternalLink,
  ShieldCheck,
  Cpu,
  CloudRain,
  Trees,
  SunMedium,
  Users,
  Compass,
  Sparkles,
} from 'lucide-react';
import { STRANGEWORKS_EARTH_VISION } from '@/data/portfolio-data';

export const EarthVisionShowcase: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe2 className="w-5 h-5 text-emerald-600" />;
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-blue-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-700" />;
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      default:
        return <Users className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section className="space-y-12">
      {/* Flagship Hero Banner */}
      <div className="earth-flagship-card rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
            <span>{STRANGEWORKS_EARTH_VISION.highlightBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {STRANGEWORKS_EARTH_VISION.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-medium text-emerald-800">
            {STRANGEWORKS_EARTH_VISION.tagline}
          </p>

          <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            {STRANGEWORKS_EARTH_VISION.statement}
          </p>

          {/* Core Action Callouts */}
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <a
              href={STRANGEWORKS_EARTH_VISION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Globe2 className="w-4 h-4" />
              <span>Launch Strange Works Platform ↗</span>
            </a>

            <a
              href="#pillars"
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-medium text-sm transition-colors shadow-xs"
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Explore 6 Planetary Pillars</span>
            </a>

            <a
              href="https://github.com/google-research/weatherbench2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl bg-white/80 hover:bg-white border border-slate-200 text-slate-700 text-xs font-mono transition-colors"
            >
              <span>WeatherBench 2 Benchmark</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Platform Live Preview Pill */}
          <div className="mt-6 pt-6 border-t border-emerald-200/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-emerald-900">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Live Deployment:</span>
              <a
                href={STRANGEWORKS_EARTH_VISION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-emerald-700 hover:text-emerald-900"
              >
                {STRANGEWORKS_EARTH_VISION.url}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <span>Stack: JAX · Google TPUs · Quantum Nodes · Sensor Telemetry</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Planetary Telemetry Pillars */}
      <div id="pillars" className="space-y-6 pt-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strange Works Architectural Pillars</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Planetary Preservation & Ecological Telemetry Architecture
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            A unified, multi-tiered framework addressing climate equilibrium, ecological preservation, and sustainable computation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRANGEWORKS_EARTH_VISION.pillars.map((pillar, idx) => (
            <article
              key={idx}
              className="jax-card rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-jax-hover transition-all bg-white"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {pillar.title}
                </h3>
                <div className="text-xs font-mono text-emerald-700 mt-0.5 mb-3 font-medium">
                  {pillar.subtitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <div className="space-y-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-[11px] font-mono font-semibold text-slate-700 uppercase">
                    Key Technical Directives:
                  </div>
                  {pillar.telemetryPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                      <span className="text-emerald-500 font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                {pillar.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Climate Mathematics & Spherical Modeling */}
      <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-1">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Mathematical Foundations for Earth Systems</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            The Mathematics Behind Climate Intelligence & Biome Dynamics
          </h2>
          <p className="text-xs text-slate-600 mt-1 mb-6 leading-relaxed">
            Strange Works formulates Earth preservation as high-dimensional continuous physics solved via JAX-accelerated partial differential equation surrogates and spectral graph operators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STRANGEWORKS_EARTH_VISION.climateMath.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-2 leading-tight">
                    {item.topic}
                  </h4>
                  <div className="p-2.5 rounded-lg bg-slate-900 text-blue-200 font-mono text-[11px] mb-3 overflow-x-auto">
                    {item.formulation}
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-jax-card">
        <div>
          <h3 className="text-xl font-bold tracking-tight">
            Join the Strange Works Open Science Fellowship
          </h3>
          <p className="text-xs text-emerald-100 mt-1 max-w-2xl leading-relaxed">
            We are creating an open, collaborative community of researchers, students, and educators. Explore our high-fidelity datasets, open-weight climate models, and cloud-run notebooks.
          </p>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <a
            href={STRANGEWORKS_EARTH_VISION.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-xs"
          >
            Visit StrangeWorks.app ↗
          </a>
        </div>
      </div>
    </section>
  );
};

