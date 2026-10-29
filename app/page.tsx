'use client';

import React, { useState } from 'react';
import { Navbar, TabKey } from '@/components/Navbar';
import { HeroProfile } from '@/components/HeroProfile';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { ResearchNotes } from '@/components/ResearchNotes';
import { LiteratureList } from '@/components/LiteratureList';
import { MediaMatrix } from '@/components/MediaMatrix';
import { PROFILE_DATA } from '@/data/portfolio-data';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('profile');

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'profile' && <HeroProfile />}
        {activeTab === 'projects' && <ProjectsShowcase />}
        {activeTab === 'notes' && <ResearchNotes />}
        {activeTab === 'literature' && <LiteratureList />}
        {activeTab === 'media' && <MediaMatrix />}
      </main>

      <footer className="border-t border-white/[0.08] bg-space-950/80 backdrop-blur-md py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name} · Built with Next.js, JAX-inspired Dark Mode & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-4">
            <a href={PROFILE_DATA.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
              GitHub
            </a>
            <a href={PROFILE_DATA.links.kaggle} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
              Kaggle
            </a>
            <a href={PROFILE_DATA.links.huggingface} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
              Hugging Face
            </a>
            <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
