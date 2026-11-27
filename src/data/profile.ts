import type { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Ajay Raj M',
  roleTitle: 'Generative AI Developer',
  headlineTag: 'Wipro Gen AI Foundry · 1.5+ Years Experience',
  location: 'Coimbatore, India',
  experienceYears: '1.5+ Years',
  currentOrganization: 'Wipro — Gen AI Foundry',
  email: 'ajayrajmarangat@gmail.com',
  githubUrl: 'https://github.com/Ajayraj-M-2003',
  linkedinUrl: 'https://linkedin.com/in/ajayraj-m-721170252',
  resumeUrl: '/Ajay_Raj_M_Resume.pdf',
  resumeFileName: 'Ajay_Raj_M_Resume.pdf',
  heroIntro:
    'Generative AI Developer with 1.5+ years of experience at Wipro building enterprise LLM applications, Retrieval-Augmented Generation (RAG) pipelines, conversational AI systems, and AI automation workflows. Co-author of a published reinforcement learning paper in Computational Economics (Springer Nature).',
  targetRoles: [
    'Generative AI Engineer',
    'Applied AI Engineer',
    'LLM / RAG Engineer',
    'Agentic AI Engineer',
    'Machine Learning Engineer',
    'AI Software Developer',
  ],
  aboutSummary: [
    'I am a Generative AI Developer at Wipro Gen AI Foundry (Coimbatore, India), where I design and ship production-oriented enterprise AI applications across document retrieval, remote endpoint support, speech and conversational quality analytics, and domain-specific conversational agents.',
    'My core technical focus spans LLM integration, semantic retrieval with vector databases (ChromaDB), cross-encoder reranking, local LLM hosting via Ollama, speech-to-text and emotion/sentiment pipelines (Whisper, Azure Speech-to-Text, Silero VAD, RoBERTa), and backend API engineering with FastAPI, Django, Django REST Framework, and Flask alongside React.js and Vite.js interfaces.',
    'Alongside enterprise engineering, I hold a B.Tech in Computer Science and Engineering from Amrita Vishwa Vidyapeetham (2021–2025), completed a software development internship at the National Dairy Development Board (NDDB), and co-authored peer-reviewed reinforcement learning research on risk-adjusted portfolio optimization published in Computational Economics (Springer Nature).',
  ],
  coreFocusAreas: [
    {
      title: 'Enterprise RAG & Retrieval',
      description:
        'Document ingestion pipelines (PDF/DOCX), semantic embeddings, ChromaDB vector search, cross-encoder reranking, and local or cloud LLM orchestration.',
    },
    {
      title: 'Conversational & Agentic AI',
      description:
        'Multi-step dialogue flows, structured prompt engineering, OTP verification, and domain-specific agents across telecom, healthcare, and service support.',
    },
    {
      title: 'Speech & Multimodal Analytics',
      description:
        'Live-call and post-call workflows combining transcription, Silero VAD, acoustic features, RoBERTa emotion classification, VAD scoring, and SOP adherence.',
    },
    {
      title: 'Full-Stack AI Engineering',
      description:
        'Production REST APIs and review interfaces built with Python, FastAPI, Django/DRF, PostgreSQL, Azure Blob Storage, and React.js.',
    },
  ],
};
