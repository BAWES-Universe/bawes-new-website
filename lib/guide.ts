import type { SceneKind } from '@/components/page/Scene'

/**
 * The Guide: short pages in plain words, one for each thing a person can do in Universe today.
 * Every sentence here describes something that is live. Nothing here names a price or a limit.
 * The pages are plain data so they all look the same and a new one is one more entry (plus its folder under app/guide).
 */

export interface GuideSection {
  heading: string
  /** Plain paragraphs. */
  text?: string[]
  /** Numbered steps, in order. */
  steps?: string[]
  /** Short points, in no order. */
  points?: string[]
  /** Names shown as small pills, each group under its own label. */
  names?: { label: string; items: string[] }[]
  /** One line worth knowing, shown apart. */
  note?: string
}

export interface GuidePage {
  slug: string
  /** Short name, for lists and the breadcrumb. */
  name: string
  /** One line for lists and for search engines. */
  description: string
  /** The page title, in two parts: the second is drawn in the brand gradient. */
  title: [string, string]
  lead: string
  scene: SceneKind
  sections: GuideSection[]
}

export const GUIDE: GuidePage[] = [
  {
    slug: 'start-here',
    name: 'Start here',
    description: 'Your first five minutes in Universe: walk in, pick an avatar, move around and talk to someone.',
    title: ['Your first', 'five minutes'],
    lead: 'Open the link, pick a name and an avatar, and walk in. There is nothing to download, and you do not need an account to look around.',
    scene: 'fire',
    sections: [
      {
        heading: 'Walk in',
        steps: [
          'Press Enter the Universe. It opens in your browser.',
          'Type what people should call you. Everyone in the room sees it above your avatar.',
          'Pick an avatar. Choose a ready-made one or build your own, part by part. It stays on everywhere until you change it.',
          'Pick a companion to follow you around, or go without one.',
          'Allow your camera and microphone if you want the people you walk up to to see and hear you. You can turn them off at any time.',
        ],
      },
      {
        heading: 'Move around',
        text: ['On a keyboard, use the arrow keys or W, A, S and D. On a phone, drag the joystick on the screen.'],
      },
      {
        heading: 'Talk to someone',
        text: [
          'Walk up to someone and a conversation opens on its own. You do not need to type anything to start. Walk away and it ends.',
          'You can also open the list of who is here, look at a person’s card and send them a message.',
        ],
      },
      {
        heading: 'Meet the residents',
        text: [
          'AI residents stand in the rooms like everyone else. Walk up to one and talk. It answers in the chat, and some answer out loud.',
          'Inside Universe the buttons call them bots. It is the same thing.',
        ],
      },
      {
        heading: 'Guest or account',
        text: ['As a guest you can already walk around, talk with the people next to you, see who is here and react. An account adds:'],
        points: [
          'Messages to anyone with an account, groups, and every conversation kept.',
          'Your avatar and name on every device.',
          'Orbit: see what is popular, jump to where people are and save the places you love.',
          'Your own rooms, worlds and universes, built from templates, with your own members.',
        ],
      },
      {
        heading: 'Bring a friend',
        text: ['Share the link of the room you are in. Anyone with the link can walk straight in, with no download and no account.'],
      },
    ],
  },
  {
    slug: 'orbit',
    name: 'Orbit and your account',
    description: 'Orbit is your home base in Universe: where you are, where you have been, the places you saved and everything that is yours.',
    title: ['Orbit,', 'your home base'],
    lead: 'Orbit shows where you are, where you have been and what is yours. It is also where you make your own universe.',
    scene: 'travel',
    sections: [
      {
        heading: 'Open it',
        text: ['Press the Orbit button inside Universe. On a phone, Orbit has three tabs at the bottom: Home, Space and You.'],
      },
      {
        heading: 'Home',
        points: ['Where you are right now.', 'The places you visited lately, so you can go back in one tap.', 'Invitations waiting for your answer.'],
      },
      {
        heading: 'Find places and people',
        text: ['Discover lists universes, worlds, rooms and people. Star a room you like and it stays in My Stars.'],
      },
      {
        heading: 'Make your own',
        text: ['A universe holds worlds, and a world holds rooms. You can make all three in Orbit.'],
        steps: ['Create a universe and give it a name.', 'Add a world inside it.', 'Add a room. Start from a template so it is ready to walk into.', 'Invite your people.'],
      },
      {
        heading: 'Memberships and invitations',
        text: ['When someone invites you to their world, the invitation shows up in Orbit. Accept it or turn it down. You can leave a world whenever you like.'],
      },
      {
        heading: 'You',
        points: [
          'Your visit card: what other people see when they open your card.',
          'Your passport: a stamp for every world you have visited.',
          'Your activity, newest first.',
          'Your artifacts: every one you own, in one list.',
          'Your AI keys, under Settings.',
        ],
      },
    ],
  },
  {
    slug: 'artifacts',
    name: 'Artifacts',
    description: 'Ask an AI resident for a page, a mini app, a document or a drawing. It is made in the chat, every change is kept, and you choose who can open it.',
    title: ['Ask for it.', 'Keep it.'],
    lead: 'Ask a resident for a page, a mini app, a document or a drawing. It makes it in the chat, and it is yours to open, change and share.',
    scene: 'build',
    sections: [
      {
        heading: 'Four kinds',
        points: ['A page.', 'A mini app.', 'A document.', 'A drawing.'],
      },
      {
        heading: 'Ask for one',
        steps: ['Open a chat with a resident, or walk up to one.', 'Say what you want in your own words.', 'A card appears in the chat when it is ready. Open it from there.'],
      },
      {
        heading: 'Change it',
        text: ['Ask for a change and the resident makes a new version. Every change is a new version, so nothing is lost. You can look at an older version and restore it.'],
      },
      {
        heading: 'Choose who can open it',
        points: [
          'People in this chat.',
          'Just you.',
          'Anyone with the link. That includes people who are not signed in.',
        ],
        note: 'Copy the link from the artifact when you want to send it to someone.',
      },
      {
        heading: 'Find it again',
        text: ['Every artifact you own is listed under Your artifacts, in the chat and in Orbit under You.'],
      },
    ],
  },
  {
    slug: 'universe-ai',
    name: 'Universe AI and your own keys',
    description: 'Universe AI is built in, so residents answer from your first minute. You can also run residents on your own AI key.',
    title: ['Universe AI', 'is built in'],
    lead: 'Residents answer from your first minute, with nothing to set up. When you want more, bring your own AI key.',
    scene: 'chat',
    sections: [
      {
        heading: 'Nothing to set up',
        text: ['Universe AI comes with Universe. Walk up to a resident and it answers.'],
      },
      {
        heading: 'When your replies run out',
        text: [
          'Universe AI gives you a number of replies. When you have used them, the chat tells you so and shows the time the resident answers you again.',
          'Residents that run on their maker’s own AI key keep answering.',
        ],
        note: 'As a guest, you can sign in to keep chatting.',
      },
      {
        heading: 'Bring your own key',
        steps: [
          'In Orbit, open You, then Settings, then AI keys.',
          'Add a key and pick a provider: one with an API key, or an AI running on your own computer.',
          'Universe checks the key before it is saved.',
          'Put a resident on it. Chats with a resident on your own key do not count toward your Universe AI replies.',
        ],
      },
      {
        heading: 'Lend a key to a universe',
        text: ['A key starts out private: only you can put a resident on it. Lend it to one of your universes and the residents there can use it. You can limit which models they may use.'],
      },
      {
        heading: 'If a key stops working',
        text: [
          'Each key shows Working or Down. Universe keeps checking a key that is down and switches back as soon as it answers.',
          'You choose what happens meanwhile: residents keep replying on Universe AI, or they rest until the key is back. If they rest, visitors see one line saying so and nothing goes to another AI.',
        ],
      },
    ],
  },
  {
    slug: 'ai-and-voice-providers',
    name: 'AI and voice providers',
    description: 'The AI models and voice companies you can connect to Universe with your own key, including AI that runs on your own computer.',
    title: ['Any model.', 'Any voice.'],
    lead: 'Universe AI works out of the box. If you would like a certain model or a certain voice, add your own key for it.',
    scene: 'desks',
    sections: [
      {
        heading: 'AI models',
        text: ['Add a key in Orbit under You, Settings, AI keys. Each resident then picks one of the models that key offers.'],
        names: [
          {
            label: 'With an API key',
            items: ['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'xAI', 'Mistral', 'Groq', 'OpenRouter', 'NVIDIA NIM', 'Cerebras', 'Together AI', 'Fireworks AI', 'DeepInfra', 'Hugging Face', 'Qwen', 'Kimi', 'GLM (Z.ai)', 'Vercel AI Gateway'],
          },
          { label: 'On your own computer', items: ['LM Studio', 'Ollama', 'llama.cpp', 'vLLM'] },
        ],
        note: 'Not on the list? “Any OpenAI-compatible server” takes any address that speaks the OpenAI format.',
      },
      {
        heading: 'Voices',
        text: [
          'A voice has two jobs: listening to you and speaking back. A company that does both needs one key for a resident’s whole voice. You can also mix them, so one company listens and another speaks.',
        ],
        names: [
          {
            label: 'Voice companies',
            items: [
              'ElevenLabs', 'Cartesia', 'Deepgram', 'Soniox', 'Fish Audio', 'Hume', 'OpenAI', 'Google', 'Azure AI Speech', 'Azure OpenAI', 'AWS', 'AssemblyAI', 'Speechmatics', 'Gladia', 'Rime', 'Inworld', 'MiniMax', 'Resemble AI',
              'Neuphonic', 'Smallest AI', 'Speechify', 'Sarvam AI', 'Ultravox', 'CAMB.AI', 'Gradium', 'Async', 'Bland', 'Groq', 'Mistral', 'Together AI', 'NVIDIA', 'Meta', 'Zoom', 'fal', 'xAI',
            ],
          },
        ],
        note: 'You can also use a speech server running on your own computer.',
      },
      {
        heading: 'If a voice stops working',
        text: ['Residents on that voice reply in text until it is back. No other voice is used in its place.'],
      },
    ],
  },
  {
    slug: 'talking-out-loud',
    name: 'Talking to residents out loud',
    description: 'How to talk with an AI resident using your voice: walk up, turn your microphone on and say its name.',
    title: ['Say its name', 'and talk'],
    lead: 'Residents with a voice listen and answer out loud. Walk up, turn your microphone on and say the resident’s name.',
    scene: 'talk',
    sections: [
      {
        heading: 'Start talking',
        steps: ['Walk up to a resident.', 'Turn your microphone on. Nobody hears you while it is off.', 'Say the resident’s name, then what you want.', 'It answers out loud, and the conversation also shows in the chat.'],
      },
      {
        heading: 'When you are done',
        text: ['When the talk is over the chat says so. Say the resident’s name again whenever you want to pick it back up.'],
      },
      {
        heading: 'Two residents at once',
        text: ['When two residents stand with you, they answer in text for now. Voice comes back when one of them leaves.'],
      },
      {
        heading: 'Which residents talk',
        text: ['A resident talks when its maker gave it a voice. The others answer in the chat. If a resident’s voice is down, it replies in text until the voice is back.'],
      },
      {
        heading: 'Answer a card out loud',
        text: ['When a resident asks you a question on a card, you can say your answer in place of tapping it.'],
      },
    ],
  },
  {
    slug: 'residents-ask-first',
    name: 'Residents ask first',
    description: 'Before an AI resident does something that matters, it shows you a card and waits for your answer. No answer means nothing is done.',
    title: ['Residents', 'ask first'],
    lead: 'Before a resident does something that matters, it shows you a card and waits. If you do not answer, nothing is done.',
    scene: 'resident',
    sections: [
      {
        heading: 'The card',
        text: ['The card says which resident is asking and what it wants to do. You can open the details before you decide.'],
        points: ['Pick one of the answers on the card.', 'Type your own answer.', 'Say your answer out loud.'],
        note: 'When you are standing with other people, only you see your card.',
      },
      {
        heading: 'Nothing happens without you',
        points: [
          'Close the card and nothing is done.',
          'Type something else and nothing is done.',
          'Leave it alone and it closes after a few minutes, with nothing done. The card warns you a minute before, and you can ask for more time.',
        ],
      },
      {
        heading: 'Some things are asked every time',
        text: ['For some actions a resident asks every single time, and the card says so.'],
      },
      {
        heading: 'When an app does not answer',
        text: ['Sometimes the app a resident used gives no answer, so the resident cannot tell if the action worked. It tells you that plainly and asks you to check the app before trying again.'],
      },
    ],
  },
  {
    slug: 'chats',
    name: 'Chats',
    description: 'Chat in Universe: talk to people next to you, send direct messages, add friends, record voice notes and find shared photos, links and files.',
    title: ['Chats,', 'near and far'],
    lead: 'Talk with the people next to you, or message anyone from anywhere. Add friends, send voice notes and find what was shared.',
    scene: 'chat',
    sections: [
      {
        heading: 'Nearby chat',
        text: ['Walk up to someone and a chat opens on its own. It is for the people standing together. This works for guests too.'],
      },
      {
        heading: 'Direct messages',
        text: [
          'With an account you can message anyone, start groups and keep every conversation.',
          'A chat shows where the other person is: here in the same room, in another room, online or offline.',
        ],
      },
      {
        heading: 'Friends',
        steps: ['Open a person’s card and choose Add friend.', 'They accept your request.', 'Now you can see where they are in Universe and go to them in one tap.'],
        note: 'Friends see where you are in Universe. You can change that in Settings, under Friends.',
      },
      {
        heading: 'Voice notes',
        text: ['Hold the record button and let go to send. You can also tap to record, and slide to cancel.'],
      },
      {
        heading: 'Photos, GIFs and files',
        text: ['Send pictures and files, or pick a GIF. Open Details in a chat to find everything that was shared, sorted into Media, Links and Files, next to the pinned messages.'],
      },
      {
        heading: 'Block and report',
        text: ['You can block a person or report them from the chat.'],
      },
    ],
  },
  {
    slug: 'on-your-phone',
    name: 'Universe on your phone',
    description: 'Universe runs in your phone’s browser. Add it to your home screen so it opens in one tap, full screen, and turn on notifications.',
    title: ['Universe', 'in your pocket'],
    lead: 'Universe runs in your phone’s browser. Add it to your home screen and it opens in one tap, full screen.',
    scene: 'looks',
    sections: [
      {
        heading: 'On an iPhone or iPad',
        steps: ['Open Universe in Safari or Chrome.', 'Tap Share.', 'Tap Add to Home Screen.', 'Keep Open as Web App on, then tap Add.'],
        note: 'If you opened the link inside another app, copy it and open it in Safari first.',
      },
      {
        heading: 'On Android',
        text: ['Open Universe in Chrome, open the browser’s menu next to the address bar and install Universe from there.'],
      },
      {
        heading: 'Notifications',
        text: ['Universe can tell your phone when someone messages you, when a friend request is accepted and when someone replies, even when Universe is closed.'],
        note: 'You choose what you get in Settings, under Notifications.',
      },
      {
        heading: 'Moving around',
        text: ['Drag the joystick on the screen to walk. Walk up to people to talk, the same as on a computer.'],
      },
      {
        heading: 'Orbit on a phone',
        text: ['Orbit has three tabs at the bottom of the screen: Home, Space and You.'],
      },
    ],
  },
]

export const guideBySlug = (slug: string): GuidePage => {
  const page = GUIDE.find((p) => p.slug === slug)
  if (!page) throw new Error(`No guide page called ${slug}`)
  return page
}
