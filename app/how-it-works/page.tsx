'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const ConceptCard = ({ title, description, items, color, icon }: {
  title: string
  description: string
  items?: string[]
  color: string
  icon?: React.ReactNode
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8 relative overflow-hidden group"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`} />
      
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/70 mb-4 leading-relaxed">{description}</p>
      
      {items && (
        <ul className="space-y-2">
          {items.map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-white/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-bawes-gold to-bawes-orange" />
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default function HowItWorks() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div className="pt-20">
      {/* Hero */}
      <motion.section 
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bawes-gold/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bawes-orange/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 p-3 bg-gradient-to-r from-bawes-gold/20 via-bawes-red/20 to-bawes-orange/20 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 relative">
                <Image src="/images/bawes-logo.png" alt="BAWES" fill className="object-contain" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bawes-gradient-text">Universe</span>
              <span className="text-white">, simply explained</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
              Universe is composed of spaces people can move through, not interfaces people click through.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              {['Presence matters.', 'Context matters.', 'Where you are shapes what you can do.'].map((text, i) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-4 py-2 glass rounded-full text-white/80 font-medium"
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Orbit */}
      <Section className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span 
              className="text-6xl mb-6 block"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              🌐
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bawes-gradient-text">Orbit</span>
              <span className="text-white/50 font-light"> (Navigation)</span>
            </h2>
            <p className="text-xl text-white/70 mb-6">
              Orbit is the navigation layer of the Universe.
            </p>
            <ul className="space-y-3 mb-8">
              {['discover universes, worlds, and rooms', 'understand what exists', 'jump directly to where activity is happening'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-bawes-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8 rounded-2xl border border-bawes-gold/20">
            <p className="text-lg text-white/80 mb-4">
              <span className="text-bawes-gold font-semibold">Orbit shows you where you are</span> in the universe — your location and position.
            </p>
            <p className="text-white/60 mb-4">Use it to discover and navigate what's around you.</p>
            <p className="text-white/70 italic">Think of Orbit as orientation, not hierarchy.</p>
          </div>
        </div>
      </Section>

      {/* Hierarchy: Universes → Worlds → Rooms */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="bawes-gradient-text">Structure</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ConceptCard
            title="Universes"
            description="A Universe is a first-class environment. It can represent:"
            items={['an organization', 'a community', 'a project', 'a brand', 'a personal ecosystem']}
            color="from-bawes-gold to-bawes-gold/50"
          />
          <ConceptCard
            title="Worlds"
            description="A World is a functional domain inside a Universe. Worlds organize intent, not people."
            items={['Work world', 'Learning world', 'Market world', 'Social world', 'Event world']}
            color="from-bawes-red to-bawes-red/50"
          />
          <ConceptCard
            title="Rooms"
            description="Rooms are where things actually happen. They're used for:"
            items={['collaboration', 'study', 'events', 'shops', 'hangouts', 'gameplay']}
            color="from-bawes-orange to-bawes-orange/50"
          />
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-white/60">
            Rooms are <span className="text-bawes-orange font-semibold">spatial</span>, <span className="text-bawes-orange font-semibold">contextual</span>, and <span className="text-bawes-orange font-semibold">alive</span>.
          </p>
        </motion.div>
      </Section>

      {/* Maps & Templates */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Maps & <span className="bawes-gradient-text">room templates</span>
          </h2>
          
          <div className="glass-card p-8 rounded-2xl mb-8">
            <p className="text-xl text-white/70 mb-4">
              Rooms are built using maps.
            </p>
            <p className="text-white/60 leading-relaxed">
              Universe provides room templates — proven layouts designed for specific use cases — so people can start fast and build with confidence.
            </p>
          </div>
          
          <div className="p-6 bg-bawes-gold/10 border border-bawes-gold/30 rounded-xl">
            <p className="text-white/80">
              Templates are <span className="text-bawes-gold font-semibold">optional</span>. Advanced users can customize or create their own.
            </p>
          </div>
        </div>
      </Section>

      {/* Membership & Access */}
      <Section className="relative">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Membership & <span className="bawes-gradient-text">access</span>
            </h2>
            <p className="text-xl text-white/70 mb-6">
              All spaces are open to explore.
            </p>
            <p className="text-white/60 mb-6 leading-relaxed">
              Membership exists at the world level and grants <span className="text-white font-semibold">capabilities</span>, not exclusivity.
            </p>
            
            <div className="space-y-4">
              <p className="text-white/60">Members may:</p>
              <ul className="space-y-2 ml-4">
                {['edit rooms', 'define areas', 'manage layouts', 'access restricted zones'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-bawes-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Areas & permissions</h3>
            <p className="text-xl text-white/70 mb-4">
              Access control is <span className="text-bawes-gold font-semibold">spatial</span>, not global.
            </p>
            <p className="text-white/60 mb-4">
              Using the Area Editor, members define zones inside rooms and control:
            </p>
            <ul className="space-y-2 mb-6">
              {['who can enter', 'who can interact', 'who can edit'].map((item, i) => (
                <li key={i} className="text-white/70">• {item}</li>
              ))}
            </ul>
            <div className="p-4 bg-bawes-gold/10 rounded-lg">
              <p className="text-white/80">
                This allows <span className="text-bawes-gold font-semibold">open spaces with protected cores</span> — without private worlds.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Editors */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bawes-gradient-text">Editors</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl border-t-4 border-bawes-gold"
          >
            <h3 className="text-2xl font-bold mb-4 text-bawes-gold">Map Editor</h3>
            <ul className="space-y-3 text-white/70">
              <li>• Decorate rooms</li>
              <li>• Customize layouts</li>
              <li>• Shape the environment visually</li>
            </ul>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl border-t-4 border-bawes-red"
          >
            <h3 className="text-2xl font-bold mb-4 text-bawes-red">Area Editor</h3>
            <ul className="space-y-3 text-white/70">
              <li>• Define zones</li>
              <li>• Assign permissions</li>
              <li>• Control access and editing</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.p 
          className="text-2xl text-center mt-12 font-semibold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Creativity with <span className="bawes-gradient-text">guardrails</span>.
        </motion.p>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-bawes-gold/20 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="text-center">
          <Button href="/contact" size="lg">
            Get Started
          </Button>
        </div>
      </Section>
    </div>
  )
}
