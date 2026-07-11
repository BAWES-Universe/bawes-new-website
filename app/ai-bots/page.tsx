'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const features = [
  { title: 'Bot Behaviors', icon: 'psychology', description: 'Define complex behavioral patterns for your AI bots.' },
  { title: 'Bot Memory', icon: 'memory', description: 'Persistent memory so bots remember past conversations and context.' },
  { title: 'Bot Streaming Chat', icon: 'message', description: 'Real-time streaming responses for natural conversational flow.' },
  { title: 'Bot Tool Calling', icon: 'handyman', description: 'Let bots invoke tools and APIs to perform actions on your behalf.' },
  { title: 'Bot Avatars', icon: 'face', description: 'Customize bot appearances with unique avatars and visual identities.' },
  { title: 'Bot Emotions', icon: 'favorite', description: 'Emotional states and mood-driven responses for lifelike interactions.' },
  { title: 'Bot Greetings', icon: 'waving_hand', description: 'Personalized welcome messages and greeting behaviors.' },
  { title: 'Bot Provider Config', icon: 'settings', description: 'Configure AI providers — OpenAI, Anthropic, local models, and more.' },
  { title: 'Recursive Bots', icon: 'device_hub', description: 'Bots that spawn and coordinate other bots for complex tasks.' },
  { title: 'Bot Editor', icon: 'edit', description: 'Visual editor to create, tweak, and manage your bot fleet.' },
]

const featureSlugs: Record<string, string> = {
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
}

export default function AiBots() {
  const heroRef = useRef(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
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
              <span className="material-symbols-outlined text-lg">smart_toy</span>
              AI Agents 01
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">AI Bots</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Intelligent agents that inhabit your universe. Create, configure, and deploy bots that interact, remember, and act.
            </p>

            {/* Stat bar */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: '10+ Bot Behaviors', value: '10+' },
                { label: '3 AI Providers', value: '3' },
                { label: '0 Redeploy Needed', value: '0' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-xl px-5 py-3 min-w-[140px] border border-purple-500/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Link key={feature.title} href={featureSlugs[feature.title]}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <motion.p
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Bring your world to life
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start Building Bots
            </Button>
            <Button href="/work" variant="ghost" size="lg" className="glass-card border border-white/10 hover:border-white/20">
              View Documentation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
