import type { CSSProperties } from 'react'

/** Inline style with CSS custom properties (React's types do not know them). */
export function vars(o: Record<string, string | number>): CSSProperties {
  return o as CSSProperties
}

export type AvatarId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'cat' | 'dog'
export type BrickColour = 'orange' | 'violet' | 'teal' | 'pink' | 'blue' | 'amber' | 'sky' | 'green'

interface SpriteProps {
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
}

/** An avatar from the game's own sprite sheets. `row`: 0 down, 1 left, 2 right, 3 up. */
export function Avatar({ id, row, className = '', style, children }: SpriteProps & { id: AvatarId; row?: number }) {
  return (
    <span className={`uh-av uh-wk-${id} ${className}`} style={{ ...(row != null ? vars({ '--row': row }) : null), ...style }}>
      {children}
    </span>
  )
}

/** A Brick from the game's own sprite sheets. It hops on its own. */
export function Brick({ colour, row, className = '', style, children }: SpriteProps & { colour: BrickColour; row?: number }) {
  return (
    <span className={`uh-bk uh-bk-${colour} ${className}`} style={{ ...(row != null ? vars({ '--row': row }) : null), ...style }}>
      {children}
    </span>
  )
}
