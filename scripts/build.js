import { build } from 'esbuild';
import { clientConfig, serverConfig } from './config.js';

async function bundle() {
  // Build server
  await build({
    ...serverConfig,
    minify: true
  });
  // Build client
  await build({
    ...clientConfig,
    minify: true
  });
}

bundle();