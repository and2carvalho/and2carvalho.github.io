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
  role: "Desenvolvedor Full-Stack · Go · TypeScript · Python · Flutter",
  location: "Uberlândia, MG, Brasil · Remoto, híbrido ou presencial",
  valueProp:
    "7+ anos entregando produtos web e mobile em produção: microsserviços em Go (gRPC, NATS), frontends React/Next.js, apps Flutter e integrações de marketplaces e pagamentos.",
  summary:
    "Experiência prática com IA aplicada em produção: pipeline de OCR com Vision LLM que elevou a acurácia de 28% para 75%. Base sólida em dados (ETL, SQL, Python). Mestrado em Ciência da Computação em curso na UFU, com pesquisa em observabilidade de sistemas e verificação de comportamento computacional.",
  links: {
    github: "https://github.com/and2carvalho",
    linkedin: "https://linkedin.com/in/and2carvalho",
    email: "and2carvalho@gmail.com",
    seifSite: "https://www.seifprotocol.com",
    cvPt: "/cv/andre-carvalho-desenvolvedor.pdf",
    cvEn: "/cv/andre-carvalho-developer.pdf",
  },
  metrics: [
    { label: "Experiência", value: "7+ anos" },
    { label: "OCR em produção", value: "28% → 75%" },
  ] satisfies Metric[],
  proofPills: [
    { label: "Backend", detail: "Go · Python · gRPC · NATS · Microsserviços" },
    { label: "Frontend & Mobile", detail: "React · Next.js · TypeScript · Flutter" },
    { label: "Integrações", detail: "Mercado Livre · Amazon · Shopee · PagarMe · PinPag" },
  ] satisfies ProofPill[],
  atAGlance: [
    { title: "Backend", detail: "Go e Python — gRPC, NATS JetStream, microsserviços, Outbox Pattern" },
    { title: "Frontend & Mobile", detail: "React/Next.js e Flutter, com design systems e apps white-label" },
    { title: "IA aplicada", detail: "Vision LLM via API em pipeline de OCR em produção" },
    { title: "Integrações", detail: "marketplaces (Mercado Livre, Amazon, Shopee) e pagamentos (PagarMe, PinPag)" },
    { title: "Dados", detail: "ETL/SQL, ElasticSearch, Power BI" },
    { title: "Pesquisa", detail: "Mestrado em Ciência da Computação (UFU) — observabilidade de sistemas" },
  ] satisfies AtAGlanceItem[],
};

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
      "Pesquisa: representações mínimas de traços de execução para observabilidade de sistemas — assinaturas compactas de acesso à memória que detectam degradação de desempenho (ex.: O(n log n) → O(n²)) sem calibração por classe, com critério explícito de quando a representação deixa de ser suficiente.",
      "Método: hipóteses pré-registradas e experimentos reprodutíveis (TypeScript + Python); série de artigos em preparação.",
      "Artefato publicado: (D, δ): a two-feature signature for memory-access traces — código, dados, validação pré-registrada e análise de robustez, reproduzidos via CI (DOI 10.5281/zenodo.23198655).",
      "Ferramental de pesquisa — SEIF Protocol: proveniência criptográfica (Ed25519, ancoragem temporal via OpenTimestamps) e governança auditável do trabalho assistido por IA, aplicado na própria pesquisa.",
    ],
    links: [
      { label: "DOI 10.5281/zenodo.23198655", href: "https://doi.org/10.5281/zenodo.23198655" },
      { label: "GitHub: memory-access-signature", href: "https://github.com/and2carvalho/memory-access-signature" },
      { label: "seifprotocol.com", href: "https://www.seifprotocol.com" },
      { label: "Carimbo", href: "https://carimbo.seifprotocol.com" },
      { label: "Vigília", href: "https://vigilia.seifprotocol.com" },
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
    title: "IA aplicada",
    tags: ["Vision LLM via API", "Pipeline de OCR", "Ollama", "MCP", "Proveniência de artefatos de IA"],
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
