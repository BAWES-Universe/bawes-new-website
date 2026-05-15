'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const botCapabilities = [
  {
    title: 'Persistent Memory',
    description:
      'Each bot maintains a memory store per user. A visitor who asked about the red exhibit last week is recognised this week. Context builds over time rather than resetting with every session.',
    icon: '🧠',
  },
  {
    title: 'Emotion System',
    description:
      'Bots express moods through in-world animations: curious, happy, thinking, surprised, sad. Emotions are triggered by conversation context or scripted sequences, making interactions feel alive rather than transactional.',
    icon: '😊',
  },
  {
    title: 'Proximity Triggers',
    description:
      'Bots detect when a player enters their zone and react: greeting, offering a tour, starting an onboarding sequence, or flagging a transition to a human agent. No button press required.',
    icon: '📡',
  },
  {
    title: 'Multi-Provider AI',
    description:
      'Every bot can be independently configured to use OpenAI, Anthropic, Deepseek, or a self-hosted LMStudio model. Switch providers without redeploying. Cost-optimise different bots for different tasks.',
    icon: '🔌',
  },
  {
    title: 'Tool Execution',
    description:
      'Bots are not just conversational. They can call APIs, query databases, submit forms, check live inventory, send notifications, and book appointments — anything you connect via the tool configuration layer.',
    icon: '⚙️',
  },
  {
    title: 'Custom NPC Avatars',
    description:
      'Every bot gets its own avatar: a lion for the natural history wing, a chef for the food hall, a branded guide for the flagship store. NPC avatar sets are hidden from the player picker so visitors cannot accidentally become them.',
    icon: '🎭',
  },
  {
    title: 'Conversation Handoff',
    description:
      'When a bot reaches the limit of what it can resolve, it can flag the session for human takeover, send a notification to staff, or escalate to a live operator room — preserving conversation context throughout.',
    icon: '🤝',
  },
  {
    title: 'Scripted Sequences',
    description:
      'Beyond conversation, bots can execute scripted sequences: move to a position, wait, speak, trigger an animation, open a door, play a sound, start a countdown. Useful for tours, onboarding flows, and narrative experiences.',
    icon: '📋',
  },
]

const exampleBots = [
  {
    name: 'Leo the Museum Guide',
    world: 'Natural History Museum',
    avatar: '🦁',
    behaviour:
      'Greets visitors at the entrance hall, remembers which exhibits they explored last time, and offers a personalised route based on their interests. Can answer questions about any artefact in the collection.',
    provider: 'OpenAI GPT-4o',
    tools: ['Exhibit database lookup', 'Visitor history', 'Room navigation hints'],
  },
  {
    name: 'Campus AI Tutor',
    world: 'University Campus',
    avatar: '📚',
    behaviour:
      "Stationed in the library world. Students approach with study questions between lectures. The bot remembers each student's course, past questions, and learning pace — adapting explanations accordingly.",
    provider: 'Anthropic Claude',
    tools: ['Student profile lookup', 'Course material search', 'Assignment deadline retrieval'],
  },
  {
    name: 'Aria the Shop Assistant',
    world: 'Flagship Store',
    avatar: '🛍️',
    behaviour:
      'Walks the shop floor, approaches browsing visitors, answers product questions, checks live inventory, and facilitates checkout without the visitor leaving the space.',
    provider: 'Deepseek (cost-optimised)',
    tools: ['Live inventory API', 'Shopify order creation', 'Size/availability lookup'],
  },
  {
    name: 'Onboarding Bot',
    world: 'Corporate Office',
    avatar: '🏢',
    behaviour:
      'Triggers automatically when a new employee enters the office world for the first time. Walks them through a spatial tour, introduces key rooms and people, and answers HR questions.',
    provider: 'LMStudio (self-hosted)',
    tools: ['HR policy docs search', 'IT ticket submission', 'Directory lookup'],
  },
]

// Extracted as a proper component so hooks are called at component level, not inside .map()
function CapabilityCard({ cap, index }: { cap: typeof botCapabilities[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      key={cap.title}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05 }}
      className="glass-card rounded-2xl p-6 hover:border-bawes-red/30 transition-colors group"
    >
      <div className="text-3xl mb-4">{cap.icon}</div>
      <h3 className="text-white font-bold mb-3 text-lg group-hover:text-bawes-red transition-colors">
        {cap.title}
      </h3>
      <p className="text-white/55 text-sm leading-relaxed">{cap.description}</p>
    </motion.div>
  )
}

export default function AIBotsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-bawes-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-bawes-gold/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-bawes-red/40 text-bawes-red text-sm font-medium mb-6">
              AI Companions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bots that <span className="bawes-gradient-text">live</span> in your world
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Not chatbots in a sidebar. Characters that walk, react, remember, and act — spatially embedded inside every world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Button href="https://universe.bawes.net" size="lg">
              See bots in action
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Configure your first bot
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities grid */}
      <Section className="relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What bots can do
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              Eight capabilities, all configurable from the Orbit admin panel — no code deployment needed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {botCapabilities.map((cap, i) => (
              <CapabilityCard key={cap.title} cap={cap} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* Example bots */}
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
              Bots in the wild
            </h2>
            <p className="text-white/55 text-lg">
              Real configurations across four use cases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {exampleBots.map((bot, i) => (
              <motion.div
                key={bot.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bawes-red via-bawes-orange to-bawes-gold" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{bot.avatar}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{bot.name}</h3>
                    <p className="text-white/40 text-sm">{bot.world}</p>
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-6">{bot.behaviour}</p>
                <div className="border-t border-white/10 pt-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white/30 text-xs uppercase tracking-widest font-semibold">AI Provider</span>
                    <span className="text-bawes-gold text-sm font-medium">{bot.provider}</span>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {bot.tools.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full glass border border-white/10 text-white/60 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Multi-provider callout */}
      <Section className="relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your AI stack. Your choice.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Universe does not lock you into a single AI provider. Assign different models to different bots based on cost, capability, and data sovereignty requirements. Switch at any time from the admin panel.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['OpenAI GPT-4o', 'Anthropic Claude', 'Deepseek', 'LMStudio (self-hosted)', 'Any OpenAI-compatible API'].map((p) => (
                <span key={p} className="px-4 py-2 glass rounded-full border border-white/15 text-white/70 text-sm">
                  {p}
                </span>
              ))}
            </div>
            <Button href="/contact" size="lg">
              Configure your AI layer
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
