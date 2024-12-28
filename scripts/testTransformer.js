import { transformSync } from 'esbuild';

export default {
  process(src, filename) {
    // Ensure only TypeScript and JavaScript files are processed
    if (/\.(ts|tsx|js|jsx)$/.test(filename)) {
      const result = transformSync(src, {
        loader: filename.endsWith('ts') || filename.endsWith('tsx') ? 'tsx' : 'jsx',
        format: 'esm',  // ESM format
        sourcemap: 'inline', // Inline sourcemaps for debugging
        target: 'esnext', // Set the target to latest ECMAScript
        tsconfigRaw: {
          compilerOptions: {
            jsx: 'react-jsx'
          },
        },
      });
      return { code: result.code, map: result.map };
    }
    return src;
  },
};