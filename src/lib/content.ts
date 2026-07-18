import { defaultAppData } from "@/lib/app-data";

export const categories = [
  { name: "Programação", slug: "programacao", icon: "⌘" },
  { name: "Imagem", slug: "imagem", icon: "◐" },
  { name: "Vídeo", slug: "video", icon: "▶" },
  { name: "Áudio", slug: "audio", icon: "♫" },
  { name: "Texto", slug: "texto", icon: "✦" },
  { name: "Design", slug: "design", icon: "◫" },
  { name: "Produtividade", slug: "produtividade", icon: "✓" },
  { name: "Pesquisa", slug: "pesquisa", icon: "⌕" },
  { name: "Agentes", slug: "agentes", icon: "◎" },
  { name: "Marketing", slug: "marketing", icon: "⬢" },
  { name: "Educação", slug: "educacao", icon: "∿" },
  { name: "Automação", slug: "automacao", icon: "⚙" },
  { name: "Modelos LLM", slug: "modelos-llm", icon: "☰" },
];

// `tools` e `featuredTools` vêm de app-data.ts (fonte única de verdade).
// Isso garante que nota, preço, plano gratuito e descrição sejam sempre
// os mesmos na aba "Ferramentas" e na página de detalhe de cada IA.
export const tools = defaultAppData.tools;

export const featuredTools = tools.slice(0, 3);

export const comparatives = [
  { title: "Cursor vs Copilot", slug: "cursor-vs-copilot", summary: "Qual oferece mais velocidade, contexto e qualidade para desenvolvedores?" },
  { title: "Claude vs ChatGPT", slug: "claude-vs-chatgpt", summary: "Comparação de precisão, contexto e capacidade multimodal." },
  { title: "Lovable vs Bolt", slug: "lovable-vs-bolt", summary: "Análise de prototipagem e geração de produtos com IA." },
];

export const prompts = [
  {
    title: "Planejamento de produto com IA",
    category: "Produtividade",
    level: "Intermediário",
    prompt: "Crie um plano de lançamento para um app de IA no mercado brasileiro com foco em produtividade.",
    explanation: "Ideal para definir posicionamento, público e etapas de execução em uma semana.",
    expected: "Uma estratégia objetiva com pilares, público e cronograma inicial.",
    tools: ["ChatGPT", "Claude"],
  },
  {
    title: "Resumo de artigo longo",
    category: "Texto",
    level: "Iniciante",
    prompt: "Resuma este texto em 5 bullets, destacando oportunidades de ação e risco.",
    explanation: "Ajuda a transformar leitura densa em insights rápidos e accionáveis.",
    expected: "Resumo claro, objetivo e com próximos passos.",
    tools: ["ChatGPT", "Gemini"],
  },
];

export const videos = [
  {
    title: "Guia rápido para escolher sua IA de produtividade",
    slug: "guia-rapido-para-escolher-sua-ia-de-produtividade",
    summary: "Como comparar custo, qualidade e contexto sem se perder entre milhares de opções.",
    tools: ["ChatGPT", "Claude", "Copilot"],
  },
  {
    title: "Comparativo prático: Claude vs ChatGPT",
    slug: "comparativo-pratico-claude-vs-chatgpt",
    summary: "Entenda quando Cada um performa melhor em trabalho real e análise de conteúdo.",
    tools: ["Claude", "ChatGPT"],
  },
];