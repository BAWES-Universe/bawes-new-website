'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function UseCaseCommunityPage() {
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
          <span className="text-primary">{t('community')}</span>
        </div>
      </div>
      <section className="relative pt-32 pb-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
              {t('communityTitle')} <span className="text-gradient">{t('communityTitleGradient')}</span> {t('communityTitleEnd')}
            </h1>
            <p className="text-text-secondary text-lg max-w-xl">
              {t('communityDesc')}
            </p>
            <div className="flex gap-4 pt-4">
              <Button href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] px-8 py-4 rounded-full font-label-navigation text-white shadow-lg transition-transform hover:scale-105">
                {t('learnMore')}
              </Button>
              <Button href="/how-it-works" className="px-8 py-4 rounded-full font-label-navigation border border-white/30 text-white hover:bg-white/5 transition-all">
                {t('viewDemo')}
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative glass-card rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30">diversity_3</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-section text-headline-section">{t('howItWorks')}</h2>
          <p className="text-text-secondary">{t('communityDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
            </div>
            <h3 className="font-headline-card text-headline-card">{t('communityTitle')}</h3>
            <p className="text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
          <div className="glass-card p-8 rounded-xl space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            </div>
            <h3 className="font-headline-card text-headline-card">{t('communityTitleGradient')}</h3>
            <p className="text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
          <div className="glass-card p-8 rounded-xl space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>broadcast_on_home</span>
            </div>
            <h3 className="font-headline-card text-headline-card">{t('communityTitleEnd')}</h3>
            <p className="text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto bg-surface-container-low/30 rounded-[40px] border border-divider">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section">{tf('deepDives')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">map</span>
            <h4 className="font-headline-card text-[18px] mb-2">{t('communityTitle')}</h4>
            <p className="text-caption text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">smart_toy</span>
            <h4 className="font-headline-card text-[18px] mb-2">{t('communityTitleGradient')}</h4>
            <p className="text-caption text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">campaign</span>
            <h4 className="font-headline-card text-[18px] mb-2">{t('communityTitleEnd')}</h4>
            <p className="text-caption text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-on-primary-fixed-variant mb-4 text-3xl">forum</span>
            <h4 className="font-headline-card text-[18px] mb-2">{t('communityTitle')}</h4>
            <p className="text-caption text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-section text-headline-section mb-4">{t('examples')}</h2>
            <p className="text-text-secondary">{t('communityDesc')}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="relative glass-card rounded-2xl overflow-hidden mb-6 aspect-square flex items-center justify-center transition-all group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <span className="material-symbols-outlined text-6xl text-primary/30">sports_esports</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-2">{t('communityTitle')}</h3>
            <p className="text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative glass-card rounded-2xl overflow-hidden mb-6 aspect-square flex items-center justify-center transition-all group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <span className="material-symbols-outlined text-6xl text-secondary/30">auto_awesome</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-2">{t('communityTitleGradient')}</h3>
            <p className="text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative glass-card rounded-2xl overflow-hidden mb-6 aspect-square flex items-center justify-center transition-all group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <span className="material-symbols-outlined text-6xl text-tertiary/30">handshake</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-2">{t('communityTitleEnd')}</h3>
            <p className="text-text-low-emphasis">{t('communityDesc')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
