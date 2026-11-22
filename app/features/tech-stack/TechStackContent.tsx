import React from 'react';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function TechStackPageContent() {
  return (
    <main className="pt-20 relative">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="Technology Stack"
        title={<>The stack behind <span className="text-gradient-accent">the Universe</span></>}
        lead={<>For builders: the languages and tools Universe is made of.</>}
        detail={[<>TypeScript, Node.js, WebRTC, AI and MCP: the technologies that power every world. All of it is open source.</>]}
        scene="desks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_tech_stack"
      />

      <PartCards
        eyebrow="The core stack"
        title="What Universe is made of"
        cards={[
          { icon: "web", title: "In your browser", text: "TypeScript and Svelte for the screens, Phaser for the map you walk on, Tailwind CSS for the look, Vite to build it." },
          { icon: "dns", title: "Servers", text: "Node.js and TypeScript. The services talk to each other over gRPC with Protocol Buffers. Redis keeps saved values." },
          { icon: "videocam", title: "Voice and video", text: "WebRTC, browser to browser for small conversations. LiveKit for bigger ones. A TURN server for strict networks.", more: { label: "Proximity chat", href: "/features/proximity-chat" } },
          { icon: "chat", title: "Chat", text: "Matrix, with a Synapse server, for direct messages and chat rooms.", more: { label: "Matrix chat", href: "/features/matrix-chat" } },
          { icon: "hub", title: "Orbit", text: "Next.js and React, with Prisma on PostgreSQL.", more: { label: "Orbit", href: "/features/orbit-operator" } },
          { icon: "smart_toy", title: "AI", text: "A bot server in TypeScript. It talks to many AI and voice providers and gives bots tools over MCP.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "map", title: "Maps", text: "Maps in the Tiled format, edited in the built-in map editor and kept by a map storage service.", more: { label: "Map editor", href: "/features/map-editor" } },
          { icon: "code", title: "Scripting", text: "A JavaScript and TypeScript API for maps that react to people.", more: { label: "Scripting API", href: "/features/scripting" } },
        ]}
      />

      <PartBuilders
        title="Built on open source"
        body={[
          <>Universe is built on WorkAdventure. Docker Compose files bring the whole thing up on your own servers.</>,
        ]}
        facts={[
          ["Language", "TypeScript"],
          ["Screens", "Svelte"],
          ["Map engine", "Phaser 3"],
          ["Between services", "gRPC"],
          ["Video", "WebRTC and LiveKit"],
          ["Chat", "Matrix"],
          ["Orbit", "Next.js, Prisma, PostgreSQL"],
          ["Bot tools", "MCP"],
        ]}
        links={[{ label: "Self-hosting", href: "/features/self-hosting" }, { label: "WorkAdventure fork", href: "/workadventure-fork" }, { label: "Developer hub", href: "/developers" }]}
      />

      <PartRelated
        links={[
          { label: "Self-hosting", href: "/features/self-hosting", note: "Run Universe on your own servers." },
          { label: "Scripting API", href: "/features/scripting", note: "Code that runs inside a map." },
          { label: "MCP integration", href: "/mcp-integration", note: "How tools plug into Universe." },
          { label: "Open source", href: "/open-source", note: "Read the code." },
        ]}
      />

      <PageClosing
        title={<>Come and see it for yourself</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Developer hub', href: '/developers' }]}
        source="page_features_tech_stack"
      />
    </main>
  );
}
