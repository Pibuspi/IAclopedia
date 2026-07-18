"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { loadAppData, APP_DATA_EVENT, type AppData } from "@/lib/app-data";

export default function RankingWidget() {
  const [data, setData] = useState<AppData>(() => loadAppData());

  useEffect(() => {
    function onUpdate() {
      setData(loadAppData());
    }
    window.addEventListener(APP_DATA_EVENT, onUpdate);
    return () => window.removeEventListener(APP_DATA_EVENT, onUpdate);
  }, []);

  const items = (data.ranking ?? [])
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (items.length === 0) {
    return (
      <div className="mt-5 space-y-3">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
          <h2 className="font-semibold text-[color:var(--foreground)]">(Sem ranking)</h2>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Adicione um ranking no painel de admin para aparecer aqui.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-3">
      {items.map((item) => {
        const tool = data.tools.find((t) => (item as any).toolId ? t.id === (item as any).toolId : t.name === item.name);
        const href = tool ? `/ferramentas/detalhes?id=${tool.id}` : "/ferramentas";
        return (
          <Link key={item.id} href={href} className="block">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 min-h-20 hover:bg-[color:var(--surface)] transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[color:var(--foreground)]">{item.name}</h3>
                <span className="text-sm text-[color:var(--muted)]">{item.score.toLocaleString()} acessos</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.summary}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}