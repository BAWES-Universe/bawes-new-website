'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');
  const tf = useTranslations('feature');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward';

  const heroLabels = t.raw('heroLabels') as string[];

  return (
    <main className="relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* HERO SECTION */}
      <section className="pt-40 pb-section-padding-v px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {heroLabels?.map((label: string, i: number) => (
                <span key={i} className="glass-card px-4 py-1.5 rounded-full text-caption font-label-navigation text-primary">{label}</span>
              ))}
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white leading-none">
              {t('title')} <span className="text-gradient">{t('titleGradient')}</span>
            </h1>
            <p className="font-body-md text-body-md text-text-secondary max-w-xl">
              {t('desc')}
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative rounded-3xl overflow-hidden glass-card aspect-video border-2 border-white/10 flex items-center justify-center">
              <div className="z-10 bg-black/40 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 border border-white/10">
                <span className="material-symbols-outlined text-primary text-4xl">play_circle</span>
                <span className="font-semibold text-white">{t('watchVideo')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ORBIT */}
      <section className="py-section-padding-v px-gutter max-w-container-max mx-auto border-t border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">explore</span>
                <h4 className="font-headline-card text-headline-card">{t('discover')}</h4>
                <p className="text-caption text-text-secondary">{t('discoverDesc')}</p>
              </div>
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
                <h4 className="font-headline-card text-headline-card">{t('orient')}</h4>
                <p className="text-caption text-text-secondary">{t('orientDesc')}</p>
              </div>
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
                <h4 className="font-headline-card text-headline-card">{t('jump')}</h4>
                <p className="text-caption text-text-secondary">{t('jumpDesc')}</p>
              </div>
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">group</span>
                <h4 className="font-headline-card text-headline-card">{t('connect')}</h4>
                <p className="text-caption text-text-secondary">{t('connectDesc')}</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">{t('orbit')}</span>
            <h2 className="font-headline-section text-headline-section text-white">{t('orbitTitle')}</h2>
            <p className="font-body-md text-body-md text-text-secondary">
              {t('orbitDesc')}
            </p>
            <ul className="space-y-4">
              {(t.raw('orbitChecks') as string[])?.map((check: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md">{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE STRUCTURE */}
      <section className="py-section-padding-v px-gutter bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">{t('hierarchyTitle')}</span>
            <h2 className="font-headline-section text-headline-section text-white">{t('hierarchySubtitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">public</span>
              </div>
              <div className="mb-8 w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-3xl">public</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white mb-4">{t('universes')}</h3>
              <p className="font-body-md text-text-secondary flex-grow mb-8">
                {t('universesDesc')}
              </p>
              <div className="pt-6 border-t border-divider">
                <span className="text-caption text-primary font-semibold block mb-2">{t('examples') || 'EXAMPLES'}</span>
                <p className="text-caption text-text-low-emphasis">{t('universesExamples')}</p>
              </div>
            </div>
            <div className="glass-card p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">language</span>
              </div>
              <div className="mb-8 w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">language</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white mb-4">{t('worlds')}</h3>
              <p className="font-body-md text-text-secondary flex-grow mb-8">
                {t('worldsDesc')}
              </p>
              <div className="pt-6 border-t border-divider">
                <span className="text-caption text-secondary font-semibold block mb-2">{t('examples') || 'EXAMPLES'}</span>
                <p className="text-caption text-text-low-emphasis">{t('worldsExamples')}</p>
              </div>
            </div>
            <div className="glass-card p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">meeting_room</span>
              </div>
              <div className="mb-8 w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">meeting_room</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white mb-4">{t('rooms')}</h3>
              <p className="font-body-md text-text-secondary flex-grow mb-8">
                {t('roomsDesc')}
              </p>
              <div className="pt-6 border-t border-divider">
                <span className="text-caption text-tertiary font-semibold block mb-2">{t('examples') || 'EXAMPLES'}</span>
                <p className="text-caption text-text-low-emphasis">{t('roomsExamples')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MAPS & TEMPLATES */}
      <section className="py-section-padding-v px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-32 space-y-6">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">{t('mapsTitle')}</span>
            <h2 className="font-headline-section text-headline-section text-white">{t('mapsSectionTitle')}</h2>
            <p className="font-body-md text-body-md text-text-secondary">
              {t('mapsDesc')}
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
              <div className="aspect-video bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-primary/30">business</span>
              </div>
              <div className="p-4">
                <h4 className="font-headline-card text-headline-card text-white">{t('officeLayout')}</h4>
                <p className="text-xs text-text-muted mt-1">{t('officeLayoutDesc')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
              <div className="aspect-video bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-secondary/30">school</span>
              </div>
              <div className="p-4">
                <h4 className="font-headline-card text-headline-card text-white">{t('classroomLayout')}</h4>
                <p className="text-xs text-text-muted mt-1">{t('classroomLayoutDesc')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
              <div className="aspect-video bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-tertiary/30">theater_comedy</span>
              </div>
              <div className="p-4">
                <h4 className="font-headline-card text-headline-card text-white">{t('eventHallLayout')}</h4>
                <p className="text-xs text-text-muted mt-1">{t('eventHallLayoutDesc')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
              <div className="aspect-video bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-primary/30">diversity_3</span>
              </div>
              <div className="p-4">
                <h4 className="font-headline-card text-headline-card text-white">{t('communityHub')}</h4>
                <p className="text-xs text-text-muted mt-1">{t('communityHubDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMUNICATION */}
      <section className="py-section-padding-v px-gutter bg-surface-container">
        <div className="max-w-container-max mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">{t('communicationTitle')}</span>
            <h2 className="font-headline-section text-headline-section text-white">{t('communicationSubtitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">spatial_audio_off</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">{t('proximityChat')}</h4>
                <p className="text-body-md text-text-secondary text-sm">{t('proximityChatDesc')}</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-2xl">call</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">{t('phoneChat')}</h4>
                <p className="text-body-md text-text-secondary text-sm">{t('phoneChatDesc')}</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-2xl">forum</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">{t('textChat')}</h4>
                <p className="text-body-md text-text-secondary text-sm">{t('textChatDesc')}</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-2xl">campaign</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">{t('megaphone')}</h4>
                <p className="text-body-md text-text-secondary text-sm">{t('megaphoneDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEMBERSHIP */}
      <section className="py-section-padding-v px-gutter max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-primary font-bold tracking-widest text-caption uppercase">{t('membershipTitle')}</span>
          <h2 className="font-headline-section text-headline-section text-white">{t('membershipSubtitle')}</h2>
          <p className="font-body-md text-body-md text-text-secondary">
            {t('membershipDesc')}
          </p>
        </div>
      </section>

      {/* SECTION 6: EDITORS */}
      <section className="py-section-padding-v px-gutter bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <Link href="/features/map-editor" className="glass-card p-12 rounded-[40px] space-y-8 group cursor-pointer">
            <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
              <span className="material-symbols-outlined text-primary text-5xl">architecture</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline-section text-white">{t('mapEditor')}</h3>
              <p className="font-body-md text-text-secondary">
                {t('mapEditorDesc')}
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
              {t('exploreMapEditing')} <span className="material-symbols-outlined">{arrowIcon}</span>
            </div>
          </Link>
          <Link href="/features/area-zones" className="glass-card p-12 rounded-[40px] space-y-8 group cursor-pointer">
            <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center transition-all group-hover:scale-110">
              <span className="material-symbols-outlined text-secondary text-5xl">admin_panel_settings</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline-section text-white">{t('areaEditor')}</h3>
              <p className="font-body-md text-text-secondary">
                {t('areaEditorDesc')}
              </p>
            </div>
            <div className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all">
              {t('managePermissions')} <span className="material-symbols-outlined">{arrowIcon}</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-gutter">
        <div className="max-w-container-max mx-auto relative overflow-hidden glass-card rounded-[60px] p-20 text-center space-y-8">
          <div className="relative z-10 space-y-6">
            <h2 className="font-display-hero text-display-hero-mobile md:text-headline-section text-white">{t('ctaTitle')}</h2>
            <p className="text-body-md text-text-secondary max-w-xl mx-auto">
              {t('ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-bold px-12 py-5 rounded-full text-lg shadow-lg shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all inline-block">
                {t('getStarted')}
              </Link>
              <Link href="/contact" className="glass-card text-white font-bold px-12 py-5 rounded-full text-lg border border-white/20 hover:bg-white/10 active:scale-95 transition-all inline-block">
                {t('requestDemo')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
