'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'
import Hero from '@/components/Hero'

const FeatureCard = ({ emoji, title, description, color, delay = 0 }: {
  emoji: string
  title: string
  description: string
  color: string
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative p-8 rounded-2xl glass-card hover:border-${color}/40 transition-all duration-500 group overflow-hidden`}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <motion.div 
          className="text-5xl mb-6"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {emoji}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />

      {/* What is Universe? */}
      <Section id="universe" className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-bawes-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-bawes-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 p-3 bg-gradient-to-r from-bawes-gold/20 via-bawes-red/20 to-bawes-orange/20 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <div className="w-14 h-14 relative">
              <Image 
                src="/images/bawes-logo.png" 
                alt="BAWES" 
                fill 
                className="object-contain"
              />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            What is <span className="bawes-gradient-text">Universe</span>?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
            <p>
              Universe is a shared digital environment made of <span className="text-bawes-gold font-semibold">spaces</span>, not apps or pages.
            </p>
            <p>
              People move through rooms and worlds, see who's around, and work together naturally, whether they're collaborating, studying, building, shopping, or just hanging out.
            </p>
          </div>
          
          <div className="mt-12 p-8 glass-card rounded-2xl">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
              You don't switch tools.
            </p>
            <p className="text-2xl md:text-3xl font-semibold bawes-gradient-text">
              The space adapts to what you're doing.
            </p>
          </div>
        </div>
      </Section>

      {/* What people use it for */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What people use it for
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Universe adapts to different modes of activity without forcing context switches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            emoji="🤝"
            title="Work"
            description="Team spaces, focus rooms, spontaneous collaboration, real execution."
            color="bawes-gold"
            delay={0}
          />
          <FeatureCard
            emoji="📚"
            title="Learning"
            description="Personal study rooms, group learning, mentorship, digital campuses."
            color="bawes-red"
            delay={0.1}
          />
          <FeatureCard
            emoji="🛍️"
            title="Commerce"
            description="Shops, services, and marketplaces embedded into shared spaces, connected to real-world tools."
            color="bawes-orange"
            delay={0.2}
          />
          <FeatureCard
            emoji="🎮"
            title="Community"
            description="Hangouts, gaming groups, events, casual meetups."
            color="bawes-gold"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Shared markets & commerce */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-bawes-gold/10 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Shared markets & <span className="bawes-gradient-text">commerce</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-6 leading-relaxed">
            Universe supports shared market experiences where people discover products, services, and opportunities together, not in isolation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 glass-card rounded-xl text-left">
              <p className="text-lg text-white/80 mb-2 font-semibold">Commerce is tool-agnostic.</p>
              <p className="text-white/60">
                Shops and marketplaces can connect to whatever stack fits: Shopify, custom systems, booking tools, or existing infrastructure.
              </p>
            </div>
            <div className="p-6 glass-card rounded-xl text-left">
              <p className="text-lg text-white/80 mb-2 font-semibold">BAWES helps design and integrate</p>
              <p className="text-white/60">
                these experiences when needed. We don't just provide tools; we help you build.
              </p>
            </div>
          </div>
          
          <Button href="/market" variant="secondary">
            Learn about markets in Universe
          </Button>
        </div>
      </Section>

      {/* Get help when you need it */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 noise-overlay" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Get help when you need it
          </h2>
          
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            You can ask the Universe for help (guidance, people, or execution), and your request is routed to the right place.
          </p>
          
          <div className="space-y-4 mb-12">
            <motion.p 
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Real humans.
            </motion.p>
            <motion.p 
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real work.
            </motion.p>
            <motion.p 
              className="text-3xl font-bold bawes-gradient-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Real progress.
            </motion.p>
          </div>
          
          <div className="p-8 glass-card rounded-2xl border border-bawes-gold/20">
            <p className="text-lg text-white/70 mb-4">
              Universe doesn't promise answers to everything.
            </p>
            <p className="text-xl font-semibold text-white">
              It promises a <span className="bawes-gradient-text">path forward</span> for anything.
            </p>
          </div>
        </div>
      </Section>

      {/* Things we've built */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bawes-gold/30 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Things we've built
          </h2>
          <p className="text-xl text-white/70 mb-4">
            We don't just talk about systems; we build them.
          </p>
          <p className="text-lg text-white/50 mb-12">
            Selected projects and experiments demonstrating execution, infrastructure, and digital transformation.
          </p>
          <Button href="/work">
            View selected work
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </Section>

      {/* Open by default */}
      <Section className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Open by <span className="bawes-gradient-text">default</span>
          </h2>
          <p className="text-xl text-white/70 mb-12">
            BAWES operates in the open.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['Open-source projects', 'Public community', 'Transparent systems'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-card rounded-xl"
              >
                <p className="text-lg font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <Button href="https://discord.gg/bawes" variant="secondary">
            Join the community on Discord
          </Button>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-bawes-gold/10 via-bawes-red/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            You don't need to understand everything to start.
          </motion.h2>
          <motion.p 
            className="text-2xl text-white/70 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            You just need a place where things <span className="bawes-gradient-text font-semibold">move forward</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://universe.bawes.net"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group px-8 py-4 text-base bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white hover:shadow-lg hover:shadow-bawes-gold/30"
            >
              <span className="relative z-10">
                Enter the Universe
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-bawes-orange via-bawes-red to-bawes-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to us
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
