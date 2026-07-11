import { PlayCircle } from "lucide-react";
import { videos } from "@/lib/content";

export const metadata = {
  title: "Vídeos",
  description: "Assista a conteúdos selecionados sobre IA, comparativos práticos e tutoriais curados pela IAclopédia.",
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Vídeos</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Conteúdo visual para aprender mais rápido</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">Organizamos vídeos com resumo, ferramentas utilizadas, links e conteúdos relacionados para facilitar a navegação.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {videos.map((video) => (
          <article key={video.slug} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <div className="flex items-center gap-2 text-cyan-300">
              <PlayCircle className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.24em]">Vídeo</p>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{video.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{video.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {video.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
