'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'
import PageHero from '@/components/page/PageHero'
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
    title: 'Licensing',
    desc: 'Our own work is MIT licensed. The parts that come from WorkAdventure keep the WorkAdventure license.',
  },
  {
    title: 'Transparent Roadmap',
    desc: 'Our development roadmap is public. See what we are working on, vote on feature priorities, and track progress in real time.',
  },
]

export default function OpenSourcePageContent() {
  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: 'Developers', href: '/developers' }]}
        here="Open Source"
        eyebrow="Community"
        title={<>Open <span className="text-gradient-accent">source</span></>}
        lead={<>BAWES is built in the open. Our code is transparent, our process is collaborative, and everyone is welcome to contribute.</>}
        scene="fire"
        actions={[{ label: 'Developer hub', href: '/developers' }, { label: 'GitHub', href: 'https://github.com/BAWES-Universe' }]}
        source="page_open_source"
      />

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
