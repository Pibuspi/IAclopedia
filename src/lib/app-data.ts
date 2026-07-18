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
  website?: string;
  alternatives?: string[];
  screenshots?: string[];
};

export type VideoItem = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tools: string[];
  youtubeUrl?: string;
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

export type RankingItem = {
  id: string;
  toolId?: string;
  name: string;
  category: string;
  score: number;
  summary: string;
};

export type AppData = {
  tools: Tool[];
  videos: VideoItem[];
  prompts: PromptItem[];
  ranking: RankingItem[];
  favorites: string[];
};

export const APP_DATA_EVENT = "app-data-updated";

export function getYoutubeVideoId(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace("www.", "");
    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] ?? null;
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/embed/")[1]?.split("/")[0] ?? null;
      }
      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/shorts/")[1]?.split("/")[0] ?? null;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function getYoutubeThumbnail(url: string | undefined): string | null {
  const id = getYoutubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

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
      website: "https://cursor.com",
      alternatives: ["GitHub Copilot", "Windsurf"],
      screenshots: ["Fluxo de edição com contexto do projeto", "Painel de revisão e chat integrado"],
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
      website: "https://chatgpt.com",
      alternatives: ["Claude", "Gemini"],
      screenshots: ["Chat multimodal com arquivos e imagens", "Fluxo de produtividade para escrita e análise"],
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
      website: "https://www.midjourney.com",
      alternatives: ["DALL·E", "Stable Diffusion"],
      screenshots: ["Geração de imagens estilo cinematográfico", "Fluxo de ideação visual com prompts refinados"],
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
      website: "https://claude.ai",
      alternatives: ["ChatGPT", "Gemini"],
      screenshots: ["Resumo de documentos longos", "Análise de contexto e tom de voz"],
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
      website: "https://gemini.google.com",
      alternatives: ["ChatGPT", "Perplexity"],
      screenshots: ["Integração com Workspace e Google", "Busca com contexto e respostas rápidas"],
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
  ranking: [],
  favorites: [],
};

export const STORAGE_KEY = "iaclopedia-data";

function normalizeAppData(data: Partial<AppData> | null | undefined): AppData {
  const safeData = data ?? {};
  return {
    tools: safeData.tools ?? defaultAppData.tools,
    videos: safeData.videos ?? defaultAppData.videos,
    prompts: safeData.prompts ?? defaultAppData.prompts,
    ranking: safeData.ranking ?? defaultAppData.ranking,
    favorites: safeData.favorites ?? defaultAppData.favorites,
  };
}

export function loadAppData(): AppData {
  if (typeof window === "undefined") return defaultAppData;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultAppData;
    return normalizeAppData(JSON.parse(raw) as Partial<AppData>);
  } catch {
    return defaultAppData;
  }
}

export function saveAppData(data: AppData) {
  if (typeof window === "undefined") return;
  const normalized = normalizeAppData(data);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  window.dispatchEvent(new Event(APP_DATA_EVENT));
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