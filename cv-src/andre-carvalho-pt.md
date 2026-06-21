---
lang: pt-BR
---

::: {.topbar}
# André C.A. de Carvalho

::: {.subhead}
::: {.subhead-title}
Desenvolvedor Full-Stack · foco em AI / LLM
:::

::: {.subhead-links}
Email: [and2carvalho@gmail.com](mailto:and2carvalho@gmail.com) • [linkedin.com/in/and2carvalho](https://linkedin.com/in/and2carvalho) • [github.com/and2carvalho](https://github.com/and2carvalho)
:::
:::
:::

::: {.summary}
Engenheiro Full-Stack com 7+ anos entregando produtos web e mobile, agora focado em construir e governar sistemas de LLM em produção — integração com LangChain, RAG híbrido, prompt engineering e proveniência criptográfica para artefatos gerados por IA (autor do protocolo SEIF — seifprotocol.com). Tudo sobre uma base sólida de produto: integrações de marketplaces/pagamentos, performance e arquitetura sustentável, com forte background em dados/BI (ETL, SQL, Python).
:::

::: {.chips}
- **AI / LLM**: LangChain · RAG híbrido · prompt engineering · MCP · Ollama
- **Governança de AI (SEIF)**: proveniência Ed25519 · governança auditável · transparency log
- **Marketplaces**: Mercado Livre · Amazon · Shopee
- **Payments**: PagarMe · PinPag
- **Microservices**: Go · gRPC · NATS · Kubernetes
:::

## Destaque (AI)

::: {.role}
::: {.rolehead}
::: {}
::: {.role-title}
SEIF — Proveniência e governança para artefatos de IA
:::

::: {.role-company}
Autor · protocolo de proveniência e governança de AI · seifprotocol.com
:::
:::

::: {.role-period}
2026 – atual
:::
:::

- Estruturei um protocolo de **proveniência criptográfica + governança auditável** (sessões/ciclos/classificação) para artefatos gerados por IA — assinatura Ed25519 com ancoragem temporal opcional (OpenTimestamps).
- Construí o **`langchain-seif`** (pacote Python): um **callback handler de LangChain** zero-modificação que adiciona um plano de governança — classificação, quality-gate, assinatura de proveniência e trilha em transparency-log — sobre qualquer chain, em modo local ou hosted multi-tenant.
- Implementei **RAG híbrido** sobre o store de conhecimento (lexical + embeddings Ollama) com gatilho de recuperação consciente de custo; compressão de contexto de 50k+ tokens brutos para ~3–5k.
- Autorei a camada de grounding / system-prompt e rodei **experimentos empíricos de prompt engineering** (A/B em múltiplos modelos) sobre se o framing altera correção — medido, não presumido.

::: {.tech}
`Python` `TypeScript` `LangChain` `RAG` `Ollama` `Ed25519` `OpenTimestamps` `MCP` `Next.js` `PostgreSQL`
:::
:::

## Experiência

::: {.role}
::: {.rolehead}
::: {}
::: {.role-title}
Full-Stack Engineer
:::

::: {.role-company}
Beezoo Labs — Plataforma SaaS de fidelidade e comércio digital para shoppings e varejo
:::
:::

::: {.role-period}
jan/2025 – atual
:::
:::

- Entreguei do zero o microservice Showcase (vitrines digitais com QR codes, pricing policies e enriquecimento de catálogo via eventos NATS) e o frontend mobile-first correspondente — feature ponta a ponta: .proto → service Go → painel admin → app público.
- Liderei a iniciativa app-whitelabel no monorepo de microservices Go (gRPC, NATS JetStream, Outbox Pattern, PostgreSQL, KrakenD), habilitando configuração multi-tier de apps mobile por tenant.
- Desenvolvi os apps Flutter white-label para consumidor e parceiros — loyalty, campanhas, integração Eventim, login biométrico, AI batch para catálogo e design system unificado.
- Construí solo um serviço de OCR para NF-e/NFC-e em Python/gRPC com cascata híbrida (QR → Tesseract → PaddleOCR → Vision LLM), elevando acurácia de 28% para 75% em dataset de 1.138 imagens reais; deploy em Docker + Kubernetes.

::: {.tech}
`Go` `TypeScript` `Dart` `Python` `gRPC` `Protobuf` `NATS` `PostgreSQL` `Next.js 15` `React 19` `Flutter` `Docker` `Kubernetes` `Tilt`
:::
:::

::: {.role}
::: {.rolehead}
::: {}
::: {.role-title}
Software Engineer
:::

::: {.role-company}
Hubsell — E-commerce Integration Platform
:::
:::

::: {.role-period}
mai/2022 – dez/2024
:::
:::

- Entreguei features e melhorias em módulos críticos (Seller Center/Dashboard), impactando fluxos essenciais de operação e conversão.
- Implementei e evoluí integrações com **gateways de pagamento** (PagarMe, PinPag) e integrações com marketplaces, priorizando confiabilidade e consistência de dados.
- Otimizei significativamente a experiência em telas pesadas (dashboards/painéis) com **ElasticSearch + React Query**, reduzindo gargalos de carregamento e fricção de uso.
- Estruturei UI/state de forma escalável (Zustand/React Query), aumentando previsibilidade e manutenção do produto.

::: {.tech}
`React` `Next.js` `Node.js` `MongoDB` `ElasticSearch` `Zustand` `React Query`
:::
:::

::: {.role}
::: {.rolehead}
::: {}
::: {.role-title}
Full-Stack Developer
:::

::: {.role-company}
3 UP Tech — 3Ponto Financial App
:::
:::

::: {.role-period}
dez/2020 – mai/2022
:::
:::

- Desenvolvi e mantive aplicações web/mobile ponta-a-ponta, transformando requisitos de negócio em entregas consistentes.
- Implementei backend em arquitetura de microserviços e apoiei integrações/migrações de sistemas legados, reduzindo risco operacional.
- Liderei iniciativas no front-end (features, correções e performance), aumentando qualidade de entrega e redução de bugs recorrentes.

::: {.tech}
`React` `React Native` `Node.js` `PostgreSQL` `Express` `Microservices`
:::
:::

::: {.role}
::: {.rolehead}
::: {}
::: {.role-title}
Freelance Consultant
:::

::: {.role-company}
Upwork — Data & Business Systems
:::
:::

::: {.role-period}
2016 – 2019
:::
:::

- Construí pipelines de ETL e dashboards (Power BI) para analytics de help desk e operação.
- Implementei um ERP (Odoo/OpenERP) com workflows de negócio e automações.
- Automatizei modelos de dados com SQL e Python para dashboards executivos.

::: {.tech}
`Python` `SQL` `PostgreSQL` `MySQL` `Odoo` `Power BI`
:::
:::

## Skills

::: {.two-col}
::: {.box}
**AI / LLM**<br />
<span class="muted">Integração de LLM (LangChain) · RAG híbrido · Prompt engineering · MCP · Ollama · LLM-as-judge / quality gating · Proveniência Ed25519</span>
:::
::: {.box}
**Frontend**<br />
<span class="muted">React · Next.js · TypeScript · React Query · Zustand · Storybook</span>
:::
::: {.box}
**Backend**<br />
<span class="muted">Go · Node.js · Python · gRPC · REST APIs · NATS · Microservices</span>
:::
::: {.box}
**Data & Infra**<br />
<span class="muted">PostgreSQL · MongoDB · Redis · Docker · Kubernetes · ElasticSearch · ETL/SQL</span>
:::
::: {.box}
**Quality**<br />
<span class="muted">Jest · Vitest · Playwright · CI/CD</span>
:::
:::

## Formação

- Graduação em Administração — União de Faculdades Metropolitanas de Maringá, 2016

## Publicações

- CARVALHO, A. C. A. de. **On the Unique Primitive Second-Order System with Golden-Ratio Damping: Mathematical Properties and Applications to AI Context Verification**. Zenodo, 2026. DOI: [10.5281/zenodo.19344678](https://doi.org/10.5281/zenodo.19344678).
