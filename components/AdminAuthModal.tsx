'use client';

import React, { useState } from 'react';
import { Lock, Unlock, Key, X, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  onLoginSuccess: (key: string) => void;
  onLogout: () => void;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  isAdmin,
  onLoginSuccess,
  onLogout,
}) => {
  const [keyInput, setKeyInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyInput.trim()) {
      setError('Please enter the Admin Key');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: keyInput.trim() }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        onLoginSuccess(keyInput.trim());
        onClose();
        setKeyInput('');
      } else {
        setError(data.message || 'Invalid Admin Key');
      }
    } catch {
      setError('Network error validating key');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden font-sans">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-100 bg-zinc-50/80">
          <div className="flex items-center space-x-2.5">
            <div className={`p-2 rounded-lg ${isAdmin ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-900 text-white'}`}>
              {isAdmin ? <ShieldCheck className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-zinc-900">
                {isAdmin ? 'Admin Session Active' : 'Admin Authorization'}
              </h3>
              <p className="text-xs text-zinc-500 font-mono">
                {isAdmin ? 'Logged in as Rajesh Karra' : 'Protected Author Access'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isAdmin ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1.5 font-mono">
                <div className="flex items-center space-x-2 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Admin Edit Mode Unlocked</span>
                </div>
                <p className="text-emerald-800 font-sans">
                  You are authorized as the website owner. You have full edit privileges on all research pillars, focus areas, telemetry cards, and projects. Edits persist directly to Neon Postgres.
                </p>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors font-mono"
                >
                  Continue Editing
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-mono"
                >
                  Lock &amp; Exit Admin
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Only <strong className="text-zinc-900 font-semibold">Rajesh Karra (Admin)</strong> is authorized to modify or add content. Public visitors cannot edit the portfolio.
              </p>

              {error && (
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono font-medium text-zinc-700 mb-1.5">
                  Admin Passkey
                </label>
                <div className="relative">
                  <Key className="w-4 h-4 absolute left-3 top-3 text-zinc-400" />
                  <input
                    type="password"
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                    placeholder="Enter admin secret key"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-zinc-900 font-mono placeholder:text-zinc-400"
                    autoFocus
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors font-mono"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-white hover:bg-black transition-colors font-mono disabled:opacity-50 flex items-center space-x-1.5"
                >
                  {loading ? (
                    <span>Verifying...</span>
                  ) : (
                    <>
                      <Unlock className="w-3.5 h-3.5" />
                      <span>Unlock Admin Mode</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

