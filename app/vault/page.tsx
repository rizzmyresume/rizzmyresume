import {
  Mic,
  FileUp,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const IMPORT_METHODS = [
  {
    title: "Import from LinkedIn",
    description:
      "Connect your LinkedIn profile and import your professional history instantly.",
    icon: <Linkedin className="h-6 w-6 text-[#0A66C2]" />,
  },
  {
    title: "Upload Docs/Transcripts",
    description:
      "Upload existing resumes, transcripts, or documents to extract your information.",
    icon: <FileUp className="h-6 w-6 text-violet-400" />,
  },
  {
    title: "Start from Scratch",
    description:
      "Fill in your information manually with our guided form.",
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
  },
];

const INFO_CARDS = [
  {
    title: "Education & Transcripts",
    subtitle: "Academic background, degrees, certifications",
    addLabel: "Add Education",
    icon: <GraduationCap className="h-5 w-5 text-sky-400" />,
  },
  {
    title: "Technical Skills",
    subtitle: "Languages, frameworks, databases, tools",
    addLabel: "Add Skill",
    icon: <Code2 className="h-5 w-5 text-violet-400" />,
    skills: ["Python", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Work Experience",
    subtitle: "Employment history and responsibilities",
    addLabel: "Add Experience",
    icon: <Briefcase className="h-5 w-5 text-violet-400" />,
  },
  {
    title: "Projects & Research",
    subtitle: "Personal projects, research work, publications",
    addLabel: "Add Project",
    icon: <FolderGit2 className="h-5 w-5 text-emerald-400" />,
  },
];

export default function VaultPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Let&apos;s Get Started
        </h1>
        <p className="mt-2 text-white/60">
          Build your Identity Vault — the foundation of all your resumes
        </p>
      </header>

      {/* Import Methods */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Import Methods</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {IMPORT_METHODS.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-white/10 bg-[#1F1F2C] p-5"
            >
              <div className="flex justify-center">{m.icon}</div>
              <h3 className="mt-3 font-semibold text-white">{m.title}</h3>
              <p className="mt-1 text-sm text-white/60">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Speak Your Story */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Speak Your Story</h2>
        <div className="rounded-2xl border border-white/10 bg-[#1F1F2C] p-8 text-center">
          <p className="text-sm text-white/60">
            Prefer to talk? Use your voice to describe your experience, and our
            AI will structure it for you.
          </p>
          <button
            type="button"
            className="mt-6 flex flex-col items-center gap-2"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/30 text-violet-400 ring-4 ring-violet-500/20 transition hover:bg-violet-500/40">
              <Mic className="h-10 w-10" />
            </div>
            <span className="text-sm text-white/70">Click to start recording</span>
          </button>
        </div>
      </section>

      {/* Your Information */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Your Information</h2>
          <Link
            href="/generate"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-violet-400 transition-colors"
          >
            Continue to Matcher
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {INFO_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-[#1F1F2C] p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-violet-400">
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-0.5 text-xs text-white/50">{card.subtitle}</p>
                  {card.skills ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {card.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs text-violet-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className="mt-3 text-xs font-medium text-white/80 hover:text-white"
                  >
                    + {card.addLabel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
