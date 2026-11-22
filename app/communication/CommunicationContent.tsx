'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
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

export default function CommunicationContent() {
  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }]}
        here="Communication"
        title={<>Communication that <span className="text-gradient-accent">feels natural</span></>}
        lead={<>Walk up and talk, type a message, share your screen, or speak to the whole room.</>}
        detail={[
          <>Connect, converse, and collaborate in real-time across your universe. From proximity voice to federated matrix chat, stay in touch with everyone.</>,
        ]}
        scene="talk"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_communication"
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
        title={<>Ready to connect?</>}
        links={[{ label: 'Get started', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_communication"
      />
    </div>
  )
}