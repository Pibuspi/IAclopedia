"use client";

import { useMemo, useState } from "react";
import { defaultAppData, type Tool } from "@/lib/app-data";

export default function ComparePage() {
  const [leftId, setLeftId] = useState(defaultAppData.tools[0].id);
  const [rightId, setRightId] = useState(defaultAppData.tools[1].id);

  const tools = defaultAppData.tools;
  const leftTool = useMemo(() => tools.find((tool) => tool.id === leftId) ?? tools[0], [leftId, tools]);
  const rightTool = useMemo(() => tools.find((tool) => tool.id === rightId) ?? tools[1], [rightId, tools]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Comparação manual</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Compare duas IAs lado a lado</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">Escolha duas ferramentas e veja diferenças claras em preço, nota, uso e pontos fortes.</p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6">
          <label className="text-sm text-zinc-400">Ferramenta A</label>
          <select value={leftId} onChange={(e) => setLeftId(e.target.value)} className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
            {tools.map((tool) => <option key={tool.id} value={tool.id}>{tool.name}</option>)}
          </select>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="text-xl font-semibold text-white">{leftTool.name}</h2>
            <p className="mt-2 text-sm text-zinc-400">{leftTool.tagline}</p>
            <p className="mt-4 text-sm text-cyan-300">{leftTool.price}</p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6">
          <label className="text-sm text-zinc-400">Ferramenta B</label>
          <select value={rightId} onChange={(e) => setRightId(e.target.value)} className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
            {tools.map((tool) => <option key={tool.id} value={tool.id}>{tool.name}</option>)}
          </select>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="text-xl font-semibold text-white">{rightTool.name}</h2>
            <p className="mt-2 text-sm text-zinc-400">{rightTool.tagline}</p>
            <p className="mt-4 text-sm text-cyan-300">{rightTool.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
