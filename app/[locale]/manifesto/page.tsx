'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function ManifestoPage() {
  const t = useTranslations('manifesto');
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
            <section className="relative max-w-container-max mx-auto px-gutter mb-section-padding-v text-center">
        <h1 className="font-display-hero text-display-hero md:text-display-hero text-display-hero-mobile font-bold tracking-tight mb-12">
          {t('title')}
        </h1>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="font-headline-section text-headline-section md:text-headline-section text-headline-section leading-tight text-on-background/90">
            {t('tagline')}
          </p>
        </div>
        <div className="glass-card p-10 rounded-2xl max-w-2xl mx-auto border-purple inline-block">
          <p className="font-headline-card text-headline-card italic text-primary">
            &ldquo;{t('quote')}&rdquo;
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="mb-16">
          <h2 className="font-headline-section text-headline-section mb-4">{t('principlesTitle')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('openByDefault')}</h3>
            <p className="text-text-secondary">{t('openByDefaultDesc')}</p>
          </div>
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 mb-6">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('spatial')}</h3>
            <p className="text-text-secondary">{t('spatialDesc')}</p>
          </div>
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('toolAgnostic')}</h3>
            <p className="text-text-secondary">{t('toolAgnosticDesc')}</p>
          </div>
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 mb-6">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">{t('execution')}</h3>
            <p className="text-text-secondary">{t('executionDesc')}</p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="glass-card p-12 rounded-3xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-headline-section text-headline-section mb-6">{t('whoWeAre')}</h2>
              <div className="space-y-6 text-text-secondary font-body-md text-lg leading-relaxed">
                <p>{t('whoWeAreDesc')}</p>
                <p>{t('forkCredit')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border-purple shadow-2xl rotate-3 bg-surface-container-high flex items-center justify-center aspect-video">
              <span className="material-symbols-outlined text-6xl text-primary/30">public</span>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v text-center">
        <div className="py-20 px-10 glass-card rounded-[40px] border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="font-headline-section text-headline-section mb-6">{t('emptySeat')}</h2>
          <p className="font-body-md text-body-md max-w-2xl mx-auto text-text-secondary mb-12">
            {t('emptySeatDesc')}
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-10 py-4 rounded-full font-headline-card hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto w-fit">
            {t('joinConversation')}
            <span className="material-symbols-outlined">{isRtl ? 'arrow_back' : 'arrow_forward'}</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
