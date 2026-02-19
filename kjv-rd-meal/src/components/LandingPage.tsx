"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { VERSE_CATEGORIES } from "@/data/verse-refs";

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/henrynkoh/kjv-rd-supper";

export default function LandingPage() {
  const [activeId, setActiveId] = useState<string>("hero");
  const mainRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => [
    { id: "hero", titleKo: "홈", titleEn: "Home" },
    { id: "overview", titleKo: "개요", titleEn: "Overview" },
    { id: "features", titleKo: "기능", titleEn: "Features" },
    { id: "categories", titleKo: "카테고리", titleEn: "Categories" },
    { id: "quickstart", titleKo: "빠른 시작", titleEn: "Quick Start" },
    { id: "docs", titleKo: "문서", titleEn: "Docs" },
    ...VERSE_CATEGORIES.map((c) => ({ id: c.id, titleKo: c.titleKo, titleEn: c.titleEn })),
  ], [VERSE_CATEGORIES]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-56 overflow-y-auto border-r border-slate-700/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400/90">
              KJV 성찬식
            </h2>
            <p className="text-xs text-slate-400">Lord&apos;s Supper Study</p>
          </div>
          <nav className="space-y-0.5">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-all ${
                  activeId === s.id
                    ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-400/30"
                    : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
                }`}
              >
                <span className="truncate">{s.titleKo}</span>
                {s.titleEn && s.titleEn !== s.titleKo && (
                  <span className="ml-1 truncate text-xs opacity-70">({s.titleEn})</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main
        ref={mainRef}
        className="ml-56 flex-1 overflow-y-auto"
      >
        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-[60vh] px-8 py-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-slate-900 to-emerald-600/10" />
          <div className="relative mx-auto max-w-4xl">
            <h1 className="mb-4 bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              KJV Lord&apos;s Supper
            </h1>
            <p className="text-2xl font-medium text-slate-300">
              성찬식 성경 연구
            </p>
            <p className="mt-6 max-w-2xl text-slate-400">
              성경에 나오는 대표적인 종교의식 성찬식을 주제로, KJV와 흠정역 한글성경전서로
              정리한 구절을 카테고리별로 탐색하세요.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section
          id="overview"
          className="border-t border-slate-700/50 bg-slate-900/30 px-8 py-16"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-amber-400">개요</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6">
                <h3 className="mb-2 font-semibold text-amber-300/90">KJV 전용</h3>
                <p className="text-sm text-slate-400">
                  킹제임스 성경(KJV)만 사용하여 구절을 수집하고 표시합니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6">
                <h3 className="mb-2 font-semibold text-emerald-300/90">이중 언어</h3>
                <p className="text-sm text-slate-400">
                  KJV 영문과 흠정역 한글을 병기하여 비교 학습이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t border-slate-700/50 px-8 py-16"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-amber-400">기능</h2>
            <ul className="space-y-3">
              {[
                "카테고리별 구절 정리 (18개 주제)",
                "스크롤 네비게이션 사이드바",
                "KJV + 흠정역 병렬 표시",
                "중복 없이 관련 구절 총망라",
              ].map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-slate-800/30 px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-xs text-amber-400">
                    {i + 1}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Categories */}
        <section
          id="categories"
          className="border-t border-slate-700/50 bg-slate-900/30 px-8 py-16"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-amber-400">카테고리</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {VERSE_CATEGORIES.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 transition hover:border-amber-500/30"
                >
                  <p className="font-medium text-slate-200">{c.titleKo}</p>
                  <p className="text-xs text-slate-500">{c.titleEn}</p>
                  <p className="mt-1 text-xs text-amber-400/80">{c.refs.length} refs</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section
          id="quickstart"
          className="border-t border-slate-700/50 px-8 py-16"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-amber-400">빠른 시작</h2>
            <pre className="overflow-x-auto rounded-xl border border-slate-700/50 bg-slate-900 p-6 text-sm text-emerald-300">
{`npm install
npm run dev`}
            </pre>
            <p className="mt-4 text-slate-400">
              브라우저에서 <code className="rounded bg-slate-700 px-1">http://localhost:3000</code> 접속
            </p>
          </div>
        </section>

        {/* Docs */}
        <section
          id="docs"
          className="border-t border-slate-700/50 bg-slate-900/30 px-8 py-16"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-amber-400">문서</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("overview")}
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm transition hover:border-amber-500/50 hover:bg-slate-700"
              >
                Manual
              </button>
              <button
                onClick={() => scrollTo("quickstart")}
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm transition hover:border-amber-500/50 hover:bg-slate-700"
              >
                Tutorial
              </button>
              <button
                onClick={() => scrollTo("quickstart")}
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm transition hover:border-amber-500/50 hover:bg-slate-700"
              >
                Quick Start
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Full docs: docs/MANUAL.md, docs/TUTORIAL.md, docs/QUICKSTART.md in repo
            </p>
          </div>
        </section>

        {/* Category Sections */}
        {VERSE_CATEGORIES.map((c) => (
          <section
            key={c.id}
            id={c.id}
            className="border-t border-slate-700/50 px-8 py-12"
          >
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-xl font-bold text-amber-400">{c.titleKo}</h2>
              <p className="mb-6 text-sm text-slate-500">{c.titleEn}</p>
              <div className="space-y-2">
                {c.refs.map((r, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-2 font-mono text-sm"
                  >
                    {r.book} {r.chapter}:{Array.isArray(r.verse) ? `${r.verse[0]}-${r.verse[1]}` : r.verse}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* GitHub Link - Bottom Right */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 shadow-lg ring-2 ring-amber-500/40 transition hover:scale-110 hover:ring-amber-400/60"
        aria-label="GitHub"
      >
        <svg
          className="h-7 w-7 text-slate-100"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
