'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'

const features = [
  { title: 'Maps', icon: 'map', description: 'Design and build custom interactive maps for your universe.' },
  { title: 'Map Templates', icon: 'content_copy', description: 'Start with pre-built map templates and customize from there.' },
  { title: 'Inline Map Editor', icon: 'edit_square', description: 'Edit maps live in-browser without leaving your universe.' },
  { title: 'Area Zones', icon: 'widgets', description: 'Define zones with custom behaviors, permissions, and effects.' },
  { title: 'Entity Editor', icon: 'view_in_ar', description: 'Place, configure, and manage interactive entities on your maps.' },
  { title: 'Scripting API', icon: 'code', description: 'Extend functionality with a powerful scripting API for custom logic.' },
  { title: 'Teleport', icon: 'near_me', description: 'Teleport users between maps, zones, and universes instantly.' },
  { title: 'Searchable', icon: 'search', description: 'Make your universe content searchable with full-text discovery.' },
  { title: 'User Directory', icon: 'group', description: 'Browse and connect with users across your universe.' },
  { title: 'Avatar Platform', icon: 'face_6', description: 'Custom avatar creation and management platform for all users.' },
]

const featureSlugs: Record<string, string> = {
  'Maps': '/features/maps',
  'Map Templates': '/features/map-templates',
  'Inline Map Editor': '/features/map-editor',
  'Area Zones': '/features/area-zones',
  'Entity Editor': '/features/entity-editor',
  'Scripting API': '/features/scripting',
  'Teleport': '/features/teleport',
  'Searchable': '/features/searchable',
  'User Directory': '/features/user-directory',
  'Avatar Platform': '/features/avatar-platform',
}

export default function Build() {
  return (
    <div className="pt-20">
      {/* Hero */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="Features" className="hover:text-primary transition-colors">/features-overview</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Build & Create</span>
        </div>
      </div>
            <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-amber/10 rounded-full blur-3xl" />
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
              <span className="material-symbols-outlined text-lg">construction</span>
              Creator Tools 02
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
              Build &amp; Create
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Everything you need to build, shape, and expand your universe.
              Maps, entities, scripts, and more — all at your fingertips.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <Section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <Link key={feature.title} href={featureSlugs[feature.title]} className="group">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Build your universe</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              Start Creating
            </Link>
            <Link href="/features-overview" className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              See all features
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}