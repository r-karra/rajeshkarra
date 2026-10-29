'use client';

import React, { useState } from 'react';
import { Navbar, TabKey } from '@/components/Navbar';
import { HeroProfile } from '@/components/HeroProfile';
import { EarthVisionShowcase } from '@/components/EarthVisionShowcase';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { JaxStackSection } from '@/components/JaxStackSection';
import { CurriculumShowcase } from '@/components/CurriculumShowcase';
import { MediaMatrix } from '@/components/MediaMatrix';
import { DocumentationHub } from '@/components/DocumentationHub';
import { PhoneticsLab } from '@/components/PhoneticsLab';
import { PROFILE_DATA, STRANGEWORKS_EARTH_VISION } from '@/data/portfolio-data';
import { Globe2, Heart, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* JAX Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'overview' && (
          <HeroProfile onNavigateToVision={() => setActiveTab('vision')} />
        )}
        {activeTab === 'vision' && <EarthVisionShowcase />}
        {activeTab === 'projects' && <ProjectsShowcase />}
        {activeTab === 'jax-stack' && <JaxStackSection />}
        {activeTab === 'curriculum' && <CurriculumShowcase />}
        {activeTab === 'media' && <MediaMatrix />}
        {activeTab === 'documentation' && <DocumentationHub />}
        {activeTab === 'phonetics' && <PhoneticsLab />}
      </main>

      {/* JAX-Inspired Light Mode Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 mt-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                <span>{PROFILE_DATA.name}</span>
                <span className="text-slate-400">·</span>
                <span className="text-blue-700 font-mono text-xs">{PROFILE_DATA.title}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-lg">
                Advancing JAX/Flax high-performance computing, StrangeWorks Save Earth &amp; Humanity Vision, and Google DeepMind open research foundations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={STRANGEWORKS_EARTH_VISION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-xs font-semibold hover:bg-emerald-100 transition-colors"
              >
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strange Works Open Lab ↗</span>
              </a>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-semibold hover:bg-blue-100 transition-colors"
              >
                <span>{PROFILE_DATA.email}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <div>
              © {new Date().getFullYear()} {PROFILE_DATA.name} · Built with Next.js, JAX-inspired Light Mode &amp; Tailwind CSS.
            </div>
            <div className="flex flex-wrap items-center space-x-4">
              <a
                href={PROFILE_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href={PROFILE_DATA.links.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Kaggle
              </a>
              <a
                href={PROFILE_DATA.links.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Hugging Face
              </a>
              <a
                href={PROFILE_DATA.links.renderJbac}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Render App
              </a>
              <a
                href={PROFILE_DATA.links.bearBlog}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Bear Blog
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
