import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Copy, MessageCircleMore, Share2 } from "lucide-react";
import { tools } from "@/lib/content";

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.id }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return {
    title: "Ferramenta",
    description: "Ficha detalhada de uma ferramenta de IA com avaliação, prós, contras e alternativas.",
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((item) => item.id === slug);

  if (!tool) {
    notFound();
  }

  const shareUrl = `https://iaclopedia.com/ferramentas/${tool.id}`;
  const shareLinks = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${tool.name}: ${tool.tagline} ${shareUrl}`)}`,
      icon: MessageCircleMore,
    },
    {
      label: "Copiar link",
      href: `javascript:navigator.clipboard.writeText('${shareUrl}')`,
      icon: Copy,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{tool.category}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{tool.name}</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">{tool.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {shareLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Copiar link" ? undefined : "_blank"}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
              >
                <Icon className="h-4 w-4 text-cyan-300" />
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-zinc-500">Nota IAclopédia</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-300">{tool.rating}/10</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-zinc-500">Preço</p>
            <p className="mt-2 text-lg font-semibold text-white">{tool.price}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-zinc-500">Plano gratuito</p>
            <p className="mt-2 text-lg font-semibold text-white">Sim</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Prós</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-400">
              <li>• Excelente produtividade e velocidade</li>
              <li>• Boa experiência para fluxos de trabalho reais</li>
              <li>• Muito útil para equipes e solopreneurs</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Contras</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-400">
              <li>• Pode exigir adaptação para novos usuários</li>
              <li>• Custo pode crescer com o uso intensivo</li>
              <li>• Nem sempre é a melhor opção para uso casual</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300">
              <Share2 className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">Alternativas</h2>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {(tool.alternatives ?? []).map((alternative) => (
                <span key={alternative} className="rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-300">
                  {alternative}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300">
              <ArrowUpRight className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">Screenshots</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {(tool.screenshots ?? []).map((screenshot) => (
                <div key={screenshot} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                  <div className="h-24 rounded-xl border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_36%),linear-gradient(135deg,_rgba(24,24,27,0.95),_rgba(9,9,11,1))]" />
                  <p className="mt-3 text-sm text-zinc-400">{screenshot}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 text-sm text-zinc-400">
          <p className="font-medium text-white">Próximo passo</p>
          <p className="mt-2">Continue explorando outras ferramentas e compare opções de forma prática na página de ferramentas.</p>
          <Link href="/ferramentas" className="mt-4 inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200">
            Voltar para a lista
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
