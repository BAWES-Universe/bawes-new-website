'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Track scroll for mobile compatibility - this ensures nav works on all devices
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']
  )
  
  const backdropBlurValue = useTransform(
    scrollY,
    [0, 100],
    [0, 20]
  )
  
  const backdropFilter = useTransform(
    backdropBlurValue,
    (blur) => blur > 0 ? `blur(${blur}px)` : 'none'
  )
  
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.2]
  )
  
  const borderBottom = useTransform(
    borderOpacity,
    (opacity) => opacity > 0 ? `1px solid rgba(159, 126, 47, ${opacity})` : 'none'
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/market', label: 'Market' },
    { href: '/work', label: 'Work' },
    { href: '/manifesto', label: 'Manifesto' },
    { href: '/empty-seat', label: 'The Empty Seat' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflowX: 'hidden',
          ...(isScrolled
            ? {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(159, 126, 47, 0.2)',
              }
            : {
                backgroundColor,
                backdropFilter,
                WebkitBackdropFilter: backdropFilter,
                borderBottom,
              }),
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="w-full px-3 sm:px-4 lg:px-8 lg:max-w-7xl lg:mx-auto" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
          <div className="flex items-center justify-between h-20 w-full min-w-0 gap-2" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 group flex-shrink min-w-0 overflow-hidden max-w-[calc(100%-60px)]">
              <motion.div 
                className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src="/images/bawes-logo.png" 
                  alt="BAWES" 
                  fill 
                  className="object-contain"
                />
              </motion.div>
              <div className="flex items-baseline gap-0.5 sm:gap-1 min-w-0">
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white truncate">BAWES</span>
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-light bawes-gradient-text truncate">Universe</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              {/* Discord Button - Desktop */}
              <motion.a
                href="https://discord.gg/CXceJWnwNT"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium transition-all whitespace-nowrap"
                aria-label="Join us on Discord"
              >
                Join us on Discord
              </motion.a>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Discord Button + Hamburger grouped together */}
            <div className="lg:hidden flex items-center flex-shrink-0">
              <motion.a
                href="https://discord.gg/CXceJWnwNT"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center min-h-[44px] h-10 sm:h-11 px-2.5 sm:px-3 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs sm:text-sm font-medium transition-all touch-manipulation mr-[10px]"
                aria-label="Join us on Discord"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Join us on Discord
              </motion.a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-[100] flex items-center justify-center min-w-[44px] min-h-[44px] w-10 h-10 sm:w-11 sm:h-11 text-white hover:text-bawes-gold transition-all flex-shrink-0 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/20 touch-manipulation border border-white/10"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
              <svg 
                className="w-6 h-6 pointer-events-none" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-center gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-light text-white/80 hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
