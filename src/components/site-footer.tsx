import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-zinc-400 uppercase">IAclopédia</p>
              <p className="text-xs text-zinc-500">Toda Inteligência Artificial em um só lugar</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-zinc-400">
            A maior plataforma brasileira de referência sobre ferramentas, modelos, comparativos, notícias e guias de IA.
          </p>
        </div>

        <div className="grid gap-8 text-sm text-zinc-400 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-200">Explorar</h3>
            <ul className="space-y-2">
              <li><Link href="/ferramentas" className="transition hover:text-white">Ferramentas</Link></li>
              <li><Link href="/comparativos" className="transition hover:text-white">Comparativos</Link></li>
              <li><Link href="/videos" className="transition hover:text-white">Vídeos</Link></li>
              <li><Link href="/blog" className="transition hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-200">Sobre</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="transition hover:text-white">Quem somos</Link></li>
              <li><Link href="/prompts" className="transition hover:text-white">Biblioteca de prompts</Link></li>
              <li><Link href="/categorias" className="transition hover:text-white">Categorias</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
