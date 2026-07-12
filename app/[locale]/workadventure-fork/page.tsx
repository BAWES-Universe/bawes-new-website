'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function WorkAdventureForkPage() {
  const t = useTranslations('workadventureFork');
  const tf = useTranslations('feature');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward';

  return (
    <main className="relative pt-20" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/developers" className="hover:text-primary transition-colors">{t('breadcrumb')}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">{t('pageTitle')}</span>
        </div>
      </div>
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center min-h-[700px]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple">
            <span className="material-symbols-outlined text-sm text-primary">fork_left</span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">{t('label')}</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            {t('title')} <span className="text-gradient">{t('titleGradient')}</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-xl">
            {t('desc')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/BAWES-Universe" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-8 py-4 rounded-full font-bold neon-glow-purple active:scale-95 transition-all flex items-center gap-2">
              {t('viewGitHub')}
              <span className="material-symbols-outlined">{arrowIcon}</span>
            </a>
            <a href="https://workadventu.re/" target="_blank" rel="noopener noreferrer" className="glass-card text-on-surface px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
              {t('viewProject')}
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all"></div>
          <div className="relative glass-card rounded-2xl p-4 overflow-hidden border-white/10">
            <div className="aspect-video rounded-xl bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30">account_tree</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">{t('philosophyTitle')}</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">{t('philosophyDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">{t('builtOn')}</h3>
              <p className="text-text-secondary">{t('builtOnDesc')}</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">auto_awesome</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">{t('extendedFeatureSet')}</h3>
              <p className="text-text-secondary">{t('extendedFeatureSetDesc')}</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">sync</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">{t('upstreamAlignment')}</h3>
              <p className="text-text-secondary">{t('upstreamAlignmentDesc')}</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">diversity_3</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">{t('communityEvolution')}</h3>
              <p className="text-text-secondary">{t('communityEvolutionDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">{t('related')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/about" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">groups</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">{t('aboutUs')}</h3>
            <p className="text-text-secondary text-sm">{t('aboutUsDesc')}</p>
          </Link>
          <Link href="/features/self-hosting" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">dns</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-secondary transition-colors">{t('selfHosting')}</h3>
            <p className="text-text-secondary text-sm">{t('selfHostingDesc')}</p>
          </Link>
          <Link href="/features/white-label" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">palette</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-tertiary transition-colors">{t('whiteLabel')}</h3>
            <p className="text-text-secondary text-sm">{t('whiteLabelDesc')}</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v text-center">
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-6">{t('ctaTitle')}</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">{t('ctaDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/BAWES-Universe" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-10 py-4 rounded-full font-bold neon-glow-purple active:scale-95 transition-all">{t('exploreRepos')}</a>
            <a href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="glass-card text-on-surface px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all">{t('contributingGuide')}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
