import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xenon CV",
  description: "Create your resume in one click.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark bg-slate-950 text-slate-50">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
              <a href="/" className="inline-flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                    Xenon CV
                  </span>
                  <span className="text-[10px] text-slate-400 tracking-[0.18em] uppercase">
                    Resume, Rewired
                  </span>
                </div>
              </a>
              <nav className="flex items-center gap-4 text-xs text-slate-400">
                <a href="/vault" className="hover:text-slate-50 transition-colors">
                  Vault
                </a>
                <a href="/generate" className="hover:text-slate-50 transition-colors">
                  Reaction Engine
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

