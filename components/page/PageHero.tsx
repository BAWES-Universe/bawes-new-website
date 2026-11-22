'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import EnterCta from '@/components/home/EnterCta'
import { captureCtaClick, captureExternalLink } from '@/lib/posthog'
import { SITE_URL } from '@/lib/site'
import Scene, { type SceneKind } from './Scene'

export interface Crumb {
  label: string
  href: string
}

export interface PageLink {
  label: string
  href: string
}

interface Props {
  /** The pages above this one, nearest last. The current page is added from `here`. */
  crumbs: Crumb[]
  /** The name of this page, as shown at the end of the breadcrumb. */
  here: string
  /** Small label over the title. Defaults to the last breadcrumb. */
  eyebrow?: string
  title: React.ReactNode
  /** One or two plain sentences: what a person gets from this. */
  lead: React.ReactNode
  /** The finer detail, for people who want it. Shown smaller under the lead. */
  detail?: React.ReactNode[]
  scene: SceneKind
  /** Buttons after "Enter the Universe". */
  actions?: PageLink[]
  /** Leave out the "Enter the Universe" button (for pages such as Contact). */
  noEnter?: boolean
  /** Name of this page for analytics. */
  source: string
}

/** The top of an inner page: breadcrumb, title in plain words, and a small scene from the Universe. */
export default function PageHero({ crumbs, here, eyebrow, title, lead, detail, scene, actions = [], noEnter = false, source }: Props) {
  const pathname = usePathname() || '/'
  const trail = [{ label: 'Home', href: '/' }, ...crumbs]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [...trail, { label: here, href: pathname }].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === '/' ? '' : c.href}`,
    })),
  }

  return (
    <div className="uh">
      <section className="uh-phero">
        <div className="uh-phero-in">
          <nav aria-label="Breadcrumb">
            <ol className="uh-trail">
              {trail.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
              <li aria-current="page">{here}</li>
            </ol>
          </nav>
          <div className="uh-phero-grid">
            <div>
              <div className="eyebrow">{eyebrow || crumbs[crumbs.length - 1]?.label || 'BAWES Universe'}</div>
              <h1 className="uh-ph1">{title}</h1>
              <p className="uh-plead">{lead}</p>
              {detail?.map((d, i) => (
                <p key={i} className="uh-pdetail">
                  {d}
                </p>
              ))}
              {(!noEnter || actions.length > 0) && (
                <div className="uh-cta">
                  {!noEnter && <EnterCta source={`${source}_hero`} />}
                  {actions.map((a) =>
                    /^https?:/.test(a.href) ? (
                      <a key={a.href + a.label} href={a.href} target="_blank" rel="noopener noreferrer" onClick={() => captureExternalLink(a.label, a.href)} className="cta-secondary">
                        {a.label}
                      </a>
                    ) : (
                      <Link key={a.href + a.label} href={a.href} onClick={() => captureCtaClick(a.label, `${source}_hero`)} className="cta-secondary">
                        {a.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
            <Scene kind={scene} />
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
