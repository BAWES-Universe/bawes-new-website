'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Avatar, Brick, vars } from './sprites'
import Soon from './Soon'
import { at, halt, hasPosition, put, setRest, walk, type Pt } from './walk'

/**
 * The plaza: seven spots, one for each thing you can do in Universe.
 * Pick a spot and your avatar walks there; the caption says what it is and where to go.
 * Sprites are the real avatar and Brick sheets from the game.
 */

interface Thing {
  title: string
  soon?: boolean
  body: string
  go: string
}

const THINGS: Thing[] = [
  { title: 'Walk up and say hi', body: 'Get close to someone and you can hear and see them. Walk away and it goes quiet. It works like a real room.', go: 'Orbit shows which rooms have people in them right now.' },
  { title: 'A space that is yours', body: 'Start from a ready-made room, move things around, and open the door when you want company. Being alone here is fine too.', go: 'Create your own universe, then edit the room while you stand in it.' },
  { title: 'AI residents live here', body: 'They walk around, remember you, and talk out loud or in chat. Each one has a job it is good at.', go: 'Residents stand in the rooms like everyone else. Walk up and talk.' },
  { title: 'Orbit takes you anywhere', body: 'Universes hold worlds, and worlds hold rooms. Orbit shows what is live, keeps your stars and your passport, and takes you there in one tap.', go: 'Open Orbit from anywhere, or search for a room, a world or a person.' },
  { title: 'Talks, classes, game nights', body: 'A stage lets one person speak to the whole crowd. Sit in the audience, or take the stage yourself.', go: 'Friends and starred rooms show you where things are happening.' },
  { title: 'Your own AI companion', soon: true, body: 'Everyone gets a Brick. Chat with it or call it, connect your Apps, and ask it to build things for you.', go: 'Brick lives in your chats and can walk with you.' },
  { title: 'Apps, pages, documents, drawings', body: 'Whatever gets made here is an artifact. Open it inside Universe, or send a link to anyone.', go: 'Your artifacts sit in one list in your account, ready to share.' },
]

const N = THINGS.length

/** Where "You" stands in each spot: x and y as fractions of the spot, then the row to face. */
const YOU: [number, number, number][] = [
  [0.5, 0.8, 0],
  [0.87, 0.66, 1],
  [0.2, 0.7, 2],
  [0.5, 0.74, 3],
  [0.61, 0.82, 3],
  [0.34, 0.72, 2],
  [0.5, 0.8, 3],
]

/** Each spot: desktop position (--x, --y), phone position (--px, --py) and its colour. */
const SPOTS: { label: string; x: string; y: string; px: string; py: string; c: string }[] = [
  { label: 'Meet people', x: '13.5%', y: '28%', px: '26%', py: '13%', c: '#fbbf24' },
  { label: 'Make your space', x: '38%', y: '28%', px: '74%', py: '13%', c: '#34d399' },
  { label: 'Meet the residents', x: '62%', y: '28%', px: '26%', py: '38%', c: '#a78bfa' },
  { label: 'Orbit anywhere', x: '86.5%', y: '28%', px: '74%', py: '38%', c: '#93c5fd' },
  { label: 'Join in', x: '26%', y: '74%', px: '26%', py: '63%', c: '#f472b6' },
  { label: 'Build with Brick', x: '50%', y: '74%', px: '74%', py: '63%', c: '#fb923c' },
  { label: 'Share what you make', x: '74%', y: '74%', px: '50%', py: '88%', c: '#67e8f9' },
]

function SpotContents({ i }: { i: number }) {
  switch (i) {
    case 0:
      return (
        <>
          <span className="uh-p uh-fire" style={{ left: '50%', top: '40%' }} />
          <span className="uh-ring" style={{ left: '50%', top: '52%', width: '66%', aspectRatio: '1.5' }} />
          <Avatar id="a" row={2} style={{ left: '24%', top: '68%' }}>
            <span className="uh-tag">Noura</span>
            <span className="uh-say">hi!</span>
          </Avatar>
          <Avatar id="j" row={1} style={{ left: '76%', top: '68%' }}>
            <span className="uh-tag">Omar</span>
          </Avatar>
        </>
      )
    case 1:
      return (
        <>
          <span className="uh-p uh-sofa" style={{ left: '42%', top: '36%' }} />
          <span className="uh-p uh-plant" style={{ left: '76%', top: '38%' }} />
          <Avatar id="d" style={{ left: '34%', top: '66%' }}>
            <span className="uh-tag">Sara</span>
          </Avatar>
          <Avatar id="cat" row={1} style={{ left: '60%', top: '74%' }} />
        </>
      )
    case 2:
      return (
        <>
          <span className="uh-p uh-desk" style={{ left: '50%', top: '34%' }} />
          <Avatar id="e" style={{ left: '52%', top: '66%' }}>
            <span className="uh-tag">Laura, resident</span>
            <span className="uh-say" style={vars({ '--d': '2.5s' })}>Welcome back!</span>
          </Avatar>
        </>
      )
    case 3:
      return <span className="uh-p uh-gate" style={{ left: '50%', top: '42%' }} />
    case 4:
      return (
        <>
          <span className="uh-p uh-platform" style={{ left: '50%', top: '26%' }} />
          <Avatar id="g" style={{ left: '50%', top: '38%' }}>
            <span className="uh-say" style={vars({ '--d': '4s' })}>Game night starts now</span>
          </Avatar>
          <Avatar id="b" row={3} style={{ left: '20%', top: '76%' }} />
          <Avatar id="k" row={3} style={{ left: '40%', top: '80%' }} />
          <Avatar id="c" row={3} style={{ left: '82%', top: '76%' }} />
        </>
      )
    case 5:
      return (
        <>
          <span className="uh-p uh-bench" style={{ left: '36%', top: '38%' }} />
          <Brick colour="orange" style={{ left: '66%', top: '68%' }}>
            <span className="uh-tag">Brick</span>
            <span className="uh-say" style={vars({ '--d': '1.2s' })}>What shall we make?</span>
          </Brick>
        </>
      )
    default:
      return (
        <>
          <span className="uh-p uh-wall" style={{ left: '50%', top: '44%' }} />
          <span className="uh-p uh-frame" style={vars({ left: '26%', top: '30%', '--f': '#fbbf24' })} />
          <span className="uh-p uh-frame" style={vars({ left: '50%', top: '30%', '--f': '#f472b6' })} />
          <span className="uh-p uh-frame" style={vars({ left: '74%', top: '30%', '--f': '#34d399' })} />
          <Avatar id="m" row={3} style={{ left: '76%', top: '76%' }} />
          <Avatar id="dog" row={2} style={{ left: '22%', top: '78%' }} />
        </>
      )
  }
}

export default function Plaza() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const youRef = useRef<HTMLSpanElement>(null)
  const passer1Ref = useRef<HTMLSpanElement>(null)
  const passer2Ref = useRef<HTMLSpanElement>(null)
  const [cur, setCur] = useState(0)
  const curRef = useRef(0)
  const touched = useRef(false)
  const [interacted, setInteracted] = useState(false)
  const moveYou = useRef<(i: number, instant: boolean) => void>(() => {})
  // follows the visitor's setting, also when it changes while the page is open
  const reduce = useReducedMotion() ?? false

  useEffect(() => {
    const scene = sceneRef.current
    const you = youRef.current
    const p1 = passer1Ref.current
    const p2 = passer2Ref.current
    if (!scene || !you || !p1 || !p2) return

    const places = Array.from(scene.querySelectorAll<HTMLElement>('.uh-place'))
    let alive = true
    const timers = new Set<ReturnType<typeof setTimeout>>()
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(() => {
        timers.delete(t)
        if (alive) fn()
      }, ms)
      timers.add(t)
    }

    const spot = (i: number, fx: number, fy: number): Pt => at(scene, fx, fy, places[i])
    /* passers-by stop beside a spot, on the side that faces the middle of the scene */
    const side = (i: number): Pt => {
      const c = spot(i, 0.5, 0.5)
      const w = scene.getBoundingClientRect().width
      return spot(i, c.x < w / 2 ? 1.05 : -0.05, 0.64)
    }

    moveYou.current = (i, instant) => {
      const [fx, fy, row] = YOU[i]
      const to = spot(i, fx, fy)
      setRest(you, row)
      if (instant) {
        halt(you)
        put(you, to)
        you.style.setProperty('--row', String(row))
      } else {
        walk(you, to, reduce)
      }
    }

    const wander = (el: HTMLElement, start: number) => {
      let here = start
      put(el, side(here))
      if (reduce) return
      const go = () => {
        if (!alive) return
        let n = here
        while (n === here) n = Math.floor(Math.random() * N)
        here = n
        walk(el, side(here), reduce, () => later(go, 1800 + Math.random() * 2600))
      }
      go()
    }

    moveYou.current(curRef.current, true)
    wander(p1, 1)
    wander(p2, 4)

    const relayout = () => {
      moveYou.current(curRef.current, true)
      if (hasPosition(p1)) put(p1, side(1))
      if (hasPosition(p2)) put(p2, side(4))
    }
    window.addEventListener('resize', relayout)
    document.fonts?.ready.then(() => {
      if (alive) moveYou.current(curRef.current, true)
    })

    const auto = reduce
      ? undefined
      : setInterval(() => {
          if (!touched.current && !document.hidden) setCur((c) => (c + 1) % N)
        }, 6500)

    return () => {
      alive = false
      window.removeEventListener('resize', relayout)
      if (auto) clearInterval(auto)
      timers.forEach(clearTimeout)
      halt(you)
      halt(p1)
      halt(p2)
    }
  }, [reduce])

  useEffect(() => {
    curRef.current = cur
    moveYou.current(cur, false)
  }, [cur])

  const pick = (i: number) => {
    touched.current = true
    setInteracted(true)
    setCur(((i % N) + N) % N)
  }

  const thing = THINGS[cur]

  return (
    <div id="things" className="scroll-mt-24">
      <div className="uh-ask">
        <h2>What do you feel like doing?</h2>
        <span>Pick a spot. Your avatar walks there.</span>
      </div>

      <div className="hero-frame">
        <div className="uh-scene" ref={sceneRef}>
          {SPOTS.map((s, i) => (
            <button
              key={s.label}
              type="button"
              className="uh-place"
              aria-pressed={i === cur}
              onClick={() => pick(i)}
              style={vars({ '--x': s.x, '--y': s.y, '--px': s.px, '--py': s.py, '--c': s.c })}
            >
              <span className="uh-rug" />
              <SpotContents i={i} />
              <span className="uh-chip">{s.label}</span>
            </button>
          ))}

          <span className="uh-av uh-wk-l uh-mover uh-passer" ref={passer1Ref} aria-hidden="true" />
          <span className="uh-av uh-wk-f uh-mover uh-passer" ref={passer2Ref} aria-hidden="true" />
          <span className="uh-av uh-wk-i uh-mover" ref={youRef} aria-hidden="true">
            <span className="uh-tag uh-you">You</span>
          </span>
        </div>
      </div>

      <div className="uh-cap surface-card" aria-live={interacted ? 'polite' : 'off'}>
        <div className="uh-cap-n text-gradient-accent">
          {cur + 1}
          <small> / {N}</small>
        </div>
        <div>
          <h3>
            {thing.title}
            {thing.soon && <Soon />}
          </h3>
          <p>{thing.body}</p>
          <p className="uh-go">{thing.go}</p>
        </div>
        <div className="uh-cap-nav">
          <button type="button" onClick={() => pick(cur - 1)} aria-label="Previous thing to do">←</button>
          <button type="button" onClick={() => pick(cur + 1)} aria-label="Next thing to do">→</button>
        </div>
      </div>
    </div>
  )
}
