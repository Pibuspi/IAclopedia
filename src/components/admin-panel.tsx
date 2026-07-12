"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Star, Copy, CheckCircle2, Sparkles } from "lucide-react";
import { createId, loadAppData, saveAppData, type AppData, type NewsItem, type PromptItem, type RankingItem, type Tool, type VideoItem } from "@/lib/app-data";

type Section = "tools" | "news" | "videos" | "prompts" | "ranking";
type ContentItem = Tool | NewsItem | VideoItem | PromptItem | RankingItem;

const initialForm = {
  tool: {
    id: "",
    name: "",
    tagline: "",
    category: "",
    company: "",
    rating: 8,
    price: "",
    freePlan: "",
    description: "",
    pros: "",
    cons: "",
    bestFor: "",
    notFor: "",
  },
  news: {
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    category: "",
    publishedAt: "",
  },
  video: {
    id: "",
    title: "",
    slug: "",
    summary: "",
    tools: "",
  },
  prompt: {
    id: "",
    title: "",
    category: "",
    level: "",
    prompt: "",
    explanation: "",
    expected: "",
    tools: "",
  },
  ranking: {
    id: "",
    name: "",
    category: "",
    score: 8,
    summary: "",
  },
};

export function AdminPanel() {
  const [data, setData] = useState<AppData>(() => loadAppData());
  const [activeSection, setActiveSection] = useState<Section>("tools");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(initialForm);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  useEffect(() => {
    saveAppData(data);
    const timeout = window.setTimeout(() => {
      setSavedMessage("Conteúdo atualizado e refletido no site.");
    }, 0);
    const resetTimeout = window.setTimeout(() => setSavedMessage(null), 1800);
    return () => {
      window.clearTimeout(timeout);
      window.clearTimeout(resetTimeout);
    };
  }, [data]);

  const sectionTitle = useMemo(() => ({
    tools: "Ferramentas",
    news: "Notícias",
    videos: "Vídeos",
    prompts: "Prompts",
    ranking: "Ranking",
  }[activeSection]), [activeSection]);

  function resetForm() {
    setForm(initialForm);
    setEditingId(null);
  }

  function startCreate() {
    resetForm();
  }

  function startEdit(item: Tool | NewsItem | VideoItem | PromptItem | RankingItem) {
    if (activeSection === "tools") {
      const tool = item as Tool;
      setEditingId(tool.id);
      setForm({
        ...initialForm,
        tool: {
          id: tool.id,
          name: tool.name,
          tagline: tool.tagline,
          category: tool.category,
          company: tool.company,
          rating: tool.rating,
          price: tool.price,
          freePlan: tool.freePlan,
          description: tool.description,
          pros: tool.pros.join(", "),
          cons: tool.cons.join(", "),
          bestFor: tool.bestFor.join(", "),
          notFor: tool.notFor.join(", "),
        },
      });
      return;
    }

    if (activeSection === "news") {
      const news = item as NewsItem;
      setEditingId(news.id);
      setForm({
        ...initialForm,
        news: {
          id: news.id,
          title: news.title,
          slug: news.slug,
          excerpt: news.excerpt,
          category: news.category,
          publishedAt: news.publishedAt,
        },
      });
      return;
    }

    if (activeSection === "ranking") {
      const rankingItem = item as RankingItem;
      setEditingId(rankingItem.id);
      setForm({
        ...initialForm,
        ranking: {
          id: rankingItem.id,
          name: rankingItem.name,
          category: rankingItem.category,
          score: rankingItem.score,
          summary: rankingItem.summary,
        },
      });
      return;
    }

    if (activeSection === "videos") {
      const video = item as VideoItem;
      setEditingId(video.id);
      setForm({
        ...initialForm,
        video: {
          id: video.id,
          title: video.title,
          slug: video.slug,
          summary: video.summary,
          tools: video.tools.join(", "),
        },
      });
      return;
    }

    const prompt = item as PromptItem;
    setEditingId(prompt.id);
    setForm({
      ...initialForm,
      prompt: {
        id: prompt.id,
        title: prompt.title,
        category: prompt.category,
        level: prompt.level,
        prompt: prompt.prompt,
        explanation: prompt.explanation,
        expected: prompt.expected,
        tools: prompt.tools.join(", "),
      },
    });
  }

  function saveCurrent() {
    if (activeSection === "tools") {
      const payload = form.tool;
      const nextTool: Tool = {
        id: editingId ?? createId("tool"),
        name: payload.name,
        tagline: payload.tagline,
        category: payload.category,
        company: payload.company,
        rating: Number(payload.rating),
        price: payload.price,
        freePlan: payload.freePlan,
        description: payload.description,
        pros: payload.pros.split(",").map((item) => item.trim()).filter(Boolean),
        cons: payload.cons.split(",").map((item) => item.trim()).filter(Boolean),
        bestFor: payload.bestFor.split(",").map((item) => item.trim()).filter(Boolean),
        notFor: payload.notFor.split(",").map((item) => item.trim()).filter(Boolean),
      };
      setData((current) => ({
        ...current,
        tools: editingId
          ? current.tools.map((item) => (item.id === editingId ? nextTool : item))
          : [nextTool, ...current.tools],
      }));
      resetForm();
      return;
    }

    if (activeSection === "news") {
      const payload = form.news;
      const nextItem: NewsItem = {
        id: editingId ?? createId("news"),
        title: payload.title,
        slug: payload.slug || payload.title.toLowerCase().replace(/\s+/g, "-"),
        excerpt: payload.excerpt,
        category: payload.category,
        publishedAt: payload.publishedAt,
      };
      setData((current) => ({
        ...current,
        posts: editingId
          ? current.posts.map((item) => (item.id === editingId ? nextItem : item))
          : [nextItem, ...current.posts],
      }));
      resetForm();
      return;
    }

    if (activeSection === "videos") {
      const payload = form.video;
      const nextItem: VideoItem = {
        id: editingId ?? createId("video"),
        title: payload.title,
        slug: payload.slug || payload.title.toLowerCase().replace(/\s+/g, "-"),
        summary: payload.summary,
        tools: payload.tools.split(",").map((item) => item.trim()).filter(Boolean),
      };
      setData((current) => ({
        ...current,
        videos: editingId
          ? current.videos.map((item) => (item.id === editingId ? nextItem : item))
          : [nextItem, ...current.videos],
      }));
      resetForm();
      return;
    }

    if (activeSection === "ranking") {
      const payload = form.ranking;
      const rankingEntry: RankingItem = {
        id: editingId ?? createId("ranking"),
        name: payload.name,
        category: payload.category,
        score: Number(payload.score),
        summary: payload.summary,
      };
      setData((current) => ({
        ...current,
        tools: current.tools.map((tool) => tool.name === payload.name ? { ...tool, rating: Number(payload.score) } : tool),
        ranking: editingId
          ? current.ranking.map((item) => (item.id === editingId ? rankingEntry : item))
          : [rankingEntry, ...current.ranking],
      }));
      resetForm();
      return;
    }

    const payload = form.prompt;
    const nextItem: PromptItem = {
      id: editingId ?? createId("prompt"),
      title: payload.title,
      category: payload.category,
      level: payload.level,
      prompt: payload.prompt,
      explanation: payload.explanation,
      expected: payload.expected,
      tools: payload.tools.split(",").map((item) => item.trim()).filter(Boolean),
    };
    setData((current) => ({
      ...current,
      prompts: editingId
        ? current.prompts.map((item) => (item.id === editingId ? nextItem : item))
        : [nextItem, ...current.prompts],
    }));
    resetForm();
  }

  function removeItem(id: string) {
    setData((current) => {
      if (activeSection === "tools") {
        return { ...current, tools: current.tools.filter((item) => item.id !== id) };
      }
      if (activeSection === "news") {
        return { ...current, posts: current.posts.filter((item) => item.id !== id) };
      }
      if (activeSection === "videos") {
        return { ...current, videos: current.videos.filter((item) => item.id !== id) };
      }
      if (activeSection === "ranking") {
        return { ...current, ranking: current.ranking.filter((item) => item.id !== id) };
      }
      return { ...current, prompts: current.prompts.filter((item) => item.id !== id) };
    });
    resetForm();
  }

  function toggleFavorite(toolId: string) {
    setData((current) => ({
      ...current,
      favorites: current.favorites.includes(toolId)
        ? current.favorites.filter((id) => id !== toolId)
        : [...current.favorites, toolId],
    }));
  }

  function copyPrompt(text: string) {
    void navigator.clipboard.writeText(text);
  }

  function getItemTitle(item: ContentItem) {
    if ("title" in item && typeof item.title === "string") {
      return item.title;
    }
    if ("name" in item && typeof item.name === "string") {
      return item.name;
    }
    return "";
  }

  function getItemSummary(item: ContentItem) {
    if ("excerpt" in item && typeof item.excerpt === "string") {
      return item.excerpt;
    }
    if ("summary" in item && typeof item.summary === "string") {
      return item.summary;
    }
    if ("explanation" in item && typeof item.explanation === "string") {
      return item.explanation;
    }
    if ("tagline" in item && typeof item.tagline === "string") {
      return item.tagline;
    }
    return "";
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Admin</p>
          <h2 className="mt-2 text-3xl font-semibold text-[color:var(--foreground)]">Dashboard de conteúdo</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">Adicione, edite e remova conteúdo diretamente para atualizar o site em tempo real.</p>
        </div>
        <div className="flex items-center gap-3">
          {savedMessage && (
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
              {savedMessage}
            </div>
          )}
          <button onClick={startCreate} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Plus className="h-4 w-4" />
            Novo {sectionTitle}
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {(["tools", "news", "videos", "prompts", "ranking"] as Section[]).map((section) => (
          <button key={section} onClick={() => { setActiveSection(section); resetForm(); }} className={`rounded-full px-4 py-2 text-sm ${activeSection === section ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : "bg-[color:var(--surface)] text-[color:var(--muted)]"}`}>
            {section === "tools" ? "Ferramentas" : section === "news" ? "Notícias" : section === "videos" ? "Vídeos" : section === "prompts" ? "Prompts" : "Ranking"}
          </button>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {(activeSection === "tools" ? data.tools : activeSection === "news" ? data.posts : activeSection === "videos" ? data.videos : activeSection === "prompts" ? data.prompts : (data as AppData & { ranking?: Array<{ name: string; category: string; score: number; summary: string }> }).ranking ?? []).map((item) => (
            <div key={item.id} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{activeSection === "tools" ? (item as Tool).name : activeSection === "ranking" ? (item as {name:string}).name : getItemTitle(item)}</h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{activeSection === "tools" ? (item as Tool).tagline : activeSection === "ranking" ? (item as {summary:string}).summary : getItemSummary(item)}</p>
                </div>
                <div className="flex gap-2">
                  {activeSection === "tools" && (
                    <button onClick={() => toggleFavorite((item as Tool).id)} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-2 text-[color:var(--muted)]">
                      <Star className={`h-4 w-4 ${data.favorites.includes((item as Tool).id) ? "fill-amber-400 text-amber-400" : ""}`} />
                    </button>
                  )}
                  {activeSection === "prompts" && (
                    <button onClick={() => copyPrompt((item as PromptItem).prompt)} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-2 text-[color:var(--muted)]">
                      <Copy className="h-4 w-4" />
                    </button>
                  )}
                  <button onClick={() => startEdit(item)} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-2 text-[color:var(--muted)]">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button onClick={() => removeItem(item.id)} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-2 text-[color:var(--muted)]">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
          <div className="flex items-center gap-2 text-cyan-300">
            <Sparkles className="h-4 w-4" />
            <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{editingId ? `Editar ${sectionTitle}` : `Adicionar ${sectionTitle}`}</h3>
          </div>
          {activeSection === "tools" && (
            <div className="mt-6 space-y-4">
              <input value={form.tool.name} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, name: e.target.value } }))} placeholder="Nome da ferramenta" className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)]" />
              <input value={form.tool.tagline} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, tagline: e.target.value } }))} placeholder="Tagline" className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)]" />
              <input value={form.tool.category} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, category: e.target.value } }))} placeholder="Categoria" className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)]" />
              <input value={form.tool.company} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, company: e.target.value } }))} placeholder="Empresa" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.tool.price} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, price: e.target.value } }))} placeholder="Preço" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.tool.freePlan} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, freePlan: e.target.value } }))} placeholder="Plano gratuito" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input type="number" value={form.tool.rating} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, rating: Number(e.target.value) } }))} placeholder="Nota" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <textarea value={form.tool.description} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, description: e.target.value } }))} placeholder="Descrição" className="min-h-24 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)]" />
              <input value={form.tool.pros} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, pros: e.target.value } }))} placeholder="Prós (separados por vírgula)" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.tool.cons} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, cons: e.target.value } }))} placeholder="Contras (separados por vírgula)" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.tool.bestFor} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, bestFor: e.target.value } }))} placeholder="Quando usar (separados por vírgula)" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.tool.notFor} onChange={(e) => setForm((current) => ({ ...current, tool: { ...current.tool, notFor: e.target.value } }))} placeholder="Quando não usar (separados por vírgula)" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
            </div>
          )}

          {activeSection === "news" && (
            <div className="mt-6 space-y-4">
              <input value={form.news.title} onChange={(e) => setForm((current) => ({ ...current, news: { ...current.news, title: e.target.value } }))} placeholder="Título da notícia" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.news.slug} onChange={(e) => setForm((current) => ({ ...current, news: { ...current.news, slug: e.target.value } }))} placeholder="Slug" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.news.category} onChange={(e) => setForm((current) => ({ ...current, news: { ...current.news, category: e.target.value } }))} placeholder="Categoria" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.news.publishedAt} onChange={(e) => setForm((current) => ({ ...current, news: { ...current.news, publishedAt: e.target.value } }))} placeholder="Data de publicação" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <textarea value={form.news.excerpt} onChange={(e) => setForm((current) => ({ ...current, news: { ...current.news, excerpt: e.target.value } }))} placeholder="Resumo" className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
            </div>
          )}

          {activeSection === "videos" && (
            <div className="mt-6 space-y-4">
              <input value={form.video.title} onChange={(e) => setForm((current) => ({ ...current, video: { ...current.video, title: e.target.value } }))} placeholder="Título do vídeo" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.video.slug} onChange={(e) => setForm((current) => ({ ...current, video: { ...current.video, slug: e.target.value } }))} placeholder="Slug" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <textarea value={form.video.summary} onChange={(e) => setForm((current) => ({ ...current, video: { ...current.video, summary: e.target.value } }))} placeholder="Resumo" className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.video.tools} onChange={(e) => setForm((current) => ({ ...current, video: { ...current.video, tools: e.target.value } }))} placeholder="Ferramentas (separadas por vírgula)" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
            </div>
          )}

          {activeSection === "ranking" && (
            <div className="mt-6 space-y-4">
              <input value={form.ranking.name} onChange={(e) => setForm((current) => ({ ...current, ranking: { ...current.ranking, name: e.target.value } }))} placeholder="Nome da IA ou item" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.ranking.category} onChange={(e) => setForm((current) => ({ ...current, ranking: { ...current.ranking, category: e.target.value } }))} placeholder="Categoria" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input type="number" value={form.ranking.score} onChange={(e) => setForm((current) => ({ ...current, ranking: { ...current.ranking, score: Number(e.target.value) } }))} placeholder="Pontuação" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <textarea value={form.ranking.summary} onChange={(e) => setForm((current) => ({ ...current, ranking: { ...current.ranking, summary: e.target.value } }))} placeholder="Resumo do ranking" className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
            </div>
          )}

          {activeSection === "prompts" && (
            <div className="mt-6 space-y-4">
              <input value={form.prompt.title} onChange={(e) => setForm((current) => ({ ...current, prompt: { ...current.prompt, title: e.target.value } }))} placeholder="Título do prompt" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.prompt.category} onChange={(e) => setForm((current) => ({ ...current, prompt: { ...current.prompt, category: e.target.value } }))} placeholder="Categoria" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.prompt.level} onChange={(e) => setForm((current) => ({ ...current, prompt: { ...current.prompt, level: e.target.value } }))} placeholder="Nível" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <textarea value={form.prompt.prompt} onChange={(e) => setForm((current) => ({ ...current, prompt: { ...current.prompt, prompt: e.target.value } }))} placeholder="Prompt" className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <textarea value={form.prompt.explanation} onChange={(e) => setForm((current) => ({ ...current, prompt: { ...current.prompt, explanation: e.target.value } }))} placeholder="Explicação" className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <textarea value={form.prompt.expected} onChange={(e) => setForm((current) => ({ ...current, prompt: { ...current.prompt, expected: e.target.value } }))} placeholder="Resultado esperado" className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
              <input value={form.prompt.tools} onChange={(e) => setForm((current) => ({ ...current, prompt: { ...current.prompt, tools: e.target.value } }))} placeholder="Ferramentas compatíveis" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
            </div>
          )}

          <div className="mt-8 flex gap-3">
            <button onClick={saveCurrent} className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm font-medium text-[color:var(--background)]">Salvar</button>
            <button onClick={resetForm} className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--muted)]">Limpar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
