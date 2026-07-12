'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function McpIntegrationPage() {
  const t = useTranslations('mcpIntegration');
  const tf = useTranslations('feature');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward';

  return (
    <main className="relative pt-20" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/developers" className="hover:text-primary transition-colors">{t('breadcrumb')}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">{t('pageTitle')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple">
            <span className="material-symbols-outlined text-sm text-primary">hub</span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">{t('label')}</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            {t('title')} <span className="text-gradient">{t('titleGradient')}</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-xl">
            {t('desc')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/mcp-servers.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              {t('mcpServerConfig')}
              <span className="material-symbols-outlined">{arrowIcon}</span>
            </a>
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/scripting.md"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-on-surface px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">code</span>
              Bot Scripting Guide
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-2xl p-8 overflow-hidden border-purple/30">
            <div className="flex items-center gap-2 mb-6 border-b border-divider pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="ml-4 text-caption text-text-low-emphasis font-mono">mcp-config.json</div>
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto" dangerouslySetInnerHTML={{
              __html: `<span class="text-purple-400">"mcpServers"</span>: {\n  <span class="text-amber-300">"calendar"</span>: {\n    <span class="text-purple-400">"url"</span>: <span class="text-amber-300">"https://mcp.bawes.io/calendar"</span>,\n    <span class="text-purple-400">"tools"</span>: [<span class="text-amber-300">"list_events"</span>, <span class="text-amber-300">"create_event"</span>]\n  },\n  <span class="text-amber-300">"ticketing"</span>: {\n    <span class="text-purple-400">"url"</span>: <span class="text-amber-300">"https://mcp.bawes.io/jira"</span>,\n    <span class="text-purple-400">"tools"</span>: [<span class="text-amber-300">"search_issues"</span>, <span class="text-amber-300">"create_ticket"</span>]\n  }\n}`
            }} />
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <span className="material-symbols-outlined text-[200px]">hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">{t('whatIsMcp')}</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">{t('whatIsMcpDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <span className="material-symbols-outlined text-primary">search</span>
              </div>
              <h3 className="font-bold text-white mb-2">1. {t('toolsCall')}</h3>
              <p className="text-text-secondary text-sm">{t('whatIsMcpDesc')}</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary">psychology</span>
              </div>
              <h3 className="font-bold text-white mb-2">2. {t('initialize')}</h3>
              <p className="text-text-secondary text-sm">{t('whatIsMcpDesc')}</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-4 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary">call_made</span>
              </div>
              <h3 className="font-bold text-white mb-2">3. {t('testConnection')}</h3>
              <p className="text-text-secondary text-sm">{t('whatIsMcpDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline-section text-headline-section text-on-surface">{t('mcpServerConfig')}</h2>
            <p className="text-text-secondary">{t('whatIsMcpDesc')}</p>
            <div className="glass-card p-6 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">badge</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t('toolsCall')}</p>
                    <p className="text-xs text-text-secondary">{t('whatIsMcpDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">link</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t('mcpServerConfig')}</p>
                    <p className="text-xs text-text-secondary">{t('whatIsMcpDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">key</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t('initialize')}</p>
                    <p className="text-xs text-text-secondary">{t('whatIsMcpDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">list</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t('sessionLifecycle')}</p>
                    <p className="text-xs text-text-secondary">{t('whatIsMcpDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 border border-purple/20">
            <div className="flex items-center gap-2 mb-4 border-b border-divider pb-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-sm font-semibold text-white">{t('testConnection')}</span>
            </div>
            <p className="text-text-secondary text-sm mb-4">{t('whatIsMcpDesc')}</p>
            <div className="glass-card rounded-xl overflow-hidden border border-purple-500/20">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <span className="ml-3 text-[10px] text-white/40 font-mono">test-connection.http</span>
              </div>
              <pre className="p-3 font-mono text-xs leading-relaxed overflow-x-auto" dangerouslySetInnerHTML={{
                __html: `<span class="text-purple-300">POST</span> /mcp\n<span class="text-purple-400">Content-Type</span>: <span class="text-amber-300">application/json</span>\n\n{\n  <span class="text-purple-400">"jsonrpc"</span>: <span class="text-amber-300">"2.0"</span>,\n  <span class="text-purple-400">"id"</span>: <span class="text-amber-300">"test"</span>,\n  <span class="text-purple-400">"method"</span>: <span class="text-amber-300">"tools/list"</span>\n}`
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Details */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">{t('sessionLifecycle')}</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">{t('whatIsMcpDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">handshake</span>
                {t('initialize')}
              </h3>
              <p className="text-text-secondary text-sm mb-4">{t('whatIsMcpDesc')}</p>
              <div className="glass-card rounded-xl overflow-hidden border border-purple-500/20">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="ml-3 text-[10px] text-white/40 font-mono">initialize.json</span>
                </div>
                <pre className="p-3 font-mono text-xs leading-relaxed overflow-x-auto max-h-48" dangerouslySetInnerHTML={{
                  __html: `{\n  <span class="text-purple-400">"jsonrpc"</span>: <span class="text-amber-300">"2.0"</span>,\n  <span class="text-purple-400">"id"</span>: <span class="text-amber-300">"init"</span>,\n  <span class="text-purple-400">"method"</span>: <span class="text-amber-300">"initialize"</span>,\n  <span class="text-purple-400">"params"</span>: {\n    <span class="text-purple-400">"protocolVersion"</span>: <span class="text-amber-300">"2024-11-05"</span>,\n    <span class="text-purple-400">"capabilities"</span>: {},\n    <span class="text-purple-400">"clientInfo"</span>: {\n      <span class="text-purple-400">"name"</span>: <span class="text-amber-300">"workadventure-mcp-bot"</span>,\n      <span class="text-purple-400">"version"</span>: <span class="text-amber-300">"1.0.0"</span>,\n      <span class="text-purple-400">"player_id"</span>: <span class="text-amber-300">"<player-uuid>"</span>\n    }\n  }\n}`
                }} />
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">call</span>
                {t('toolsCall')}
              </h3>
              <p className="text-text-secondary text-sm mb-4">{t('whatIsMcpDesc')}</p>
              <div className="glass-card rounded-xl overflow-hidden border border-purple-500/20">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="ml-3 text-[10px] text-white/40 font-mono">tools-call.json</span>
                </div>
                <pre className="p-3 font-mono text-xs leading-relaxed overflow-x-auto max-h-48" dangerouslySetInnerHTML={{
                  __html: `{\n  <span class="text-purple-400">"jsonrpc"</span>: <span class="text-amber-300">"2.0"</span>,\n  <span class="text-purple-400">"id"</span>: <span class="text-amber-300">"exec"</span>,\n  <span class="text-purple-400">"method"</span>: <span class="text-amber-300">"tools/call"</span>,\n  <span class="text-purple-400">"params"</span>: {\n    <span class="text-purple-400">"name"</span>: <span class="text-amber-300">"my_tool"</span>,\n    <span class="text-purple-400">"arguments"</span>: {\n      <span class="text-purple-400">"query"</span>: <span class="text-amber-300">"latest updates"</span>\n    }\n  }\n}`
                }} />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-text-secondary text-sm max-w-xl mx-auto">
              {t('whatIsMcpDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">{tf('relatedFeatures')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/bot-tools" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">handyman</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">{tf('learnMore')}</h3>
            <p className="text-text-secondary text-sm">{t('whatIsMcpDesc')}</p>
          </Link>
          <Link href="/features/bot-behaviors" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">psychology</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-secondary transition-colors">Bot Behaviors</h3>
            <p className="text-text-secondary text-sm">{t('whatIsMcpDesc')}</p>
          </Link>
          <Link href="/features/scripting" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">terminal</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-tertiary transition-colors">Scripting API</h3>
            <p className="text-text-secondary text-sm">{t('whatIsMcpDesc')}</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v text-center">
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-6">{t('testConnection')}</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">{t('whatIsMcpDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/mcp-servers.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              {t('mcpServerConfig')}
            </a>
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/scripting.md"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-on-surface px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Bot Scripting
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
