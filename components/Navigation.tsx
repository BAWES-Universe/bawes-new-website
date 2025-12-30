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
        className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden"
        style={
          isScrolled
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
              }
        }
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20 relative w-full min-w-0">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 min-w-0">
              <motion.div 
                className="relative w-10 h-10"
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
              <div className="flex items-baseline gap-1 min-w-0">
                <span className="text-xl sm:text-2xl font-bold text-white truncate">BAWES</span>
                <span className="text-lg sm:text-xl font-light bawes-gradient-text truncate hidden xs:inline">Universe</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end min-w-0">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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

            {/* Mobile Menu Button - Always visible on screens < 1024px */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block lg:hidden relative z-[100] flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 text-white hover:text-bawes-gold transition-all flex-shrink-0 ml-2 sm:ml-4 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/20 touch-manipulation border border-white/10"
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
