'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'

const items = [
  { title: 'The Team', icon: 'groups', desc: 'Meet the people building the BAWES universe.', href: '/team' },
  { title: 'Manifesto', icon: 'auto_awesome', desc: 'Our philosophy, vision, and the future we are building.', href: '/manifesto' },
  { title: 'The Empty Seat', icon: 'event_seat', desc: 'A thought experiment on presence and absence in virtual spaces.', href: '/empty-seat' },
  { title: 'Legal', icon: 'gavel', desc: 'Terms of service, privacy policy, and legal framework.', href: '/legal' },
  { title: 'Contact', icon: 'mail', desc: 'Get in touch for support, partnerships, or inquiries.', href: '/contact' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[45vh] flex items-center justify-center relative overflow-hidden">
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
              About BAWES
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
              Who We Are &{' '}
              <span className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}>
                What We Believe.
              </span>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              BAWES Universe is built by a distributed team of engineers, designers, and dreamers. We believe in open source, spatial intelligence, and the power of presence.
            </p>
          </motion.div>
        </div>
      </section>

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
    </div>
  )
}
