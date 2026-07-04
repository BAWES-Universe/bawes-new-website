import posthog from 'posthog-js'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

/**
 * Bootstrap cross-domain identity when navigating from bawes.net → universe.bawes.net.
 * Passes distinct_id and session_id via URL hash so the Universe app can continue
 * tracking the same user journey.
 */
export function getCrossDomainUrl(targetUrl: string): string {
  if (!POSTHOG_KEY) return targetUrl
  if (typeof window === 'undefined') return targetUrl

  const distinctId = posthog.get_distinct_id()
  const sessionId = posthog.get_session_id?.() || ''

  const hash = `#distinct_id=${encodeURIComponent(distinctId)}&session_id=${encodeURIComponent(sessionId)}`
  const baseUrl = targetUrl.split('#')[0]
  return `${baseUrl}${hash}`
}

/**
 * Capture a custom event when users click through to Universe,
 * so we can track which landing visitors made it there.
 */
export function captureEnterUniverse(source: string): void {
  if (!POSTHOG_KEY) return
  if (typeof window === 'undefined') return

  posthog.capture('enter_universe_click', {
    source,
    landing_page: window.location.pathname,
    referrer: document.referrer || null,
  })
}
