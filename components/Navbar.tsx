'use client';

import React from 'react';
import {
  Sparkles,
  Globe2,
  Terminal,
  Cpu,
  GraduationCap,
  Video,
  FileText,
  Volume2,
  ExternalLink,
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolio-data';

export type TabKey =
  | 'overview'
  | 'vision'
  | 'projects'
  | 'jax-stack'
  | 'curriculum'
  | 'media'
  | 'documentation'
  | 'phonetics';

interface NavbarProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { key: TabKey; label: string; icon: React.ReactNode; isHighlight?: boolean }[] = [
    { key: 'overview', label: 'Overview', icon: <Sparkles className="w-3.5 h-3.5" /> },
    {
      key: 'vision',
      label: 'Save Earth Vision',
      icon: <Globe2 className="w-3.5 h-3.5 text-emerald-600" />,
      isHighlight: true,
    },
    { key: 'projects', label: 'Projects & Repos', icon: <Terminal className="w-3.5 h-3.5" /> },
    { key: 'jax-stack', label: 'JAX & DeepMind', icon: <Cpu className="w-3.5 h-3.5" /> },
    { key: 'curriculum', label: 'Syllabi & Pathways', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { key: 'media', label: 'Video Lectures', icon: <Video className="w-3.5 h-3.5" /> },
    { key: 'documentation', label: 'Docs & Links (400+)', icon: <FileText className="w-3.5 h-3.5" /> },
    { key: 'phonetics', label: 'Phonetics & Fluency', icon: <Volume2 className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand identity */}
        <div
          className="flex items-center space-x-3 cursor-pointer shrink-0"
          onClick={() => setActiveTab('overview')}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm">
            <span className="font-mono font-bold text-white text-sm">RK</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm tracking-tight text-slate-900 flex items-center space-x-2">
              <span>{PROFILE_DATA.name}</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                JAX / HPC
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              rKarra.ai · Google DeepMind & Earth Vision
            </div>
          </div>
        </div>

        {/* Tab Switcher - Desktop */}
        <nav className="hidden xl:flex items-center space-x-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs rounded-lg transition-all ${
                  isActive
                    ? tab.isHighlight
                      ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                      : 'bg-white text-blue-700 font-semibold shadow-sm border border-slate-200/80'
                    : tab.isHighlight
                    ? 'text-emerald-700 hover:bg-emerald-50 font-medium'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.isHighlight && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Anchor: StrangeWorks Highlight + GitHub */}
        <div className="flex items-center space-x-2 shrink-0">
          <a
            href={PROFILE_DATA.links.strangeworks}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Strange Works ↗</span>
          </a>
          <a
            href={PROFILE_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all font-mono inline-flex items-center space-x-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Bar */}
      <div className="flex xl:hidden overflow-x-auto px-4 py-2 space-x-2 border-t border-slate-200 bg-slate-50/90 no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap flex items-center space-x-1.5 px-3 py-1 text-xs rounded-lg transition-colors ${
                isActive
                  ? tab.isHighlight
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'bg-blue-600 text-white font-semibold'
                  : tab.isHighlight
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
