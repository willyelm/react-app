import { spawn, fork } from 'node:child_process';
import path from 'node:path';
import { build, context } from 'esbuild';
import reload from './plugins/reload.js';
import { clientConfig, serverConfig } from './config.js';

const workspace = process.cwd();
const tasks = {
  async build() {
    console.log('[task] bundle for production');
    const buildConfig = {
      logLevel: 'error',
      define: {
        'process.env.NODE_ENV': `"production"`
      },
      minify: true
    };
    // Build client
    await build({
      ...clientConfig,
      ...buildConfig
    });
    // Build server
    await build({
      ...serverConfig,
      ...buildConfig
    });
  },
  async dev() {
    console.log('[task] bundle for development');
    const devConfig = {
      logLevel: 'debug',
      define: {
        'process.env.NODE_ENV': `"development"`
      }
    };
    // Build server in watch mode
    const serverContext = await context({
      ...serverConfig,
      ...devConfig
    });
    serverContext.watch();
    // Build client in watch mode
    const clientContext = await context({
      ...clientConfig,
      ...devConfig,
      plugins: [
        ...clientConfig.plugins,
        reload({
          port: 3001
        })
      ]
    });
    clientContext.watch();
    console.log('[task] Running server build');
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
  },
  async test() {
    const jestBinaryPath = path.resolve(
      workspace,
      'node_modules',
      'jest',
      'bin',
      'jest.js');
    const jestConfigPath = path.resolve(
      workspace,
      'jest.config.json');

    fork(jestBinaryPath, [
      '--config',
      jestConfigPath
    ], {
      cwd: workspace,
      env: Object.assign(process.env, {
        NODE_OPTIONS: '--experimental-vm-modules',
        NODE_NO_WARNINGS: 1
      })
    });
  }
};

const args = process.argv.splice(2);
if (tasks[args[0]]) {
  tasks[args[0]]().catch((error) => {
    console.error('[task] Fatal error:', error);
    process.exit(1)
  });;
}