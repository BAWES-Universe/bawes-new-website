import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { locales } from '@/lib/locales'
import Navigation from '@/components/Navigation'
import TouchHoverHandler from '@/components/TouchHoverHandler'
import Footer from '@/components/Footer'
import PostHogProvider from '@/components/PostHogProvider'
import PostHogPageView from '@/components/PostHogPageView'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })

  return {
    title: 'BAWES Universe — People and AI Living Together',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ar': '/ar',
        'x-default': '/en',
      },
    },
  }
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as any)) notFound()

  const messages = await getMessages()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/bawes-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/bawes-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..1&amp;display=optional" />
      </head>
      <body
        className="bg-surface text-on-surface antialiased relative min-h-screen"
        style={locale === 'ar' ? {
          fontFamily: "'Noto Sans Arabic', 'Inter', sans-serif",
          '--font-display': locale === 'ar' ? "'Noto Naskh Arabic', serif" : "'Space Grotesk', 'Inter', sans-serif",
        } as React.CSSProperties : undefined}
      >
        <div className="noise-overlay" />
        <div className="bg-orb bg-orb-purple w-[min(90vw,500px)] h-[min(90vw,500px)] top-[-30%] left-[-20%]" />
        <div className="bg-orb bg-orb-amber w-[min(70vw,400px)] h-[min(70vw,400px)] bottom-[-20%] right-[-15%]" style={{ animationDuration: '50s', animationDirection: 'alternate-reverse' }} />
        <div className="bg-orb bg-orb-purple w-[min(50vw,350px)] h-[min(50vw,350px)] top-[40%] left-[30%]" style={{ animationDuration: '35s' }} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PostHogProvider>
            <Suspense fallback={null}>
              <PostHogPageView />
            </Suspense>
            <TouchHoverHandler />
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
