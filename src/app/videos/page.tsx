"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink, PlayCircle } from "lucide-react";
import { APP_DATA_EVENT, defaultAppData, getYoutubeThumbnail, loadAppData, type Tool, type VideoItem } from "@/lib/app-data";

export default function VideosPage() {
  const [videos, setVideos] = useState<VideoItem[]>(defaultAppData.videos);
  const [tools, setTools] = useState<Tool[]>(defaultAppData.tools);

  useEffect(() => {
    const syncData = () => {
      const data = loadAppData();
      setVideos(data.videos);
      setTools(data.tools);
    };
    syncData();
    window.addEventListener(APP_DATA_EVENT, syncData);
    return () => window.removeEventListener(APP_DATA_EVENT, syncData);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">Vídeos</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)] sm:text-5xl">Conteúdo visual para aprender mais rápido</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">Organizamos vídeos com resumo, ferramentas utilizadas, links e conteúdos relacionados para facilitar a navegação.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {videos.map((video) => {
          const thumbnail = getYoutubeThumbnail(video.youtubeUrl);
          return (
            <article key={video.id} className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
              {thumbnail && (
                <a href={video.youtubeUrl} target="_blank" rel="noreferrer" className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnail}
                    alt={`Miniatura do vídeo ${video.title}`}
                    className="h-56 w-full object-cover transition hover:opacity-90"
                  />
                </a>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[color:var(--accent)]">
                  <PlayCircle className="h-5 w-5" />
                  <p className="text-sm uppercase tracking-[0.24em]">Vídeo</p>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">{video.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{video.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {video.tools.map((toolName) => {
                    const match = tools.find((t) => t.name.toLowerCase() === toolName.toLowerCase());
                    return match ? (
                      <Link
                        key={toolName}
                        href={`/ferramentas/detalhes?id=${match.id}`}
                        className="rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-3 py-1 text-sm text-[color:var(--accent-strong)] transition hover:bg-[color:var(--accent-soft)]"
                      >
                        {toolName}
                      </Link>
                    ) : (
                      <span key={toolName} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-1 text-sm text-[color:var(--muted)]">
                        {toolName}
                      </span>
                    );
                  })}
                </div>
                {video.youtubeUrl && (
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Assistir no YouTube
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}