import GuidePage, { guideMetadata } from '@/components/guide/GuidePage'

export const metadata = guideMetadata('quests')

export default function Page() {
  return <GuidePage slug="quests" />
}
