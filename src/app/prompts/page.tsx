import { prompts } from "@/lib/content";

export const metadata = {
  title: "Prompts",
  description: "Explore prompts prontos para produtividade, texto, pesquisa e automação com IA.",
};

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Prompts</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Biblioteca de prompts para resultados melhores</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">Cada prompt possui objetivo, nível, explicação, resultado esperado e ferramentas compatíveis.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {prompts.map((prompt) => (
          <article key={prompt.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-300">
              <span>{prompt.category}</span>
              <span className="text-zinc-600">•</span>
              <span>{prompt.level}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{prompt.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{prompt.explanation}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
              <p className="font-medium text-white">Prompt</p>
              <p className="mt-2 text-zinc-300">{prompt.prompt}</p>
            </div>
            <p className="mt-4 text-sm text-zinc-500">Ferramentas compatíveis: {prompt.tools.join(", ")}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
