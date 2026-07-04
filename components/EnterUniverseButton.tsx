'use client'

import { motion } from 'framer-motion'
import { captureEnterUniverse, getCrossDomainUrl, UNIVERSE_URL } from '@/lib/posthog'

interface Props {
  source: string
  children?: React.ReactNode
}

/**
 * Shared "Enter the Universe" CTA button.
 *
 * Uses the base URL in `href` so it degrades gracefully without JS.
 * Computes the cross-domain enriched URL at click-time (onClick → e.preventDefault
 * → window.open) so that PostHog is guaranteed initialized by the time the
 * identity hash is generated.
 */
export default function EnterUniverseButton({ source, children }: Props) {
  return (
    <motion.a
      href={UNIVERSE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault()
        captureEnterUniverse(source)
        const enrichedUrl = getCrossDomainUrl(UNIVERSE_URL)
        window.open(enrichedUrl, '_blank')
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group px-8 py-4 text-base bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white hover:shadow-lg hover:shadow-bawes-gold/30"
    >
      <span className="relative z-10 flex items-center gap-2">
        {children || (
          <>
            Enter the Universe
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-bawes-orange via-bawes-red to-bawes-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  )
}
