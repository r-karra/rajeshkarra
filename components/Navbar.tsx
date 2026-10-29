'use client';

import React from 'react';
import { Sparkles, Terminal, BookOpen, Layers, Video } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolio-data';

export type TabKey = 'profile' | 'projects' | 'notes' | 'literature' | 'media';

interface NavbarProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'profile', label: 'Overview', icon: <Sparkles className="w-4 h-4" /> },
    { key: 'projects', label: 'Developments & Repos', icon: <Terminal className="w-4 h-4" /> },
    { key: 'notes', label: 'Technical Notes', icon: <Layers className="w-4 h-4" /> },
    { key: 'literature', label: 'Readings & Papers', icon: <BookOpen className="w-4 h-4" /> },
    { key: 'media', label: 'Lectures & Media', icon: <Video className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-space-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('profile')}>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-glow-cyan">
            <span className="font-mono font-bold text-white text-sm">RK</span>
          </div>
          <div>
            <div className="font-bold text-sm tracking-wide text-white flex items-center space-x-1.5">
              <span>{PROFILE_DATA.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[11px] text-slate-400 font-mono">rKarra.ai · Research Portfolio</div>
          </div>
        </div>

        {/* Tab Switcher */}
        <nav className="hidden md:flex items-center space-x-1 bg-space-900/90 p-1.5 rounded-xl border border-white/[0.06]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick External Anchor */}
        <div className="flex items-center space-x-2">
          <a
            href={PROFILE_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all font-mono"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Mobile Bar */}
      <div className="flex md:hidden overflow-x-auto px-4 py-2 space-x-2 border-t border-white/[0.04] bg-space-900/50">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`whitespace-nowrap px-3 py-1 text-xs rounded-md transition-colors ${
              activeTab === tab.key ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};

