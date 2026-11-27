import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '../data';
import { SectionHeading } from './SectionHeading';

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-slate-800/80 bg-[#080f1e]/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="education-heading"
          eyebrow="06 // Education"
          title="Academic background"
        />

        <div className="space-y-6">
          {educationData.map((edu) => (
            <article
              key={`${edu.institution}-${edu.period}`}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">
                    {edu.institution}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-2 text-base font-medium text-cyan-400">
                    <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{edu.degree}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-slate-400 sm:items-end">
                  <span className="inline-flex items-center gap-1.5 font-mono text-slate-200">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {edu.highlights.length > 0 ? (
                <ul className="mt-5 space-y-2 border-t border-slate-800 pt-5 text-sm leading-relaxed text-slate-300">
                  {edu.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
