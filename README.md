# Ajay Raj M — Generative AI Developer Portfolio

A modern, minimalist, recruiter-focused personal portfolio website for **Ajay Raj M**, Generative AI Developer at Wipro Gen AI Foundry.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Motion:** Framer Motion (with `prefers-reduced-motion` support)
- **Deployment:** Static SPA configured for Vercel (`vercel.json`)

## Project Structure

```text
├── public/
│   ├── Ajay_Raj_M_Resume.pdf   # Sanitized downloadable resume (no private phone number)
│   ├── favicon.svg             # Custom SVG monogram favicon
│   └── robots.txt
├── src/
│   ├── components/             # Reusable UI & section components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ResearchSection.tsx
│   │   ├── SectionHeading.tsx
│   │   └── SkillsSection.tsx
│   ├── data/                   # Centralized structured TypeScript content
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── index.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── research.ts
│   │   └── skills.ts
│   ├── types/
│   │   └── portfolio.ts        # Shared TypeScript interfaces
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html                  # SEO & Open Graph metadata
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ (tested with Node 26)
- npm 9+

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build & Type Check

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Preview Production Build Locally

```bash
npm run preview
```

## Updating Portfolio Content

All portfolio copy, skills, work experience, project case studies, research publication metrics, and education details live in `src/data/`:

- `src/data/profile.ts`: Name, title, summary, contact email, social URLs, and resume download path.
- `src/data/skills.ts`: Categorized technical skills.
- `src/data/experience.ts`: Industry experience and workstreams.
- `src/data/projects.ts`: Featured projects and modal case studies.
- `src/data/research.ts`: Springer Nature publication details and historical backtesting metrics.
- `src/data/education.ts`: Academic degrees and highlights.

## Deployment (Vercel)

This project is ready for zero-config static deployment on Vercel via `vercel.json`:

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Vercel automatically uses `npm run build` and serves `dist/`.
