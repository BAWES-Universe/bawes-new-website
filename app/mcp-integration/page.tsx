'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const details = [
  {
    title: 'MCP Protocol Support',
    desc: 'BAWES integrates with the Model Context Protocol, allowing AI agents to interact with your spatial worlds through a standardized API.',
  },
  {
    title: 'Agent-Driven Automation',
    desc: 'Let AI agents manage maps, bots, users, and events programmatically. Automate moderation, spawn bots, and orchestrate complex workflows.',
  },
  {
    title: 'Extensible Tool System',
    desc: 'Extend BAWES with custom MCP servers and tools. Add your own capabilities that AI agents can discover and use within your universe.',
  },
  {
    title: 'Developer-Friendly API',
    desc: 'Well-documented API endpoints and TypeScript types make integration straightforward. Build custom MCP clients and servers with minimal friction.',
  },
]

export default function McpIntegrationPage() {
  const heroRef = useRef(null)

  return (
    <div className="pt-20">
      <section
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="material-symbols-outlined text-lg">cable</span>
              Integration
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">MCP Integration</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Connect AI agents to your BAWES universe through the Model Context Protocol. Automate, extend, and supercharge your spatial worlds with AI-driven tooling.
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
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-purple-600/15 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="text-center">
          <motion.p
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            AI meets spatial collaboration
          </motion.p>
          <Button href="/build" size="lg">
            Back to Build Tools
          </Button>
        </div>
      </Section>
    </div>
  )
}
