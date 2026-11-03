export type Experience = {
  date: string;
  role: string;
  company: string;
  highlights: string[];
  tech: string[];
};

export type SkillGroup = {
  title: string;
  tags: string[];
};

export type Metric = {
  label: string;
  value: string;
};

export type ProofPill = {
  label: string;
  detail: string;
};

export type AtAGlanceItem = {
  title: string;
  detail: string;
};

export type Publication = {
  kind: string;
  title: string;
  description: string;
  date: string;
  doi: string;
  href: string;
  codeHref?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  highlights?: string[];
  links?: Array<{ label: string; href: string }>;
};

export type Language = {
  language: string;
  level: string;
  link?: { label: string; href: string };
};

export const site = {
  brand: "and2carvalho",
  name: "Andre C.A. de Carvalho",
  role: "AI / LLM Engineer · Sistemas de agentes · RAG · Avaliação",
  location: "Uberlândia, MG, Brasil · Disponível para trabalho remoto global",
  valueProp:
    "Engenheiro de software com 7+ anos em produtos de produção. Hoje, aplico essa base na construção de sistemas de IA confiáveis: LLMs, RAG, agentes, avaliação e automação.",
  summary:
    "Mestrando em Ciência da Computação na UFU. Autor de livro-texto com DOI sobre engenharia de contexto para agentes de IA e de pesquisa reprodutível sobre observabilidade de sistemas. Experiência aplicada inclui um pipeline de OCR com Vision LLM que elevou a acurácia de 28% para 75%.",
  links: {
    github: "https://github.com/and2carvalho",
    linkedin: "https://linkedin.com/in/and2carvalho",
    email: "and2carvalho@gmail.com",
    cvPt: "/cv/andre-carvalho-desenvolvedor.pdf",
    cvEn: "/cv/andre-carvalho-developer.pdf",
  },
  metrics: [
    { label: "Engenharia em produção", value: "7+ anos" },
    { label: "OCR com Vision LLM", value: "28% → 75%" },
    { label: "Publicações com DOI", value: "2" },
  ] satisfies Metric[],
  proofPills: [
    { label: "Agentes & contexto", detail: "RAG · seleção sob orçamento · governança" },
    { label: "IA em produção", detail: "Vision LLM · Python · gRPC · Kubernetes" },
    { label: "Pesquisa reprodutível", detail: "TypeScript · Python · pré-registro · CI" },
  ] satisfies ProofPill[],
  atAGlance: [
    { title: "Posicionamento", detail: "Engenharia de IA/LLMs com base forte em software de produção." },
    { title: "Pesquisa atual", detail: "Mestrado em Ciência da Computação na UFU, com foco em IA e observabilidade." },
    { title: "Autor publicado", detail: "Livro-texto sobre engenharia de contexto para agentes de IA, com DOI." },
    { title: "Entrega comprovada", detail: "OCR híbrido com Vision LLM: 28% → 75% em 1.138 imagens reais." },
  ] satisfies AtAGlanceItem[],
};

export const publications: Publication[] = [
  {
    kind: "Livro-texto · Zenodo · 2026",
    title: "Contexto para Agentes de IA",
    description:
      "Fundamentos, algoritmos e sistemas para gerenciamento, engenharia, design e administração do contexto que agentes baseados em LLMs recebem para agir. O livro cobre seleção sob orçamento, memória, proveniência, autoridade, orquestração multiagente, segurança e avaliação.",
    date: "19 out. 2026",
    doi: "10.5281/zenodo.23476445",
    href: "https://doi.org/10.5281/zenodo.23476445",
    codeHref: "https://github.com/and2carvalho/contexto-para-agentes-de-ia",
  },
  {
    kind: "Software de pesquisa · Zenodo · 2026",
    title: "(D, δ): a two-feature signature for memory-access traces",
    description:
      "Assinatura de duas variáveis para detectar degradação de desempenho no mesmo código sem calibração por classe. Implementações TypeScript e Python reproduzem os resultados, com validação pré-registrada e análise de robustez.",
    date: "7 out. 2026 · versão v0.1.0",
    doi: "10.5281/zenodo.23198655",
    href: "https://doi.org/10.5281/zenodo.23198655",
    codeHref: "https://github.com/and2carvalho/memory-access-signature",
  },
];

export const experiences: Experience[] = [
  {
    date: "jan/2025 – atual",
    role: "Full-Stack Engineer",
    company: "Beezoo Labs — Plataforma SaaS multi-tenant de fidelidade e comércio digital para shoppings e varejo",
    highlights: [
      "Entreguei do zero o microsserviço Showcase (vitrines digitais com QR codes, pricing policies e enriquecimento de catálogo via eventos NATS) e seu frontend mobile-first — feature ponta a ponta: .proto → serviço Go → painel admin → app público.",
      "Liderei a iniciativa app-whitelabel no monorepo de microsserviços Go (gRPC, NATS JetStream, Outbox Pattern, PostgreSQL, KrakenD), habilitando configuração multi-tier de apps mobile por tenant.",
      "Desenvolvi os apps Flutter white-label para consumidor e parceiros — loyalty, campanhas, integração Eventim, login biométrico e design system unificado.",
      "Construí sozinho um serviço de OCR para NF-e/NFC-e em Python/gRPC, combinando QR → Tesseract → PaddleOCR → Vision LLM (via API) em cascata; elevei a acurácia de 28% para 75% em dataset de 1.138 imagens reais; deploy em Docker + Kubernetes.",
    ],
    tech: ["Go", "Python", "TypeScript", "Dart", "gRPC", "NATS", "PostgreSQL", "Next.js", "React", "Flutter", "Docker", "Kubernetes"],
  },
  {
    date: "mai/2022 – dez/2024",
    role: "Software Engineer",
    company: "Hubsell — Plataforma de integração para e-commerce",
    highlights: [
      "Desenvolvi frontend e integrações do Seller Center, a interface pela qual os sellers operam suas vendas em Mercado Livre, Amazon, Shopee e outros marketplaces.",
      "Construí as features de PDV (Point of Sale) e Shopping Assistant, voltadas à conversão dos sellers.",
      "Integrei gateways de pagamento (PagarMe, PinPag) ao dashboard do seller.",
      "Ataquei os gargalos de carregamento de telas pesadas (dashboards, painéis de vendas) com busca via ElasticSearch e cache de dados no cliente com React Query.",
      "Publiquei app mobile para Android e iOS com Expo.",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "ElasticSearch", "Zustand", "React Query", "Expo", "Firebase"],
  },
  {
    date: "dez/2020 – mai/2022",
    role: "Full-Stack Developer",
    company: "3 UP Tech — 3Ponto, plataforma de gestão financeira (app mobile + dashboard web)",
    highlights: [
      "Atuei no ciclo completo do produto — app mobile (React Native) e dashboard web (React) —, da tradução de requisitos de negócio à entrega em produção.",
      "Desenvolvi serviços de backend em arquitetura de microsserviços (Node.js/Express, PostgreSQL).",
      "Conduzi migrações e integrações com sistemas legados.",
      "Liderei o front-end: implementação de features, correção de bugs e ajuste de performance.",
    ],
    tech: ["React", "React Native", "Node.js", "Express", "PostgreSQL", "Microsserviços"],
  },
  {
    date: "2016 – 2019",
    role: "Consultor Freelance — Dados & Sistemas de Gestão",
    company: "Upwork",
    highlights: [
      "Construí pipelines de ETL e dashboards Power BI para analytics de help desk e operação.",
      "Implementei um ERP (Odoo/OpenERP) com workflows de negócio e automações.",
      "Automatizei modelos de dados com SQL e Python para dashboards executivos.",
    ],
    tech: ["Python", "SQL", "Power BI", "PostgreSQL", "MySQL", "Odoo"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Mestrado em Ciência da Computação — em curso",
    institution: "Universidade Federal de Uberlândia (PPGCO/UFU)",
    period: "2026 – atual",
    highlights: [
      "Linha aplicada: sistemas de IA, automação de agentes e observabilidade de software, unindo experimentos reprodutíveis à engenharia de produção.",
      "Pesquisa publicada: representações mínimas de traços de execução para observabilidade. A assinatura (D, δ) detecta degradação de O(n log n) para O(n²) no mesmo código, sem calibração por classe.",
      "Método: hipóteses pré-registradas e implementações independentes em TypeScript e Python que reproduzem os resultados via CI.",
      "Livro-texto publicado: Contexto para Agentes de IA, sobre como projetar e avaliar o contexto de sistemas baseados em LLMs, com ênfase em RAG, memória, autoridade, orquestração e avaliação.",
    ],
    links: [
      { label: "Livro · DOI 10.5281/zenodo.23476445", href: "https://doi.org/10.5281/zenodo.23476445" },
      { label: "GitHub: contexto-para-agentes-de-ia", href: "https://github.com/and2carvalho/contexto-para-agentes-de-ia" },
      { label: "Pesquisa · DOI 10.5281/zenodo.23198655", href: "https://doi.org/10.5281/zenodo.23198655" },
      { label: "GitHub: memory-access-signature", href: "https://github.com/and2carvalho/memory-access-signature" },
    ],
  },
  {
    degree: "Graduação em Administração",
    institution: "União de Faculdades Metropolitanas de Maringá",
    period: "2016",
  },
];

export const languages: Language[] = [
  { language: "Português", level: "Nativo" },
  {
    language: "Inglês",
    level: "C2 Proficient — certificado EF SET",
    link: { label: "cert.efset.org/en/Eukv37", href: "https://cert.efset.org/en/Eukv37" },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "IA, LLMs & Agentes",
    tags: ["Sistemas de agentes", "RAG", "Avaliação de LLMs", "Engenharia de contexto", "MCP", "Vision LLM via API", "Ollama"],
  },
  {
    title: "Backend",
    tags: ["Go", "Python", "Node.js", "gRPC", "REST", "NATS JetStream", "Microsserviços", "Outbox Pattern", "KrakenD"],
  },
  {
    title: "Frontend & Mobile",
    tags: ["React", "Next.js", "TypeScript", "React Query", "Zustand", "Storybook", "Flutter", "React Native", "Expo"],
  },
  {
    title: "Dados & Infra",
    tags: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "Docker", "Kubernetes", "ETL/SQL", "Power BI"],
  },
  {
    title: "Integrações",
    tags: ["Mercado Livre", "Amazon", "Shopee", "PagarMe", "PinPag", "Eventim"],
  },
  {
    title: "Qualidade",
    tags: ["Jest", "Vitest", "Playwright", "CI/CD"],
  },
];
