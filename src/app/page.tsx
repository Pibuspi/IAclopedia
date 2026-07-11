import Link from "next/link";
import { ArrowRight, Compass, Newspaper, Sparkles, Video } from "lucide-react";
import { categories, comparatives, featuredTools, posts, videos } from "@/lib/content";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),linear-gradient(135deg,_#050505_0%,_#09090b_100%)]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            IAclopédia 2026
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A maior referência brasileira sobre IA.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
            Ferramentas, avaliações, comparativos, notícias e prompts em um só lugar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/ferramentas" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200">
              Explorar ferramentas
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/comparar" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-zinc-100 transition hover:bg-white/10">
              Comparar IAs
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <Link key={category.slug} href={`/categorias#${category.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="text-xl text-cyan-300">{category.icon}</div>
              <h3 className="mt-3 font-medium text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">Guias e ferramentas para {category.name.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Ferramentas em destaque</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Escolhas rápidas para começar</h2>
          </div>
          <Link href="/ferramentas" className="text-sm text-cyan-300 transition hover:text-cyan-200">Ver tudo</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <article key={tool.id} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">{tool.rating}/10</span>
                <span className="text-sm text-zinc-400">{tool.category}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{tool.name}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{tool.description}</p>
              <Link href={`/ferramentas/${tool.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-300">
                Ver detalhes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="mb-5 flex items-center gap-2 text-cyan-300">
            <Video className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.24em]">Vídeos</p>
          </div>
          <div className="space-y-4">
            {videos.slice(0, 2).map((video) => (
              <div key={video.slug} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <h3 className="font-medium text-white">{video.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{video.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="mb-5 flex items-center gap-2 text-cyan-300">
            <Newspaper className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.24em]">Notícias</p>
          </div>
          <div className="space-y-4">
            {posts.slice(0, 2).map((post) => (
              <div key={post.slug} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <h3 className="font-medium text-white">{post.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Comparativos rápidos</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Veja as diferenças com rapidez</h2>
          </div>
          <Link href="/comparativos" className="text-sm text-cyan-300 transition hover:text-cyan-200">Abrir todos</Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {comparatives.slice(0, 3).map((item) => (
            <div key={item.slug} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
              <div className="flex items-center gap-2 text-cyan-300">
                <Compass className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.24em]">Comparativo</p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
