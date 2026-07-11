'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const features = [
  { title: 'The Team', icon: 'groups', description: 'Meet the people building the BAWES universe — creators, engineers, and visionaries.', isEmoji: false },
  { title: 'Open Source', icon: '📖', description: 'Our code is open and transparent. Contribute, audit, and build with us.', isEmoji: true },
  { title: 'WorkAdventure Fork', icon: '🔧', description: 'Built on the foundation of WorkAdventure, extended for the universe.', isEmoji: true },
  { title: 'Legal', icon: '⚖️', description: 'Terms of service, privacy policy, and legal framework for the platform.', isEmoji: true },
  { title: 'Contact', icon: '✉️', description: 'Get in touch with the team for support, partnerships, or general inquiries.', isEmoji: true },
]

const featureSlugs: Record<string, string> = {
  'The Team': '/team',
  'Manifesto': '/manifesto',
  'Open Source': '/open-source',
  'MCP Integration': '/mcp-integration',
  'WorkAdventure Fork': '/workadventure-fork',
  'The Empty Seat': '/empty-seat',
  'How It Works': '/how-it-works',
  'Legal': '/legal',
}

export default function About() {
  const heroRef = useRef(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="material-symbols-outlined text-lg">info</span>
              About Us
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">About</span>
              <span className="text-gradient ml-3">BAWES</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              We are building a people-first universe where ideas turn into action.
              Open, spatial, and built for real human connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Link key={feature.title} href={featureSlugs[feature.title] || '#'}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300`}>
                  {feature.isEmoji ? (
                    <span className="text-xl">{feature.icon}</span>
                  ) : (
                    <span className="material-symbols-outlined text-2xl text-purple-300">
                      {feature.icon}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-purple-600/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <motion.p
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get involved
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
            <Button href="https://discord.gg/CXceJWnwNT" variant="ghost" size="lg" className="glass-card border border-white/10 hover:border-white/20">
              <span className="material-symbols-outlined text-lg">group</span>
              Join our community
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
