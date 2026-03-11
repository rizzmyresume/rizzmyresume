"use client";

import Link from "next/link";
import { useState } from "react";

export default function GeneratePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleTailor = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            href="/vault"
            className="mb-2 inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Vault
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            The Reaction Engine
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Paste a job description and watch your resume adapt in real-time
          </p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
        {/* Left: Job Description */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white">Job Description</h2>
          <p className="text-xs text-white/50">Indeed, Linkedin, etc.</p>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1F1F2C]">
            <textarea
              className="min-h-[280px] w-full resize-y bg-transparent px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/40"
              placeholder="Paste the job title and description here..."
              defaultValue={
                "Example:\nSenior Software Engineer - AI/ML\n\nWe're looking for a Senior Software Engineer with expertise in Python, machine learning frameworks (TensorFlow, PyTorch), and experience building scalable AI systems. You'll work on our cutting-edge recommendation engine..."
              }
            />
          </div>
          <button
            type="button"
            onClick={handleTailor}
            className="w-full rounded-full bg-violet-500 py-2.5 text-sm font-medium text-white hover:bg-violet-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Tailoring…" : "Analyze & Match"}
          </button>
        </div>

        {/* Right: Live Preview */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Live Preview</h2>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Updating in real-time
            </span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#1F1F2C] p-4">
            <div className="overflow-hidden rounded-xl bg-white p-5 text-[13px] text-gray-900 shadow-lg">
              <p className="text-lg font-bold">Sarah Anderson</p>
              <p className="text-xs text-gray-600">
                Senior Software Engineer | AI/ML Specialist
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                sarah.anderson@email.com · linkedin.com/in/sarahanderson
              </p>

              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-violet-600">
                Professional Summary
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-700">
                6+ years of experience in Python and machine learning frameworks
                (TensorFlow, PyTorch). Specialization in recommendation engines
                and real-time ML inference.
              </p>

              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-violet-600">
                Technical Skills
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS", "Kubernetes", "Redis", "PostgreSQL"].map(
                  (s) => (
                    <span
                      key={s}
                      className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>

              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-violet-600">
                Experience
              </p>
              <p className="mt-1 text-xs font-semibold text-gray-800">
                Machine Learning Engineer · TechCorp AI
              </p>
              <ul className="mt-0.5 list-disc pl-4 text-xs text-gray-700">
                <li>Built scalable recommendation engine…</li>
                <li>Architected real-time ML inference pipeline…</li>
                <li>Led team of 5 engineers…</li>
              </ul>
              <p className="mt-2 text-xs font-semibold text-gray-800">
                Machine Learning Engineer · DataSystems Inc (2019-2021)
              </p>
              <ul className="mt-0.5 list-disc pl-4 text-xs text-gray-700">
                <li>Developed production ML models…</li>
                <li>Deployed models to AWS…</li>
              </ul>

              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-violet-600">
                Education
              </p>
              <p className="mt-1 text-xs text-gray-700">
                M.S. Computer Science · Stanford University (2019)
              </p>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <button
                type="button"
                className="w-full rounded-full bg-violet-500 py-3 text-sm font-medium text-white hover:bg-violet-400 transition-colors"
              >
                Build Your CV
              </button>
              <p className="text-[11px] text-white/50">
                Download as PDF · ATS-optimized · Ready to submit
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
