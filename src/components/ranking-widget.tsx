"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Crown, Medal, Trophy } from "lucide-react";
import { loadAppData, APP_DATA_EVENT, type AppData } from "@/lib/app-data";

const RANK_STYLES = [
  {
    icon: Crown,
    badgeClass: "bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 shadow-[0_0_0_3px_rgba(251,191,36,0.25)]",
    cardClass: "border-amber-400/40 bg-[color:var(--surface)]",
    label: "#1",
  },
  {
    icon: Medal,
    badgeClass: "bg-gradient-to-br from-slate-300 to-slate-400 text-slate-900 shadow-[0_0_0_3px_rgba(148,163,184,0.25)]",
    cardClass: "border-slate-400/30 bg-[color:var(--surface-muted)]",
    label: "#2",
  },
  {
    icon: Trophy,
    badgeClass: "bg-gradient-to-br from-orange-300 to-orange-500 text-orange-950 shadow-[0_0_0_3px_rgba(249,115,22,0.2)]",
    cardClass: "border-orange-400/30 bg-[color:var(--surface-muted)]",
    label: "#3",
  },
];

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
    .slice(0, 3);

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
      {items.map((item, index) => {
        const tool = data.tools.find((t) => (item.toolId ? t.id === item.toolId : t.name === item.name));
        const href = tool ? `/ferramentas/detalhes?id=${tool.id}` : "/ferramentas";
        const rank = RANK_STYLES[index];
        const Icon = rank.icon;
        return (
          <Link key={item.id} href={href} className="block">
            <div className={`relative flex items-center gap-4 rounded-2xl border p-4 min-h-20 transition hover:brightness-105 ${rank.cardClass}`}>
              <div className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full text-xs font-bold ${rank.badgeClass}`}>
                <Icon className="h-4 w-4" />
                <span>{rank.label}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate font-semibold text-[color:var(--foreground)]">{item.name}</h3>
                  <span className="shrink-0 text-sm text-[color:var(--muted)]">{item.score.toLocaleString()} acessos</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.summary}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}