"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, ExternalLink, Share2 } from "lucide-react";
import { APP_DATA_EVENT, defaultAppData, loadAppData, type Tool } from "@/lib/app-data";

function ToolDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("id") ?? "";

  const [tools, setTools] = useState<Tool[]>(defaultAppData.tools);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const syncData = () => {
      setTools(loadAppData().tools);
      setHydrated(true);
    };
    syncData();
    window.addEventListener(APP_DATA_EVENT, syncData);
    return () => window.removeEventListener(APP_DATA_EVENT, syncData);
  }, []);

  const tool = tools.find((item) => item.id === slug);

  if (!tool) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-lg text-[color:var(--foreground)]">
          {hydrated ? "Ferramenta não encontrada." : "Carregando ferramenta..."}
        </p>
        {hydrated && (
          <Link href="/ferramentas" className="mt-4 inline-flex items-center gap-2 text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]">
            Voltar para a lista
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    );
  }

  const alternatives = (tool.alternatives ?? []).map((alternative) => {
    const match = tools.find((item) => item.name.toLowerCase() === alternative.toLowerCase());
    return { name: alternative, id: match?.id };
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">{tool.category}</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)]">{tool.name}</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--foreground)]">{tool.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {tool.website && (
            <a
              href={tool.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-sm text-[color:var(--foreground)] transition hover:bg-[color:var(--surface-strong)]"
            >
              <ExternalLink className="h-4 w-4 text-[color:var(--accent)]" />
              Visitar site oficial
            </a>
          )}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
            <p className="text-sm text-[color:var(--muted)]">Nota IAclopédia</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-600">{tool.rating}/10</p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
            <p className="text-sm text-[color:var(--muted)]">Preço</p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">{tool.price}</p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
            <p className="text-sm text-[color:var(--muted)]">Plano gratuito</p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">{tool.freePlan}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)]">Prós</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--foreground)]">
              {tool.pros.map((pro) => (
                <li key={pro}>• {pro}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)]">Contras</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--foreground)]">
              {tool.cons.map((con) => (
                <li key={con}>• {con}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)]">Quando usar</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--foreground)]">
              {tool.bestFor.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)]">Quando não usar</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--foreground)]">
              {tool.notFor.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
            <div className="flex items-center gap-2 text-[color:var(--accent)]">
              <Share2 className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-[color:var(--foreground)]">Alternativas</h2>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {alternatives.length === 0 && (
                <p className="text-sm text-[color:var(--muted)]">Nenhuma alternativa cadastrada.</p>
              )}
              {alternatives.map((alternative) =>
                alternative.id ? (
                  <Link
                    key={alternative.name}
                    href={`/ferramentas/detalhes?id=${alternative.id}`}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-1 text-sm text-[color:var(--accent-strong)] transition hover:bg-[color:var(--accent-soft)]"
                  >
                    {alternative.name}
                  </Link>
                ) : (
                  <span key={alternative.name} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-1 text-sm text-[color:var(--muted)]">
                    {alternative.name}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
            <div className="flex items-center gap-2 text-[color:var(--accent)]">
              <ArrowUpRight className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-[color:var(--foreground)]">Screenshots</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {(tool.screenshots ?? []).length === 0 && (
                <p className="text-sm text-[color:var(--muted)]">Nenhum screenshot cadastrado.</p>
              )}
              {(tool.screenshots ?? []).map((screenshot) => {
                const isImageUrl = /^https?:\/\//i.test(screenshot.trim());
                return (
                  <div key={screenshot} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
                    {isImageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={screenshot.trim()}
                        alt={`Screenshot de ${tool.name}`}
                        className="h-40 w-full rounded-xl border border-[color:var(--border)] object-cover"
                      />
                    ) : (
                      <>
                        <div className="h-24 rounded-xl border border-[color:var(--border)] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_36%),linear-gradient(135deg,_rgba(24,24,27,0.95),_rgba(9,9,11,1))]" />
                        <p className="mt-3 text-sm text-[color:var(--muted)]">{screenshot}</p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5 text-sm text-[color:var(--muted)]">
          <p className="font-medium text-[color:var(--foreground)]">Próximo passo</p>
          <p className="mt-2">Continue explorando outras ferramentas e compare opções de forma prática na página de ferramentas.</p>
          <Link href="/ferramentas" className="mt-4 inline-flex items-center gap-2 text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]">
            Voltar para a lista
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ToolDetailsPage() {
  return (
    <Suspense fallback={null}>
      <ToolDetailContent />
    </Suspense>
  );
}