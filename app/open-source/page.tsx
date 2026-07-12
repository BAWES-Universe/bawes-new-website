'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const details = [
  {
    title: 'Fully Open Source',
    desc: 'The entire BAWES codebase is open source. Audit every line, inspect the architecture, and verify there are no hidden behaviors.',
  },
  {
    title: 'Community Contributions',
    desc: 'We welcome pull requests, bug reports, and feature ideas. Our community-driven development process ensures the platform serves its users.',
  },
  {
    title: 'Permissive Licensing',
    desc: 'Licensed for both personal and commercial use. Build on BAWES, extend it, or deploy it for your organization without restrictive terms.',
  },
  {
    title: 'Transparent Roadmap',
    desc: 'Our development roadmap is public. See what we are working on, vote on feature priorities, and track progress in real time.',
  },
]

export default function OpenSourcePage() {
  const heroRef = useRef(null)

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/developers" className="hover:text-primary transition-colors">Developers</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Open Source</span>
        </div>
      </div>
            <section
        ref={heroRef}
        className="min-h-[50vh] flex items-center justify-center relative overflow-hidden"
      >
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
              <span className="material-symbols-outlined text-lg">code</span>
              Community
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
              Open Source
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              BAWES is built in the open. Our code is transparent, our process is collaborative, and everyone is welcome to contribute.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {details.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift group cursor-default"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Built in the open.</h2>
          <p className="text-sm text-text-muted mb-8">Every line of code is yours to see, fork, and improve.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/BAWES-Universe" target="_blank" rel="noopener noreferrer" className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">code</span>
              View on GitHub
            </a>
            <Link href="/features-overview" className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              Explore features
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
