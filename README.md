# Knowledge Base Demo

A clickable static showcase of an enterprise knowledge base + customer intelligence platform.

**Live demo:** https://s220284.github.io/knowledge-base-demo/

## What this is

A high-fidelity walkthrough of what an enterprise-grade AI-powered knowledge base looks like, built around a fictional company called Acme Corporation. Everything you see — accounts, people, transcripts, drafts — is invented for illustration. No real data is referenced.

The demo covers twelve+ screens spanning the major capabilities of an enterprise knowledge base system:

1. **Dashboard** — KPIs, recent activity, pipeline at a glance
2. **Knowledge Base** — chat interface with grounded citations
3. **Daily Brief** — automated executive intelligence summary
4. **Search** — hybrid (vector + keyword) search across all sources
5. **Accounts** — full account list with engagement scoring
6. **Account 360°** — single-account view with stakeholders and timeline
7. **People Directory** — searchable contact universe
8. **Customer Data Platform** — segmentation, lifecycle, triggers, dedup
9. **Relationship Graph** — entity relationships and intro paths
10. **Email Drafts** — AI-generated outbound with voice matching
11. **Quality & Evals** — continuous evaluation of answer quality
12. **Data Sources** — connected systems and ingestion health
13. **Admin** — users, roles, governance, audit, compliance

## How to use

Open the demo URL above, or browse the files locally — every page is fully static. No backend, no API calls, no authentication.

The chat interface accepts input but responses are simulated for demo purposes.

## Structure

```
.
├── index.html              Dashboard
├── chat.html               Knowledge Base chat
├── brief.html              Daily Brief
├── search.html             Hybrid search
├── accounts.html           Account list
├── account.html            Single account view
├── people.html             People directory
├── cdp.html                Customer Data Platform
├── graph.html              Relationship graph
├── drafts.html             Email drafts
├── evals.html              Quality & evals
├── sources.html            Connected data sources
├── admin.html              Admin & governance
└── assets/
    ├── css/style.css       Design system
    └── js/app.js           Shared shell, navigation, chat sim
```

## Notes

- All data is fictional. Acme Corporation does not exist.
- This is a clickable mockup, not a working application.
- Designed as illustration material for explaining what is possible.
