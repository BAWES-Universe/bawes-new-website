import { WOKA, BOT, BUTTERFLY, encodeRuns, spriteSize } from './sprites'

/* Palettes ------------------------------------------------------------- */

export type WokaPalette = {
  hair: string
  skin: string
  shirt: string
  sleeve: string
  legs: string
  shoes: string
}

/**
 * Eight residents. Skin tones and hair colours vary deliberately — the whole
 * point of the product is that a room is full of different people.
 */
export const WOKA_PALETTES: readonly WokaPalette[] = [
  { hair: '#2f2438', skin: '#f2c9a0', shirt: '#8b5cf6', sleeve: '#7c3aed', legs: '#3b3552', shoes: '#241f33' },
  { hair: '#8a4b22', skin: '#8d5a3b', shirt: '#f59e0b', sleeve: '#d97706', legs: '#4a3a2a', shoes: '#2b2119' },
  { hair: '#1d2a3d', skin: '#5c3a26', shirt: '#34d399', sleeve: '#10b981', legs: '#263a43', shoes: '#16232a' },
  { hair: '#d9a441', skin: '#ffd9b8', shirt: '#93c5fd', sleeve: '#60a5fa', legs: '#33405c', shoes: '#1f2740' },
  { hair: '#4b2f6b', skin: '#c98d63', shirt: '#ec4899', sleeve: '#db2777', legs: '#432a44', shoes: '#2a1a2b' },
  { hair: '#33302e', skin: '#f7dcc3', shirt: '#67e8f9', sleeve: '#22d3ee', legs: '#2c3f4a', shoes: '#1a262d' },
  { hair: '#6b2f2f', skin: '#a86b45', shirt: '#fbbf24', sleeve: '#f59e0b', legs: '#463625', shoes: '#291f16' },
  { hair: '#20242e', skin: '#e8b48c', shirt: '#a78bfa', sleeve: '#8b5cf6', legs: '#343049', shoes: '#1f1c2e' },
]

export type BotPalette = { chassis: string; screen: string; light: string }

export const BOT_PALETTES: readonly BotPalette[] = [
  { chassis: '#7263ad', screen: '#1b1233', light: '#c4b5fd' },
  { chassis: '#a07c2e', screen: '#241a08', light: '#fde68a' },
  { chassis: '#3d7a6b', screen: '#0f221e', light: '#6ee7b7' },
  { chassis: '#4a6c9e', screen: '#111c2e', light: '#bfdbfe' },
]

/* Rendering ------------------------------------------------------------ */

const WOKA_RUNS = encodeRuns(WOKA)
const BUTTERFLY_RUNS = encodeRuns(BUTTERFLY)
const BOT_RUNS = encodeRuns(BOT)
const WOKA_SIZE = spriteSize(WOKA)
const BOT_SIZE = spriteSize(BOT)

function Sprite({
  runs,
  colors,
  shadow,
}: {
  runs: ReturnType<typeof encodeRuns>
  colors: Record<string, string>
  shadow?: boolean
}) {
  return (
    <g shapeRendering="crispEdges">
      {shadow && <ellipse cx={8} cy={20.2} rx={4.6} ry={1.4} fill="rgba(0,0,0,0.35)" />}
      {runs.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={colors[r.key] ?? 'transparent'} />
      ))}
    </g>
  )
}

/**
 * A Universe resident. `variant` picks a palette; pass `palette` to override.
 * Rendered in its own 16x20 user-space so it can be positioned inside a scene
 * with a single transform.
 */
export function Woka({ variant = 0, palette }: { variant?: number; palette?: WokaPalette }) {
  const p = palette ?? WOKA_PALETTES[variant % WOKA_PALETTES.length]
  return (
    <Sprite
      runs={WOKA_RUNS}
      shadow
      colors={{
        h: p.hair,
        s: p.skin,
        e: '#241d2e',
        m: 'rgba(90,50,60,0.55)',
        b: p.shirt,
        a: p.sleeve,
        p: p.legs,
        f: p.shoes,
      }}
    />
  )
}

/** A bot. Same grid, different silhouette — readable as non-human at 20px. */
export function BotSprite({ variant = 0, palette }: { variant?: number; palette?: BotPalette }) {
  const p = palette ?? BOT_PALETTES[variant % BOT_PALETTES.length]
  return (
    <Sprite
      runs={BOT_RUNS}
      shadow
      colors={{ c: p.chassis, g: p.screen, l: p.light }}
    />
  )
}

export { WOKA_SIZE, BOT_SIZE }

/**
 * The BAWES butterfly, in pixels. It already signs the README — giving it a
 * sprite turns a sign-off into a mascot that can live inside the scenes.
 */
export function Butterfly({ wing = '#a78bfa', body = '#f59e0b', antenna = '#fbbf24' }: {
  wing?: string; body?: string; antenna?: string
}) {
  return (
    <g shapeRendering="crispEdges">
      {BUTTERFLY_RUNS.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={1}
          fill={r.key === '1' ? wing : r.key === '2' ? body : antenna} />
      ))}
    </g>
  )
}
