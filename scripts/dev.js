import { spawn } from 'node:child_process';
import path from 'node:path';
import { context } from 'esbuild';
import { serverConfig, clientConfig } from './config.js';
import reloadPlugin from './reloadPlugin.js';
// Working dir
const workspace = process.cwd();
// Dev process
async function dev() {
  // Build server in watch mode
  const serverContext = await context({
    ...serverConfig,
    define: {
      'process.env.NODE_ENV': `"development"`
    }
  });
  serverContext.watch();
  // Build client in watch mode
  clientConfig.plugins.push(reloadPlugin());
  const clientContext = await context({
    ...clientConfig,
    define: {
      'process.env.NODE_ENV': `"development"`
    }
  });
  clientContext.watch();
  // Run server
  const childProcess = spawn('node', [
    '--watch',
    path.join(workspace, 'dist', 'main.js')
  ], {
    stdio: 'inherit'
  });
  // Kill child process on program interruption
  process.on('SIGINT', () => {
    if (childProcess) {
      childProcess.kill();
    }
    process.exit(0);
  });
}
// Start the dev process
dev();