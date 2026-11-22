'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function WhiteLabelPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="White Label"
        title={<>Your brand. <span className="text-gradient-accent">Your universe.</span></>}
        lead={<>Use your own web address, logo and colours. People see your brand, not ours.</>}
        detail={[
          <>Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.</>,
        ]}
        scene="looks"
        actions={[{ label: 'Talk to us', href: '/contact' }, { label: 'Self-hosting', href: '/features/self-hosting' }]}
        source="page_features_white_label"
      />

      {/* Features Grid */}
      <Section className="py-section-padding-v px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-card-padding rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">language</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4 text-white">Custom Domain</h3>
            <p className="font-body-md text-body-md text-text-secondary">Host your universe at your own URL like your-universe.com for a seamless brand experience.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">category</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4 text-white">Custom Logos</h3>
            <p className="font-body-md text-body-md text-text-secondary">Brand the entire interface. Replace all platform icons and marks with your own identity.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary text-3xl">visibility_off</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4 text-white">Full White Label</h3>
            <p className="font-body-md text-body-md text-text-secondary">No BAWES branding visible. From the loading screens to the dashboard, it's 100% yours.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary-container text-3xl">dns</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4 text-white">Self-Hosted Option</h3>
            <p className="font-body-md text-body-md text-text-secondary">Run the entire stack on your infrastructure for maximum control and data sovereignty.</p>
          </div>
        </div>
      </Section>

      {/* Enterprise Section */}
      <Section className="py-section-padding-v px-gutter max-w-container-max mx-auto">
        <div className="relative rounded-3xl overflow-hidden glass-card p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline-section text-headline-section mb-8 text-white">Built for Enterprise</h2>
              <div className="space-y-6">
                <p className="font-body-md text-body-md text-text-secondary">Our rebranding layer isn't just a skin — it's an architectural abstraction built over the spatial core. Control every hex code, typography choice, and iconography set through our central manifest.</p>
                <p className="font-body-md text-body-md text-text-secondary">Engineered for high-compliance environments, the white-label instance ensures that your corporate identity remains front and center, while we handle the heavy lifting of spatial physics and RTC protocols.</p>
              </div>
              <div className="mt-10 flex gap-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white">100%</span>
                  <span className="text-caption uppercase tracking-widest text-text-low-emphasis">Unbranded</span>
                </div>
                <div className="w-[1px] h-12 bg-divider"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white">&lt;50ms</span>
                  <span className="text-caption uppercase tracking-widest text-text-low-emphasis">Global Latency</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border border-purple rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>
                <div className="absolute w-3/4 h-3/4 border border-secondary rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20"></div>
                <div className="w-64 h-64 glass-card rounded-2xl flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Deep Dives */}
      <Section className="py-section-padding-v px-gutter max-w-container-max mx-auto mb-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-section text-headline-section text-white mb-2">Related Deep Dives</h2>
            <p className="font-body-md text-body-md text-text-low-emphasis">Explore the technical foundations of the universe.</p>
          </div>
          <Link href="/features-overview" className="hidden md:flex items-center gap-2 text-primary font-label-navigation hover:gap-3 transition-all">
            Explore All Docs <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/features/self-hosting" className="group glass-card p-8 rounded-2xl flex items-start gap-6 cursor-pointer">
            <div className="w-16 h-16 shrink-0 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">dns</span>
            </div>
            <div>
              <h4 className="font-headline-card text-headline-card mb-2 text-white group-hover:text-primary transition-colors">Self-Hosting</h4>
              <p className="font-body-md text-body-md text-text-secondary">Learn how to deploy on your own servers and maintain complete data sovereignty for your organization.</p>
            </div>
          </Link>
          <Link href="/workadventure-fork" className="group glass-card p-8 rounded-2xl flex items-start gap-6 cursor-pointer">
            <div className="w-16 h-16 shrink-0 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-secondary">fork_left</span>
            </div>
            <div>
              <h4 className="font-headline-card text-headline-card mb-2 text-white group-hover:text-secondary transition-colors">WorkAdventure Fork</h4>
              <p className="font-body-md text-body-md text-text-secondary">Extend the core platform with custom code. Documentation for developers looking to modify the engine.</p>
            </div>
          </Link>
        </div>
      </Section>
      <PageClosing
        title={<>Make it yours</>}
        links={[{ label: 'Talk to us', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_features_white_label"
      />
    </main>
  );
}
