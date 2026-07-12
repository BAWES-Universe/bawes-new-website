'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WhiteLabelPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="max-w-container-max mx-auto px-gutter pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/platform" className="hover:text-primary transition-colors">Platform</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">White Label</span>
        </div>
      </div>
      {/* Hero Section */}
      <Section className="relative pt-40 pb-section-padding-v px-gutter max-w-container-max mx-auto text-center">
        <div className="flex flex-col items-center">
          <span className="inline-block px-4 py-1 rounded-full border border-purple text-primary text-caption mb-6 bg-surface-glass">
            White-Label Solution
          </span>
          <h1 className="font-display-hero text-display-hero mb-6 text-white max-w-4xl leading-tight">
            Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Your Universe.</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-2xl mb-10">
            Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-20">
            <button className="neon-gradient px-8 py-4 rounded-full font-label-navigation text-lg text-white">
              Launch Your Brand
            </button>
            <button className="glass-card px-8 py-4 rounded-full font-label-navigation text-lg text-on-surface hover:bg-white/5">
              View Documentation
            </button>
          </div>
          <div className="w-full relative glass-card rounded-2xl overflow-hidden aspect-[1.79] max-w-[1000px] mx-auto border-purple shadow-2xl">
            <div className="w-full h-full bg-surface-container-high flex items-center justify-center aspect-video">
              <span className="material-symbols-outlined text-7xl text-primary/30">palette</span>
            </div>
            <div className="absolute top-8 left-8 glass-card px-4 py-2 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">domain</span>
              <span className="text-caption font-bold">your-universe.com</span>
            </div>
            <div className="absolute bottom-8 right-8 glass-card p-6 rounded-xl flex flex-col items-start gap-2 max-w-[200px]">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-tertiary to-primary mb-2"></div>
              <span className="text-caption opacity-60">Identity Applied</span>
              <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
          <Link href="/features" className="hidden md:flex items-center gap-2 text-primary font-label-navigation hover:gap-3 transition-all">
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
    </main>
  );
}
