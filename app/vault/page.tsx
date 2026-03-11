import { Mic } from "lucide-react";
import Link from "next/link";

export default function VaultPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          Identity Vault
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Store your story once. Reuse it everywhere.
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          Education, experience, skills, and raw brain dumps live here. The Reaction Engine
          will pull from this vault every time you tailor a new CV.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
        {/* Left: Voice + transcripts */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-medium">Raw Brain Dumps</h2>
                <p className="text-xs text-slate-400">
                  Throw your unstructured thoughts, transcripts, and notes here. Xenon will turn
                  them into structured experience later.
                </p>
              </div>
              <Link
                href="/generate"
                className="rounded-full border border-slate-700/70 px-3 py-1 text-[11px] text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200 transition-colors"
              >
                Go to Reaction Engine
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-xs text-slate-300">
                “Summer 2024 internship at a fintech. Built internal tools, lots of data pipelines
                and dashboards. Helped cut manual reporting from days to minutes...”
              </div>
              <div className="rounded-xl border border-dashed border-slate-700/80 bg-slate-950/40 px-3 py-6 text-center text-xs text-slate-500">
                Drop transcripts, notes, or upload call summaries here.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/40 bg-slate-900/90 p-4 shadow-[0_18px_48px_rgba(8,47,73,0.9)]">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/60 bg-gradient-to-tr from-cyan-500/40 via-sky-500/20 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.9)]">
                <div className="absolute h-full w-full animate-ping rounded-full border border-cyan-400/40" />
                <Mic className="relative h-5 w-5 text-cyan-100" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Voice Input</p>
                <p className="text-xs text-slate-300">
                  Tap to simulate speaking your history. We&apos;ll transcribe and tag skills,
                  metrics, and outcomes behind the scenes.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/60 hover:bg-slate-900 transition-colors"
            >
              <Mic className="h-4 w-4" />
              <span>Simulate speaking · “Tell me about your last role...”</span>
            </button>
          </div>
        </div>

        {/* Right: Structured sections */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">Education</h2>
              <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Degrees · Coursework · GPA
              </span>
            </div>
            <div className="mt-3 space-y-2 text-xs text-slate-300">
              <div className="flex items-baseline justify-between">
                <span>Computer Science, BSc</span>
                <span className="text-slate-500">2022 – 2026</span>
              </div>
              <p className="text-slate-400">Dalhousie University · GPA 3.8</p>
              <p className="text-slate-500">Data Structures · Databases · ML · HCI</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">Work Experience</h2>
              <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Roles · Impact · Metrics
              </span>
            </div>
            <div className="mt-3 space-y-2 text-xs text-slate-300">
              <p className="font-medium">Software Engineer Intern · Fintech Co</p>
              <p className="text-slate-400">
                Built internal tools and dashboards that reduced monthly reporting time by 80%.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">Technical Skills</h2>
              <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Languages · Frameworks · Databases
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-200">
              {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Prisma"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-700/80 bg-slate-950/80 px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

