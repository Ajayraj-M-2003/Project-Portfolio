import type { ProjectCaseStudy } from '../types/portfolio';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'remote-endpoint-support',
    title: 'AI-Assisted Remote Endpoint Support Platform',
    shortTitle: 'Remote Endpoint Support AI',
    category: 'Enterprise GenAI & RAG',
    context: 'Wipro — Gen AI Foundry',
    period: 'Apr 2025 – Present',
    summary:
      'Remote endpoint support platform combining Intel EMA device management APIs, telemetry-grounded RAG assistance, and multilingual screen translation overlays.',
    problem:
      'Support engineers troubleshooting remote enterprise endpoints often switch between separate device-management consoles, telemetry logs, and translation tools while losing session context across handoffs.',
    solution:
      'Developed unified remote support workflows integrating Intel EMA REST APIs with a RAG-powered assistant grounded in endpoint telemetry and device metadata, paired with multilingual screen translation overlays and persistent session summaries.',
    contributions: [
      'Developed remote support workflows integrating Intel EMA REST APIs for endpoint control, remote troubleshooting, engineer–employee communication, and file transfer.',
      'Integrated a RAG-powered assistant with endpoint telemetry and device information to generate contextual system summaries and troubleshooting guidance.',
      'Implemented multilingual screen translation overlays and session logging with persistent device insights and interaction summaries for continuity across support sessions.',
    ],
    techStack: [
      'Python',
      'RAG',
      'Intel EMA REST APIs',
      'LLMs',
      'REST APIs',
      'Session Logging',
    ],
    outcomes: [
      'Unified endpoint control, troubleshooting communication, and file transfer within a single remote support workflow.',
      'Grounded LLM troubleshooting guidance in live endpoint telemetry and device context.',
      'Preserved device insights and interaction summaries across support sessions for continuity.',
    ],
  },
  {
    id: 'document-aware-rag-platform',
    title: 'AI Knowledge Assistant and Document-Aware RAG Platform',
    shortTitle: 'Document-Aware RAG Platform',
    category: 'Enterprise RAG Architecture',
    context: 'Wipro — Gen AI Foundry',
    period: 'Apr 2025 – Present',
    summary:
      'End-to-end document retrieval and conversational QA platform built on Django/DRF, ChromaDB semantic search, cross-encoder reranking, and locally hosted Ollama LLMs.',
    problem:
      'Organizations working with dense PDF and DOCX repositories require accurate, grounded answers, flexible local LLM hosting, and clean API controls for multi-turn conversation management.',
    solution:
      'Engineered a Django and Django REST Framework backend driving an end-to-end RAG pipeline with semantic embeddings, ChromaDB vector search, cross-encoder reranking, local LLM inference via Ollama, and Azure Blob Storage.',
    contributions: [
      'Developed a Django/DRF backend for PDF and DOCX ingestion, conversational querying, and LLM-powered information retrieval.',
      'Built an end-to-end RAG pipeline using semantic embeddings, ChromaDB vector search, cross-encoder reranking, and locally hosted LLMs through Ollama.',
      'Integrated Azure Blob Storage and developed REST APIs for conversation management, model selection, and system configuration.',
    ],
    techStack: [
      'Django',
      'Django REST Framework',
      'ChromaDB',
      'Ollama',
      'Sentence Transformers',
      'Cross-Encoder Reranking',
      'Azure Blob Storage',
      'REST APIs',
    ],
    outcomes: [
      'Automated ingestion and indexing for enterprise PDF and DOCX documents.',
      'Improved retrieval precision using two-stage vector search plus cross-encoder reranking.',
      'Enabled configurable local LLM selection and persistent multi-turn conversations via REST APIs.',
    ],
  },
  {
    id: 'conversational-quality-analytics',
    title: 'AI-Powered Conversational Quality Analytics Platform',
    shortTitle: 'Conversational Quality Analytics',
    category: 'Speech AI & Multimodal Analytics',
    context: 'Wipro — Gen AI Foundry',
    period: 'Apr 2025 – Present',
    summary:
      'Dual live-call assistance and automated post-call QA platform combining speech transcription, acoustic analysis, RoBERTa emotion detection, Phi LLM RAG, and PDF reporting.',
    problem:
      'Service desk teams needed real-time guidance during live support calls alongside consistent, multi-dimensional post-call quality evaluation covering emotion, sentiment, and SOP compliance.',
    solution:
      'Built live-call workflows integrating speech transcription, acoustic feature analysis, RoBERTa emotion classification, and RAG-enabled Phi LLM assistance, followed by automated post-call scoring and per-call PDF report generation.',
    contributions: [
      'Built live-call workflows combining speech transcription, acoustic feature analysis, RoBERTa emotion classification, and RAG-enabled Phi LLM assistance for service desk calls.',
      'Implemented automated post-call analytics combining tonal analysis, sentiment, valence–arousal–dominance analysis, LLM summarization, SOP adherence evaluation, and composite scoring to generate per-call PDF reports.',
    ],
    techStack: [
      'Python',
      'Speech Transcription',
      'RoBERTa',
      'Phi LLM',
      'RAG',
      'Acoustic & VAD Analysis',
      'Sentiment Analysis',
      'PDF Generation',
    ],
    outcomes: [
      'Delivered real-time RAG-backed Phi LLM assistance and emotion awareness during live service desk calls.',
      'Automated multi-signal post-call evaluation (tonal, sentiment, VAD, summary, SOP adherence, composite score) into per-call PDF reports.',
    ],
  },
  {
    id: 'conversational-ai-agents-tryliva',
    title: 'Domain-Specific Conversational AI Agents',
    shortTitle: 'Conversational Agents (Try.Liva)',
    category: 'Agentic & Conversational AI',
    context: 'Try.Liva · Wipro — Gen AI Foundry',
    period: 'Apr 2025 – Present',
    summary:
      'Structured multi-step conversational AI agents for telecom support, healthcare assistance, and service appointments with OTP verification and context-aware dialogue flows.',
    problem:
      'Domain service workflows such as telecom troubleshooting, healthcare inquiries, and appointment booking require deterministic verification steps and structured dialogue state rather than open-ended chat.',
    solution:
      'Designed domain-specific conversational AI agents (Try.Liva) using structured prompt templates, multi-step state transitions, OTP verification flows, and context-aware response generation.',
    contributions: [
      'Designed domain-specific conversational agents for telecom support, healthcare assistance, and service appointments.',
      'Implemented structured prompts, multi-step dialogue flows, OTP verification, and context-aware responses across domain journeys.',
    ],
    techStack: [
      'AI Agents',
      'Prompt Engineering',
      'LLMs',
      'Multi-Step Dialogue Flows',
      'OTP Verification',
    ],
    outcomes: [
      'Delivered guided, verification-aware conversational workflows across telecom, healthcare, and service appointment domains.',
      'Maintained dialogue context across multi-step user interactions and structured prompt constraints.',
    ],
  },
  {
    id: 'risk-aware-portfolio-optimization',
    title: 'Risk-Aware Stock Portfolio Optimization',
    shortTitle: 'PPO Portfolio Optimization',
    category: 'Reinforcement Learning & Research',
    context: 'Peer-Reviewed Research · Springer Nature',
    period: 'Published May 2026',
    summary:
      'PPO-based reinforcement learning portfolio allocator with a custom Gym environment and risk-aware Sharpe ratio reward function, published in Computational Economics.',
    problem:
      'Conventional portfolio allocation policies that optimize solely for raw returns can incur severe drawdowns and unstable risk-adjusted performance across shifting equity regimes.',
    solution:
      'Built a Proximal Policy Optimization (PPO) portfolio allocator using Stable-Baselines3 and a custom Gym environment incorporating a risk-aware reward formulation combining portfolio returns and the Sharpe ratio.',
    contributions: [
      'Built a PPO-based portfolio allocator using Stable-Baselines3, a custom Gym environment, and a risk-aware reward function combining returns and the Sharpe ratio.',
      'Trained on 40 S&P 500 stocks (2015–2023) for 100,000 timesteps and evaluated in out-of-sample historical backtesting starting January 2024.',
      'Co-authored the peer-reviewed research paper published in Computational Economics (Springer Nature, May 2026).',
    ],
    techStack: [
      'Python',
      'PyTorch',
      'Reinforcement Learning (PPO)',
      'Stable-Baselines3',
      'Custom Gym Environment',
    ],
    outcomes: [
      '38.64% cumulative return in historical backtesting (from Jan 2024)',
      '2.10 Sharpe ratio in historical backtesting',
      '6.26% maximum drawdown in historical backtesting',
      'Published in Computational Economics, Springer Nature (DOI: 10.1007/s10614-026-11355-2)',
    ],
    externalLink: {
      label: 'View Springer Nature Publication (DOI)',
      url: 'https://doi.org/10.1007/s10614-026-11355-2',
    },
    disclaimer:
      'Performance metrics above represent historical backtesting results (from Jan 2024 on models trained over 2015–2023 data) and are not live trading returns.',
  },
  {
    id: 'genai-invoice-extraction',
    title: 'GenAI-Powered Invoice Data Extraction and Management System',
    shortTitle: 'GenAI Invoice Extraction',
    category: 'Document AI & Full-Stack',
    context: 'Selected Full-Stack AI Project',
    period: 'Selected Project',
    summary:
      'Full-stack invoice processing system pairing OCR and LLM structured extraction with FastAPI backend services, PostgreSQL storage, and a React review UI.',
    problem:
      'Diverse invoice templates make rigid rule-based parsers brittle, creating manual review bottlenecks when extracting line items, totals, and vendor metadata into relational databases.',
    solution:
      'Built an end-to-end invoice processing pipeline combining OCR text extraction with LLM-driven structured schema extraction, backed by FastAPI REST services, PostgreSQL persistence, and a React review interface.',
    contributions: [
      'Built OCR + LLM extraction pipeline to convert unstructured invoice documents into structured, validated records.',
      'Developed FastAPI backend services and PostgreSQL database persistence for extracted invoice data.',
      'Created a React review interface enabling inspection and verification of extracted invoice fields.',
    ],
    techStack: ['Python', 'OCR', 'LLMs', 'FastAPI', 'PostgreSQL', 'React.js'],
    outcomes: [
      'Automated structured extraction across varied invoice layouts using OCR + LLM parsing.',
      'Provided human-in-the-loop verification through a dedicated React review interface backed by PostgreSQL.',
    ],
  },
];
