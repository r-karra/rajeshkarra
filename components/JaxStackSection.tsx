'use client';

import React, { useState } from 'react';
import { Copy, Check, Code2, Cpu, Terminal, HelpCircle, Bot, FlaskConical } from 'lucide-react';
import { INTERACTIVE_QA_PROMPTS } from '@/data/portfolio-data';

export const JaxStackSection: React.FC = () => {
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

# JIT-compile and vectorize across TPU pods with XLA
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

  const uvScienceSnippet = `# Step 1: Ensure uv is installed
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"

# Step 2: Testing uniprot-database wrapper
cd ~/.gemini/config/plugins/science/skills/uniprot_database
uv run scripts/uniprot_tools.py count "taxonomy_id:9606"
# Expected Output: 205244 (human proteins)

# Step 3: Testing pubchem-database wrapper
cd ~/.gemini/config/plugins/science/skills/pubchem_database
uv run scripts/pubchem_api.py resolve --name "aspirin" --output result.json
# Expected Output: Writes CID 2244 identifiers to result.json`;

  return (
    <section className="space-y-10">
      <div>
        <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wider mb-1">
          <Cpu className="w-3.5 h-3.5 text-black" />
          <span>Google DeepMind Core Architecture</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-zinc-950 tracking-tight">
          The JAX Stack, TPU Pod Scaling &amp; DeepMind Science
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-3xl font-sans">
          Hardware-accelerated numerical computing, functional transformations (jit, grad, vmap, pmap), multi-agent science partners, and quantum simulators.
        </p>
      </div>

      {/* Note Card 1: JAX & Cloud TPUs */}
      <article className="jax-card rounded-2xl p-6 sm:p-8 space-y-4 bg-white border border-zinc-200">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4">
          <div className="flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-zinc-900" />
            <h3 className="text-lg font-serif font-bold text-zinc-950">
              Accelerating LLMs: Functional JAX, Flax &amp; Cloud TPU Pod Execution
            </h3>
          </div>
          <span className="text-xs font-mono font-semibold text-zinc-800 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200">
            JAX 101 · High-Performance ML
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
          Google DeepMind builds breakthroughs like AlphaFold 3, Gemini, and Gemma on the JAX ecosystem. Pure functions combined with XLA compilation enable seamless TPU pod scaling:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700 font-sans">
          <li className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
            <strong className="text-black font-mono">jax.jit:</strong> Compiles Python functions into fused XLA kernels for TPU/GPU execution.
          </li>
          <li className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
            <strong className="text-black font-mono">jax.grad:</strong> Reverse-mode automatic differentiation through arbitrary Python control flows.
          </li>
          <li className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
            <strong className="text-black font-mono">jax.vmap:</strong> Vectorizing functions across batch dimensions with zero code modifications.
          </li>
          <li className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
            <strong className="text-black font-mono">jax.pmap:</strong> Single-Program Multiple-Data (SPMD) parallel dispatch across TPU cores.
          </li>
        </ul>

        {/* Code Snippet */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-md">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-300">
            <span>TransformerAttentionBlock.jax</span>
            <button
              onClick={() => copyToClipboard(sampleJaxSnippet, 'jax')}
              className="inline-flex items-center space-x-1 text-zinc-400 hover:text-white transition-colors"
            >
              {copiedId === 'jax' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
            <code>{sampleJaxSnippet}</code>
          </pre>
        </div>
      </article>

      {/* Note Card 2: DeepMind Co-Scientist & Science Skills with uv */}
      <article className="jax-card rounded-2xl p-6 sm:p-8 space-y-4 bg-white border border-zinc-200">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4">
          <div className="flex items-center space-x-2">
            <FlaskConical className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-serif font-bold text-zinc-950">
              Google DeepMind Co-Scientist &amp; Science Skills Testing via uv
            </h3>
          </div>
          <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Automated Hypothesis Discovery
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
          <strong>Co-Scientist</strong> is DeepMind&apos;s multi-agent AI system designed to accelerate scientific discovery. Biological tools (AlphaFold DB, UniProt, PubChem, ChEMBL) are executed via standalone wrappers with the fast <code className="bg-zinc-100 text-black px-1.5 py-0.5 rounded font-mono text-xs">uv</code> runner.
        </p>

        {/* UV Runner Snippet */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-md">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-300">
            <span>science-skills-test.sh</span>
            <button
              onClick={() => copyToClipboard(uvScienceSnippet, 'uv')}
              className="inline-flex items-center space-x-1 text-zinc-400 hover:text-white transition-colors"
            >
              {copiedId === 'uv' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
            <code>{uvScienceSnippet}</code>
          </pre>
        </div>
      </article>

      {/* Note Card 3: Quantum Variational Circuits */}
      <article className="jax-card rounded-2xl p-6 sm:p-8 space-y-4 bg-white border border-zinc-200">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4">
          <div className="flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-serif font-bold text-zinc-950">
              Quantum Machine Learning: Parameterized Variational Ansatz (Cirq &amp; TFQ)
            </h3>
          </div>
          <span className="text-xs font-mono font-semibold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Hybrid Quantum-Classical
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
          Quantum Neural Networks (QNNs) employ Parameterized Quantum Circuits (PQCs) as trainable layers. Gradients are computed using the Parameter Shift Rule across quantum states.
        </p>

        {/* Code Snippet */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-md">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-300">
            <span>QuantumVariationalCircuit.py</span>
            <button
              onClick={() => copyToClipboard(sampleQmlSnippet, 'qml')}
              className="inline-flex items-center space-x-1 text-zinc-400 hover:text-white transition-colors"
            >
              {copiedId === 'qml' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
            <code>{sampleQmlSnippet}</code>
          </pre>
        </div>
      </article>

      {/* Interactive Q&A Prompts Section */}
      <div className="jax-card rounded-2xl p-6 sm:p-8 bg-white border border-zinc-200">
        <div className="flex items-center space-x-2 mb-2">
          <HelpCircle className="w-5 h-5 text-black" />
          <h3 className="text-lg font-serif font-bold text-zinc-950">
            Interactive Technical Q&amp;A Prompts
          </h3>
        </div>
        <p className="text-xs text-zinc-600 mb-6 font-sans">
          Fundamental conceptual inquiries on JAX pretraining, attention dynamics, and multi-agent systems extracted from research synthesis.
        </p>

        <div className="space-y-4">
          {INTERACTIVE_QA_PROMPTS.map((qa, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2"
            >
              <div className="text-xs font-bold font-serif text-zinc-950 flex items-start space-x-2">
                <span className="text-emerald-700 font-mono">Q{idx + 1}:</span>
                <span>{qa.question}</span>
              </div>
              <p className="text-xs text-zinc-700 pl-6 leading-relaxed font-sans">
                {qa.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
