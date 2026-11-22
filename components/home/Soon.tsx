import { BRICKS_LIVE } from '@/lib/release'

/** "Coming with Bricks" tag. Renders nothing once the Bricks release is live. */
export default function Soon({ className = '' }: { className?: string }) {
  if (BRICKS_LIVE) return null
  return <span className={`uh-soon ${className}`}>Coming with Bricks</span>
}

/** Shown in place of the tag for things that are live today. */
export function Live({ children = 'Live' }: { children?: React.ReactNode }) {
  return <span className="uh-live">{children}</span>
}
