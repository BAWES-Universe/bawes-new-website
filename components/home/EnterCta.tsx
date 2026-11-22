'use client'

import { captureEnterUniverse, getCrossDomainUrl, UNIVERSE_URL } from '@/lib/posthog'

/** The main "Enter the Universe" button, in the brand's pill style. */
export default function EnterCta({ source, className = '' }: { source: string; className?: string }) {
  return (
    <a
      href={UNIVERSE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault()
        captureEnterUniverse(source)
        window.open(getCrossDomainUrl(UNIVERSE_URL), '_blank', 'noopener')
      }}
      className={`cta-primary ${className}`}
    >
      Enter the Universe
      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
    </a>
  )
}
