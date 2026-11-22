'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
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

export default function BuildContent() {
  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }]}
        here="Build & Create"
        title={<>Build and <span className="text-gradient-accent">create</span></>}
        lead={<>Everything you need to make a space your own: maps, objects, zones and scripts.</>}
        detail={[
          <>Everything you need to build, shape, and expand your universe. Maps, entities, scripts, and more — all at your fingertips.</>,
        ]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_build"
      />

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

      <PageClosing
        title={<>Build your universe</>}
        links={[{ label: 'Start creating', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_build"
      />
    </div>
  )
}