import type { SceneKind } from '@/components/page/Scene'

/**
 * The Guide: short pages in plain words, one for each thing a person can do in Universe.
 * Nothing here names a price or a limit.
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
    slug: 'your-brick',
    name: 'Your Brick',
    description: 'Brick is your own AI companion in Universe. Find it in your chats, ask it anything, call it, and bring it along into a room.',
    title: ['Meet', 'your Brick'],
    lead: 'Everyone gets a Brick: your own helper in Universe. Ask it anything, hand it a job, or give it a goal and it keeps at it while you are away.',
    scene: 'brick',
    sections: [
      {
        heading: 'Find it',
        text: ['Open Chats. Your Brick is there from your first visit. The Bricks button at the bottom of Chats opens the Bricks page, with every Brick you have.'],
      },
      {
        heading: 'Start with a tap',
        text: ['A new chat with your Brick offers a few starters.'],
        points: ['See what I can do: a few ideas to start with.', 'Give me a goal: it plans it and keeps at it while you are away.', 'Make another Brick: one for a single job, like your recipes.', 'Connect my apps: email, calendar, GitHub and more.'],
      },
      {
        heading: 'Call it',
        steps: ['Open your Brick’s chat and press Call.', 'Talk. It listens, and it answers out loud.', 'Press End call when you are done.'],
        note: 'If someone walks up to you during a call, a card asks whether to stay with your Brick or talk to them. The call waits on hold until you tap Resume call.',
      },
      {
        heading: 'What it remembers',
        text: ['Your Brick keeps what matters from your chats. Open Memory on its page to see the list. Only you see it.'],
        points: ['Press Forget next to one thing to remove it.', 'Press Forget everything and your Brick starts fresh with you. Your chats and files stay.', 'Or just say “forget that” in the chat.'],
      },
      {
        heading: 'Bring it along',
        text: ['On your Brick’s page, press Bring along. It walks beside you on the map, and people around you can talk to it too. It walks with you from room to room, and goes when you leave or press End visit.'],
        note: 'With other people it never uses Apps signed in as you, and it keeps what you told it to itself.',
      },
      {
        heading: 'Give it a home in a room',
        text: ['In a room you can edit, choose Add one of your Bricks and pick a spot. Anyone in the room can talk to it. Your own chat with it carries on as before.'],
      },
      {
        heading: 'Delete one, and undo it',
        text: ['Delete a Brick from its page. Its chat, what it remembers, its goals and tasks and its computer’s files go. Everything it made stays in Your artifacts. You can undo the delete on the Bricks page until the day shown.'],
      },
    ],
  },
  {
    slug: 'more-bricks',
    name: 'More Bricks',
    description: 'Ask your Brick for a helper and it makes a new Brick for one job. Or make one yourself, or start from a template.',
    title: ['A Brick for', 'every job'],
    lead: 'One Brick can do a lot. A Brick with a single job does that job better. Ask yours for a helper and it makes one on the spot.',
    scene: 'brick',
    sections: [
      {
        heading: 'Ask your Brick',
        steps: [
          'Open your chat with your Brick.',
          'Say what the helper is for: “make me a bot that keeps my mum’s recipes”.',
          'Your Brick makes it and gives you a link to its chat. It is in Chats from then on.',
        ],
        note: 'If you only say “make me another Brick”, it asks one short question first: what job should it do?',
      },
      {
        heading: 'When Brick suggests one',
        text: ['When the same kind of job keeps coming back, your Brick may suggest a Brick just for it, on a small card under its answer. Choose to make it, or Not now. If you say Not now, it keeps helping in the same chat and does not ask again.'],
      },
      {
        heading: 'Make one yourself',
        steps: ['Open the Bricks page and press New Brick.', 'Pick its look. Its first name comes from the colour, like Teal Brick.', 'Create it. It is ready to talk right away.'],
      },
      {
        heading: 'What a new Brick starts with',
        points: ['A name, and one line on what it does.', 'Its instructions: the one job, written from what you already said.', 'Its own chat and its own memory. It does not know your other chats.'],
      },
      {
        heading: 'Change your mind',
        text: ['Delete a Brick from its page. You can undo it on the Bricks page until the day shown.'],
      },
    ],
  },
  {
    slug: 'brick-templates',
    name: 'Brick templates',
    description: 'Start a new Brick from a template someone shared, or share one of your own. Memory, chats, Apps and keys never go with a template.',
    title: ['Start from', 'a template'],
    lead: 'A template is a Brick someone set up well and chose to share. Use one and you get your own new Brick, which you can change however you like.',
    scene: 'looks',
    sections: [
      {
        heading: 'Use a template',
        steps: [
          'Press New Brick, then Start from a template.',
          'Pick one from Starred, Picks, Bricks you have met, Popular or Trending. A Brick that shares a template also has Use template on its card.',
          'Read what it starts with, and what it needs from you.',
          'Press Create Brick.',
        ],
        note: 'Chat works right away. If its main job needs an App or a computer, you connect your own after you create it.',
      },
      {
        heading: 'What you get, and what stays behind',
        points: [
          'You get its look and personality, its instructions, and a first thing to try. You can read and edit all of it.',
          'Routines that come with it arrive switched off. They run only after you set them up and turn them on.',
          'Its memory, its chats, and the maker’s Apps, keys, sign-ins and files stay with the maker.',
        ],
      },
      {
        heading: 'Share yours',
        steps: [
          'Open your Brick’s page and open Template.',
          'Choose what goes with it: its look, and which routines to send along.',
          'Press Read exactly what gets shared, and check it.',
          'Press Share as a template.',
        ],
        note: 'Something that looks like a secret never goes out. Take it out of the Brick, then share.',
      },
      {
        heading: 'When a template changes',
        text: ['If the maker shares new changes, your Brick shows Template updated. Open Review and pick what you want to take, or press Keep mine. Your Brick never changes by itself.'],
      },
      {
        heading: 'Stop sharing',
        text: ['Press Stop sharing whenever you like. Nobody new can use the template, and Bricks already made from it stay as they are.'],
      },
    ],
  },
  {
    slug: 'apps',
    name: 'Apps',
    description: 'Connect email, calendar, GitHub and 1,700+ more Apps, choose which of your Bricks can use each one, and decide what they do right away and what they ask first.',
    title: ['Connect', 'your Apps'],
    lead: 'Connect an App once. Then choose which of your Bricks can use it, and what each one may do with it.',
    scene: 'desks',
    sections: [
      {
        heading: 'Connect one',
        steps: [
          'Open the Bricks page and open Apps.',
          'Search for the App and press Connect.',
          'Sign in on the App’s own page. Universe never sees your password.',
          'Choose which of your Bricks can use it.',
        ],
        note: 'You can also just ask a Brick: “connect my Notion”.',
      },
      {
        heading: 'Choose what a Brick may do',
        text: ['Tap a Brick that uses the App. Each kind of action runs right away, asks first, or is off.'],
        points: ['Looks things up.', 'Makes new things.', 'Changes things.', 'Deletes or sends out.'],
      },
      {
        heading: 'Instant Apps',
        text: ['Some Apps work without you connecting anything. They are listed as ready to use, and your Brick can use them the moment you ask.'],
      },
      {
        heading: 'Add your own App',
        steps: ['On the Apps page, press Add your own app.', 'Paste the App’s link.', 'Universe checks how it signs in. Sign in, or paste the key the service gave you.', 'Choose which of your Bricks use it.'],
      },
      {
        heading: 'Keys',
        text: ['Some services work with a key. Add it in Apps, where it is stored encrypted. Keys do not go in chat: if you paste one into a message, the message is not sent and you are pointed to Apps.'],
      },
      {
        heading: 'Share an App with a universe',
        points: [
          'Lend an App to a universe where you manage bots, and choose what bots there may do. Its key is never shown to anyone there, and you can take it back any time.',
          'A universe can also have Apps of its own, signed in with the team’s account. They stay when someone leaves.',
          'Let people who chat with your Brick ask for the jobs you pick. Nothing else of the App can be reached.',
        ],
      },
      {
        heading: 'Disconnect',
        text: ['Disconnect an App and every Brick and bot stops using it at once, also in a chat that is already open. Nothing in the App itself is deleted.'],
      },
    ],
  },
  {
    slug: 'goals-and-tasks',
    name: 'Goals and tasks',
    description: 'Give your Brick a goal, a schedule, a reminder or something to watch. It keeps at it while you are away and messages you when something changes.',
    title: ['Give your Brick', 'a goal'],
    lead: 'Goals are optional. Give your Brick something to keep working on, and it plans the steps, keeps at it while you are away, and messages you only when something changes or it needs you.',
    scene: 'travel',
    sections: [
      {
        heading: 'Four things you can hand over',
        points: [
          'A goal: “Get my visa before I fly on 12 Dec”.',
          'Keep watch: “Tell me when the flight gets cheaper”.',
          'On a schedule: “Each workday at 7:30, tell me what’s on”.',
          'A reminder: “Remind me to get the car on Sunday at 4”.',
        ],
      },
      {
        heading: 'Set one',
        steps: ['Open your Brick’s chat, or press Give me a goal.', 'Say it in your own words.', 'Your Brick asks for anything it still needs, then gets on with it.'],
      },
      {
        heading: 'See how it is going',
        text: ['Open Goals and tasks on your Brick’s page. It lists what is in progress, what is scheduled and what is done. Everything it did shows each run with its result.'],
        note: 'One page lists the goals and tasks of all your Bricks. Open it from the Bricks page.',
      },
      {
        heading: 'Stay in charge',
        points: ['Change, Pause and Resume, any time.', 'Run now, when you do not want to wait for the next run.', 'Snooze, to put a task off.', 'Mark done, or Reopen.'],
      },
      {
        heading: 'When it needs you',
        text: ['If your Brick is waiting for something from you, the goal says what it is waiting for. If it is not sure it got there, it asks you whether the goal is done.'],
      },
    ],
  },
  {
    slug: 'brick-computer',
    name: 'A computer for your Brick',
    description: 'Give your Brick its own computer for the jobs no App can do. Watch it work on real websites and files, and take over to pay or submit.',
    title: ['A computer', 'for your Brick'],
    lead: 'With its own computer, your Brick does the jobs no App can do. It uses real websites and real files, the way you would, and keeps going while you are away.',
    scene: 'desks',
    sections: [
      {
        heading: 'What it is for',
        points: [
          'Forms and applications: get a visa form ready from your passport and ticket.',
          'Bookings and orders: find the flight or the table and get the checkout ready.',
          'Sites that have no app: work a portal step by step, like a person would.',
          'Files and code: turn 40 receipts into one sheet, or build and run code.',
        ],
      },
      {
        heading: 'Give it one',
        steps: ['Open your Brick’s page and open Computer.', 'Press the button to give your Brick a computer.', 'Hand it a job in the chat. It uses the computer by itself when the job needs a real website or real files.'],
        note: 'The computer rests until a job needs it, and it counts time only while it works.',
      },
      {
        heading: 'Watch and take over',
        steps: ['While it works, a bar above the chat shows the job and the step.', 'Tap Watch to see its screen.', 'Tap Take over to pay, submit or fix something yourself.', 'Tap Hand back when you are done.'],
        note: 'While you are in control, your Brick cannot see or type. It cannot see your card or what you type.',
      },
      {
        heading: 'Your details',
        text: ['Your Brick stops before your details reach a site. When a page is ready for them, press Fill in my details and check them. Each page after that asks again. Paying and submitting are yours.'],
      },
      {
        heading: 'Its files',
        text: ['Files on the computer are kept between jobs. Browse and download them from Files on your Brick’s page. What it made for you also lands in your chat.'],
      },
      {
        heading: 'Turn it off',
        text: ['Press Turn off computer. Its files are kept, and your Brick goes back to answers and Apps.'],
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
          'Public. It goes on your page, where anyone can find it.',
        ],
        note: 'Copy the link from the artifact when you want to send it to someone.',
      },
      {
        heading: 'Publish a version',
        text: ['Press Publish when a version is ready. People who open the artifact see the published version, and you keep working on the next one in private. Publish again when the next one is ready.'],
      },
      {
        heading: 'Take a payment on a page',
        text: ['Add the key of your payment service in Apps, then ask your Brick for a page that takes a payment. Buyers are sent to the service’s own page to pay, and the page says so when the payment has gone through.'],
      },
      {
        heading: 'Find it again',
        text: ['Every artifact you own is listed under Your artifacts, in the chat and in Orbit under You.'],
      },
    ],
  },
  {
    slug: 'community',
    name: 'Community',
    description: 'Make an artifact public, feature your best on your own page, keep boards, and browse what other people made.',
    title: ['Show it.', 'Find more.'],
    lead: 'A public artifact goes on your page, where anyone can find it, and it can appear in Community. You choose, one artifact at a time.',
    scene: 'market',
    sections: [
      {
        heading: 'Make one public',
        steps: ['Open the artifact and press Share.', 'Under Who can open it, choose Public.', 'Switch on Feature on your page to pin it to the top.'],
        note: 'Only you can make your artifact public. A bot never can. While it is public, only you can ask a bot to change it.',
      },
      {
        heading: 'Your page',
        text: ['Your page shows everything you made public, with Featured first. You also see your other artifacts there, each marked with who can see it: public, link, or in chat.'],
      },
      {
        heading: 'Browse Community',
        steps: ['Open Artifacts and choose Community.', 'Look through Featured, New and Popular, or pick a kind: Apps, Pages, Docs, Drawings.', 'Tap a card to open it. Tap the maker’s name to open their page.'],
      },
      {
        heading: 'Boards',
        text: ['Make a board, give it a name, and add artifacts to it. A board is public or not. You can save someone else’s public artifact to a board of yours.'],
      },
      {
        heading: 'Make a copy',
        text: ['Copy a public artifact and the copy is yours to change. It says which artifact it was copied from.'],
      },
      {
        heading: 'Take it back',
        text: ['Choose Make it not public. It leaves your page and Community. Its link still works.'],
      },
      {
        heading: 'Report something',
        text: ['Open the menu on a card and press Report. Say what is wrong: it tricks people, it is hateful or harassing, it is sexual or violent, or it is someone else’s work. A person looks at every report.'],
      },
    ],
  },
  {
    slug: 'quests',
    name: 'Quests',
    description: 'A quest is a small goal a place sets for its visitors. Your Brick offers it, leads you through a few stops, and keeps it quiet when you are busy.',
    title: ['Take', 'a quest'],
    lead: 'A quest is a few stops in a place, and the game notices each one by itself. Nobody ticks a box. Your Brick leads the way.',
    scene: 'travel',
    sections: [
      {
        heading: 'Start one',
        text: ['When you arrive somewhere that has a quest, the Brick of the place or your own Brick offers it once. Choose to start, or Not now. Not now is remembered.'],
        note: 'New here? The Welcome tour is a quest that is built in.',
      },
      {
        heading: 'Follow it',
        text: ['One quiet line at the top of the chat shows the quest, whose it is, and the stop you are on. Press Stop to leave it.'],
        points: ['Say hello to someone.', 'Walk to a spot on the map.', 'Place something in the room.'],
        note: 'One quest at a time. It stays quiet while you are on a call or typing.',
      },
      {
        heading: 'When you finish',
        text: ['Your Brick asks once whether to show the quest on your profile. Private is where it starts. A running quest is listed in Goals and tasks, and under Done afterwards.'],
      },
      {
        heading: 'As a guest',
        text: ['You can do a quest without signing in. Sign in during that visit and your progress comes along.'],
      },
      {
        heading: 'Make one for your place',
        steps: [
          'Talk to a Brick that lives in your place.',
          'Say the quest: “make a tour: say hello at a stall, walk to the stage, find the coffee stall”.',
          'The Brick shows it back on one card. Press Publish quest.',
        ],
        note: 'If you ask for a stop the game cannot notice, the Brick says so and offers the nearest one it can.',
      },
      {
        heading: 'See how it goes',
        text: ['The Brick’s page has a Quests group: what is published, and how many people started and finished. Change a quest or pause it from there.'],
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
