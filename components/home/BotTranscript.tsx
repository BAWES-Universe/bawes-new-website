'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/* ──────────────────────────────────────────────────────────────
   A scripted, looping transcript for the Project bot: it reads a
   file, streams an answer, files the work in Linear, finds who is
   in the room and physically walks you to them.

   Height is constant by construction — every step is rendered from
   first paint and only its opacity changes, and streaming bubbles
   reserve their final text so they never grow line by line.
   ────────────────────────────────────────────────────────────── */

type Step =
  | { kind: 'user'; text: string; attachment?: string }
  | { kind: 'tool'; label: string; detail: string; color: 'purple' | 'amber' | 'green' | 'blue' }
  | { kind: 'bot'; text: string; stream?: boolean }
  | { kind: 'emotion'; text: string }

const SCRIPT: { step: Step; at: number }[] = [
  { at: 0, step: { kind: 'user', text: "Can you check the launch plan and tell me what's still open?", attachment: 'launch-plan.pdf · 2.1 MB' } },
  { at: 900, step: { kind: 'tool', label: 'file_parse', detail: 'launch-plan.pdf → 14 pages · 6,200 words', color: 'amber' } },
  { at: 2100, step: { kind: 'bot', stream: true, text: 'Three items are still open: the pricing page copy, the status-page DNS change, and the Discord announcement. Two of them are Omar’s.' } },
  { at: 6600, step: { kind: 'tool', label: 'linear.create_issue', detail: '3 issues filed in LAUNCH', color: 'blue' } },
  { at: 7600, step: { kind: 'emotion', text: 'sentiment +38 · sincere · no frustration detected' } },
  { at: 8600, step: { kind: 'user', text: "Who's around? Take me to Omar." } },
  { at: 9600, step: { kind: 'tool', label: 'get_people_on_map', detail: 'Omar and Lina · meeting area, this room', color: 'green' } },
  { at: 10700, step: { kind: 'tool', label: 'navigate_to', detail: 'Omar · meeting area · 14 tiles', color: 'purple' } },
  { at: 11800, step: { kind: 'bot', stream: true, text: 'Omar’s at the meeting table with Lina. Follow me — I’ll introduce you.' } },
]
const LOOP_AT = 17000

/** Streaming text that reserves its final height: the untyped tail stays in
 *  layout as an invisible span, so the bubble never grows as it types. */
function StreamedText({ text, active, reduced }: { text: string; active: boolean; reduced: boolean }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!active || reduced) return
    setN(0)
    let i = 0
    const id = setInterval(() => {
      i += 2
      setN(i)
      if (i >= text.length) clearInterval(id)
    }, 24)
    return () => clearInterval(id)
  }, [active, text, reduced])

  const shown = reduced || !active ? text.length : n
  const done = shown >= text.length
  return (
    <>
      <span>{text.slice(0, shown)}</span>
      {!done && <span className="inline-block w-[2px] h-[1em] align-[-2px] bg-purple-300 mx-0.5 animate-blink" />}
      <span className="invisible">{text.slice(shown)}</span>
    </>
  )
}

function Bubble({ step, active, reduced }: { step: Step; active: boolean; reduced: boolean }) {
  if (step.kind === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-amber-400/15 border border-amber-300/25 px-3.5 py-2.5 text-[13px] text-white/90 leading-relaxed">
          {step.text}
          {step.attachment && (
            <div className="mt-2 flex items-center gap-2 rounded-lg bg-black/30 px-2.5 py-1.5 text-[11px] text-amber-100/80">
              <span className="material-symbols-outlined text-[15px] text-amber-300">picture_as_pdf</span>
              {step.attachment}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (step.kind === 'tool') {
    const cls = { purple: 'chip-purple', amber: 'chip-amber', green: 'chip-green', blue: 'chip-blue' }[step.color]
    return (
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-1">
        <span className={`chip ${cls} mono !text-[10.5px]`}>
          <span className="material-symbols-outlined text-[13px]">bolt</span>
          {step.label}
        </span>
        <span className="text-[11px] text-white/45">{step.detail}</span>
      </div>
    )
  }

  if (step.kind === 'emotion') {
    return (
      <div className="flex items-center gap-2 pl-1 text-[11px] text-white/45">
        <span className="material-symbols-outlined text-[14px] text-emerald-300">sentiment_satisfied</span>
        {step.text}
      </div>
    )
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-purple-500/12 border border-purple-300/25 px-3.5 py-2.5 text-[13px] text-white/90 leading-relaxed">
        <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] text-purple-300 mb-1">
          <span className="material-symbols-outlined text-[13px]">smart_toy</span> PROJECT
        </div>
        {step.stream ? <StreamedText text={step.text} active={active} reduced={reduced} /> : step.text}
      </div>
    </div>
  )
}

export default function BotTranscript() {
  const reduced = useReducedMotion() ?? false
  const [count, setCount] = useState(reduced ? SCRIPT.length : 0)

  useEffect(() => {
    if (reduced) return
    let timers: ReturnType<typeof setTimeout>[] = []
    let loop: ReturnType<typeof setTimeout>

    const play = () => {
      setCount(0)
      timers = SCRIPT.map((s, i) => setTimeout(() => setCount(i + 1), s.at + 400))
      loop = setTimeout(play, LOOP_AT)
    }
    play()

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(loop)
    }
  }, [reduced])

  return (
    <div className="surface-card overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/6">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-amber-400 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-white text-[18px]">smart_toy</span>
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white leading-tight">Project</div>
            <div className="text-[11px] text-white/45 leading-tight truncate">Linear · walks the map</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="chip !text-[10px] hidden sm:inline-flex">Linear connected</span>
          <span className="chip chip-green !text-[10px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> memory on</span>
        </div>
      </div>

      {/* Every step is always in the DOM — only opacity changes, so the pane
          never resizes as the conversation plays or loops. */}
      <div className="p-4 space-y-3">
        {SCRIPT.map((s, i) => (
          <div
            key={i}
            className={`transition-opacity duration-300 ${i < count ? 'opacity-100' : 'opacity-0'}`}
          >
            <Bubble step={s.step} active={i < count} reduced={reduced} />
          </div>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-white/6 flex items-center gap-2 text-[12px] text-white/40">
        <span className="material-symbols-outlined text-[16px]">attach_file</span>
        <span className="flex-1">Drop a PDF, doc, sheet or URL — or just walk up and talk.</span>
        <span className="material-symbols-outlined text-[16px]">mic</span>
      </div>
    </div>
  )
}
