import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { posts } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Leia artigos SEO sobre IA, produtividade, ferramentas e tendências do mercado.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Artigos SEO para acompanhar o mercado de IA</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">Conteúdo editorial com foco em decisões reais, tendências e guias de uso para profissionais e empresas.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <div className="flex items-center gap-2 text-cyan-300">
              <Newspaper className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.24em]">Notícia</p>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
              Ler artigo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
