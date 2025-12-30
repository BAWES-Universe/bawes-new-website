'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

export default function EmptySeat() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        {/* Animated throne visualization */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(159,126,47,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-7xl mb-8"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              🪑
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">The</span>
              <br />
              <span className="bawes-gradient-text text-glow">Empty Seat</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <Section className="relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-2xl md:text-4xl font-bold space-y-4 mb-12">
              <p className="text-white">No one owns the throne.</p>
              <p className="text-white">No one rules forever.</p>
              <p className="bawes-gradient-text">Power is borrowed, not held.</p>
            </div>
          </motion.div>

          <motion.div 
            className="p-10 glass-card rounded-3xl border border-bawes-gold/30 mb-16 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-bawes-gold/10 via-bawes-red/10 to-bawes-orange/10 -z-10"
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              The Empty Seat is a structural decision that protects continuity, creativity, and execution without ego.
            </p>
            <p className="text-2xl font-bold text-center text-white">
              Leadership is functional — <span className="bawes-gradient-text">not symbolic</span>.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Visual representation */}
      <Section ref={sectionRef} className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                In traditional organizations, leadership positions become permanent fixtures. The person in the seat becomes the seat itself, and the structure ossifies around them.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The Empty Seat principle means that leadership roles are temporary, contextual, and transferable. The seat exists, but no one person owns it permanently.
              </p>
              <p className="text-white/60 mb-4">This creates space for:</p>
              <ul className="space-y-2 text-white/70">
                {[
                  'Natural transitions as projects evolve',
                  'Different expertise leading at different times',
                  'Reduced ego-driven decision making',
                  "Continuity that doesn't depend on individuals"
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-bawes-gold" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Animated throne visualization */}
          <motion.div 
            className="relative aspect-square"
            style={{ rotate, scale }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Outer diamond */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-bawes-gold/20 via-bawes-red/20 to-bawes-orange/20 rounded-lg transform rotate-45"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(159, 126, 47, 0.3)',
                      '0 0 40px rgba(159, 126, 47, 0.3)',
                      '0 0 20px rgba(159, 126, 47, 0.3)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Middle diamond */}
                <motion.div
                  className="absolute inset-[15%] bg-gradient-to-br from-bawes-red/20 via-bawes-orange/20 to-bawes-gold/20 rounded-lg transform rotate-45"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(240, 62, 47, 0.3)',
                      '0 0 20px rgba(240, 62, 47, 0.3)',
                      '0 0 10px rgba(240, 62, 47, 0.3)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />
                
                {/* Inner diamond - the empty seat */}
                <motion.div
                  className="absolute inset-[30%] bg-black rounded-lg transform rotate-45 border border-white/10"
                  animate={{
                    boxShadow: [
                      '0 0 5px rgba(255, 255, 255, 0.3)',
                      '0 0 10px rgba(255, 255, 255, 0.3)',
                      '0 0 5px rgba(255, 255, 255, 0.3)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
                
                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/60 text-sm font-light">The Empty Seat</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* What This Means */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What This <span className="bawes-gradient-text">Means</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Functional Authority',
                description: 'Leadership emerges from capability and context, not from titles or tenure.',
                color: 'bawes-gold'
              },
              {
                title: 'Natural Rotation',
                description: 'As needs change, different people step into leadership roles without friction or power struggles.',
                color: 'bawes-red'
              },
              {
                title: 'Reduced Friction',
                description: 'Decisions flow from what needs to happen, not from who has the authority to decide.',
                color: 'bawes-orange'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className={`p-6 glass-card rounded-xl border-l-4 border-${item.color}`}
              >
                <h3 className={`text-xl font-bold mb-2 text-${item.color}`}>{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-bawes-gold/15 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="text-center">
          <Button href="/contact" size="lg">
            Learn more about our approach
          </Button>
        </div>
      </Section>
    </div>
  )
}
