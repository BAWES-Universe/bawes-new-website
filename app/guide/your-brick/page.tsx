import GuidePage, { guideMetadata } from '@/components/guide/GuidePage'

export const metadata = guideMetadata('your-brick')

export default function Page() {
  return <GuidePage slug="your-brick" />
}
