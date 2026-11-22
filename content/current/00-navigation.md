# Navigation (Current)

Source: `components/Navigation.tsx`. The desktop bar shows from 1280px up; below that the hamburger menu shows the same links.

## Navbar (desktop, left to right)

| Item | Type | Links |
|------|------|-------|
| Logo | Link | `/` |
| How It Works | Link | `/how-it-works` |
| Universe | Dropdown, two columns (hub `/`) | Things to do `/#things`, Brick `/features/brick`, Brick templates `/features/brick-templates`, Goals and tasks `/features/goals-and-tasks`, A computer for your Brick `/features/brick-computer`, Apps `/features/apps`, Artifacts `/features/artifacts`, Community `/features/artifact-community`, Quests `/features/quests`, Orbit and your account `/#orbit`, AI and voice `/#apps`, Universe AI `/#universe-ai` |
| Features | Dropdown (hub `/features-overview`) | Communication `/communication`, AI Bots `/ai-bots`, Build & Create `/build`, Platform `/platform` |
| Use Cases | Dropdown (hub `/use-cases`) | Personal, Work, Community, Learning, Events, Commerce, Market under `/use-cases/...` |
| Developers | Dropdown (hub `/developers`) | Technology Stack `/features/tech-stack`, Scripting API `/features/scripting`, MCP Integration `/mcp-integration`, Self-Hosting `/features/self-hosting`, Open Source `/open-source`, WorkAdventure Fork `/workadventure-fork` |
| About | Dropdown (hub `/about`) | The Team `/team`, Manifesto `/manifesto`, The Empty Seat `/empty-seat`, Legal `/legal` |
| Blog | External | `https://blog.bawes.net` |
| Contact | Link | `/contact` |
| Discord | Icon button | `https://discord.gg/CXceJWnwNT` |
| Enter the Universe | Primary button | `https://universe.bawes.net` |

## Mobile

Logo, Discord icon, hamburger. The menu opens full screen: Enter the Universe first, then How It Works, then every dropdown group with its links, then Blog and Contact.

## Rule

Never remove a link from the menu or footer without a redirect and a new home for it. Every page must stay reachable.
