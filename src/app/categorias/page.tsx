import Link from "next/link";
import { categories } from "@/lib/content";

export const metadata = {
  title: "Categorias",
  description: "Navegue pelas categorias principais de ferramentas e conteúdos de IA com organização editorial.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Categorias</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Encontre a área certa de IA rapidamente</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">Organizamos ferramentas por uso prático, desde programação e design até agentes, marketing e modelos LLM.</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categorias#${category.slug}`} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 transition hover:bg-white/10">
            <div className="text-2xl text-cyan-300">{category.icon}</div>
            <h2 className="mt-4 text-xl font-semibold text-white">{category.name}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">Guia, ferramentas e comparativos específicos sobre {category.name.toLowerCase()}.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
