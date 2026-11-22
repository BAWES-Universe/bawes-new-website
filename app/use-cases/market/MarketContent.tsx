'use client'

'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function UseCaseMarketPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="Market"
        title={<>Commerce in <span className="text-gradient-accent">shared spaces</span></>}
        lead={<>Browse shops, services and marketplaces together, the way you would walk a real market with friends.</>}
        detail={[
          <>Universe supports commerce as a spatial experience. People explore shops, services, and marketplaces together inside shared environments, while transactions connect to the real world.</>,
        ]}
        scene="market"
        actions={[{ label: 'All features', href: '/features-overview' }]}
        source="page_use_cases_market"
      />

      {/* What This Enables */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Shops, services, and markets in your universe</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">storefront</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Shops & Services</h3>
            <p className="text-on-surface-variant leading-relaxed">Brand spaces, community stores, service desks, pop-ups. Create immersive shopping experiences where customers browse together with friends.</p>
            <div className="mt-6">
              <Link href="/features/proximity-chat" className="text-primary font-bold inline-flex items-center gap-2 text-sm group/link">
                Powered by Proximity Chat <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Market & Mall Experiences</h3>
            <p className="text-on-surface-variant leading-relaxed">Shared market areas for launches, showcases, and discovery. Social by design — people explore together, not alone in a browser tab.</p>
          </div>
        </div>
      </section>

      {/* Tool-Agnostic Commerce */}
      <section className="bg-surface-container-lowest/50 py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-white">We don&apos;t replace your stack. We give it a spatial front.</h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-2xl mx-auto">
              Universe does not replace your commerce tools. Connect what already works: Shopify, custom commerce systems, booking platforms, ticketing tools, payment providers, your existing infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">shopping_cart</span>
              <span className="text-sm font-semibold">Shopify</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">settings_input_component</span>
              <span className="text-sm font-semibold">Custom Stack</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
              <span className="text-sm font-semibold">Booking Platforms</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">confirmation_number</span>
              <span className="text-sm font-semibold">Ticketing Tools</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">payments</span>
              <span className="text-sm font-semibold">Payment Providers</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">build</span>
              <span className="text-sm font-semibold">Existing Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works in practice */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">How markets work in practice</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Explore the diverse ways brands and institutions are leveraging spatial commerce.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">store</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">Brand Showroom</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">A clothing brand sets up a virtual store. Visitors walk through, see products on display, and click to purchase through Shopify. Staff bots guide visitors to new arrivals.</p>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">school</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">Service Desk</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">A university sets up a service desk room. Students walk in, speak to staff or an AI bot, and get help with enrollment, payments, and scheduling.</p>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-20 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-white opacity-30">campaign</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">Pop-up Market</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">During an event, vendors set up temporary shops in a market world. Attendees browse together, chat with vendors via proximity chat, and purchase through connected payment systems.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to bring a market into your universe?</>}
        links={[{ label: 'Set up your shop', href: '/contact' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_market"
      />
    </main>
  );
}
