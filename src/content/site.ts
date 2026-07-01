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

export type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  doi?: string;
  url?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export const site = {
  brand: "and2carvalho",
  name: "Andre C.A. de Carvalho",
  role: "Desenvolvedor Full-Stack",
  valueProp: "7+ anos entregando produtos web e mobile em produção — Go, Python, TypeScript, microservices (gRPC, NATS), integrações de marketplaces e pagamentos — com experiência hands-on em integração de IA (Vision LLM em pipeline de OCR em produção).",
  summary:
    "Desenvolvedor Full-Stack com mais de 7 anos entregando produtos web e mobile em produção. Atualmente na Beezoo Labs, construindo microservices Go (gRPC/NATS), apps Flutter white-label, e um serviço de OCR em Python integrando Vision LLM via API (28% → 75% de acurácia em dataset real). Antes disso, integrações de marketplaces e gateways de pagamento em plataformas de e-commerce.",
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
    { label: "Backend", detail: "Go · Python · gRPC · NATS · Microservices" },
    { label: "Frontend & Mobile", detail: "React · Next.js · TypeScript · Flutter" },
    { label: "Marketplaces & Payments", detail: "Mercado Livre · Amazon · Shopee · PagarMe" },
  ] satisfies ProofPill[],
  atAGlance: [
    { title: "Backend", detail: "Go e Python — gRPC, NATS, microservices, APIs e filas" },
    { title: "Frontend & Mobile", detail: "React/Next.js e Flutter com foco em UX, performance e design systems" },
    { title: "AI Integration", detail: "integração de Vision LLM via API em pipeline de OCR em produção" },
    { title: "Marketplaces & Pagamentos", detail: "integrações com Mercado Livre, Amazon, Shopee, PagarMe e PinPag" },
    { title: "Dados & Qualidade", detail: "ETL/SQL, ElasticSearch, testes (unit/e2e), CI e observabilidade" },
    { title: "Projeto pessoal", detail: "SEIF Protocol — pesquisa em proveniência de artefatos de IA (seifprotocol.com)" },
  ] satisfies AtAGlanceItem[],
};

export const experiences: Experience[] = [
  {
    date: "2025 – Present",
    role: "Full-Stack Engineer",
    company: "Beezoo Labs — Multi-tenant SaaS for loyalty & digital commerce (malls & retail)",
    highlights: [
      "Built the Showcase microservice end-to-end (.proto → Go service → admin panel → public app): digital storefronts with QR codes, pricing policies, and catalog enrichment via NATS events",
      "Led the app-whitelabel initiative in the Go microservices monorepo (gRPC, NATS JetStream, Outbox Pattern, PostgreSQL, KrakenD), enabling multi-tier mobile app configuration per tenant",
      "Built white-label Flutter apps (loyalty, campaigns, Eventim integration, biometric login) on a unified design system",
      "Solo-built an OCR service for tax receipts (NF-e/NFC-e) in Python/gRPC integrating existing tools in a cascade (QR → Tesseract → PaddleOCR → Vision LLM via API), raising accuracy from 28% to 75% on a 1,138 real-image dataset",
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
    title: "SEIF Protocol",
    badge: "Reference",
    description:
      "Projeto pessoal de pesquisa em proveniência criptográfica (Ed25519, ancoragem temporal opcional via OpenTimestamps) e governança auditável para artefatos gerados por IA. Motivou a publicação acadêmica listada em Publicações.",
    tags: ["Python", "TypeScript", "Ed25519", "OpenTimestamps"],
    links: [{ label: "seifprotocol.com", href: "https://www.seifprotocol.com" }],
  },
];

export const publications: Publication[] = [
  {
    authors: "CARVALHO, A. C. A. de",
    year: "2026",
    title:
      "On the Unique Primitive Second-Order System with Golden-Ratio Damping: Mathematical Properties and Applications to AI Context Verification",
    venue: "Zenodo",
    doi: "10.5281/zenodo.19344678",
    url: "https://doi.org/10.5281/zenodo.19344678",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Graduação em Administração",
    institution: "União de Faculdades Metropolitanas de Maringá",
    period: "2016",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Integration",
    tags: ["Integração de LLM em produção", "Vision LLM (via API)", "OCR pipeline", "Ollama", "MCP", "AI-assisted engineering"],
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

