import path from 'node:path';

const workspace = process.cwd();

export const serverConfig = {
  bundle: true,
  platform: 'node',
  format: 'esm',
  packages: 'external',
  sourcemap: 'external',
  logLevel: 'error',
  entryPoints: {
    main: path.join(workspace, 'src', 'main.tsx')
  },
  tsconfig: path.join(workspace, 'tsconfig.json'),
  outdir: path.join(workspace, 'dist')
};

export const clientConfig = {
  bundle: true,
  splitting: true,
  platform: 'browser',
  format: 'esm',
  sourcemap: 'external',
  logLevel: 'error',
  tsconfig: path.join(workspace, 'tsconfig.json'),
  entryPoints: {
    index: path.join(workspace, 'src', 'index.tsx'),
    style: path.join(workspace, 'src', 'style.css')
  },
  outdir: path.join(workspace, 'dist', 'static'),
  plugins: []
};