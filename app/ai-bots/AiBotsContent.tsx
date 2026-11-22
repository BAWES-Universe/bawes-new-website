'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'

const features = [
  { title: 'Brick', icon: 'smart_toy', description: 'Your own AI companion. Everyone gets one, and it is yours from day one.' },
  { title: 'Apps', icon: 'apps', description: 'Connect email, calendar, GitHub and 1,700+ more. You choose what runs right away and what asks first.' },
  { title: 'Artifacts', icon: 'auto_awesome', description: 'Ask for a page, a mini app, a document or a drawing, and keep what it makes.' },
  { title: 'Community', icon: 'public', description: 'Make an artifact public, feature your best, and find what other people made.' },
  { title: 'Brick Templates', icon: 'content_copy', description: 'Start a new Brick from one someone shared, or share yours.' },
  { title: 'Goals and Tasks', icon: 'flag', description: 'Give your Brick a goal, a schedule or a reminder. It keeps at it while you are away.' },
  { title: 'A Computer for Your Brick', icon: 'computer', description: 'For the jobs no App can do. Watch it work, and take over when you want.' },
  { title: 'Bot Behaviors', icon: 'psychology', description: 'Bots that stay put, wander, walk a route, come over and show the way.' },
  { title: 'Bot Memory', icon: 'memory', description: 'Persistent memory so bots remember past conversations and context.' },
  { title: 'Bot Streaming Chat', icon: 'message', description: 'Real-time streaming responses for natural conversational flow.' },
  { title: 'Bot Tool Calling', icon: 'handyman', description: 'Let bots invoke tools and APIs to perform actions on your behalf.' },
  { title: 'Bot Avatars', icon: 'face', description: 'Customize bot appearances with unique avatars and visual identities.' },
  { title: 'Bot Emotions', icon: 'favorite', description: 'Feelings a bot builds toward each person, from how their chats go.' },
  { title: 'Bot Greetings', icon: 'waving_hand', description: 'A hello in the bot’s own words when someone comes close.' },
  { title: 'Bot Provider Config', icon: 'settings', description: 'Configure AI providers — OpenAI, Anthropic, local models, and more.' },
  { title: 'Recursive Bots', icon: 'device_hub', description: 'Ask your Brick for a helper and it makes one. Or run a team of bots in one room, each with its own model, memory and tools.' },
  { title: 'Bot Editor', icon: 'edit', description: 'Visual editor to create, tweak, and manage your bot fleet.' },
  { title: 'Bot File Parsing', icon: 'description', description: 'Bots analyze PDF, Word, Excel, and web pages.' },
  { title: 'Bot Media Sending', icon: 'image', description: 'Auto-send tool-generated images and video to users.' },
  { title: 'Bot Gallery', icon: 'photo_library', description: 'Multi-image gallery messages with lightbox navigation.' },
  { title: 'Bot Pending Media', icon: 'schedule', description: 'Queue media for delivery when users return.' },
]

const featureSlugs: Record<string, string> = {
  'Brick': '/features/brick',
  'Apps': '/features/apps',
  'Artifacts': '/features/artifacts',
  'Community': '/features/artifact-community',
  'Brick Templates': '/features/brick-templates',
  'Goals and Tasks': '/features/goals-and-tasks',
  'A Computer for Your Brick': '/features/brick-computer',
  'Bot Avatars': '/features/bot-avatars',
  'Bot Greetings': '/features/bot-greetings',
  'Bot Editor': '/features/bot-editor',
  'Bot Emotions': '/features/bot-emotions',
  'Bot Memory': '/features/bot-memory',
  'Bot Behaviors': '/features/bot-behaviors',
  'Bot Tool Calling': '/features/bot-tools',
  'Bot Provider Config': '/features/bot-provider-config',
  'Bot Streaming Chat': '/features/bot-streaming',
  'Recursive Bots': '/features/recursive-bots',
  'Bot File Parsing': '/features/bot-file-parsing',
  'Bot Media Sending': '/features/bot-media-sending',
  'Bot Gallery': '/features/bot-gallery',
  'Bot Pending Media': '/features/bot-pending-media',
}

export default function AiBotsContent() {
  return (
    <div className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }]}
        here="AI Bots"
        title={<>AI bots that <span className="text-gradient-accent">live in your world</span></>}
        lead={<>Bots are AI helpers with a body and a place in your space. They greet people, answer questions, remember, and get things done.</>}
        detail={[
          <>Intelligent agents that inhabit your universe. Create, configure, and deploy bots that interact, remember, and act.</>,
        ]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_ai_bots"
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
        title={<>Bring your world to life</>}
        links={[{ label: 'Start building bots', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_ai_bots"
      />
    </div>
  )
}