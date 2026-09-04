import { Woka, BotSprite, Butterfly } from '@/components/pixel/Woka'

/**
 * The hero illustration: a top-down tile room, drawn in the same visual
 * language as Universe itself (orthogonal tile maps + pipoya-style sprites).
 *
 * Everything is vector, so it stays crisp at any size and costs no image
 * payload. Coordinates are in a 512x288 user space; one tile is 16 units.
 */

const T = 16
const COLS = 32
const WALL_H = 3 // tiles
const ROWS = 18

/* Deterministic per-tile jitter — keeps the floor from looking like graph paper. */
const noise = (x: number, y: number) => ((x * 7 + y * 13 + x * y) % 11) / 11

function Floor() {
  const tiles = []
  for (let y = WALL_H; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const n = noise(x, y)
      const shade = n > 0.82 ? '#241d33' : n > 0.6 ? '#211a2f' : '#1e182b'
      tiles.push(
        <rect key={`${x}-${y}`} x={x * T} y={y * T} width={T} height={T} fill={shade} />
      )
    }
  }
  return (
    <g shapeRendering="crispEdges">
      {tiles}
      {/* Tile seams */}
      {Array.from({ length: ROWS - WALL_H + 1 }, (_, i) => (
        <rect key={`h${i}`} x={0} y={(WALL_H + i) * T} width={COLS * T} height={1} fill="rgba(167,139,250,0.05)" />
      ))}
      {Array.from({ length: COLS + 1 }, (_, i) => (
        <rect key={`v${i}`} x={i * T} y={WALL_H * T} width={1} height={(ROWS - WALL_H) * T} fill="rgba(167,139,250,0.05)" />
      ))}
    </g>
  )
}

function Wall() {
  return (
    <g shapeRendering="crispEdges">
      <rect x={0} y={0} width={COLS * T} height={WALL_H * T} fill="#171226" />
      <rect x={0} y={WALL_H * T - 4} width={COLS * T} height={4} fill="#0f0b1c" />
      <rect x={0} y={WALL_H * T - 5} width={COLS * T} height={1} fill="rgba(167,139,250,0.18)" />

      {/* Window onto the universe — the brand promise, literally */}
      <rect x={40} y={8} width={88} height={30} fill="#0a0716" />
      <rect x={40} y={8} width={88} height={30} fill="none" stroke="rgba(167,139,250,0.3)" strokeWidth={1} />
      {[
        [52, 16], [70, 13], [88, 22], [104, 15], [118, 28], [62, 30], [96, 32], [78, 20],
      ].map(([cx, cy], i) => (
        <rect key={i} x={cx} y={cy} width={i % 3 === 0 ? 2 : 1} height={i % 3 === 0 ? 2 : 1} fill="#cbb8ff" opacity={0.5 + (i % 4) * 0.15} />
      ))}
      <rect x={83} y={7} width={1} height={32} fill="rgba(167,139,250,0.25)" />

      {/* Wall display, mid-broadcast */}
      <rect x={300} y={8} width={78} height={30} fill="#0d0a1a" stroke="rgba(245,158,11,0.35)" strokeWidth={1} />
      <rect x={306} y={30} width={8} height={4} fill="#f59e0b" opacity={0.85} />
      <rect x={318} y={24} width={8} height={10} fill="#f59e0b" opacity={0.7} />
      <rect x={330} y={18} width={8} height={16} fill="#fbbf24" opacity={0.8} />
      <rect x={342} y={26} width={8} height={8} fill="#f59e0b" opacity={0.6} />
      <rect x={354} y={14} width={8} height={20} fill="#fbbf24" opacity={0.9} />
      <circle cx={370} cy={14} r={2.5} fill="#f03e2f" className="u-blink" />
    </g>
  )
}

function Rug({ x, y, w, h, color }: { x: number; y: number; w: number; h: number; color: string }) {
  return (
    <g shapeRendering="crispEdges" opacity={0.75}>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={color} />
      <rect x={x + 6} y={y + 6} width={w - 12} height={h - 12} rx={2} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2} />
    </g>
  )
}

function Desk({ x, y, w = 44, h = 22 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g shapeRendering="crispEdges">
      <rect x={x} y={y + h - 4} width={w} height={5} fill="rgba(0,0,0,0.3)" />
      <rect x={x} y={y} width={w} height={h} rx={2} fill="#3a2f4f" />
      <rect x={x} y={y} width={w} height={3} fill="#4a3d63" />
      {/* Monitor */}
      <rect x={x + w / 2 - 9} y={y + 4} width={18} height={12} fill="#120e20" stroke="rgba(167,139,250,0.4)" strokeWidth={1} />
      <rect x={x + w / 2 - 6} y={y + 7} width={12} height={2} fill="#a78bfa" opacity={0.6} />
      <rect x={x + w / 2 - 6} y={y + 11} width={7} height={2} fill="#a78bfa" opacity={0.35} />
    </g>
  )
}

function Plant({ x, y }: { x: number; y: number }) {
  return (
    <g shapeRendering="crispEdges">
      <ellipse cx={x + 8} cy={y + 25} rx={7} ry={2} fill="rgba(0,0,0,0.3)" />
      <rect x={x + 3} y={y + 17} width={10} height={8} fill="#8a5a3c" />
      <rect x={x + 3} y={y + 17} width={10} height={2} fill="#a06d4a" />
      <rect x={x + 6} y={y + 4} width={4} height={14} fill="#2f7a56" />
      <rect x={x + 1} y={y + 6} width={5} height={4} fill="#34d399" />
      <rect x={x + 10} y={y + 2} width={5} height={5} fill="#34d399" />
      <rect x={x + 2} y={y} width={5} height={5} fill="#2f7a56" />
      <rect x={x + 11} y={y + 9} width={4} height={4} fill="#2f7a56" />
    </g>
  )
}

/** The product's defining behaviour: audio that fades with distance. */
function ProximityRings({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={18}
          fill="none"
          stroke="#a78bfa"
          strokeWidth={1.5}
          className="u-ring"
          style={{ animationDelay: `${i * 1.2}s` }}
        />
      ))}
      <ellipse cx={cx} cy={cy} rx={54} ry={40} fill="url(#proxGlow)" />
    </g>
  )
}

/** Two people in a bubble get video + screenshare. Shown, not described. */
function VideoBubble({ x, y }: { x: number; y: number }) {
  return (
    <g shapeRendering="crispEdges">
      <rect x={x} y={y} width={96} height={44} rx={6} fill="rgba(16,12,32,0.94)" stroke="rgba(167,139,250,0.45)" strokeWidth={1} />
      <rect x={x + 6} y={y + 7} width={38} height={26} rx={3} fill="#2b2140" />
      <rect x={x + 52} y={y + 7} width={38} height={26} rx={3} fill="#2b2140" />
      {/* Tiny faces in the tiles */}
      {[x + 6, x + 52].map((tx, i) => (
        <g key={i}>
          <circle cx={tx + 19} cy={y + 17} r={6} fill={i ? '#f2c9a0' : '#8d5a3b'} />
          <rect x={tx + 15} y={y + 9} width={8} height={4} fill={i ? '#2f2438' : '#8a4b22'} />
          <rect x={tx + 12} y={y + 25} width={14} height={8} rx={2} fill={i ? '#8b5cf6' : '#f59e0b'} />
        </g>
      ))}
      <circle cx={x + 88} cy={y + 38} r={2.5} fill="#34d399" className="u-blink" />
      <rect x={x + 6} y={y + 37} width={5} height={4} fill="#34d399" opacity={0.9} />
      <rect x={x + 13} y={y + 36} width={5} height={5} fill="#34d399" opacity={0.6} />
    </g>
  )
}

/** Bot speech — it remembers you, so the copy is a callback, not a greeting. */
function SpeechBubble({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width={150} height={46} rx={7} fill="rgba(24,17,46,0.95)" stroke="rgba(167,139,250,0.4)" strokeWidth={1} />
      <path d={`M${x} ${y + 16} L${x - 9} ${y + 22} L${x} ${y + 28} Z`} fill="rgba(24,17,46,0.95)" />
      <text x={x + 11} y={y + 17} fill="#c4b5fd" fontSize={9} fontFamily="'Space Grotesk', sans-serif" fontWeight={700}>
        Planner
      </text>
      <text x={x + 11} y={y + 30} fill="rgba(255,255,255,0.72)" fontSize={8.5} fontFamily="Inter, sans-serif">
        Welcome back. Still building
      </text>
      <text x={x + 11} y={y + 41} fill="rgba(255,255,255,0.72)" fontSize={8.5} fontFamily="Inter, sans-serif">
        that room from last week?
      </text>
    </g>
  )
}

function ZoneOutline({ x, y, w, h, label, color }: {
  x: number; y: number; w: number; h: number; label: string; color: string
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} fill={color} fillOpacity={0.07} stroke={color} strokeOpacity={0.4} strokeWidth={1} strokeDasharray="5 4" />
      <rect x={x + 8} y={y - 7} width={label.length * 5 + 12} height={14} rx={7} fill="#0f0b1c" stroke={color} strokeOpacity={0.4} strokeWidth={1} />
      <text x={x + 14} y={y + 3} fill={color} fontSize={8} fontFamily="Inter, sans-serif" fontWeight={600} letterSpacing="0.04em">
        {label}
      </text>
    </g>
  )
}

/** Places a 16x20 sprite by its feet so characters sit on the floor properly. */
/**
 * Positioning lives on an inner <g> on purpose: the bob animation sets a CSS
 * `transform`, which overrides the SVG transform *attribute* on the same
 * element and would otherwise fling every animated sprite back to the origin.
 */
function At({ x, y, children, className, style }: {
  x: number; y: number; children: React.ReactNode; className?: string; style?: React.CSSProperties
}) {
  return (
    <g className={className} style={style}>
      <g transform={`translate(${x - 8} ${y - 20})`}>{children}</g>
    </g>
  )
}

export default function RoomScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${COLS * T} ${ROWS * T}`}
      // On phones the container is squarer than the scene, so `slice` crops the
      // edges and zooms toward the middle instead of shrinking every label to
      // an illegible few pixels. On desktop the box matches and this no-ops.
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="A top-down view of a Universe room: people standing in a proximity bubble with video open, an AI bot greeting someone by name, a meeting zone, and desks along the wall."
    >
      <defs>
        <radialGradient id="proxGlow">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="roomVignette">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
        </radialGradient>
        <linearGradient id="pathFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <Floor />
      <Wall />

      {/* ── Left: desks, a plant, someone walking in ── */}
      <Rug x={20} y={198} w={124} h={70} color="#3b2c5c" />
      <Desk x={26} y={62} />
      <Desk x={88} y={62} />
      <Plant x={10} y={116} />

      <path d="M62 168 C92 158, 124 148, 148 122" stroke="url(#pathFade)" strokeWidth={2} strokeDasharray="4 5" fill="none" />
      <At x={150} y={120} className="u-bob">
        <Woka variant={3} />
      </At>

      {/* ── Centre: the proximity conversation ── */}
      <ProximityRings cx={254} cy={180} />
      <At x={232} y={190}>
        <Woka variant={0} />
      </At>
      <At x={276} y={190}>
        <Woka variant={1} />
      </At>
      <VideoBubble x={206} y={96} />

      {/* ── Bottom left: a bot that knows you ── */}
      <At x={58} y={250} className="u-bob" style={{ animationDelay: '1.4s' }}>
        <BotSprite variant={0} />
      </At>
      <SpeechBubble x={84} y={212} />

      {/* ── Right: a meeting zone ── */}
      <ZoneOutline x={334} y={104} w={166} h={140} label="MEETING ROOM" color="#f59e0b" />
      <g shapeRendering="crispEdges">
        <rect x={368} y={156} width={98} height={44} rx={6} fill="rgba(0,0,0,0.3)" transform="translate(0 5)" />
        <rect x={368} y={156} width={98} height={44} rx={6} fill="#3a2f4f" />
        <rect x={368} y={156} width={98} height={4} rx={2} fill="#4a3d63" />
        {/* Shared screen on the table */}
        <rect x={398} y={166} width={38} height={24} rx={2} fill="#120e20" stroke="rgba(245,158,11,0.4)" strokeWidth={1} />
        <rect x={403} y={171} width={28} height={2} fill="#fbbf24" opacity={0.7} />
        <rect x={403} y={176} width={20} height={2} fill="#fbbf24" opacity={0.45} />
        <rect x={403} y={181} width={24} height={2} fill="#fbbf24" opacity={0.3} />
      </g>
      <At x={384} y={152}>
        <Woka variant={4} />
      </At>
      <At x={450} y={152}>
        <Woka variant={5} />
      </At>
      <At x={417} y={232}>
        <Woka variant={6} />
      </At>
      <Plant x={478} y={62} />

      {/* ── Far right edge: a bot patrolling ── */}
      <At x={310} y={92} className="u-bob" style={{ animationDelay: '0.7s' }}>
        <BotSprite variant={1} />
      </At>

      {/* The BAWES butterfly, drifting through */}
      <g className="u-flutter">
        <g transform="translate(178 58)">
          <Butterfly />
        </g>
      </g>

      <rect x={0} y={0} width={COLS * T} height={ROWS * T} fill="url(#roomVignette)" pointerEvents="none" />
    </svg>
  )
}
