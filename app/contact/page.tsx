import type { Metadata } from 'next'
import ContactPageContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the BAWES team about Universe, partnerships, support, or hands-on help executing your project.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
