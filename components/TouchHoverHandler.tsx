'use client'

import { useEffect } from 'react'

export default function TouchHoverHandler() {
  useEffect(() => {
    const add = (e: TouchEvent) => {
      const card = (e.target as HTMLElement).closest('.bento-card')
      if (card) card.classList.add('is-hovered')
    }
    const remove = (e: TouchEvent) => {
      const card = (e.target as HTMLElement).closest('.bento-card')
      if (card) card.classList.remove('is-hovered')
    }

    document.addEventListener('touchstart', add, { passive: true })
    document.addEventListener('touchend', remove, { passive: true })
    document.addEventListener('touchcancel', remove, { passive: true })

    return () => {
      document.removeEventListener('touchstart', add)
      document.removeEventListener('touchend', remove)
      document.removeEventListener('touchcancel', remove)
    }
  }, [])

  return null
}
