'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'

const resources = [
  { key: 'techStack', icon: 'layers', href: '/features/tech-stack' },
  { key: 'scriptingApi', icon: 'code', href: '/features/scripting' },
  { key: 'mcpIntegration', icon: 'hub', href: '/mcp-integration' },
  { key: 'selfHosting', icon: 'dns', href: '/features/self-hosting' },
  { key: 'openSource', icon: 'code', href: '/open-source' },
  { key: 'workadventureFork', icon: 'fork_right', href: '/workadventure-fork' },
  { key: 'adminApi', icon: 'api', href: '/features/admin-api' },
  { key: 'oidcAuth', icon: 'vpn_key', href: '/features/oidc-auth' },
  { key: 'botToolCalling', icon: 'handyman', href: '/features/bot-tools' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function DevelopersPage() {
  const t = useTranslations('developers')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward'
  const ft = useTranslations('feature')
  const learnMoreText = ft('learnMore')

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="min-h-[45vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-amber/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-purple mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="material-symbols-outlined text-lg">code</span>
              Developer Hub
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
              {t('title')}{' '}
              <span className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}>
                {t('pageTitle')}
              </span>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              {t('desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Grid */}
      <Section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((res, i) => {
              const titleKey = res.key
              const descKey = res.key + 'Desc'
              return (
              <Link key={res.key} href={res.href} className="group">
                <motion.div
                  {...fadeUp(i * 0.05)}
                  className="bento-card h-full"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(167,139,250,0.12)' }}>
                    <span className="material-symbols-outlined text-xl text-accent-purple">{res.icon}</span>
                  </div>
                  <h3 className="font-headline-card text-headline-card text-white mb-2">{t(titleKey)}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{t(descKey)}</p>
                  <div className="bento-card-arrow">
                    <span className="material-symbols-outlined text-sm">{arrowIcon}</span>
                    {learnMoreText}
                  </div>
                </motion.div>
              </Link>
            )})}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative min-h-[35vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/BAWES-Universe"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">code</span>
              {t('viewGitHub')}
            </a>
            <Link
              href="/features-overview"
              className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              {t('exploreFeatures')}
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
