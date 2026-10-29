'use client';

import React, { useState } from 'react';
import { ExternalLink, Play, Clock, Filter, X, Film, CheckCircle2 } from 'lucide-react';
import { MEDIA_LECTURES, VideoEntry } from '@/data/portfolio-data';

export const MediaMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<VideoEntry | null>(null);

  const categories = [
    'All',
    'Deep Learning & JAX',
    'Save Earth & Climate AI',
    'Quantum AI',
    'Mathematics & CS',
    'Speech & Phonetics',
    'Systems & Robotics',
  ];

  const filteredMedia =
    selectedCategory === 'All'
      ? MEDIA_LECTURES
      : MEDIA_LECTURES.filter((m) => m.category === selectedCategory);

  const getEmbedUrl = (video: VideoEntry) => {
    if (!video.videoId) return null;
    if (video.isPlaylist) {
      return `https://www.youtube-nocookie.com/embed/videoseries?list=${video.videoId}`;
    }
    return `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1`;
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wider mb-1">
            <Film className="w-3.5 h-3.5 text-black" />
            <span>Interactive Media, Lectures &amp; Video Embeddings</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950 tracking-tight">
            Academic Video Matrix &amp; Lecture Library
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-2xl font-sans">
            Watch lectures directly with embedded YouTube players covering JAX, Karpathy deep dives, MIT OCW, Quantum algorithms, and Save Earth biodiversity research.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 items-center bg-zinc-100 p-1.5 rounded-xl border border-zinc-200">
          <Filter className="w-3.5 h-3.5 text-zinc-500 ml-1.5 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-2.5 py-1 rounded-lg transition-all font-mono ${
                selectedCategory === cat
                  ? 'bg-black text-white shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-black hover:bg-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Active Video Player Modal / Inline Embed */}
      {activeVideo && (
        <div className="jax-card rounded-2xl p-6 bg-white border-2 border-blue-500 shadow-jax-hover space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Now Playing: {activeVideo.title}
              </h3>
            </div>
            <button
              onClick={() => setActiveVideo(null)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              title="Close player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-md">
            {getEmbedUrl(activeVideo) ? (
              <iframe
                src={getEmbedUrl(activeVideo)!}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white space-y-3">
                <p className="text-sm">Direct YouTube channel or playlist link</p>
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-red-600 text-white font-semibold text-xs hover:bg-red-700 transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 pt-1">
            <span className="font-mono">Category: {activeVideo.category}</span>
            <a
              href={activeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center space-x-1 font-mono"
            >
              <span>Watch full page on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* 2-Column Responsive Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMedia.map((video, idx) => {
          const isSelected = activeVideo?.url === video.url;
          return (
            <article
              key={idx}
              className={`jax-card rounded-2xl p-5 flex flex-col justify-between bg-white border transition-all ${
                isSelected
                  ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                  : 'border-slate-200 hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${
                      video.category === 'Save Earth & Climate AI'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : video.category === 'Quantum AI'
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : video.category === 'Speech & Phonetics'
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {video.category}
                  </span>
                  {video.isPlaylist && (
                    <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      Playlist
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{video.channelOrSeries}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                {video.videoId ? (
                  <button
                    onClick={() => {
                      setActiveVideo(video);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                    <span>Watch Inline</span>
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">External Channel</span>
                )}

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-mono text-slate-600 hover:text-blue-600"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
