'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com'

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) {
      console.warn('[PostHog] NEXT_PUBLIC_POSTHOG_KEY not set — skipping initialization')
      return
    }

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      cross_subdomain_cookie: true,
      persistence: 'localStorage+cookie',

      // Page tracking
      capture_pageview: false,   // handled manually by PostHogPageView
      capture_pageleave: true,   // track when users navigate away

      // Autocapture — clicks, form interactions, taps
      autocapture: true,

      // Session recording — full user sessions
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: {
          password: true,
        },
        collectFonts: true,
        recordCrossOriginIframes: false,
      },

      loaded: (ph) => {
        ph.register({ site_section: 'landing' })
      },
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
