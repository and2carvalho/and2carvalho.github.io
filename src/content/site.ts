export type Experience = {
  date: string;
  role: string;
  company: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  title: string;
  badge: "Ecosystem" | "Open Source" | "Reference";
  featured?: boolean;
  description: string;
  tags: string[];
  stats?: string;
  links: Array<{ label: string; href: string }>;
  ecosystemItems?: Array<{ title: string; subtitle: string }>;
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

export const site = {
  brand: "and2carvalho",
  name: "Andre C.A. de Carvalho",
  role: "Desenvolvedor Full-Stack Sênior · foco em AI / LLM",
  valueProp: "Integração de LLMs em produção (LangChain, RAG híbrido, prompt engineering) e governança/proveniência auditável de artefatos de IA — sobre uma base sólida de produto: integrações, performance e arquitetura sustentável.",
  summary:
    "Mais de 7 anos entregando produtos web e mobile, agora focado em construir e governar sistemas de LLM em produção (LangChain, RAG híbrido, prompt engineering) e em proveniência criptográfica para artefatos de IA — autor do protocolo SEIF (seifprotocol.com). Atualmente na Beezoo Labs, construindo microservices Go (gRPC/NATS) e apps Flutter white-label.",
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
    { label: "Projeto autoral", value: "Protocolo SEIF" },
  ] satisfies Metric[],
  proofPills: [
    { label: "AI / LLM", detail: "LangChain · RAG · prompt engineering · MCP" },
    { label: "Proveniência", detail: "Ed25519 · governança auditável · transparency log" },
    { label: "Marketplaces", detail: "Mercado Livre · Amazon · Shopee" },
  ] satisfies ProofPill[],
  atAGlance: [
    { title: "AI / LLM", detail: "integração LangChain, RAG híbrido, prompt engineering e MCP" },
    { title: "Governança de AI", detail: "proveniência Ed25519, classificação e transparency log (SEIF)" },
    { title: "Backend", detail: "Go e Python — gRPC, NATS, microservices, APIs e filas" },
    { title: "Frontend & Mobile", detail: "React/Next.js e Flutter com foco em UX, performance e design systems" },
    { title: "Dados & Qualidade", detail: "ETL/SQL, ElasticSearch, testes (unit/e2e), CI e observabilidade" },
  ] satisfies AtAGlanceItem[],
  seifHighlight: {
    title: "Destaque: SEIF — protocolo de governança de AI (autoral)",
    description:
      "Proveniência criptográfica e governança auditável para artefatos de IA: assinatura Ed25519, ancoragem temporal opcional (OpenTimestamps), classificação e transparency log. Inclui langchain-seif — um callback handler de LangChain zero-modificação que adiciona governança (classificação, quality-gate, assinatura e trilha de auditoria) sobre qualquer chain, e RAG híbrido (lexical + embeddings Ollama) sobre o store de conhecimento. Complementar ao MCP: MCP transporta contexto; SEIF atesta integridade e autoria.",
    links: [{ label: "seifprotocol.com", href: "https://www.seifprotocol.com" }],
  },
};

export const experiences: Experience[] = [
  {
    date: "2025 – Present",
    role: "Full-Stack Engineer",
    company: "Beezoo Labs — Multi-tenant SaaS for loyalty & digital commerce",
    highlights: [
      "Built the Showcase microservice end-to-end (.proto → Go service → admin panel → public app): digital storefronts with QR codes, pricing policies, and catalog enrichment via NATS events",
      "Led the app-whitelabel initiative in the Go microservices monorepo (gRPC, NATS JetStream, Outbox Pattern, PostgreSQL, KrakenD), enabling multi-tier mobile app configuration per tenant",
      "Built white-label Flutter apps (loyalty, campaigns, Eventim integration, biometric login, AI batch for catalog) on a unified design system",
      "Solo-built an OCR service for tax receipts (NF-e/NFC-e) in Python/gRPC with a hybrid cascade (QR → Tesseract → PaddleOCR → Vision LLM), raising accuracy from 28% to 75% on a 1,138 real-image dataset",
    ],
    tech: ["Go", "TypeScript", "Dart", "Python", "gRPC", "NATS", "PostgreSQL", "Flutter", "Next.js 15", "React 19", "Docker", "Kubernetes"],
  },
  {
    date: "2022 – 2024",
    role: "Software Engineer",
    company: "Hubsell — E-commerce Integration Platform",
    highlights: [
      "Frontend and integration development on SellerCenter, connecting sellers to Mercado Livre, Amazon, Shopee, and other marketplaces",
      "Built POS (Point of Sale) and Shopping Assistant features that directly improved seller conversion",
      "Integrated payment gateways (PagarMe, PinPag) into the seller dashboard",
      "Reduced loading times on heavy screens (dashboards, sales panels) using ElasticSearch + React Query",
      "Shipped a mobile app for Android and iOS using Expo",
    ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "ElasticSearch",
      "Zustand",
      "React Query",
      "Expo",
      "Firebase",
    ],
  },
  {
    date: "2020 – 2022",
    role: "Full-Stack Developer",
    company: "3 UP Tech — 3Ponto Financial App",
    highlights: [
      "Owned the full product lifecycle of a financial management platform: mobile app (React Native) + web dashboard (React)",
      "Backend development using microservices architecture",
      "Led frontend development, from feature implementation to bug resolution and performance tuning",
      "Facilitated migrations and integrations with legacy systems",
    ],
    tech: ["React", "React Native", "Node.js", "PostgreSQL", "Express", "Microservices"],
  },
  {
    date: "2016 – 2019",
    role: "Freelance Consultant",
    company: "Upwork — Data & Business Systems",
    highlights: [
      "Built ETL pipelines and Power BI dashboards for help desk analytics at mid-size companies",
      "Implemented a full ERP system (Odoo/OpenERP) with custom business workflows",
      "Automated data models with SQL and Python for executive dashboards",
    ],
    tech: ["Python", "Power BI", "PostgreSQL", "MySQL", "Odoo"],
  },
];

export const projects: Project[] = [
  {
    title: "SEIF — Cryptographic Provenance for AI Artifacts",
    badge: "Ecosystem",
    featured: true,
    description:
      "Proveniência criptográfica e governança auditável (sessões, ciclos, classificação) para artefatos de IA, com integração nativa a LangChain e RAG híbrido sobre o store de conhecimento.",
    ecosystemItems: [
      { title: "langchain-seif", subtitle: "Governance plane for LangChain (callback handler)" },
      { title: "seif-cli", subtitle: "CLI · sign, verify, classify" },
      { title: "seif-engine", subtitle: "Quality gate · RAG · multi-tenant API" },
      { title: "VS Code Extension", subtitle: "Modules, cycles, sessions panel" },
      { title: "Dashboard", subtitle: "Next.js · Audit trail · Sessions" },
      { title: "Transparency Log", subtitle: "Append-only · Rekor-shaped for AI" },
    ],
    tags: ["Python", "TypeScript", "LangChain", "RAG", "Ollama", "MCP", "Ed25519", "OpenTimestamps", "Next.js", "PostgreSQL"],
    stats: "160+ merged PRs · 300+ modules · 900+ test files · 11-repo ecosystem",
    links: [{ label: "seifprotocol.com", href: "https://www.seifprotocol.com" }],
  },
  {
    title: "langchain-seif — Governance plane for LangChain",
    badge: "Ecosystem",
    description:
      "Callback handler de LangChain zero-modificação que adiciona governança sobre qualquer chain: classificação, quality-gate (GROUNDED/DRIFT), assinatura de proveniência Ed25519 e trilha em transparency log. Modos local (offline) e hosted multi-tenant (HTTP, chaves sk_seif_). Design fail-soft: a governança nunca derruba a chain.",
    tags: ["Python", "LangChain", "RAG", "MCP", "Ed25519", "Multi-tenant"],
    links: [{ label: "seifprotocol.com", href: "https://www.seifprotocol.com" }],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / LLM",
    tags: ["LangChain", "RAG (híbrido)", "Prompt engineering", "MCP", "Ollama", "LLM-as-judge / quality gating", "Ed25519 provenance", "AI-assisted engineering"],
  },
  {
    title: "Frontend",
    tags: ["React", "Next.js", "React Native", "TypeScript", "Tailwind", "Styled-Components", "Zustand", "Redux", "Storybook"],
  },
  {
    title: "Backend",
    tags: ["Go", "Node.js", "Python", "gRPC", "NATS", "Express", "NestJS", "Django", "PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    title: "Infra & Testing",
    tags: ["Docker", "Git", "Firebase", "Vercel", "ElasticSearch", "Jest", "Vitest", "Playwright"],
  },
  {
    title: "Mobile & Other",
    tags: ["Expo", "Flutter", "Tauri", "Power BI", "Swagger", "Microservices"],
  },
];

