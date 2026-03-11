import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "rizzmyresume",
  description: "Create your resume in one click.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className="min-h-screen bg-[#14141C] text-white antialiased"
        style={{ colorScheme: "dark" }}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-white/10 bg-[#14141C]/95 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
              <a href="/" className="inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">rizzmyresume</span>
              </a>
              <nav className="flex items-center gap-6 text-sm text-white/80">
                <a href="/#features" className="hover:text-white transition-colors">About</a>
                <a href="/#features" className="hover:text-white transition-colors">Pricing</a>
                <a href="/vault" className="hover:text-white transition-colors">Vault</a>
                <a href="/generate" className="hover:text-white transition-colors">Reaction Engine</a>
                <a href="/vault" className="rounded-full border border-white/30 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                  Login / Signup
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

