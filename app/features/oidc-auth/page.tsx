'use client';

import React from 'react';
import Section from '@/components/Section';
import Link from 'next/link';

export default function OidcAuthPage() {
  return (
    <main className="relative z-10 pt-20">
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
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-surface-container px-4 py-1.5 rounded-full border border-border-purple">
            <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
            <span className="font-caption text-caption uppercase tracking-widest text-primary">OIDC Protocol Enabled</span>
          </div>
          <h1 className="font-display-hero text-display-hero">
            Your Identity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Your Way.</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-lg">
            OpenID Connect authentication with Authorization Code flow and PKCE. Connect Google, GitHub, Microsoft, or any standard OIDC provider.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-gradient-primary text-white font-label-navigation px-8 py-4 rounded-full neon-glow-purple active:scale-95 transition-all inline-block">
              Start Integrating
            </Link>
            <a href="https://github.com/BAWES-Universe/workadventure-universe/blob/master/docs/others/self-hosting/openid.md" target="_blank" rel="noopener noreferrer" className="bg-surface-glass border border-white/20 text-on-surface font-label-navigation px-8 py-4 rounded-full hover:bg-white/10 active:scale-95 transition-all inline-block">
              View Docs
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-xl overflow-hidden group">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface-dim/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="ml-3 text-xs text-text-low-emphasis font-mono">.env — OIDC Configuration</span>
            </div>
            {/* Code content */}
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto font-mono bg-surface-dim/40" dangerouslySetInnerHTML={{
              __html: `<span class="text-purple-400"># OpenID Connect Provider</span>
<span class="text-purple-300">OPENID_CLIENT_ISSUER</span>=<span class="text-amber-300">https://accounts.google.com</span>
<span class="text-purple-300">OPENID_CLIENT_ID</span>=<span class="text-amber-300">your-client-id.apps.googleusercontent.com</span>
<span class="text-purple-300">OPENID_CLIENT_SECRET</span>=<span class="text-amber-300">GOCSPX-********</span>
<span class="text-purple-300">OPENID_PROMPT</span>=<span class="text-amber-300">consent</span>

<span class="text-purple-400"># Claim mapping</span>
<span class="text-purple-300">OPENID_USERNAME_CLAIM</span>=<span class="text-amber-300">preferred_username</span>
<span class="text-purple-300">OPENID_LOCALE_CLAIM</span>=<span class="text-amber-300">locale</span>
<span class="text-purple-300">OPENID_SCOPE</span>=<span class="text-amber-300">openid email profile</span>

<span class="text-purple-400"># PKCE is enabled by default</span>
<span class="text-purple-400"># Redirect URL: https://play.yourdomain.com/openid-callback</span>`
            }} />
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <Section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section mb-4">Enterprise Grade Auth</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-secondary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">group</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">SSO Integration</h3>
            <p className="text-text-secondary text-sm">One-click login with Google, GitHub, Microsoft, or any OIDC provider. Authorization Code flow with PKCE.</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-primary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">hub</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">Custom OIDC Providers</h3>
            <p className="text-text-secondary text-sm">Bring your own identity server. Supports any standard OpenID Connect endpoint with configurable scopes and claims.</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-tertiary-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary">fork_right</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">Role Mapping</h3>
            <p className="text-text-secondary text-sm">Map identity provider claims to universe roles using configurable claim attributes for usernames and locale.</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start">
            <div className="bg-error-container/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-error">lock_open</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-3">Secure by Default</h3>
            <p className="text-text-secondary text-sm">Authorization Code flow with PKCE. JWT validation, state parameter protection, and code verifier challenge.</p>
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
            <p className="text-text-secondary text-sm">Deploy the full OIDC stack on your own infrastructure with Docker or Kubernetes.</p>
          </Link>
          <Link href="/features/admin-api" className="group cursor-pointer">
            <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden glass-card">
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-secondary/30">api</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <h4 className="font-headline-card text-headline-card mb-2 group-hover:text-primary transition-colors">Admin API</h4>
            <p className="text-text-secondary text-sm">Manage OIDC provider configurations and user mappings programmatically.</p>
          </Link>
          <Link href="/features/white-label" className="group cursor-pointer">
            <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden glass-card">
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-tertiary/30">palette</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <h4 className="font-headline-card text-headline-card mb-2 group-hover:text-primary transition-colors">White Label</h4>
            <p className="text-text-secondary text-sm">Customize the auth flow with your own branding, logos, and custom domains.</p>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v">
        <div className="glass-card rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-section text-headline-section mb-6">Ready to secure your world?</h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-10">Connect your identity provider and get started with OIDC authentication in minutes.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-gradient-primary text-white font-label-navigation px-10 py-4 rounded-full neon-glow-purple active:scale-95 transition-all inline-block text-center">Get Started Free</Link>
              <a href="https://github.com/BAWES-Universe/workadventure-universe/blob/master/docs/others/self-hosting/openid.md" target="_blank" rel="noopener noreferrer" className="glass-card text-on-surface font-label-navigation px-10 py-4 rounded-full hover:bg-white/5 active:scale-95 transition-all inline-block text-center">View Documentation</a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
        </div>
      </Section>
    </main>
  );
}
