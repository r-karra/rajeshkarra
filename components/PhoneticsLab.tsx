'use client';

import React from 'react';
import { Volume2, Mic, Headphones, BookOpen, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { PHONETICS_CURRICULUM } from '@/data/portfolio-data';

export const PhoneticsLab: React.FC = () => {
  const contractions = [
    { standard: 'want to', contraction: 'wanna', example: "I wanna train the JAX model." },
    { standard: 'going to', contraction: 'gonna', example: "We're gonna deploy on Cloud TPUs." },
    { standard: 'got to', contraction: 'gotta', example: "You gotta derive the proof first." },
    { standard: 'should have', contraction: 'shoulda', example: "We shoulda cached the attention keys." },
    { standard: 'could have', contraction: 'coulda', example: "The compiler coulda fused those ops." },
    { standard: 'let me', contraction: 'lemme', example: "Lemme inspect the tensor shapes." },
    { standard: 'give me', contraction: 'gimme', example: "Gimme the gradient checkpoint." },
    { standard: 'kind of', contraction: 'kinda', example: "This loss curve is kinda noisy." },
  ];

  return (
    <section className="space-y-8">
      <div>
        <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-amber-700 uppercase tracking-wider mb-1">
          <Volume2 className="w-3.5 h-3.5 text-amber-600" />
          <span>Scientific Communication &amp; Global Fluency</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          {PHONETICS_CURRICULUM.title}
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          {PHONETICS_CURRICULUM.subtitle}. Formulated to help international researchers deliver conference presentations with effortless natural rhythm and acoustic clarity.
        </p>
      </div>

      {/* 4 Phonetic Foundations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PHONETICS_CURRICULUM.foundations.map((item, idx) => (
          <div
            key={idx}
            className="jax-card rounded-2xl p-6 bg-white border border-slate-200 hover:border-amber-300 transition-all"
          >
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 mb-3 w-fit">
              <span>Mechanic 0{idx + 1}</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {item.rule}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Daily Fluency Algorithm */}
      <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-4">
        <div className="flex items-center space-x-2">
          <Headphones className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-slate-900">
            Your Daily &quot;Algorithm&quot; for American English Fluency
          </h3>
        </div>
        <p className="text-xs text-slate-600">
          A systematic daily habituation loop treating speech acquisition with the same algorithmic precision as training a neural network.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {PHONETICS_CURRICULUM.dailyAlgorithm.map((alg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {alg}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contractions Table */}
      <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200">
        <h3 className="text-base font-bold text-slate-900 mb-2">
          Connected Speech Contractions in Technical Discourse
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          Native American researchers frequently reduce auxiliary verbs to maintain sentence stress on technical keywords.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {contractions.map((c, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span className="text-slate-500">{c.standard}</span>
                <span className="text-amber-700 bg-amber-100/70 px-1.5 py-0.5 rounded">
                  {c.contraction}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 italic mt-1 leading-snug">
                &ldquo;{c.example}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Learning Anchor: English with Yuliya */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-amber-900">
            Recommended Channel: English with Yuliya &amp; Fast Spoken English
          </h4>
          <p className="text-xs text-amber-800 mt-1">
            Watch the curated fast spoken English tutorials, atomic habits shadowing exercises, and Suits dialogue breakdowns in the Video Matrix.
          </p>
        </div>
        <a
          href="https://www.youtube.com/@yuliya_lingua"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors shrink-0 inline-flex items-center space-x-1.5 shadow-xs"
        >
          <span>Open Yuliya Lingua ↗</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

