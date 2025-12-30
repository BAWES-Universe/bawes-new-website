'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    context: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)

    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1455669938256740581/3P3BCgFKr9LxvC8YugZPGoe7jaXZbY9SAt2mAbO2QV_9Qh-RSqlUgF_ecxnI4oh2nBoB'
      
      const embed = {
        title: '📧 New Contact Form Submission',
        color: 0x9F7E2F, // BAWES gold color
        fields: [
          {
            name: '👤 Name',
            value: formData.name || 'Not provided',
            inline: true
          },
          {
            name: '📧 Email',
            value: formData.email || 'Not provided',
            inline: true
          },
          {
            name: '💬 What are they trying to do?',
            value: formData.message || 'Not provided',
            inline: false
          }
        ],
        timestamp: new Date().toISOString()
      }

      // Add optional context field if provided
      if (formData.context) {
        embed.fields.push({
          name: '📝 Additional Context',
          value: formData.context,
          inline: false
        })
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '', context: '' })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error('Error sending message:', err)
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-bawes-gold/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-bawes-orange/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-6xl mb-6 block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💬
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bawes-gradient-text">Talk</span>
              <span className="text-white"> to us</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-4">
              Sometimes you don't need a product.
            </p>
            <p className="text-lg text-white/50">
              You need clarity, structure, or help executing something real.
            </p>
            <p className="text-lg text-white/70 mt-6">
              We work with founders, teams, students, and organizations, intentionally and hands-on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bawes-gold focus:ring-2 focus:ring-bawes-gold/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bawes-gold focus:ring-2 focus:ring-bawes-gold/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2">
                What are you trying to do?
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={5}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bawes-gold focus:ring-2 focus:ring-bawes-gold/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell us about your project, idea, or challenge..."
              />
            </div>

            <div>
              <label htmlFor="context" className="block text-sm font-semibold text-white/80 mb-2">
                Optional context or timeline
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="context"
                name="context"
                value={formData.context}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={3}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bawes-gold focus:ring-2 focus:ring-bawes-gold/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Any additional details, timeline, or context..."
              />
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 glass-card rounded-xl border border-bawes-gold/30 text-center"
              >
                <motion.span 
                  className="text-4xl block mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  ✨
                </motion.span>
                <p className="text-bawes-gold font-semibold text-lg">Message sent! We'll be in touch soon.</p>
              </motion.div>
            ) : error ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 glass-card rounded-xl border border-bawes-red/30 text-center"
              >
                <motion.span 
                  className="text-4xl block mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  ⚠️
                </motion.span>
                <p className="text-bawes-red font-semibold text-lg">Failed to send message. Please try again.</p>
              </motion.div>
            ) : (
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            )}
          </form>
        </motion.div>
      </Section>

      {/* Additional info */}
      <Section>
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="p-8 glass-card rounded-2xl">
            <p className="text-lg text-white/70 mb-6">
              Prefer to connect another way?
            </p>
            <motion.a
              href="https://discord.gg/CXceJWnwNT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="font-medium">Join our Discord community</span>
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
