# Avatar Platform

Full avatar identity system — not just a character picker. Avatars are grouped into **Sets**: managed collections with scope, entitlement type, and lifecycle.

## Set Types

| Type | Who can use it |
|---|---|
| **Public** | Every visitor, any world |
| **Universe-scoped** | Only inside a specific universe |
| **World-scoped** | Only inside a single world |
| **Membership-gated** | Requires a tag, subscription, or email domain |
| **User-granted** | Admin-assigned to a specific user |
| **NPC / Bot-only** | Hidden from all players — assigned to AI bots only |

## Entitlement Types

- **Tag-gated** — requires a membership tag ("staff", "vip", "student")
- **Subscription-gated** — behind a recurring subscription; auto-expires
- **Email-domain scoped** — only @company.com can see the set
- **Direct grant** — admin assigns to a specific user
- **Time-limited** — start and end dates; seasonal drops auto-unlock

## Governance

- **Safe archive** — warns if anyone/bot is wearing a set before archiving
- **Audit log** — every action tracked with timestamp and actor
- **Versioned collections** — publish new season without touching live

## Related

- [Woka avatars](./woka-avatars/) — user avatar rendering
- [Bot avatars](../03-ai-bots/bot-avatars/) — NPC-only sets
- [Orbit](../01-platform/orbit/) — manage avatar sets via admin dashboard
- [OIDC auth](../01-platform/oidc-auth/) — tags and roles for membership gating