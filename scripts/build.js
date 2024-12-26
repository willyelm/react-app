import { build } from 'esbuild';
import { clientConfig, serverConfig } from './config.js';
// build process
async function bundle() {
  // Build server with minify enabled for production
  await build({
    ...serverConfig,
    minify: true
  });
  // Build client with minify enabled for production
  await build({
    ...clientConfig,
    minify: true
  });
}
// Start the build process
bundle();