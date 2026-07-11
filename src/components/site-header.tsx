import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const links = [
  { label: "Início", href: "/" },
  { label: "Ferramentas", href: "/ferramentas" },
  { label: "Categorias", href: "/categorias" },
  { label: "Comparar", href: "/comparar" },
  { label: "Vídeos", href: "/videos" },
  { label: "Prompts", href: "/prompts" },
  { label: "Blog", href: "/blog" },
  { label: "Admin", href: "/admin" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
            <Sparkles className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-zinc-400 uppercase">IAclopédia</p>
            <p className="text-xs text-zinc-500">Toda IA em um só lugar</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/ferramentas"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
        >
          Explorar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
