import type { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'wipro-gen-ai-foundry',
    company: 'Wipro',
    role: 'Generative AI Developer – Gen AI Foundry',
    location: 'Coimbatore, India',
    period: 'Apr 2025 – Present',
    isCurrent: true,
    summary:
      'Building enterprise Generative AI platforms across remote IT support, document-aware RAG knowledge retrieval, real-time and post-call conversational quality analytics, and domain-specific conversational AI agents.',
    workstreams: [
      {
        name: 'AI-Assisted Remote Endpoint Support Platform',
        highlights: [
          'Developed remote support workflows integrating Intel EMA REST APIs for endpoint control, remote troubleshooting, engineer–employee communication, and file transfer.',
          'Integrated a RAG-powered assistant with endpoint telemetry and device information to generate contextual system summaries and troubleshooting guidance.',
          'Implemented multilingual screen translation overlays and session logging with persistent device insights and interaction summaries for continuity across support sessions.',
        ],
        technologies: ['Python', 'RAG', 'Intel EMA REST APIs', 'LLMs', 'REST APIs'],
      },
      {
        name: 'AI Knowledge Assistant & Document-Aware RAG Platform',
        highlights: [
          'Developed a Django/DRF backend for PDF and DOCX ingestion, conversational querying, and LLM-powered information retrieval.',
          'Built an end-to-end RAG pipeline using semantic embeddings, ChromaDB vector search, cross-encoder reranking, and locally hosted LLMs through Ollama.',
          'Integrated Azure Blob Storage and developed REST APIs for conversation management, model selection, and system configuration.',
        ],
        technologies: [
          'Django',
          'Django REST Framework',
          'ChromaDB',
          'Ollama',
          'Sentence Transformers',
          'Cross-Encoder Reranking',
          'Azure Blob Storage',
        ],
      },
      {
        name: 'AI-Powered Conversational Quality Analytics Platform',
        highlights: [
          'Built live-call workflows combining speech transcription, acoustic feature analysis, RoBERTa emotion classification, and RAG-enabled Phi LLM assistance for service desk calls.',
          'Implemented automated post-call analytics combining tonal analysis, sentiment, valence–arousal–dominance analysis, LLM summarization, SOP adherence evaluation, and composite scoring to generate per-call PDF reports.',
        ],
        technologies: [
          'Speech Transcription',
          'RoBERTa',
          'Phi LLM',
          'RAG',
          'Sentiment & VAD Analysis',
          'PDF Reporting',
        ],
      },
      {
        name: 'Conversational AI Agents – Try.Liva',
        highlights: [
          'Designed domain-specific conversational agents for telecom support, healthcare assistance, and service appointments, implementing structured prompts, multi-step dialogue flows, OTP verification, and context-aware responses.',
        ],
        technologies: ['AI Agents', 'Prompt Engineering', 'LLMs', 'Multi-Step Dialogue Flows'],
      },
    ],
  },
  {
    id: 'nddb-internship',
    company: 'National Dairy Development Board (NDDB)',
    role: 'Software Developer Intern',
    location: 'Gujarat, India',
    period: 'Jul 2023',
    isCurrent: false,
    summary:
      'Customized enterprise ERP workflows and data models on the Frappe/ERPNext stack to support internal operational reporting and business processes.',
    highlights: [
      'Customized ERPNext applications using Frappe, Python, JavaScript, and MariaDB; implemented custom DocTypes, client/server scripts, API interactions, and business reports.',
    ],
    technologies: ['Frappe', 'ERPNext', 'Python', 'JavaScript', 'MariaDB', 'REST APIs'],
  },
];
