import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Building2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
} from 'lucide-react';
import { educationData, profileData, researchData } from '../data';

export function Hero() {
  const education = educationData[0];

  return (
    <section
      id="top"
      className="bg-subtle-grid relative border-b border-slate-800/80 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
              <span>{profileData.headlineTag}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              {profileData.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-cyan-400 sm:text-2xl">
              {profileData.roleTitle}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {profileData.heroIntro}
            </p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Target engineering roles">
              {profileData.targetRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-1 font-mono text-xs text-slate-300"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={profileData.resumeUrl}
                download={profileData.resumeFileName}
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-500/60 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ajay Raj M on GitHub"
                className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ajay Raj M on LinkedIn"
                className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            aria-label="Quick engineering profile"
            className="rounded-xl border border-slate-800 bg-slate-900/75 p-6 lg:col-span-5"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                Profile Snapshot
              </span>
              <span className="font-mono text-xs text-slate-400">
                {profileData.experienceYears}
              </span>
            </div>

            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-slate-400">Current Role</dt>
                  <dd className="font-medium text-slate-100">
                    Generative AI Developer — {profileData.currentOrganization}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-slate-400">Location</dt>
                  <dd className="font-medium text-slate-100">{profileData.location}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-slate-400">Published Research</dt>
                  <dd className="font-medium text-slate-100">
                    {researchData.journal} ({researchData.publisher}, {researchData.publishedDate})
                  </dd>
                </div>
              </div>

              {education ? (
                <div className="flex items-start gap-3">
                  <GraduationCap
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs text-slate-400">Education</dt>
                    <dd className="font-medium text-slate-100">
                      {education.degree} · {education.institution} ({education.period})
                    </dd>
                  </div>
                </div>
              ) : null}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
