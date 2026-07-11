'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const features = [
  { title: 'How It Works', icon: 'psychology', description: 'Platform architecture and the philosophy behind spatial intelligence.' },
  { title: 'The Team', icon: 'groups', description: 'Meet the people building the BAWES universe.' },
  { title: 'Manifesto', icon: 'auto_awesome', description: 'Our philosophy, vision, and the future we are building.' },
  { title: 'Open Source', icon: 'code', description: 'MIT licensed. Contribute, audit, and build with us.' },
  { title: 'WorkAdventure Fork', icon: 'fork_right', description: 'Built on WorkAdventure, extended for the universe.' },
  { title: 'MCP Integration', icon: 'hub', description: 'Model Context Protocol — connect any tool or service.' },
  { title: 'Technology Stack', icon: 'layers', description: 'Built on proven open-source technologies.' },
  { title: 'The Empty Seat', icon: 'event_seat', description: 'A thought experiment on presence and absence.' },
  { title: 'Legal', icon: 'gavel', description: 'Terms of service, privacy policy, and legal framework.' },
  { title: 'Contact', icon: 'mail', description: 'Get in touch for support, partnerships, or inquiries.' },
]

const featureSlugs: Record<string, string> = {
  'How It Works': '/how-it-works',
  'The Team': '/team',
  'Manifesto': '/manifesto',
  'Open Source': '/open-source',
  'WorkAdventure Fork': '/workadventure-fork',
  'MCP Integration': '/mcp-integration',
  'Technology Stack': '/features/tech-stack',
  'The Empty Seat': '/empty-seat',
  'Legal': '/legal',
  'Contact': '/contact',
}

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
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
              <span className="material-symbols-outlined text-lg">info</span>
              About Us
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
              About <span className="text-accent-purple">BAWES</span>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              We are building a people-first universe where ideas turn into action.
              Open, spatial, and built for real human connection.
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Get involved</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              Contact Us
            </Link>
            <Link href="https://discord.gg/CXceJWnwNT" className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">group</span>
              Join our community
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}