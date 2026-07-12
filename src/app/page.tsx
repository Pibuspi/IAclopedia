import Link from "next/link";
import { ArrowRight, Compass, Newspaper, Sparkles, Video } from "lucide-react";
import { categories, comparatives, featuredTools, posts, videos } from "@/lib/content";

const quickHighlights = [
  { title: "Ferramentas escolhidas", text: "Compare preço, nota e uso real para encontrar a melhor IA para cada tarefa." },
  { title: "Comparativos rápidos", text: "Entenda diferenças entre opções populares sem perder tempo em pesquisas dispersas." },
  { title: "Conteúdo útil", text: "Prompts, notícias e vídeos para aprender mais e aplicar hoje mesmo." },
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
              A IAclopédia reúne ferramentas, comparativos, notícias, vídeos e prompts em um lugar organizado para você decidir com mais segurança.
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
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">O que você encontra</p>
            <div className="mt-5 space-y-3">
              {quickHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
                  <h2 className="font-semibold text-[color:var(--foreground)]">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
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
              <Link href={`/ferramentas/${tool.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]">
                Ver detalhes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <Link key={category.slug} href={`/categorias#${category.slug}`} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm transition hover:bg-[color:var(--surface-muted)]">
              <div className="text-xl text-[color:var(--accent)]">{category.icon}</div>
              <h3 className="mt-3 font-medium text-[color:var(--foreground)]">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Guias e ferramentas para {category.name.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2 text-cyan-300">
            <Video className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.24em]">Vídeos</p>
          </div>
          <div className="space-y-4">
            {videos.slice(0, 2).map((video) => (
              <div key={video.slug} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
                <h3 className="font-medium text-[color:var(--foreground)]">{video.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{video.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2 text-cyan-300">
            <Newspaper className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.24em]">Notícias</p>
          </div>
          <div className="space-y-4">
            {posts.slice(0, 2).map((post) => (
              <div key={post.slug} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
                <h3 className="font-medium text-[color:var(--foreground)]">{post.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">Comparativos rápidos</p>
            <h2 className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">Veja as diferenças com rapidez</h2>
          </div>
          <Link href="/comparativos" className="text-sm text-cyan-300 transition hover:text-cyan-200">Abrir todos</Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {comparatives.slice(0, 3).map((item) => (
            <div key={item.slug} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-300">
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
