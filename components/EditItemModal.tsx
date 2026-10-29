'use client';

import React, { useState } from 'react';
import { X, Check, Trash2, Database, Sparkles } from 'lucide-react';

export interface EditableItemData {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  metadata?: any;
}

interface EditItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: EditableItemData | null;
  onSave: (updatedItem: EditableItemData) => void;
}

export const EditItemModal: React.FC<EditItemModalProps> = ({
  isOpen,
  onClose,
  item,
  onSave,
}) => {
  if (!isOpen || !item) return null;

  const [title, setTitle] = useState(item.title);
  const [subtitle, setSubtitle] = useState(item.subtitle || '');
  const [description, setDescription] = useState(item.description);
  const [tagsString, setTagsString] = useState(item.tags?.join(', ') || '');
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusMessage('Syncing with Neon Postgres...');

    const updatedTags = tagsString
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const updatedItem: EditableItemData = {
      ...item,
      title,
      subtitle,
      description,
      tags: updatedTags,
    };

    try {
      // 1. Sync with Neon DB backend API with Admin Key authorization
      const adminKey = typeof window !== 'undefined' ? localStorage.getItem('neon_admin_token') : '';
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey || '',
        },
        body: JSON.stringify({
          id: updatedItem.id,
          category: updatedItem.category,
          title: updatedItem.title,
          subtitle: updatedItem.subtitle,
          description: updatedItem.description,
          metadata: { tags: updatedTags, ...item.metadata },
        }),
      });

      const data = await res.json();
      if (res.status === 401) {
        setStatusMessage('⚠️ Unauthorized: Admin Key required to persist to Neon DB.');
        setIsSaving(false);
        return;
      }
      if (data.success || data.connected) {
        setStatusMessage('✓ Saved to Neon Postgres!');
      } else {
        setStatusMessage('✓ Saved to local state!');
      }

      onSave(updatedItem);
      setTimeout(() => {
        setIsSaving(false);
        onClose();
      }, 400);
    } catch (err) {
      console.error('Save failed:', err);
      // Fallback local save
      onSave(updatedItem);
      setIsSaving(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-2xl max-w-xl w-full p-4 sm:p-6 space-y-4 sm:space-y-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-800">
              <Database className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-serif text-zinc-900">
                Edit Research Metadata
              </h3>
              <div className="text-[11px] font-mono text-zinc-500">
                Target: {item.category} · ID: {item.id}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-medium text-zinc-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200 focus:outline-hidden focus:border-zinc-900 font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-medium text-zinc-700 mb-1">
              Subtitle / Focus Area
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200 focus:outline-hidden focus:border-zinc-900 font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-medium text-zinc-700 mb-1">
              Description / Research Notes
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200 focus:outline-hidden focus:border-zinc-900 font-sans leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-medium text-zinc-700 mb-1">
              Tags / Keywords (comma separated)
            </label>
            <input
              type="text"
              value={tagsString}
              onChange={(e) => setTagsString(e.target.value)}
              placeholder="JAX, TPUs, PlanetaryAI..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200 focus:outline-hidden focus:border-zinc-900 font-mono text-zinc-700"
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-zinc-100">
            <span className="text-[11px] font-mono text-emerald-700 font-medium">
              {statusMessage || 'Live sync with Neon Postgres'}
            </span>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-mono text-zinc-600 hover:bg-zinc-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-mono font-semibold text-white bg-black hover:bg-zinc-800 rounded-xl transition-colors shadow-xs disabled:opacity-50"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

