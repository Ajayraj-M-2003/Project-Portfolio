import { BookOpen, ExternalLink, Info } from 'lucide-react';
import { researchData } from '../data';
import { SectionHeading } from './SectionHeading';

export function ResearchSection() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="border-b border-slate-800/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="research-heading"
          eyebrow="05 // Research Publication"
          title="Peer-reviewed machine learning research"
          description="Published research applying Proximal Policy Optimization (PPO) reinforcement learning to risk-adjusted equity portfolio allocation."
        />

        <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-800 pb-6 lg:flex-row lg:items-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 font-mono text-xs text-cyan-300">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {researchData.journal} · {researchData.publisher} ·{' '}
                  {researchData.publishedDate}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-50 sm:text-2xl">
                {researchData.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {researchData.authors.map((author, index) => (
                  <span key={author}>
                    {author === researchData.highlightedAuthor ? (
                      <strong className="font-semibold text-cyan-300">
                        {author}
                      </strong>
                    ) : (
                      <span>{author}</span>
                    )}
                    {index < researchData.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>

            <a
              href={researchData.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-cyan-500/50 bg-cyan-500/10 px-4 py-2.5 font-mono text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              DOI: {researchData.doi}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
            {researchData.abstractSummary}
          </p>

          <div
            role="note"
            className="mt-5 flex items-start gap-3 rounded-lg border border-slate-700/80 bg-slate-950/70 p-4 text-xs leading-relaxed text-slate-300"
          >
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
              aria-hidden="true"
            />
            <p>
              <strong className="font-semibold text-slate-100">
                Historical Backtesting Notice:
              </strong>{' '}
              {researchData.backtestNotice}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchData.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-50">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5">
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-400">
              Methodology Summary
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {researchData.methodologyHighlights.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
