import { build } from 'esbuild';
import { clientConfig, serverConfig } from './config.js';
// build process
async function bundle() {
  // Build server with minify enabled for production
  await build({
    ...serverConfig,
    minify: true,
    define: {
      'process.env.NODE_ENV': `"production"`
    }
  });
  // Build client with minify enabled for production
  await build({
    ...clientConfig,
    minify: true,
    define: {
      'process.env.NODE_ENV': `"production"`
    }
  });
}
// Start the build process
bundle();