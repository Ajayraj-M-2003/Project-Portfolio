import { useState } from 'react';
import { Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data';
import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: ignore if clipboard access is blocked
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="07 // Contact"
          title="Get in touch"
          description="Open to connecting on Generative AI, Applied AI, LLM/RAG, Agentic AI, and Machine Learning Engineering roles."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/65 p-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Email</span>
              </div>
              <p className="mt-3 break-all text-base font-medium text-slate-100">
                {profileData.email}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500 px-3.5 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/65 p-6 transition-colors hover:border-cyan-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </div>
              <p className="mt-3 text-base font-medium text-slate-100">
                github.com/Ajayraj-M-2003
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Repositories &amp; technical code profile
              </p>
            </div>

            <span className="mt-6 text-xs font-medium text-cyan-400">
              Open GitHub Profile &rarr;
            </span>
          </a>

          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/65 p-6 transition-colors hover:border-cyan-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </div>
              <p className="mt-3 text-base font-medium text-slate-100">
                linkedin.com/in/ajayraj-m-721170252
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Professional profile &amp; experience
              </p>
            </div>

            <span className="mt-6 text-xs font-medium text-cyan-400">
              Connect on LinkedIn &rarr;
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-sm font-semibold text-slate-100">
              Resume / Curriculum Vitae
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Download a concise PDF copy of Ajay Raj M&apos;s professional resume.
            </p>
          </div>

          <a
            href={profileData.resumeUrl}
            download={profileData.resumeFileName}
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-100 transition-colors hover:border-cyan-500/60 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
