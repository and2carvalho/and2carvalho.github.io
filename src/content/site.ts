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
  role: "Engenheiro Full-Stack Sênior",
  valueProp: "Integrações de marketplaces e pagamentos, performance e AI-assisted engineering com governança auditável.",
  summary:
    "Mais de 7 anos entregando produtos — de e-commerce e plataformas de gestão com integrações (PagarMe, PinPag, Mercado Livre) a um protocolo open-source de proveniência criptográfica para artefatos gerados por IA (SEIF). Atualmente na Hubsell em um time com 20+ engenheiros.",
  links: {
    github: "https://github.com/and2carvalho",
    linkedin: "https://linkedin.com/in/and2carvalho",
    email: "and2carvalho@gmail.com",
    seifSource: "https://github.com/and2carvalho/seif",
    seifDemo: "https://seif-framework.streamlit.app",
    seifPypi: "https://pypi.org/project/seif-cli/",
    cvPt: "/cv/andre-carvalho-desenvolvedor.pdf",
    cvEn: "/cv/andre-carvalho-developer.pdf",
  },
  metrics: [
    { label: "Experiência", value: "7+ anos" },
    { label: "Escala", value: "Time 20+ engenheiros" },
  ] satisfies Metric[],
  proofPills: [
    { label: "Marketplaces", detail: "Mercado Livre · Amazon · Shopee" },
    { label: "Payments", detail: "PagarMe · PinPag" },
    { label: "Mobile", detail: "Flutter · iOS + Android (stores)" },
  ] satisfies ProofPill[],
  atAGlance: [
    { title: "Integrações", detail: "marketplaces, ERPs, pagamentos e automação de catálogo/pedidos" },
    { title: "Frontend", detail: "React/Next.js com foco em UX, performance e design systems" },
    { title: "Backend", detail: "Node.js e Python, APIs, microservices, bancos e filas" },
    { title: "Dados e busca", detail: "ElasticSearch, painéis pesados e otimizações de carregamento" },
    { title: "Qualidade", detail: "testes (unit/e2e), CI, observabilidade e manutenção" },
  ] satisfies AtAGlanceItem[],
  seifHighlight: {
    title: "Open-source highlight: SEIF",
    description:
      "Proveniência criptográfica para artefatos de IA: assinatura Ed25519, ancoragem temporal opcional (OpenTimestamps) e governança auditável (sessões, ciclos, classificação). Desenvolvido e iterado em um fluxo AI-assisted (LLMs/Cursor) com rastreabilidade e integridade verificável. Complementar ao MCP: MCP transporta contexto; SEIF atesta integridade e autoria.",
    links: [
      { label: "Repo", href: "https://github.com/and2carvalho/seif" },
      { label: "PyPI", href: "https://pypi.org/project/seif-cli/" },
      { label: "Demo", href: "https://seif-framework.streamlit.app" },
    ],
  },
};

export const experiences: Experience[] = [
  {
    date: "2022 – Present",
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
      "Proveniência criptográfica para artefatos de IA com governança auditável (sessões, ciclos, classificação) e integridade verificável.",
    ecosystemItems: [
      { title: "seif-cli", subtitle: "CLI tool · PyPI · sign, verify, classify" },
      { title: "seif-engine", subtitle: "Quality gate · Multi-AI consensus" },
      { title: "VS Code Extension", subtitle: "Modules, cycles, sessions panel" },
      { title: "Browser Extension", subtitle: "Chrome/Edge · Observability" },
      { title: "Dashboard", subtitle: "Next.js · Audit trail · Sessions" },
      { title: "Transparency Log", subtitle: "Append-only · Rekor-shaped for AI" },
    ],
    tags: ["Python", "TypeScript", "Ed25519", "OpenTimestamps", "Next.js", "Tauri", "Chrome MV3", "PostgreSQL"],
    stats: "125+ PRs · 78 modules · 88 test suites · 11 repositories · Published on PyPI",
    links: [
      { label: "Source Code", href: "https://github.com/and2carvalho/seif" },
      { label: "PyPI", href: "https://pypi.org/project/seif-cli/" },
      { label: "Live Demo", href: "https://seif-framework.streamlit.app" },
    ],
  },
  {
    title: "Killer Design",
    badge: "Open Source",
    description:
      "Design system com Storybook, testes unitários (Vitest) e regressão visual (Playwright).",
    tags: ["React 19", "TypeScript", "Storybook", "Vitest", "Playwright", "Vite"],
    links: [{ label: "GitHub", href: "https://github.com/and2carvalho/killer-design" }],
  },
  {
    title: "Coro Echo",
    badge: "Open Source",
    description: "Monorepo full-stack com API REST, autenticação JWT, Prisma + PostgreSQL e frontend React + Tailwind.",
    tags: ["React 19", "Express", "Prisma", "PostgreSQL", "JWT", "Tailwind"],
    links: [{ label: "GitHub", href: "https://github.com/and2carvalho/coro-echo" }],
  },
  {
    title: "Flutter Design System",
    badge: "Reference",
    description: "Design system Material 3 para Flutter com theming, tokens, componentes e padrões de listas/overlays.",
    tags: ["Flutter", "Dart", "Material 3"],
    links: [{ label: "GitHub", href: "https://github.com/and2carvalho/system_design" }],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    tags: ["React", "Next.js", "React Native", "TypeScript", "Tailwind", "Styled-Components", "Zustand", "Redux", "Storybook"],
  },
  {
    title: "Backend",
    tags: ["Node.js", "Express", "NestJS", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "Prisma"],
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

