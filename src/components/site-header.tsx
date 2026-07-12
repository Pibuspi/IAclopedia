"use client";

import Link from "next/link";
import { ArrowRight, Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[color:var(--foreground)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
            <Sparkles className="h-5 w-5 text-[color:var(--accent)]" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-[color:var(--muted)] uppercase">IAclopédia</p>
            <p className="text-xs text-[color:var(--muted)]">Toda IA em um só lugar</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[color:var(--foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] transition hover:bg-[color:var(--surface-muted)]"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-4 py-2 text-sm font-medium text-[color:var(--accent)] transition hover:brightness-110"
          >
            Explorar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
