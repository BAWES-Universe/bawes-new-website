'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function TeamPage() {
  const t = useTranslations('team');
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
            <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v grid md:grid-cols-2 items-center gap-gutter">
        <div className="space-y-6">
          <h1 className="font-display-hero text-display-hero text-on-surface leading-tight">
            {t('heroTitle')} <span className="text-gradient">{t('heroTitleGradient')}</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-lg">
            {t('heroDesc')}
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-navigation font-bold neon-glow-purple active:scale-95 transition-transform inline-block">
              {t('meetCore')}
            </Link>
            <Link href="/manifesto" className="glass-card px-8 py-3 rounded-full font-label-navigation text-on-surface active:scale-95 transition-transform inline-block">
              {t('readManifesto')}
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-75 animate-pulse"></div>
          <div className="w-full max-w-md animate-float relative z-10 glass-card rounded-2xl aspect-square flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">diversity_3</span>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-4">{t('philosophy')}</h2>
          <p className="text-text-low-emphasis font-body-md">{t('philosophyDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary">code</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">{t('openSource')}</h3>
            <p className="font-body-md text-text-secondary text-sm">{t('openSourceDesc')}</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">{t('aiNative')}</h3>
            <p className="font-body-md text-text-secondary text-sm">{t('aiNativeDesc')}</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary">groups</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">{t('communityDriven')}</h3>
            <p className="font-body-md text-text-secondary text-sm">{t('communityDrivenDesc')}</p>
          </div>
          <div className="glass-card p-card-padding rounded-xl flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary">security</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">{t('privacyRespecting')}</h3>
            <p className="font-body-md text-text-secondary text-sm">{t('privacyRespectingDesc')}</p>
          </div>
        </div>
      </section>

      {/* Open Source Commitment */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v">
        <div className="glass-card rounded-3xl p-12 overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[60px] -mr-32 -mt-32"></div>
          <div className="max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {t('commitmentLabel')}
            </div>
            <h2 className="font-headline-section text-headline-section text-on-surface mb-6">{t('commitment')}</h2>
            <p className="font-body-md text-text-secondary text-lg leading-relaxed mb-8">
              {t('commitmentDesc')}
            </p>
            <Link href="/workadventure-fork" className="inline-flex items-center gap-2 text-primary hover:underline font-bold transition-all">
              {t('viewRepo')} <span className="material-symbols-outlined text-sm">{isRtl ? 'arrow_back' : 'arrow_forward'}</span>
            </Link>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 glass-card rounded-2xl flex items-center justify-center p-8 border-primary/30">
              <span className="material-symbols-outlined text-6xl text-primary/50">code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-v mb-12">
        <div className="flex items-center justify-between mb-10">
          <h3 className="font-headline-card text-headline-card text-on-surface">{t('deepDives')}</h3>
          <div className="h-px flex-grow mx-8 bg-gradient-to-r from-border-purple to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link href="/open-source" className="glass-card p-6 rounded-xl flex justify-between items-center group hover:translate-x-1">
            <span className="font-headline-card text-body-md text-on-surface">Open Source</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">{isRtl ? 'chevron_left' : 'chevron_right'}</span>
          </Link>
          <Link href="/workadventure-fork" className="glass-card p-6 rounded-xl flex justify-between items-center group hover:translate-x-1">
            <span className="font-headline-card text-body-md text-on-surface">WorkAdventure Fork</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">{isRtl ? 'chevron_left' : 'chevron_right'}</span>
          </Link>
          <Link href="/legal" className="glass-card p-6 rounded-xl flex justify-between items-center group hover:translate-x-1">
            <span className="font-headline-card text-body-md text-on-surface">{tf('legal') || 'Legal'}</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">{isRtl ? 'chevron_left' : 'chevron_right'}</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
