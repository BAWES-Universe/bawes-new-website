'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-section-padding-v max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center mb-section-padding-v">
        <div className="space-y-6">
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">Talk to us.</h1>
          <p className="text-text-secondary text-lg max-w-lg">
            Sometimes you don&apos;t need a product. You need clarity, structure, or help executing something real. We work with founders, teams, students, and organizations, intentionally and hands-on.
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
          <h2 className="font-headline-section text-headline-section mb-12">Get in touch</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label-navigation text-label-navigation text-text-secondary px-1">Your name</label>
                <input className="w-full bg-surface-container-lowest border border-border-purple rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-low-emphasis" placeholder="First and last name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-navigation text-label-navigation text-text-secondary px-1">your@email.com</label>
                <input className="w-full bg-surface-container-lowest border border-border-purple rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-low-emphasis" placeholder="example@provider.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-navigation text-label-navigation text-text-secondary px-1">Tell us about your project, idea, or challenge...</label>
              <textarea className="w-full bg-surface-container-lowest border border-border-purple rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-low-emphasis resize-none" placeholder="Describe what you're working on..." rows={4}></textarea>
            </div>
            <div className="space-y-2">
              <label className="font-label-navigation text-label-navigation text-text-secondary px-1">Any additional details, timeline, or context...</label>
              <textarea className="w-full bg-surface-container-lowest border border-border-purple rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-low-emphasis resize-none" placeholder="Timeline, budget range, or specific needs..." rows={3}></textarea>
            </div>
            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <Button className="bg-gradient-to-r from-[#a078ff] to-[#d0bcff] text-on-primary-container px-12 py-4 rounded-full font-bold text-lg active:scale-95 transition-transform w-full md:w-auto shadow-lg" type="submit">
                Send message
              </Button>
              <div className="flex items-center gap-4 text-text-secondary">
                <span className="text-caption font-caption">Prefer to connect another way?</span>
                <Link href="#" className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-border-purple hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                  <span className="text-label-navigation font-label-navigation">Join Discord</span>
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-gutter">
          <div className="glass-card rounded-2xl p-8 hover:translate-y-[-2px] transition-transform group">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
              <h3 className="font-headline-card text-on-surface">Already in Universe?</h3>
            </div>
            <p className="text-text-secondary mb-8 font-body-md">
              Our bots and team members are on Universe daily. If you&apos;re already in a universe, just ask a bot for help or look for a team member. We&apos;re happy to assist with anything — setup, custom use cases, deployment, or just a chat.
            </p>
            <Button className="w-full bg-gradient-to-r from-[#a078ff] to-[#d0bcff] text-on-primary-container px-6 py-3 rounded-full font-bold active:scale-95 transition-transform shadow-lg">
              Enter the Universe
            </Button>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:translate-y-[-2px] transition-transform group border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              <h3 className="font-headline-card text-on-surface">Need something custom?</h3>
            </div>
            <p className="text-text-secondary mb-8 font-body-md">
              Universe can be self-hosted, white-labeled, or extended for specific use cases. If your usage grows beyond fair usage, we&apos;ll work with you on a pricing model that fits — whether that&apos;s token consumption or infra needs.
            </p>
            <Button className="w-full bg-transparent border border-white/30 text-on-surface px-6 py-3 rounded-full font-bold hover:border-white/60 transition-colors active:scale-95">
              Request Assistance
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
