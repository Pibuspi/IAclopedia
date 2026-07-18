"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { APP_DATA_EVENT, defaultAppData, loadAppData, type PromptItem } from "@/lib/app-data";

export default function PromptsPage() {
  const [prompts, setPrompts] = useState<PromptItem[]>(defaultAppData.prompts);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const syncData = () => setPrompts(loadAppData().prompts);
    syncData();
    window.addEventListener(APP_DATA_EVENT, syncData);
    return () => window.removeEventListener(APP_DATA_EVENT, syncData);
  }, []);

  async function copyPrompt(prompt: PromptItem) {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopiedId(prompt.id);
      window.setTimeout(() => setCopiedId((current) => (current === prompt.id ? null : current)), 1800);
    } catch {
      // clipboard not available, silently ignore
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">Prompts</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)] sm:text-5xl">Biblioteca de prompts para resultados melhores</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">Cada prompt possui objetivo, nível, explicação, resultado esperado e ferramentas compatíveis.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {prompts.map((prompt) => (
          <article key={prompt.id} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--accent)]">
              <span>{prompt.category}</span>
              <span className="text-[color:var(--muted-strong)]">•</span>
              <span>{prompt.level}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">{prompt.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{prompt.explanation}</p>
            <div className="mt-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-sm text-[color:var(--foreground)]">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-[color:var(--foreground)]">Prompt</p>
                <button
                  onClick={() => copyPrompt(prompt)}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-3 py-1.5 text-xs font-medium text-[color:var(--accent-strong)] transition hover:bg-[color:var(--accent-soft)]"
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copiar prompt
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-[color:var(--muted)]">{prompt.prompt}</p>
            </div>
            {prompt.expected && (
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                <span className="font-medium text-[color:var(--foreground)]">Resultado esperado: </span>
                {prompt.expected}
              </p>
            )}
            <p className="mt-4 text-sm text-[color:var(--muted)]">Ferramentas compatíveis: {prompt.tools.join(", ")}</p>
          </article>
        ))}
      </div>
    </div>
  );
}