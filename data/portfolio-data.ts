// portfolio-data.ts: Master dataset for Rajesh Karra Research Portfolio
// Highlighting StrangeWorks // Open Lab Initiative on Save Earth & Humanity Vision,
// JAX-inspired Light Mode Architecture, DeepMind Foundations, and Curricula.

export interface ProfileData {
  name: string;
  title: string;
  focus: string;
  bio: string;
  location: string;
  email: string;
  links: {
    strangeworks: string;
    github: string;
    kaggle: string;
    huggingface: string;
    medium: string;
    googleDeveloper: string;
    bearBlog: string;
    renderJbac: string;
    renderJbac2: string;
    pythonAnywhere: string;
  };
}

export interface EarthVisionPillar {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  telemetryPoints: string[];
  links: { label: string; url: string }[];
}

export interface StrangeWorksVision {
  title: string;
  highlightBadge: string;
  url: string;
  tagline: string;
  mission: string;
  statement: string;
  pillars: EarthVisionPillar[];
  climateMath: {
    topic: string;
    formulation: string;
    description: string;
  }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface ProjectRepo {
  title: string;
  description: string;
  repoUrl?: string;
  demoUrl?: string;
  tags: string[];
  status: 'Flagship Vision' | 'Active' | 'Prototype' | 'Research' | 'Deployed';
  isHighlighted?: boolean;
  highlightBadge?: string;
}

export interface VideoEntry {
  title: string;
  channelOrSeries: string;
  url: string;
  videoId?: string | null;
  isPlaylist?: boolean;
  timestamp?: string;
  category: 'Deep Learning & JAX' | 'Quantum AI' | 'Mathematics & CS' | 'Save Earth & Climate AI' | 'Speech & Phonetics' | 'Systems & Robotics';
  description?: string;
}

export interface CuratedLink {
  title: string;
  url: string;
  category: string;
  badge: string;
}

export const PROFILE_DATA: ProfileData = {
  name: 'Rajesh Karra',
  title: 'AI Researcher & High-Performance Computing Engineer',
  focus: 'JAX Ecosystem · Large Language Models · Quantum AI · Save Earth & Humanity Vision',
  bio: 'Advancing research in scalable LLM pretraining with JAX/Flax, Quantum Machine Learning algorithms, and planetary-scale telemetry for Earth preservation. Actively leading open-science explorations through StrangeWorks, aligning with Google DeepMind initiatives, and preparing for advanced doctoral research (TIFR CS/LIDS).',
  location: 'Hyderabad, India',
  email: 'r.karra.research@gmail.com',
  links: {
    strangeworks: 'https://strangeworks-six.vercel.app/',
    github: 'https://github.com/r-karra',
    kaggle: 'https://www.kaggle.com/rajeshkumarkarra',
    huggingface: 'https://huggingface.co/r-karra',
    medium: 'https://medium.com/@rajeshkarra.ai',
    googleDeveloper: 'https://developers.google.com/profile/u/rajesh_karra',
    bearBlog: 'https://rkarra.bearblog.dev/',
    renderJbac: 'https://jbac.onrender.com/',
    renderJbac2: 'https://jbac-llzt.onrender.com/',
    pythonAnywhere: 'https://www.pythonanywhere.com/user/karra7/',
  },
};

export const STRANGEWORKS_EARTH_VISION: StrangeWorksVision = {
  title: 'Strange Works // Open Lab Initiative',
  highlightBadge: '🌱 Flagship Future Vision · Save Earth & Humanity',
  url: 'https://strangeworks-six.vercel.app/',
  tagline: 'Open AI Research Laboratory for Planetary Telemetry, Climate Intelligence & Ecological Preservation',
  mission: 'To construct transparent, open-source foundational intelligence technologies that safeguard Earth, monitor fragile biomes, and deploy hybrid TPU-quantum computing systems for climate equilibrium.',
  statement: 'Human civilization faces non-linear planetary tipping points. Strange Works operates as an open science lab combining high-resolution environmental sensor networks, neural weather forecasting, and spectral mathematics to protect biodiversity, optimize clean energy grids, and preserve our living biosphere for future generations.',
  pillars: [
    {
      title: 'High-Resolution Micro-Climate Telemetry',
      subtitle: 'Alpine Shifts, Biome Borders & Sensor Fusion',
      icon: 'Globe',
      description: 'Continuous ingest of ecological telemetry tracking micro-climate variations, permafrost thaw indices, alpine tree-line migrations, and animal wildlife vectors across fragile ecosystems.',
      telemetryPoints: [
        'Multi-spectral satellite telemetry & IoT ground station fusion',
        'Sub-kilometer temperature anomaly prediction using Fourier Neural Operators (FNOs)',
        'Ecosystem resilience indicators & drought early warning triggers'
      ],
      links: [
        { label: 'Explore Lab Telemetry Matrix ↗', url: 'https://strangeworks-six.vercel.app/' },
        { label: 'Geospatial Reasoning Demo', url: 'https://www.youtube.com/watch?v=kpeI9dbkWho' }
      ]
    },
    {
      title: 'Planetary Digital Twins & Neural Weather',
      subtitle: 'GraphCast, WeatherBench 2 & Atmospheric Dynamics',
      icon: 'CloudRain',
      description: 'Leveraging Google DeepMind GraphCast and WeatherBench 2 frameworks to build fast, autoregressive 10-day global weather forecasting models running on Cloud TPUs with 99.7% lower energy consumption than numerical weather prediction.',
      telemetryPoints: [
        'Graph Neural Networks (GNNs) on icosahedral spatial meshes',
        'Severe cyclone and extreme atmospheric river trajectory prediction',
        'Long-horizon climate variance simulation under 1.5°C and 2.0°C warming trajectories'
      ],
      links: [
        { label: 'WeatherBench 2 Benchmark', url: 'https://github.com/google-research/weatherbench2' },
        { label: 'Mapping Web of Life Lecture', url: 'https://www.youtube.com/watch?v=9xR7858hEYM' }
      ]
    },
    {
      title: 'Bioacoustics for Biodiversity Conservation',
      subtitle: 'Listening to the Living Biosphere',
      icon: 'Trees',
      description: 'Autonomous ambient acoustic sensor arrays running low-power Gemma and audio neural representations to detect endangered avian, amphibian, and marine species populations in real-time.',
      telemetryPoints: [
        'Contrastive audio-spectrogram neural representations for bio-auditing',
        'Continuous poaching, illegal deforestation, and chainsaw acoustic fingerprinting',
        'Open-source biodiversity callsets contributed to global scientific repositories'
      ],
      links: [
        { label: 'Google AI for Biodiversity', url: 'https://www.youtube.com/watch?v=9xR7858hEYM' },
        { label: 'Earth Biogenome Project', url: 'https://www.youtube.com/watch?v=7WfnTwIM95g' }
      ]
    },
    {
      title: 'Smart Energy Grids & Precision Agriculture',
      subtitle: 'Mathematical Optimization for Resource Stewardship',
      icon: 'SunMedium',
      description: 'Solving large-scale mixed-integer convex optimization problems to dynamically match intermittent solar/wind supply with industrial load, and applying hyper-local soil moisture models for zero-waste regenerative farming.',
      telemetryPoints: [
        'Decentralized grid frequency stabilization via reinforcement learning agents',
        'Satellite radar (SAR) soil saturation modeling for drought resilience',
        'Zero-emission compute scheduling aligning TPU batch workloads with green energy surpluses'
      ],
      links: [
        { label: 'Strange Works Research Sandbox', url: 'https://strangeworks-six.vercel.app/' },
        { label: 'Google Cloud for Researchers', url: 'https://cloud.google.com/edu/researchers?e=48754805' }
      ]
    },
    {
      title: 'Hybrid TPU & Quantum Node Architecture',
      subtitle: 'Next-Generation Hardware Compilers & Multi-Agent Simulators',
      icon: 'Cpu',
      description: 'Designing distributed consensus layers and compilers that partition planetary-scale simulation graphs across Google Cloud TPU pods and quantum coprocessors (Cirq / AlphaQubit).',
      telemetryPoints: [
        'XLA-compiled distributed linear systems for atmospheric PDE solvers',
        'Quantum variational algorithms (VQE) for molecular nitrogen-fixation catalysis modeling',
        'Open-source benchmarking suite for fault-tolerant quantum error correction'
      ],
      links: [
        { label: 'StrangeWorks Lab Architecture', url: 'https://strangeworks-six.vercel.app/' },
        { label: 'Building Production AI on Cloud TPUs with JAX', url: 'https://cloud.google.com/blog/products/compute/building-production-ai-on-google-cloud-tpus-with-jax' }
      ]
    },
    {
      title: 'Open Science Fellowship & Shared Data Assets',
      subtitle: 'Democratizing Planetary Technology for Every Student & Researcher',
      icon: 'Users',
      description: 'Publishing free, verified datasets, model weights, and browser-accessible simulation notebooks so students and independent scientists across the Global South can contribute directly to planetary preservation.',
      telemetryPoints: [
        'Direct Colab and Kaggle sandbox pipelines with pre-loaded environmental telemetry',
        'Peer-reviewed open research dispatches with transparent reproduction artifacts',
        'Mentorship tracks for emerging researchers in computational mathematics and climate AI'
      ],
      links: [
        { label: 'Join Open Lab Initiative ↗', url: 'https://strangeworks-six.vercel.app/' },
        { label: 'Google DeepMind AI Foundations', url: 'https://docs.google.com/document/d/1Z4yWkwZNKhYnySzHCaOmoHMIXlcUncebolIfSY0Br5o/edit' }
      ]
    }
  ],
  climateMath: [
    {
      topic: 'Navier-Stokes Partial Differential Equations on the Sphere',
      formulation: '∂u/∂t + (u · ∇)u = -(1/ρ)∇p + ν∇²u + F_coriolis + F_buoyancy',
      description: 'Governs mass, momentum, and heat transport in the planetary atmospheric boundary layer. Solved via spherical harmonic transform grids and neural operator approximations.'
    },
    {
      topic: 'Radiative Transfer Energy Balance Model',
      formulation: 'C_p (dT_s/dt) = (1 - α) S_0 / 4 - ε σ T_s⁴ + ΔF_ghg',
      description: 'Quantifies equilibrium planetary surface temperature T_s under varying albedo α, solar irradiance S_0, and greenhouse gas radiative forcing ΔF_ghg.'
    },
    {
      topic: 'Graph Neural Operator Spectral Laplacians for Biome Graphs',
      formulation: 'L = D - A, \quad h_i^{(k+1)} = σ\left( W_k h_i^{(k)} + \sum_{j \in N(i)} α_{ij} Θ_k h_j^{(k)} \right)',
      description: 'Propagates non-local climate signals across irregular geospatial mesh nodes to forecast localized micro-climate degradation.'
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'High-Performance Computing & JAX',
    description: 'Hardware-accelerated numerical computing, autodiff, and TPU scaling frameworks.',
    skills: ['JAX', 'Flax', 'Optax', 'Orbax', 'Chex', 'Jraph (GNNs)', 'RLax (RL)', 'Cloud TPUs v4/v5e', 'XLA Compilation'],
  },
  {
    category: 'LLM Engineering & Architectures',
    description: 'Modern Transformer foundations, fine-tuning mechanisms, and efficient inference.',
    skills: ['Gemma 2 / Gemma 4', 'RecurrentGemma', 'Gemma.cpp', 'Keras 3 Multi-Backend', 'LoRA / PEFT', 'RLHF / PPO', 'Attention Mechanics', 'RoPE & GeGLU'],
  },
  {
    category: 'Save Earth & Climate Intelligence',
    description: 'Planetary telemetry, environmental modeling, bioacoustics, and renewable grid optimization.',
    skills: ['StrangeWorks Open Lab', 'GraphCast', 'WeatherBench 2', 'Bioacoustic Neural Embeddings', 'Fourier Neural Operators', 'Geospatial Reasoning', 'IoT Telemetry Ingest'],
  },
  {
    category: 'Quantum Computing & QML',
    description: 'NISQ simulation, quantum circuit algorithms, and hybrid classical-quantum networks.',
    skills: ['Google Cirq', 'TensorFlow Quantum (TFQ)', 'IBM Qiskit v2.X', 'PennyLane', 'OpenFermion', 'Quantum Error Correction (AlphaQubit)', 'VQE & QCNNs'],
  },
  {
    category: 'Foundational Mathematics & Proof Theory',
    description: 'Proof-oriented mathematics, rigorous continuous analysis, and discrete computation.',
    skills: ['Linear Algebra (Spectral Theorem)', 'Real Analysis', 'Discrete Mathematics', 'Lean 4 Theorem Prover', 'Differential Equations', 'Convex Optimization'],
  },
  {
    category: 'Scientific AI & DeepMind Platforms',
    description: 'Google Research and DeepMind platforms for autonomous discovery.',
    skills: ['Co-Scientist (Multi-Agent Partner)', 'AlphaFold 3', 'PubChem API', 'UniProt Tools', 'Foldseek', 'ChEMBL', 'Science Skills uv Runner'],
  },
];

export const ACTIVE_PROJECTS: ProjectRepo[] = [
  {
    title: 'Strange Works // Open Lab Initiative: Earth & Humanity Preservation',
    description: 'Flagship open AI research laboratory and planetary intelligence network. Integrates high-resolution ecological telemetry, GraphCast-based neural climate simulation, precision agriculture, and hybrid TPU-quantum nodes to safeguard Earth and human flourishing.',
    repoUrl: 'https://github.com/r-karra',
    demoUrl: 'https://strangeworks-six.vercel.app/',
    tags: ['Save Earth & Humanity', 'Climate AI', 'StrangeWorks', 'JAX', 'Cloud TPUs', 'Open Science'],
    status: 'Flagship Vision',
    isHighlighted: true,
    highlightBadge: '🌱 Flagship Future Vision · Planetary Preservation',
  },
  {
    title: 'Super Book / Divine Connect Co-Pilot',
    description: 'A soul-centric, multi-agent AI partner engineered around the Google Research and DeepMind ecosystem. Features a Cross-Device Triad (Wearable, Edge Hub, TPU Cloud Core) powered by Gemini 3 Flash and Antigravity for student stress reduction and ethical grounding.',
    repoUrl: 'https://github.com/r-karra/super-book',
    demoUrl: 'https://docs.google.com/document/u/0/d/1i8VgsroBTO5eSJEciRtJ5Aak1pSLlY3oMCpa-9eSk4Q/edit',
    tags: ['Cross-Device Triad', 'Gemini 3 Flash', 'Antigravity', 'Soul-Centric Tech', 'Multi-Agent'],
    status: 'Prototype',
    isHighlighted: true,
    highlightBadge: 'Technology for a Soul-Centric Mankind',
  },
  {
    title: 'Hands-On Large Language Models with JAX & PyTorch',
    description: 'End-to-end repository exploring modern Transformer building blocks, multi-head scaled dot-product attention, RoPE positional encodings, parameter-efficient fine-tuning (LoRA), and JAX pretraining pipelines mirroring Rasbt LLMs-from-scratch.',
    repoUrl: 'https://github.com/r-karra/Hands-On-Large-Language-Models',
    demoUrl: 'https://elibrary-dev.nusamandiri.ac.id/assets/fileebook/250153.pdf',
    tags: ['LLMs', 'Transformers', 'JAX', 'Attention Mechanics', 'Rasbt', 'Fine-Tuning'],
    status: 'Active',
  },
  {
    title: 'Gemma 2, Gemma 4 & RecurrentGemma JAX Inference Suite',
    description: 'Benchmarking and inference implementations for Google DeepMind open models (Gemma 2, Gemma 4, RecurrentGemma) using pure JAX and Flax linen layers with XLA hardware compilation on Cloud TPUs and Gemma.cpp.',
    repoUrl: 'https://github.com/google-deepmind/gemma',
    demoUrl: 'https://ai.google.dev/gemma/docs/recurrentgemma/recurrentgemma_jax_inference',
    tags: ['Gemma', 'RecurrentGemma', 'Flax', 'Google DeepMind', 'JAX Inference'],
    status: 'Active',
  },
  {
    title: 'DeepMind Science Skills Wrapper & Testing Suite',
    description: 'Automation and testing testbed for DeepMind Science Skills (AlphaFold DB, PubChem, UniProt, Foldseek, ChEMBL) utilizing the uv package manager and standalone Python wrappers.',
    repoUrl: 'https://github.com/google-deepmind/science-skills/tree/main/skills',
    demoUrl: 'https://ai.google/science/',
    tags: ['DeepMind Science', 'AlphaFold 3', 'PubChem', 'UniProt', 'uv CLI'],
    status: 'Active',
  },
  {
    title: 'JBAC Cloud Production Systems (Render.com & PythonAnywhere)',
    description: 'Live deployed cloud instances and web endpoints powering educational and analytical applications deployed on Render.com and PythonAnywhere.',
    repoUrl: 'https://github.com/r-karra/jbac.in',
    demoUrl: 'https://jbac.onrender.com/',
    tags: ['Production Deployment', 'Render.com', 'PythonAnywhere', 'Web Architecture'],
    status: 'Deployed',
  },
  {
    title: 'Quantum Variational Algorithms & Qiskit Learning Path',
    description: 'Quantum circuits constructed with Google Cirq, TensorFlow Quantum, and IBM Qiskit v2.X. Focuses on Variational Quantum Eigensolvers (VQE), Quantum CNNs, and AlphaQubit error mitigation.',
    repoUrl: 'https://github.com/quantumlib',
    demoUrl: 'https://cloud.ibm.com/quantum',
    tags: ['Quantum AI', 'Cirq', 'Qiskit', 'TFQ', 'AlphaQubit', 'VQE'],
    status: 'Research',
  },
];

export const CURRICULUM_MODULES = [
  {
    moduleNumber: 'Module I',
    title: 'Foundational Programming for AI',
    description: 'Core functional programming, algorithmic thinking, and modern development environments.',
    topics: [
      'Python 3 fundamentals: functions, generators, memory models, and functional constructs',
      'Google Colab and Cloud Shell workflows with high-performance virtual environments',
      'Data Structures & Algorithms in Python: array buffers, hash maps, heaps, and tree traversals',
      'Algorithmic complexity analysis (Big-O notation, space-time trade-offs)'
    ],
    resources: [
      { name: 'Python Tutor Visualizer', url: 'https://pythontutor.com/index.html' },
      { name: 'Learn Algorithms in Python (FreeCodeCamp)', url: 'https://www.freecodecamp.org/news/learn-algorithms-and-data-structures-in-python/' },
      { name: 'Boot.dev DSA Track', url: 'https://www.boot.dev/lessons/b6e716d2-df64-487e-aa7b-d768e8a2c8fc' }
    ]
  },
  {
    moduleNumber: 'Module II',
    title: 'Intermediate Python & Scientific Data Structures',
    description: 'Numerical computing, matrix mechanics, vectorized operations, and spectral representations.',
    topics: [
      'NumPy, SciPy, and JAX arrays: strides, broadcasting, and memory alignment',
      'Vector calculus and automatic differentiation principles (forward vs reverse mode autodiff)',
      'Linear Algebra fundamentals: eigenvalues, eigenvectors, and Spectral Decomposition',
      'Data processing with Pandas and BigQuery datasets for scientific telemetry'
    ],
    resources: [
      { name: 'Dive into Deep Learning (D2L.ai)', url: 'https://d2l.ai/index.html' },
      { name: 'Mathematics for Machine Learning (DeepLearning.AI)', url: 'https://github.com/greyhatguy007/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-Coursera' },
      { name: 'JAX Stack Documentation', url: 'https://docs.jaxstack.ai/en/latest/index.html#' }
    ]
  },
  {
    moduleNumber: 'Module III',
    title: 'Natural Language Processing & Transformer Fundamentals',
    description: 'Tokenization, sequence modeling, attention mechanisms, and linguistic foundations.',
    topics: [
      'Byte-Pair Encoding (BPE), SentencePiece, and vocab generation algorithms',
      'Scaled Dot-Product Attention: Query, Key, Value mechanics and dimensional scaling',
      'Multi-Head Self-Attention, Causal masking, and KV-cache for high-throughput inference',
      'Positional encodings: Sinusoidal, Rotary Position Embedding (RoPE), and ALiBi'
    ],
    resources: [
      { name: 'How Transformer LLMs Work (DeepLearning.AI)', url: 'https://www.deeplearning.ai/courses/how-transformer-llms-work' },
      { name: 'Attention in Transformers (DeepLearning.AI)', url: 'https://www.deeplearning.ai/courses/attention-in-transformers-concepts-and-code-in-pytorch' },
      { name: 'The Illustrated Transformer (Jay Alammar)', url: 'https://jalammar.github.io/illustrated-transformer/' }
    ]
  },
  {
    moduleNumber: 'Module IV',
    title: 'Generative AI Architectures & JAX Pretraining',
    description: 'Modern decoder-only LLMs, JAX/Flax implementation, and TPU pod acceleration.',
    topics: [
      'Building an end-to-end GPT/LLM from scratch with Flax Linen and JAX jit/vmap/pmap',
      'Parameter-Efficient Fine-Tuning: LoRA, QLoRA, and Prefix Tuning math',
      'Gemma 2, Gemma 4, and RecurrentGemma inference and memory optimization',
      'XLA compilation, sharded TPU tensors, and distributed data parallelism (DDP)'
    ],
    resources: [
      { name: 'Build and Train an LLM with JAX (DeepLearning.AI)', url: 'https://www.deeplearning.ai/courses/build-and-train-an-llm-with-jax' },
      { name: 'Gemma 4 Overview (Google AI for Developers)', url: 'https://ai.google.dev/gemma/docs/core' },
      { name: 'Gemma 2 Inference with JAX and Flax (Kaggle)', url: 'https://www.kaggle.com/code/nilaychauhan/gemma-2-inference-using-jax-and-flax' }
    ]
  },
  {
    moduleNumber: 'Module V',
    title: 'Autonomous Agentic Ecosystems & Scientific AI',
    description: 'Multi-agent consensus, function calling, Co-Scientist workflows, and planetary tools.',
    topics: [
      'Agent architectures: ReAct loops, planning mechanisms, and reflection strategies',
      'Google DeepMind Co-Scientist: Multi-agent AI partners to generate and validate scientific hypotheses',
      'Tool use, sandboxing, and execution environments with uv package manager',
      'Deploying reliable agent pipelines with quantum cryptographic safeguards and audit trails'
    ],
    resources: [
      { name: 'Co-Scientist: Multi-Agent AI Partner (DeepMind)', url: 'https://deepmind.google/discover/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/' },
      { name: 'DeepMind Science Skills', url: 'https://github.com/google-deepmind/science-skills/tree/main/skills' },
      { name: 'StrangeWorks Aligned Multi-Agent Sandbox', url: 'https://strangeworks-six.vercel.app/' }
    ]
  }
];

export const TIFR_PREPARATION_STRATEGY = {
  title: 'Tata Institute of Fundamental Research (TIFR CS / LIDS) Blueprint',
  institution: 'TIFR Mumbai - School of Technology and Computer Science',
  targetExamYear: '2026',
  philosophy: 'Proof Over Speed: TIFR evaluates pure mathematical depth, proof construction, and theoretical correctness rather than rapid arithmetic speed.',
  rules: [
    {
      rule: 'The "Proof Over Speed" Rule',
      detail: 'Unlike exams like GATE where solving 65 questions quickly is prioritized, TIFR cutoffs require solving a fraction of the paper with zero theoretical errors. Never skip proof derivations in MIT OCW.'
    },
    {
      rule: 'Rigorous Definition Calibration',
      detail: 'Ensure exact axiomatic definitions are mastered. For instance, when analyzing Inner Product Spaces, verify linearity, conjugate symmetry, and positive-definiteness from first principles.'
    },
    {
      rule: 'The 10-Year Reverse Engineering Strategy',
      detail: 'Conceptual patterns repeat across 10 years of past papers. Maintain a dedicated TIFR Insights log documenting precisely why each false option is structurally disproven.'
    }
  ],
  coreSubjects: [
    {
      subject: 'Linear Algebra & Spectral Theory',
      focus: 'Vector spaces, linear maps, dual spaces, inner product spaces, Gram-Schmidt, Spectral Theorem, Jordan canonical form',
      sources: ['Gilbert Strang MIT OCW 18.06', 'Sheldon Axler Linear Algebra Done Right']
    },
    {
      subject: 'Real Analysis & Metric Spaces',
      focus: 'Compactness, completeness, Cauchy sequences, uniform continuity, Heine-Borel theorem, point-set topology',
      sources: ['Walter Rudin Principles of Mathematical Analysis', 'MIT OCW Real Analysis 18.100']
    },
    {
      subject: 'Theory of Computation & Automata',
      focus: 'DFA/NFA minimization, Myhill-Nerode Theorem, Pumping Lemma, Turing machines, undecidability, Rice theorem',
      sources: ['Michael Sipser Introduction to the Theory of Computation']
    },
    {
      subject: 'Discrete Mathematics & Combinatorics',
      focus: 'Graph theory (connectivity, planar graphs, colorings), recurrence relations, generating functions, Ramsey theory',
      sources: ['MIT 6.042J Mathematics for Computer Science']
    }
  ]
};

export const SOUL_CENTRIC_ARCHITECTURE = {
  title: 'Technology for a Soul-Centric Mankind: Super Book / Divine Connect',
  executiveSummary: 'An ethical, multi-agent AI architecture engineered to align computational power with spiritual wellbeing, cognitive serenity, and stress-free academic growth.',
  architecture: [
    {
      tier: '1.1 The Cross-Device Triad',
      detail: 'Symbiotic orchestration across Wearable (biometric calm detection), Edge Hub (local offline knowledge cache), and Cloud TPU Core (deep reasoning and vector grounding).'
    },
    {
      tier: '1.2 Intelligence Core: Gemini 3 Flash & Antigravity',
      detail: 'Sub-millisecond inference for conversational coaching, proactive prompt generation, and automated syllabus adherence without anxiety.'
    },
    {
      tier: '2.1 The "Student Journey" Implementation',
      detail: 'Dynamic syllabus decomposition adapting in real-time to student cognitive load, preventing burnout while ensuring mastery of mathematical rigor.'
    },
    {
      tier: '3.1 Hardware-Software Co-Design',
      detail: 'Divine Connect OS distribution with built-in zero-knowledge proofs for privacy, open-weights verification, and local execution guarantees.'
    }
  ]
};

export const PHONETICS_CURRICULUM = {
  title: 'Speech, Phonetics & Natural English Fluency Lab',
  subtitle: 'Mastering Natural American English Pronunciation, Connected Speech & Communication for Researchers',
  foundations: [
    {
      rule: 'Double Consonants Mechanics',
      description: 'When one word ends with a consonant and the next begins with the same sound, hold and merge into one elongated articulation (e.g., "bad day" -> /bæ·deɪ/, "black cat" -> /blæ·kæt/).'
    },
    {
      rule: 'Consonant Drops & Glottal Stops',
      description: 'American T and D drops in consonant clusters (e.g., "post office" -> "pos office", "next week" -> "nex week", glottal stop /ʔ/ in "button", "mountain").'
    },
    {
      rule: 'Consonant + Vowel Linking',
      description: 'The terminal consonant flows directly into the opening vowel of the next word like a single word (e.g., "check it out" -> "che-ki-tout", "read a book" -> "ree-da-book").'
    },
    {
      rule: 'Vowel + Vowel Glide (/w/ and /j/)',
      description: 'Smooth intrusion of /w/ after rounded vowels (e.g., "go out" -> "go-w-out") and /j/ after unrounded vowels (e.g., "see it" -> "see-y-it").'
    }
  ],
  dailyAlgorithm: [
    'Thinking in English: Narrate daily mathematical coding thoughts internally in English rather than translating from regional dialect.',
    'Record-Listen-Correct Loop: Record 2 minutes explaining a research paper; compare waveform rhythm against native conference speakers.',
    'Rubber Band Method for Stress & Rhythm: Stretch stress on content words (nouns, main verbs) while squeezing function words (prepositions, articles).',
    'Shadowing with English with Yuliya: Mimic intonation contours and vocal placement in 15-minute focused daily micro-sessions.'
  ]
};

export const INTERACTIVE_QA_PROMPTS = [
  {
    question: 'What are the main advantages of using JAX for training large LLMs?',
    answer: 'JAX provides composable function transformations (jit, grad, vmap, pmap) combined with XLA compiler optimization. It enables seamless SPMD tensor parallelism via mesh-sharded arrays across TPU v4/v5e pods with minimal overhead and pure functional purity.'
  },
  {
    question: 'Explain the core concept of the Attention Mechanism in Transformers.',
    answer: 'Attention computes a dynamic weighted average of value vectors based on query-key dot-product similarities scaled by sqrt(d_k). This allows every token to attend directly to all other context tokens in parallel, bypassing the vanishing gradient bottlenecks of recurrent neural networks.'
  },
  {
    question: 'What is a practical use case for Google DeepMind\'s Co-Scientist multi-agent AI partner?',
    answer: 'Co-Scientist uses specialized autonomous agents (Hypothesizer, Reviewer, Tournament Judge, Bio-Tools Runner) to generate novel biomedical hypotheses, screen drug candidate interactions, and suggest laboratory verification protocols.'
  },
  {
    question: 'How does StrangeWorks Open Lab apply hybrid TPU-Quantum computing to climate telemetry?',
    answer: 'StrangeWorks couples high-throughput TPU nodes for Navier-Stokes neural surrogate weather solvers with quantum simulation algorithms (VQE) for carbon capture and nitrogen catalysis modeling, creating a complete planetary digital twin.'
  }
];

export const MEDIA_LECTURES: VideoEntry[] = [
  {
    "title": "Neural Networks: Zero to Hero - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
    "videoId": "PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
    "isPlaylist": true,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Lec 01. Introduction to Deep Learning",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=6FkRvTtUc-o",
    "videoId": "6FkRvTtUc-o",
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "MIT OpenCourseWare - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@mitocw",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Run Gemma on Reachy Mini, an open source robot",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=KPx3nRwbldE",
    "videoId": "KPx3nRwbldE",
    "isPlaylist": false,
    "category": "Systems & Robotics"
  },
  {
    "title": "Karpathy's LLM Wiki - Full Beginner Setup Guide",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=iXd0t60YmMw",
    "videoId": "iXd0t60YmMw",
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "AI Ranks #1 in IIT-JEE. Human Topper Came Second | Front Page",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://youtu.be/0g0VctJp5zI?si=om8_Uq1xzcheXyLH",
    "videoId": "0g0VctJp5zI",
    "isPlaylist": false,
    "category": "Mathematics & CS"
  },
  {
    "title": "Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 1: Class Intro",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=EvHRQhMX7_w",
    "videoId": "EvHRQhMX7_w",
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "English with Yuliya - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@yuliya_lingua",
    "videoId": null,
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "How to Understand FAST Spoken English",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=qVJcMcvqjiE",
    "videoId": "qVJcMcvqjiE",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "Master ALL English Tenses | A1-B2 English Grammar (FREE PDF! \ud83d\udcc4)",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=XP5X6CC4edI",
    "videoId": "XP5X6CC4edI",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "How to Read in English to Actually Improve Your Speaking (3 Methods)",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=cH4WRzUs4iU",
    "videoId": "cH4WRzUs4iU",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "4 Language Habits That Get You Fluent FAST",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=Ewd6CGwaEXY",
    "videoId": "Ewd6CGwaEXY",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "I Couldn't Understand English Movies for Years. Then I Started Watching These 10 Movies.\"",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=pxJbh7ICe1c",
    "videoId": "pxJbh7ICe1c",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "YES, it's possible - Daily Routine at C1 (Advanced) Level of English!",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=hUFj6sbOiPA",
    "videoId": "hUFj6sbOiPA",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "Read out loud with me! Atomic Habits PART 2 \u2013 Vocabulary, pronunciation and intonation",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=60oPEa4l91w",
    "videoId": "60oPEa4l91w",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "Learn English with SUITS",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=YZcjgKjVyXk",
    "videoId": "YZcjgKjVyXk",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "Pronunciation with Emma - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCNfm92h83W2i2ijc5Xwp_IA",
    "videoId": null,
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "British Education - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCEGuZlXpfQjsALYlGVCyv-Q",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Learn English With TV Series - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCKgpamMlm872zkGDcBJHYDg",
    "videoId": null,
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "Canguro English - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCr2TgqpOrU3kUTkVy5XoLow",
    "videoId": null,
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "Simple Happy Zen - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UC5c3csRaQTw9ZnHge1mTw4A",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Lana Blakely - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCfBqaomkd7VcyOibBX2xtqA",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Matt D'Avella - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCJ24N4O0bP7LGLBDvye7oCA",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "https://www.youtube.com/channel/UCbOhZ3HUP0eqbQgGYSMHo1w",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCbOhZ3HUP0eqbQgGYSMHo1w",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Vox - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UCLXo7UDZvByw2ixzpQCufnA",
    "videoId": null,
    "isPlaylist": false,
    "category": "Systems & Robotics"
  },
  {
    "title": "Jared Henderson - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/channel/UC2Kyj04yISmHr1V-UlJz4eg",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "https://www.youtube.com/watch?v=mwNtbKh39SA&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=2",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=mwNtbKh39SA",
    "videoId": "mwNtbKh39SA",
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "The spelled-out intro to neural networks and backpropagation: building micrograd",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=VMj-3S1tku0",
    "videoId": "VMj-3S1tku0",
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "https://www.youtube.com/@aichrislee",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@aichrislee",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "You Can Actually Use A Quantum Computer Right Now | Series Trailer",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=QofhzGh_M0E",
    "videoId": "QofhzGh_M0E",
    "isPlaylist": false,
    "category": "Quantum AI"
  },
  {
    "title": "DeepMind Lecture Series",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.google.com/search?q=https://www.youtube.com/playlist%3Flist%3DPLqxKXCan978mivzL9M9_x7iT5DOnY_yY2",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "DeepMind YouTube (UCL Lectures)",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://youtube.com/@GoogleDeepMind",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Andrej Karpathy - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/andrejkarpathy",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "JAX - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/playlist?list=PLBoQnSflObckOARbMK9Lt98Id0AKcZurq",
    "videoId": "PLBoQnSflObckOARbMK9Lt98Id0AKcZurq",
    "isPlaylist": true,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Ich HASSE ! - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/playlist?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR",
    "videoId": "PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR",
    "isPlaylist": true,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Qiskit - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@qiskit",
    "videoId": null,
    "isPlaylist": false,
    "category": "Quantum AI"
  },
  {
    "title": "Understanding Quantum Information & Computation With John Watrous - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/playlist?list=PLOFEBzvs-VvqKKMXX4vbi4EB1uaErFMSO",
    "videoId": "PLOFEBzvs-VvqKKMXX4vbi4EB1uaErFMSO",
    "isPlaylist": true,
    "category": "Quantum AI"
  },
  {
    "title": "Stop Watching Quantum Hype, Read These Instead",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://youtu.be/inEP-FagPjM?si=1R3tltTu9E1d4vad",
    "videoId": "inEP-FagPjM",
    "isPlaylist": false,
    "category": "Quantum AI"
  },
  {
    "title": "Learn English with DESPICABLE ME",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=ULwzy4Y2qk8",
    "videoId": "ULwzy4Y2qk8",
    "isPlaylist": false,
    "category": "Speech & Phonetics"
  },
  {
    "title": "Brain Station Advanced - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@BrainStationAdvanced",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Calculus Visualized - by Dennis F \u00a0Davis",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=MO-AExWdl4Q",
    "videoId": "MO-AExWdl4Q",
    "isPlaylist": false,
    "category": "Mathematics & CS"
  },
  {
    "title": "https://www.youtube.com/@googledeepmind/courses",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@googledeepmind/courses",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "DeepMind x UCL RL Lecture Series - Introduction to Reinforcement Learning [1/13]",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=TCCjZe0y4Qc",
    "videoId": "TCCjZe0y4Qc",
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Google Research - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@GoogleResearch",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Mapping the Web of Life | Google\u2019s AI for Biodiversity",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=9xR7858hEYM",
    "videoId": "9xR7858hEYM",
    "isPlaylist": false,
    "category": "Save Earth & Climate AI"
  },
  {
    "title": "Geospatial Reasoning: Demonstration application (October 2025)",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=kpeI9dbkWho",
    "videoId": "kpeI9dbkWho",
    "isPlaylist": false,
    "category": "Save Earth & Climate AI"
  },
  {
    "title": "Decoding Life on Earth | Google and the Earth Biogenome Project",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=7WfnTwIM95g",
    "videoId": "7WfnTwIM95g",
    "isPlaylist": false,
    "category": "Save Earth & Climate AI"
  },
  {
    "title": "Google for Developers - YouTube",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/@GoogleDevelopers",
    "videoId": null,
    "isPlaylist": false,
    "category": "Deep Learning & JAX"
  },
  {
    "title": "Build and deploy a documentation website using Docusaurus 2",
    "channelOrSeries": "Curated Academic Video",
    "url": "https://www.youtube.com/watch?v=I-hYKNgaMmE",
    "videoId": "I-hYKNgaMmE",
    "isPlaylist": false,
    "category": "Systems & Robotics"
  }
];

export const CURATED_DOCUMENTATION_LINKS: CuratedLink[] = [
  {
    "title": "without this course: Google DeepMind: AI Research Foundations. where can I get the knowledge on transformers (JAX) and how LLMs work. Do we have another course alternate to Google DeepMind: AI Research Foundations for LLMs transformer architecture with JAX AI Stack",
    "url": "https://docs.google.com/document/u/0/d/1Z4yWkwZNKhYnySzHCaOmoHMIXlcUncebolIfSY0Br5o/edit",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "khanmigo-tools",
    "url": "https://www.khanacademy.org/teacher/khanmigo-tools",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Hands-On Large Language Models",
    "url": "https://elibrary-dev.nusamandiri.ac.id/assets/fileebook/250153.pdf",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Dive into Deep Learning",
    "url": "https://d2l.ai/index.html",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "https://docs.jaxstack.ai/en/latest/index.html#",
    "url": "https://docs.jaxstack.ai/en/latest/index.html#",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Neural Networks: Zero to Hero - YouTube",
    "url": "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Science AI \u2014 Google AI",
    "url": "https://ai.google/science/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "5 Fun Papers That Explain LLMs Clearly - KDnuggets",
    "url": "https://www.kdnuggets.com/5-fun-papers-that-explain-llms-clearly",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Google for Developers",
    "url": "https://developers.google.com/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Python Tutor",
    "url": "https://pythontutor.com/index.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Build and Train an LLM with JAX - DeepLearning.AI",
    "url": "https://www.deeplearning.ai/courses/build-and-train-an-llm-with-jax",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "How Transformer LLMs Work -",
    "url": "https://www.deeplearning.ai/courses/how-transformer-llms-work",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "DeepLearning.AI",
    "url": "http://deeplearning.ai",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Attention in Transformers: Concepts and Code in PyTorch - DeepLearning.AI",
    "url": "https://www.deeplearning.ai/courses/attention-in-transformers-concepts-and-code-in-pytorch",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "The Illustrated Transformer \u2013 Jay Alammar",
    "url": "https://jalammar.github.io/illustrated-transformer/",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Gemma 4 model overview | Google AI for Developers",
    "url": "https://ai.google.dev/gemma/docs/core",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Inference with RecurrentGemma using JAX and Flax | Google AI for Developers",
    "url": "https://ai.google.dev/gemma/docs/recurrentgemma/recurrentgemma_jax_inference",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Gemma 2 inference using Jax and Flax",
    "url": "https://www.kaggle.com/code/nilaychauhan/gemma-2-inference-using-jax-and-flax",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "https://www.boot.dev/lessons/b6e716d2-df64-487e-aa7b-d768e8a2c8fc",
    "url": "https://www.boot.dev/lessons/b6e716d2-df64-487e-aa7b-d768e8a2c8fc",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Learn Algorithms and Data Structures in Python",
    "url": "https://www.freecodecamp.org/news/learn-algorithms-and-data-structures-in-python/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Co-Scientist: A multi-agent AI partner to accelerate research \u2014 Google DeepMind",
    "url": "https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Projects \u2014 Google DeepMind",
    "url": "https://deepmind.google/research/projects/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Models & research",
    "url": "https://blog.google/innovation-and-ai/models-and-research/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "JAX documentation",
    "url": "https://docs.jax.dev/en/latest/",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Building production AI on Cloud TPUs with JAX",
    "url": "https://docs.cloud.google.com/tpu/docs/jax-ai-stack",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Building production AI on Google Cloud TPUs with JAX",
    "url": "https://developers.googleblog.com/building-production-ai-on-google-cloud-tpus-with-jax/",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "https://github.com/google-deepmind/science-skills/tree/main/skills",
    "url": "https://github.com/google-deepmind/science-skills/tree/main/skills",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "https://github.com/google-deepmind/",
    "url": "https://github.com/google-deepmind/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "100 things we announced at I/O 2026",
    "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google DeepMind: AI Research Foundations",
    "url": "https://www.skills.google/paths/3135",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "JAX Guide | Kaggle",
    "url": "https://www.kaggle.com/learn-guide/jax",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Train a miniGPT language model with JAX",
    "url": "https://docs.jaxstack.ai/en/latest/JAX_for_LLM_pretraining.html",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Lec 01. Introduction to Deep Learning",
    "url": "https://www.youtube.com/watch?v=6FkRvTtUc-o&list=PLUl4u3cNGP63URZnh5iqBzDTDYPUTQT-8",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "MIT OpenCourseWare - YouTube",
    "url": "https://www.youtube.com/@mitocw",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "IBM Quantum Platform",
    "url": "https://quantum.cloud.ibm.com/",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Install TensorFlow Quantum",
    "url": "https://www.tensorflow.org/quantum/install",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Quandela Training Center",
    "url": "https://training.quandela.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Temple",
    "url": "https://www.temple.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "OpenAI\u2019s First Device Will Be Home Speaker Built as AI Companion - Bloomberg",
    "url": "https://www.bloomberg.com/news/articles/2026-07-14/openai-s-first-device-will-be-moveable-screenless-speaker-built-as-ai-companion",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Thinking Machines Lab",
    "url": "https://thinkingmachines.ai/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Essential AI",
    "url": "https://www.essential.ai/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Eureka Labs",
    "url": "https://eurekalabs.ai/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Andrej Karpathy",
    "url": "https://karpathy.ai/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Lean Programming Language",
    "url": "https://lean-lang.org/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Run Gemma on Reachy Mini, an open source robot",
    "url": "https://www.youtube.com/watch?v=KPx3nRwbldE",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "YC Paper Club",
    "url": "https://events.ycombinator.com/ycpaperclub",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Karpathy's LLM Wiki - Full Beginner Setup Guide",
    "url": "https://www.youtube.com/watch?v=iXd0t60YmMw",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "AI Knowledge Base | Karpathy's LLM Wiki Pattern | Nimbalyst",
    "url": "https://nimbalyst.com/use-cases/knowledge-base/",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "See what 3 builders are making with Gemma 4",
    "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4-builders/",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Announcing Rnj-1: Building Instruments of Intelligence",
    "url": "https://www.essential.ai/research/rnj-1",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "thermox: The First Thermodynamic Computing Simulator",
    "url": "https://www.normalcomputing.com/blog/thermox-the-first-thermodynamic-computing-simulator",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Software | Extropic",
    "url": "https://extropic.ai/software",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://docs.thrml.ai/en/latest/",
    "url": "https://docs.thrml.ai/en/latest/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "asteriskacademy.org",
    "url": "http://asteriskacademy.org",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Official Star Trek Website",
    "url": "https://www.startrek.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "www.strangeworks.ai",
    "url": "http://www.strangeworks.ai",
    "category": "Save Earth & StrangeWorks",
    "badge": "Planetary AI"
  },
  {
    "title": "strangeworks.ai",
    "url": "http://strangeworks.ai",
    "category": "Save Earth & StrangeWorks",
    "badge": "Planetary AI"
  },
  {
    "title": "stardust.ai",
    "url": "http://stardust.ai",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "starlight.ai",
    "url": "http://starlight.ai",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "intuition.com",
    "url": "http://intuition.com",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "strangerworks.ai",
    "url": "http://strangerworks.ai",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "stephen_hawking_voice.mp4",
    "url": "https://drive.google.com/open?id=1BPCJ9xJaAwdzWkuAiqmgIF0sV869YvL5",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Vercel",
    "url": "https://vercel.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://ket-ai.onrender.com/",
    "url": "https://ket-ai.onrender.com/",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "render.com",
    "url": "http://render.com",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "https://github.com/r-karra/ketAI",
    "url": "https://github.com/r-karra/ketAI",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "Pre-funded startups | Google Cloud",
    "url": "https://cloud.google.com/startup/pre-funded",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "AI Futures Fund",
    "url": "https://labs.google/aifuturesfund",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google for Startups Accelerator: India",
    "url": "https://startup.google.com/programs/accelerator/india/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "AI Ranks #1 in IIT-JEE. Human Topper Came Second | Front Page",
    "url": "https://youtu.be/0g0VctJp5zI?si=om8_Uq1xzcheXyLH",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Python Programming MOOC 2026",
    "url": "https://programming-26.mooc.fi/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 1: Class Intro",
    "url": "https://www.youtube.com/watch?v=EvHRQhMX7_w",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "https://runestone.academy/ns/books/published/pythonds3/index.html?mode=browsing",
    "url": "https://runestone.academy/ns/books/published/pythonds3/index.html?mode=browsing",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Lesson 1 - Binary Search and Complexity Analysis | Jovian",
    "url": "https://jovian.com/learn/data-structures-and-algorithms-in-python/lesson/lesson-1-binary-search-and-complexity-analysis",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://www.englisch-hilfen.de/en",
    "url": "https://www.englisch-hilfen.de/en/inhalt_grammar.htm#google_vignette",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "English with Yuliya - YouTube",
    "url": "https://www.youtube.com/@yuliya_lingua",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "How to Understand FAST Spoken English",
    "url": "https://www.youtube.com/watch?v=qVJcMcvqjiE&list=PLWzNzAbF7DK3U-B8GIn7eA0a5U2H8aL6i",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Master ALL English Tenses | A1-B2 English Grammar (FREE PDF! \ud83d\udcc4)",
    "url": "https://www.youtube.com/watch?v=XP5X6CC4edI",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "How to Read in English to Actually Improve Your Speaking (3 Methods)",
    "url": "https://www.youtube.com/watch?v=cH4WRzUs4iU",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "4 Language Habits That Get You Fluent FAST",
    "url": "https://www.youtube.com/watch?v=Ewd6CGwaEXY",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "I Couldn't Understand English Movies for Years. Then I Started Watching These 10 Movies.\"",
    "url": "https://www.youtube.com/watch?v=pxJbh7ICe1c",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "YES, it's possible - Daily Routine at C1 (Advanced) Level of English!",
    "url": "https://www.youtube.com/watch?v=hUFj6sbOiPA",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Read out loud with me! Atomic Habits PART 2 \u2013 Vocabulary, pronunciation and intonation",
    "url": "https://www.youtube.com/watch?v=60oPEa4l91w",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Learn English with SUITS",
    "url": "https://www.youtube.com/watch?v=YZcjgKjVyXk",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "BBC Learning English - 6 Minute English / Stress-free family meals",
    "url": "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english_2026/ep-260625",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Pronunciation with Emma - YouTube",
    "url": "https://www.youtube.com/channel/UCNfm92h83W2i2ijc5Xwp_IA",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "British Education - YouTube",
    "url": "https://www.youtube.com/channel/UCEGuZlXpfQjsALYlGVCyv-Q",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Learn English With TV Series - YouTube",
    "url": "https://www.youtube.com/channel/UCKgpamMlm872zkGDcBJHYDg",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Canguro English - YouTube",
    "url": "https://www.youtube.com/channel/UCr2TgqpOrU3kUTkVy5XoLow",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Simple Happy Zen - YouTube",
    "url": "https://www.youtube.com/channel/UC5c3csRaQTw9ZnHge1mTw4A",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Lana Blakely - YouTube",
    "url": "https://www.youtube.com/channel/UCfBqaomkd7VcyOibBX2xtqA",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Matt D'Avella - YouTube",
    "url": "https://www.youtube.com/channel/UCJ24N4O0bP7LGLBDvye7oCA",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "https://www.youtube.com/channel/UCbOhZ3HUP0eqbQgGYSMHo1w",
    "url": "https://www.youtube.com/channel/UCbOhZ3HUP0eqbQgGYSMHo1w",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Vox - YouTube",
    "url": "https://www.youtube.com/channel/UCLXo7UDZvByw2ixzpQCufnA",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Jared Henderson - YouTube",
    "url": "https://www.youtube.com/channel/UC2Kyj04yISmHr1V-UlJz4eg",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Amazon launches annual ML summer school in India",
    "url": "https://www.amazon.science/academic-engagements/amazon-launches-annual-ml-summer-school-in-india",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Machine Learning (ML) on AWS - ML Models and Tools",
    "url": "https://aws.amazon.com/ai/machine-learning/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://github.com/r-karra/aws-machine-learning-university-accelerated-cv",
    "url": "https://github.com/r-karra/aws-machine-learning-university-accelerated-cv",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "https://www.youtube.com/watch?v=mwNtbKh39SA&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=2",
    "url": "https://www.youtube.com/watch?v=mwNtbKh39SA&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=2",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "MLU-Explain",
    "url": "https://mlu-explain.github.io/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Papers with Code",
    "url": "https://paperswithcode.co/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Cirq | Google Quantum AI",
    "url": "https://quantumai.google/cirq",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Open-Source Tools | Google Quantum AI",
    "url": "https://quantumai.google/software",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Foundations of Quantum Computing | PennyLane Codebook",
    "url": "https://pennylane.ai/codebook/learning-paths/foundations-of-quantum-computing",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "IBM Quantum Computing | Research and publications",
    "url": "https://www.ibm.com/quantum/research",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "https://quantumalgorithmzoo.org/",
    "url": "https://quantumalgorithmzoo.org/",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Google DeepMind",
    "url": "https://www.skills.google/collections/deepmind",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Getting Started with THRML",
    "url": "https://docs.thrml.ai/en/latest/examples/00_probabilistic_computing/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Gemma open-weight LLM library, from Google DeepMind \u00b7 GitHub",
    "url": "https://github.com/google-deepmind/gemma",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Hands-On-Large-Language-Models",
    "url": "https://github.com/r-karra/Hands-On-Large-Language-Models",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "The spelled-out intro to neural networks and backpropagation: building micrograd",
    "url": "https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&index=21&t=444s",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "https://ocw.mit.edu/search/?q=deep%20learning",
    "url": "https://ocw.mit.edu/search/?q=deep%20learning",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "https://deepmind.google/",
    "url": "https://deepmind.google/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Configure hardware acceleration for the Android Emulator | Android Studio",
    "url": "https://developer.android.com/studio/run/emulator-acceleration",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Practical Python Programming",
    "url": "https://dabeaz-course.github.io/practical-python/Notes/Contents.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "JAXstack Documentation",
    "url": "https://docs.jaxstack.ai/en/latest/index.html#",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "https://programming-26.mooc.fi/",
    "url": "https://programming-26.mooc.fi/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://projects.raspberrypi.org/en/",
    "url": "https://projects.raspberrypi.org/en/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "MIT Learn",
    "url": "https://learn.mit.edu/",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Best Data Structures and Algorithms Courses [2026]",
    "url": "https://scrimba.com/articles/best-data-structures-and-algorithms-courses-2026/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Boot.dev Lessons",
    "url": "https://www.boot.dev/lessons/b6e716d2-df64-487e-aa7b-d768e8a2c8fc",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "https://runestone.academy/ns/books/published/pythonds3/Introduction/ControlStructures.html?mode=browsing",
    "url": "https://runestone.academy/ns/books/published/pythonds3/Introduction/ControlStructures.html?mode=browsing",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://mlu-explain.github.io/",
    "url": "https://mlu-explain.github.io/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://openlearning.mit.edu/courses-programs/mit-opencourseware",
    "url": "https://openlearning.mit.edu/courses-programs/mit-opencourseware",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "https://openlearning.mit.edu/",
    "url": "https://openlearning.mit.edu/",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "https://www.ycombinator.com/library",
    "url": "https://www.ycombinator.com/library",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://events.ycombinator.com/ycpaperclub",
    "url": "https://events.ycombinator.com/ycpaperclub",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://khanted.org/Home",
    "url": "https://khanted.org/Home",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "English Grammar Online - Reference and Explanations - Learning English",
    "url": "https://www.englisch-hilfen.de/en/inhalt_grammar.htm",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english_2026/ep-260625",
    "url": "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english_2026/ep-260625",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Google Research",
    "url": "https://research.google/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google I/O 2026: Developer keynote",
    "url": "https://io.google/2026/explore/developer-keynote-1",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Developer Program",
    "url": "https://me.developers.google.com/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Labs",
    "url": "https://labs.google/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://labs.google/science/",
    "url": "https://labs.google/science/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://ai.google/science/",
    "url": "https://ai.google/science/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://paperswithcode.co/",
    "url": "https://paperswithcode.co/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/",
    "url": "https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "https://r-karra.github.io/rKarra.ai/",
    "url": "https://r-karra.github.io/rKarra.ai/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://rkarra.bearblog.dev/",
    "url": "https://rkarra.bearblog.dev/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://bearblog.dev/rkarra/dashboard/",
    "url": "https://bearblog.dev/rkarra/dashboard/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://karpathy.ai/",
    "url": "https://karpathy.ai/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "The AI World\u2019s Favorite Engineer: Why Andrej Karpathy Commands So Much Respect | by Ai studio",
    "url": "https://medium.com/the-ai-studio/the-ai-worlds-favorite-engineer-why-andrej-karpathy-commands-so-much-respect-0971b8a5dcdc",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://www.bbc.com/audio/play/p0nr3f5v",
    "url": "https://www.bbc.com/audio/play/p0nr3f5v",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "LogIn",
    "url": "https://online.osmaniaerp.com/AFC/Info/Index",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://dost.cgg.gov.in/ugOnlineAdmissionNew.do",
    "url": "https://dost.cgg.gov.in/ugOnlineAdmissionNew.do",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://www.google.com/about/careers/applications/profile",
    "url": "https://www.google.com/about/careers/applications/profile",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://www.youtube.com/@aichrislee",
    "url": "https://www.youtube.com/@aichrislee",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "https://android.google.com/developerconsole/u/0/developers/1244894162637269050/packages",
    "url": "https://android.google.com/developerconsole/u/0/developers/1244894162637269050/packages",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://play.google.com/console/signup",
    "url": "https://play.google.com/console/signup",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Understanding Linear Algebra",
    "url": "https://understandinglinearalgebra.org/home.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "CUET_Information.pdf",
    "url": "https://drive.google.com/open?id=1PNS6ea3t55oI-z2sGg0fkvs5PnlvgAby",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "CUET_Computer_Science_Syllabus.pdf",
    "url": "https://drive.google.com/open?id=1-aK4rS0FDFyklUebDR1jLFqBQsbh3O6P",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Graduate School Admission",
    "url": "https://www.tifr.res.in/academics/gs_admissions.php",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "STCS, TIFR",
    "url": "https://www.tcs.tifr.res.in/web/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Annual_Academic_Plan_French_-_II_Yr.pdf",
    "url": "https://drive.google.com/open?id=17ysZFHOv1lBsgCOCbGCwYGJLARLvqMaI",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Annual_Academic_Plan_French_-_I_Yr.pdf",
    "url": "https://drive.google.com/open?id=1HGwSjcgXbS0WgtGbS5OcNsU_FVWVJFnd",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "www.asteriskacademy.org",
    "url": "http://www.asteriskacademy.org",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "porkbun.com",
    "url": "http://porkbun.com",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "vercel.com",
    "url": "http://vercel.com",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Roadmap to Learn AI in 2025. A free curriculum for hackers and\u2026 | by Benedict Neo | bitgrit Data Science Publication | Medium",
    "url": "https://medium.com/bitgrit-data-science-publication/a-roadmap-to-learn-ai-in-2024-cc30c6aa6e16",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "How to learn LLM in depth?? | Kaggle",
    "url": "https://www.kaggle.com/discussions/questions-and-answers/559884",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "GitHub - rasbt/LLMs-from-scratch: Implement a ChatGPT-like LLM in PyTorch from scratch, step by step",
    "url": "https://github.com/rasbt/LLMs-from-scratch",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "https://magazine.sebastianraschka.com/p/coding-llms-from-the-ground-up",
    "url": "https://magazine.sebastianraschka.com/p/coding-llms-from-the-ground-up",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "You Can Actually Use A Quantum Computer Right Now | Series Trailer",
    "url": "https://www.youtube.com/watch?v=QofhzGh_M0E&list=PLOFEBzvs-VvoRwhofpHlBqMnR1ldAmKZJ&index=1",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Gemmaverse \u2014 Google DeepMind",
    "url": "https://deepmind.google/models/gemma/gemmaverse/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Gemma",
    "url": "https://gemma-llm.readthedocs.io/en/latest/index.html",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Gemma 4 \u2014 Google DeepMind",
    "url": "https://deepmind.google/models/gemma/gemma-4/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "XPRIZE Foundation",
    "url": "https://www.xprize.org/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "XPRIZE Prize Operations Platform",
    "url": "https://pop.xprize.org/prizes",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "MIT App Inventor",
    "url": "https://appinventor.mit.edu/",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "The path to quantum transformers | PennyLane Blog",
    "url": "https://pennylane.ai/blog/2024/04/quantum_transformers/",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "5 GitHub Repositories to Learn Quantum Machine Learning - KDnuggets",
    "url": "https://www.kdnuggets.com/5-github-repositories-to-learn-quantum-machine-learning",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Use Google AI Pro benefits - Google One Help",
    "url": "https://support.google.com/googleone/answer/14534406?hl=en#:~:text=Use%20Google%20Photos'%20Generative%20AI,age%20requirements%20on%20Google%20Accounts",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Gemma Model Overview",
    "url": "https://ai.google.dev/gemma",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Gemma Technical Report",
    "url": "https://storage.googleapis.com/deepmind-media/gemma/gemma-report.pdf",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Gemma on JAX/Flax",
    "url": "https://github.com/google-deepmind/gemma",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Gemma Fine-Tuning Guide",
    "url": "https://ai.google.dev/gemma/docs/lora_tuning",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Gemma.cpp GitHub",
    "url": "https://github.com/google/gemma.cpp",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Learning Interpretability Tool (LIT)",
    "url": "https://pair-code.github.io/lit/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Keras Hub (formerly KerasNLP)",
    "url": "https://keras.io/api/keras_hub/models/gemma/",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "AI Edge Mesh",
    "url": "https://ai.google.dev/edge",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google for Startups",
    "url": "https://startup.google.com/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google's Python Class",
    "url": "https://developers.google.com/edu/python",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://dabeaz-course.github.io/practical-python/Notes/Contents.html",
    "url": "https://dabeaz-course.github.io/practical-python/Notes/Contents.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Math for ML (Google Dev)",
    "url": "https://developers.google.com/machine-learning/crash-course/embeddings/video-lecture",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "DeepLearning.AI Math",
    "url": "https://www.coursera.org/specializations/mathematics-machine-learning",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Mathematics for Machine Learning and Data Science Specialization - Coursera - deeplearning.ai - solutions and notes \u00b7 GitHub",
    "url": "https://github.com/greyhatguy007/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-Coursera",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Google ML Crash Course",
    "url": "https://developers.google.com/machine-learning/crash-course",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "JAX 101 Tutorials",
    "url": "https://jax.readthedocs.io/en/latest/jax-101/index.html",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Optax Docs",
    "url": "https://optax.readthedocs.io/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "jraph GitHub & Colab",
    "url": "https://github.com/google-deepmind/jraph",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Orbax Docs",
    "url": "https://orbax.readthedocs.io/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Chex GitHub",
    "url": "https://github.com/google-deepmind/chex",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Cirq: Zero to Quantum",
    "url": "https://quantumai.google/cirq/start/basics",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "OpenFermion Site",
    "url": "https://quantumai.google/openfermion",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Google Quantum AI GitHub",
    "url": "https://github.com/quantumlib",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "TF Quantum Tutorials",
    "url": "https://www.tensorflow.org/quantum",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Gemma Docs (JAX)",
    "url": "https://ai.google.dev/gemma/docs/recurrentgemma/recurrentgemma_jax_finetune",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "AlphaFold 3 Paper",
    "url": "https://www.nature.com/articles/s41586-024-07487-w",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "GraphCast (DeepMind)",
    "url": "https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "WeatherBench 2 Site",
    "url": "https://sites.research.google/gr/weatherbench/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "RLax (RL for JAX)",
    "url": "https://github.com/google-deepmind/rlax",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Google Cloud Skills Boost",
    "url": "https://www.cloudskillsboost.google/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Introduction to Generative AI",
    "url": "https://www.cloudskillsboost.google/course_templates/536",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Generative AI Path",
    "url": "https://www.cloudskillsboost.google/paths/118",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Data Analytics Professional",
    "url": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Coursera - Google Data",
    "url": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "AI Research Foundations",
    "url": "https://deepmind.google/education/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "DeepMind JAX Ecosystem",
    "url": "https://github.com/google-deepmind",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "DeepMind OSS GitHub",
    "url": "https://github.com/google-deepmind",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "DeepMind YouTube (UCL Lectures)",
    "url": "https://youtube.com/@GoogleDeepMind",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "DeepMind x UCL RL Series",
    "url": "https://youtube.com/@GoogleDeepMind",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Deep RL with JAX",
    "url": "https://github.com/google-deepmind/rlax",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "RLax Documentation",
    "url": "https://github.com/google-deepmind/rlax",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "GraphCast",
    "url": "https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "WeatherBench 2",
    "url": "https://sites.research.google/gr/weatherbench/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "PaLM Paper",
    "url": "https://ai.google/static/documents/palm2techreport.pdf",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "3Blue1Brown",
    "url": "https://www.3blue1brown.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Google AI Studio",
    "url": "https://aistudio.google.com/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Educational Resources | Google Quantum AI",
    "url": "https://quantumai.google/resources",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "TensorFlow Quantum (TFQ)",
    "url": "https://www.tensorflow.org/quantum",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Qiskit Machine Learning",
    "url": "https://qiskit-community.github.io/qiskit-machine-learning/",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "MNIST classification | TensorFlow Quantum",
    "url": "https://www.tensorflow.org/quantum/tutorials/mnist",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Using JAX to accelerate our research - Google DeepMind",
    "url": "https://deepmind.google/blog/using-jax-to-accelerate-our-research/",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "GitHub - google-deepmind/educational",
    "url": "https://github.com/google-deepmind/educational",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "IBM Quantum Learning",
    "url": "https://quantum.cloud.ibm.com/learning/en",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Mapping, modeling, and understanding nature with AI",
    "url": "https://deepmind.google/blog/mapping-modeling-and-understanding-nature-with-ai/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Google accelerator program",
    "url": "https://developers.google.com/community/accelerators",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google developer program",
    "url": "https://io.google/2026/community",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Niko Sirmpilatze",
    "url": "https://nikosirmpilatze.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://github.com/niksirbi/niksirbi.github.io",
    "url": "https://github.com/niksirbi/niksirbi.github.io",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Madeline Eppley",
    "url": "https://www.madeline-eppley.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Roberta Rosa Valtorta",
    "url": "https://robertavaltorta.research.st/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://104-198-18-62.sslip.io/",
    "url": "https://104-198-18-62.sslip.io/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Google's Python Class | Python Education",
    "url": "https://developers.google.com/edu/python",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "B.Sc",
    "url": "http://b.sc",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Educative.io",
    "url": "https://www.educative.io/learn/home",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://education.github.com/learner/learn",
    "url": "https://education.github.com/learner/learn",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://github.com/rajesh-karra",
    "url": "https://github.com/rajesh-karra",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "GitHub Student Developer Pack - Education",
    "url": "https://education.github.com/pack#notion",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Belgium's 'Little Einstein' Earns PhD in Quantum Physics at Age 15 : ScienceAlert",
    "url": "https://www.sciencealert.com/belgiums-little-einstein-earns-phd-in-quantum-physics-at-age-15",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Long-running Claude for scientific computing \\ Anthropic",
    "url": "https://www.anthropic.com/research/long-running-Claude",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Coming 2nd in a Kaggle Competition",
    "url": "https://www.mrdbourke.com/coming-2nd-in-a-kaggle-competition/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://share.google/aimode/p1UMw5SorOUvt0ZAO",
    "url": "https://share.google/aimode/p1UMw5SorOUvt0ZAO",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "M.Sc",
    "url": "http://m.sc",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "ConvnetJS demo: toy 2d classification with 2-layer neural network",
    "url": "https://cs.stanford.edu/people/karpathy/convnetjs//demo/classify2d.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Neural Networks, Manifolds, and Topology -- colah's blog",
    "url": "https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "ConvNetJS: Deep Learning in your browser",
    "url": "https://cs.stanford.edu/people/karpathy/convnetjs/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://github.com/r-karra/llm-internals",
    "url": "https://github.com/r-karra/llm-internals",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Andrej Karpathy blog",
    "url": "https://karpathy.github.io/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "The spelled-out intro to neural networks and backpropagation: building micrograd",
    "url": "https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Andrej Karpathy - YouTube",
    "url": "https://www.youtube.com/andrejkarpathy",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "AI Learning Resources & Guides from Anthropic",
    "url": "https://www.anthropic.com/learn",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "JAX AI Stack",
    "url": "https://docs.jaxstack.ai/en/latest/index.html",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "JAX - YouTube",
    "url": "https://www.youtube.com/playlist?list=PLBoQnSflObckOARbMK9Lt98Id0AKcZurq",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Quickstart: How to think in JAX",
    "url": "https://docs.jax.dev/en/latest/notebooks/thinking_in_jax.html",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "Prerequisites and prework | Machine Learning | Google for Developers",
    "url": "https://developers.google.com/machine-learning/crash-course/prereqs-and-prework",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Large Language Models (LLMs) with Google AI",
    "url": "https://cloud.google.com/ai/llms",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Say hello to the \"Hello, World\" of machine learning | Google for Developers",
    "url": "https://developers.google.com/codelabs/tensorflow-1-helloworld#2",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Hello-ML-World.ipynb - Colab",
    "url": "https://colab.research.google.com/github/lmoroney/mlday-tokyo/blob/master/Lab1-Hello-ML-World.ipynb",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Ich HASSE ! - YouTube",
    "url": "https://www.youtube.com/playlist?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "IBM Quantum Computing | Events",
    "url": "https://www.ibm.com/quantum/events",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "https://www.anthropic.com/research/long-running-Claude",
    "url": "https://www.anthropic.com/research/long-running-Claude",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Beginner: Introduction to Generative AI | Google Skills",
    "url": "https://www.skills.google/paths/118",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Introduction to Agents and Google\u2019s Agent Ecosystem | Google Skills",
    "url": "https://www.skills.google/paths/3546",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Introduction to Large Language Models | Google Skills",
    "url": "https://www.skills.google/course_templates/539",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Breaking ground on India\u2019s quantum future | IBM Quantum Computing Blog",
    "url": "https://www.ibm.com/quantum/blog/quantum-education-india",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "GitHub - artix41/awesome-quantum-ml: Curated list of awesome papers and resources in quantum machine learning",
    "url": "https://github.com/artix41/awesome-quantum-ml",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "krishnakumarsekar/awesome-quantum-machine-learning",
    "url": "https://github.com/krishnakumarsekar/awesome-quantum-machine-learning",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "quantum-machine-learning/Hands-On-Quantum-Machine-Learning-With-Python-Vol-1 \u00b7 GitHub",
    "url": "https://github.com/quantum-machine-learning/Hands-On-Quantum-Machine-Learning-With-Python-Vol-1",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "MonitSharma/Quantum-Machine-Learning-on-Near-Term-Quantum-Devices: List of some personal QML Projects \u00b7 GitHub",
    "url": "https://github.com/MonitSharma/Quantum-Machine-Learning-on-Near-Term-Quantum-Devices",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "GitHub - qiskit-community/qiskit-machine-learning: An open-source library built on Qiskit for quantum machine learning tasks at scale on quantum hardware and classical simulators",
    "url": "https://github.com/qiskit-community/qiskit-machine-learning",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "GEAR | Google Developer Program",
    "url": "https://developers.google.com/program/gear",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "GEAR Get Certified Program",
    "url": "https://developers.google.com/program/gear/getcertified/?utm_id=2858551373725136870&utm_medium=CALLOUT&utm_source=DevSense#overview",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Build a computer vision model with TensorFlow | Google for Developers",
    "url": "https://developers.google.com/codelabs/tensorflow-2-computervision#1",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://developers.google.com/learn",
    "url": "https://developers.google.com/learn",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Developer Groups",
    "url": "https://gdg.community.dev/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Qiskit - YouTube",
    "url": "https://www.youtube.com/@qiskit",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Understanding Quantum Information & Computation With John Watrous - YouTube",
    "url": "https://www.youtube.com/playlist?list=PLOFEBzvs-VvqKKMXX4vbi4EB1uaErFMSO",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "IBM Quantum Learning",
    "url": "https://quantum.cloud.ibm.com/learning/en/courses",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf",
    "url": "https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Applications are open for the Qiskit advocate program | IBM Quantum Computing Blog",
    "url": "https://www.ibm.com/quantum/blog/qiskit-advocate-program",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "IBM Certified Quantum Computation using Qiskit v2.X Developer - Associate",
    "url": "https://www.ibm.com/training/certification/ibm-certified-quantum-computation-using-qiskit-v2x-developer-associate-C9008400",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Google Labs",
    "url": "https://labs.google/experiments",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Launching the Quantum Artificial Intelligence Lab",
    "url": "https://research.google/blog/launching-the-quantum-artificial-intelligence-lab/",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Google Cloud Platform expands to Mars",
    "url": "https://cloud.google.com/blog/products/infrastructure/google-cloud-platform-expands-to-mars",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Summer of Code",
    "url": "https://summerofcode.withgoogle.com/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Quantum Circuit Design with LLMs",
    "url": "https://ml4sci.org/gsoc/2026/proposal_QMLHEP16.html",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "https://ml4sci.org/gsoc/projects/2026/project_QMLHEP.html",
    "url": "https://ml4sci.org/gsoc/projects/2026/project_QMLHEP.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://ml4sci.org/gsoc/2026/proposal_SYMBA6.html",
    "url": "https://ml4sci.org/gsoc/2026/proposal_SYMBA6.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://ml4sci.org/gsoc/2026/proposal_QMLHEP7.html",
    "url": "https://ml4sci.org/gsoc/2026/proposal_QMLHEP7.html",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Quantum Machine Learning | PennyLane Quantum Topics",
    "url": "https://pennylane.ai/topics/quantum-machine-learning",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Introduction to Quantum Computing | All About Qubits | PennyLane Codebook",
    "url": "https://pennylane.ai/codebook/introduction-to-quantum-computing/all-about-qubits",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Codebook \u2014 PennyLane",
    "url": "https://pennylane.ai/codebook",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "My Google Groups",
    "url": "https://groups.google.com/my-groups",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Machine learning education | TensorFlow",
    "url": "https://www.tensorflow.org/resources/learn-ml#math-concepts",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Stop Watching Quantum Hype, Read These Instead",
    "url": "https://youtu.be/inEP-FagPjM?si=1R3tltTu9E1d4vad",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Cirq Cynq Community Meetings (goo.gle/cirq-cynq)",
    "url": "https://docs.google.com/document/u/0/d/1K3e4MtNsWBlQ4KWkpJftac9AgBjHygvWqtucBdRoZyQ/edit",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "The Lean Language Reference",
    "url": "https://lean-lang.org/doc/reference/latest/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Theorem Proving in Lean 4",
    "url": "https://leanprover.github.io/theorem_proving_in_lean4/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Precalculus 2e",
    "url": "https://openstax.org/details/books/precalculus-2e",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Learn English with DESPICABLE ME",
    "url": "https://www.youtube.com/watch?v=ULwzy4Y2qk8",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "https://github.com",
    "url": "https://github.com/r-karra",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "Kaggle",
    "url": "https://www.kaggle.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Discord",
    "url": "https://discord.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "LLM Visualization",
    "url": "https://bbycroft.net/llm",
    "category": "LLMs & Transformers",
    "badge": "Gemma / LLM"
  },
  {
    "title": "Google Gemini",
    "url": "https://gemini.google.com/app",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google NotebookLM",
    "url": "https://notebooklm.google.com/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Answer.AI",
    "url": "https://www.answer.ai/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "machine-learning-algorithms-for-beginners.ipynb - Colab",
    "url": "https://colab.research.google.com/github/towardsai/tutorials/blob/master/machine_learning_algorithms_for_beginners/machine_learning_algorithms_for_beginners.ipynb",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Rajesh Karra | Kaggle",
    "url": "https://www.kaggle.com/rajeshkumarkarra",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://github.com/r-karra",
    "url": "https://github.com/r-karra",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "https://developers.google.com/profile/u/rajesh_karra",
    "url": "https://developers.google.com/profile/u/rajesh_karra",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Skills",
    "url": "https://www.skills.google/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "r-karra (Rajesh Karra)",
    "url": "https://huggingface.co/r-karra",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "LeetCode",
    "url": "https://leetcode.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Github Student",
    "url": "https://github.com/education/students",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "jbac",
    "url": "https://jbac.in/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "pythonanywhere",
    "url": "https://www.pythonanywhere.com/",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "render",
    "url": "https://render.com/",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "YouGlish.com",
    "url": "https://youglish.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://www.tifr.res.in/academics/past_question_papers.php",
    "url": "https://www.tifr.res.in/academics/past_question_papers.php",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "www.physicsbyfiziks.com",
    "url": "http://www.physicsbyfiziks.com",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "GitHub",
    "url": "https://github.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Medium",
    "url": "https://medium.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Hugging Face",
    "url": "https://huggingface.co/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Learn in Public",
    "url": "https://share.google/aimode/Ez6iVVg92dQZW1X9C",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Dev.to",
    "url": "http://dev.to",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "x.com",
    "url": "http://x.com",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://github.com/google-deepmind/educational?tab=readme-ov-file",
    "url": "https://github.com/google-deepmind/educational?tab=readme-ov-file",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "https://io.google/2026/community",
    "url": "https://io.google/2026/community",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://developers.google.com/community/accelerators",
    "url": "https://developers.google.com/community/accelerators",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://github.com/rajeshkumarkarra/fsociety",
    "url": "https://github.com/rajeshkumarkarra/fsociety",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://docs.google.com/document/d/1K3e4MtNsWBlQ4KWkpJftac9AgBjHygvWqtucBdRoZyQ/edit?usp=drivesdk",
    "url": "https://docs.google.com/document/d/1K3e4MtNsWBlQ4KWkpJftac9AgBjHygvWqtucBdRoZyQ/edit?usp=drivesdk",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Mathematics for AI.ipynb",
    "url": "https://colab.research.google.com/drive/1bfFIjxqw3T5hh1lzc8dKAj8MNpOiLQzu#scrollTo=22cb49d4",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Medium",
    "url": "https://medium.com/@rajeshkarra.ai/the-normal-distribution-a-comprehensive-guide-to-the-bell-curve-78b4d16ce69b?postPublishedType=initial",
    "category": "JAX & Cloud TPUs",
    "badge": "JAX Stack"
  },
  {
    "title": "GitHub Gist",
    "url": "https://gist.github.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Textbooks PDF (I-XII)",
    "url": "https://ncert.nic.in/textbook.php",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Brain Station Advanced - YouTube",
    "url": "https://www.youtube.com/@BrainStationAdvanced",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Copy of LaTeX.ipynb",
    "url": "https://colab.research.google.com/drive/1lc7jk-5oCysnJxGulwqwv6bRLwvRQhAj#scrollTo=jeGAS6fh1Twz",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Calculus Visualized - by Dennis F \u00a0Davis",
    "url": "https://www.youtube.com/watch?v=MO-AExWdl4Q",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "AI-ML learning pathway | Android Developers",
    "url": "https://developer.android.com/courses/pathways/android-ai-overview?hl=en&authuser=1",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://github.com/r-karra/super-book",
    "url": "https://github.com/r-karra/super-book",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "Super Book project prototype:",
    "url": "https://docs.google.com/document/u/0/d/1i8VgsroBTO5eSJEciRtJ5Aak1pSLlY3oMCpa-9eSk4Q/edit",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "AI startup program | Google Cloud",
    "url": "https://cloud.google.com/startup/ai",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "AI Quests - Google",
    "url": "https://research.google/ai-quests/intl/en_gb/resume",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google DeepMind",
    "url": "https://deepmind.google/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Student Researcher Program - Google DeepMind",
    "url": "https://deepmind.google/student-researcher-program/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Teaching AI to See the World More Like Humans Do - Google DeepMind",
    "url": "https://deepmind.google/blog/teaching-ai-to-see-the-world-more-like-we-do/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "https://www.youtube.com/@googledeepmind/courses",
    "url": "https://www.youtube.com/@googledeepmind/courses",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "DeepMind x UCL RL Lecture Series - Introduction to Reinforcement Learning [1/13]",
    "url": "https://www.youtube.com/watch?v=TCCjZe0y4Qc&list=PLqYmG7hTraZDVH599EItlEWsUOsJbAodm",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "TensorFlow",
    "url": "https://www.tensorflow.org/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "A Gentle Introduction to Graph Neural Networks",
    "url": "https://distill.pub/2021/gnn-intro/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Theoretical and Advanced Machine Learning | TensorFlow",
    "url": "https://www.tensorflow.org/resources/learn-ml/theoretical-and-advanced-machine-learning",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Machine Learning Crash Course",
    "url": "https://developers.google.com/machine-learning/crash-course",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Developer Program",
    "url": "https://developers.google.com/program",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Dive into Deep Learning",
    "url": "https://d2l.ai/",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Google Research - YouTube",
    "url": "https://www.youtube.com/@GoogleResearch",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Mapping the Web of Life | Google\u2019s AI for Biodiversity",
    "url": "https://www.youtube.com/watch?v=9xR7858hEYM&list=PL95lT3XlM14SSxItconexZN_Dxpm-ab2_&index=1&t=19s",
    "category": "Save Earth & StrangeWorks",
    "badge": "Planetary AI"
  },
  {
    "title": "Geospatial Reasoning: Demonstration application (October 2025)",
    "url": "https://www.youtube.com/watch?v=kpeI9dbkWho",
    "category": "Save Earth & StrangeWorks",
    "badge": "Planetary AI"
  },
  {
    "title": "Decoding Life on Earth | Google and the Earth Biogenome Project",
    "url": "https://www.youtube.com/watch?v=7WfnTwIM95g",
    "category": "Save Earth & StrangeWorks",
    "badge": "Planetary AI"
  },
  {
    "title": "IBM Quantum Computing | Qiskit",
    "url": "https://www.ibm.com/quantum/qiskit",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "https://github.com/Qiskit/textbook/tree/main/notebooks/ch-demos#",
    "url": "https://github.com/Qiskit/textbook/tree/main/notebooks/ch-demos#",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Qiskit Machine Learning 0.9.0",
    "url": "https://qiskit-community.github.io/qiskit-machine-learning/",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "Advancing Education Using Google AI",
    "url": "https://edu.google.com/intl/ALL_in/ai/education/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google AI Blog",
    "url": "https://ai.googleblog.com/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "DeepMind Blog",
    "url": "https://deepmind.google/blog/",
    "category": "Google DeepMind",
    "badge": "DeepMind"
  },
  {
    "title": "Towards Data Science (Medium)",
    "url": "https://towardsdatascience.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Distill",
    "url": "https://distill.pub/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "The Batch (DeepLearning.AI Newsletter)",
    "url": "https://www.deeplearning.ai/the-batch/",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Google Skills, your new home for AI learning",
    "url": "https://cloud.google.com/blog/topics/training-certifications/google-skills-new-home-AI-learning",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "TFQ",
    "url": "https://www.tensorflow.org/quantum",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "https://console.cloud.google.com/run/overview?project=gen-lang-client-0591126424",
    "url": "https://console.cloud.google.com/run/overview?project=gen-lang-client-0591126424",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://in-en.superbook.cbn.com/",
    "url": "https://in-en.superbook.cbn.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "superbook.cbn.com",
    "url": "http://superbook.cbn.com",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://research.google/",
    "url": "https://research.google/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://quantumai.google/resources",
    "url": "https://quantumai.google/resources",
    "category": "Quantum AI",
    "badge": "Quantum"
  },
  {
    "title": "AB Calculus Manual (Revised 12/2019)",
    "url": "https://mastermathmentor.com/calc/abcalc.ashx",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Flipped Math Calculus",
    "url": "https://calculus.flippedmath.com/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "What is AP Math? \u2013 Blog | College Board",
    "url": "https://blog.collegeboard.org/what-ap-math",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Free Resources to Prepare for AP Exams - College Board Blog",
    "url": "https://blog.collegeboard.org/free-resources-prepare-ap-exams",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Download PDF from College Board",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-and-bc-course-and-exam-description.pdf",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Download PDF from College Board",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-precalculus-course-and-exam-description.pdf",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Khan Academy Precalculus",
    "url": "https://www.khanacademy.org/math/precalculus",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Khan Academy AP Calculus AB",
    "url": "https://www.khanacademy.org/math/ap-calculus-ab",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Khan Academy AP Calculus BC",
    "url": "https://www.khanacademy.org/math/ap-calculus-bc",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "OpenStax Precalculus",
    "url": "https://openstax.org/details/books/precalculus-2e",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "OpenStax Calculus Vol 1",
    "url": "https://openstax.org/details/books/calculus-volume-1",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "OpenStax Calculus Vol 2",
    "url": "https://openstax.org/details/books/calculus-volume-2",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Calculus I (AB)",
    "url": "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Calculus II (BC)",
    "url": "https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "18.01 Single Variable Calculus",
    "url": "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Calculus Visualized - by Dennis F Davis",
    "url": "https://www.youtube.com/watch?v=MO-AExWdl4Q",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "blog.google.com",
    "url": "http://blog.google.com",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "startup.google.com",
    "url": "http://startup.google.com",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Research Careers - Join Our Team",
    "url": "https://research.google/careers/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://developers.google.com/",
    "url": "https://developers.google.com/learn",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Find the AI tool and technology you need - Google Labs",
    "url": "https://labs.google/experiments",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google for Developers - YouTube",
    "url": "https://www.youtube.com/@GoogleDevelopers",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "https://gemini.google.com/app/0a8714a1c0283568",
    "url": "https://gemini.google.com/app/0a8714a1c0283568",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Neural networks: Activation functions | Machine Learning | Google for Developers",
    "url": "https://developers.google.com/machine-learning/crash-course/neural-networks/activation-functions",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "I-Ph.D at TIFR GS",
    "url": "https://www.google.com/search?sourceid=chrome&aep=26",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://github.com/r-karra/",
    "url": "https://github.com/r-karra/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-Coursera",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Mathematics",
    "url": "https://github.com/r-karra/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-Coursera",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "-for-Machine-Learning-and-Data-Science-Specialization-Coursera",
    "url": "https://github.com/r-karra/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-Coursera",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "Embedding projector",
    "url": "https://projector.tensorflow.org/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "Production ML systems | Machine Learning | Google for Developers",
    "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "https://www.deeplearning.ai/resources/",
    "url": "https://www.deeplearning.ai/resources/",
    "category": "Curricula & Foundations",
    "badge": "Curriculum"
  },
  {
    "title": "List of Best Courses After 10th With High Salary [ 2026 ]",
    "url": "https://www.foundit.in/career-advice/top-courses-after-10th/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "From test prep to graduation, our latest AI tools support learners",
    "url": "https://blog.google/products-and-platforms/products/education/ai-tools-programs-educators/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google AI Educator Series - Google for Education",
    "url": "https://edu.google.com/intl/ALL_us/learning-center/google-ai-educator-series/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google Cloud for Researchers",
    "url": "https://cloud.google.com/edu/researchers?e=48754805",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Google partners with Back Market to distribute ChromeOS Flex",
    "url": "https://blog.google/company-news/outreach-and-initiatives/sustainability/chromeos-flex-back-market-kit/",
    "category": "Google Developer & Cloud",
    "badge": "Google AI"
  },
  {
    "title": "Build and deploy a documentation website using Docusaurus 2",
    "url": "https://www.youtube.com/watch?v=I-hYKNgaMmE",
    "category": "Video Lectures",
    "badge": "Video"
  },
  {
    "title": "Dr Federico Tartarini",
    "url": "https://federicotartarini.github.io/",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "FedericoTartarini (Federico Tartarini) \u00b7 GitHub",
    "url": "https://github.com/FedericoTartarini",
    "category": "General Research & Tools",
    "badge": "Resource"
  },
  {
    "title": "https://jbac.onrender.com/",
    "url": "https://jbac.onrender.com/",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "https://jbac-llzt.onrender.com/",
    "url": "https://jbac-llzt.onrender.com/",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "https://github.com/r-karra/jbac.in",
    "url": "https://github.com/r-karra/jbac.in",
    "category": "Deployments & Code",
    "badge": "Deployed"
  },
  {
    "title": "https://www.pythonanywhere.com/user/karra7/",
    "url": "https://www.pythonanywhere.com/user/karra7/",
    "category": "Deployments & Code",
    "badge": "Deployed"
  }
];

export interface LiteratureItem {
  title: string;
  authorOrSource: string;
  url: string;
  type: 'Textbook' | 'Paper' | 'Guide' | 'Curriculum';
  annotation: string;
}

export const LITERATURE_READINGS: LiteratureItem[] = [
  {
    title: 'Hands-On Large Language Models',
    authorOrSource: 'Jay Alammar & Maarten Grootendorst',
    url: 'https://elibrary-dev.nusamandiri.ac.id/assets/fileebook/250153.pdf',
    type: 'Textbook',
    annotation: 'Comprehensive guide covering modern tokenizer architectures, attention mechanism variations, and fine-tuning.'
  },
  {
    title: 'Dive into Deep Learning (D2L.ai)',
    authorOrSource: 'Aston Zhang, Zack C. Lipton, Mu Li, Alex J. Smola',
    url: 'https://d2l.ai/index.html',
    type: 'Textbook',
    annotation: 'Interactive deep learning book with multi-framework implementations including JAX, PyTorch, and NumPy.'
  },
  {
    title: 'Attention Is All You Need',
    authorOrSource: 'Vaswani et al. (Google Brain & Google Research)',
    url: 'https://arxiv.org/abs/1706.03762',
    type: 'Paper',
    annotation: 'The landmark paper introducing the Transformer architecture, scaled dot-product attention, and self-attention.'
  },
  {
    title: 'GraphCast: Learning skillful medium-range global weather forecasting',
    authorOrSource: 'Google DeepMind (Science 2023)',
    url: 'https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/',
    type: 'Paper',
    annotation: 'High-resolution planetary weather prediction using Graph Neural Networks and spherical meshes on Cloud TPUs.'
  },
  {
    title: 'Accurate structure prediction of biomolecular interactions with AlphaFold 3',
    authorOrSource: 'Google DeepMind & Isomorphic Labs (Nature 2024)',
    url: 'https://deepmind.google/technologies/alphafold/alphafold-3/',
    type: 'Paper',
    annotation: 'Unified biomolecular structure prediction across proteins, nucleic acids, and small molecule ligands.'
  },
  {
    title: 'JAX Stack Core Documentation',
    authorOrSource: 'JAX Ecosystem Core Team',
    url: 'https://docs.jaxstack.ai/en/latest/index.html#',
    type: 'Guide',
    annotation: 'Complete technical reference for JAX, Flax, Optax, Orbax, and TPU pod sharding primitives.'
  }
];

export interface ResearchNotebook {
  title: string;
  platform: 'Colab' | 'Kaggle';
  badgeText: '[open with colab]' | '[kaggle kernel link]';
  url: string;
  category: string;
  description: string;
}

export const NOTEBOOKS_AND_MATERIALS: ResearchNotebook[] = [
  {
    title: 'Gemma 2 Inference with JAX and Flax',
    platform: 'Kaggle',
    badgeText: '[kaggle kernel link]',
    url: 'https://www.kaggle.com/code/nilaychauhan/gemma-2-inference-using-jax-and-flax',
    category: 'JAX / Gemma',
    description: 'Cloud TPU benchmarking and zero-overhead inference implementation for Gemma 2 weights.'
  },
  {
    title: 'RecurrentGemma JAX Inference',
    platform: 'Colab',
    badgeText: '[open with colab]',
    url: 'https://ai.google.dev/gemma/docs/recurrentgemma/recurrentgemma_jax_inference',
    category: 'Linear Attention RNN',
    description: 'DeepMind RecurrentGemma Griffin architecture with fixed memory state inference.'
  }
];
