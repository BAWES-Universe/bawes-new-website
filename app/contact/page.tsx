import type { Metadata } from 'next'
import ContactPageContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the BAWES team about Universe, partnerships, support, or hands-on help executing your project.',
  openGraph: {
    title: 'Contact Us',
    description: 'Get in touch with the BAWES team about Universe, partnerships, support, or hands-on help executing your project.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Contact Us',
    description: 'Get in touch with the BAWES team about Universe, partnerships, support, or hands-on help executing your project.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
