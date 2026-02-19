"use client";

import { useState } from "react";
import { curriculumCategories } from "@/lib/curriculum-data";
import type { CurriculumCategory } from "@/lib/curriculum-data";

function CategoryCard({
  category,
  isExpanded,
  onToggle,
}: {
  category: CurriculumCategory;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <section
      id={category.id}
      className="scroll-mt-24 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-sm overflow-hidden mb-8"
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 bg-stone-50 dark:bg-stone-800/50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-lg font-bold text-stone-900 dark:text-white">
            {category.title}
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
            {category.subtitle}
          </p>
        </div>
        <span
          className={`text-2xl text-stone-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isExpanded && (
        <div className="p-6 pt-0">
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
                    <td className="text-sm text-stone-600 dark:text-stone-300">
                      {row.transcript}
                    </td>
                    <td className="text-sm text-stone-500 dark:text-stone-400">
                      {row.research}
                    </td>
                    <td className="text-sm">
                      {row.action ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 font-medium">
                          → {row.action}
                        </span>
                      ) : (
                        <span className="text-stone-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

export default function CurriculumContent() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(["rituals-vs-essence", "lords-supper-origins"])
  );

  const toggleCategory = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(curriculumCategories.map((c) => c.id)));
  };

  const collapseAll = () => setExpandedIds(new Set());

  return (
    <>
      <nav className="mt-4 flex flex-wrap gap-2">
        {curriculumCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="text-xs px-3 py-1.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 hover:text-emerald-900 dark:hover:text-emerald-100 transition-colors"
          >
            {cat.order}. {cat.title.split(" ").slice(0, 2).join(" ")}
          </a>
        ))}
        <button
          onClick={expandAll}
          className="text-xs px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
        >
          Expand all
        </button>
        <button
          onClick={collapseAll}
          className="text-xs px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
        >
          Collapse all
        </button>
      </nav>

      {curriculumCategories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isExpanded={expandedIds.has(category.id)}
          onToggle={() => toggleCategory(category.id)}
        />
      ))}
    </>
  );
}
