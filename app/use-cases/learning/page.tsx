'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function UseCaseLearningPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">For Learning</span>
        </div>
      </div>
            <section className="relative pt-40 pb-section-padding-v overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h1 className="font-display-hero text-display-hero mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] leading-tight">
              Learn Together, <br />Wherever You Are.
            </h1>
            <p className="font-body-md text-body-md text-text-secondary mb-10 max-w-lg">
              Digital campuses, study rooms, and mentorship spaces. Walk into a lecture, join a study group, or meet your mentor in their virtual office.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] px-10 py-4 rounded-full font-label-navigation text-white text-lg shadow-lg">
                Build Your Campus
              </Button>
              <Button href="/how-it-works" className="px-10 py-4 rounded-full font-label-navigation border border-white/30 text-white hover:border-white/60 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                View Demo
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-3xl group-hover:bg-primary/30 transition-all"></div>
            <div className="rounded-xl shadow-2xl relative glass-card border-none aspect-video flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30">school</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section-padding-v relative">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">school</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Walk Into Class</h3>
              <p className="font-body-md text-body-md text-text-secondary">Enter the lecture hall. See the presentation, hear the teacher, ask questions in chat.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">groups</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Study Groups</h3>
              <p className="font-body-md text-body-md text-text-secondary">Join a quiet study room with classmates. Proximity chat for discussion, text chat for sharing links.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">meeting_room</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Office Hours</h3>
              <p className="font-body-md text-body-md text-text-secondary">Walk to the professor&apos;s virtual office. No booking system needed — just knock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-section-padding-v bg-surface-container-lowest/30">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <h2 className="font-headline-section text-headline-section text-on-surface mb-6">Key Features for Learning</h2>
            <p className="font-body-md text-body-md text-text-secondary mb-8">
              The BAWES Universe provides specialized modular environments designed specifically for pedagogical needs, from massive lecture halls to intimate 1:1 sessions.
            </p>
            <div className="p-6 glass-card rounded-xl border-primary/40 bg-primary/5">
              <div className="flex items-center gap-4 text-primary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="font-label-navigation text-label-navigation">LIVEKIT ENABLED</span>
              </div>
              <p className="text-caption font-caption text-text-low-emphasis">Built on professional-grade low-latency infrastructure for seamless educational experiences.</p>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">meeting_room</span>
              <h4 className="font-bold text-lg mb-2">Lecture Halls</h4>
              <p className="text-text-low-emphasis text-sm">Large-scale presentation rooms with screen sharing and Q&amp;A. Support hundreds of concurrent students.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-secondary mb-4 text-3xl">groups</span>
              <h4 className="font-bold text-lg mb-2">Study Rooms</h4>
              <p className="text-text-low-emphasis text-sm">Quiet zones with optional proximity chat. Perfect for group projects and collaborative learning.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">badge</span>
              <h4 className="font-bold text-lg mb-2">Mentor Offices</h4>
              <p className="text-text-low-emphasis text-sm">Dedicated rooms for 1:1 guidance. Bots can handle scheduling and intake.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">campaign</span>
              <h4 className="font-bold text-lg mb-2">Event Broadcasts</h4>
              <p className="text-text-low-emphasis text-sm">Commencements, guest lectures, and orientations at scale with megaphone broadcasting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-center mb-16">Learning Scenarios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-48 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">school</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Universities</h3>
              <p className="text-text-secondary">Full campus digitization. Lecture halls, admin offices, student lounges.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-48 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-secondary/30">code</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Coding Bootcamps</h3>
              <p className="text-text-secondary">Pair programming, instructor help rooms, and project demos in spatial environments.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-48 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-tertiary/30">auto_stories</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Workshops & Training</h3>
              <p className="text-text-secondary">Interactive workshops with live demos, breakout rooms, and hands-on exercises.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
