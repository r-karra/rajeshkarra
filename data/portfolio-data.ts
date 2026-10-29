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
  status: 'Active' | 'Prototype' | 'Research' | 'Deployed';
}

export interface ResearchNotebook {
  title: string;
  platform: 'Colab' | 'Kaggle';
  badgeText: '[open with colab]' | '[kaggle kernel link]';
  url: string;
  category: string;
  description: string;
}

export interface LiteratureItem {
  title: string;
  authorOrSource: string;
  url: string;
  type: 'Textbook' | 'Paper' | 'Guide' | 'Curriculum';
  annotation: string;
}

export interface MediaEntry {
  title: string;
  channelOrSeries: string;
  url: string;
  timestamp?: string;
  category: 'Deep Learning & JAX' | 'Quantum AI' | 'Mathematics' | 'Speech & Phonetics';
}

export const PROFILE_DATA = {
  name: 'Rajesh Karra',
  title: 'AI Researcher & High-Performance Computing Engineer',
  focus: 'JAX Ecosystem · Large Language Models · Quantum Computing · Mathematical Foundations',
  bio: 'Advancing research in scalable LLM pretraining with JAX/Flax, Quantum Machine Learning algorithms, and mathematical proof-oriented computer science. Actively preparing for advanced research initiatives (Google DeepMind, TIFR CS/LIDS, Qiskit Advocate Program).',
  location: 'Hyderabad, India',
  email: 'r.karra.research@gmail.com',
  links: {
    github: 'https://github.com/r-karra',
    kaggle: 'https://www.kaggle.com/rajeshkumarkarra',
    huggingface: 'https://huggingface.co/r-karra',
    medium: 'https://medium.com/@rajeshkarra.ai',
    googleDeveloper: 'https://developers.google.com/profile/u/rajesh_karra',
    bearBlog: 'https://rkarra.bearblog.dev/',
  },
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
    category: 'Quantum Computing & QML',
    description: 'NISQ simulation, quantum circuit algorithms, and hybrid classical-quantum networks.',
    skills: ['Google Cirq', 'TensorFlow Quantum (TFQ)', 'IBM Qiskit v2.X', 'PennyLane', 'OpenFermion', 'Quantum Error Correction (AlphaQubit)', 'VQE & QCNNs'],
  },
  {
    category: 'Foundational Programming & Mathematics',
    description: 'Core languages and proof-oriented mathematical rigor.',
    skills: ['Python 3 (Functional & Metaprogramming)', 'C++', 'Lean 4 (Theorem Proving)', 'Linear Algebra (Spectral Theory)', 'Real Analysis', 'Discrete Mathematics'],
  },
  {
    category: 'Scientific AI & Domain Models',
    description: 'Google Research and DeepMind initiative technologies for nature and biology.',
    skills: ['Co-Scientist (Multi-Agent)', 'AlphaFold 3', 'GraphCast', 'WeatherBench 2', 'ProtNLM', 'Geospatial Reasoning'],
  },
];

export const ACTIVE_PROJECTS: ProjectRepo[] = [
  {
    title: 'Super Book / Bible LLM Multi-Agent Co-Pilot',
    description: 'An AI-driven spiritual and life guidance multi-agent prototype built on the Google Research and DeepMind ecosystem. Features contextual knowledge grounding using open-source texts, video transcript synthesis, and proactive ambient assistance with quantum-cryptographic security guarantees.',
    repoUrl: 'https://github.com/r-karra/super-book',
    demoUrl: 'https://docs.google.com/document/u/0/d/1i8VgsroBTO5eSJEciRtJ5Aak1pSLlY3oMCpa-9eSk4Q/edit',
    tags: ['Google Research Stack', 'LLMs', 'Multi-Agent', 'JAX', 'Prototypes'],
    status: 'Prototype',
  },
  {
    title: 'Hands-On-Large-Language-Models',
    description: 'Comprehensive codebase mirroring state-of-the-art LLM development, exploring tokenization, multi-head attention blocks, parameter-efficient fine-tuning (LoRA), and JAX pretraining pipelines.',
    repoUrl: 'https://github.com/r-karra/Hands-On-Large-Language-Models',
    tags: ['LLMs', 'PyTorch', 'Transformers', 'Fine-Tuning'],
    status: 'Active',
  },
  {
    title: 'Mathematics for Machine Learning & Data Science',
    description: 'Rigorous mathematical implementations covering vector spaces, singular value decomposition, multivariate Jacobians/Hessians, and Bayesian optimization formulations.',
    repoUrl: 'https://github.com/r-karra/Mathematics-for-Machine-Learning-and-Data-Science-Specialization-Coursera',
    tags: ['Linear Algebra', 'Multivariate Calculus', 'Probability', 'NumPy'],
    status: 'Active',
  },
  {
    title: 'LLM Internals from Scratch',
    description: 'Foundational implementations deconstructing neural backpropagation, micrograd mechanics, matrix attention operations, and KV cache mechanics.',
    repoUrl: 'https://github.com/r-karra/llm-internals',
    tags: ['Neural Networks', 'Micrograd', 'Attention Mechanisms', 'Python'],
    status: 'Research',
  },
  {
    title: 'JBAC Portal & Student Community Platform',
    description: 'Production web application deployed across cloud container runtimes serving academic community workflows, student resources, and interactive tools.',
    repoUrl: 'https://github.com/r-karra/jbac.in',
    demoUrl: 'https://jbac.onrender.com/',
    tags: ['Web Application', 'Render Deployment', 'Fullstack'],
    status: 'Deployed',
  },
  {
    title: 'AWS Accelerated Computer Vision Labs',
    description: 'Practical implementations of accelerated computer vision models, convolution backbones, and deployment pipelines using modern ML frameworks.',
    repoUrl: 'https://github.com/r-karra/aws-machine-learning-university-accelerated-cv',
    tags: ['Computer Vision', 'Deep Learning', 'PyTorch'],
    status: 'Active',
  },
  {
    title: 'KnowledgeFace / Scholar AI Platform',
    description: 'Prototype for a unified scientific research ecosystem bringing together interactive notebooks, dataset registries, reproducible ML benchmarks, and structured theory notes.',
    demoUrl: 'https://knowledgeface-848639819870.us-west1.run.app/',
    tags: ['Cloud Run', 'Benchmark Platform', 'Kaggle-like UX'],
    status: 'Prototype',
  },
  {
    title: 'fsociety Tools & Security Frameworks',
    description: 'Exploration repository for low-level systems programming, developer utilities, and Linux environment configurations.',
    repoUrl: 'https://github.com/rajeshkumarkarra/fsociety',
    tags: ['Systems', 'Security', 'Linux'],
    status: 'Active',
  },
];

export const NOTEBOOKS_AND_MATERIALS: ResearchNotebook[] = [
  {
    title: 'Mathematics for AI Deep Dive',
    platform: 'Colab',
    badgeText: '[open with colab]',
    url: 'https://colab.research.google.com/drive/1bfFIjxqw3T5hh1lzc8dKAj8MNpOiLQzu#scrollTo=22cb49d4',
    category: 'Mathematics',
    description: 'Notebook detailing vector algebra, matrix decomposition, eigenvalues, and continuous probability functions.',
  },
  {
    title: 'LaTeX Foundations & Scientific Typesetting',
    platform: 'Colab',
    badgeText: '[open with colab]',
    url: 'https://colab.research.google.com/drive/1lc7jk-5oCysnJxGulwqwv6bRLwvRQhAj#scrollTo=jeGAS6fh1Twz',
    category: 'Scientific Computing',
    description: 'Notebook environment for mathematical typesetting, formula proofs, and paper drafting workflows.',
  },
  {
    title: 'Gemma 2 Inference with JAX and Flax',
    platform: 'Kaggle',
    badgeText: '[kaggle kernel link]',
    url: 'https://www.kaggle.com/code/nilaychauhan/gemma-2-inference-using-jax-and-flax',
    category: 'JAX & LLMs',
    description: 'Hardware-accelerated inference of Google DeepMind Gemma 2 using JAX, Flax parameter containers, and XLA.',
  },
  {
    title: 'JAX Guided Curriculum & Exercises',
    platform: 'Kaggle',
    badgeText: '[kaggle kernel link]',
    url: 'https://www.kaggle.com/learn-guide/jax',
    category: 'JAX Ecosystem',
    description: 'Hands-on guide to pure functions, jax.jit, jax.grad autodiff, and vectorization via jax.vmap.',
  },
  {
    title: 'Hello ML World (Deep Learning Intro)',
    platform: 'Colab',
    badgeText: '[open with colab]',
    url: 'https://colab.research.google.com/github/lmoroney/mlday-tokyo/blob/master/Lab1-Hello-ML-World.ipynb',
    category: 'Foundations',
    description: 'Introductory neural network fitting linear relations and basic backpropagation fundamentals.',
  },
  {
    title: 'Machine Learning Algorithms for Beginners',
    platform: 'Colab',
    badgeText: '[open with colab]',
    url: 'https://colab.research.google.com/github/towardsai/tutorials/blob/master/machine_learning_algorithms_for_beginners/machine_learning_algorithms_for_beginners.ipynb',
    category: 'Foundations',
    description: 'Practical step-by-step algorithms implemented from scratch in Python and NumPy.',
  },
  {
    title: 'MNIST Classification with TensorFlow Quantum (TFQ)',
    platform: 'Colab',
    badgeText: '[open with colab]',
    url: 'https://www.tensorflow.org/quantum/tutorials/mnist',
    category: 'Quantum AI',
    description: 'Hybrid quantum-classical convolutional network classifying downscaled MNIST images with parameterized quantum circuits.',
  },
];

export const LITERATURE_READINGS: LiteratureItem[] = [
  {
    title: 'Hands-On Large Language Models',
    authorOrSource: 'Jay Alammar & Maarten Grootendorst',
    url: 'https://elibrary-dev.nusamandiri.ac.id/assets/fileebook/250153.pdf',
    type: 'Textbook',
    annotation: 'Essential guide on modern Transformer architectures, prompt mechanics, token embeddings, and real-world deployment.',
  },
  {
    title: 'Dive into Deep Learning (D2L.ai)',
    authorOrSource: 'Aston Zhang, Zachary C. Lipton, Mu Li, Alexander J. Smola',
    url: 'https://d2l.ai/index.html',
    type: 'Textbook',
    annotation: 'Comprehensive textbook integrating math, architecture diagrams, and multi-framework code (PyTorch/JAX).',
  },
  {
    title: 'Deep Learning',
    authorOrSource: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville (MIT Press)',
    url: 'https://www.deeplearningbook.org/',
    type: 'Textbook',
    annotation: 'The definitive theoretical foundation for modern neural networks and optimization theory.',
  },
  {
    title: 'Gemma: Open Models Based on Gemini Technology',
    authorOrSource: 'Google DeepMind Technical Report',
    url: 'https://storage.googleapis.com/deepmind-media/gemma/gemma-report.pdf',
    type: 'Paper',
    annotation: 'Architecture specification detailing Rotary Position Embeddings (RoPE), GeGLU activations, and scaling curves.',
  },
  {
    title: 'Accurate Structure Prediction of Biomolecular Interactions with AlphaFold 3',
    authorOrSource: 'Google DeepMind (Nature 2024)',
    url: 'https://www.nature.com/articles/s41586-024-07487-w',
    type: 'Paper',
    annotation: 'Landmark research applying diffusion architecture to predict structure across proteins, DNA, RNA, and ligands.',
  },
  {
    title: 'Co-Scientist: A Multi-Agent AI Partner to Accelerate Research',
    authorOrSource: 'Google DeepMind',
    url: 'https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/',
    type: 'Paper',
    annotation: 'Exploration of LLM multi-agent systems formulating hypotheses, designing protocols, and verifying scientific claims.',
  },
  {
    title: 'The Illustrated Transformer',
    authorOrSource: 'Jay Alammar',
    url: 'https://jalammar.github.io/illustrated-transformer/',
    type: 'Guide',
    annotation: 'The gold standard visual breakdown of self-attention mechanisms and encoder-decoder dynamics.',
  },
  {
    title: 'Quantum Computation and Quantum Information',
    authorOrSource: 'Michael A. Nielsen & Isaac L. Chuang',
    url: 'https://profmcruz.wordpress.com/wp-content/uploads/2017/08/quantum-computation-and-quantum-information-nielsen-chuang.pdf',
    type: 'Textbook',
    annotation: 'The seminal textbook for quantum gates, circuits, entanglement, and quantum error correction theory.',
  },
  {
    title: 'Building Production AI on Cloud TPUs with JAX',
    authorOrSource: 'Google Cloud & Google Developers Blog',
    url: 'https://developers.googleblog.com/building-production-ai-on-google-cloud-tpus-with-jax/',
    type: 'Guide',
    annotation: 'Practical architecture blueprint for multi-host TPU training using JAX and Orbax checkpointing.',
  },
  {
    title: '5 Fun Papers That Explain LLMs Clearly',
    authorOrSource: 'KDnuggets',
    url: 'https://www.kdnuggets.com/5-fun-papers-that-explain-llms-clearly',
    type: 'Guide',
    annotation: 'Accessible curated papers on emergent capabilities, attention bottlenecks, and in-context learning.',
  },
];

export const MEDIA_LECTURES: MediaEntry[] = [
  {
    title: 'Building micrograd & The Spelled-Out Intro to Neural Networks',
    channelOrSeries: 'Andrej Karpathy (Neural Networks: Zero to Hero)',
    url: 'https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&index=21&t=444s',
    timestamp: '7:24 (t=444s)',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'Complete Neural Networks: Zero to Hero Course Playlist',
    channelOrSeries: 'Andrej Karpathy',
    url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'MIT 6.S191: Introduction to Deep Learning (Lecture 1)',
    channelOrSeries: 'MIT OpenCourseWare / Alexander Amini',
    url: 'https://www.youtube.com/watch?v=6FkRvTtUc-o&list=PLUl4u3cNGP63URZnh5iqBzDTDYPUTQT-8',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'Stanford CS224R: Deep Reinforcement Learning (Class Intro)',
    channelOrSeries: 'Stanford Online / Sergey Levine',
    url: 'https://www.youtube.com/watch?v=EvHRQhMX7_w',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'DeepMind x UCL: Introduction to Reinforcement Learning (1/13)',
    channelOrSeries: 'Google DeepMind / Hado van Hasselt',
    url: 'https://www.youtube.com/watch?v=TCCjZe0y4Qc&list=PLqYmG7hTraZDVH599EItlEWsUOsJbAodm',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'You Can Actually Use A Quantum Computer Right Now',
    channelOrSeries: 'IBM Qiskit Series Trailer',
    url: 'https://www.youtube.com/watch?v=QofhzGh_M0E&list=PLOFEBzvs-VvoRwhofpHlBqMnR1ldAmKZJ&index=1',
    category: 'Quantum AI',
  },
  {
    title: 'Understanding Quantum Information & Computation',
    channelOrSeries: 'John Watrous / Qiskit',
    url: 'https://www.youtube.com/playlist?list=PLOFEBzvs-VvqKKMXX4vbi4EB1uaErFMSO',
    category: 'Quantum AI',
  },
  {
    title: 'Calculus Visualized: Derivatives and Integrals Geometrically',
    channelOrSeries: 'Dennis F Davis',
    url: 'https://www.youtube.com/watch?v=MO-AExWdl4Q',
    category: 'Mathematics',
  },
  {
    title: 'Accelerated Computer Vision & Deep Learning (Lecture 2)',
    channelOrSeries: 'Amazon MLU-Explain Series',
    url: 'https://www.youtube.com/watch?v=mwNtbKh39SA&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=2',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'Mapping the Web of Life | Google AI for Biodiversity',
    channelOrSeries: 'Google Research',
    url: 'https://www.youtube.com/watch?v=9xR7858hEYM&list=PL95lT3XlM14SSxItconexZN_Dxpm-ab2_&index=1&t=19s',
    timestamp: '0:19 (t=19s)',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'Decoding Life on Earth | Earth BioGenome Project',
    channelOrSeries: 'Google Research',
    url: 'https://www.youtube.com/watch?v=7WfnTwIM95g',
    category: 'Deep Learning & JAX',
  },
  {
    title: 'How to Understand Fast Spoken English & American Phonetics',
    channelOrSeries: 'English with Yuliya',
    url: 'https://www.youtube.com/watch?v=qVJcMcvqjiE&list=PLWzNzAbF7DK3U-B8GIn7eA0a5U2H8aL6i',
    category: 'Speech & Phonetics',
  },
];

