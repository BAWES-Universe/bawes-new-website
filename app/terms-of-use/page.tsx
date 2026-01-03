import { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Terms of Use | BAWES Universe',
  description: 'Terms of Use for BAWES Universe',
}

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms of Use</h1>
          <p className="text-white/50 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/70">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using BAWES Universe, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on BAWES Universe for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on BAWES Universe</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
              <p>
                The materials on BAWES Universe are provided on an &apos;as is&apos; basis. BAWES Universe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
              <p>
                In no event shall BAWES Universe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BAWES Universe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Revisions</h2>
              <p>
                BAWES Universe may revise these terms of use at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  )
}

