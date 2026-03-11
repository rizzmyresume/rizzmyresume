 "use client";

import { useState } from "react";

export default function GeneratePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleTailor = () => {
    setIsLoading(true);
    // Simulated loading state
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">
          Reaction Engine
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Paste a job. Watch your CV shift.
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          Drop in any job title and description on the left. On the right, Xenon will eventually
          generate a PDF-style preview tailored from your Identity Vault.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
        {/* Left: Input */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-medium text-slate-200">Paste Job Title &amp; Description</p>
            <p className="text-[11px] text-slate-500">
              From Indeed, LinkedIn, or any ATS posting.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-[0_18px_40px_rgba(0,0,0,0.95)]">
            <textarea
              className="min-h-[220px] w-full resize-vertical bg-transparent px-4 py-3 text-xs text-slate-100 outline-none placeholder:text-slate-500"
              placeholder="Paste the full job title and description here. Xenon will analyze responsibilities, keywords, and impact signals to align your resume."
            />
            <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950/95 px-4 py-2.5 text-[11px] text-slate-500">
              <div className="flex flex-wrap gap-2">
                {["Indeed", "LinkedIn", "Greenhouse"].map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/90 px-2 py-0.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                    <span>{p}</span>
                  </span>
                ))}
              </div>
              <span className="text-[10px] text-slate-500">
                Placeholder · future Gemini parsing
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleTailor}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-5 py-2.5 text-xs font-medium text-slate-900 shadow-[0_18px_40px_rgba(8,47,73,0.9)] transition-transform hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isLoading}
          >
            <span>⚡ Tailor My CV</span>
            {isLoading && (
              <span className="h-3 w-3 animate-spin rounded-full border-[1.5px] border-slate-900 border-t-transparent" />
            )}
          </button>
        </div>

        {/* Right: PDF preview */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-medium text-slate-200">.PDF Preview</p>
            <p className="text-[11px] text-slate-500">
              Styled document shell for the generated CV.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.95)]">
            <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Preview · Senior Backend Engineer</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/50 bg-slate-900/90 px-2 py-0.5 text-[10px] text-cyan-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                <span>{isLoading ? "Tailoring with Gemini…" : "Idle · waiting for job"}</span>
              </span>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 text-[11px] text-slate-900">
              <div className="mb-2">
                <p className="text-xs font-semibold">Alex Rivera</p>
                <p className="text-[10px] text-slate-600">
                  Backend &amp; ML Engineer · xenoncv@example.com · github.com/alex-rivera
                </p>
              </div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                Summary
              </p>
              <div className="space-y-1.5">
                <div className="h-1.5 w-11/12 rounded-full bg-slate-200" />
                <div className="h-1.5 w-10/12 rounded-full bg-slate-200" />
              </div>
              <p className="mt-3 mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                Experience
              </p>
              <div className="space-y-1.5">
                <div className="h-1.5 w-11/12 rounded-full bg-slate-200" />
                <div className="h-1.5 w-10/12 rounded-full bg-slate-200" />
                <div className="h-1.5 w-9/12 rounded-full bg-slate-200" />
              </div>
              <p className="mt-3 mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                Skills aligned
              </p>
              <div className="space-y-1.5">
                <div className="h-1.5 w-7/12 rounded-full bg-slate-200" />
                <div className="h-1.5 w-6/12 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}

