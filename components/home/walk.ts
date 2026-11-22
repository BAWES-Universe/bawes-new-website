/**
 * Tiny helpers that move a sprite (an absolutely positioned element) around a box.
 * Movement is a CSS transition on left/top; the sprite row is set from the direction.
 * Sheet rows: 0 down, 1 left, 2 right, 3 up.
 */

export interface Pt {
  x: number
  y: number
}

interface MoverState {
  x?: number
  y?: number
  timer?: ReturnType<typeof setTimeout>
  rest: number
}

const states = new WeakMap<HTMLElement, MoverState>()

function stateOf(el: HTMLElement): MoverState {
  let s = states.get(el)
  if (!s) {
    s = { rest: 0 }
    states.set(el, s)
  }
  return s
}

/** A point inside `inside` (default: the box itself), as a fraction of its size, in the box's own pixels. */
export function at(box: HTMLElement, fx: number, fy: number, inside?: HTMLElement): Pt {
  const r = (inside || box).getBoundingClientRect()
  const s = box.getBoundingClientRect()
  return { x: r.left - s.left + r.width * fx, y: r.top - s.top + r.height * fy }
}

/** The row the sprite shows once it stops walking. */
export function setRest(el: HTMLElement, row: number): void {
  stateOf(el).rest = row
}

export function hasPosition(el: HTMLElement): boolean {
  return stateOf(el).x != null
}

/** Stop any walk in progress. */
export function halt(el: HTMLElement): void {
  const s = stateOf(el)
  if (s.timer) clearTimeout(s.timer)
  s.timer = undefined
  el.classList.remove('uh-walking')
}

/** Place the sprite without animation. */
export function put(el: HTMLElement, to: Pt): void {
  const s = stateOf(el)
  el.style.transitionDuration = '0s'
  el.style.left = `${to.x}px`
  el.style.top = `${to.y}px`
  s.x = to.x
  s.y = to.y
}

/** Walk the sprite to a point at a steady pace, then call `done`. */
export function walk(el: HTMLElement, to: Pt, reduce: boolean, done?: () => void): void {
  const s = stateOf(el)
  if (s.x == null || s.y == null || reduce) {
    put(el, to)
    done?.()
    return
  }
  const dx = to.x - s.x
  const dy = to.y - s.y
  const d = Math.hypot(dx, dy)
  if (d < 2) {
    done?.()
    return
  }
  const t = d / 150
  const row = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 1 : 2) : dy < 0 ? 3 : 0
  el.style.setProperty('--row', String(row))
  el.style.transitionDuration = `${t}s`
  el.classList.add('uh-walking')
  el.style.left = `${to.x}px`
  el.style.top = `${to.y}px`
  s.x = to.x
  s.y = to.y
  if (s.timer) clearTimeout(s.timer)
  s.timer = setTimeout(() => {
    s.timer = undefined
    el.classList.remove('uh-walking')
    el.style.setProperty('--row', String(s.rest))
    done?.()
  }, t * 1000 + 40)
}
