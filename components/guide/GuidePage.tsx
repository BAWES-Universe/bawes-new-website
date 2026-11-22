import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { GUIDE, guideBySlug } from '@/lib/guide'
import { SITE_URL } from '@/lib/site'
import '@/components/home/home.css'
import './guide.css'

const SOCIAL_IMAGE = { url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }

/** The title, description and social card of one guide page, from its entry in lib/guide.ts. */
export function guideMetadata(slug: string): Metadata {
  const page = guideBySlug(slug)
  const title = `${page.name}: the Universe Guide`
  return {
    title,
    description: page.description,
    openGraph: { title, description: page.description, type: 'article', images: [SOCIAL_IMAGE] },
    twitter: { title, description: page.description, card: 'summary_large_image', images: [SOCIAL_IMAGE.url] },
  }
}

/** One page of the Guide: the shared page top, its sections in plain words, the list of all pages, and the way on. */
export default function GuidePage({ slug }: { slug: string }) {
  const page = guideBySlug(slug)
  const at = GUIDE.indexOf(page)
  const before = GUIDE[at - 1]
  const after = GUIDE[at + 1]
  const url = `${SITE_URL}/guide/${page.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: page.name,
    description: page.description,
    url,
    mainEntityOfPage: url,
    isPartOf: { '@type': 'WebSite', name: 'BAWES Universe', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'BAWES Universe', url: SITE_URL },
  }

  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Guide', href: '/guide' }]}
        here={page.name}
        eyebrow={`Guide · ${at + 1} of ${GUIDE.length}`}
        title={
          <>
            {page.title[0]} <span className="text-gradient-accent">{page.title[1]}</span>
          </>
        }
        lead={page.lead}
        scene={page.scene}
        source={`guide_${page.slug.replace(/-/g, '_')}`}
      />

      <div className="uh">
        <div className="uh-guide">
          <article>
            {page.sections.map((section) => (
              <section key={section.heading} className="uh-gsec">
                <h2>{section.heading}</h2>
                {section.text?.map((line) => <p key={line}>{line}</p>)}
                {section.steps && (
                  <ol className="uh-gsteps">
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                )}
                {section.points && (
                  <ul className="uh-gpoints">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {section.names?.map((group) => (
                  <div key={group.label} className="uh-gnames">
                    <h3>{group.label}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {section.note && <p className="uh-gnote">{section.note}</p>}
              </section>
            ))}
          </article>

          <nav className="uh-gside" aria-label="Pages in the Guide">
            <h2>In the Guide</h2>
            <ol>
              {GUIDE.map((other) => (
                <li key={other.slug}>
                  <Link href={`/guide/${other.slug}`} aria-current={other === page ? 'page' : undefined}>
                    {other.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <nav className="uh-gturn" aria-label="Previous and next page">
          {before && (
            <Link href={`/guide/${before.slug}`}>
              <small>← Before this</small>
              <b>{before.name}</b>
            </Link>
          )}
          {after && (
            <Link href={`/guide/${after.slug}`} className="uh-gturn-next">
              <small>Next →</small>
              <b>{after.name}</b>
            </Link>
          )}
        </nav>
      </div>

      <PageClosing
        title="The best way to learn it is to walk in"
        body="It opens in your browser. Look around as a guest, and make an account when you want to stay."
        links={[
          { label: 'All Guide pages', href: '/guide' },
          { label: 'See all features', href: '/features-overview' },
          { label: 'How it works', href: '/how-it-works' },
        ]}
        source={`guide_${page.slug.replace(/-/g, '_')}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
