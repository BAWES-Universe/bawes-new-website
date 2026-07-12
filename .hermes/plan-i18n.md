# i18n — Multi-Language with SEO Support

> **For Hermes:** Execute this plan task-by-task. Get approval before starting.

**Goal:** Add full internationalization (i18n) infrastructure with Next.js App Router + `next-intl`, starting with Arabic. All pages get locale-based routing (`/en/team`, `/ar/team`), RTL support for Arabic, hreflang SEO tags, and a locale switcher in the nav.

**Architecture:** `next-intl` v3 handles locale detection, routing, message loading, and SEO headers. Middleware picks locale from cookie/browser/URL. Messages in JSON files (`messages/en.json`, `messages/ar.json`). Arabic uses `dir="rtl"` and Noto Naskh Arabic font. All 50+ pages operate under `app/[locale]/` — initially with English fallback for non-translated pages.

**Tech Stack:** `next-intl`, Next.js 14 App Router, Tailwind CSS, framer-motion

---

## Task Breakdown

### Task 1: Install next-intl and create config

**Objective:** Install dependency and create the i18n config that declares supported locales.

**Files:**
- Modify: `package.json` (add dep)
- Create: `/home/bawes/bawes-new-website/i18n.ts`

**Step 1:** Install next-intl

```bash
cd /home/bawes/bawes-new-website && npm install next-intl
```

**Step 2:** Create `i18n.ts` at project root

```ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
```

**Step 3:** Create `next-intl.config.js` or add config to `i18n.ts`

Actually, `next-intl` v3 reads from `i18n.ts`. The locales info for the middleware is defined directly in middleware.ts. So step 2 is sufficient.

**Verify:** File exists at `/home/bawes/bawes-new-website/i18n.ts`

**Commit:**
```bash
cd /home/bawes/bawes-new-website && git add package.json package-lock.json i18n.ts && git commit -m "i18n: install next-intl, create i18n config"
```

---

### Task 2: Create locale middleware

**Objective:** Middleware intercepts all requests, detects locale preference (cookie > browser > default), and redirects to the correct locale path.

**Files:**
- Create: `/home/bawes/bawes-new-website/middleware.ts`

**Step 1:** Create middleware.ts

```ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

**Note:** `localePrefix: 'as-needed'` means `/team` redirects to `/en/team` (if en is the detected locale and not already set), while `/ar/team` works directly. This is cleaner for SEO.

**Verify:** Run build to check middleware compiles.

**Commit:**
```bash
cd /home/bawes/bawes-new-website && git add middleware.ts && git commit -m "i18n: add locale routing middleware"
```

---

### Task 3: Create message files (en.json, ar.json)

**Objective:** Create the translation JSON files. English contains all strings used across the site. Arabic contains translated equivalents.

**Files:**
- Create: `/home/bawes/bawes-new-website/messages/en.json`
- Create: `/home/bawes/bawes-new-website/messages/ar.json`

**Step 1:** Create `messages/en.json` with ALL translatable strings from the site (navigation, footer, homepage, common patterns).

This is the biggest content file. I need to extract all user-facing strings from:
- Navigation component
- Footer component
- Homepage (hero, stats, bento cards, showcases, CTA)
- Common patterns (breadcrumbs, buttons, etc.)

English messages structure (example):
```json
{
  "nav": {
    "features": "Features",
    "useCases": "Use Cases",
    "howItWorks": "How It Works",
    "blog": "Blog",
    "contact": "Contact",
    "enterUniverse": "Enter the Universe"
  },
  "footer": {
    "tagline": "A shared digital universe where people explore, AI agents coexist, and communities build together.",
    "explore": "Explore",
    "community": "Community",
    "more": "More",
    "copyright": "© {year} BAWES Universe. Open by default."
  },
  "home": {
    "hero": {
      "headline1": "Universe is where",
      "headline2": "people and AI",
      "headline3": "actually live together.",
      "subtitle": "Rooms where you walk in, see who's around, and talk naturally — with people and bots that have memories, feelings, and real tools to help.",
      "enterCta": "Enter the Universe",
      "howItWorks": "How it works →"
    },
    "stats": {
      "community": "Community Members",
      "openSource": "Open Source Repos",
      "aiAgents": "Agents & Tools",
      "possibilities": "Possibilities"
    }
  }
}
```

**Step 2:** Create `messages/ar.json` with Arabic translations.

```json
{
  "nav": {
    "features": "الميزات",
    "useCases": "حالات الاستخدام",
    "howItWorks": "كيف يعمل",
    "blog": "المدونة",
    "contact": "اتصل بنا",
    "enterUniverse": "ادخل إلى الكون"
  },
  "footer": {
    "tagline": "كون رقمي مشترك حيث يستكشف الناس، وتعايش وكلاء الذكاء الاصطناعي، وتبني المجتمعات معًا.",
    "explore": "استكشف",
    "community": "المجتمع",
    "more": "المزيد",
    "copyright": "© {year} كون BAWES. مفتوح المصدر افتراضيًا."
  },
  "home": {
    "hero": {
      "headline1": "الكون هو المكان الذي",
      "headline2": "يعيش فيه الناس",
      "headline3": "والذكاء الاصطناعي معًا.",
      "subtitle": "غرف تدخلها وترى من حولك وتتحدث بشكل طبيعي — مع أشخاص وروبوتات لديها ذكريات ومشاعر وأدوات حقيقية للمساعدة.",
      "enterCta": "ادخل إلى الكون",
      "howItWorks": "كيف يعمل ←"
    },
    "stats": {
      "community": "أعضاء المجتمع",
      "openSource": "مستودعات مفتوحة المصدر",
      "aiAgents": "العوامل والأدوات",
      "possibilities": "الاحتمالات"
    }
  }
}
```

A subset of the site will be translated — enough to demonstrate the infrastructure works. Remaining strings can be added incrementally.

**Commit:**
```bash
cd /home/bawes/bawes-new-website && git add messages/ && git commit -m "i18n: create en and ar message files"
```

---

### Task 4: Refactor root layout into locale-aware structure

**Objective:** Move the existing `app/layout.tsx` content into `app/[locale]/layout.tsx` and create a new root layout that handles locale metadata.

**Files:**
- Create: `/home/bawes/bawes-new-website/app/[locale]/layout.tsx`
- Modify: `/home/bawes/bawes-new-website/app/layout.tsx`

**Step 1:** Create `app/[locale]/layout.tsx` — this is the locale-aware inner layout that wraps children with NextIntlClientProvider and sets RTL support:

```tsx
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'ar'];

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Validate locale
  if (!locales.includes(locale)) notFound();

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
```

**Step 2:** Modify `app/layout.tsx` to handle locale SEO metadata (hreflang tags) and pass `lang` and `dir` dynamically.

The root layout needs to:
- Stay as the outermost `<html>` shell
- Keep metadata that's not locale-specific
- Add `hreflang` alternate links
- Let the locale layout handle `lang` and `dir` on the HTML tag

Actually, next-intl recommends putting `lang` and `dir` on the `<html>` element in the root layout. But since we need different values per locale, the root layout needs to know the locale.

A cleaner approach: the root `app/layout.tsx` stays mostly the same but we add `hreflang` metadata. The locale-specific `lang` and `dir` are handled by next-intl's middleware which sets them automatically.

Actually, with next-intl, the recommended setup for App Router is:

1. `app/layout.tsx` — minimal root layout with `generateStaticParams` for locales
2. `app/[locale]/layout.tsx` — full layout with provider, nav, footer

Let me reconsider:

**Root layout (`app/layout.tsx`)**: Minimal — just sets up html with `suppressHydrationWarning` and loads fonts
```tsx
export default function RootLayout({children}: {children: React.ReactNode}) {
  return children;
}
```

**Locale layout (`app/[locale]/layout.tsx`)**: Full layout with html, body, nav, footer, PostHog, RTL

This is the standard next-intl pattern. The metadata for SEO (including hreflang) goes in the locale layout's `generateMetadata`.

Let me write the actual code.

**Root layout (simplified):**
```tsx
import type { Metadata } from 'next'
import './globals.css'
import { locales } from '@/i18n'

export const metadata: Metadata = {
  title: 'BAWES Universe — People and AI Living Together',
  description: 'Walk into a shared world where people, AI agents, and communities work, learn, and connect — in real time, in actual space.',
  // ...rest of existing metadata
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}))
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

Wait, `locales` needs to be defined somewhere. Let me put it in a shared config.

Actually, next-intl recommends defining locales in a shared file:

```ts
// lib/locales.ts
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
```

And the middleware and i18n.ts reference these.

**The locale layout** contains the full existing layout content (html, body, nav, footer, PostHog).

Let me also think about `generateMetadata` for SEO hreflang:

```ts
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
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
```

This needs to be on every page eventually, but for now, putting it in the locale layout covers the root.

**Step 3:** Move all existing `app/layout.tsx` content into `app/[locale]/layout.tsx`.

**Commit:**
```bash
cd /home/bawes/bawes-new-website && git add app/layout.tsx app/\[locale\]/layout.tsx lib/locales.ts && git commit -m "i18n: refactor root layout into locale-aware structure"
```

---

### Task 5: Strip `app/[locale]/layout.tsx` to avoid nested html/body tags

Wait — I need to think about this more carefully. In Next.js App Router with `[locale]`:

- `app/layout.tsx` — outermost layout, MUST render `<html>` and `<body>` 
- `app/[locale]/layout.tsx` — wraps inside the body

So the structure should be:

```
app/layout.tsx          → <html><body>{children}</body></html> (PostHog, nav, footer)
app/[locale]/layout.tsx → <NextIntlClientProvider><div dir={...}>{children}</div></NextIntlClientProvider>
```

This means the existing layout content (nav, footer, PostHog, bg orbs) stays in `app/layout.tsx`, and only the locale provider wrapper goes in `[locale]/layout.tsx`.

But then each page under `[locale]/` needs to use `useTranslations` which requires the provider. The provider wraps children of the locale layout, which includes the page content. The nav and footer components are OUTSIDE the provider...

Two approaches:
1. Keep nav/footer in root layout (outside provider) — they can't use translations directly
2. Move nav/footer into locale layout — they're inside the provider and CAN use translations

Option 2 is better for translation. But that means the structure is:

```
app/layout.tsx          → <html><body>{children}</body></html> (minimal, just html/body/bg orbs)
app/[locale]/layout.tsx → <NextIntlClientProvider><Navigation /><main>{children}</main><Footer /></NextIntlClientProvider>
```

But wait — if nav and footer are inside `[locale]/layout.tsx`, they won't render on pages outside `[locale]/`. Since ALL pages will be under `[locale]/` after the refactor, this is fine.

Let me go with this approach:

**Root layout (`app/layout.tsx`):** Just html, body, bg orbs, PostHog global setup
**Locale layout (`app/[locale]/layout.tsx`):** Navigation, NextIntlClientProvider, main content, Footer

---

### Task 6: Move ALL 50+ pages under `app/[locale]/`

This is the largest task. Each existing page at `app/<path>/page.tsx` needs a corresponding file at `app/[locale]/<path>/page.tsx`.

The pages use `useTranslations()` instead of hardcoded strings.

For the initial PR, pages that are NOT yet fully translated will:
- Import and render the same component structure
- Use fallback English strings from `en.json` 
- The `ar.json` will have translations for key pages

**Approach for pages:**
- Create `app/[locale]/*/page.tsx` for ALL existing paths
- Each page imports `useTranslations` from `next-intl`
- Replace hardcoded strings with `t('key')` lookups
- Non-string content (icons, images, layout structure) stays the same

Since there are 50+ pages, I'll batch this into sub-tasks:
- **6a:** Move home page (`app/[locale]/page.tsx`) — translate hero, stats, CTA
- **6b:** Move team, legal, manifesto, about, empty-seat pages
- **6c:** Move use-case pages (personal, work, community, learning, events, commerce, market)
- **6d:** Move feature pages (admin-api, maps, proximity-chat, etc.)
- **6e:** Move utility pages (contact, how-it-works, developers, etc.)

---

### Task 7: Add Arabic font support

**Objective:** Add Noto Naskh Arabic (or a suitable Arabic font) for RTL text rendering.

**Files:**
- Modify: `app/[locale]/layout.tsx` (add font link)

Arabic fonts to add:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

For the Arabic locale, override the font family:
```tsx
const bodyFont = locale === 'ar' ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif';
const displayFont = locale === 'ar' ? 'Noto Naskh Arabic, serif' : 'Space Grotesk, Inter, sans-serif';
```

---

### Task 8: Add locale switcher to navigation

**Objective:** Add a language toggle in the navigation bar.

**Files:**
- Modify: `components/Navigation.tsx`

The locale switcher is a button/menu that toggles between `/en/...` and `/ar/...` URLs. Use `next-intl`'s `useLocale` and `usePathname` to build the switch URL.

```tsx
import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  
  return (
    <Link href={newPath} className="...">
      {locale === 'en' ? 'AR' : 'EN'}
    </Link>
  );
}
```

Actually, with `localePrefix: 'as-needed'`, the `usePathname` might not include the locale prefix. Let me use next-intl's `createSharedPathnamesNavigation` instead.

From next-intl docs:
```ts
// navigation.ts
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
export const locales = ['en', 'ar'] as const;
export const localePrefix = 'as-needed';
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales, localePrefix});
```

Then use `usePathname` from this custom module:
```tsx
const pathname = usePathname(); // gives the path WITHOUT locale prefix
// Next.js's built-in usePathname gives the FULL path WITH locale prefix
// So use next-intl's navigation hook for cleaner behavior
```

For the locale switcher, the simplest approach:
```tsx
import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  
  // Replace current locale prefix with the other
  const newPathname = pathname.replace(`/${locale}`, `/${otherLocale}`);
  
  return (
    <Link href={newPathname}>
      {locale === 'en' ? 'العربية' : 'English'}
    </Link>
  );
}
```

---

### Task 9: Add RTL CSS support in Tailwind

**Objective:** Ensure the design handles RTL correctly — margins, paddings, icons, animations that use translateX, etc.

**Files:**
- Modify: `tailwind.config.js` (add RTL variants if needed)

Tailwind has built-in `rtl:` and `ltr:` variants. Add these to the config if needed:
```js
// tailwind.config.js — add to existing config
module.exports = {
  // ...existing config
  future: {
    hoverOnlyWhenSupported: true,
  },
}
```

Actually, Tailwind v3 has RTL variants enabled by default. No config change needed.

Key patterns to fix in components:
- Icons with `chevron_right` → should be `chevron_left` in Arabic
- `arrow_forward` → `arrow_back` in RTL
- Margins that assume left-to-right (`ml-*`, `mr-*` → `me-*`, `ms-*` for logical properties)

This is a large refactor. For the initial PR, I'll use CSS logical properties (`margin-inline-start`, etc.) where possible and handle the most visible RTL issues.

---

### Task 10: SEO — Add hreflang and canonical URLs

**Objective:** Proper SEO headers for multi-language site.

**Files:**
- Modify: `app/[locale]/layout.tsx` (generateMetadata with alternates)

```ts
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
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
```

This generates `<link rel="alternate" hreflang="en" href="..." />` tags in the `<head>`.

For subpages, each page will need its own `generateMetadata` with proper alternate links. For the initial PR, the root coverage is sufficient.

---

## Summary of Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `package.json` | Modify | Add `next-intl` dependency |
| `i18n.ts` | Create | next-intl request config |
| `middleware.ts` | Create | Locale detection/redirection |
| `messages/en.json` | Create | English translations |
| `messages/ar.json` | Create | Arabic translations |
| `lib/locales.ts` | Create | Shared locale constants |
| `lib/navigation.ts` | Create | next-intl shared navigation |
| `app/layout.tsx` | Modify | Simplify to root shell |
| `app/[locale]/layout.tsx` | Create | Full locale-aware layout |
| `app/[locale]/page.tsx` | Create | Translated home page |
| `app/[locale]/team/page.tsx` | Create | Translated team page |
| `app/[locale]/legal/page.tsx` | Create | Translated legal page |
| ... + all other pages under `[locale]/` | Create | Same content, i18n-ready |
| `components/Navigation.tsx` | Modify | Add locale switcher, use `useTranslations` |
| `components/Footer.tsx` | Modify | Use `useTranslations` |

---

## Phased Rollout

| Phase | Scope | When |
|-------|-------|------|
| **1** | Infrastructure + homepage + nav/footer translated | This PR |
| **2** | Team, legal, manifesto, about translated | Next PR |
| **3** | All use case pages translated | Next PR |
| **4** | All feature pages translated | Next PR |

---

## RTL Considerations

- `<html dir="rtl">` for Arabic
- Arabic font: Noto Naskh Arabic (headings) + Noto Sans Arabic (body)
- Icons: `chevron_right` → `chevron_left`, `arrow_forward` → `arrow_back`
- Animations: `translateX` values reversed
- CSS logical properties (`margin-inline-start` instead of `margin-left`)
- Glass card borders and padding should use `inset-inline` where possible
- Flex direction is automatic (RTL reverses row direction)
- Grid layout is automatic (RTL reverses column ordering)
