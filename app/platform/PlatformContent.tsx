'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
const features = [
  { title: 'Self-Hosting', icon: 'dns', description: 'Deploy and manage the entire platform on your own infrastructure.' },
  { title: 'Admin API', icon: 'api', description: 'The REST API between the game and your member system.' },
  { title: 'OIDC Auth', icon: 'vpn_key', description: 'Single sign-on via OpenID Connect with any identity provider.' },
  { title: 'White Label', icon: 'palette', description: 'Your own domain, logos and colours when you host Universe yourself.' },
  { title: 'Technology Stack', icon: 'layers', description: 'Built on proven open-source technologies — fully transparent and extensible.' },
]

const featureSlugs: Record<string, string> = {
  'Self-Hosting': '/features/self-hosting',
  'Admin API': '/features/admin-api',
  'OIDC Auth': '/features/oidc-auth',
  'White Label': '/features/white-label',
  'Technology Stack': '/features/tech-stack',
}

export default function PlatformContent() {
  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }]}
        here="Platform"
        title={<>The platform <span className="text-gradient-accent">under your universe</span></>}
        lead={<>Run it on your own servers, put your own brand on it, sign in your own way, and manage it all through an API.</>}
        detail={[
          <>The engine that powers your universe. Self-host it, put your brand on it, and connect it to your own systems.</>,
        ]}
        scene="desks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_platform"
      />

      {/* Feature Grid */}
      <Section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <Link key={feature.title} href={featureSlugs[feature.title]} className="group">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card h-full"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(167,139,250,0.12)' }}>
                  <span className="material-symbols-outlined text-xl text-accent-purple">{feature.icon}</span>
                </div>
                <h3 className="font-headline-card text-headline-card text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
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
        title={<>Take control of your universe</>}
        links={[{ label: 'Talk to us', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_platform"
      />
    </div>
  )
}