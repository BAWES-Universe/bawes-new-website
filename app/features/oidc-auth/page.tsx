'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function OidcAuthPage() {
  return (
    <main className="relative z-10 pt-32">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/platform" className="hover:text-primary transition-colors">Platform</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">OIDC Auth</span>
        </div>
      </div>
      {/* Hero Section */}
      <Section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-surface-container px-4 py-1.5 rounded-full border border-border-purple">
            <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
            <span className="font-caption text-caption uppercase tracking-widest text-primary">OIDC Protocol Enabled</span>
          </div>
          <h1 className="font-display-hero text-display-hero">
            Your Identity. <br />
            <span className="text-gradient">Your Way.</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-lg">
            OpenID Connect authentication. Connect your existing SSO — Google, GitHub, Microsoft, or custom OIDC providers. Secure, decentralized, and seamless.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-gradient-primary text-white font-label-navigation px-8 py-4 rounded-full neon-glow-purple active:scale-95 transition-all inline-block">
              Start Integrating
            </Link>
            <a href="https://github.com/BAWES-Universe" target="_blank" rel="noopener noreferrer" className="bg-surface-glass border border-white/20 text-on-surface font-label-navigation px-8 py-4 rounded-full hover:bg-white/10 active:scale-95 transition-all inline-block">
              View Docs
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-xl p-8 overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
              </div>
              <div className="text-caption font-caption text-text-low-emphasis">oidc-config.yaml</div>
            </div>
            <pre className="text-secondary font-mono text-sm leading-relaxed overflow-x-auto"><code>{`oidc:
  issuer: "https://auth.bawes.io"
  client_id: "universe-portal-v1"
  scopes: ["openid", "profile", "email"]
  mapping:
    roles: "custom:universe_roles"
    username: "preferred_username"
  security:
    pkce: true
    jwt_validation: strict`}</code></pre>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 glass-card px-6 py-4 rounded-xl flex items-center space-x-4">
            <div className="bg-primary-container/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">bolt</span>
            </div>
            <div>
              <div className="font-headline-card text-headline-card text-white">99.9%</div>
              <div className="font-caption text-caption text-text-low-emphasis uppercase">Auth Uptime</div>
            </div>
          </div>
        </div>
      </Section>

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

      {/* CTA */}
      <Section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v">
        <div className="glass-card rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-section text-headline-section mb-6">Ready to secure your world?</h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-10">Join 5,000+ developers building the future of decentralized identity on the BAWES Universe protocol.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-gradient-primary text-white font-label-navigation px-10 py-4 rounded-full neon-glow-purple active:scale-95 transition-all inline-block text-center">Get Started Free</Link>
              <Link href="https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer" target="_blank" rel="noopener noreferrer" className="glass-card text-on-surface font-label-navigation px-10 py-4 rounded-full hover:bg-white/5 active:scale-95 transition-all inline-block text-center">View Documentation</Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
        </div>
      </Section>
    </main>
  );
}
