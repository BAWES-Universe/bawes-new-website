'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function UseCaseEventsPage() {
  const t = useTranslations('useCases');
  const tf = useTranslations('feature');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward';

  return (
    <main className="pt-20" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/use-cases" className="hover:text-primary transition-colors">{t('pageTitle')}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">{t('events')}</span>
        </div>
      </div>
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted">
            <Link href="/use-cases" className="hover:text-primary transition-colors">{t('pageTitle')}</Link>
            <span>/</span>
            <span className="text-primary">{t('events')}</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white tracking-tight">
            {t('eventsTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">{t('eventsTitleGradient')}</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            {t('eventsDesc')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-8 py-4 rounded-full shadow-lg active:scale-95 transition-all inline-block">
              {t('viewDemo')}
            </Link>
            <Link href="/features/broadcasting" className="font-label-navigation px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all inline-block">
              {tf('learnMore')}
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">podcasts</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* Event Types */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">{t('events')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">campaign</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('eventsFeatures')?.[0] || 'Stage + audience layout'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('eventsDesc')}</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-3xl">music_note</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('eventsFeatures')?.[1] || 'Megaphone broadcasting'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('eventsDesc')}</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary border border-tertiary/20">
              <span className="material-symbols-outlined text-3xl">diversity_3</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('eventsFeatures')?.[2] || 'Sponsor halls and expo floors'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('eventsDesc')}</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-container-lowest/50 py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-white mb-4">{t('howItWorks')}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{t('eventsDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">map</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[0] || 'Build the Venue'}</h3>
              <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">podcasts</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[1] || 'Set Up Broadcasting'}</h3>
              <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">confirmation_number</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[2] || 'Manage Access'}</h3>
              <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">monitoring</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[3] || 'Go Live'}</h3>
              <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary/5 to-secondary/5 p-12 md:p-16 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-purple-300 border border-purple-500/20">
                <span className="material-symbols-outlined text-sm">podcasts</span>
                {t('examples')}
              </div>
              <h2 className="font-headline-section text-headline-section text-white">
                {t('eventsTitle')} {t('eventsTitleGradient')}
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                {t('eventsDesc')}
              </p>
              <Link href="/features/broadcasting" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                {tf('learnMore')} <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">{arrowIcon}</span>
              </Link>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/20">rss_feed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">{tf('relatedFeatures')}</h2>
          <p className="text-on-surface-variant">{t('eventsDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link href="/features/proximity-chat" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">forum</span>
            <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[3] || 'Networking Lounges'}</h3>
            <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">{tf('learnMore')} <span className="material-symbols-outlined text-sm">{arrowIcon}</span></span>
          </Link>
          <Link href="/features/megaphone" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
            <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[1] || 'Megaphone'}</h3>
            <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">{tf('learnMore')} <span className="material-symbols-outlined text-sm">{arrowIcon}</span></span>
          </Link>
          <Link href="/features/maps" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">map</span>
            <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[0] || 'Maps'}</h3>
            <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">{tf('learnMore')} <span className="material-symbols-outlined text-sm">{arrowIcon}</span></span>
          </Link>
          <Link href="/features/bot-behaviors" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            <h3 className="font-headline-card text-headline-card text-white">{t('eventsFeatures')?.[3] || 'Bot Behaviors'}</h3>
            <p className="text-on-surface-variant text-sm">{t('eventsDesc')}</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">{tf('learnMore')} <span className="material-symbols-outlined text-sm">{arrowIcon}</span></span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding-v">
        <div className="glass-card rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-display-hero text-headline-section md:text-display-hero text-white max-w-3xl mx-auto">
              {t('eventsTitle')} {t('eventsTitleGradient')}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-10 py-5 rounded-full shadow-lg active:scale-95 transition-all text-lg inline-block">
                {t('viewDemo')}
              </Link>
              <Link href="/features/broadcasting" className="font-label-navigation px-10 py-5 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all text-lg inline-block">
                {tf('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
