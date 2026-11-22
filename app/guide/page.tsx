import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { GUIDE } from '@/lib/guide'
import { SITE_URL } from '@/lib/site'
import '@/components/home/home.css'
import '@/components/guide/guide.css'

const TITLE = 'The Universe Guide'
const DESCRIPTION = 'Short pages in plain words on what you can do in BAWES Universe today: your first five minutes, Orbit, artifacts, Universe AI, voices, chats and your phone.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }] },
  twitter: { title: TITLE, description: DESCRIPTION, card: 'summary_large_image', images: ['/images/enter-univ.png'] },
}

const FOR_BUILDERS = [
  { label: 'Developer hub', href: '/developers' },
  { label: 'Scripting API', href: '/features/scripting' },
  { label: 'Add your own tools with MCP', href: '/mcp-integration' },
  { label: 'Self-hosting', href: '/features/self-hosting' },
  { label: 'Technology stack', href: '/features/tech-stack' },
]

export default function GuideHome() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: TITLE,
    itemListElement: GUIDE.map((page, i) => ({ '@type': 'ListItem', position: i + 1, name: page.name, url: `${SITE_URL}/guide/${page.slug}` })),
  }

  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[]}
        here="Guide"
        eyebrow="Guide"
        title={
          <>
            Learn Universe <span className="text-gradient-accent">in plain words</span>
          </>
        }
        lead="Short pages, one for each thing you can do today. Start with the first one and you will be walking around in five minutes."
        scene="class"
        actions={[{ label: 'Start here', href: `/guide/${GUIDE[0].slug}` }]}
        source="guide"
      />

      <div className="uh">
        <div className="uh-ghub">
          <ol className="uh-ghub-grid">
            {GUIDE.map((page, i) => (
              <li key={page.slug}>
                <Link href={`/guide/${page.slug}`}>
                  <i aria-hidden="true">{i + 1}</i>
                  <b>{page.name}</b>
                  <span>{page.description}</span>
                </Link>
              </li>
            ))}
          </ol>


          <div className="uh-ghub-more">
            <h2>Building something?</h2>
            <p>The pages for people who make maps, write scripts or run their own Universe are here.</p>
            <ul>
              {FOR_BUILDERS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label} →</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <PageClosing
        title="The best way to learn it is to walk in"
        body="It opens in your browser. Look around as a guest, and make an account when you want to stay."
        links={[
          { label: 'How it works', href: '/how-it-works' },
          { label: 'See all features', href: '/features-overview' },
          { label: 'What people build', href: '/use-cases' },
        ]}
        source="guide"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
