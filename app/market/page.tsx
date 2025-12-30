'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

export default function Market() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section 
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-bawes-orange/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-bawes-gold/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          
          {/* Floating shopping icons */}
          {['🛍️', '🏪', '💳', '📦'].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-7xl mb-8 block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🏬
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Commerce in</span>
              <br />
              <span className="bawes-gradient-text">shared spaces</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Universe supports commerce as a spatial experience, not a locked-in platform.
            </p>
            <p className="text-lg text-white/50 mt-4">
              People explore shops, services, and marketplaces together inside shared environments, while transactions connect to the real world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What this enables */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What this <span className="bawes-gradient-text">enables</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl border border-bawes-orange/20 group"
          >
            <motion.div 
              className="text-5xl mb-6"
              whileHover={{ rotate: 10 }}
            >
              🛍️
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white">Shops & Services</h3>
            <p className="text-white/60 leading-relaxed">
              Brand spaces, community stores, service desks, pop-ups. Create immersive shopping experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl border border-bawes-gold/20 group"
          >
            <motion.div 
              className="text-5xl mb-6"
              whileHover={{ rotate: -10 }}
            >
              🏬
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white">Market & Mall Experiences</h3>
            <p className="text-white/60 leading-relaxed">
              Shared market areas for launches, showcases, and discovery — social by design.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Tool-Agnostic Commerce */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl mb-6 block">🌍</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tool-Agnostic <span className="bawes-gradient-text">Commerce</span>
            </h2>
            <p className="text-xl text-white/70">
              Universe does not replace your stack.
            </p>
          </motion.div>
          
          <p className="text-lg text-white/60 mb-8 text-center">
            You can connect:
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {['Shopify', 'Custom commerce systems', 'Booking platforms', 'Ticketing tools', 'Payment providers', 'Your existing tools'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 glass rounded-xl text-center text-white/70 hover:text-white hover:border-bawes-gold/30 transition-colors"
              >
                {item}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="p-8 glass-card rounded-2xl border border-bawes-gold/30 text-center"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-xl text-white/80">
              <span className="text-bawes-gold font-semibold">BAWES helps design and integrate</span> these experiences when needed.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-bawes-orange/15 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="text-center">
          <motion.p 
            className="text-xl text-white/60 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to bring commerce into shared spaces?
          </motion.p>
          <Button href="/contact" size="lg">
            Get help with commerce integration
          </Button>
        </div>
      </Section>
    </div>
  )
}
