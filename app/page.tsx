import Link from "next/link";

function ShiftingResumeCard({ label, match }: { label: string; match: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.85)]">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="text-slate-400">{label}</span>
        <span className="font-medium text-cyan-300">{match}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 animate-[pulseWidth_4s_ease-in-out_infinite]" />
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-3/4 rounded-full bg-slate-600/70" />
      </div>
      <div className="mt-1.5 h-1.5 w-5/6 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-2/3 rounded-full bg-slate-700/80" />
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/70 px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.7)]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)]" />
          <span>Identity Vault · Reaction Engine</span>
        </div>
        <div className="space-y-3">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Create your Resume in one click.
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            Store your story once in the Xenon Identity Vault, then let the Reaction Engine
            tailor a new resume for every job within minutes.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/vault"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-[0_18px_40px_rgba(8,47,73,0.9)] transition-transform hover:-translate-y-[1px]"
          >
            <span>Start Building</span>
          </Link>
          <div className="flex flex-col text-[11px] text-slate-400">
            <span>Shifting live resumes.</span>
            <span className="text-slate-500">No more reinventing the wheel for each post.</span>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute -inset-x-10 -top-6 h-40 bg-gradient-to-b from-cyan-500/25 via-sky-500/10 to-transparent blur-3xl opacity-70" />
        <div className="relative h-[260px] overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.95)]">
          <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/80 px-2 py-0.5 text-[10px] text-cyan-300">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-cyan-300" />
              <span>Shifting live resumes</span>
            </div>
          </div>

          <div className="relative h-[190px]">
            <div className="absolute inset-0 flex flex-col gap-3">
              <div className="animate-[slideCard_10s_ease-in-out_infinite]">
                <ShiftingResumeCard label="Senior Backend Engineer · 94% match" match="Live tailored" />
              </div>
              <div className="translate-x-4 scale-95 opacity-90 animate-[slideCard2_10s_ease-in-out_infinite]">
                <ShiftingResumeCard label="ML Engineer · 88% match" match="ML focused" />
              </div>
              <div className="-translate-x-4 scale-95 opacity-85 animate-[slideCard3_10s_ease-in-out_infinite]">
                <ShiftingResumeCard label="Product Engineer · 91% match" match="Launch ready" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

