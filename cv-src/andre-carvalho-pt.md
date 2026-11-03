---
lang: pt-BR
pagetitle: André C.A. de Carvalho — Engenheiro de IA / LLMs
---

::: {.topbar}
# André C.A. de Carvalho

::: {.subhead-title}
Engenheiro de IA / LLMs · Sistemas de agentes · RAG · Avaliação
:::

::: {.contact}
Uberlândia, MG, Brasil · Remoto, híbrido ou presencial<br />
[and2carvalho@gmail.com](mailto:and2carvalho@gmail.com) · [linkedin.com/in/and2carvalho](https://linkedin.com/in/and2carvalho) · [github.com/and2carvalho](https://github.com/and2carvalho)
:::
:::

## Resumo

::: {.summary}
Engenheiro de software em transição deliberada para Engenharia de IA/LLMs, combinando 7+ anos de produtos web e mobile em produção com pesquisa acadêmica aplicada. Mestrando em Ciência da Computação na UFU. Autor de livro-texto com DOI sobre engenharia de contexto para agentes de IA e de pesquisa reprodutível sobre observabilidade de sistemas. Experiência prática em RAG, agentes, avaliação de sistemas baseados em LLMs e automação, além de pipeline de OCR com Vision LLM que elevou a acurácia de 28% para 75%.
:::

## Competências

::: {.skills}
- [IA, LLMs & Agentes]{.k} [RAG · sistemas de agentes · avaliação de sistemas baseados em LLMs · engenharia de contexto · MCP · Vision LLM via API · Ollama]{.v}
- [Backend]{.k} [Go · Python · Node.js · gRPC · REST · NATS JetStream · Microsserviços · Outbox Pattern · KrakenD]{.v}
- [Frontend & Mobile]{.k} [React · Next.js · TypeScript · React Query · Zustand · Storybook · Flutter · React Native]{.v}
- [Dados & Infra]{.k} [PostgreSQL · MongoDB · Redis · ElasticSearch · Docker · Kubernetes · ETL/SQL · Power BI]{.v}
- [Integrações]{.k} [Mercado Livre · Amazon · Shopee · PagarMe · PinPag · Eventim]{.v}
- [Qualidade]{.k} [Jest · Vitest · Playwright · CI/CD]{.v}
:::

## Publicações e pesquisa

::: {.role}
::: {.rolehead}
[**Contexto para Agentes de IA: Gerenciamento, Engenharia, Design e Administração** · Livro-texto universitário, Zenodo]{.role-title}
[out/2026]{.role-period}
:::

- Livro-texto sobre engenharia de contexto para agentes baseados em LLMs: seleção sob orçamento, RAG, memória, proveniência, autoridade, orquestração multiagente, segurança e avaliação.
- Publicado em acesso aberto com DOI [10.5281/zenodo.23476445](https://doi.org/10.5281/zenodo.23476445).
:::

::: {.role}
::: {.rolehead}
[**(D, δ): a two-feature signature for memory-access traces** · Software de pesquisa, Zenodo]{.role-title}
[out/2026]{.role-period}
:::

- Pesquisa vinculada ao mestrado: assinatura de duas variáveis que identifica degradação de O(n log n) para O(n²) no mesmo código, sem calibração por classe.
- Implementações independentes em TypeScript e Python, corpus determinístico, validação pré-registrada e análise de robustez. Código: [github.com/and2carvalho/memory-access-signature](https://github.com/and2carvalho/memory-access-signature) · DOI [10.5281/zenodo.23198655](https://doi.org/10.5281/zenodo.23198655).
:::

## Experiência

::: {.role}
::: {.rolehead}
[**Full-Stack Engineer** · Beezoo Labs]{.role-title}
[jan/2025 – atual]{.role-period}
:::

::: {.role-company}
Plataforma SaaS multi-tenant de fidelidade e comércio digital para shoppings e varejo
:::

- Entreguei do zero o microsserviço **Showcase** (vitrines digitais com QR codes, pricing policies e enriquecimento de catálogo via eventos NATS) e seu frontend mobile-first — feature ponta a ponta: .proto → serviço Go → painel admin → app público.
- Liderei a iniciativa **app-whitelabel** no monorepo de microsserviços Go (gRPC, NATS JetStream, Outbox Pattern, PostgreSQL, KrakenD), habilitando configuração multi-tier de apps mobile por tenant.
- Desenvolvi os apps **Flutter** white-label para consumidor e parceiros — loyalty, campanhas, integração Eventim, login biométrico e design system unificado.
- Construí sozinho um serviço de **OCR** para NF-e/NFC-e em Python/gRPC, combinando QR → Tesseract → PaddleOCR → Vision LLM (via API) em cascata; elevei a acurácia de **28% para 75%** em dataset de 1.138 imagens reais; deploy em Docker + Kubernetes.

::: {.stack}
Stack: Go · Python · TypeScript · Dart · gRPC · NATS · PostgreSQL · Next.js · React · Flutter · Docker · Kubernetes
:::
:::

::: {.role}
::: {.rolehead}
[**Software Engineer** · Hubsell]{.role-title}
[mai/2022 – dez/2024]{.role-period}
:::

::: {.role-company}
Plataforma de integração para e-commerce
:::

- Desenvolvi frontend e integrações do **Seller Center**, a interface pela qual os sellers operam suas vendas em Mercado Livre, Amazon, Shopee e outros marketplaces.
- Construí as features de **PDV (Point of Sale)** e **Shopping Assistant**, voltadas à conversão dos sellers.
- Integrei **gateways de pagamento** (PagarMe, PinPag) ao dashboard do seller.
- Ataquei os gargalos de carregamento de telas pesadas (dashboards, painéis de vendas) com busca via **ElasticSearch** e cache de dados no cliente com **React Query**.
- Publiquei app mobile para Android e iOS com **Expo**.

::: {.stack}
Stack: React · Next.js · Node.js · MongoDB · ElasticSearch · Zustand · React Query · Expo · Firebase
:::
:::

::: {.role}
::: {.rolehead}
[**Full-Stack Developer** · 3 UP Tech]{.role-title}
[dez/2020 – mai/2022]{.role-period}
:::

::: {.role-company}
3Ponto — plataforma de gestão financeira (app mobile + dashboard web)
:::

- Atuei no ciclo completo do produto — app mobile (**React Native**) e dashboard web (**React**) —, da tradução de requisitos de negócio à entrega em produção.
- Desenvolvi serviços de backend em **arquitetura de microsserviços** (Node.js/Express, PostgreSQL).
- Conduzi migrações e integrações com sistemas legados.
- Liderei o front-end: implementação de features, correção de bugs e ajuste de performance.

::: {.stack}
Stack: React · React Native · Node.js · Express · PostgreSQL · Microsserviços
:::
:::

::: {.role}
::: {.rolehead}
[**Consultor Freelance — Dados & Sistemas de Gestão** · Upwork]{.role-title}
[2016 – 2019]{.role-period}
:::

- Construí pipelines de **ETL** e dashboards **Power BI** para analytics de help desk e operação.
- Implementei um **ERP** (Odoo/OpenERP) com workflows de negócio e automações.
- Automatizei modelos de dados com **SQL** e **Python** para dashboards executivos.
:::

## Formação acadêmica e pesquisa

::: {.role}
::: {.rolehead}
[**Mestrado em Ciência da Computação** · Universidade Federal de Uberlândia (PPGCO/UFU)]{.role-title}
[2026 – em curso]{.role-period}
:::

- **Linha aplicada:** sistemas de IA, automação de agentes e observabilidade de software, articulando pesquisa reprodutível com engenharia de produção.
- **Pesquisa:** assinaturas compactas de traços de execução para detectar degradação de desempenho sem calibração por classe; hipóteses pré-registradas e experimentos reproduzíveis em TypeScript + Python.
- **Produção científica:** livro-texto e software de pesquisa publicados em Zenodo, ambos com DOI. A seção anterior traz os links públicos verificáveis.
:::

::: {.role}
::: {.rolehead}
[**Graduação em Administração** · União de Faculdades Metropolitanas de Maringá]{.role-title}
[2016]{.role-period}
:::
:::

## Idiomas

::: {.skills}
- [Português]{.k} [Nativo]{.v}
- [Inglês]{.k} [C2 Proficient — certificado EF SET ([cert.efset.org/en/Eukv37](https://cert.efset.org/en/Eukv37))]{.v}
:::
