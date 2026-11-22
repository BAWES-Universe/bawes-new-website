'use client'

import { useState } from 'react'
import { Avatar, Brick } from './sprites'

/** Brick: an example chat, what it can do, and the five settings tabs it really has. */

const ABILITIES: { title: string; body: string }[] = [
  { title: 'Chat or call', body: 'Message it, or call it and talk out loud.' },
  { title: 'Uses your Apps', body: 'Connect the Apps you already use. It asks before it changes anything.' },
  { title: 'Remembers', body: 'It keeps what matters, and you can see it and remove it.' },
  { title: 'Keeps going', body: 'Give it a reminder, a daily briefing or a goal. It works while you are away.' },
  { title: 'Has a computer', body: 'For bigger jobs it gets its own computer, and you can watch it work.' },
  { title: 'Comes along', body: 'Bring your Brick into a room, or let it live in one.' },
]

function Pill({ on, children }: { on?: boolean; children: React.ReactNode }) {
  return <span className={`uh-pill ${on ? 'uh-on' : ''}`}>{children}</span>
}

const TABS: { name: string; rows: [string, React.ReactNode][] }[] = [
  {
    name: 'Look',
    rows: [
      [
        'Colour',
        <span className="uh-pick" key="c">
          <Brick colour="orange" />
          <Brick colour="violet" />
          <Brick colour="teal" />
          <Brick colour="pink" />
          <Brick colour="blue" />
          <Brick colour="amber" />
        </span>,
      ],
      [
        'Or dress it as an avatar',
        <span className="uh-pick" key="a">
          <Avatar id="e" />
          <Avatar id="k" />
          <Avatar id="cat" />
        </span>,
      ],
      ['Name', 'Brick'],
    ],
  },
  {
    name: 'Mind',
    rows: [
      ['Runs on', <><Pill on>Universe AI</Pill><Pill>My own key</Pill></>],
      ['Model', 'Any model your provider offers'],
      ['What it is like', 'Your own instructions, in plain words'],
    ],
  },
  {
    name: 'Voice',
    rows: [
      ['Hears with', <><Pill on>Universe AI</Pill><Pill>Deepgram</Pill><Pill>Soniox</Pill></>],
      ['Speaks with', <><Pill on>Universe AI</Pill><Pill>ElevenLabs</Pill><Pill>Cartesia</Pill></>],
      ['Voice', "Pick from the provider's voices"],
    ],
  },
  {
    name: 'Behavior',
    rows: [
      ['Where it lives', <><Pill on>With me</Pill><Pill>In a room</Pill></>],
      ['When someone walks up', 'Says hello'],
      ['Goals and reminders', 'Runs them while you are away'],
    ],
  },
  {
    name: 'Permissions',
    rows: [
      ['Who can talk to it', <><Pill on>Private</Pill><Pill>Public</Pill></>],
      ['Before it changes, deletes or sends', 'Asks me first'],
      ['Apps it can use', 'Only the ones you connect'],
    ],
  },
]

export default function BrickSection() {
  const [tab, setTab] = useState(0)

  return (
    <div className="uh-brick-grid">
      <div className="uh-chat surface-card" aria-label="Example chat with Brick">
        <div className="uh-chat-top">
          <span className="uh-bface uh-bk-orange" />
          <div>
            <b>Brick</b>
            <small>Here, ready</small>
          </div>
        </div>
        <div className="uh-msg uh-me">Build a sign-up page for Friday game night and put it on my calendar.</div>
        <div className="uh-msg uh-it">On it.</div>
        <div className="uh-steps">Building the app · asking Google Calendar · 4 steps</div>
        <div className="uh-acard">
          <div className="uh-thumb uh-page" />
          <div>
            <b>Friday Game Night</b>
            <small>App · version 1</small>
            <div className="uh-row">
              <span className="uh-mini">Open</span>
              <span className="uh-mini uh-alt">Share</span>
            </div>
          </div>
        </div>
        <div className="uh-msg uh-it">Done. The event is on your calendar. Want me to remind everyone on Friday?</div>
        <div className="uh-msg uh-me">Yes please.</div>
      </div>

      <div>
        <div className="uh-can">
          {ABILITIES.map((a) => (
            <div key={a.title} className="surface-card">
              <b>{a.title}</b>
              <span>{a.body}</span>
            </div>
          ))}
        </div>

        <div className="uh-set surface-card">
          <div className="uh-set-top">
            <b>Set it up your way</b>
            <div className="uh-tabs" role="tablist" aria-label="Brick settings">
              {TABS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  id={`brick-tab-${i}`}
                  aria-selected={i === tab}
                  aria-controls="brick-tabpanel"
                  onClick={() => setTab(i)}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
          <div className="uh-rows" role="tabpanel" id="brick-tabpanel" aria-labelledby={`brick-tab-${tab}`}>
            {TABS[tab].rows.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
