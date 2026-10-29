import React, { useState } from 'react';
import { Copy, Check, Code2, BookOpen } from 'lucide-react';

export const ResearchNotes: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sampleJaxSnippet = `import jax
import jax.numpy as jnp
from flax import linen as nn

class TransformerAttentionBlock(nn.Module):
    num_heads: int
    features: int

    @nn.compact
    def __call__(self, x):
        # Multi-Head Attention using JAX functional transforms
        attn = nn.SelfAttention(num_heads=self.num_heads)(x)
        x = x + attn
        x = nn.LayerNorm()(x)
        mlp = nn.Dense(features=self.features * 4)(x)
        mlp = nn.gelu(mlp)
        mlp = nn.Dense(features=self.features)(mlp)
        return nn.LayerNorm()(x + mlp)

# JIT-compile and vectorize across TPU pods
jit_step = jax.jit(TransformerAttentionBlock(num_heads=8, features=512))
print("JAX Kernel successfully initialized on device:", jax.devices()[0])`;

  const sampleQmlSnippet = `import cirq
import tensorflow_quantum as tfq
import sympy

# 1. Define parameterized quantum qubit register
qubits = cirq.GridQubit.rect(1, 4)
theta = sympy.Symbol('theta')

# 2. Build variational ansatz with parameterized rotation
circuit = cirq.Circuit(
    cirq.rx(theta)(qubits[0]),
    cirq.CNOT(qubits[0], qubits[1]),
    cirq.CNOT(qubits[1], qubits[2]),
    cirq.H(qubits[3])
)

print("Parameterized Quantum Circuit:\\n", circuit)`;

  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Technical Learning Notes</h2>
        <p className="text-sm text-slate-400 mt-1">
          Markdown-ready technical documentation, architecture breakdowns, and hardware-accelerated code fragments.
        </p>
      </div>

      {/* Note Card 1: JAX & Cloud TPUs */}
      <article className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div className="flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">
              Accelerating LLMs: Functional JAX, Flax & TPU Pod Execution
            </h3>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/50">
            JAX 101 · High-Performance ML
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Google DeepMind builds breakthroughs like AlphaFold 3, Gemini, and Gemma on the JAX ecosystem. Unlike eager execution paradigms, JAX uses pure functions combined with XLA (Accelerated Linear Algebra) compilation. Key primitives include:
        </p>

        <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
          <li><code className="text-cyan-300 font-mono">jax.jit</code>: Traces Python code into optimized XLA kernels, fusing memory access and compute operations.</li>
          <li><code className="text-cyan-300 font-mono">jax.grad</code>: Reverse-mode automatic differentiation supporting arbitrary order derivatives.</li>
          <li><code className="text-cyan-300 font-mono">jax.vmap</code>: Auto-vectorizing batch operations across vector registers without manual loop management.</li>
          <li><code className="text-cyan-300 font-mono">jax.pmap</code>: Single Program Multiple Data (SPMD) parallelism across distinct TPU cores.</li>
        </ul>

        {/* Code Snippet */}
        <div className="relative mt-4 rounded-xl overflow-hidden bg-space-950 border border-white/[0.08]">
          <div className="flex items-center justify-between px-4 py-2 bg-space-900 border-b border-white/[0.06] text-xs font-mono text-slate-400">
            <span>jax_flax_attention.py</span>
            <button
              onClick={() => copyToClipboard(sampleJaxSnippet, 'jax-code')}
              className="inline-flex items-center space-x-1 hover:text-cyan-300 transition-colors"
            >
              {copiedId === 'jax-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === 'jax-code' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
            <code>{sampleJaxSnippet}</code>
          </pre>
        </div>
      </article>

      {/* Note Card 2: Quantum AI & Hybrid TFQ */}
      <article className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">
              Hybrid Quantum-Classical Learning with Cirq and TFQ
            </h3>
          </div>
          <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-800/50">
            Quantum AI · NISQ Era
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Google Quantum AI&apos;s Cirq library powers circuit construction for noisy intermediate-scale quantum devices. TensorFlow Quantum (TFQ) allows hybrid architectures where parameterized quantum circuits act as differentiable neural network layers:
        </p>

        {/* Code Snippet */}
        <div className="relative mt-4 rounded-xl overflow-hidden bg-space-950 border border-white/[0.08]">
          <div className="flex items-center justify-between px-4 py-2 bg-space-900 border-b border-white/[0.06] text-xs font-mono text-slate-400">
            <span>quantum_circuit_ansatz.py</span>
            <button
              onClick={() => copyToClipboard(sampleQmlSnippet, 'qml-code')}
              className="inline-flex items-center space-x-1 hover:text-cyan-300 transition-colors"
            >
              {copiedId === 'qml-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === 'qml-code' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
            <code>{sampleQmlSnippet}</code>
          </pre>
        </div>
      </article>

      {/* Note Card 3: TIFR Preparation Strategy & Proof-Oriented Rigor */}
      <article className="glass-card rounded-2xl p-6 sm:p-8 space-y-3">
        <h3 className="text-base font-bold text-white">TIFR CS & LIDS Exam Preparation Blueprint</h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          The Tata Institute of Fundamental Research (TIFR) Graduate School (GS) entrance exam requires proof-over-speed conceptual mastery rather than rote computational tricks:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-xs font-semibold text-cyan-300 font-mono">Module 1 & C: Continuous Math / LIDS</h4>
            <p className="text-xs text-slate-400 mt-1">
              Focus on metric spaces (open/closed balls, Heine-Borel theorem), spectral theorem for real symmetric matrices, and convex optimization bounds.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-xs font-semibold text-purple-300 font-mono">Module 2 & B: Discrete Structures</h4>
            <p className="text-xs text-slate-400 mt-1">
              Structural induction, Turing undecidability reductions, asymptotic recurrence bounds, and Myhill-Nerode regular language equivalence proofs.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

