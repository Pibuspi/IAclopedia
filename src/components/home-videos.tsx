"use client";

import { useEffect, useState } from "react";
import { APP_DATA_EVENT, defaultAppData, getYoutubeThumbnail, loadAppData, type VideoItem } from "@/lib/app-data";

export default function HomeVideos() {
  const [videos, setVideos] = useState<VideoItem[]>(defaultAppData.videos);

  useEffect(() => {
    const syncData = () => setVideos(loadAppData().videos);
    syncData();
    window.addEventListener(APP_DATA_EVENT, syncData);
    return () => window.removeEventListener(APP_DATA_EVENT, syncData);
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {videos.slice(0, 2).map((video) => {
        const thumbnail = getYoutubeThumbnail(video.youtubeUrl);
        const CardContent = (
          <>
            {thumbnail && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={thumbnail} alt={`Miniatura do vídeo ${video.title}`} className="h-36 w-full object-cover" />
            )}
            <div className="p-4">
              <h3 className="font-medium text-[color:var(--foreground)]">{video.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{video.summary}</p>
            </div>
          </>
        );
        return video.youtubeUrl ? (
          <a
            key={video.id}
            href={video.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] transition hover:brightness-105"
          >
            {CardContent}
          </a>
        ) : (
          <div key={video.id} className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}