'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function UseCaseMarketPage() {
  const t = useTranslations('useCases');
  const tf = useTranslations('feature');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward';

  return (
    <main className="pt-20" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/use-cases" className="hover:text-primary transition-colors">{t('pageTitle')}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">{t('market')}</span>
        </div>
      </div>
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted">
            <Link href="/use-cases" className="hover:text-primary transition-colors">{t('pageTitle')}</Link>
            <span>/</span>
            <span className="text-primary">{t('market')}</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white tracking-tight">
            {t('marketTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">{t('marketTitleGradient')}</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            {t('marketDesc')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="https://universe.bawes.net" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-8 py-4 rounded-full shadow-lg active:scale-95 transition-all inline-block">
              {t('launchMarket')}
            </Link>
            <Link href="/features-overview" className="font-label-navigation px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all inline-block">
              {t('documentation')}
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">storefront</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* What This Enables */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">{t('market')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">storefront</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('marketFeatures')?.[0] || 'Brand Showrooms'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('marketDesc')}</p>
            <div className="mt-6">
              <Link href="/features/proximity-chat" className="text-primary font-bold inline-flex items-center gap-2 text-sm group/link">
                {tf('learnMore')} <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">{arrowIcon}</span>
              </Link>
            </div>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">{t('marketFeatures')?.[3] || 'Live Demos'}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t('marketDesc')}</p>
          </div>
        </div>
      </section>

      {/* Tool-Agnostic Commerce */}
      <section className="bg-surface-container-lowest/50 py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-white">{t('learnMore')}</h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-2xl mx-auto">{t('marketDesc')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">shopping_cart</span>
              <span className="text-sm font-semibold">Shopify</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">settings_input_component</span>
              <span className="text-sm font-semibold">Custom Stack</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
              <span className="text-sm font-semibold">Booking Platforms</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">confirmation_number</span>
              <span className="text-sm font-semibold">Ticketing Tools</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">payments</span>
              <span className="text-sm font-semibold">Payment Providers</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">build</span>
              <span className="text-sm font-semibold">Existing Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works in practice */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">{t('howItWorks')}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">{t('marketDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">store</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">{t('marketFeatures')?.[0] || 'Brand Showroom'}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t('marketDesc')}</p>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">school</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">{t('marketFeatures')?.[1] || 'Social Shopping'}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t('marketDesc')}</p>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-20 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-white opacity-30">campaign</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">{t('marketFeatures')?.[2] || 'Pop-up Market'}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t('marketDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="glass-card rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-display-hero text-headline-section md:text-display-hero text-white max-w-3xl mx-auto">
              {t('marketTitle')} {t('marketTitleGradient')}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-10 py-5 rounded-full shadow-lg active:scale-95 transition-all text-lg inline-block">
                {t('launchMarket')}
              </Link>
              <Link href="/contact" className="font-label-navigation px-10 py-5 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all text-lg inline-block">
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
