'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { border: string; bg: string; text: string }> = {
    'bawes-gold': {
      border: 'border-bawes-gold/30',
      bg: 'from-bawes-gold/20 to-bawes-gold/5',
      text: 'text-bawes-gold',
    },
    'bawes-red': {
      border: 'border-bawes-red/30',
      bg: 'from-bawes-red/20 to-bawes-red/5',
      text: 'text-bawes-red',
    },
    'bawes-orange': {
      border: 'border-bawes-orange/30',
      bg: 'from-bawes-orange/20 to-bawes-orange/5',
      text: 'text-bawes-orange',
    },
    'purple-600': {
      border: 'border-purple-600/30',
      bg: 'from-purple-600/20 to-purple-600/5',
      text: 'text-purple-600',
    },
    'green-500': {
      border: 'border-green-500/30',
      bg: 'from-green-500/20 to-green-500/5',
      text: 'text-green-500',
    },
    'blue-600': {
      border: 'border-blue-600/30',
      bg: 'from-blue-600/20 to-blue-600/5',
      text: 'text-blue-600',
    },
    'indigo-500': {
      border: 'border-indigo-500/30',
      bg: 'from-indigo-500/20 to-indigo-500/5',
      text: 'text-indigo-500',
    },
    'amber-500': {
      border: 'border-amber-500/30',
      bg: 'from-amber-500/20 to-amber-500/5',
      text: 'text-amber-500',
    },
    'teal-500': {
      border: 'border-teal-500/30',
      bg: 'from-teal-500/20 to-teal-500/5',
      text: 'text-teal-500',
    },
  }
  return colorMap[color] || colorMap['bawes-gold']
}

export default function Work() {
  const heroRef = useRef(null)
  const sectionRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div className="pt-20">
      {/* Hero */}
      <section 
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-bawes-gold/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-bawes-red/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6 p-3 bg-gradient-to-r from-bawes-gold/20 via-bawes-red/20 to-bawes-orange/20 rounded-2xl backdrop-blur-sm border border-white/10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="w-16 h-16 relative">
                <Image src="/images/bawes-logo.png" alt="BAWES" fill className="object-contain" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Work with</span>
              <br />
              <span className="bawes-gradient-text">Universe Components</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8">
              Discover and connect powerful components to enhance your Universe experience.
            </p>
            
            <motion.p 
              className="text-lg text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Each component is designed to work seamlessly within the Universe, helping you build, manage, and grow your digital environment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Universe Components */}
      <Section ref={sectionRef} className="relative overflow-hidden bg-[#050505]">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          {/* 3D rotating diamond */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              className="w-[500px] h-[500px] opacity-10"
              style={{ rotateY }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="url(#componentGradient)" strokeWidth="0.5" />
                <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="url(#componentGradient)" strokeWidth="0.5" transform="rotate(45 50 50)" />
                <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="url(#componentGradient)" strokeWidth="0.5" transform="rotate(90 50 50)" />
                <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="url(#componentGradient)" strokeWidth="0.5" transform="rotate(135 50 50)" />
                <defs>
                  <linearGradient id="componentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9F7E2F" />
                    <stop offset="50%" stopColor="#F03E2F" />
                    <stop offset="100%" stopColor="#F7941D" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Available <span className="bawes-gradient-text">Components</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Connect these components to build your own universe. Each one integrates seamlessly with the others.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                emoji: '🧠',
                title: 'BAWES Intelligence',
                description: 'Type a goal. Get a plan. Let AI turn your thoughts into proposals and action steps.',
                website: 'https://intelligence.bawes.net',
                discord: null,
                color: 'bawes-gold',
                isLive: true,
              },
              {
                emoji: '🎓',
                title: 'StudentHub',
                description: 'Hire students like cloud resources—instantly, with full tracking and support.',
                website: 'https://studenthub.co',
                discord: 'https://discord.gg/CXceJWnwNT',
                color: 'bawes-red',
                isLive: true,
              },
              {
                emoji: '🛒',
                title: 'Plugn',
                description: 'Launch your store in minutes. Connect inventory, payments, and fulfillment—no devs needed.',
                website: 'https://plugn.io',
                discord: 'https://discord.gg/amjZaKAZ8X',
                color: 'bawes-orange',
                isLive: true,
              },
              {
                emoji: '易',
                title: 'Thought Processor',
                description: 'The Native OS for Thinking, Processing, and Action. Capture, organize, prioritize, and delegate your ideas.',
                website: 'https://thought.bawes.net',
                discord: null,
                color: 'purple-600',
                isLive: false,
              },
              {
                emoji: '👥',
                title: 'Tribe',
                description: 'Find Your Tribe. Build Your Network. Tribe uses AI to connect you with the perfect student clubs based on your interests, goals, and schedule.',
                website: 'https://tribe.bawes.net',
                discord: null,
                color: 'green-500',
                isLive: false,
              },
              {
                emoji: '🔄',
                title: 'Tamr',
                description: 'On-demand recruitment that matches the right person to the right place at the right time.',
                website: null,
                discord: null,
                color: 'blue-600',
                isLive: false,
              },
              {
                emoji: '💼',
                title: 'Universe Wallet',
                description: 'Manage your digital assets and connect with the People Directory.',
                website: null,
                discord: null,
                color: 'indigo-500',
                isLive: false,
              },
              {
                emoji: '💰',
                title: 'Crypto Ecosystem',
                description: 'Payment infrastructure for seamless transactions within the Universe.',
                website: null,
                discord: null,
                color: 'amber-500',
                isLive: false,
              },
              {
                emoji: '🧪',
                title: 'BAWES Sandbox',
                description: 'Experiment and build in a safe, controlled environment.',
                website: null,
                discord: null,
                color: 'teal-500',
                isLive: false,
              },
            ].map((component, index) => {
              const colors = getColorClasses(component.color)
              return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative h-full rounded-2xl p-8 glass-card border ${colors.border} overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-opacity-50`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} -z-10`} />

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden -z-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${colors.text} opacity-30`}
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                      }}
                      animate={{
                        x: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
                        y: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
                      }}
                      transition={{
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{component.emoji}</span>
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                        {component.isLive ? (
                          <span className="text-white/70 text-xs font-medium">v1</span>
                        ) : (
                          <svg className="h-4 w-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>{component.title}</h3>
                    <p className="text-white/70 text-base mb-6">{component.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto space-y-3">
                    {component.website ? (
                      <motion.a
                        href={component.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-between px-4 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white/90 rounded-lg transition-colors group"
                      >
                        <span>Visit Website</span>
                        <svg className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    ) : (
                      <div className="w-full flex items-center justify-between px-4 py-3 border border-white/10 bg-white/5 text-white/50 rounded-lg opacity-60 cursor-not-allowed">
                        <span>Coming Soon</span>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                    {component.discord && (
                      <motion.a
                        href={component.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-between px-4 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white/90 rounded-lg transition-colors group"
                      >
                        <span>Join Discord</span>
                        <svg className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 ${colors.text}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </Section>

      {/* How to Use */}
      <Section className="relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How to <span className="bawes-gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-white/70">
              Components work together seamlessly in your Universe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Components',
                description: 'Select the components you need for your universe. Mix and match to build exactly what you need.',
              },
              {
                step: '2',
                title: 'Connect & Configure',
                description: 'Each component integrates automatically. Configure settings to match your workflow.',
              },
              {
                step: '3',
                title: 'Start Building',
                description: 'Begin using your connected components. They work together to enhance your Universe experience.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-card rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-bawes-gold to-bawes-orange flex items-center justify-center text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-bawes-red/15 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="text-center">
          <motion.p 
            className="text-xl text-white/60 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to build your universe?
          </motion.p>
          <Button href="/contact" size="lg">
            Get Started
          </Button>
        </div>
      </Section>
    </div>
  )
}
