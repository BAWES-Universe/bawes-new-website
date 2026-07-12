'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward';

  return (
    <main className="pt-32 pb-section-padding-v max-w-container-max mx-auto px-margin-mobile md:px-gutter" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center mb-section-padding-v">
        <div className="space-y-6">
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">{t('title')}</h1>
          <p className="text-text-secondary text-lg max-w-lg">
            {t('desc')}
          </p>
        </div>
        <div className="relative flex justify-end">
          <div className="w-full max-w-lg aspect-square rounded-2xl overflow-hidden glass-card p-2">
            <div className="w-full h-full rounded-xl shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30">forum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
        {/* Main Form Card */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 md:p-12">
          <h2 className="font-headline-section text-headline-section mb-12">{t('getInTouch')}</h2>
          <form className="space-y-8" action="/contact" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="font-label-navigation text-label-navigation text-text-secondary px-1">{t('name')}</label>
                <input id="name" name="name" className="w-full bg-surface-container-lowest border border-border-purple rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-low-emphasis" placeholder={isRtl ? 'الاسم الكامل' : 'First and last name'} type="text" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-label-navigation text-label-navigation text-text-secondary px-1">{t('email')}</label>
                <input id="email" name="email" className="w-full bg-surface-container-lowest border border-border-purple rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-low-emphasis" placeholder="your@email.com" type="email" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-label-navigation text-label-navigation text-text-secondary px-1">{t('message')}</label>
              <textarea id="message" name="message" className="w-full bg-surface-container-lowest border border-border-purple rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-low-emphasis resize-none" placeholder={isRtl ? 'صِف مشروعك، فكرتك، أو تحدّيك...' : 'Describe your project, idea, or challenge...'} rows={4} required></textarea>
            </div>
            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <button type="submit" className="bg-gradient-to-r from-[#a078ff] to-[#d0bcff] text-on-primary-container px-12 py-4 rounded-full font-bold text-lg active:scale-95 transition-transform w-full md:w-auto shadow-lg">
                {t('send')}
              </button>
              <div className="flex items-center gap-4 text-text-secondary">
                <span className="text-caption font-caption">{t('getInTouch')}</span>
                <a href="https://discord.gg/CXceJWnwNT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-border-purple hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                  <span className="text-label-navigation font-label-navigation">Discord</span>
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-gutter">
          <div className="glass-card rounded-2xl p-8 hover:translate-y-[-2px] transition-transform group">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
              <h3 className="font-headline-card text-on-surface">{t('enterUniverse')}</h3>
            </div>
            <p className="text-text-secondary mb-8 font-body-md">
              {t('botHelp')}
            </p>
            <a href="https://universe.bawes.net" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#a078ff] to-[#d0bcff] text-on-primary-container px-6 py-3 rounded-full font-bold active:scale-95 transition-transform shadow-lg inline-block text-center">
              {t('enterUniverse')}
            </a>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:translate-y-[-2px] transition-transform group border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              <h3 className="font-headline-card text-on-surface">{t('customWork')}</h3>
            </div>
            <p className="text-text-secondary mb-8 font-body-md">
              {t('customWorkDesc')}
            </p>
            <a href="mailto:contact@bawes.net" className="w-full bg-transparent border border-white/30 text-on-surface px-6 py-3 rounded-full font-bold hover:border-white/60 transition-colors active:scale-95 inline-block text-center">
              {t('talkToUs')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
