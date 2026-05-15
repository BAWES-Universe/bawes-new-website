'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const tiers = [
  {
    label: 'Public',
    description: 'Available to every visitor on the platform, regardless of world or membership.',
    example: 'Default character set: basic human forms, casual styles.',
    icon: '🌍',
    color: 'bawes-gold',
  },
  {
    label: 'Universe-scoped',
    description: 'Available only inside a specific universe. Invisible to visitors in other universes.',
    example: "A brand's collection: only wearable inside the brand's own world ecosystem.",
    icon: '🏛️',
    color: 'bawes-orange',
  },
  {
    label: 'World-scoped',
    description: 'Available only inside a single world. Perfect for venue-specific branding.',
    example: 'The Museum Staff set: only visible when inside the museum world.',
    icon: '🏠',
    color: 'bawes-red',
  },
  {
    label: 'Membership-gated',
    description: 'Unlocked by holding a specific membership tag, subscription tier, or email domain.',
    example: 'The VIP Collection: accessible only to users tagged as premium subscribers.',
    icon: '🔑',
    color: 'bawes-gold',
  },
  {
    label: 'User-granted',
    description: 'Directly assigned to a specific user by an admin. One-off exclusive ownership.',
    example: 'A custom avatar created uniquely for a brand ambassador or celebrity collaborator.',
    icon: '⭐',
    color: 'bawes-orange',
  },
  {
    label: 'NPC / Bot-only',
    description: 'Hidden from all players. Assigned exclusively to AI bots or staff characters.',
    example: 'Leo the Lion: a museum mascot bot that visitors can never accidentally select.',
    icon: '🤖',
    color: 'bawes-red',
  },
]

const governanceFeatures = [
  {
    title: 'Safe Archive Flow',
    description:
      'Before you archive any avatar, the system shows you every player and bot currently wearing it. No silent breaking changes, no confused visitors suddenly appearing as default characters mid-session.',
  },
  {
    title: 'Full Audit Log',
    description:
      'Every action — create, publish, archive, scope change, membership grant, user revoke — is logged with timestamp and actor. Full governance trail for compliance and debugging.',
  },
  {
    title: 'Versioned Collections',
    description:
      'Avatar sets are managed as versioned collections. Publish a new season without touching the live set. Roll back if needed.',
  },
  {
    title: 'Effective Access Preview',
    description:
      'See exactly which avatar sets any specific user can access and why — without asking them or digging through config files.',
  },
]

const TierCard = ({ tier, index }: { tier: typeof tiers[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07 }}
      className="glass-card rounded-2xl p-7 group hover:border-white/25 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{tier.icon}</span>
        <span className="text-white font-bold text-lg">{tier.label}</span>
      </div>
      <p className="text-white/65 text-sm leading-relaxed mb-4">{tier.description}</p>
      <div className="p-4 rounded-xl bg-white/4 border border-white/8">
        <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Example</p>
        <p className="text-white/60 text-sm italic">{tier.example}</p>
      </div>
    </motion.div>
  )
}

export default function AvatarPlatformPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[65vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bawes-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-bawes-gold/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-15" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-bawes-orange/30 text-bawes-orange text-sm font-medium mb-6">
              Avatar &amp; Identity Platform
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Identity is <span className="bawes-gradient-text">infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Who someone appears as in your world shapes how they are perceived, what they can access, and what brand story they carry. Universe makes identity manageable at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem statement */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bawes-orange via-bawes-gold to-bawes-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The problem with open avatar pickers
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">🤖</div>
                <p className="text-white/60 text-sm leading-relaxed">Visitors accidentally select your AI bot&apos;s avatar, impersonating your character</p>
              </div>
              <div>
                <div className="text-4xl mb-3">👔</div>
                <p className="text-white/60 text-sm leading-relaxed">Staff cannot distinguish themselves from visitors — brand identity breaks down</p>
              </div>
              <div>
                <div className="text-4xl mb-3">🔓</div>
                <p className="text-white/60 text-sm leading-relaxed">Exclusive premium looks are available to everyone, destroying the value of VIP tiers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Access tiers */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Six ways to scope avatar access
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              Every set has an access level. Combine multiple scopes on a single set for nuanced rules.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <TierCard key={tier.label} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* Commerce angle */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Avatar sets as a<br />
                <span className="bawes-gradient-text">revenue channel</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Premium avatar collections are a native monetisation layer. Sell seasonal drops, membership-unlocked fashion sets, or exclusive collaborator looks — all governed by the same platform rules.
              </p>
              <ul className="space-y-3">
                {[
                  'Subscription-gated fashion sets (recurring B2C)',
                  'Time-limited seasonal drops (startsAt / endsAt)',
                  'One-off celebrity / brand ambassador grants',
                  'World-entry unlocks: pay to access + wear the exclusive set',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/65 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-bawes-orange to-bawes-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8"
            >
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Example drop</p>
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-white font-bold text-xl mb-2">Premium Fashion Vol. 3</h3>
              <p className="text-white/50 text-sm mb-6">Universe-scoped · Membership: premium_subscriber · Active: Dec 1 – Jan 31</p>
              <div className="flex flex-wrap gap-2">
                {['12 avatar variants', 'Limited 8 weeks', 'VIP early access', 'Exclusive colorways'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full glass border border-white/10 text-white/60 text-xs">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Governance */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-15" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Governance built in</h2>
            <p className="text-white/55 text-lg">Manage hundreds of avatar sets without chaos.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {governanceFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-7"
              >
                <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[45vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-bawes-orange/10 via-transparent to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to manage identity at scale?
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button href="/features#avatar-platform" size="lg" variant="secondary">
              See all avatar features
            </Button>
            <Button href="/contact" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
