import { Hono } from 'hono';
import { DID, HOSTNAME, SHORT_NAME } from './config';

const app = new Hono();

app.get('/', (c) => {
  return c.html(
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>static bluefeed sample</title>
      </head>
      <body>
        <h1>static bluefeed sample</h1>
      </body>
    </html>,
  );
});

app.get('/.well-known/did.json', (c) => {
  return c.json({
    '@context': ['https://www.w3.org/ns/did/v1'],
    id: DID,
    service: [
      {
        id: '#bsky_fg',
        type: 'BskyFeedGenerator',
        serviceEndpoint: `https://${HOSTNAME}`,
      },
    ],
  });
});

app.get('/xrpc/app.bsky.feed.describeFeedGenerator', (c) => {
  return c.json({
    did: DID,
    feeds: [],
  });
});

app.get('/xrpc/app.bsky.feed.getFeedSkeleton', (c) => {
  return c.json({
    feed: [
      // edit this to change the original feed
      {
        post: 'at://did:plc:zejpsk4otdzj2uzn6tsbktle/app.bsky.feed.post/3lafwhgzz7w2j',
      },
      {
        post: 'at://did:plc:zejpsk4otdzj2uzn6tsbktle/app.bsky.feed.post/3lac3k2tv6d2j',
      },
    ],
  });
});

export default app;
