'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
const resources = [
  { title: 'Technology Stack', icon: 'layers', desc: 'TypeScript, Node.js, WebRTC, AI, MCP — the technologies powering every world.', href: '/features/tech-stack' },
  { title: 'Scripting API', icon: 'code', desc: 'Extend functionality with WA.ui, WA.room, WA.player, WA.state — the WorkAdventure scripting API.', href: '/features/scripting' },
  { title: 'MCP Integration', icon: 'hub', desc: 'Model Context Protocol — connect any tool, API, or data source to your bots.', href: '/mcp-integration' },
  { title: 'Self-Hosting', icon: 'dns', desc: 'Deploy the entire BAWES stack on your own infrastructure with Docker or Kubernetes.', href: '/features/self-hosting' },
  { title: 'Open Source', icon: 'code', desc: 'MIT licensed. 80+ repos. Fork, contribute, audit, and build with us.', href: '/open-source' },
  { title: 'WorkAdventure Fork', icon: 'fork_right', desc: 'Built on WorkAdventure, extended for the BAWES ecosystem. Our open source roots.', href: '/workadventure-fork' },
  { title: 'Admin API', icon: 'api', desc: 'Full REST API for programmatic platform management, automation, and integration.', href: '/features/admin-api' },
  { title: 'OIDC Auth', icon: 'vpn_key', desc: 'Enterprise single sign-on via OpenID Connect with any identity provider.', href: '/features/oidc-auth' },
  { title: 'Bot Tool Calling', icon: 'handyman', desc: 'Give bots the ability to invoke APIs and tools to perform real-world actions.', href: '/features/bot-tools' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function DevelopersPageContent() {
  return (
    <div className="pt-20">

      <PageHero
        crumbs={[]}
        here="Developers"
        eyebrow="Developer hub"
        title={<>Build on the <span className="text-gradient-accent">Universe</span></>}
        lead={<>Everything you need to extend Universe and connect it to your own tools.</>}
        detail={[
          <>Everything you need to extend, integrate, and customize the BAWES platform. APIs, SDKs, protocols, and open-source foundations.</>,
        ]}
        scene="desks"
        actions={[{ label: 'Open source', href: '/open-source' }, { label: 'GitHub', href: 'https://github.com/BAWES-Universe' }]}
        source="page_developers"
      />

      {/* Resource Grid */}
      <Section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((res, i) => (
              <Link key={res.title} href={res.href} className="group">
                <motion.div
                  {...fadeUp(i * 0.05)}
                  className="bento-card h-full"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(167,139,250,0.12)' }}>
                    <span className="material-symbols-outlined text-xl text-accent-purple">{res.icon}</span>
                  </div>
                  <h3 className="font-headline-card text-headline-card text-white mb-2">{res.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{res.desc}</p>
                  <div className="bento-card-arrow">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    Learn more
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <PageClosing
        title={<>Ready to start building?</>}
        links={[{ label: 'View on GitHub', href: 'https://github.com/BAWES-Universe' }, { label: 'Explore all features', href: '/features-overview' }]}
        source="page_developers"
      />
    </div>
  )
}
