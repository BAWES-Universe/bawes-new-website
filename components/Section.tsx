'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, forwardRef } from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  animate?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', id, animate = true }, ref) => {
    const internalRef = useRef<HTMLElement>(null)
    const sectionRef = (ref as React.MutableRefObject<HTMLElement | null>) || internalRef
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    if (!animate) {
      return (
        <section ref={sectionRef} id={id} className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </section>
      )
    }

    return (
      <motion.section 
        ref={sectionRef}
        id={id} 
        className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </motion.section>
    )
  }
)

Section.displayName = 'Section'

export default Section
