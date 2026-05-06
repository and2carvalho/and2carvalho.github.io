import { NavClient } from "@/components/NavClient";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { experiences, projects, site, skillGroups } from "@/content/site";

function badgeClass(badge: string) {
  if (badge === "Ecosystem") return "badge badge-ecosystem";
  if (badge === "Open Source") return "badge badge-oss";
  return "badge badge-pro";
}

export default function Home() {
  return (
    <>
      <NavClient brand={site.brand} />
      <RevealOnScroll />

      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{site.name}</h1>
              <p className="role">{site.role}</p>
              <p className="value-prop">{site.valueProp}</p>
              <p className="summary">{site.summary}</p>

              <div className="proof-pills" aria-label="Quick highlights">
                {site.proofPills.map((p) => (
                  <div className="pill" key={p.label}>
                    <span className="pill-label">{p.label}</span>
                    <span className="pill-detail">{p.detail}</span>
                  </div>
                ))}
              </div>

              <div className="hero-links">
                <a href="#contact" className="primary-btn">
                  Contato
                </a>
                <a href={site.links.cvPt} target="_blank" rel="noreferrer">
                  Baixar CV (PT)
                </a>
                <a href={site.links.cvEn} target="_blank" rel="noreferrer">
                  Resume (EN)
                </a>
                <a href={site.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="hero-aside" aria-label="At a glance">
              <div className="glance-card">
                <div className="glance-title">At a glance</div>
                <ul className="glance-list">
                  {site.atAGlance.map((it) => (
                    <li key={it.title}>
                      <strong>{it.title}</strong>
                      <span>{it.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="metrics" aria-label="Key metrics">
            {site.metrics.map((m) => (
              <div className="metric" key={m.label}>
                <div className="metric-label">{m.label}</div>
                <div className="metric-value">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="experience" data-reveal>
        <div className="container">
          <h2>Experiência</h2>
          <p className="section-subtitle">Onde trabalhei e o que construí.</p>

          <div className="exp-list">
            {experiences.map((exp) => (
              <div className="exp-item" key={`${exp.date}-${exp.role}`}>
                <div className="exp-date">{exp.date}</div>
                <div className="exp-body">
                  <h3>{exp.role}</h3>
                  <div className="company">{exp.company}</div>
                  <ul className="highlights">
                    {exp.highlights.map((h, idx) => (
                      <li key={h} className={idx === 0 ? "impact" : undefined}>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="tech">
                    {exp.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="seif" className="section-alt" data-reveal>
        <div className="container">
          <h2>{site.seifHighlight.title}</h2>
          <p className="section-subtitle">Open-source · proveniência · governança auditável</p>
          <div className="seif-highlight">
            <p className="seif-desc">{site.seifHighlight.description}</p>
            <div className="project-links">
              {site.seifHighlight.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-alt" data-reveal>
        <div className="container">
          <h2>Projetos</h2>
          <p className="section-subtitle">Produtos e ferramentas que construí.</p>

          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className={p.featured ? "project project-featured project-span-2" : "project"}>
                <div className="project-header">
                  <h3>{p.title}</h3>
                  <span className={badgeClass(p.badge)}>{p.badge}</span>
                </div>

                <p className="project-desc">{p.description}</p>

                {p.ecosystemItems && (
                  <div className="ecosystem-grid">
                    {p.ecosystemItems.map((it) => (
                      <div className="eco-item" key={it.title}>
                        <strong>{it.title}</strong>
                        <span>{it.subtitle}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {p.stats && <div className="project-stats">{p.stats}</div>}

                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" data-reveal>
        <div className="container">
          <h2>Skills</h2>
          <p className="section-subtitle">Tecnologias com as quais trabalho.</p>

          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.title}>
                <h3>{g.title}</h3>
                <div className="tags">
                  {g.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" data-reveal>
        <div className="container">
          <h2>Contato</h2>
          <p>Aberto a oportunidades, colaboração e conversas sobre engenharia e ferramentas para IA.</p>
          <div className="contact-links">
            <a href={`mailto:${site.links.email}`}>{site.links.email}</a>
            <a href={site.links.cvPt} target="_blank" rel="noreferrer">
              Baixar CV (PT)
            </a>
            <a href={site.links.cvEn} target="_blank" rel="noreferrer">
              Resume (EN)
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">© 2026 Andre C.A. de Carvalho</div>
      </footer>
    </>
  );
}

