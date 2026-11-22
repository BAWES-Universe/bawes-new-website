import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export const metadata: Metadata = {
  title: 'Bot File Parsing — PDF, Word, Excel, Web Pages',
  description: 'Drop a PDF, Word doc, Excel spreadsheet, or paste a URL. Bots read the content and answer questions about it right in the chat.',
  openGraph: {
    title: 'Bot File Parsing — PDF, Word, Excel, Web Pages',
    description: 'Drop a PDF, Word doc, Excel spreadsheet, or paste a URL. Bots read the content and answer questions about it right in the chat.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot File Parsing — PDF, Word, Excel, Web Pages',
    description: 'Drop a PDF, Word doc, Excel spreadsheet, or paste a URL. Bots read the content and answer questions about it right in the chat.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotFileParsingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot File Parsing"
        title={<>Bots that <span className="text-gradient-accent">read your files</span></>}
        lead={<>Hand a bot a PDF, a Word document, a spreadsheet or a web link, then ask it questions about what is inside.</>}
        detail={[<>Drop a PDF, Word doc, Excel spreadsheet or PowerPoint in the chat, or paste a link. The bot reads it and answers questions about it.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_file_parsing"
      />

      <PartSteps
        eyebrow="How it works"
        title="Drop it in and ask"
        steps={[
          { title: "Send the file", text: "Attach it in the chat with the bot, or paste a link to a web page." },
          { title: "The bot reads it", text: "It pulls the text out of the file. You do not have to copy anything." },
          { title: "Ask away", text: "Ask for a summary, a number from page 12, or the three main points." },
        ]}
      />

      <PartCards
        eyebrow="What it reads"
        title="The files you already have"
        cards={[
          { icon: "picture_as_pdf", title: "PDF", text: "Contracts, reports, papers and manuals." },
          { icon: "description", title: "Word", text: "Documents written in Word." },
          { icon: "table_chart", title: "Excel", text: "Spreadsheets, turned into rows the bot can read." },
          { icon: "slideshow", title: "PowerPoint", text: "The text, the tables and the speaker notes of every slide." },
          { icon: "language", title: "Web pages", text: "Paste a link and the bot reads the page." },
          { icon: "data_object", title: "Text and data", text: "Plain text, JSON and XML files." },
          { icon: "image", title: "Pictures", text: "A bot whose model has Vision can look at the pictures you send.", more: { label: "Bot provider config", href: "/features/bot-provider-config" } },
        ]}
      />

      <PartBuilders
        title="Read on the server, answered by the model"
        body={[
          <>The text is taken out of the file by the bot server and handed to the AI model with your question. Nothing has to be installed.</>,
          <>The bot keeps a list of the files from the chat, so you can ask about one again later. Ask the bot to forget you and your files are removed at once.</>,
        ]}
        facts={[
          ["Documents", "PDF, Word, Excel, PowerPoint"],
          ["Web", "Pages by link"],
          ["Data", "Text, JSON, XML"],
          ["Pictures", "With a Vision model"],
        ]}
        links={[{ label: "Bot tool calling", href: "/features/bot-tools" }]}
      />

      <PartRelated
        links={[
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
          { label: "Bot media sending", href: "/features/bot-media-sending", note: "Bots that send pictures back." },
          { label: "Bot memory", href: "/features/bot-memory", note: "What a bot remembers." },
          { label: "Bot gallery", href: "/features/bot-gallery", note: "Many pictures in one message." },
        ]}
      />

      <PageClosing
        title={<>Ready to let bots read your files?</>}
        body={<>Drop a document in the chat and ask your first question.</>}
        links={[{ label: 'See bot tool calling', href: '/features/bot-tools' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_file_parsing"
      />
    </div>
  )
}
