import Link from "next/link";
import { ArrowRight, BarChart3, Sparkles } from "lucide-react";
import { comparatives } from "@/lib/content";

export const metadata = {
  title: "Comparativos",
  description: "Compare ferramentas e modelos de IA com análises objetivas e notas da IAclopédia.",
};

export default function ComparativesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">Comparativos</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--foreground)] sm:text-5xl">Decisões mais rápidas e mais claras</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">A IAclopédia compara ferramentas por velocidade, precisão, interface, preço e resultado final.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {comparatives.map((item) => (
          <article key={item.slug} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <div className="flex items-center gap-2 text-[color:var(--accent)]">
              <BarChart3 className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.24em]">Comparativo</p>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.summary}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[color:var(--accent)]">
              <Sparkles className="h-4 w-4" />
              <span>Atualizado com critérios prontos para decisão</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-[color:var(--accent-soft)] p-6 text-sm text-[color:var(--muted)]">
        <p className="font-medium text-[color:var(--foreground)]">Quer comparar duas ferramentas agora?</p>
        <p className="mt-2">Use a página de comparação manual para ver diferenças de preço, nota e uso de forma prática.</p>
        <Link href="/comparar" className="mt-4 inline-flex items-center gap-2 text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]">
          Abrir comparador
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}