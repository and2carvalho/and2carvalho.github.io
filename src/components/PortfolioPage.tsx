import { LocaleClient } from "@/components/LocaleClient";
import { NavClient } from "@/components/NavClient";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import {
  education as ptEducation,
  experiences as ptExperiences,
  languages as ptLanguages,
  publications as ptPublications,
  site as ptSite,
  skillGroups as ptSkillGroups,
  type AtAGlanceItem,
  type EducationItem,
  type Experience,
  type Language,
  type Metric,
  type ProofPill,
  type Publication,
  type SkillGroup,
} from "@/content/site";

type Locale = "pt" | "en";

type PortfolioData = {
  eyebrow: string;
  heroName: string;
  site: typeof ptSite;
  metrics: Metric[];
  proofPills: ProofPill[];
  atAGlance: AtAGlanceItem[];
  publications: Publication[];
  experiences: Experience[];
  education: EducationItem[];
  languages: Language[];
  skillGroups: SkillGroup[];
  nav: { research: string; experience: string; skills: string; contact: string };
  copy: {
    researchKicker: string;
    researchTitle: string;
    researchIntro: string;
    publication: string;
    code: string;
    experienceTitle: string;
    experienceIntro: string;
    educationTitle: string;
    educationIntro: string;
    languagesTitle: string;
    skillsTitle: string;
    skillsIntro: string;
    contactTitle: string;
    contactIntro: string;
    contactAction: string;
    researchAction: string;
    cvPt: string;
    cvEn: string;
    featureKicker: string;
    featureAction: string;
    glanceTitle: string;
    metricsLabel: string;
  };
};

const sharedLinks = ptSite.links;

const enData: PortfolioData = {
  eyebrow: "AI ENGINEERING · APPLIED RESEARCH · RELIABLE SYSTEMS",
  heroName: "André Carvalho",
  site: {
    ...ptSite,
    role: "AI / LLM Engineer · Agent systems · RAG · Evaluation",
    location: "Uberlândia, Brazil · Available for global remote work",
    valueProp:
      "I build AI systems on a production-engineering foundation: LLM applications, RAG, agents, evaluation, and workflow automation.",
    summary:
      "M.Sc. student in Computer Science at UFU and author of DOI-registered research on context engineering and systems observability.",
  },
  metrics: [
    { label: "Production engineering", value: "7+ years" },
    { label: "Vision LLM OCR", value: "28% → 75%" },
    { label: "DOI publications", value: "2" },
  ],
  proofPills: [
    { label: "Agents & context", detail: "RAG · budgeted retrieval · governance" },
    { label: "Production AI", detail: "Vision LLM · Python · gRPC · Kubernetes" },
    { label: "Reproducible research", detail: "TypeScript · Python · preregistration · CI" },
  ],
  atAGlance: [
    { title: "Positioning", detail: "AI/LLM engineering grounded in production software delivery." },
    { title: "Current research", detail: "M.Sc. in Computer Science at UFU, focused on AI systems and observability." },
    { title: "Published author", detail: "DOI-registered university textbook on context engineering for AI agents." },
    { title: "Proven delivery", detail: "Hybrid Vision LLM OCR: 28% → 75% on 1,138 real images." },
  ],
  publications: [
    {
      kind: "University textbook · Zenodo · 2026",
      title: "Contexto para Agentes de IA",
      description:
        "A university textbook on context engineering for LLM-based agents, spanning budgeted selection, RAG, memory, provenance, authorization, multi-agent orchestration, security, and evaluation.",
      date: "19 Oct 2026",
      doi: "10.5281/zenodo.23476445",
      href: "https://doi.org/10.5281/zenodo.23476445",
      codeHref: "https://github.com/and2carvalho/contexto-para-agentes-de-ia",
    },
    {
      kind: "Research software · Zenodo · 2026",
      title: "(D, δ): a two-feature signature for memory-access traces",
      description:
        "A calibration-free, two-feature signature that flags performance degradation in the same code. Independent TypeScript and Python implementations reproduce results under CI, with preregistered validation and robustness analysis.",
      date: "7 Oct 2026 · v0.1.0",
      doi: "10.5281/zenodo.23198655",
      href: "https://doi.org/10.5281/zenodo.23198655",
      codeHref: "https://github.com/and2carvalho/memory-access-signature",
    },
  ],
  experiences: [
    {
      date: "Jan 2025 – Present",
      role: "Full-Stack Engineer",
      company: "Beezoo Labs — Multi-tenant loyalty and digital-commerce SaaS for malls and retail",
      highlights: [
        "Built the Showcase microservice and mobile-first frontend end to end: protobuf contract, Go service, admin panel, and public app.",
        "Led a Go microservices initiative for multi-tier white-label mobile-app configuration, using gRPC, NATS JetStream, PostgreSQL, the Outbox Pattern, and KrakenD.",
        "Built a Python/gRPC OCR service for Brazilian tax receipts, chaining QR, Tesseract, PaddleOCR, and a Vision LLM API. It raised accuracy from 28% to 75% on 1,138 real images and ran on Docker and Kubernetes.",
      ],
      tech: ["Go", "Python", "TypeScript", "Dart", "gRPC", "NATS", "PostgreSQL", "Next.js", "React", "Flutter", "Docker", "Kubernetes"],
    },
    {
      date: "May 2022 – Dec 2024",
      role: "Software Engineer",
      company: "Hubsell — E-commerce integration platform",
      highlights: [
        "Built frontend and integrations for Seller Center, helping sellers operate on Mercado Livre, Amazon, Shopee, and other marketplaces.",
        "Built point-of-sale and shopping-assistant features, integrated payment gateways, and improved slow dashboards with ElasticSearch and React Query.",
        "Shipped a mobile application for Android and iOS using Expo.",
      ],
      tech: ["React", "Next.js", "Node.js", "MongoDB", "ElasticSearch", "Zustand", "React Query", "Expo", "Firebase"],
    },
    {
      date: "Dec 2020 – May 2022",
      role: "Full-Stack Developer",
      company: "3 UP Tech — 3Ponto financial-management platform",
      highlights: [
        "Worked across the React Native app and React web dashboard, from requirements through production delivery.",
        "Developed Node.js/Express microservices with PostgreSQL, migrations, and legacy-system integrations.",
      ],
      tech: ["React", "React Native", "Node.js", "Express", "PostgreSQL", "Microservices"],
    },
    {
      date: "2016 – 2019",
      role: "Freelance Consultant — Data & Business Systems",
      company: "Upwork",
      highlights: [
        "Built ETL pipelines and Power BI dashboards for operations analytics, and automated executive data models with SQL and Python.",
        "Implemented an Odoo/OpenERP instance with custom business workflows and automation.",
      ],
      tech: ["Python", "SQL", "Power BI", "PostgreSQL", "MySQL", "Odoo"],
    },
  ],
  education: [
    {
      degree: "M.Sc. in Computer Science — in progress",
      institution: "Federal University of Uberlândia (PPGCO/UFU)",
      period: "2026 – Present",
      highlights: [
        "Applied research spanning AI systems, agent automation, and software observability, connecting reproducible research to production engineering.",
        "Published research on compact execution-trace signatures that flag O(n log n) to O(n²) degradation without per-class calibration.",
        "Methods include preregistered hypotheses and independent TypeScript and Python implementations reproduced in CI.",
        "Author of a DOI-registered university textbook on designing and evaluating LLM-based agent context, including RAG, memory, authorization, orchestration, and evaluation.",
      ],
      links: [
        { label: "Book · DOI 10.5281/zenodo.23476445", href: "https://doi.org/10.5281/zenodo.23476445" },
        { label: "GitHub: contexto-para-agentes-de-ia", href: "https://github.com/and2carvalho/contexto-para-agentes-de-ia" },
        { label: "Research · DOI 10.5281/zenodo.23198655", href: "https://doi.org/10.5281/zenodo.23198655" },
        { label: "GitHub: memory-access-signature", href: "https://github.com/and2carvalho/memory-access-signature" },
      ],
    },
    { degree: "B.A. in Business Administration", institution: "União de Faculdades Metropolitanas de Maringá", period: "2016" },
  ],
  languages: [
    { language: "Portuguese", level: "Native" },
    { language: "English", level: "C2 Proficient — EF SET certificate", link: { label: "cert.efset.org/en/Eukv37", href: "https://cert.efset.org/en/Eukv37" } },
  ],
  skillGroups: [
    { title: "AI, LLMs & Agents", tags: ["Agent systems", "RAG", "LLM evaluation", "Context engineering", "MCP", "Vision LLM API", "Ollama"] },
    { title: "Backend", tags: ["Go", "Python", "Node.js", "gRPC", "REST", "NATS JetStream", "Microservices", "Outbox Pattern", "KrakenD"] },
    { title: "Frontend & Mobile", tags: ["React", "Next.js", "TypeScript", "React Query", "Zustand", "Storybook", "Flutter", "React Native", "Expo"] },
    { title: "Data & Infrastructure", tags: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "Docker", "Kubernetes", "ETL/SQL", "Power BI"] },
    { title: "Integrations", tags: ["Mercado Livre", "Amazon", "Shopee", "PagarMe", "PinPag", "Eventim"] },
    { title: "Quality", tags: ["Jest", "Vitest", "Playwright", "CI/CD"] },
  ],
  nav: { research: "Research", experience: "Experience", skills: "Skills", contact: "Contact" },
  copy: {
    researchKicker: "PUBLISHED RESEARCH",
    researchTitle: "From production software to AI systems engineering",
    researchIntro: "This transition rests on production practice and verifiable research. These works show how I reason about and build AI systems, beyond a list of tools.",
    publication: "View publication and DOI ↗",
    code: "View code ↗",
    experienceTitle: "Experience",
    experienceIntro: "Where I have worked and what I have built.",
    educationTitle: "Academic background",
    educationIntro: "M.Sc. in Computer Science at UFU, with research focused on AI systems and observability.",
    languagesTitle: "Languages",
    skillsTitle: "Skills",
    skillsIntro: "Technologies and engineering practices I use to build products.",
    contactTitle: "Contact",
    contactIntro: "Open to global remote opportunities, collaboration, and conversations about AI systems engineering.",
    contactAction: "Contact",
    researchAction: "Explore research",
    cvPt: "CV (PT)",
    cvEn: "Resume (EN)",
    featureKicker: "FEATURED PUBLICATION",
    featureAction: "Read on Zenodo ↗",
    glanceTitle: "At a glance",
    metricsLabel: "Key metrics",
  },
};

const ptData: PortfolioData = {
  eyebrow: "ENGENHARIA DE IA · PESQUISA APLICADA · SISTEMAS CONFIÁVEIS",
  heroName: "André Carvalho",
  site: ptSite,
  metrics: ptSite.metrics,
  proofPills: ptSite.proofPills,
  atAGlance: ptSite.atAGlance,
  publications: ptPublications,
  experiences: ptExperiences,
  education: ptEducation,
  languages: ptLanguages,
  skillGroups: ptSkillGroups,
  nav: { research: "Pesquisa", experience: "Experiência", skills: "Competências", contact: "Contato" },
  copy: {
    researchKicker: "PESQUISA PUBLICADA",
    researchTitle: "Da engenharia de software à engenharia de sistemas de IA",
    researchIntro: "Minha transição é construída sobre prática de produção e pesquisa verificável. Estes trabalhos mostram como penso e construo sistemas de IA, não apenas quais ferramentas uso.",
    publication: "Ver publicação e DOI ↗",
    code: "Ver código ↗",
    experienceTitle: "Experiência",
    experienceIntro: "Onde trabalhei e o que construí.",
    educationTitle: "Formação acadêmica",
    educationIntro: "Mestrado em Ciência da Computação na UFU, com pesquisa orientada a sistemas de IA e observabilidade.",
    languagesTitle: "Idiomas",
    skillsTitle: "Competências",
    skillsIntro: "Tecnologias e práticas de engenharia com as quais construo produtos.",
    contactTitle: "Contato",
    contactIntro: "Aberto a oportunidades remotas globais, colaboração e conversas sobre engenharia de sistemas de IA.",
    contactAction: "Contato",
    researchAction: "Explorar pesquisa",
    cvPt: "Baixar CV (PT)",
    cvEn: "Resume (EN)",
    featureKicker: "PUBLICAÇÃO EM DESTAQUE",
    featureAction: "Ler no Zenodo ↗",
    glanceTitle: "Em resumo",
    metricsLabel: "Indicadores principais",
  },
};

export function PortfolioPage({ locale }: { locale: Locale }) {
  const data = locale === "en" ? enData : ptData;
  const alternateHref = locale === "pt" ? "/en/" : "/pt/";
  const languageLabel = locale === "pt" ? "EN" : "PT";
  const featuredPublication = data.publications[0];

  return (
    <>
      <LocaleClient locale={locale} />
      <NavClient brand={data.site.brand} locale={locale} labels={data.nav} alternateHref={alternateHref} languageLabel={languageLabel} />
      <RevealOnScroll />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-shell">
            <div className="hero-content">
              <div className="hero-text">
                <p className="hero-eyebrow">{data.eyebrow}</p>
                <h1 id="hero-title">{data.heroName}</h1>
                <p className="role">{data.site.role}</p>
                <p className="location">{data.site.location}</p>
                <p className="value-prop">{data.site.valueProp}</p>
                <div className="hero-links" aria-label={data.copy.contactTitle}>
                  <a href="#research" className="primary-btn">{data.copy.researchAction}</a>
                  <a href="#contact">{data.copy.contactAction}</a>
                  <a href={sharedLinks.cvPt} target="_blank" rel="noreferrer">{data.copy.cvPt}</a>
                  <a href={sharedLinks.cvEn} target="_blank" rel="noreferrer">{data.copy.cvEn}</a>
                </div>
              </div>
              <aside className="hero-aside" aria-label={data.copy.featureKicker}>
                <div className="feature-card">
                  <p className="feature-kicker">{data.copy.featureKicker}</p>
                  <h2>{featuredPublication.title}</h2>
                  <p>{featuredPublication.description}</p>
                  <div className="feature-doi">DOI {featuredPublication.doi}</div>
                  <a href={featuredPublication.href} target="_blank" rel="noreferrer">{data.copy.featureAction}</a>
                </div>
              </aside>
            </div>
            <div className="metrics" aria-label={data.copy.metricsLabel}>
              {data.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-value">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="research-section" data-reveal>
          <div className="container">
            <div className="section-kicker">{data.copy.researchKicker}</div>
            <h2>{data.copy.researchTitle}</h2>
            <p className="section-subtitle research-intro">{data.copy.researchIntro}</p>
            <div className="publication-grid">
              {data.publications.map((publication, index) => (
                <article className="publication-card" key={publication.doi}>
                  <div className="publication-index" aria-hidden="true">0{index + 1}</div>
                  <div className="publication-kind">{publication.kind}</div>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                  <div className="publication-meta">{publication.date}</div>
                  <div className="publication-links">
                    <a href={publication.href} target="_blank" rel="noreferrer">{data.copy.publication}</a>
                    {publication.codeHref && <a href={publication.codeHref} target="_blank" rel="noreferrer">{data.copy.code}</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" data-reveal>
          <div className="container">
            <h2>{data.copy.experienceTitle}</h2>
            <p className="section-subtitle">{data.copy.experienceIntro}</p>
            <div className="exp-list">
              {data.experiences.map((experience) => (
                <article className="exp-item" key={`${experience.date}-${experience.role}`}>
                  <div className="exp-date">{experience.date}</div>
                  <div className="exp-body">
                    <h3>{experience.role}</h3>
                    <div className="company">{experience.company}</div>
                    <ul className="highlights">
                      {experience.highlights.map((highlight, index) => <li key={highlight} className={index === 0 ? "impact" : undefined}>{highlight}</li>)}
                    </ul>
                    <div className="tech">{experience.tech.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-alt" data-reveal>
          <div className="container">
            <h2>{data.copy.educationTitle}</h2>
            <p className="section-subtitle">{data.copy.educationIntro}</p>
            <ul className="edu-list">
              {data.education.map((item) => (
                <li key={`${item.degree}-${item.institution}`} className="edu-item">
                  <div className="edu-degree">{item.degree}</div>
                  <div className="edu-meta">{item.institution} · {item.period}</div>
                  {item.highlights && <ul className="edu-highlights">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                  {item.links && <div className="edu-links">{item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>}
                </li>
              ))}
            </ul>
            <h3 className="lang-title">{data.copy.languagesTitle}</h3>
            <ul className="lang-list">
              {data.languages.map((language) => (
                <li key={language.language}><strong>{language.language}</strong><span>{language.level}{language.link && <> · <a href={language.link.href} target="_blank" rel="noreferrer">{language.link.label}</a></>}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" data-reveal>
          <div className="container">
            <h2>{data.copy.skillsTitle}</h2>
            <p className="section-subtitle">{data.copy.skillsIntro}</p>
            <div className="skills-grid">
              {data.skillGroups.map((group) => (
                <article className="skill-group" key={group.title}><h3>{group.title}</h3><div className="tags">{group.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" data-reveal>
          <div className="container">
            <h2>{data.copy.contactTitle}</h2>
            <p>{data.copy.contactIntro}</p>
            <div className="contact-links">
              <a href={`mailto:${sharedLinks.email}`}>{sharedLinks.email}</a>
              <a href={sharedLinks.cvPt} target="_blank" rel="noreferrer">{data.copy.cvPt}</a>
              <a href={sharedLinks.cvEn} target="_blank" rel="noreferrer">{data.copy.cvEn}</a>
              <a href={sharedLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={sharedLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container">© 2026 André Carvalho</div></footer>
    </>
  );
}
