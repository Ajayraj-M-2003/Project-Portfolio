import { useMemo, useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { projectsData } from '../data';
import type { ProjectCaseStudy } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from './SectionHeading';

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'genai', label: 'GenAI & RAG' },
  { id: 'speech-agents', label: 'Speech & Agents' },
  { id: 'ml-fullstack', label: 'RL & Full-Stack' },
] as const;

type FilterId = (typeof filterOptions)[number]['id'];

function matchesFilter(project: ProjectCaseStudy, filter: FilterId): boolean {
  if (filter === 'all') return true;
  if (filter === 'genai') {
    return (
      project.id === 'remote-endpoint-support' ||
      project.id === 'document-aware-rag-platform'
    );
  }
  if (filter === 'speech-agents') {
    return (
      project.id === 'conversational-quality-analytics' ||
      project.id === 'conversational-ai-agents-tryliva'
    );
  }
  return (
    project.id === 'risk-aware-portfolio-optimization' ||
    project.id === 'genai-invoice-extraction'
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const visibleProjects = useMemo(
    () => projectsData.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter]
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-slate-800/80 bg-[#080f1e]/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="projects-heading"
            eyebrow="04 // Featured Projects"
            title="Selected systems & case studies"
            description="Enterprise Generative AI platforms, conversational agents, document AI pipelines, and peer-reviewed reinforcement learning work. Select any project to inspect its full case study."
          />

          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by domain"
          >
            {filterOptions.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveFilter(option.id)}
                  aria-pressed={isSelected}
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                    isSelected
                      ? 'border-cyan-500/60 bg-cyan-500/15 text-cyan-300'
                      : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-slate-100'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/65 p-6 transition-colors hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-mono text-cyan-400">
                    <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-50">
                  {project.title}
                </h3>

                <p className="mt-1 font-mono text-xs text-slate-400">
                  {project.context}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 ? (
                    <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                      +{project.techStack.length - 5}
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    View Case Study
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {project.externalLink ? (
                    <a
                      href={project.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
                    >
                      DOI
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
