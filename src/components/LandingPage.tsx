"use client";

import { useState, useEffect } from "react";
import { curriculumCategories } from "@/lib/curriculum-data";
import type { CurriculumCategory } from "@/lib/curriculum-data";

const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com";

function CategorySection({ category }: { category: CurriculumCategory }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-28 rounded-2xl overflow-hidden mb-12 shadow-xl border border-white/20 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl"
    >
      <div className="px-6 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white">
        <h2 className="text-xl font-bold">{category.title}</h2>
        <p className="text-sm text-white/90 mt-1">{category.subtitle}</p>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="curriculum-table">
            <thead>
              <tr>
                <th className="w-16">Step</th>
                <th className="min-w-[180px]">Concept</th>
                <th className="min-w-[280px]">Transcript (원문)</th>
                <th className="min-w-[240px]">Research (보조)</th>
                <th className="min-w-[200px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {category.rows.map((row) => (
                <tr key={row.step}>
                  <td>
                    <span className="step-badge">{row.step}</span>
                  </td>
                  <td className="font-medium">{row.concept}</td>
                  <td className="text-sm text-slate-600 dark:text-slate-300">
                    {row.transcript}
                  </td>
                  <td className="text-sm text-slate-500 dark:text-slate-400">
                    {row.research}
                  </td>
                  <td className="text-sm">
                    {row.action ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 font-medium">
                        → {row.action}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [activeId, setActiveId] = useState<string>(curriculumCategories[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    curriculumCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-emerald-950/20 dark:to-cyan-950/20">
      {/* Left Sidebar - Fixed, scrollable */}
      <aside className="hidden lg:flex flex-col w-72 min-w-[280px] shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            성찬식 커리큘럼
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Lord&apos;s Supper · 13 Categories
          </p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 sidebar-scroll">
          {curriculumCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl mb-1.5 transition-all duration-200 ${
                activeId === cat.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              <span className="text-xs font-medium opacity-80">{cat.order}</span>
              <span className="ml-2 text-sm font-medium">
                {cat.title.replace(/^\d+\.\s/, "").split(" (")[0]}
              </span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <p>📖 Transcript + Research</p>
            <p>✓ No redundancy</p>
          </div>
        </div>
      </aside>

      {/* Main content - scrollable */}
      <main className="flex-1 min-h-0 overflow-y-auto">
        {/* Hero */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-emerald-500/95 via-teal-500/95 to-cyan-500/95 backdrop-blur-xl text-white shadow-2xl">
          <div className="max-w-5xl mx-auto px-6 py-8 lg:py-10">
            <h1 className="text-3xl lg:text-4xl font-bold">
              성찬식 커리큘럼
            </h1>
            <p className="mt-2 text-lg text-white/90">
              Lord&apos;s Supper: Key concepts from transcript + research. Step-by-step for solo learners.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {curriculumCategories.slice(0, 5).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-sm font-medium transition-colors"
                >
                  {cat.order}. {cat.title.split(" ")[1]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* How to use */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 shadow-lg">
            <h3 className="font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2">
              <span>⚡</span> How to use (Solo entrepreneur style)
            </h3>
            <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>Follow categories in order (1 → 13).</li>
              <li>For each row: read Concept, Transcript, Research.</li>
              <li>Complete the Action before moving to next step.</li>
              <li>Use left sidebar to jump to any section.</li>
            </ol>
          </div>
        </div>

        {/* Mobile nav pills */}
        <div className="lg:hidden max-w-5xl mx-auto px-6 pb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
            {curriculumCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeId === cat.id
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                {cat.order}
              </button>
            ))}
          </div>
        </div>

        {/* All sections */}
        <div className="max-w-5xl mx-auto px-6 pb-24">
          {curriculumCategories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        <footer className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
          Lord&apos;s Supper (성찬식) Curriculum · Transcript + Research · No redundancy, no omissions
        </footer>
      </main>

      {/* Fixed GitHub link - bottom right */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-emerald-500/30"
        aria-label="Open on GitHub"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        <span className="font-semibold">GitHub</span>
      </a>
    </div>
  );
}
