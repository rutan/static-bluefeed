# static bluefeed

Static Bluefeed is a minimal static site for Bluesky custom feeds.

## Example (Demo)
- https://static-bluefeed.rutan.dev/
- https://bsky.app/profile/rutan.bsky.social/feed/staticBluefeed

## How to Build
```
$ pnpm install
$ pnpm run build
```

build files are generated in `dist` directory.

## How to Deploy & Register
### Deploy (ex. cloudflare pages)
```
$ pnpm run deploy
```

### Register
```
$ pnpm run register
```

register your feed to Bluesky.

## Environment Variables

### `HOSTNAME` (required)
- Your Site Domain
- ex: `example.com`

### `FEED_SHORT_NAME`
- Your custom feed short name
- `https://bsky.app/profile/{your handle}/feed/{FEED_SHORT_NAME}`
- ex: `staticBluefeed`

### `BLUESKY_HANDLE` (required)
- Handle of your Blueskye account
- ex: `rutan.bsky.social`

### `BLUESKY_PASSWORD` (required)
- App Password of your Bluesky account

## License
MIT
