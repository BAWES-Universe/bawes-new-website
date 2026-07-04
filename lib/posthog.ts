import posthog from 'posthog-js'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

// ─── Cross-domain identity bootstrap ───────────────────────────

/**
 * Returns a URL with distinct_id and session_id appended as URL hash,
 * so universe.bawes.net can continue tracking the same user journey.
 */
export function getCrossDomainUrl(targetUrl: string): string {
  if (!POSTHOG_KEY || typeof window === 'undefined') return targetUrl

  const distinctId = posthog.get_distinct_id()
  const sessionId = posthog.get_session_id?.() || ''

  const hash = `#distinct_id=${encodeURIComponent(distinctId)}&session_id=${encodeURIComponent(sessionId)}`
  const baseUrl = targetUrl.split('#')[0]
  return `${baseUrl}${hash}`
}

// ─── Conversion event helpers ──────────────────────────────────

/** User clicked "Enter the Universe" — primary conversion */
export function captureEnterUniverse(source: string): void {
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  posthog.capture('enter_universe_click', {
    source,
    landing_page: window.location.pathname,
    referrer: document.referrer || null,
  })
}

/** User clicked a Discord CTA */
export function captureDiscordClick(location: string): void {
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  posthog.capture('discord_click', {
    location,
    page: window.location.pathname,
  })
}

/** User clicked a secondary CTA (See how it works, Talk to us, etc.) */
export function captureCtaClick(label: string, location: string): void {
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  posthog.capture('cta_click', {
    label,
    location,
    page: window.location.pathname,
  })
}

/** User clicked a navigation link */
export function captureNavClick(href: string, label: string): void {
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  posthog.capture('nav_click', {
    href,
    label,
    page: window.location.pathname,
  })
}

/** User clicked an external link (GitHub, etc.) */
export function captureExternalLink(platform: string, url: string): void {
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  posthog.capture('external_link_click', {
    platform,
    url,
    page: window.location.pathname,
  })
}

/** Contact form submission result */
export function captureContactSubmit(success: boolean, fields?: string[]): void {
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  posthog.capture('contact_form_submit', {
    success,
    fields_present: fields || [],
    page: window.location.pathname,
  })
}

/** Footer link click (terms, privacy) */
export function captureFooterLinkClick(label: string, href: string): void {
  if (!POSTHOG_KEY || typeof window === 'undefined') return
  posthog.capture('footer_link_click', {
    label,
    href,
    page: window.location.pathname,
  })
}
