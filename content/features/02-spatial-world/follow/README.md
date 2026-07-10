# Follow

**Status:** 🟢 LIVE (inherited from WorkAdventure)

Follow another player through the map. Your avatar automatically tracks their movements.

## How It Works

- Walk near another player's avatar
- Click the "Follow" button on their avatar
- Your avatar follows them as they move through rooms and maps
- Player being followed sees a "Stop following" button
- API: `WA.player.proximityMeeting.followMe()`
- Events: `WA.player.proximityMeeting.onUnfollowed()`

## Use Cases

- Tour guides leading groups through a space
- Helping new users navigate
- Keeping a group together during events

## Related

- [Proximity chat](./proximity-chat/) — talk while following
- [Scripting API](./scripting-api/) — programmatic follow triggers
