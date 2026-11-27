import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'genai-rag-nlp',
    title: 'GenAI, RAG & NLP',
    description: 'Retrieval pipelines, LLM orchestration, agent workflows, and semantic ranking.',
    skills: [
      'LLM Integration',
      'RAG',
      'LangChain',
      'AI Agents',
      'Prompt Engineering',
      'Ollama',
      'ChromaDB',
      'Sentence Transformers',
      'Cross-Encoder Reranking',
      'Hugging Face Transformers',
    ],
  },
  {
    id: 'ml-dl',
    title: 'Machine Learning & Deep Learning',
    description: 'Neural architectures, supervised modeling, and policy-gradient reinforcement learning.',
    skills: [
      'PyTorch',
      'Supervised Learning',
      'Neural Networks',
      'Reinforcement Learning (PPO)',
    ],
  },
  {
    id: 'speech-ai',
    title: 'Speech AI & Audio Analytics',
    description: 'Real-time transcription, voice activity detection, and affect classification.',
    skills: [
      'Whisper',
      'Azure Speech-to-Text',
      'Silero VAD',
      'RoBERTa',
      'Sentiment Analysis',
    ],
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages used for AI pipelines, backend services, and systems work.',
    skills: ['Python', 'JavaScript', 'C', 'C++'],
  },
  {
    id: 'backend-frontend',
    title: 'Backend & Frontend Engineering',
    description: 'Service APIs, enterprise web backends, and interactive review interfaces.',
    skills: [
      'FastAPI',
      'Django',
      'Django REST Framework',
      'Flask',
      'REST APIs',
      'React.js',
      'Vite.js',
    ],
  },
  {
    id: 'databases-cloud',
    title: 'Databases, Cloud & Tooling',
    description: 'Relational and document storage, object storage, and deployment foundations.',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'MariaDB',
      'Azure Blob Storage',
      'Git',
      'AWS (basic)',
      'Docker (basic)',
    ],
  },
];
