import Link from 'next/link'
import '@/components/home/home.css'
import './page.css'
import type { PageLink } from './PageHero'

/**
 * The body of an inner page, in the same order on every page:
 * what a person can do, how it works, the facts for builders, and where to go next.
 * Plain words come first. The technical facts stay on the page, in the builders block.
 */

const isOutside = (href: string) => /^https?:/.test(href)

function Go({ href, children }: { href: string; children: React.ReactNode }) {
  return isOutside(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href}>{children}</Link>
  )
}

function Head({ eyebrow, title, body }: { eyebrow?: string; title: React.ReactNode; body?: React.ReactNode }) {
  return (
    <div className="uh-part-head">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  )
}

export interface PartCard {
  /** A Material Symbols icon name. */
  icon: string
  title: string
  text: React.ReactNode
  /** A page that says more about this one thing. */
  more?: PageLink
}

/** A short piece of code for builders, with a word on what it does. */
export function PartCode({ eyebrow, title, body, file, code }: { eyebrow?: string; title: React.ReactNode; body?: React.ReactNode; file: string; code: string }) {
  return (
    <section className="uh">
      <div className="uh-part">
        <Head eyebrow={eyebrow} title={title} body={body} />
        <figure className="uh-bcode">
          <figcaption>{file}</figcaption>
          <pre>
            <code>{code}</code>
          </pre>
        </figure>
      </div>
    </section>
  )
}

/** What a person can do: one card for each thing. */
export function PartCards({ eyebrow, title, body, cards }: { eyebrow?: string; title: React.ReactNode; body?: React.ReactNode; cards: PartCard[] }) {
  return (
    <section className="uh">
      <div className="uh-part">
        <Head eyebrow={eyebrow} title={title} body={body} />
        <ul className="uh-bcards">
          {cards.map((card) => (
            <li key={card.title}>
              <div className="uh-bcard">
                <span className="material-symbols-outlined" aria-hidden="true">
                  {card.icon}
                </span>
                <b>{card.title}</b>
                <p>{card.text}</p>
                {card.more ? <Go href={card.more.href}>{card.more.label} →</Go> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** How it works, as a few steps side by side. */
export function PartSteps({ eyebrow, title, body, steps }: { eyebrow?: string; title: React.ReactNode; body?: React.ReactNode; steps: { title: string; text: React.ReactNode }[] }) {
  return (
    <section className="uh">
      <div className="uh-part">
        <Head eyebrow={eyebrow} title={title} body={body} />
        <ol className="uh-bsteps">
          {steps.map((step) => (
            <li key={step.title}>
              <b>{step.title}</b>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** The technical facts, for people who build on Universe or host it. */
export function PartBuilders({ title, body, facts, links = [] }: { title: React.ReactNode; body: React.ReactNode[]; facts: [string, string][]; links?: PageLink[] }) {
  return (
    <section className="uh">
      <div className="uh-part">
        <div className="uh-bbuild">
          <div>
            <div className="eyebrow">For builders</div>
            <h2>{title}</h2>
            {body.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            {links.length > 0 && (
              <div className="uh-bbuild-links">
                {links.map((link) => (
                  <Go key={link.href + link.label} href={link.href}>
                    {link.label} →
                  </Go>
                ))}
              </div>
            )}
          </div>
          <dl className="uh-bfacts">
            {facts.map(([name, value]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

/** Where to go next: pages that go well with this one. */
export function PartRelated({ title = 'Goes well with', links }: { title?: React.ReactNode; links: (PageLink & { note: string })[] }) {
  return (
    <section className="uh">
      <div className="uh-part">
        <Head title={title} />
        <ul className="uh-brel">
          {links.map((link) => (
            <li key={link.href}>
              <Go href={link.href}>
                <b>{link.label}</b>
                <span>{link.note}</span>
              </Go>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
