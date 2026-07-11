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
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Comparativos</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Decisões mais rápidas e mais claras</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">A IAclopédia compara ferramentas por velocidade, precisão, interface, preço e resultado final.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {comparatives.map((item) => (
          <article key={item.slug} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <div className="flex items-center gap-2 text-cyan-300">
              <BarChart3 className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.24em]">Comparativo</p>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{item.summary}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              <span>Atualizado com critérios prontos para decisão</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-sm text-zinc-300">
        <p className="font-medium text-white">Quer comparar duas ferramentas agora?</p>
        <p className="mt-2">Use a página de comparação manual para ver diferenças de preço, nota e uso de forma prática.</p>
        <Link href="/comparar" className="mt-4 inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200">
          Abrir comparador
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
