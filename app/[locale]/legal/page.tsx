'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function LegalPage() {
  const t = useTranslations('legal');
  const tf = useTranslations('feature');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <main className="pt-20" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/about" className="hover:text-primary transition-colors">{t('breadcrumb')}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">{t('pageTitle')}</span>
        </div>
      </div>
            <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display-hero text-display-hero mb-6">
              <span className="text-gradient">{t('title')}</span><br />{t('titleGradient')}
            </h1>
            <p className="font-body-md text-body-md text-text-secondary max-w-lg mb-8">
              {t('desc')}
            </p>
            <div className="flex gap-4">
              <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                <span className="font-caption text-caption uppercase tracking-wider text-primary">{t('gdpr')}</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lock_open</span>
                <span className="font-caption text-caption uppercase tracking-wider text-primary">{t('mitLicensed')}</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden border-2 border-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-64 glass-card rounded-2xl rotate-[15deg] absolute -left-12 -top-12 border-white/10"></div>
                  <div className="w-48 h-64 glass-card rounded-2xl -rotate-[5deg] relative z-10 border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-primary animate-pulse" style={{ fontVariationSettings: "'wght' 200" }}>security</span>
                  </div>
                  <div className="w-48 h-64 glass-card rounded-2xl rotate-[25deg] absolute -right-12 -bottom-12 border-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Bento Grid */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">fingerprint</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('privacy')}</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              {t('privacyDesc')}
            </p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">gavel</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('terms')}</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              {t('termsDesc')}
            </p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('openSourceSection')}</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              {t('openSourceSectionDesc')}
            </p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">scale</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('fairUsage')}</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              {t('fairUsageDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="bg-surface-container/30 py-section-padding-v border-y border-purple overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-headline-section text-headline-section mb-4">{t('deepDives')}</h2>
              <p className="font-body-md text-body-md text-text-secondary">{t('deepDivesDesc')}</p>
            </div>
            <span className="material-symbols-outlined text-6xl text-primary/10 hidden md:block" style={{ fontVariationSettings: "'wght' 100" }}>explore</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/open-source" className="glass-card p-6 rounded-xl flex flex-col gap-4 group">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary">code</span>
                <span className="material-symbols-outlined text-text-low-emphasis group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">{isRtl ? 'north_west' : 'north_east'}</span>
              </div>
              <div>
                <h4 className="font-headline-card text-xl mb-1">Open Source</h4>
                <p className="font-caption text-caption text-text-secondary">{tf('exploreFeature')?.replace('→', '') || 'Explore our public repositories and contribute to the core.'}</p>
              </div>
            </Link>
            <Link href="/team" className="glass-card p-6 rounded-xl flex flex-col gap-4 group">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary">groups</span>
                <span className="material-symbols-outlined text-text-low-emphasis group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">{isRtl ? 'north_west' : 'north_east'}</span>
              </div>
              <div>
                <h4 className="font-headline-card text-xl mb-1">The Team</h4>
                <p className="font-caption text-caption text-text-secondary">Meet the architects, engineers, and visionaries building BAWES.</p>
              </div>
            </Link>
            <Link href="/features/self-hosting" className="glass-card p-6 rounded-xl flex flex-col gap-4 group">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary">dns</span>
                <span className="material-symbols-outlined text-text-low-emphasis group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">{isRtl ? 'north_west' : 'north_east'}</span>
              </div>
              <div>
                <h4 className="font-headline-card text-xl mb-1">Self-Hosting</h4>
                <p className="font-caption text-caption text-text-secondary">Deploy your own node and maintain complete sovereignty.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
