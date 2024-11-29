import { readdir, rename } from 'node:fs/promises';
import { join } from 'node:path';

async function removeExtensions(targetDir: string, extensions: string[]) {
  const entries = await readdir(targetDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      await removeExtensions(`${targetDir}/${entry.name}`, extensions);
    } else if (entry.isFile()) {
      const name = entry.name;
      for (const ext of extensions) {
        if (name.endsWith(ext)) {
          await rename(`${targetDir}/${name}`, `${targetDir}/${name.replace(ext, '')}`);
          console.log(`Removed extension from ${targetDir}/${name}`);
        }
      }
    }
  }
}

removeExtensions(join(import.meta.dirname, '../dist/xrpc'), ['.json']);
