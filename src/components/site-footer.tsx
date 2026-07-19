import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3 text-[color:var(--foreground)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
              <Sparkles className="h-5 w-5 text-[color:var(--accent)]" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-[color:var(--muted)] uppercase">IAclopédia</p>
              <p className="text-xs text-[color:var(--muted-strong)]">Toda Inteligência Artificial em um só lugar</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-[color:var(--muted)]">
            A maior plataforma brasileira de referência sobre ferramentas, modelos, comparativos e guias de IA.
          </p>
        </div>

        <div className="grid gap-8 text-sm text-[color:var(--muted)] sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">Explorar</h3>
            <ul className="space-y-2">
              <li><Link href="/ferramentas" className="transition hover:text-[color:var(--foreground)]">Ferramentas</Link></li>
              <li><Link href="/comparar" className="transition hover:text-[color:var(--foreground)]">Comparar</Link></li>
              <li><Link href="/videos" className="transition hover:text-[color:var(--foreground)]">Vídeos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">Sobre</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="transition hover:text-[color:var(--foreground)]">Quem somos</Link></li>
              <li><Link href="/prompts" className="transition hover:text-[color:var(--foreground)]">Biblioteca de prompts</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}