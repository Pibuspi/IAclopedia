export const metadata = {
  title: "Sobre",
  description: "Conheça o propósito da IAclopédia: ser a maior plataforma brasileira de referência sobre Inteligência Artificial.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Sobre</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Criado por Pietro Rainone Bruneli</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A IAclopédia nasceu para ser uma plataforma brasileira de referência sobre IA, reunindo ferramentas, avaliações, comparativos, prompts, vídeos e notícias em um único lugar.
        </p>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          O foco é ajudar qualquer pessoa a descobrir, comparar, entender e escolher soluções mais inteligentes em um mercado com crescimento acelerado.
        </p>
      </div>
    </div>
  );
}
