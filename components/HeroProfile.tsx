'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Mail,
  Award,
  Target,
  Globe2,
  Cpu,
  Edit3,
  Database,
  ArrowRight,
} from 'lucide-react';
import { PROFILE_DATA, STRANGEWORKS_EARTH_VISION } from '@/data/portfolio-data';
import { SkillsGrid } from './SkillsGrid';
import { EditItemModal, EditableItemData } from './EditItemModal';

interface HeroProfileProps {
  onNavigateToVision?: () => void;
  isEditMode?: boolean;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({
  onNavigateToVision,
  isEditMode = false,
}) => {
  const [profile, setProfile] = useState(PROFILE_DATA);
  const [editingItem, setEditingItem] = useState<EditableItemData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProfile = () => {
    setEditingItem({
      id: 'profile-main',
      category: 'Profile Overview',
      title: profile.name,
      subtitle: profile.title,
      description: profile.bio,
      tags: [profile.location, 'JAX', 'DeepMind', 'Quantum'],
      metadata: { email: profile.email },
    });
    setIsModalOpen(true);
  };

  const handleSaveProfile = (updated: EditableItemData) => {
    setProfile({
      ...profile,
      name: updated.title,
      title: updated.subtitle || profile.title,
      bio: updated.description,
    });
  };

  return (
    <section className="space-y-10">
      {/* Editorial Profile Banner */}
      <div className="jax-card rounded-2xl p-6 sm:p-12 relative overflow-hidden bg-white border border-zinc-200 shadow-sm">
        {/* In-place edit button (Admin only) */}
        {isEditMode && (
          <button
            onClick={handleEditProfile}
            className="absolute top-6 right-6 p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-black transition-all flex items-center space-x-1.5 text-xs font-mono"
            title="Edit profile information (Admin)"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Edit Bio</span>
          </button>
        )}

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Google Research &amp; DeepMind Ecosystem Alignment · JAX Stack</span>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 flex items-center space-x-1">
              <Database className="w-3 h-3 text-emerald-600" />
              <span>Neon DB Active</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-zinc-950 tracking-tight">
            {profile.name}
          </h1>

          <p className="text-lg sm:text-2xl font-display font-medium text-zinc-800">
            {profile.title}
          </p>

          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans max-w-3xl">
            {profile.bio}
          </p>

          {/* Social Profiles Grid */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <a
              href={profile.links.strangeworks}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-xs font-mono font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>StrangeWorks (Save Earth)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 hover:border-black hover:text-black transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={profile.links.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 hover:border-black hover:text-black transition-colors"
            >
              <span>Kaggle</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={profile.links.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 hover:border-black hover:text-black transition-colors"
            >
              <span>Hugging Face</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={profile.links.googleDeveloper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 hover:border-black hover:text-black transition-colors"
            >
              <span>Google Developer</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={profile.links.bearBlog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 hover:border-black hover:text-black transition-colors"
            >
              <span>Bear Blog</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-300 text-xs font-mono font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Prominent Save Earth & Humanity Vision Highlight Card */}
      <div className="earth-flagship-card rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-white border-2 border-emerald-500 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Main Future Project · Save Earth &amp; Humanity Vision</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-zinc-950 tracking-tight">
              {STRANGEWORKS_EARTH_VISION.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
              {STRANGEWORKS_EARTH_VISION.tagline} — Dedicated to high-resolution climate intelligence, ecological sensor networks, and deploying hybrid TPU-quantum computing to safeguard Earth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
            <a
              href={STRANGEWORKS_EARTH_VISION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-mono font-semibold text-xs transition-colors shadow-xs"
            >
              <span>Open Strangeworks ↗</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {onNavigateToVision && (
              <button
                onClick={onNavigateToVision}
                className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 font-mono text-xs transition-colors"
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
        <div className="jax-card rounded-2xl p-6 bg-white border border-zinc-200 hover:border-zinc-400 transition-all">
          <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-serif font-bold text-zinc-950">Target Research Paths</h3>
          <p className="mt-2 text-xs text-zinc-600 leading-relaxed font-sans">
            Targeting doctoral &amp; Master&apos;s research at <strong>TIFR (Computer Science / LIDS)</strong> with emphasis on proof-oriented analysis, discrete mathematics, and continuous linear operator theory.
          </p>
        </div>

        <div className="jax-card rounded-2xl p-6 bg-white border border-zinc-200 hover:border-zinc-400 transition-all">
          <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-serif font-bold text-zinc-950">Qiskit &amp; Quantum AI</h3>
          <p className="mt-2 text-xs text-zinc-600 leading-relaxed font-sans">
            Advancing through the <strong>IBM Quantum Learning</strong> path, Qiskit Advocate Program, and NISQ-level quantum machine learning simulations utilizing Cirq and TensorFlow Quantum.
          </p>
        </div>

        <div className="jax-card rounded-2xl p-6 bg-white border border-zinc-200 hover:border-zinc-400 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
            <Globe2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-serif font-bold text-zinc-950">Planetary AI &amp; Climate</h3>
          <p className="mt-2 text-xs text-zinc-600 leading-relaxed font-sans">
            Developing high-resolution micro-climate telemetry, <strong>DeepMind GraphCast</strong> neural weather forecasting, and bioacoustic species recognition with the StrangeWorks Open Lab.
          </p>
        </div>
      </div>

      {/* Core Technical Capabilities & Frameworks Grid */}
      <div className="pt-2">
        <SkillsGrid />
      </div>

      <EditItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={editingItem}
        onSave={handleSaveProfile}
      />
    </section>
  );
};
