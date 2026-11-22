'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Avatar, Brick, vars, type AvatarId } from './sprites'
import { at, halt, prefersReducedMotion, put, setRest, walk, type Pt } from './walk'

/** Three small looping scenes that show how Universe feels, in place of videos. */

const LOOKS: AvatarId[] = ['c', 'k', 'e', 'h', 'n', 'cat']

function ProximityLoop() {
  const boxRef = useRef<HTMLDivElement>(null)
  const walkerRef = useRef<HTMLSpanElement>(null)
  const [talking, setTalking] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    const walker = walkerRef.current
    if (!box || !walker) return

    const reduce = prefersReducedMotion()
    let run = 0
    const timers = new Set<ReturnType<typeof setTimeout>>()
    const later = (fn: () => void, ms: number, forRun: number) => {
      const t = setTimeout(() => {
        timers.delete(t)
        if (forRun === run) fn()
      }, ms)
      timers.add(t)
    }
    setRest(walker, 1)

    const near = (): Pt => ({ x: box.getBoundingClientRect().width / 2 + 40, y: at(box, 0, 0.78).y })
    const far = (): Pt => at(box, 0.9, 0.78)

    const loop = (r: number) => {
      if (r !== run) return
      walk(walker, near(), reduce, () => {
        if (r !== run) return
        setTalking(true)
        later(() => {
          setTalking(false)
          walk(walker, far(), reduce, () => later(() => loop(r), 1400, r))
        }, 3600, r)
      })
    }

    const start = () => {
      const r = ++run
      timers.forEach(clearTimeout)
      timers.clear()
      halt(walker)
      if (reduce) {
        put(walker, near())
        setTalking(true)
        return
      }
      put(walker, far())
      walker.style.setProperty('--row', '1')
      setTalking(false)
      later(() => loop(r), 900, r)
    }

    start()
    window.addEventListener('resize', start)
    return () => {
      run = -1
      window.removeEventListener('resize', start)
      timers.forEach(clearTimeout)
      halt(walker)
    }
  }, [])

  return (
    <div className={`uh-loop-art uh-prox ${talking ? 'uh-talking' : ''}`} ref={boxRef}>
      <span className="uh-ring" style={{ left: '50%', top: '66%', width: 210, height: 120 }} />
      <span className="uh-cam" style={vars({ left: 'calc(50% - 44px)', top: '24%', '--a': '#fbbf24', '--b': '#f472b6' })} />
      <span className="uh-cam" style={vars({ left: 'calc(50% + 44px)', top: '24%', '--a': '#93c5fd', '--b': '#8b5cf6' })} />
      <Avatar id="a" row={2} style={{ left: 'calc(50% - 40px)', top: '78%' }} />
      <span className="uh-av uh-wk-i uh-mover" ref={walkerRef} style={vars({ '--row': 1, left: '90%', top: '78%' })} />
      <span className="uh-hint">{talking ? 'Close enough: you are talking' : 'Too far to hear'}</span>
    </div>
  )
}

function LooksLoop() {
  const [look, setLook] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setInterval(() => {
      if (!document.hidden) setLook((l) => (l + 1) % LOOKS.length)
    }, 1100)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="uh-loop-art uh-looks">
      <Avatar id={LOOKS[look]} style={{ left: '50%', top: '70%' }} />
      <span className="uh-swatches">
        {LOOKS.map((id, i) => (
          <i key={id} className={i === look ? 'uh-on' : ''} />
        ))}
      </span>
    </div>
  )
}

export default function FeelLoops() {
  return (
    <div className="uh-loops" aria-label="Three short animations of Universe">
      <div className="uh-loop surface-card">
        <ProximityLoop />
        <div className="uh-loop-txt">
          <b>Get close and you are talking</b>
          <span>Voice and camera switch on when you walk up, and off when you walk away. Nobody sends a link.</span>
          <Link href="/features/proximity-chat" className="uh-loop-more">How walking up to talk works</Link>
        </div>
      </div>
      <div className="uh-loop surface-card">
        <LooksLoop />
        <div className="uh-loop-txt">
          <b>Look how you like</b>
          <span>Pick an avatar or dress your own. It goes with you everywhere.</span>
          <Link href="/features/woka-avatars" className="uh-loop-more">More about avatars</Link>
        </div>
      </div>
      <div className="uh-loop surface-card">
        <div className="uh-loop-art uh-build">
          <Brick colour="orange" row={2} style={vars({ left: '24%', top: '74%', '--s': 3 })} />
          <div className="uh-sheet">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="uh-loop-txt">
          <b>Ask, and watch it get made</b>
          <span>Residents build things in front of you, step by step.</span>
        </div>
      </div>
    </div>
  )
}
