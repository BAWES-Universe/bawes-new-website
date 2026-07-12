'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'

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

export default function DevelopersPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="min-h-[45vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-amber/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-purple mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="material-symbols-outlined text-lg">code</span>
              Developer Hub
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
              Build on the{' '}
              <span className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}>
                Universe.
              </span>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Everything you need to extend, integrate, and customize the BAWES platform. APIs, SDKs, protocols, and open-source foundations.
            </p>
          </motion.div>
        </div>
      </section>

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

      {/* CTA */}
      <Section className="relative min-h-[35vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to start building?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/BAWES-Universe"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">code</span>
              View on GitHub
            </a>
            <Link
              href="/features-overview"
              className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              Explore all features
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
