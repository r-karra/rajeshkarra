'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import {
  CURRICULUM_MODULES,
  TIFR_PREPARATION_STRATEGY,
  SOUL_CENTRIC_ARCHITECTURE,
} from '@/data/portfolio-data';

export const CurriculumShowcase: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'syllabus' | 'tifr' | 'soul-centric' | 'k12-pathways'>('syllabus');

  return (
    <section className="space-y-8">
      <div>
        <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wider mb-1">
          <GraduationCap className="w-3.5 h-3.5 text-black" />
          <span>Curricula, Research Syllabi &amp; Academic Blueprints</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-zinc-950 tracking-tight">
          Structured Educational Architectures &amp; Doctoral Preparation
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-3xl font-sans">
          Comprehensive pedagogical roadmaps: from 5-module Generative AI engineering to proof-oriented TIFR mathematical foundations and soul-centric computing.
        </p>
      </div>

      {/* Sub-tab navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-100 rounded-xl border border-zinc-200">
        <button
          onClick={() => setActiveSubTab('syllabus')}
          className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeSubTab === 'syllabus'
              ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Generative &amp; Agentic AI Syllabus</span>
        </button>

        <button
          onClick={() => setActiveSubTab('tifr')}
          className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeSubTab === 'tifr'
              ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>TIFR CS/LIDS Preparation Strategy</span>
        </button>

        <button
          onClick={() => setActiveSubTab('soul-centric')}
          className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeSubTab === 'soul-centric'
              ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Soul-Centric Tech (Super Book)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('k12-pathways')}
          className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeSubTab === 'k12-pathways'
              ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>K-12 &amp; University Foundations</span>
        </button>
      </div>

      {/* SUBTAB 1: Generative & Agentic AI with Python Syllabus */}
      {activeSubTab === 'syllabus' && (
        <div className="space-y-6">
          <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                  Comprehensive 5-Module Curriculum
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Syllabus: Generative and Agentic AI with Python
                </h3>
              </div>
              <div className="text-right text-xs text-slate-500 font-mono">
                Duration: 16 Weeks · Prerequisites: Basic Algebra &amp; Logic
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              A rigorous curriculum designed to take engineers and aspiring researchers from core Python memory mechanics to pretraining transformer models with JAX/Flax and orchestrating multi-agent systems.
            </p>

            {/* Modules Accordion / Cards */}
            <div className="space-y-4">
              {CURRICULUM_MODULES.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                      {mod.moduleNumber}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 flex-1 ml-2">
                      {mod.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {mod.topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500">Curated Materials:</span>
                    {mod.resources.map((r, rIdx) => (
                      <a
                        key={rIdx}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-mono text-blue-600 hover:text-blue-800 hover:underline bg-white px-2 py-0.5 rounded border border-slate-200"
                      >
                        <span>{r.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: TIFR Preparation Strategy */}
      {activeSubTab === 'tifr' && (
        <div className="space-y-6">
          <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                  Doctoral Research Admission Roadmap
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {TIFR_PREPARATION_STRATEGY.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Target Exam: {TIFR_PREPARATION_STRATEGY.targetExamYear} · {TIFR_PREPARATION_STRATEGY.institution}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed">
              <strong>Core Philosophy:</strong> {TIFR_PREPARATION_STRATEGY.philosophy}
            </div>

            {/* Strategic Rules */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900">
                Execution Rules: How to Study for TIFR CS/LIDS
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TIFR_PREPARATION_STRATEGY.rules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-blue-700 font-mono mb-1.5">
                        Rule 0{idx + 1}: {rule.rule}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {rule.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Subjects & Resources */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900">
                Foundational Subject Breakdown &amp; Academic Literature
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TIFR_PREPARATION_STRATEGY.coreSubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 mb-1">
                        {sub.subject}
                      </h5>
                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        {sub.focus}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60">
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">
                        Recommended Literature &amp; Lectures:
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {sub.sources.map((src, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                          >
                            {src}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: Soul-Centric Technology (Super Book / Divine Connect) */}
      {activeSubTab === 'soul-centric' && (
        <div className="space-y-6">
          <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 uppercase">
                Ethical AI Systems Architecture
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                {SOUL_CENTRIC_ARCHITECTURE.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                {SOUL_CENTRIC_ARCHITECTURE.executiveSummary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SOUL_CENTRIC_ARCHITECTURE.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
                >
                  <h4 className="text-xs font-bold text-emerald-800 font-mono">
                    {item.tier}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                Interested in testing or contributing to the Divine Connect open architecture?
              </div>
              <a
                href="https://docs.google.com/document/u/0/d/1i8VgsroBTO5eSJEciRtJ5Aak1pSLlY3oMCpa-9eSk4Q/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shrink-0"
              >
                <span>Read Architecture Document ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 4: K-12 to University STEM Pathways */}
      {activeSubTab === 'k12-pathways' && (
        <div className="space-y-6">
          <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                Lifelong Learning Framework
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Middle School, High School &amp; University Foundations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                A progressive learning track designed for self-directed students, children, and researchers bridging fundamental school mathematics to advanced algorithmic reasoning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Phase 1 (Standards 6-10)
                </span>
                <h4 className="text-sm font-bold text-slate-900">Middle School Mastery</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focus on number theory, geometric proofs, pre-algebra, and Khan Academy visual exercises. Fostering joyful curiosity in mathematics before rote mechanics.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  Phase 2 (Standards 11-12)
                </span>
                <h4 className="text-sm font-bold text-slate-900">Pre-University &amp; Calculus</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Single-variable differential and integral calculus, Cartesian coordinates, vectors, probability, and OpenStax open textbook curricula.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Phase 3 (University &amp; Beyond)
                </span>
                <h4 className="text-sm font-bold text-slate-900">Abstract Mathematics &amp; AI</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Multivariable calculus, linear algebra (Strang), probability &amp; statistics for data science, real analysis, and deep neural network proofs.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

