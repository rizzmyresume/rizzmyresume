"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

function ResumePreviewCard({ isLive = false }: { isLive?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-xl transition-all ${
        isLive
          ? "border-violet-500/60 bg-[#1F1F2C] shadow-[0_0_40px_rgba(139,92,246,0.25)]"
          : "border-white/10 bg-[#1F1F2C]/80"
      }`}
    >
      <div className="flex justify-end">
        {isLive && (
          <span className="rounded-md bg-violet-500 px-2 py-0.5 text-[10px] font-medium text-white">
            Live
          </span>
        )}
      </div>
      <div className="mt-2 space-y-2">
        <div className="h-2 w-4/5 rounded bg-violet-500/40" />
        <div className="h-1.5 w-full rounded bg-white/10" />
        <div className="h-1.5 w-11/12 rounded bg-white/10" />
        <div className="h-1.5 w-3/4 rounded bg-white/10" />
        <div className="h-1.5 w-5/6 rounded bg-white/10" />
      </div>
    </div>
  );
}

function ShiftingResumeCard({ label, match }: { label: string; match: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1F1F2C] px-4 py-3 shadow-xl">
      <div className="flex items-center justify-between text-xs text-white/70">
        <span className="text-white/50">{label}</span>
        <span className="font-medium text-violet-400">{match}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-4/5 rounded-full bg-violet-500/80 animate-[pulseWidth_4s_ease-in-out_infinite]" />
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-3/4 rounded-full bg-white/20" />
      </div>
      <div className="mt-1.5 h-1.5 w-5/6 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

const SAMPLE_RESUMES = [
  { label: "Senior Backend Engineer · 94% match", match: "Live tailored" },
  { label: "ML Engineer · 88% match", match: "ML focused" },
  { label: "Product Engineer · 91% match", match: "Launch ready" },
  { label: "Full-Stack · 89% match", match: "Front & back" },
];

function SampleResumesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-16 pt-6 pb-4"
      aria-label="Sample resumes"
    >
      <h2 className="text-center text-sm font-medium uppercase tracking-widest text-white/50 mb-8">
        Sample resumes — shift as you scroll
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SAMPLE_RESUMES.map((item, i) => (
          <div
            key={item.label}
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: visible ? `${120 + i * 80}ms` : "0ms" }}
          >
            <ShiftingResumeCard label={item.label} match={item.match} />
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "Store Once",
    description:
      "Build your master profile one time with all your experiences, skills, and achievements.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "AI Matching",
    description:
      "Our AI analyzes job descriptions and tailors your resume to highlight the most relevant skills.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Instant Export",
    description:
      "Generate professional PDFs in seconds, optimized for ATS systems and human recruiters.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function LandingPage() {
  return (
    <div className="space-y-24">
      {/* Hero — centered like screenshot */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          <span className="text-white">Create your Resume</span>
          <br />
          <span className="text-violet-400">in one click.</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-white/60">
          AI-powered resume builder that adapts to every job. Store your profile
          once, generate tailored resumes instantly.
        </p>
        <Link
          href="/vault"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all hover:bg-violet-400 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Create My Resume</span>
        </Link>
      </section>

      {/* Three resume cards + Live + caption */}
      <section className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <ResumePreviewCard />
          <ResumePreviewCard isLive />
          <ResumePreviewCard />
        </div>
        <p className="flex items-center justify-center gap-2 text-sm text-white/50">
          <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Shifting live resumes being filled in real-time
        </p>
      </section>

      {/* Feature cards — Store Once, AI Matching, Instant Export */}
      <section id="features" className="space-y-8">
        <h2 className="text-center text-xl font-semibold text-white">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-[#1F1F2C] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample resumes — slide in on scroll */}
      <SampleResumesSection />
    </div>
  );
}
