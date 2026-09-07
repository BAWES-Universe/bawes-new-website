'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/* ──────────────────────────────────────────────────────────────
   A scripted, looping transcript that shows what a bot actually
   does mid-conversation: reads a file, streams an answer, calls a
   tool, walks you somewhere, and tracks how the conversation feels.
   ────────────────────────────────────────────────────────────── */

type Step =
  | { kind: 'user'; text: string; attachment?: string }
  | { kind: 'tool'; label: string; detail: string; color: 'purple' | 'amber' | 'green' | 'blue' }
  | { kind: 'bot'; text: string; stream?: boolean }
  | { kind: 'emotion'; text: string }

const SCRIPT: { step: Step; at: number }[] = [
  { at: 0, step: { kind: 'user', text: 'Can you check the launch plan and tell me what is still open?', attachment: 'launch-plan.pdf · 2.1 MB' } },
  { at: 900, step: { kind: 'tool', label: 'file_parse', detail: 'launch-plan.pdf → 14 pages · 6,200 words', color: 'amber' } },
  { at: 2100, step: { kind: 'bot', stream: true, text: 'Three items are still open: the pricing page copy, the status-page DNS change, and the Discord announcement. Two of them are owned by Omar.' } },
  { at: 6800, step: { kind: 'emotion', text: 'sentiment +38 · sincere · no frustration detected' } },
  { at: 7800, step: { kind: 'user', text: 'Book 20 minutes with Omar and bring me to him.' } },
  { at: 8900, step: { kind: 'tool', label: 'mcp · calendar.create_event', detail: 'Omar + You · today 15:00 · 20 min', color: 'blue' } },
  { at: 10100, step: { kind: 'tool', label: 'navigate_to', detail: 'Omar · Meeting room (north) · 14 tiles', color: 'green' } },
  { at: 11300, step: { kind: 'bot', stream: true, text: 'Done. Omar accepted for 15:00. Follow me — he is in the north meeting room right now.' } },
]
const LOOP_AT = 16500

function Bubble({ step, reduced }: { step: Step; reduced: boolean }) {
  const [n, setN] = useState(0)
  const streaming = step.kind === 'bot' && step.stream && !reduced
  useEffect(() => {
    if (!streaming || step.kind !== 'bot') return
    let i = 0
    const id = setInterval(() => {
      i += 2
      setN(i)
      if (i >= step.text.length) clearInterval(id)
    }, 24)
    return () => clearInterval(id)
  }, [streaming, step])

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
      <div className="flex items-center gap-2 pl-1">
        <span className={`chip ${cls} mono !text-[10.5px]`}>
          <span className="material-symbols-outlined text-[13px]">bolt</span>
          {step.label}
        </span>
        <span className="text-[11px] text-white/45 truncate">{step.detail}</span>
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
  const text = streaming ? step.text.slice(0, n) : step.text
  const done = !streaming || n >= step.text.length
  return (
    <div className="flex justify-start">
      <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-purple-500/12 border border-purple-300/25 px-3.5 py-2.5 text-[13px] text-white/90 leading-relaxed">
        <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] text-purple-300 mb-1">
          <span className="material-symbols-outlined text-[13px]">smart_toy</span> CONCIERGE
          {!done && <span className="ml-1 text-white/40 font-medium tracking-normal">streaming…</span>}
        </div>
        {text}
        {!done && <span className="inline-block w-[2px] h-[1em] align-[-2px] bg-purple-300 ml-0.5 animate-blink" />}
      </div>
    </div>
  )
}

export default function BotTranscript() {
  const reduced = useReducedMotion() ?? false
  const [count, setCount] = useState(reduced ? SCRIPT.length : 0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    if (reduced) return
    setCount(0)
    const timers = SCRIPT.map((s, i) => setTimeout(() => setCount(i + 1), s.at + 400))
    const loop = setTimeout(() => setCycle((c) => c + 1), LOOP_AT)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(loop)
    }
  }, [cycle, reduced])

  return (
    <div className="surface-card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-amber-400 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">smart_toy</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white leading-tight">Concierge</div>
            <div className="text-[11px] text-white/45 leading-tight">Lobby · social behaviour · walking</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="chip !text-[10px] mono hidden sm:inline-flex">gpt-4o</span>
          <span className="chip chip-green !text-[10px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> memory on</span>
        </div>
      </div>
      <div className="p-4 space-y-3 min-h-[380px]">
        <AnimatePresence initial={false}>
          {SCRIPT.slice(0, count).map((s, i) => (
            <motion.div
              key={`${cycle}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Bubble step={s.step} reduced={reduced} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="px-4 py-3 border-t border-white/6 flex items-center gap-2 text-[12px] text-white/40">
        <span className="material-symbols-outlined text-[16px]">attach_file</span>
        <span className="flex-1">Drop a PDF, doc, sheet or URL — or just walk up and talk.</span>
        <span className="material-symbols-outlined text-[16px]">mic</span>
      </div>
    </div>
  )
}
