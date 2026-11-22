'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function EmptySeatPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'About', href: '/about' }]}
        here="The Empty Seat"
        eyebrow="Core philosophy"
        title={<>The empty <span className="text-gradient-accent">seat</span></>}
        lead={<>No one owns the throne. No one rules forever. Power is borrowed, not held.</>}
        scene="fire"
        actions={[{ label: 'Read the manifesto', href: '/manifesto' }]}
        source="page_empty_seat"
      />

      {/* Introduction Section */}
      <section className="py-section-padding-v border-t border-divider">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <div className="max-w-3xl">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xl">
              The Empty Seat is a structural decision that protects continuity, creativity, and execution without ego. Leadership is functional, not symbolic. In traditional organizations, leadership positions become permanent fixtures.
              <br /><br />
              The person in the seat becomes the seat itself. The Empty Seat principle means that leadership roles are temporary, contextual, and transferable. The seat exists, but no one person owns it permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Three Implications Section */}
      <section className="py-section-padding-v bg-surface-container-lowest relative">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-16 text-center">Core Implications</h2>
          <div className="grid md:grid-cols-3 gap-gutter">
            <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-shadow">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Functional Authority</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Leadership emerges from capability and context, not from titles or tenure. Authority is specific to the task at hand.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary shadow-[0_0_15px_rgba(173,198,255,0.3)] group-hover:shadow-[0_0_25px_rgba(173,198,255,0.5)] transition-shadow">
                <span className="material-symbols-outlined">sync_alt</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Natural Rotation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">As needs change, different people step into leadership roles without friction or power struggles. The flow is organic.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 text-primary-container shadow-[0_0_15px_rgba(160,120,255,0.3)] group-hover:shadow-[0_0_25px_rgba(160,120,255,0.5)] transition-shadow">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Reduced Friction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Decisions flow from what needs to happen, not from who has the authority to decide. Efficiency through collective intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Invitation Section */}
      <section className="py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <div className="glass-card p-12 md:p-20 rounded-3xl text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-section text-headline-section text-on-surface mb-6">There&apos;s always a seat at the table</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-10 text-lg">
                The Empty Seat is not just a principle — it&apos;s a literal empty chair in Universe. An open invitation to anyone who wants to contribute, collaborate, or join the community.
              </p>
              <Link href="/manifesto" className="inline-block border border-on-surface/30 hover:border-on-surface/60 px-8 py-3.5 rounded-full font-label-navigation text-label-navigation transition-all hover:scale-105">
                Learn more about our approach
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PageClosing
        title={<>Come and see it for yourself</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'Read the manifesto', href: '/manifesto' }, { label: 'Talk to us', href: '/contact' }]}
        source="page_empty_seat"
      />
    </main>
  );
}
