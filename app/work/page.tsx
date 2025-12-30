'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

export default function Work() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section 
        ref={heroRef}
        className="min-h-[60vh] flex items-center justify-center relative overflow-hidden"
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
            <motion.span 
              className="text-6xl mb-6 block"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bawes-gradient-text">Selected</span>
              <span className="text-white"> work</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Projects, systems, and experiments built by BAWES.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <Section className="relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Each entry includes:</h2>
            
            <div className="space-y-4 mb-12">
              {[
                'a clear description',
                'current status',
                'a case study',
                'open-source code (when available)'
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-lg text-white/70"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-bawes-gold to-bawes-orange" />
                  {item}
                </motion.div>
              ))}
            </div>
            
            <div className="p-8 glass-card rounded-2xl border border-bawes-gold/20">
              <p className="text-xl text-white/80">
                These are <span className="text-bawes-gold font-semibold">proofs of execution</span> — not bundled products.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Case studies */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bawes-gradient-text">Case studies</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-8">
            Each case study answers:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { q: 'What problem existed?', color: 'bawes-gold' },
              { q: 'What was built?', color: 'bawes-red' },
              { q: 'Why it mattered?', color: 'bawes-orange' },
              { q: 'What worked / didn\'t?', color: 'bawes-gold' }
            ].map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-card rounded-xl"
              >
                <p className="text-lg text-white font-semibold">{item.q}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Current status */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Current status</h2>
          <p className="text-lg text-white/60 mb-8">
            Projects are updated with their current state — active, archived, or evolving.
          </p>
        </div>
      </Section>

      {/* Projects placeholder */}
      <Section className="relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="p-16 glass-card rounded-2xl text-center border border-white/10"
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🚧
            </motion.div>
            <p className="text-2xl text-white/80 mb-4">
              Selected projects coming soon
            </p>
            <p className="text-white/50">
              Check back for case studies and open-source code.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-bawes-red/15 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="text-center">
          <Button href="/contact" size="lg">
            Talk about a project
          </Button>
        </div>
      </Section>
    </div>
  )
}
