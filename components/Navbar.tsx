'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Globe2,
  Terminal,
  Cpu,
  GraduationCap,
  Video,
  FileText,
  Volume2,
  ExternalLink,
  ChevronDown,
  Edit3,
  Check,
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
  isEditMode?: boolean;
  setIsEditMode?: (mode: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isEditMode = false,
  setIsEditMode,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sections: {
    key: TabKey;
    label: string;
    sublabel: string;
    icon: React.ReactNode;
    badge?: string;
    isHighlight?: boolean;
  }[] = [
    {
      key: 'overview',
      label: 'Overview & Profile',
      sublabel: 'Research agenda, mathematical foundations, and bio',
      icon: <Sparkles className="w-4 h-4 text-zinc-700" />,
    },
    {
      key: 'vision',
      label: 'Save Earth Vision',
      sublabel: 'StrangeWorks // Open Lab Initiative & Planetary Telemetry',
      icon: <Globe2 className="w-4 h-4 text-emerald-600" />,
      badge: 'Flagship Vision',
      isHighlight: true,
    },
    {
      key: 'projects',
      label: 'Projects & Repositories',
      sublabel: 'StrangeWorks, Super Book, Hands-On LLMs, Gemma suite',
      icon: <Terminal className="w-4 h-4 text-zinc-700" />,
      badge: 'Active & Deployed',
    },
    {
      key: 'jax-stack',
      label: 'JAX Stack & DeepMind',
      sublabel: 'Functional Flax, TPU Pod scaling, Co-Scientist & uv testing',
      icon: <Cpu className="w-4 h-4 text-blue-600" />,
    },
    {
      key: 'curriculum',
      label: 'Syllabi & Research Pathways',
      sublabel: 'Generative AI 5-module syllabus & TIFR CS/LIDS blueprint',
      icon: <GraduationCap className="w-4 h-4 text-indigo-600" />,
    },
    {
      key: 'media',
      label: 'Video Matrix & Lectures',
      sublabel: '49+ academic lectures with inline embedded YouTube players',
      icon: <Video className="w-4 h-4 text-red-600" />,
      badge: 'Inline Player',
    },
    {
      key: 'documentation',
      label: 'Documentation & Links Hub',
      sublabel: 'Searchable repository of 420+ papers, docs, and tools',
      icon: <FileText className="w-4 h-4 text-teal-600" />,
      badge: '420+ References',
    },
    {
      key: 'phonetics',
      label: 'Speech & Phonetics Lab',
      sublabel: 'American connected speech, reductions & English with Yuliya',
      icon: <Volume2 className="w-4 h-4 text-amber-600" />,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeSectionObj = sections.find((s) => s.key === activeTab);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      {/* Top Editorial Bar */}
      <div className="border-b border-zinc-100 bg-zinc-50/70 px-4 py-1 text-[11px] font-mono text-zinc-500 hidden sm:flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span>StrangeWorks Research // Open Science Initiative</span>
          <span>·</span>
          <span>Location: Hyderabad, India [17.3850° N, 78.4867° E]</span>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="/api/neon/status"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-semibold flex items-center space-x-1.5 hover:underline"
            title="View Neon Cloud Services live health status"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Neon DB: Connected (Postgres 18)</span>
          </a>
          <span>·</span>
          <span className="text-zinc-600 font-medium">Interactive &amp; Editable</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div
          className="flex items-center space-x-3 cursor-pointer shrink-0"
          onClick={() => {
            setActiveTab('overview');
            setIsDropdownOpen(false);
          }}
        >
          <div className="w-9 h-9 rounded-md bg-black text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-xs">
            RK
          </div>
          <div>
            <div className="font-serif font-bold text-base tracking-tight text-zinc-950 flex items-center space-x-2">
              <span>{PROFILE_DATA.name}</span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 uppercase">
                Open Lab
              </span>
            </div>
            <div className="text-[11px] text-zinc-500 font-mono tracking-tight">
              AI Researcher · DeepMind &amp; Planetary Systems
            </div>
          </div>
        </div>

        {/* Center / Right: 3 Horizontal Lines Dropdown Menu Button */}
        <div className="flex items-center space-x-2.5">
          {/* Quick Active Section Pill */}
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-100/80 border border-zinc-200 text-xs font-mono text-zinc-800">
            <span className="text-zinc-400">Section:</span>
            <span className="font-bold text-zinc-900">{activeSectionObj?.label}</span>
          </div>

          {/* Edit Mode Toggle Button */}
          {setIsEditMode && (
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                isEditMode
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
              }`}
              title="Toggle interactive editing mode across the site"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {isEditMode ? 'Editing Enabled' : 'Edit Mode'}
              </span>
            </button>
          )}

          {/* Quick Link: Strange Works */}
          <a
            href={PROFILE_DATA.links.strangeworks}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Strange Works ↗</span>
          </a>

          {/* The 3-Horizontal Lines Dropdown Menu Trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold font-display tracking-wide transition-all border ${
                isDropdownOpen
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-zinc-900 border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50'
              }`}
              aria-label="Navigation menu"
            >
              {isDropdownOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
              <span className="font-mono text-xs uppercase tracking-wider">
                {isDropdownOpen ? 'Close' : 'Menu'}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu Modal */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white border border-zinc-200 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-2 border-b border-zinc-100 mb-1 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    Select Research Domain
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    8 Sections
                  </span>
                </div>

                <div className="space-y-1 max-h-[75vh] overflow-y-auto p-1">
                  {sections.map((section) => {
                    const isActive = activeTab === section.key;
                    return (
                      <button
                        key={section.key}
                        onClick={() => {
                          setActiveTab(section.key);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-start space-x-3 p-3 rounded-xl text-left transition-all ${
                          isActive
                            ? 'bg-zinc-100 border border-zinc-200 font-semibold'
                            : 'hover:bg-zinc-50 border border-transparent'
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-white shadow-xs text-zinc-950 border border-zinc-200'
                              : 'bg-zinc-100 text-zinc-700'
                          }`}
                        >
                          {section.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`text-xs font-bold leading-tight ${
                                isActive ? 'text-zinc-950' : 'text-zinc-800'
                              }`}
                            >
                              {section.label}
                            </span>
                            {section.badge && (
                              <span
                                className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-medium shrink-0 ${
                                  section.isHighlight
                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                    : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                                }`}
                              >
                                {section.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug line-clamp-1">
                            {section.sublabel}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer link in dropdown */}
                <div className="mt-2 pt-2 border-t border-zinc-100 px-3 py-1.5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <a
                    href={PROFILE_DATA.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black inline-flex items-center space-x-1"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={PROFILE_DATA.links.strangeworks}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-900 inline-flex items-center space-x-1 font-semibold"
                  >
                    <span>StrangeWorks.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
