import { Avatar, Brick, vars, type AvatarId, type BrickColour } from './sprites'

const PARADE: ({ avatar: AvatarId } | { brick: BrickColour })[] = [
  { avatar: 'a' }, { brick: 'orange' }, { avatar: 'j' }, { avatar: 'd' }, { brick: 'violet' }, { avatar: 'g' }, { avatar: 'cat' }, { avatar: 'e' }, { brick: 'teal' }, { avatar: 'k' },
  { avatar: 'c' }, { brick: 'pink' }, { avatar: 'm' }, { avatar: 'dog' }, { brick: 'sky' }, { avatar: 'b' }, { avatar: 'i' }, { brick: 'green' }, { avatar: 'l' }, { avatar: 'n' },
]

/** Avatars and Bricks walking to the right along the bottom of a closing card. The second copy makes the loop seamless. */
export default function Parade() {
  return (
    <div className="uh-road" aria-hidden="true">
      <div className="uh-parade">
        {[...PARADE, ...PARADE].map((who, k) =>
          'brick' in who ? (
            <Brick key={k} colour={who.brick} className="uh-hopping" style={vars({ '--d': `-${((k % PARADE.length) * 0.13).toFixed(2)}s` })} />
          ) : (
            <Avatar key={k} id={who.avatar} className="uh-walking" />
          ),
        )}
      </div>
    </div>
  )
}
