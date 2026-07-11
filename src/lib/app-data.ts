export type Tool = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  company: string;
  rating: number;
  price: string;
  freePlan: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  notFor: string[];
};

export type NewsItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
};

export type VideoItem = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tools: string[];
};

export type PromptItem = {
  id: string;
  title: string;
  category: string;
  level: string;
  prompt: string;
  explanation: string;
  expected: string;
  tools: string[];
};

export type AppData = {
  tools: Tool[];
  posts: NewsItem[];
  videos: VideoItem[];
  prompts: PromptItem[];
  favorites: string[];
};

export const defaultAppData: AppData = {
  tools: [
    {
      id: "cursor",
      name: "Cursor",
      tagline: "Editor de código com IA para desenvolvimento extremo",
      category: "Programação",
      company: "Cursor",
      rating: 9.4,
      price: "A partir de R$ 39/mês",
      freePlan: "Sim",
      description: "Ideal para equipes de produto e engenharia que querem escrever, revisar e depurar código com contexto real.",
      pros: ["Contexto de projeto", "Fluxo rápido", "Boa experiência em código"],
      cons: ["Menos acessível para iniciantes", "Plano pago mais forte"],
      bestFor: ["Desenvolvedores", "Equipes de produto"],
      notFor: ["Usuários casuais"],
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      tagline: "Assistente multimodal para produtividade e criação",
      category: "Texto",
      company: "OpenAI",
      rating: 9.1,
      price: "Grátis e pago",
      freePlan: "Sim",
      description: "Uma plataforma central para pesquisa, redação, análise, automação e geração de conteúdo.",
      pros: ["Multimodal", "Muita integração", "Ótimo para criatividade"],
      cons: ["Alguns recursos premium"],
      bestFor: ["Pesquisa", "Redação", "Automação"],
      notFor: ["Uso muito técnico puro"],
    },
    {
      id: "midjourney",
      name: "Midjourney",
      tagline: "Criador visual de alta qualidade para branding e arte",
      category: "Imagem",
      company: "Midjourney",
      rating: 8.9,
      price: "A partir de US$ 10",
      freePlan: "Não",
      description: "Perfeito para gerar imagens e conceitos visuais com qualidade cinematográfica.",
      pros: ["Resultados artísticos", "Qualidade visual", "Rápido"],
      cons: ["Menos controle técnico", "Não é ideal para edição precisa"],
      bestFor: ["Design", "Branding", "Arte"],
      notFor: ["Edição documental"],
    },
    {
      id: "claude",
      name: "Claude",
      tagline: "Modelo de linguagem para análise longa e documentos complexos",
      category: "Texto",
      company: "Anthropic",
      rating: 9.0,
      price: "Grátis e pago",
      freePlan: "Sim",
      description: "Excelente para leitura de documentos extensos, síntese e suporte de produção editorial.",
      pros: ["Boa memória de contexto", "Texto claro", "Análise de documentos"],
      cons: ["Menos forte em multimodal"],
      bestFor: ["Leitura de documentos", "Análise"],
      notFor: ["Criação visual"],
    },
    {
      id: "gemini",
      name: "Gemini",
      tagline: "Assistente integrado com ecossistema Google",
      category: "Pesquisa",
      company: "Google",
      rating: 8.7,
      price: "Grátis e pago",
      freePlan: "Sim",
      description: "Ótimo para pesquisa, produtividade e integração com Workspace e Android.",
      pros: ["Integração Google", "Bom para pesquisa", "Boa produtividade"],
      cons: ["Menos consistente em alguns prompts"],
      bestFor: ["Pesquisa", "Workspace"],
      notFor: ["Trabalho artístico"],
    },
  ],
  posts: [
    {
      id: "news-1",
      title: "Melhores IAs para programar em 2026",
      slug: "melhores-ias-para-programar",
      excerpt: "Uma análise dos melhores ambientes de desenvolvimento com IA para codar mais rápido e com mais contexto.",
      category: "Programação",
      publishedAt: "2026-07-01",
    },
    {
      id: "news-2",
      title: "Como criar aplicativos usando IA sem perder qualidade",
      slug: "como-criar-aplicativos-usando-ia",
      excerpt: "Estratégias para construir produtos com mais velocidade e menos retrabalho.",
      category: "Produto",
      publishedAt: "2026-06-28",
    },
    {
      id: "news-3",
      title: "Novidades da semana: GPT-5.6, agentes e novos modelos",
      slug: "novidades-da-semana",
      excerpt: "Os lançamentos mais relevantes do mercado e o que muda para usuários e empresas.",
      category: "Notícias",
      publishedAt: "2026-06-25",
    },
  ],
  videos: [
    {
      id: "video-1",
      title: "Guia rápido para escolher sua IA de produtividade",
      slug: "guia-rapido-para-escolher-sua-ia-de-produtividade",
      summary: "Como comparar custo, qualidade e contexto sem se perder entre milhares de opções.",
      tools: ["ChatGPT", "Claude", "Copilot"],
    },
    {
      id: "video-2",
      title: "Comparativo prático: Claude vs ChatGPT",
      slug: "comparativo-pratico-claude-vs-chatgpt",
      summary: "Entenda quando cada um performa melhor em trabalho real e análise de conteúdo.",
      tools: ["Claude", "ChatGPT"],
    },
  ],
  prompts: [
    {
      id: "prompt-1",
      title: "Planejamento de produto com IA",
      category: "Produtividade",
      level: "Intermediário",
      prompt: "Crie um plano de lançamento para um app de IA no mercado brasileiro com foco em produtividade.",
      explanation: "Ideal para definir posicionamento, público e etapas de execução em uma semana.",
      expected: "Uma estratégia objetiva com pilares, público e cronograma inicial.",
      tools: ["ChatGPT", "Claude"],
    },
    {
      id: "prompt-2",
      title: "Resumo de artigo longo",
      category: "Texto",
      level: "Iniciante",
      prompt: "Resuma este texto em 5 bullets, destacando oportunidades de ação e risco.",
      explanation: "Ajuda a transformar leitura densa em insights rápidos e accionáveis.",
      expected: "Resumo claro, objetivo e com próximos passos.",
      tools: ["ChatGPT", "Gemini"],
    },
  ],
  favorites: [],
};

export const STORAGE_KEY = "iaclopedia-data";

export function loadAppData(): AppData | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AppData;
  } catch {
    return null;
  }
}

export function saveAppData(data: AppData) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
