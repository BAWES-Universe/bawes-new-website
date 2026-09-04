import { Woka, BotSprite } from '@/components/pixel/Woka'

/**
 * Small illustrations that sit at the top of each feature card.
 *
 * These aren't decoration — each one draws the mechanic the card describes,
 * so a visitor understands proximity audio or bot memory before they read a
 * word. All share a 240x120 user space and the pixel-tile vocabulary.
 */

const W = 240
const H = 120

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="scene-card__art" role="img" aria-label={label}>
      <defs>
        <linearGradient id="sceneFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1531" />
          <stop offset="100%" stopColor="#120d22" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill="url(#sceneFloor)" />
      <g shapeRendering="crispEdges" opacity={0.5}>
        {Array.from({ length: H / 12 + 1 }, (_, i) => (
          <rect key={`h${i}`} x={0} y={i * 12} width={W} height={1} fill="rgba(167,139,250,0.05)" />
        ))}
        {Array.from({ length: W / 12 + 1 }, (_, i) => (
          <rect key={`v${i}`} x={i * 12} y={0} width={1} height={H} fill="rgba(167,139,250,0.05)" />
        ))}
      </g>
      {children}
    </svg>
  )
}

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

const label = (x: number, y: number, text: string, fill = 'rgba(255,255,255,0.5)', size = 7) => (
  <text x={x} y={y} fill={fill} fontSize={size} fontFamily="Inter, sans-serif" fontWeight={600} letterSpacing="0.06em" textAnchor="middle">
    {text}
  </text>
)

/* 1 — Proximity: volume falls off with distance. */
export function ProximityScene() {
  const others = [
    { x: 104, bars: 5, tone: '#34d399', cap: 'CLOSE' },
    { x: 160, bars: 3, tone: '#fbbf24', cap: 'NEARBY' },
    { x: 212, bars: 1, tone: '#8b7fb8', cap: 'AWAY' },
  ]
  return (
    <Frame label="One person hears three others: the closer they stand, the louder the audio bars.">
      <ellipse cx={40} cy={62} rx={40} ry={30} fill="url(#proxSceneGlow)" />
      <defs>
        <radialGradient id="proxSceneGlow">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[0, 1].map((i) => (
        <circle key={i} cx={40} cy={62} r={16} fill="none" stroke="#a78bfa" strokeWidth={1.2}
          className="u-ring" style={{ animationDelay: `${i * 1.8}s` }} />
      ))}
      <At x={40} y={72}><Woka variant={0} /></At>
      {label(40, 92, 'YOU', 'rgba(167,139,250,0.8)')}

      {others.map((o, i) => (
        <g key={o.x}>
          <At x={o.x} y={72} className="u-bob" style={{ animationDelay: `${i * 0.6}s` }}>
            <Woka variant={i + 1} />
          </At>
          <g shapeRendering="crispEdges">
            {[0, 1, 2, 3, 4].map((b) => (
              <rect key={b} x={o.x - 11 + b * 5} y={80} width={3} height={5}
                fill={b < o.bars ? o.tone : 'rgba(255,255,255,0.09)'} />
            ))}
          </g>
          {label(o.x, 100, o.cap, 'rgba(255,255,255,0.35)', 6)}
        </g>
      ))}
    </Frame>
  )
}

/* 2 — Memory: the bot arrives already knowing you. */
export function MemoryScene() {
  const facts = ['Name: Khalid', 'Ships on Fridays', 'Building a campus map']
  return (
    <Frame label="A bot beside a memory panel listing facts it recalls from previous visits.">
      <At x={36} y={80} className="u-bob"><BotSprite variant={0} /></At>
      <rect x={72} y={22} width={152} height={76} rx={6} fill="rgba(20,14,40,0.9)" stroke="rgba(167,139,250,0.28)" strokeWidth={1} />
      <text x={82} y={38} fill="#a78bfa" fontSize={7} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing="0.14em">
        REMEMBERS
      </text>
      <rect x={82} y={43} width={132} height={1} fill="rgba(167,139,250,0.18)" shapeRendering="crispEdges" />
      {facts.map((f, i) => (
        <g key={f}>
          <g shapeRendering="crispEdges">
            <rect x={82} y={52 + i * 15} width={7} height={7} fill="rgba(52,211,153,0.16)" />
            <rect x={83} y={55 + i * 15} width={2} height={2} fill="#34d399" />
            <rect x={85} y={53 + i * 15} width={3} height={2} fill="#34d399" />
          </g>
          <text x={95} y={59 + i * 15} fill="rgba(255,255,255,0.66)" fontSize={8} fontFamily="Inter, sans-serif">
            {f}
          </text>
        </g>
      ))}
    </Frame>
  )
}

/* 3 — Live editing: two cursors changing the same room at once. */
export function EditorScene() {
  const gx = 26
  const gy = 24
  return (
    <Frame label="A tile grid being edited live, with two collaborator cursors placing tiles.">
      <g shapeRendering="crispEdges">
        {Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 9 }, (_, c) => (
            <rect key={`${r}-${c}`} x={gx + c * 16} y={gy + r * 14} width={15} height={13}
              fill={(r + c) % 3 === 0 ? '#292040' : '#221a36'} />
          ))
        )}
        {/* Tile mid-drop */}
        <rect x={gx + 4 * 16} y={gy + 2 * 14} width={15} height={13} fill="#8b5cf6" opacity={0.85} />
        <rect x={gx + 4 * 16} y={gy + 2 * 14} width={15} height={2} fill="#c4b5fd" />
        {/* Palette */}
        <rect x={196} y={gy} width={22} height={70} rx={3} fill="rgba(20,14,40,0.9)" stroke="rgba(167,139,250,0.25)" strokeWidth={1} />
        {['#8b5cf6', '#34d399', '#f59e0b', '#93c5fd'].map((c, i) => (
          <rect key={c} x={202} y={gy + 6 + i * 16} width={11} height={11} rx={1} fill={c} opacity={i === 0 ? 1 : 0.55} />
        ))}
      </g>
      {/* Two cursors — the world is shared */}
      <g>
        <path d="M96 60 L96 76 L100 72 L103 79 L106 77 L103 70 L108 70 Z" fill="#fff" stroke="#0d0a1a" strokeWidth={0.8} />
        <rect x={108} y={72} width={34} height={11} rx={3} fill="#8b5cf6" />
        <text x={112} y={80} fill="#fff" fontSize={7} fontFamily="Inter, sans-serif" fontWeight={600}>you</text>
      </g>
      <g className="u-bob">
        <path d="M150 30 L150 46 L154 42 L157 49 L160 47 L157 40 L162 40 Z" fill="#fff" stroke="#0d0a1a" strokeWidth={0.8} />
        <rect x={162} y={42} width={34} height={11} rx={3} fill="#f59e0b" />
        <text x={166} y={50} fill="#1a1206" fontSize={7} fontFamily="Inter, sans-serif" fontWeight={700}>mai</text>
      </g>
    </Frame>
  )
}

/* 4 — Recursive bots: agents provisioning agents. */
export function RecursiveScene() {
  const tier2 = [78, 162]
  const tier3 = [46, 106, 134, 194]
  return (
    <Frame label="One bot branching into two bots, which branch again into four.">
      <g stroke="rgba(167,139,250,0.35)" strokeWidth={1} fill="none" strokeDasharray="3 3">
        {tier2.map((x) => <path key={x} d={`M120 44 C120 56, ${x} 52, ${x} 62`} />)}
        {tier3.slice(0, 2).map((x) => <path key={x} d={`M78 84 C78 94, ${x} 92, ${x} 100`} />)}
        {tier3.slice(2).map((x) => <path key={x} d={`M162 84 C162 94, ${x} 92, ${x} 100`} />)}
      </g>
      <g transform="translate(0 0) scale(1)">
        <At x={120} y={44}><BotSprite variant={0} /></At>
      </g>
      {tier2.map((x, i) => (
        <g key={x} transform={`translate(${x} 82) scale(0.72) translate(${-x} -82)`}>
          <At x={x} y={82} className="u-bob" style={{ animationDelay: `${i * 0.5}s` }}>
            <BotSprite variant={i + 1} />
          </At>
        </g>
      ))}
      {tier3.map((x, i) => (
        <g key={x} transform={`translate(${x} 114) scale(0.48) translate(${-x} -114)`}>
          <At x={x} y={114} className="u-bob" style={{ animationDelay: `${0.3 + i * 0.4}s` }}>
            <BotSprite variant={i} />
          </At>
        </g>
      ))}
    </Frame>
  )
}

/* 5 — File parsing: documents in, real output back. */
export function FilesScene() {
  const docs = [
    { y: 16, tag: 'PDF', tone: '#f03e2f' },
    { y: 48, tag: 'XLSX', tone: '#34d399' },
    { y: 80, tag: 'DOCX', tone: '#93c5fd' },
  ]
  return (
    <Frame label="PDF, spreadsheet and document files feeding into a bot, which returns a chart and an image.">
      {docs.map((d) => (
        <g key={d.tag} shapeRendering="crispEdges">
          <rect x={14} y={d.y} width={26} height={26} fill="#241c3c" stroke={d.tone} strokeOpacity={0.55} strokeWidth={1} />
          <rect x={34} y={d.y} width={6} height={6} fill="#120d22" />
          <rect x={19} y={d.y + 12} width={16} height={1.5} fill="rgba(255,255,255,0.28)" />
          <rect x={19} y={d.y + 16} width={11} height={1.5} fill="rgba(255,255,255,0.18)" />
          <text x={27} y={d.y + 9} fill={d.tone} fontSize={6.5} fontFamily="Inter, sans-serif" fontWeight={700} textAnchor="middle">
            {d.tag}
          </text>
          <path d={`M44 ${d.y + 13} L84 60`} stroke="rgba(167,139,250,0.3)" strokeWidth={1} strokeDasharray="2 3" fill="none" />
        </g>
      ))}

      <At x={104} y={78} className="u-bob"><BotSprite variant={2} /></At>

      <path d="M122 58 L146 40" stroke="rgba(52,211,153,0.4)" strokeWidth={1} strokeDasharray="2 3" fill="none" />
      <path d="M122 66 L146 88" stroke="rgba(245,158,11,0.4)" strokeWidth={1} strokeDasharray="2 3" fill="none" />

      {/* Output: a chart */}
      <g shapeRendering="crispEdges">
        <rect x={150} y={18} width={76} height={42} rx={4} fill="rgba(20,14,40,0.92)" stroke="rgba(52,211,153,0.3)" strokeWidth={1} />
        {[10, 20, 14, 30, 24].map((h, i) => (
          <rect key={i} x={158 + i * 13} y={52 - h} width={8} height={h} fill="#34d399" opacity={0.4 + i * 0.12} />
        ))}
      </g>
      {/* Output: an image */}
      <g shapeRendering="crispEdges">
        <rect x={150} y={68} width={76} height={40} rx={4} fill="rgba(20,14,40,0.92)" stroke="rgba(245,158,11,0.3)" strokeWidth={1} />
        <circle cx={166} cy={82} r={5} fill="#fbbf24" opacity={0.8} />
        <path d="M154 104 L172 84 L186 104 Z" fill="#f59e0b" opacity={0.55} />
        <path d="M176 104 L196 78 L216 104 Z" fill="#f59e0b" opacity={0.8} />
      </g>
    </Frame>
  )
}
