---
lang: en
pagetitle: Andre C.A. de Carvalho — AI / LLM Engineer
---

::: {.topbar}
# Andre C.A. de Carvalho

::: {.subhead-title}
AI / LLM Engineer · Agent systems · RAG · Evaluation
:::

::: {.contact}
Uberlândia, MG, Brazil · Open to remote, hybrid, or on-site<br />
[and2carvalho@gmail.com](mailto:and2carvalho@gmail.com) · [linkedin.com/in/and2carvalho](https://linkedin.com/in/and2carvalho) · [github.com/and2carvalho](https://github.com/and2carvalho)
:::
:::

## Summary

::: {.summary}
Software engineer deliberately transitioning into AI/LLM Engineering, combining 7+ years of shipping web and mobile products with applied academic research. M.Sc. student in Computer Science at UFU. Author of a DOI-registered university textbook on context engineering for AI agents and of reproducible systems-observability research. Hands-on experience with RAG, agent systems, evaluation of LLM-based systems, and automation, alongside a Vision LLM–backed OCR pipeline that raised accuracy from 28% to 75%.
:::

## Skills

::: {.skills}
- [AI, LLMs & Agents]{.k} [RAG · agent systems · evaluation of LLM-based systems · context engineering · MCP · Vision LLM via API · Ollama]{.v}
- [Backend]{.k} [Go · Python · Node.js · gRPC · REST · NATS JetStream · Microservices · Outbox Pattern · KrakenD]{.v}
- [Frontend & Mobile]{.k} [React · Next.js · TypeScript · React Query · Zustand · Storybook · Flutter · React Native]{.v}
- [Data & Infra]{.k} [PostgreSQL · MongoDB · Redis · ElasticSearch · Docker · Kubernetes · ETL/SQL · Power BI]{.v}
- [Integrations]{.k} [Mercado Livre · Amazon · Shopee · PagarMe · PinPag · Eventim]{.v}
- [Quality]{.k} [Jest · Vitest · Playwright · CI/CD]{.v}
:::

## Publications & Research

::: {.role}
::: {.rolehead}
[**Contexto para Agentes de IA: Gerenciamento, Engenharia, Design e Administração** · University textbook, Zenodo]{.role-title}
[Oct 2026]{.role-period}
:::

- University textbook on context engineering for LLM-based agents: selection under budget, RAG, memory, provenance, authorization, multi-agent orchestration, security, and evaluation.
- Open-access publication with DOI [10.5281/zenodo.23476445](https://doi.org/10.5281/zenodo.23476445).
:::

::: {.role}
::: {.rolehead}
[**(D, δ): a two-feature signature for memory-access traces** · Research software, Zenodo]{.role-title}
[Oct 2026]{.role-period}
:::

- Master's research: a two-feature signature that flags O(n log n) to O(n²) degradation in the same code without per-class calibration.
- Independent TypeScript and Python implementations, a deterministic corpus, pre-registered validation, and robustness analysis. Code: [github.com/and2carvalho/memory-access-signature](https://github.com/and2carvalho/memory-access-signature) · DOI [10.5281/zenodo.23198655](https://doi.org/10.5281/zenodo.23198655).
:::

## Experience

::: {.role}
::: {.rolehead}
[**Full-Stack Engineer** · Beezoo Labs]{.role-title}
[Jan 2025 – Present]{.role-period}
:::

::: {.role-company}
Multi-tenant SaaS platform for loyalty and digital commerce (malls & retail)
:::

- Built from scratch the **Showcase** microservice (digital storefronts with QR codes, pricing policies, and catalog enrichment via NATS events) plus its mobile-first frontend — end-to-end feature: .proto → Go service → admin panel → public app.
- Led the **app-whitelabel** initiative in the Go microservices monorepo (gRPC, NATS JetStream, Outbox Pattern, PostgreSQL, KrakenD), enabling multi-tier mobile app configuration per tenant.
- Developed white-label **Flutter** apps for consumers and partners — loyalty, campaigns, Eventim integration, biometric login, and a unified design system.
- Solo-built an **OCR** service for Brazilian tax receipts (NF-e/NFC-e) in Python/gRPC, chaining QR → Tesseract → PaddleOCR → Vision LLM (via API); raised accuracy from **28% to 75%** on a 1,138-image real-world dataset; deployed on Docker + Kubernetes.

::: {.stack}
Stack: Go · Python · TypeScript · Dart · gRPC · NATS · PostgreSQL · Next.js · React · Flutter · Docker · Kubernetes
:::
:::

::: {.role}
::: {.rolehead}
[**Software Engineer** · Hubsell]{.role-title}
[May 2022 – Dec 2024]{.role-period}
:::

::: {.role-company}
E-commerce integration platform
:::

- Built frontend and integrations for the **Seller Center**, the interface sellers use to run their sales on Mercado Livre, Amazon, Shopee, and other marketplaces.
- Built the **POS (Point of Sale)** and **Shopping Assistant** features, aimed at seller conversion.
- Integrated **payment gateways** (PagarMe, PinPag) into the seller dashboard.
- Tackled loading bottlenecks on heavy screens (dashboards, sales panels) with **ElasticSearch**-backed search and client-side data caching via **React Query**.
- Shipped a mobile app for Android and iOS with **Expo**.

::: {.stack}
Stack: React · Next.js · Node.js · MongoDB · ElasticSearch · Zustand · React Query · Expo · Firebase
:::
:::

::: {.role}
::: {.rolehead}
[**Full-Stack Developer** · 3 UP Tech]{.role-title}
[Dec 2020 – May 2022]{.role-period}
:::

::: {.role-company}
3Ponto — financial management platform (mobile app + web dashboard)
:::

- Worked across the full product lifecycle — mobile app (**React Native**) and web dashboard (**React**) — from translating business requirements to shipping in production.
- Developed backend services in a **microservices** architecture (Node.js/Express, PostgreSQL).
- Led migrations and integrations with legacy systems.
- Led frontend work: feature delivery, bug fixing, and performance tuning.

::: {.stack}
Stack: React · React Native · Node.js · Express · PostgreSQL · Microservices
:::
:::

::: {.role}
::: {.rolehead}
[**Freelance Consultant — Data & Business Systems** · Upwork]{.role-title}
[2016 – 2019]{.role-period}
:::

- Built **ETL** pipelines and **Power BI** dashboards for help desk and operations analytics.
- Implemented an **ERP** (Odoo/OpenERP) with custom business workflows and automations.
- Automated data models with **SQL** and **Python** for executive dashboards.
:::

## Education & Research

::: {.role}
::: {.rolehead}
[**M.Sc. in Computer Science** · Federal University of Uberlândia (PPGCO/UFU)]{.role-title}
[2026 – in progress]{.role-period}
:::

- **Applied research line:** AI systems, agent automation, and software observability, connecting reproducible research to production engineering.
- **Research:** compact execution-trace signatures that flag performance degradation without per-class calibration; pre-registered hypotheses and reproducible TypeScript + Python experiments.
- **Scholarly output:** a university textbook and research software published on Zenodo, both with DOIs. The previous section provides the public, verifiable links.
:::

::: {.role}
::: {.rolehead}
[**B.A. in Business Administration** · União de Faculdades Metropolitanas de Maringá]{.role-title}
[2016]{.role-period}
:::
:::

## Languages

::: {.skills}
- [Portuguese]{.k} [Native]{.v}
- [English]{.k} [C2 Proficient — EF SET certificate ([cert.efset.org/en/Eukv37](https://cert.efset.org/en/Eukv37))]{.v}
:::
