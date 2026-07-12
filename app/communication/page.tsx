'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const features = [
  { title: 'Proximity Chat', icon: 'spatial_audio', description: 'Voice chat that respects distance and presence in the spatial world.' },
  { title: 'Text Chat', icon: 'chat', description: 'Real-time text messaging between users and groups within your universe.' },
  { title: 'Matrix Chat', icon: 'hub', description: 'Federated chat via Matrix protocol for cross-universe conversations.' },
  { title: 'Megaphone', icon: 'campaign', description: 'Broadcast announcements to everyone in your universe at once.' },
  { title: 'Meeting Rooms', icon: 'video_chat', description: 'Dedicated video conferencing rooms with spatial audio support.' },
  { title: 'Screen Sharing', icon: 'present_to_all', description: 'Share your screen with others in real-time during meetings.' },
  { title: 'Broadcasting & Events', icon: 'podcasts', description: 'Stream live events and broadcasts to your entire community.' },
  { title: 'Play Audio', icon: 'music_note', description: 'Play music, sounds, and audio files in spatial environments.' },
  { title: 'Follow', icon: 'group_work', description: 'Follow other users to navigate the universe together.' },
  { title: 'Lock & Moderate', icon: 'verified_user', description: 'Moderate conversations, lock channels, and manage permissions.' },
]

const featureSlugs: Record<string, string> = {
  'Proximity Chat': '/features/proximity-chat',
  'Text Chat': '/features/text-chat',
  'Matrix Chat': '/features/matrix-chat',
  'Megaphone': '/features/megaphone',
  'Meeting Rooms': '/features/meeting-rooms',
  'Screen Sharing': '/features/screen-sharing',
  'Broadcasting & Events': '/features/broadcasting',
  'Play Audio': '/features/play-audio',
  'Follow': '/features/follow',
  'Lock & Moderate': '/features/lock-discuss',
}

export default function Communication() {
  return (
    <div className="pt-20">
      {/* Hero */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Communication</span>
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
              <span className="material-symbols-outlined text-lg">cell_tower</span>
              Connectivity Node 04
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
              Communication
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Connect, converse, and collaborate in real-time across your universe.
              From proximity voice to federated matrix chat, stay in touch with everyone.
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to connect?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              Get Started
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