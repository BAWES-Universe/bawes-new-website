'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function UseCaseCommercePage() {
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
          <span className="text-primary">{t('commerce')}</span>
        </div>
      </div>
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted">
            <Link href="/use-cases" className="hover:text-primary transition-colors">{t('pageTitle')}</Link>
            <span>/</span>
            <span className="text-primary">{t('commerce')}</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white tracking-tight">
            {t('commerceTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">{t('commerceTitleGradient')}</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            {t('commerceDesc')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-8 py-4 rounded-full shadow-lg active:scale-95 transition-all inline-block">
              {t('viewDemo')}
            </Link>
            <Link href="/how-it-works" className="font-label-navigation px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all inline-block">
              {t('learnMore')}
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">payments</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* Revenue Models */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">{t('commerce')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">subscriptions</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('commerceFeatures')?.[0] || 'Subscriptions'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('commerceDesc')}</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-3xl">confirmation_number</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('commerceFeatures')?.[1] || 'Ticketed Events'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('commerceDesc')}</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary border border-tertiary/20">
              <span className="material-symbols-outlined text-3xl">sell</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('commerceFeatures')?.[2] || 'Service Fees'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('commerceDesc')}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container-lowest/50 py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-white mb-4">{t('howItWorks')}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{t('commerceDesc')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">shopping_cart</span>
              <span className="text-sm font-semibold">Stripe</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">payments</span>
              <span className="text-sm font-semibold">Shopify</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">confirmation_number</span>
              <span className="text-sm font-semibold">TicketMaster API</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">link</span>
              <span className="text-sm font-semibold">Payment Links</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">build</span>
              <span className="text-sm font-semibold">Custom APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">{t('examples')}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">{t('commerceDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">school</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">{t('commerceFeatures')?.[0] || 'Premium Access'}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t('commerceDesc')}</p>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">celebration</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">{t('commerceFeatures')?.[1] || 'Ticketed Events'}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t('commerceDesc')}</p>
              <Link href="/features/broadcasting" className="text-primary font-bold inline-flex items-center gap-2 text-sm group/link">
                {tf('learnMore')} <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">{arrowIcon}</span>
              </Link>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">groups</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">{t('commerceFeatures')?.[3] || 'Community Membership'}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t('commerceDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Links */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding-v">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary/5 to-secondary/5 p-12 md:p-16 border border-primary/10">
          <div className="text-center mb-10">
            <h2 className="font-headline-section text-headline-section text-white mb-4">{tf('relatedFeatures')}</h2>
            <p className="text-on-surface-variant">{t('commerceDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/features/bot-tools" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl">construction</span>
              <h3 className="font-headline-card text-headline-card text-white">{t('commerceFeatures')?.[0] || 'Bot Tool Calling'}</h3>
              <p className="text-on-surface-variant text-sm">{t('commerceDesc')}</p>
              <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">{tf('learnMore')} <span className="material-symbols-outlined text-sm">{arrowIcon}</span></span>
            </Link>
            <Link href="/features/bot-memory" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl">memory</span>
              <h3 className="font-headline-card text-headline-card text-white">{t('commerceFeatures')?.[1] || 'Bot Memory'}</h3>
              <p className="text-on-surface-variant text-sm">{t('commerceDesc')}</p>
              <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">{tf('learnMore')} <span className="material-symbols-outlined text-sm">{arrowIcon}</span></span>
            </Link>
            <Link href="/features/self-hosting" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl">dns</span>
              <h3 className="font-headline-card text-headline-card text-white">{t('commerceFeatures')?.[2] || 'Self-Hosting'}</h3>
              <p className="text-on-surface-variant text-sm">{t('commerceDesc')}</p>
              <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">{tf('learnMore')} <span className="material-symbols-outlined text-sm">{arrowIcon}</span></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
