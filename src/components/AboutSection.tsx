import { profileData } from '../data';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-slate-800/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-heading"
          eyebrow="01 // About Me"
          title="Building grounded, production-oriented AI systems"
          description="Enterprise Generative AI engineering backed by strong software fundamentals, speech processing, and applied machine learning research."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            {profileData.aboutSummary.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {profileData.coreFocusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-slate-700"
              >
                <h3 className="text-sm font-semibold text-slate-100">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
