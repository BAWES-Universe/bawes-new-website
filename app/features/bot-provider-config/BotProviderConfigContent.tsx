import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BotProviderConfigPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Provider Config"
        title={<>Choose your <span className="text-gradient-accent">bot&apos;s brain</span></>}
        lead={<>Pick which AI model runs each bot. Use a different one for each job, and change it whenever you like.</>}
        detail={[<>Every bot works on Universe AI from the start. Bring your own key for OpenAI, Claude, Gemini and many more, or run open models on your own computer.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_provider_config"
      />

      <PartSteps
        eyebrow="How it works"
        title="Three ways to run a bot"
        steps={[
          { title: "Universe AI", text: "Ready to use. Nothing to set up." },
          { title: "Your own key", text: "Add an AI key in Orbit and lend it to your universe. Then pick it for the bot. You pay your provider directly." },
          { title: "Your own computer", text: "Run open models with LM Studio, Ollama, llama.cpp or vLLM and point a bot at them." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="A different brain for every job"
        cards={[
          { icon: "search", title: "Pick the model", text: "Search the models your key offers. The list shows which ones can use tools." },
          { icon: "image", title: "Vision", text: "Pick a model with Vision and the bot can look at pictures people send in chat." },
          { icon: "swap_horiz", title: "Change any time", text: "Move a bot to another key or another model. The bot keeps its name, memory and settings." },
          { icon: "health_and_safety", title: "If your key goes down", text: "Universe AI answers until it is back, or the bot rests until then." },
          { icon: "record_voice_over", title: "A voice too", text: "Voices work the same way. One company can listen and another can speak.", more: { label: "Every model and voice you can add", href: "/guide/ai-and-voice-providers" } },
          { icon: "short_text", title: "Longest reply", text: "Set how long an answer may get, to keep a bot short or let it write a lot." },
        ]}
      />

      <PartBuilders
        title="Many providers, one setting"
        body={[
          <>Universe speaks to OpenAI, Claude, Gemini, DeepSeek, Mistral, Groq, OpenRouter and more. Any server that speaks the OpenAI format works as well.</>,
          <>Keys are added once in Orbit, under AI keys, and lent to a universe. A bot only ever sees the keys lent to its own universe.</>,
        ]}
        facts={[
          ["Out of the box", "Universe AI"],
          ["Your own key", "Many providers"],
          ["Local models", "LM Studio, Ollama, llama.cpp, vLLM"],
          ["Code changes", "None"],
        ]}
        links={[{ label: "Every model and voice you can add", href: "/guide/ai-and-voice-providers" }, { label: "Universe AI and your own keys", href: "/guide/universe-ai" }]}
      />

      <PartRelated
        links={[
          { label: "Bot editor", href: "/features/bot-editor", note: "Everything about a bot on one screen." },
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
          { label: "Streaming chat", href: "/features/bot-streaming", note: "Answers that appear as they are written." },
          { label: "Self-hosting", href: "/features/self-hosting", note: "Run the whole thing yourself." },
        ]}
      />

      <PageClosing
        title={<>Ready to choose your bot brain?</>}
        body={<>Start on Universe AI, and switch to your own key whenever you like.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_provider_config"
      />
    </div>
  )
}
