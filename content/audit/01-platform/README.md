# 01 — Platform

> The Universe core: a fork of WorkAdventure, re-architected for AI-native experiences.

## Universe (Fork)

- **Source:** `github.com/BAWES-Universe/workadventure-universe`
- **Branch model:** `universe-develop` → `universe` (production via release PRs)
- **Built on:** WorkAdventure by TheCodingMachine — open source (MIT), GDPR compliant
- **What changed:** Extended with native AI agent support, MCP tool integration, streaming conversations, behavioral AI, OAuth, encrypted credential storage
- **Live at:** `play.bawes.net` / `universe.bawes.net`

## Infrastructure

- **Hosting:** Coolify (self-hosted) on Hetzner (91.98.76.59)
- **Containers:** Docker Compose — admin-api, pusher, front, map-storage, uploader, Redis, Matrix, Traefik
- **Database:** PostgreSQL (per-row AES-256-GCM encryption for sensitive credentials)
- **Auth:** OIDC (Keycloak mock in dev, production OIDC provider)
- **CI/CD:** Release PRs from `universe-develop` to `universe`; automated via GitHub Actions

## Development

- **Local setup:** `docker compose up` with `.env.template`
- **Local URLs:** `play.workadventure.localhost`, `oidc.workadventure.localhost`, etc.
- **Hosts file:** Requires entries in `/etc/hosts` for ~14 subdomains
- **Map format:** WAM files (Web Avatar Map — JSON schema at `docs/schema/2.0.0/wam.json`)

## Self-Hosting

- **Docs:** `docs/others/self-hosting/install.md`
- **Options:** Docker Compose or Helm chart (Kubernetes)
- **Env vars:** Documented at `docs/others/self-hosting/env-variables.md`
- **Matrix server:** Optional Synapse container for persistent chat
- **Custom domain:** Rebranding / white label via map settings

## Upstream: WorkAdventure

- **Repo:** `github.com/thecodingmachine/workadventure` (master branch)
- **Open source:** 4,600+ simultaneous users, 5,249 remote conferences, 2,478 maps built
- **Clients:** Allianz, Bosch, Capgemini, Danone, Renault, Siemens, Stanford University, Societe Generale, etc.
- **Pricing:** SaaS version at workadventu.re/pricing
- **Community:** Discord, X (@Workadventure_), LinkedIn

## Admin API (separate repo)

- **Source:** `github.com/BAWES-Universe/workadventure-universe-admin`
- **Branch model:** `develop` → `main`
- **Purpose:** Room/map CRUD, user auth via API key, bot management, MCP server management
- **Tech stack:** Prisma ORM, PostgreSQL, TypeScript, Next.js API routes
