import { profileData } from '../data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#050912] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
          &copy; {year} {profileData.name}. {profileData.roleTitle}.
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${profileData.email}`}
            className="transition-colors hover:text-slate-200"
          >
            Email
          </a>
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-200"
          >
            GitHub
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
