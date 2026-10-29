'use client';

import React, { useState } from 'react';
import { ExternalLink, GitBranch, Terminal, Globe2, ShieldCheck, Plus, Edit3 } from 'lucide-react';
import { ACTIVE_PROJECTS, STRANGEWORKS_EARTH_VISION, ProjectRepo } from '@/data/portfolio-data';
import { EditItemModal, EditableItemData } from './EditItemModal';

export const ProjectsShowcase: React.FC = () => {
  const [projects, setProjects] = useState<ProjectRepo[]>(ACTIVE_PROJECTS);
  const [editingItem, setEditingItem] = useState<EditableItemData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const notebooks = [
    {
      title: 'Gemma 2 Inference using JAX and Flax (Kaggle)',
      platform: 'Kaggle Kernel',
      category: 'JAX / Gemma',
      url: 'https://www.kaggle.com/code/nilaychauhan/gemma-2-inference-using-jax-and-flax',
      badgeText: '[open on kaggle]',
      description: 'Zero-overhead inference pipeline for Gemma 2 weights on Cloud TPUs with XLA optimization and Flax Linen layers.'
    },
    {
      title: 'RecurrentGemma Inference with JAX (Google AI)',
      platform: 'Google Developers',
      category: 'DeepMind RecurrentGemma',
      url: 'https://ai.google.dev/gemma/docs/recurrentgemma/recurrentgemma_jax_inference',
      badgeText: '[docs & colab]',
      description: 'Linear attention RNN architecture implementing Griffin model for unlimited context processing.'
    },
    {
      title: 'Jraph Graph Neural Network Tutorial (Colab)',
      platform: 'Google Colab',
      category: 'Graph ML / DeepMind',
      url: 'https://github.com/google-deepmind/jraph',
      badgeText: '[open with colab]',
      description: 'End-to-end graph neural network training loop in pure JAX using jraph library on molecular datasets.'
    },
    {
      title: 'Quantum Circuits with Google Cirq (Colab)',
      platform: 'Google Colab',
      category: 'Quantum AI',
      url: 'https://github.com/quantumlib/Cirq',
      badgeText: '[open with colab]',
      description: 'Simulating noisy quantum gates and variational algorithms using Cirq and TensorFlow Quantum.'
    }
  ];

  const handleEditProject = (proj: ProjectRepo, index: number) => {
    setEditingItem({
      id: `project-${index}`,
      category: 'Project Development',
      title: proj.title,
      subtitle: proj.status,
      description: proj.description,
      tags: proj.tags,
      metadata: {
        index,
        repoUrl: proj.repoUrl,
        demoUrl: proj.demoUrl,
        isHighlighted: proj.isHighlighted,
        highlightBadge: proj.highlightBadge,
      },
    });
    setIsModalOpen(true);
  };

  const handleAddNewProject = () => {
    const newIndex = projects.length;
    setEditingItem({
      id: `project-${newIndex}`,
      category: 'Project Development',
      title: 'New Research Initiative',
      subtitle: 'Active',
      description: 'Describe the codebase architecture, models used, and experimental goals.',
      tags: ['JAX', 'OpenSource', 'Research'],
      metadata: {
        index: newIndex,
        repoUrl: 'https://github.com/r-karra',
      },
    });
    setIsModalOpen(true);
  };

  const handleSaveItem = (updated: EditableItemData) => {
    const index = updated.metadata?.index;
    if (typeof index === 'number' && index < projects.length) {
      const updatedList = [...projects];
      updatedList[index] = {
        ...updatedList[index],
        title: updated.title,
        description: updated.description,
        tags: updated.tags || [],
      };
      setProjects(updatedList);
    } else {
      setProjects([
        ...projects,
        {
          title: updated.title,
          description: updated.description,
          tags: updated.tags || [],
          status: 'Active',
          repoUrl: updated.metadata?.repoUrl || 'https://github.com/r-karra',
        },
      ]);
    }
  };

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wider mb-1">
            <Terminal className="w-3.5 h-3.5 text-black" />
            <span>Codebases, Deployments &amp; Research Assets</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950 tracking-tight">
            Active Developments, Flagship Projects &amp; Repositories
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-3xl font-sans">
            Interactive research project registry. Click any pencil icon to modify descriptions or tags in-place.
          </p>
        </div>

        <button
          onClick={handleAddNewProject}
          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-black hover:bg-zinc-800 text-white font-mono text-xs shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Project (Neon DB)</span>
        </button>
      </div>

      {/* Flagship Banner for StrangeWorks */}
      <div className="earth-flagship-card rounded-2xl p-6 sm:p-8 bg-white border-2 border-emerald-500 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>{STRANGEWORKS_EARTH_VISION.highlightBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 tracking-tight">
              {STRANGEWORKS_EARTH_VISION.title}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-display font-medium">
              {STRANGEWORKS_EARTH_VISION.tagline}
            </p>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">
              {STRANGEWORKS_EARTH_VISION.mission}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 w-full lg:w-auto">
            <a
              href={STRANGEWORKS_EARTH_VISION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-mono text-xs font-semibold shadow-md transition-all"
            >
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>Open Strange Works Platform ↗</span>
            </a>
            <div className="text-center text-[11px] font-mono text-emerald-800 font-semibold flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>strangeworks-six.vercel.app</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <article
            key={idx}
            className={`jax-card rounded-2xl p-6 flex flex-col justify-between bg-white border transition-all relative group ${
              proj.isHighlighted ? 'border-zinc-900 shadow-md' : 'border-zinc-200 hover:border-zinc-400'
            }`}
          >
            {/* Edit Icon */}
            <button
              onClick={() => handleEditProject(proj, idx)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-black opacity-80 group-hover:opacity-100 transition-all"
              title="Edit project metadata"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>

            <div>
              <div className="flex items-start justify-between gap-2 mb-2 pr-6">
                <h3 className="text-base font-serif font-bold text-zinc-950 tracking-tight leading-snug">
                  {proj.title}
                </h3>
              </div>

              <div className="mb-3">
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${
                    proj.status === 'Flagship Vision'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : proj.status === 'Active'
                      ? 'bg-zinc-100 text-zinc-800 border-zinc-200'
                      : proj.status === 'Prototype'
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'bg-zinc-50 text-zinc-600 border-zinc-200'
                  }`}
                >
                  {proj.status}
                </span>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-sans">
                {proj.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-50 text-zinc-600 border border-zinc-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                <div className="flex items-center space-x-3">
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-zinc-800 hover:text-black hover:underline"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>Repository ↗</span>
                    </a>
                  )}
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live ↗</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => handleEditProject(proj, idx)}
                  className="text-[11px] font-mono text-zinc-400 hover:text-zinc-700 inline-flex items-center space-x-1"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Notebooks & Executable Research Loops */}
      <div className="pt-6">
        <div className="mb-4">
          <h3 className="text-xl font-serif font-bold text-zinc-950 flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-black" />
            <span>Interactive Notebooks &amp; Executable Environments</span>
          </h3>
          <p className="text-xs text-zinc-600 mt-1 font-sans">
            Google Colab and Kaggle kernels for JAX benchmarks, GNNs, and quantum circuit simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notebooks.map((item, idx) => (
            <div
              key={idx}
              className="jax-card rounded-xl p-5 flex flex-col justify-between bg-white border border-zinc-200"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 font-semibold">
                    {item.category}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-semibold text-black hover:underline inline-flex items-center space-x-1"
                  >
                    <span>{item.badgeText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <h4 className="text-sm font-serif font-bold text-zinc-950 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Platform: {item.platform}</span>
                <span className="text-emerald-700 font-medium">● Verified Execution</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EditItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={editingItem}
        onSave={handleSaveItem}
      />
    </section>
  );
};
