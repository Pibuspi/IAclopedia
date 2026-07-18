"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { APP_DATA_EVENT, defaultAppData, loadAppData, type Tool } from "@/lib/app-data";

function ToolColumn({ tool, other }: { tool: Tool; other: Tool }) {
  const sameCategory = tool.category.trim().toLowerCase() === other.category.trim().toLowerCase();

  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
      <h2 className="text-xl font-semibold text-[color:var(--foreground)]">{tool.name}</h2>
      <p className="mt-2 text-sm leading-6 text-[color:var(--foreground)]">{tool.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
          {tool.category}
        </span>
        {sameCategory ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Mesma categoria
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-600">
            <XCircle className="h-3.5 w-3.5" />
            Categorias diferentes
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-[color:var(--muted)]">Nota</p>
          <p className="font-semibold text-emerald-600">{tool.rating}/10</p>
        </div>
        <div>
          <p className="text-[color:var(--muted)]">Plano gratuito</p>
          <p className="font-semibold text-[color:var(--foreground)]">{tool.freePlan}</p>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-[color:var(--accent)]">{tool.price}</p>

      <div className="mt-5">
        <p className="text-sm font-semibold text-[color:var(--foreground)]">Prós</p>
        <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--foreground)]">
          {tool.pros.map((pro) => (
            <li key={pro}>• {pro}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-[color:var(--foreground)]">Contras</p>
        <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--foreground)]">
          {tool.cons.map((con) => (
            <li key={con}>• {con}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-[color:var(--foreground)]">Melhor hora de usar</p>
        <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--foreground)]">
          {tool.bestFor.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ComparePage() {
  const [tools, setTools] = useState<Tool[]>(defaultAppData.tools);
  const [leftId, setLeftId] = useState(defaultAppData.tools[0].id);
  const [rightId, setRightId] = useState(defaultAppData.tools[1].id);

  useEffect(() => {
    const syncData = () => setTools(loadAppData().tools);
    syncData();
    window.addEventListener(APP_DATA_EVENT, syncData);
    return () => window.removeEventListener(APP_DATA_EVENT, syncData);
  }, []);

  const leftTool = useMemo(() => tools.find((tool) => tool.id === leftId) ?? tools[0], [leftId, tools]);
  const rightTool = useMemo(() => tools.find((tool) => tool.id === rightId) ?? tools[1], [rightId, tools]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">Comparação manual</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)] sm:text-5xl">Compare duas IAs lado a lado</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">Escolha duas ferramentas e veja diferenças claras em preço, nota, categoria, prós, contras e melhor hora de usar.</p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
          <label className="text-sm text-[color:var(--muted)]">Ferramenta A</label>
          <select value={leftId} onChange={(e) => setLeftId(e.target.value)} className="mt-3 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)]">
            {tools.map((tool) => <option key={tool.id} value={tool.id}>{tool.name}</option>)}
          </select>
          <div className="mt-5">
            <ToolColumn tool={leftTool} other={rightTool} />
          </div>
        </div>
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
          <label className="text-sm text-[color:var(--muted)]">Ferramenta B</label>
          <select value={rightId} onChange={(e) => setRightId(e.target.value)} className="mt-3 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)]">
            {tools.map((tool) => <option key={tool.id} value={tool.id}>{tool.name}</option>)}
          </select>
          <div className="mt-5">
            <ToolColumn tool={rightTool} other={leftTool} />
          </div>
        </div>
      </div>
    </div>
  );
}