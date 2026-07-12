"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Search, SlidersHorizontal, Sparkles, Star } from "lucide-react";
import { APP_DATA_EVENT, defaultAppData, loadAppData, type Tool } from "@/lib/app-data";

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>(defaultAppData.tools);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [price, setPrice] = useState("Todos");
  const [sort, setSort] = useState("rating");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const syncData = () => {
      const data = loadAppData();
      setTools(data.tools);
      setFavorites(data.favorites || []);
    };

    syncData();
    window.addEventListener(APP_DATA_EVENT, syncData);
    return () => window.removeEventListener(APP_DATA_EVENT, syncData);
  }, []);

  const categories = useMemo(() => ["Todas", ...Array.from(new Set(tools.map((tool) => tool.category)))], [tools]);

  const filteredTools = useMemo(() => {
    const query = search.toLowerCase();
    const list = tools.filter((tool) => {
      const matchesSearch = !query || tool.name.toLowerCase().includes(query) || tool.tagline.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query);
      const matchesCategory = category === "Todas" || tool.category === category;
      const matchesPrice = price === "Todos" || (price === "Grátis" ? tool.freePlan === "Sim" : price === "Pago" ? tool.freePlan !== "Sim" : true);
      return matchesSearch && matchesCategory && matchesPrice;
    });

    return [...list].sort((a, b) => {
      if (sort === "price") return a.price.localeCompare(b.price);
      if (sort === "name") return a.name.localeCompare(b.name);
      return b.rating - a.rating;
    });
  }, [category, price, search, sort, tools]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Ferramentas</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)] sm:text-5xl">Encontre a IA certa em poucos segundos</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">Busque por nome, categoria, preço, nota e uso. Tudo organizado para comparar com clareza.</p>
      </div>

      <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 shadow-sm sm:p-6">
        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_0.9fr]">
          <label className="flex items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)]">
            <Search className="h-4 w-4 text-cyan-300" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar ferramenta" className="w-full bg-transparent outline-none placeholder:text-[color:var(--muted)]" />
          </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)]">
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select value={price} onChange={(e) => setPrice(e.target.value)} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)]">
            <option value="Todos">Todos</option>
            <option value="Grátis">Grátis</option>
            <option value="Pago">Pago</option>
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)]">
            <option value="rating">Melhor nota</option>
            <option value="name">Nome</option>
            <option value="price">Preço</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--muted)]">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-cyan-300" />
          <span>{filteredTools.length} ferramentas encontradas</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-cyan-200">
          <Sparkles className="h-4 w-4" />
          <span>Comparações rápidas e claras</span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredTools.map((tool) => (
          <article key={tool.id} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">{tool.rating}/10</span>
              <button onClick={() => setFavorites((current) => current.includes(tool.id) ? current.filter((id) => id !== tool.id) : [...current, tool.id])} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-2 text-[color:var(--muted)] transition hover:text-amber-300">
                <Star className={`h-4 w-4 ${favorites.includes(tool.id) ? "fill-amber-400 text-amber-400" : ""}`} />
              </button>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-[color:var(--foreground)]">{tool.name}</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{tool.tagline}</p>
            <p className="mt-4 text-sm font-medium text-cyan-300">{tool.price}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">{tool.category}</span>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{tool.freePlan}</span>
            </div>
            <Link href={`/ferramentas/${tool.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] transition hover:text-cyan-300">
              Ver detalhes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
