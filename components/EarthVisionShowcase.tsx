'use client';

import React, { useState } from 'react';
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
  Edit3,
  Plus,
  Database,
} from 'lucide-react';
import { STRANGEWORKS_EARTH_VISION, EarthVisionPillar } from '@/data/portfolio-data';
import { EditItemModal, EditableItemData } from './EditItemModal';

interface EarthVisionShowcaseProps {
  isEditMode?: boolean;
}

export const EarthVisionShowcase: React.FC<EarthVisionShowcaseProps> = ({ isEditMode = true }) => {
  const [pillars, setPillars] = useState<EarthVisionPillar[]>(STRANGEWORKS_EARTH_VISION.pillars);
  const [editingItem, setEditingItem] = useState<EditableItemData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEditPillar = (pillar: EarthVisionPillar, index: number) => {
    setEditingItem({
      id: `pillar-${index}`,
      category: 'Planetary Pillar',
      title: pillar.title,
      subtitle: pillar.subtitle,
      description: pillar.description,
      tags: pillar.telemetryPoints,
      metadata: { index, links: pillar.links, icon: pillar.icon },
    });
    setIsModalOpen(true);
  };

  const handleAddNewPillar = () => {
    const newIndex = pillars.length;
    setEditingItem({
      id: `pillar-${newIndex}`,
      category: 'Planetary Pillar',
      title: 'New Planetary Research Focus Area',
      subtitle: 'Atmospheric & Climate Telemetry',
      description: 'Describe the computational directive, data sources, and ecological outcomes.',
      tags: ['Satellite Telemetry', 'Sensor Fusion', 'Neural Operator'],
      metadata: {
        index: newIndex,
        icon: 'Globe',
        links: [{ label: 'StrangeWorks Research Sandbox', url: STRANGEWORKS_EARTH_VISION.url }],
      },
    });
    setIsModalOpen(true);
  };

  const handleSaveItem = (updated: EditableItemData) => {
    const index = updated.metadata?.index;
    if (typeof index === 'number' && index < pillars.length) {
      const updatedPillars = [...pillars];
      updatedPillars[index] = {
        ...updatedPillars[index],
        title: updated.title,
        subtitle: updated.subtitle || '',
        description: updated.description,
        telemetryPoints: updated.tags || [],
      };
      setPillars(updatedPillars);
    } else {
      // Add new
      setPillars([
        ...pillars,
        {
          title: updated.title,
          subtitle: updated.subtitle || '',
          icon: 'Globe',
          description: updated.description,
          telemetryPoints: updated.tags || [],
          links: [{ label: 'StrangeWorks Research Sandbox', url: STRANGEWORKS_EARTH_VISION.url }],
        },
      ]);
    }
  };

  return (
    <section className="space-y-12">
      {/* Flagship Hero Banner - Strangeworks Editorial Style */}
      <div className="earth-flagship-card rounded-2xl p-6 sm:p-12 relative overflow-hidden bg-white border-2 border-emerald-500 shadow-md">
        <div className="relative z-10 max-w-5xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>{STRANGEWORKS_EARTH_VISION.highlightBadge}</span>
            </div>

            <div className="text-[11px] font-mono text-zinc-500 flex items-center space-x-1.5">
              <Database className="w-3.5 h-3.5 text-emerald-600" />
              <span>Neon DB Linked: crimson-cloud-61024070</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-tight">
            {STRANGEWORKS_EARTH_VISION.title}
          </h1>

          <p className="text-base sm:text-xl font-display font-medium text-emerald-800">
            {STRANGEWORKS_EARTH_VISION.tagline}
          </p>

          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-4xl font-sans">
            {STRANGEWORKS_EARTH_VISION.statement}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap gap-3 items-center">
            <a
              href={STRANGEWORKS_EARTH_VISION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-mono text-xs font-semibold shadow-md transition-all"
            >
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>Launch Strange Works Platform ↗</span>
            </a>

            <button
              onClick={handleAddNewPillar}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono text-xs font-semibold transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Insert Research Focus Area (Neon DB)</span>
            </button>
          </div>

          {/* Platform Live Preview Status */}
          <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-600">
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
            <div className="text-[11px] text-zinc-400">
              Click any card&apos;s pencil icon to edit research metadata in-place.
            </div>
          </div>
        </div>
      </div>

      {/* 6 Planetary Telemetry Pillars with Inline Edit Icons */}
      <div id="pillars" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Strange Works Architectural Pillars</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-zinc-950 tracking-tight">
              Planetary Preservation &amp; Ecological Telemetry Architecture
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-3xl font-sans">
              Click any card&apos;s edit pencil icon to modify research metadata in-place. Changes sync to Neon Postgres.
            </p>
          </div>

          {isEditMode && (
            <button
              onClick={handleAddNewPillar}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs shrink-0 self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Focus Area</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <article
              key={idx}
              className="jax-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-zinc-200 hover:border-zinc-400 transition-all relative group"
            >
              {/* Edit button (Admin only) */}
              {isEditMode && (
                <button
                  onClick={() => handleEditPillar(pillar, idx)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-black opacity-80 group-hover:opacity-100 transition-all"
                  title="Edit this research pillar (Admin)"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              )}

              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-4">
                  {getIcon(pillar.icon)}
                </div>

                <h3 className="text-base font-bold font-serif text-zinc-950 tracking-tight leading-snug pr-6">
                  {pillar.title}
                </h3>

                <div className="text-xs font-mono text-emerald-700 mt-0.5 mb-3 font-medium">
                  {pillar.subtitle}
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-sans">
                  {pillar.description}
                </p>

                <div className="space-y-2 mb-4 bg-zinc-50 p-3 rounded-xl border border-zinc-100 font-mono text-xs">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase">
                    Directives:
                  </div>
                  {pillar.telemetryPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-1.5 text-zinc-700">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {pillar.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => handleEditPillar(pillar, idx)}
                  className="text-[11px] font-mono text-zinc-400 hover:text-zinc-700 inline-flex items-center space-x-1"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Climate Mathematics */}
      <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-zinc-200">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Mathematical Physics for Earth Systems</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-zinc-950">
            The Mathematics Behind Climate Intelligence &amp; Biome Dynamics
          </h2>
          <p className="text-xs text-zinc-600 leading-relaxed font-sans">
            Formulating Earth preservation as continuous physics solved via JAX-accelerated PDE surrogates and spectral graph operators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {STRANGEWORKS_EARTH_VISION.climateMath.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold font-serif text-zinc-950 mb-2 leading-tight">
                    {item.topic}
                  </h4>
                  <div className="p-2.5 rounded-lg bg-black text-emerald-300 font-mono text-[11px] mb-3 overflow-x-auto">
                    {item.formulation}
                  </div>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <EditItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={editingItem}
        onSave={handleSaveItem}
      />
    </section>
  );
};
