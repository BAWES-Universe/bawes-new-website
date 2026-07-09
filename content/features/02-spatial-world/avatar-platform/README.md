# Avatar Platform

> Full avatar identity system — sets, entitlements, catalog management.

**Status:** 🟢 LIVE (sets + catalog shipped), 🟡 PROPOSED (fashion clubs, drops from PR #1)

Avatars are grouped into **Sets** — managed collections with scope, entitlement, and lifecycle. Not just a character picker.

## Set Types

| Type | Who sees it |
|---|---|
| **Public** | Every visitor on the platform |
| **Universe-scoped** | Only inside a specific universe |
| **World-scoped** | Only inside a specific world |
| **Membership-gated** | Unlocked by tag, subscription tier, or email domain |
| **User-granted** | Directly assigned to a specific user by admin |
| **NPC / Bot-only** | Hidden from all players. Assigned exclusively to AI bots |

## Entitlement Types

- **Tag-gated** — requires a membership tag (e.g. "staff", "vip", "student")
- **Subscription-gated** — behind a recurring subscription; expires when subscription ends
- **Email-domain scoped** — restricted to verified email domains (@company.com)
- **Direct grant** — admin assigns a specific set to a specific user
- **Time-limited** — set start and end dates; seasonal drops unlock and expire automatically

## Governance (Proposed — from PR #1)

Features described in the PR but not confirmed shipped:

- **Safe archive flow** — shows every player/bot wearing a set before archiving
- **Full audit log** — every action logged with timestamp and actor
- **Versioned collections** — manage as versioned collections, publish new season without touching live set
- **Effective access preview** — see exactly which sets a specific user can access

## Code

- Avatar catalog seed + lifecycle management: PR #91, PR #103
- Woka system: `docs/others/self-hosting/wokas.md`
- Avatar set filtering fix: PR #103 (parsePlayUri, `_/` vs `@/` URL formats)
