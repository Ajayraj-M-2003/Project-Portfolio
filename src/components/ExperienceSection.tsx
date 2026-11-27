import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data';
import { SectionHeading } from './SectionHeading';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-slate-800/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="experience-heading"
          eyebrow="03 // Professional Experience"
          title="Industry experience"
          description="Enterprise Generative AI engineering at Wipro Gen AI Foundry and software development foundation at the National Dairy Development Board."
        />

        <div className="space-y-8">
          {experienceData.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-semibold text-slate-50">
                      {item.company}
                    </h3>
                    {item.isCurrent ? (
                      <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-cyan-300">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 flex items-center gap-2 text-base font-medium text-cyan-400">
                    <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{item.role}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-slate-400 sm:items-end">
                  <span className="inline-flex items-center gap-1.5 font-mono text-slate-200">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {item.summary}
              </p>

              {item.workstreams && item.workstreams.length > 0 ? (
                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                  {item.workstreams.map((workstream) => (
                    <div
                      key={workstream.name}
                      className="flex flex-col justify-between rounded-lg border border-slate-800/90 bg-slate-950/60 p-5"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-slate-100">
                          {workstream.name}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                          {workstream.highlights.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5">
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-3">
                        {workstream.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-slate-800 bg-slate-900 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {item.highlights && item.highlights.length > 0 ? (
                <div className="mt-5">
                  <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                    {item.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {item.technologies && item.technologies.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-slate-800 bg-slate-950/80 px-2.5 py-0.5 font-mono text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
