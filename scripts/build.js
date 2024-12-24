import { build } from 'esbuild';
import { clientConfig, serverConfig } from './config.js';
// build process
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
// Start the build process
bundle();