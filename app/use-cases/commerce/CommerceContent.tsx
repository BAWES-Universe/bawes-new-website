import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function UseCaseCommercePageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="Commerce"
        title={<>Earn from <span className="text-gradient-accent">your universe</span></>}
        lead={<>Turn your space into a place to do business: a shop people can walk into, with someone at the counter.</>}
        detail={[<>Bring your services and products into a spatial world. Your shop, your booking page and your team are all inside the experience, and payments stay with the tools you already trust.</>]}
        scene="market"
        actions={[{ label: 'Set up commerce', href: '/contact' }, { label: 'How it works', href: '/how-it-works' }]}
        source="page_use_cases_commerce"
      />

      <PartCards
        eyebrow="Ways to do business in a room"
        title="Bring what you sell to where people are"
        cards={[
          { icon: "storefront", title: "A shop you walk into", text: "Open your online store, your booking page or your payment link when someone walks up to a stand." },
          { icon: "support_agent", title: "Someone at the counter", text: "Your team talks to customers face to face. An AI bot covers the hours when nobody is there.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "workspace_premium", title: "Members-only rooms", text: "Limit an area to people with a certain role, such as members or VIP guests." },
          { icon: "podium", title: "Events for customers", text: "Launches, demos and talks on a stage, broadcast across your universe.", more: { label: "See Broadcasting", href: "/features/broadcasting" } },
        ]}
      />

      <PartCards
        eyebrow="Commerce in action"
        title="How it can look"
        cards={[
          { icon: "school", title: "Premium campus", text: "A school gives enrolled students a role. That role opens the lecture halls, the study rooms and the AI tutor." },
          { icon: "confirmation_number", title: "Conference with a VIP area", text: "Everyone joins the main hall. Guests with the VIP role also get the backstage room and the speaker meetup." },
          { icon: "diversity_3", title: "Community membership", text: "A creator keeps some rooms for members and runs member events there." },
        ]}
      />

      <PartBuilders
        title="Your commerce stack stays yours"
        body={[
          <>Universe does not replace your commerce tools and does not take payments for you. It gives them a place people can walk into.</>,
          <>Sell with the shop, ticket or subscription tool you already use. Then give the buyer a role in Orbit, and that role opens the right rooms.</>,
          <>Your Brick can also make a page that takes a payment through your own payment service. The buyer pays on that service’s own page.</>,
          <>Bots can use tools over MCP, so a bot can look things up in the systems you connect. It asks first before it changes or sends anything.</>,
        ]}
        facts={[
          ["Payments", "In your own tools"],
          ["Your shop in a room", "Open a website"],
          ["Access", "By role"],
          ["Bots", "Tools over MCP"],
        ]}
        links={[{ label: "Pages that take a payment", href: "/features/artifacts" }, { label: "Bot tool calling", href: "/features/bot-tools" }, { label: "Bot memory", href: "/features/bot-memory" }, { label: "Self-hosting", href: "/features/self-hosting" }]}
      />

      <PartRelated
        links={[
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
          { label: "Bot memory", href: "/features/bot-memory", note: "A concierge that remembers customers." },
          { label: "Self-hosting", href: "/features/self-hosting", note: "Keep everything on your own servers." },
          { label: "Market", href: "/use-cases/market", note: "Shops and markets in shared spaces." },
        ]}
      />

      <PageClosing
        title={<>Come and see it for yourself</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'Set up commerce', href: '/contact' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_commerce"
      />
    </main>
  );
}
