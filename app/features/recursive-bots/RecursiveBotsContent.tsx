import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function RecursiveBotsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Recursive Bots"
        title={<>Bricks that make <span className="text-gradient-accent">more Bricks</span></>}
        lead={<>Ask your Brick for a helper and it makes one on the spot: a new Brick with one job, its own chat and its own memory.</>}
        detail={[<>Or build a team by hand. Put several bots in one room and give each its own provider config, behavior and memory.</>]}
        scene="brick"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source='feature_recursive_bots'
      />

      <PartSteps
        eyebrow="How it works"
        title="Ask once, and it is there"
        steps={[
          { title: "Ask your Brick", text: "In your chat with it, say what you need: make me a bot that keeps my mum's recipes." },
          { title: "It makes one", text: "It gives the new Brick a name, one line on what it does and its instructions, from what you already told it. There is no form to fill in." },
          { title: "Open its chat", text: "The answer carries a link to the new Brick's chat, and it is in Chats from then on." },
        ]}
      />

      <PartCards
        eyebrow="More Bricks"
        title="A Brick for every job"
        cards={[
          { icon: "add_circle", title: "Ask for one", text: "Say what the helper is for and your Brick makes it right away. Change anything about it later." },
          { icon: "lightbulb", title: "Brick may suggest one", text: "When the same kind of job keeps coming back, a small card appears under the answer: make a Brick just for it, or Not now. Say Not now and it does not ask again." },
          { icon: "palette", title: "Make one yourself", text: "Press New Brick on the Bricks page and pick its look. Or start from a template.", more: { label: "Brick templates", href: "/features/brick-templates" } },
          { icon: "undo", title: "Change your mind", text: "Delete a Brick and you can still undo it on the Bricks page until the day shown." },
        ]}
      />

      <PartSteps
        eyebrow="In a room"
        title="Build a team one bot at a time"
        steps={[
          { title: "Add a bot", text: "In the map editor, open Bots and press New bot. Or add one of your own Bricks to the room." },
          { title: "Give it one job", text: "Write its personality, pick its model and connect only the Apps that job needs." },
          { title: "Add the next one", text: "A greeter by the door, a guide who walks a route, an expert at the desk." },
        ]}
      />

      <PartCards
        eyebrow="Every bot is its own"
        title="Specialists, side by side"
        cards={[
          { icon: "memory", title: "Its own model", text: "One bot runs on a fast, cheap model and another on a big one. You choose for each.", more: { label: "Bot provider config", href: "/features/bot-provider-config" } },
          { icon: "directions_walk", title: "Its own behavior", text: "One stays put, one wanders, one walks a route and goes to people.", more: { label: "Bot behaviors", href: "/features/bot-behaviors" } },
          { icon: "history", title: "Its own memory", text: "Each bot keeps its own memory of the people it meets.", more: { label: "Bot memory", href: "/features/bot-memory" } },
          { icon: "build", title: "Its own tools", text: "Give each bot only what it needs, with its own rules for when to ask first.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "shield_person", title: "Its own audience", text: "Open one bot to every visitor and keep another for your team." },
          { icon: "pan_tool", title: "You stay in charge", text: "Bots that live in a room are put there by people who can edit that room. A Brick your Brick makes is yours alone until you place it somewhere." },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>The Brick that comes with your account is the one that makes new Bricks, in your own chat with it. A new Brick starts with no memory of that chat, so your Brick writes what it needs into its instructions.</>,
          <>When two bots stand in the same conversation, they answer in text for now. Voice comes back when one of them leaves.</>,
          <>Bots load when their room opens. If one fails to start, the others still do.</>,
        ]}
        facts={[
          ["Who makes a Brick", "You, or your Brick when you ask"],
          ["A new Brick gets", "A name, one job, its own chat and memory"],
          ["Changed your mind", "Delete, with Undo"],
          ["Bots in a room", "As many as you add"],
          ["Model, memory, tools", "Separate for each bot"],
        ]}
        links={[{ label: "Bot editor", href: "/features/bot-editor" }, { label: "Map scripting", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Brick", href: "/features/brick", note: "Your own AI companion." },
          { label: "Brick templates", href: "/features/brick-templates", note: "Start from one someone shared." },
          { label: "Bot editor", href: "/features/bot-editor", note: "Everything about a bot on one screen." },
          { label: "Bot provider config", href: "/features/bot-provider-config", note: "A different brain for every job." },
          { label: "Bot behaviors", href: "/features/bot-behaviors", note: "How a bot moves around." },
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
        ]}
      />

      <PageClosing
        title={<>Ready for a second Brick?</>}
        body={<>Ask your Brick for one. It takes a sentence.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_recursive_bots'
      />
    </div>
  )
}
