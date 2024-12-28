import { fork } from 'node:child_process';
import path from 'node:path';

const workspace = process.cwd();
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