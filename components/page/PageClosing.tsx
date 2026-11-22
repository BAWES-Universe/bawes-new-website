'use client'

import Link from 'next/link'
import EnterCta from '@/components/home/EnterCta'
import Parade from '@/components/home/Parade'
import { captureCtaClick, captureExternalLink } from '@/lib/posthog'
import '@/components/home/home.css'
import './page.css'
import type { PageLink } from './PageHero'

interface Props {
  title: React.ReactNode
  body?: React.ReactNode
  /** The first link becomes a button next to "Enter the Universe". The rest are shown as small links. */
  links?: PageLink[]
  /** Leave out the "Enter the Universe" button. */
  noEnter?: boolean
  source: string
}

const isOutside = (href: string) => /^https?:/.test(href)

/** The closing card of an inner page, with the same walking parade as the home page. */
export default function PageClosing({ title, body, links = [], noEnter = false, source }: Props) {
  const [first, ...rest] = links
  return (
    <div className="uh">
      <section className="uh-pclose">
        <div className="uh-pclose-card">
          <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
          <div className="relative">
            <h2>{title}</h2>
            {body ? <p>{body}</p> : null}
            <div className="uh-cta">
              {!noEnter && <EnterCta source={`${source}_closing`} />}
              {first &&
                (isOutside(first.href) ? (
                  <a href={first.href} target="_blank" rel="noopener noreferrer" onClick={() => captureExternalLink(first.label, first.href)} className="cta-secondary">
                    {first.label}
                  </a>
                ) : (
                  <Link href={first.href} onClick={() => captureCtaClick(first.label, `${source}_closing`)} className="cta-secondary">
                    {first.label}
                  </Link>
                ))}
            </div>
            {rest.length > 0 && (
              <div className="uh-pclose-more">
                {rest.map((l) =>
                  isOutside(l.href) ? (
                    <a key={l.href + l.label} href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => captureExternalLink(l.label, l.href)}>
                      {l.label} →
                    </a>
                  ) : (
                    <Link key={l.href + l.label} href={l.href}>
                      {l.label} →
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
          <Parade />
        </div>
      </section>
    </div>
  )
}
