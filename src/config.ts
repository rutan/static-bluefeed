export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (value !== undefined) return value;
  if (defaultValue !== undefined) return defaultValue;

  throw new Error(`Missing environment variable: ${key}`);
}

export const HOSTNAME = getEnv('HOSTNAME');
export const SHORT_NAME = getEnv('SHORT_NAME', 'staticBluefeed');
export const DID = `did:web:${HOSTNAME}`;
