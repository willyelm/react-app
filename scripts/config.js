import path from 'node:path';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcss from './plugins/postcss.js';
import svg from './plugins/svg.js';
// Working dir
const workspace = process.cwd();
// Server bundle configuration
export const serverConfig = {
  bundle: true,
  platform: 'node', 
  format: 'esm',        // Support esm packages
  packages: 'external', // Omit node packages from our node bundle
  logLevel: 'error',
  sourcemap: 'external',
  entryPoints: {
    main: path.join(workspace, 'src', 'main.tsx') // Express app
  },
  tsconfig: path.join(workspace, 'tsconfig.json'),
  outdir: path.join(workspace, 'dist'),
  plugins: [
    svg()
  ]
};
// Client bundle configuration
export const clientConfig = {
  bundle: true,
  treeShaking: true,
  platform: 'browser',
  format: 'esm',
  target: 'esnext',
  jsx: 'automatic',
  sourcemap: 'external',
  logLevel: 'error',
  logOverride: {
    'unsupported-dynamic-import': 'silent',
  },
  tsconfig: path.join(workspace, 'tsconfig.json'),
  entryPoints: {
    index: path.join(workspace, 'src', 'index.tsx'), // Client react app
    style: path.join(workspace, 'src', 'style.css')  // Stylesheet
  },
  outdir: path.join(workspace, 'dist', 'static'),    // Served as /static by express
  plugins: [
    svg(),
    postcss({
      plugins: [
        tailwindcss(),
        autoprefixer
      ]
    })
  ]
};