import Link from "next/link";
import { ArrowRight, Compass, Sparkles, Video } from "lucide-react";
import { comparatives, featuredTools } from "@/lib/content";
import RankingWidget from "@/components/ranking-widget";
import HomeVideos from "@/components/home-videos";

const quickHighlights = [
  { title: "Ferramentas escolhidas", text: "Compare preço, nota e uso real para encontrar a melhor IA para cada tarefa." },
  { title: "Comparativos rápidos", text: "Entenda diferenças entre opções populares sem perder tempo em pesquisas dispersas." },
  { title: "Conteúdo útil", text: "Prompts e vídeos para aprender mais e aplicar hoje mesmo." },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-3 py-1 text-sm text-[color:var(--accent)] shadow-sm">
              <Sparkles className="h-4 w-4" />
              IAclopédia 2026
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
              Encontre a melhor IA para cada tarefa, sem perder tempo.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
              A IAclopédia reúne ferramentas, comparativos, vídeos e prompts em um lugar organizado para você decidir com mais segurança.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/ferramentas" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 font-medium text-[color:var(--background)] transition hover:brightness-110">
                Explorar ferramentas
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/comparar" className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 font-medium text-[color:var(--foreground)] transition hover:bg-[color:var(--surface-muted)]">
                Comparar IAs
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">Em Alta</p>
            <RankingWidget />
            <Link href="/ferramentas" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]">
              Ver ferramentas em destaque
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">Ferramentas em destaque</p>
            <h2 className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">Comece pelos melhores exemplos</h2>
          </div>
          <Link href="/ferramentas" className="text-sm font-medium text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]">Ver tudo</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <article key={tool.id} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow)]">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-sm font-medium text-[color:var(--accent)]">{tool.rating}/10</span>
                <span className="text-sm text-[color:var(--muted)]">{tool.category}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[color:var(--foreground)]">{tool.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{tool.description}</p>
              <Link href={`/ferramentas/detalhes?id=${tool.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]">
                Ver detalhes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>



      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2 text-[color:var(--accent)]">
            <Video className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.24em]">Vídeos</p>
          </div>
          <HomeVideos />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">Comparativos rápidos</p>
            <h2 className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">Veja as diferenças com rapidez</h2>
          </div>
          <Link href="/comparativos" className="text-sm text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]">Abrir todos</Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {comparatives.slice(0, 3).map((item) => (
            <div key={item.slug} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[color:var(--accent)]">
                <Compass className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.24em]">Comparativo</p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}