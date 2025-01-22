import { readFile } from 'node:fs/promises';
import postcss from 'postcss';
// esbuild Plugin to process css files with postcss
export const postcssPlugin = ({
  plugins = []
} = {}) => {
  return {
    name: 'postcss',
    setup(build) {
      build.onLoad({ filter: /\.css$/ }, async (args) => {
        const raw = await readFile(args.path, 'utf8');
        const source = await postcss(plugins).process(raw.toString(), {
            from: args.path
        });
        return {
          contents: source.css,
          loader: 'css'
        };
      });
    }
  };
}

export default postcssPlugin;
