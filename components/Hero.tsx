'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Button from '@/components/ui/Button'

interface Star {
  x: number
  y: number
  z: number
  size: number
  brightness: number
  twinkleSpeed: number
  twinkleOffset: number
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const smoothMouseRef = useRef({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  // Canvas space background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame: number
    let stars: Star[] = []
    let shootingStars: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = []

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const starCount = Math.floor((canvas.width * canvas.height) / 1500)
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random(), // depth layer 0-1
          size: Math.random() * 1.2 + 0.3, // Much smaller stars
          brightness: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.5 + 0.5,
          twinkleOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawNebulae = (time: number) => {
      const nebulae = [
        // Golden nebula - center
        { x: canvas.width * 0.4, y: canvas.height * 0.5, radius: canvas.width * 0.5, color: '158, 125, 47', opacity: 0.06 },
        // Red nebula - right
        { x: canvas.width * 0.75, y: canvas.height * 0.6, radius: canvas.width * 0.4, color: '239, 61, 46', opacity: 0.04 },
        // Orange accent
        { x: canvas.width * 0.3, y: canvas.height * 0.3, radius: canvas.width * 0.3, color: '247, 148, 29', opacity: 0.03 },
        // Deep purple
        { x: canvas.width * 0.15, y: canvas.height * 0.75, radius: canvas.width * 0.25, color: '80, 60, 140', opacity: 0.05 },
      ]

      nebulae.forEach((nebula, i) => {
        // Very gentle movement with smooth mouse
        const offsetX = smoothMouseRef.current.x * 8 * (i * 0.15 + 0.5)
        const offsetY = smoothMouseRef.current.y * 8 * (i * 0.15 + 0.5)
        
        const gradient = ctx.createRadialGradient(
          nebula.x + offsetX, nebula.y + offsetY, 0,
          nebula.x + offsetX, nebula.y + offsetY, nebula.radius
        )
        
        // Subtle pulsing
        const pulse = Math.sin(time * 0.0005 + i * 0.8) * 0.015
        
        gradient.addColorStop(0, `rgba(${nebula.color}, ${nebula.opacity + pulse})`)
        gradient.addColorStop(0.5, `rgba(${nebula.color}, ${(nebula.opacity + pulse) * 0.4})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })
    }

    const drawStars = (time: number) => {
      stars.forEach((star) => {
        // Very gentle parallax - smooth and slow
        const parallaxStrength = 6 + star.z * 6 // 6-12 pixels max movement
        const parallaxX = smoothMouseRef.current.x * parallaxStrength
        const parallaxY = smoothMouseRef.current.y * parallaxStrength
        
        const x = star.x + parallaxX
        const y = star.y + parallaxY
        
        // Gentle twinkling
        const twinkle = Math.sin(time * 0.001 * star.twinkleSpeed + star.twinkleOffset)
        const currentBrightness = star.brightness * (0.7 + twinkle * 0.3)
        
        // Simple crisp stars - no blur
        const alpha = currentBrightness
        
        // Slight color variation based on depth
        let r = 255, g = 255, b = 255
        if (star.z < 0.3) {
          // Distant - slight blue tint
          r = 220; g = 230; b = 255
        } else if (star.z > 0.7) {
          // Close - slight warm tint
          r = 255; g = 250; b = 240
        }
        
        // Draw crisp star point
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.beginPath()
        ctx.arc(x, y, star.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Only add tiny glow to brighter stars
        if (star.brightness > 0.8 && star.size > 0.8) {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.15})`
          ctx.beginPath()
          ctx.arc(x, y, star.size * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    const maybeAddShootingStar = () => {
      if (Math.random() < 0.003 && shootingStars.length < 2) {
        const startX = Math.random() * canvas.width * 0.8
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3 // Roughly diagonal
        const speed = Math.random() * 6 + 8
        shootingStars.push({
          x: startX,
          y: -10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: Math.random() * 50 + 30,
        })
      }
    }

    const drawShootingStars = () => {
      shootingStars = shootingStars.filter((star) => {
        star.x += star.vx
        star.y += star.vy
        star.life++
        
        if (star.life > star.maxLife) return false
        if (star.x > canvas.width || star.y > canvas.height) return false
        
        const progress = star.life / star.maxLife
        const opacity = progress < 0.3 ? progress / 0.3 : Math.pow(1 - progress, 2)
        
        // Draw glowing trail
        const trailLength = 50
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.vx * trailLength * 0.15, star.y - star.vy * trailLength * 0.15
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        gradient.addColorStop(0.3, `rgba(255, 250, 220, ${opacity * 0.6})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x - star.vx * trailLength * 0.15, star.y - star.vy * trailLength * 0.15)
        ctx.stroke()
        
        // Bright head
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
        
        return true
      })
    }

    const render = (time: number) => {
      // Smooth mouse interpolation - this creates the gentle, floaty feel
      const lerp = 0.03 // Very smooth interpolation
      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * lerp
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * lerp
      
      // Deep space background
      ctx.fillStyle = '#030308'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Subtle center glow
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.7
      )
      bgGradient.addColorStop(0, 'rgba(15, 12, 25, 0.6)')
      bgGradient.addColorStop(1, 'rgba(3, 3, 8, 0)')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw nebulae
      drawNebulae(time)
      
      // Draw stars
      drawStars(time)
      
      // Shooting stars
      maybeAddShootingStar()
      drawShootingStars()
      
      animationFrame = requestAnimationFrame(render)
    }

    window.addEventListener('resize', resize)
    resize()
    render(0)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 -z-5" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          style={{
            y: smoothY,
            opacity: smoothOpacity,
            scale: smoothScale,
          }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              {/* Animated glowing orb */}
              <motion.div 
                className="relative w-16 h-16 mx-auto mb-8"
                animate={{ 
                  scale: [1, 1.08, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bawes-gold via-bawes-red to-bawes-orange opacity-60 blur-lg" />
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-bawes-gold via-bawes-red to-bawes-orange opacity-80 blur-sm" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white via-bawes-gold to-bawes-orange" />
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                <span className="bawes-gradient-text text-glow">
                  Turn ideas into action
                </span>
                <br />
                <span className="text-white/90">— together.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                We build and operate shared digital environments where people work, learn, trade, and collaborate in real time.
              </p>
              
              <div className="space-y-3 mb-12">
                <motion.p 
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  No friction.
                </motion.p>
                <motion.p 
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  No silos.
                </motion.p>
                <motion.p 
                  className="text-2xl md:text-3xl font-semibold bawes-gradient-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Just momentum.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
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
                <span className="relative z-10 flex items-center gap-2">
                  Enter the Universe
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-bawes-orange via-bawes-red to-bawes-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
              <Button href="/how-it-works" variant="secondary" size="lg">
                See how it works
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-bawes-gold/80 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
