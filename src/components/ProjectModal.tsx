import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import type { ProjectCaseStudy } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) {
      return;
    }

    const previousFocusedElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusedElement?.focus();
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-700/80 bg-[#0b1324] p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-cyan-300">
                {project.category}
              </span>
              <span className="font-mono text-slate-400">
                {project.context} · {project.period}
              </span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-3 text-xl font-semibold text-slate-50 sm:text-2xl"
            >
              {project.title}
            </h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-md border border-slate-700 bg-slate-900 p-2 text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-400">
              Problem Statement
            </h4>
            <p className="mt-2 text-slate-200">{project.problem}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-400">
              Solution &amp; Architecture
            </h4>
            <p className="mt-2 text-slate-200">{project.solution}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-400">
              Key Engineering Contributions
            </h4>
            <ul className="mt-2.5 space-y-2">
              {project.contributions.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-400">
              Verified Outcomes
            </h4>
            <ul className="mt-2.5 space-y-2">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span className="text-slate-100">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.disclaimer ? (
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200">
              {project.disclaimer}
            </div>
          ) : null}

          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-400">
              Technology Stack
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.externalLink ? (
            <div className="border-t border-slate-800 pt-4">
              <a
                href={project.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {project.externalLink.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
