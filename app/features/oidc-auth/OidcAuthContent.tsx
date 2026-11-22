'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function OidcAuthPageContent() {
  return (
    <main className="relative z-10 pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="OIDC Auth"
        title={<>Your identity. <span className="text-gradient-accent">Your way.</span></>}
        lead={<>Let people sign in with the account they already have, such as Google, GitHub, Microsoft, or your own company login.</>}
        detail={[
          <>OpenID Connect authentication. Connect your existing SSO — Google, GitHub, Microsoft, or custom OIDC providers. Secure, decentralized, and seamless.</>,
        ]}
        scene="desks"
        actions={[{ label: 'Start integrating', href: '/contact' }, { label: 'View docs', href: 'https://github.com/BAWES-Universe' }]}
        source="page_features_oidc_auth"
      />

      {/* Features Bento Grid */}
      <Section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section mb-4">Enterprise Grade Auth</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-secondary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">group</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">SSO Integration</h3>
            <p className="text-text-secondary text-sm">One-click login for your users with familiar social and enterprise providers.</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-primary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">hub</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">Custom OIDC Providers</h3>
            <p className="text-text-secondary text-sm">Bring your own identity server. Full support for any standard OpenID Connect endpoint.</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-tertiary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary">fork_right</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">Role Mapping</h3>
            <p className="text-text-secondary text-sm">Automatically sync user roles and permissions from your identity provider to BAWES Universe.</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-error-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-error">lock_open</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">Secure by Default</h3>
            <p className="text-text-secondary text-sm">Enterprise-grade security with JWT validation, encryption at rest, and PKCE support.</p>
          </div>
        </div>
      </Section>

      {/* Deep Dives */}
      <Section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v border-t border-divider">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-section text-headline-section mb-2">Deep Dives</h2>
            <p className="text-text-secondary">Extend your authentication capabilities further.</p>
          </div>
          <Link href="/features-overview" className="hidden md:flex items-center text-primary font-label-navigation hover:translate-x-2 transition-transform">
            View all modules <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link href="/features/self-hosting" className="group cursor-pointer">
            <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden glass-card">
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-primary/30">dns</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <h4 className="font-headline-card text-headline-card mb-2 group-hover:text-primary transition-colors">Self-Hosting</h4>
            <p className="text-text-secondary text-sm">Run the entire stack on your own infrastructure with Docker or Kubernetes support.</p>
          </Link>
          <Link href="/features/admin-api" className="group cursor-pointer">
            <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden glass-card">
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-secondary/30">api</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <h4 className="font-headline-card text-headline-card mb-2 group-hover:text-primary transition-colors">Admin API</h4>
            <p className="text-text-secondary text-sm">Full programmatic control over users, worlds, and permissions via our REST API.</p>
          </Link>
          <Link href="/features/white-label" className="group cursor-pointer">
            <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden glass-card">
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-tertiary/30">palette</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <h4 className="font-headline-card text-headline-card mb-2 group-hover:text-primary transition-colors">White Label</h4>
            <p className="text-text-secondary text-sm">Customize the entire auth flow with your own branding, logos, and custom domain names.</p>
          </Link>
        </div>
      </Section>

      <PageClosing
        title={<>Ready to secure your world?</>}
        body={<>Let people sign in the way they already know.</>}
        links={[{ label: 'Get started', href: '/contact' }, { label: 'View documentation', href: 'https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer' }]}
        source="page_features_oidc_auth"
      />
    </main>
  );
}
