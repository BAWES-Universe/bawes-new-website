/**
 * Pixel sprite definitions for the BAWES Universe illustration system.
 *
 * Universe avatars are pipoya-style 2D pixel art. The marketing site should
 * speak the same visual language as the product, so every character on the
 * site is drawn from these grids rather than borrowed from an emoji font.
 *
 * Each sprite is a list of equal-length rows. One character = one pixel:
 *   .  transparent      h  hair          s  skin         e  eye
 *   m  mouth            b  shirt/body    a  sleeve       p  legs
 *   f  shoes            c  chassis       g  glass/screen  l  light
 */

export type SpriteGrid = readonly string[]

/** Human avatar — 16x20, three-quarter view, big head. */
export const WOKA: SpriteGrid = [
  '....hhhhhhhh....',
  '..hhhhhhhhhhhh..',
  '..hhhhhhhhhhhh..',
  '..hhsssssssshh..',
  '..hssssssssssh..',
  '..hsessssssesh..',
  '..hsessssssesh..',
  '..hssssssssssh..',
  '..hsssssmmsssh..',
  '...ssssssssss...',
  '.....ssssss.....',
  '...abbbbbbbba...',
  '..aabbbbbbbbaa..',
  '..aabbbbbbbbaa..',
  '..ssbbbbbbbbss..',
  '....bbbbbbbb....',
  '....pppppppp....',
  '....pppppppp....',
  '....pp....pp....',
  '....ff....ff....',
]

/** Bot avatar — 16x20. Antenna, screen face, hovering base. Deliberately not human. */
export const BOT: SpriteGrid = [
  '.......ll.......',
  '.......cc.......',
  '....cccccccc....',
  '..cccccccccccc..',
  '..cggggggggggc..',
  '..cgllggggllgc..',
  '..cgllggggllgc..',
  '..cggggggggggc..',
  '..cgggllllgggc..',
  '..cggggggggggc..',
  '..cccccccccccc..',
  '...cccccccccc...',
  '..ccccccccccccc.',
  '..cclccccccclcc.',
  '..cclccccccclcc.',
  '...cccccccccc...',
  '....cccccccc....',
  '.....llllll.....',
  '......llll......',
  '.......ll.......',
]

/** Butterfly — BAWES already signs its README with one. 16x12. */
export const BUTTERFLY: SpriteGrid = [
  '....3......3....',
  '.....3....3.....',
  '.......22.......',
  '..11...22...11..',
  '.1111..22..1111.',
  '.11111122111111.',
  '.11111122111111.',
  '..111112211111..',
  '...1111221111...',
  '....11122111....',
  '.....112211.....',
  '.......22.......',
]

/** Compressed horizontal runs so each sprite renders as ~40 rects, not 320. */
export type SpriteRun = { x: number; y: number; w: number; key: string }

export function encodeRuns(grid: SpriteGrid): SpriteRun[] {
  const runs: SpriteRun[] = []
  grid.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const key = row[x]
      let w = 1
      while (x + w < row.length && row[x + w] === key) w++
      if (key !== '.') runs.push({ x, y, w, key })
      x += w
    }
  })
  return runs
}

export const spriteSize = (grid: SpriteGrid) => ({
  w: grid[0].length,
  h: grid.length,
})
