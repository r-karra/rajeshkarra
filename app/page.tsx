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
import { Globe2 } from 'lucide-react';
import { AdminProvider, useAdmin } from '@/lib/AdminContext';
import { AdminAuthModal } from '@/components/AdminAuthModal';

function HomeContent() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const {
    isAdmin,
    isEditMode,
    setIsEditMode,
    isAuthModalOpen,
    closeAuthModal,
    login,
    logout,
  } = useAdmin();

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-zinc-900 font-sans">
      {/* Editorial Navbar with 3-Horizontal Dropdown Menu & Admin Guard */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'overview' && (
          <HeroProfile
            onNavigateToVision={() => setActiveTab('vision')}
            isEditMode={isEditMode}
          />
        )}
        {activeTab === 'vision' && <EarthVisionShowcase isEditMode={isEditMode} />}
        {activeTab === 'projects' && <ProjectsShowcase isEditMode={isEditMode} />}
        {activeTab === 'jax-stack' && <JaxStackSection />}
        {activeTab === 'curriculum' && <CurriculumShowcase />}
        {activeTab === 'media' && <MediaMatrix />}
        {activeTab === 'documentation' && <DocumentationHub />}
        {activeTab === 'phonetics' && <PhoneticsLab />}
      </main>

      {/* Admin Authorization Modal */}
      <AdminAuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        isAdmin={isAdmin}
        onLoginSuccess={login}
        onLogout={logout}
      />

      {/* Strangeworks Editorial Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
            <div>
              <div className="flex items-center space-x-2 font-serif font-bold text-zinc-950 text-base">
                <span>{PROFILE_DATA.name}</span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-600 font-mono text-xs">{PROFILE_DATA.title}</span>
              </div>
              <p className="text-xs text-zinc-500 mt-1 max-w-lg font-sans">
                Advancing JAX/Flax high-performance computing, StrangeWorks Save Earth &amp; Humanity Vision, and Google DeepMind open research foundations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={STRANGEWORKS_EARTH_VISION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-black text-white font-mono text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strange Works Open Lab ↗</span>
              </a>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-200 font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors"
              >
                <span>{PROFILE_DATA.email}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div>
              © {new Date().getFullYear()} {PROFILE_DATA.name} · StrangeWorks Research Architecture · Neon DB Enabled.
            </div>
            <div className="flex flex-wrap items-center space-x-4">
              <a
                href={PROFILE_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                GitHub
              </a>
              <a
                href={PROFILE_DATA.links.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                Kaggle
              </a>
              <a
                href={PROFILE_DATA.links.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                Hugging Face
              </a>
              <a
                href={PROFILE_DATA.links.renderJbac}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                Render App
              </a>
              <a
                href={PROFILE_DATA.links.bearBlog}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
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

export default function Home() {
  return (
    <AdminProvider>
      <HomeContent />
    </AdminProvider>
  );
}
