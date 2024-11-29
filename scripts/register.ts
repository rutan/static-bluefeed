import { AtpAgent } from '@atproto/api';
import { DID, SHORT_NAME, getEnv } from '../src/config';

(async () => {
  const action = process.argv[2];
  if (!action) throw 'No action';

  const agent = new AtpAgent({
    service: 'https://bsky.social',
  });
  await agent.login({
    identifier: getEnv('BLUESKY_HANDLE'),
    password: getEnv('BLUESKY_PASSWORD'),
  });

  const repo = agent.session?.did;
  if (!repo) throw 'No repo';

  switch (action) {
    case 'register': {
      await agent.com.atproto.repo.putRecord({
        repo: agent.session.did,
        collection: 'app.bsky.feed.generator',
        rkey: SHORT_NAME,
        record: {
          did: DID,
          displayName: 'Static Bluefeed',
          description: 'Static Bluefeed Sample',
          createdAt: new Date().toISOString(),
        },
      });
      console.log('Registered');
      break;
    }
    case 'unregister': {
      await agent.com.atproto.repo.deleteRecord({
        repo: agent.session.did,
        collection: 'app.bsky.feed.generator',
        rkey: SHORT_NAME,
      });
      console.log('Unregistered');
      break;
    }
    default:
      throw 'Invalid action';
  }
})();
