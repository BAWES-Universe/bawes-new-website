import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function ProximityChatPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Proximity Chat"
        title={<>Talk like you are <span className="text-gradient-accent">in the same room</span></>}
        lead={<>Walk up to someone and a conversation starts. Walk away and it ends. No links to send and no rooms to book.</>}
        detail={[<>Proximity voice and video chat over WebRTC, powered by LiveKit when a group grows.</>]}
        scene="talk"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_proximity_chat"
      />

      <PartSteps
        eyebrow="How it works"
        title="Three steps, and you already know them"
        steps={[
          { title: 'Walk up', text: 'Stand next to someone. A circle appears around the two of you.' },
          { title: 'Talk', text: 'You see and hear each other right away. Others can walk up and join in.' },
          { title: 'Walk away', text: 'Step out of the circle and you have left. Nobody has to hang up.' },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Everything a good conversation needs"
        cards={[
          { icon: 'lock', title: 'Lock the conversation', text: 'Press Lock and nobody else can join. Only the people already there stay in.' },
          { icon: 'graphic_eq', title: 'Clean sound', text: 'A noise filter is built in. The Strong setting also removes typing, clicks and voices behind you, and it runs on your own device.' },
          { icon: 'blur_on', title: 'Choose your background', text: 'Blur what is behind you, or put a picture or a video there.' },
          { icon: 'present_to_all', title: 'Share your screen', text: 'Show your screen to the people standing with you.', more: { label: 'Screen sharing', href: '/features/screen-sharing' } },
          { icon: 'chat', title: 'Type as well', text: 'A chat for the people standing together opens on its own. It works for guests too.', more: { label: 'Chats, in the Guide', href: '/guide/chats' } },
          { icon: 'smart_toy', title: 'Residents join in', text: 'AI residents with a voice talk in the circle like anyone else. Say their name and they answer.', more: { label: 'Talking to residents out loud', href: '/guide/talking-out-loud' } },
        ]}
      />

      <PartBuilders
        title="What carries the sound"
        body={[
          <>A small conversation connects browser to browser over WebRTC. When more people join, it moves to LiveKit on its own, so voices stay clear.</>,
          <>LiveKit is open source, so you can host it yourself next to your own Universe.</>,
        ]}
        facts={[
          ['Voice and video', 'WebRTC'],
          ['Larger groups', 'LiveKit'],
          ['Audio codec', 'Opus'],
          ['Hosting', 'Ours or your own'],
        ]}
        links={[
          { label: 'Self-hosting', href: '/features/self-hosting' },
          { label: 'Technology stack', href: '/features/tech-stack' },
        ]}
      />

      <PartRelated
        links={[
          { label: 'Follow', href: '/features/follow', note: 'Keep a group together on a tour.' },
          { label: 'Megaphone', href: '/features/megaphone', note: 'Speak to a whole room at once.' },
          { label: 'Meeting rooms', href: '/features/meeting-rooms', note: 'A room for a proper sit-down.' },
          { label: 'Start here', href: '/guide/start-here', note: 'Your first five minutes, in the Guide.' },
        ]}
      />

      <PageClosing
        title={<>Ready to say hello?</>}
        body={<>Walk in, find someone, and stand next to them. That is all it takes.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_proximity_chat"
      />
    </div>
  )
}
