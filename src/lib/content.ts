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

export const featuredTools = [
  {
    id: "cursor",
    name: "Cursor",
    tagline: "Editor de código com IA para desenvolvimento extremo",
    category: "Programação",
    rating: 9.4,
    price: "A partir de R$ 39/mês",
    description: "Ideal para equipes de produto e engenharia que querem escrever, revisar e depurar código com contexto real.",
    alternatives: ["GitHub Copilot", "Windsurf"],
    screenshots: ["Fluxo de edição com contexto do projeto", "Painel de revisão e chat integrado"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "Assistente multimodal para produtividade e criação",
    category: "Texto",
    rating: 9.1,
    price: "Grátis e pago",
    description: "Uma plataforma central para pesquisa, redação, análise, automação e geração de conteúdo.",
    alternatives: ["Claude", "Gemini"],
    screenshots: ["Chat multimodal com arquivos e imagens", "Fluxo de produtividade para escrita e análise"],
  },
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "Criador visual de alta qualidade para branding e arte",
    category: "Imagem",
    rating: 8.9,
    price: "A partir de US$ 10",
    description: "Perfeito para gerar imagens e conceitos visuais com qualidade cinematográfica.",
    alternatives: ["DALL·E", "Stable Diffusion"],
    screenshots: ["Geração de imagens estilo cinematográfico", "Fluxo de ideação visual com prompts refinados"],
  },
];

export const tools = [
  ...featuredTools,
  {
    id: "claude",
    name: "Claude",
    tagline: "Modelo de linguagem para análise longa e documentos complexos",
    category: "Texto",
    rating: 9.0,
    price: "Grátis e pago",
    description: "Excelente para leitura de documentos extensos, síntese e suporte de produção editorial.",
    alternatives: ["ChatGPT", "Gemini"],
    screenshots: ["Resumo de documentos longos", "Análise de contexto e tom de voz"],
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "Assistente integrado com ecossistema Google",
    category: "Pesquisa",
    rating: 8.7,
    price: "Grátis e pago",
    description: "Ótimo para pesquisa, produtividade e integração com Workspace e Android.",
    alternatives: ["ChatGPT", "Perplexity"],
    screenshots: ["Integração com Workspace e Google", "Busca com contexto e respostas rápidas"],
  },
];

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

export const posts = [
  {
    title: "Melhores IAs para programar em 2026",
    slug: "melhores-ias-para-programar",
    excerpt: "Uma análise dos melhores ambientes de desenvolvimento com IA para codar mais rápido e com mais contexto.",
  },
  {
    title: "Como criar aplicativos usando IA sem perder qualidade",
    slug: "como-criar-aplicativos-usando-ia",
    excerpt: "Estratégias para construir produtos com mais velocidade e menos retrabalho.",
  },
  {
    title: "Novidades da semana: GPT-5.6, agentes e novos modelos",
    slug: "novidades-da-semana",
    excerpt: "Os lançamentos mais relevantes do mercado e o que muda para usuários e empresas.",
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
