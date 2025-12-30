'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

export default function Manifesto() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="pt-20">
      {/* Hero */}
      <motion.section 
        ref={heroRef}
        className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
        style={{ opacity }}
      >
        {/* Dramatic background */}
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{ scale }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-bawes-gold/20 via-black to-black" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-bawes-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-bawes-orange/10 rounded-full blur-3xl" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="inline-block mb-8 p-4 bg-gradient-to-r from-bawes-gold/20 via-bawes-red/20 to-bawes-orange/20 rounded-2xl backdrop-blur-sm border border-white/10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="w-16 h-16 relative">
                <Image src="/images/bawes-logo.png" alt="BAWES" fill className="object-contain" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">The BAWES Universe</span>
              <br />
              <span className="bawes-gradient-text text-glow">Manifesto</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Main content */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_24px]" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-3xl md:text-5xl font-bold space-y-4">
              <p className="text-white">We are not building an app.</p>
              <p className="bawes-gradient-text text-glow">We are building a universe.</p>
            </div>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-white/70 text-center leading-relaxed mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A people-first environment designed to help ideas turn into action, faster, smarter, and with less friction.
          </motion.p>

          <motion.div 
            className="p-10 glass-card rounded-3xl border border-bawes-gold/30 mb-16 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-bawes-gold/10 via-bawes-red/10 to-bawes-orange/10 -z-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <p className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
              We don&apos;t just support execution.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-center bawes-gradient-text">
              We are execution.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Principles */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Core <span className="bawes-gradient-text">Principles</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Open by Default',
                description: 'Universes are interoperable and accessible. We build in the open, not behind walls.',
                color: 'bawes-gold'
              },
              {
                title: 'Spatial, Not Hierarchical',
                description: 'Presence and context shape experience. Navigation is orientation, not control.',
                color: 'bawes-red'
              },
              {
                title: 'Tool-Agnostic',
                description: "We don't lock you in. Connect what works. Build what you need.",
                color: 'bawes-orange'
              },
              {
                title: 'Execution Over Promise',
                description: 'Real work, real systems, real progress. We build, not just plan.',
                color: 'bawes-gold'
              }
            ].map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 glass-card rounded-xl border-l-4 border-${principle.color}`}
              >
                <h3 className={`text-xl font-bold mb-3 text-${principle.color}`}>{principle.title}</h3>
                <p className="text-white/60">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-bawes-gold/15 via-bawes-red/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="text-center">
          <Button href="/contact" size="lg">
            Join the conversation
          </Button>
        </div>
      </Section>
    </div>
  )
}
