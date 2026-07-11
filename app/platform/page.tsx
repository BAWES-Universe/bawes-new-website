'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const features = [
  { title: 'Self-Hosting', icon: 'dns', description: 'Deploy and manage the entire platform on your own infrastructure.' },
  { title: 'Admin API', icon: 'api', description: 'Full REST API for programmatic platform management and automation.' },
  { title: 'OIDC Auth', icon: 'vpn_key', description: 'Single sign-on via OpenID Connect with any identity provider.' },
  { title: 'White Label', icon: 'palette', description: 'Brand the platform as your own with custom theming and domains.' },
  { title: 'Technology Stack', icon: 'layers', description: 'Built on proven open-source technologies — fully transparent and extensible.' },
]

const featureSlugs: Record<string, string> = {
  'Self-Hosting': '/features/self-hosting',
  'Admin API': '/features/admin-api',
  'OIDC Auth': '/features/oidc-auth',
  'White Label': '/features/white-label',
  'Technology Stack': '/features/tech-stack',
}

export default function Platform() {
  const heroRef = useRef(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
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
              <span className="material-symbols-outlined text-lg">cloud</span>
              Infrastructure
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Platform</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              The engine that powers your universe. Self-host, customize, and scale with enterprise-grade infrastructure.
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
              <Link key={feature.title} href={featureSlugs[feature.title]}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl text-purple-300">
                    {feature.icon}
                  </span>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <motion.p
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Take control of your universe
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Talk to us
            </Button>
            <Button href="/features-overview" variant="ghost" size="lg" className="glass-card border border-white/10 hover:border-white/20">
              See all features
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
