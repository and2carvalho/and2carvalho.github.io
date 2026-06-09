---
lang: en
---

::: {.topbar}
# Andre C.A. de Carvalho

::: {.subhead}
::: {.subhead-title}
AI-Augmented Full-Stack Developer
:::

::: {.subhead-links}
Email: [and2carvalho@gmail.com](mailto:and2carvalho@gmail.com) • [linkedin.com/in/and2carvalho](https://linkedin.com/in/and2carvalho) • [github.com/and2carvalho](https://github.com/and2carvalho)
:::
:::
:::

::: {.summary}
Full-Stack Engineer with 7+ years shipping web and mobile products, now focused on building and governing LLM systems in production — LangChain integration, hybrid RAG, prompt engineering, and cryptographic provenance for AI-generated artifacts (author of the SEIF protocol — seifprotocol.com). All on a solid product foundation: marketplace/payment integrations, performance, and maintainable architecture, with a strong data/BI background (ETL, SQL, Python).
:::

::: {.chips}
- **AI / LLM**: LangChain · hybrid RAG · prompt engineering · MCP · Ollama
- **AI governance (SEIF)**: Ed25519 provenance · auditable governance · transparency log
- **Marketplaces**: Mercado Livre · Amazon · Shopee
- **Payments**: PagarMe · PinPag
- **Microservices**: Go · gRPC · NATS · Kubernetes
:::

## Highlight (AI)

::: {.role}
::: {.rolehead}
::: {}
::: {.role-title}
SEIF — Cryptographic provenance & governance for AI
:::

::: {.role-company}
Author · AI provenance & governance protocol · seifprotocol.com
:::
:::

::: {.role-period}
2026 – Present
:::
:::

- Designed a protocol for **cryptographic provenance + auditable governance** (sessions, cycles, classification) over AI-generated artifacts — Ed25519 signing with optional time-anchoring (OpenTimestamps).
- Built **`langchain-seif`** (Python package): a zero-modification **LangChain callback handler** that adds a governance plane — classification, quality-gating, provenance signing, and a transparency-log trail — over any chain, in local or hosted multi-tenant mode.
- Implemented **hybrid RAG** over the knowledge store (lexical + Ollama embeddings) with a cost-aware retrieval trigger; context compression from 50k+ raw tokens to ~3–5k.
- Authored the grounding / system-prompt layer and ran **empirical prompt-engineering experiments** (A/B across multiple models) on whether framing changes correctness — measured, not assumed.

::: {.tech}
`Python` `TypeScript` `LangChain` `RAG` `Ollama` `Ed25519` `OpenTimestamps` `MCP` `Next.js` `PostgreSQL`
:::
:::

## Experience

::: {.role}
::: {.rolehead}
::: {}
::: {.role-title}
Full-Stack Engineer
:::

::: {.role-company}
Beezoo Labs — Multi-tenant SaaS platform for loyalty and digital commerce (malls & retail)
:::
:::

::: {.role-period}
Jan 2025 – Present
:::
:::

- Built from scratch the Showcase microservice (digital storefronts with QR codes, pricing policies, and catalog enrichment via NATS events) plus its mobile-first frontend — end-to-end feature: .proto → Go service → admin panel → public app.
- Led the app-whitelabel initiative in the Go microservices monorepo (gRPC, NATS JetStream, Outbox Pattern, PostgreSQL, KrakenD), enabling multi-tier mobile app configuration per tenant.
- Developed white-label Flutter apps for consumers and partners — loyalty, campaigns, Eventim integration, biometric login, AI batch for catalog, and unified design system.
- Solo-built an OCR service for Brazilian tax receipts (NF-e/NFC-e) in Python/gRPC with a hybrid cascade (QR → Tesseract → PaddleOCR → Vision LLM), raising accuracy from 28% to 75% on a 1,138 real-image dataset; deployed on Docker + Kubernetes.

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
May 2022 – Dec 2024
:::
:::

- Built frontend and integrations for Seller Center/Dashboard, connecting sellers to marketplaces and external APIs.
- Integrated payment gateways (PagarMe, PinPag) and evolved critical product flows.
- Shipped conversion-impacting features (POS and Shopping Assistant).
- Improved UX/performance on heavy screens using ElasticSearch + React Query.

::: {.tech}
`React` `Next.js` `Node.js` `MongoDB` `ElasticSearch` `Zustand` `React Query` `Expo`
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
2020 – 2022
:::
:::

- Built and maintained web and mobile apps end-to-end.
- Backend development using a microservices architecture and legacy integrations.
- Led frontend initiatives: feature delivery, bug fixes, and performance improvements.

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

- Built ETL pipelines and Power BI dashboards for help desk analytics.
- Implemented ERP workflows (Odoo/OpenERP) with custom business processes.
- Automated data models with SQL and Python for executive dashboards.

::: {.tech}
`Python` `SQL` `PostgreSQL` `MySQL` `Odoo` `Power BI`
:::
:::

## Skills

::: {.two-col}
::: {.box}
**AI / LLM**<br />
<span class="muted">LLM integration (LangChain) · Hybrid RAG · Prompt engineering · MCP · Ollama · LLM-as-judge / quality gating · Ed25519 provenance</span>
:::
::: {.box}
**Frontend**<br />
<span class="muted">React · Next.js · TypeScript · State (Zustand/Redux) · Storybook</span>
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

## Education

- Postgraduate studies in Business Intelligence
