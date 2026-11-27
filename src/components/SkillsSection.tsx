import { skillCategories } from '../data';
import { SectionHeading } from './SectionHeading';

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-slate-800/80 bg-[#080f1e]/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills-heading"
          eyebrow="02 // Technical Skills"
          title="Core engineering & AI stack"
          description="Technologies and frameworks applied across enterprise RAG platforms, conversational agents, speech analytics, and full-stack software delivery."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-100">
                {category.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                {category.description}
              </p>

              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label={`${category.title} skills`}
              >
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-slate-700/80 bg-slate-950/70 px-2.5 py-1 font-mono text-xs text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
