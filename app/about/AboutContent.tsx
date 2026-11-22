'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
const items = [
  { title: 'The Team', icon: 'groups', desc: 'Meet the people building the BAWES universe.', href: '/team' },
  { title: 'Manifesto', icon: 'auto_awesome', desc: 'Our philosophy, vision, and the future we are building.', href: '/manifesto' },
  { title: 'The Empty Seat', icon: 'event_seat', desc: 'A thought experiment on presence and absence in virtual spaces.', href: '/empty-seat' },
  { title: 'Legal', icon: 'gavel', desc: 'Terms of service, privacy policy, and legal framework.', href: '/legal' },
  { title: 'Components', icon: 'widgets', desc: 'Other BAWES products that connect with Universe.', href: '/work' },
  { title: 'Contact', icon: 'mail', desc: 'Get in touch for support, partnerships, or inquiries.', href: '/contact' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function AboutPageContent() {
  return (
    <div className="pt-20">
      <PageHero
        crumbs={[]}
        here="About"
        eyebrow="About BAWES"
        title={<>Who we are and <span className="text-gradient-accent">what we believe</span></>}
        lead={<>We are a small, spread-out team building a place online where being together feels real.</>}
        detail={[
          <>BAWES Universe is built by a distributed team of engineers, designers, and dreamers. We believe in open source, spatial intelligence, and the power of presence.</>,
        ]}
        scene="fire"
        actions={[{ label: 'The team', href: '/team' }, { label: 'Read the manifesto', href: '/manifesto' }]}
        source="page_about"
      />

      {/* Cards */}
      <Section className="relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <Link key={item.title} href={item.href} className="group">
                <motion.div
                  {...fadeUp(i * 0.08)}
                  className="bento-card h-full"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(167,139,250,0.12)' }}>
                    <span className="material-symbols-outlined text-xl text-accent-purple">{item.icon}</span>
                  </div>
                  <h3 className="font-headline-card text-headline-card text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
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
        title={<>Come and see it for yourself</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'Read the manifesto', href: '/manifesto' }, { label: 'Talk to us', href: '/contact' }]}
        source="page_about"
      />
    </div>
  )
}
