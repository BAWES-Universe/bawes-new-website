# BAWES Universe — Content Spec

This folder is the **single source of truth** for all content, structure, and navigation on [bawes.net](https://bawes.net).

## How it works

- `content/current/` — content that exists on the site today, extracted verbatim
- `content/proposed/` — restructured content for the redesign (future)
- `content/references/` — images, links, and design references (future)

## Why this exists

Separating content from code means:
- Anyone can edit the landing page copy without touching React components
- AI tools (Claude, Hermes) can read the full context in one shot
- The structure can be iterated in PRs before any code changes

## Workflow

1. Edit markdown in this folder
2. Open a PR into `master`
3. Once content is approved, the site is updated to match
