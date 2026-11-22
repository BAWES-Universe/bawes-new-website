import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function UseCaseMarketPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="Market"
        title={<>Commerce in <span className="text-gradient-accent">shared spaces</span></>}
        lead={<>Browse shops, services and marketplaces together, the way you would walk a real market with friends.</>}
        detail={[<>Universe makes commerce a shared experience. People explore shops, services and marketplaces together, while buying happens in the tools you already use.</>]}
        scene="market"
        actions={[{ label: 'All features', href: '/features-overview' }]}
        source="page_use_cases_market"
      />

      <PartCards
        eyebrow="Shops, services and markets"
        title="Shopping with company"
        cards={[
          { icon: "storefront", title: "Shops and services", text: "Brand rooms, community stores, service desks and pop-ups. Customers look around together with friends.", more: { label: "Powered by Proximity Chat", href: "/features/proximity-chat" } },
          { icon: "festival", title: "Markets and malls", text: "Shared market areas for launches, showcases and discovery. People explore together, not alone in a browser tab." },
          { icon: "smart_toy", title: "Staff that never sleeps", text: "AI bots welcome visitors, answer questions and walk them to the right stand.", more: { label: "Bot behaviors", href: "/features/bot-behaviors" } },
        ]}
      />

      <PartCards
        eyebrow="How markets work in practice"
        title="Three examples"
        cards={[
          { icon: "checkroom", title: "Brand showroom", text: "A clothing brand builds a store. Visitors walk through, and walking up to a display opens that product in the brand web shop." },
          { icon: "support_agent", title: "Service desk", text: "A university sets up a service desk room. Students walk in and talk to staff or an AI bot about enrolment and schedules." },
          { icon: "storefront", title: "Pop-up market", text: "During an event, vendors each get a stand. Guests browse together and talk to the vendors by walking up." },
        ]}
      />

      <PartBuilders
        title="A spatial front for the tools you have"
        body={[
          <>Universe does not replace your commerce tools. An area on the map can open a website when someone walks in: your web shop, a booking page, a ticket page or a payment link.</>,
          <>The sale itself happens in that tool, with the payment provider you already use.</>,
          <>Your Brick can also make a page that takes a payment through your own payment service. The buyer pays on that service’s own page.</>,
        ]}
        facts={[
          ["Your shop in a room", "Open a website"],
          ["Payments", "In your own tools"],
          ["Talking to vendors", "Proximity chat"],
        ]}
        links={[{ label: "Pages that take a payment", href: "/features/artifacts" }, { label: "Area zones", href: "/features/area-zones" }, { label: "Commerce", href: "/use-cases/commerce" }]}
      />

      <PartRelated
        links={[
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Commerce", href: "/use-cases/commerce", note: "Do business in your universe." },
          { label: "Events", href: "/use-cases/events", note: "Events that fill the room." },
          { label: "Map editor", href: "/features/map-editor", note: "Build and change rooms in the browser." },
        ]}
      />

      <PageClosing
        title={<>Ready to bring a market into your universe?</>}
        body={<>Start with one stand and one friendly face behind it.</>}
        links={[{ label: 'Set up your shop', href: '/contact' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_market"
      />
    </main>
  );
}
