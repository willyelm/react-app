import { readFile } from 'node:fs/promises';
import { optimize } from 'svgo';
/**
 * An esbuild plugin to transform SVG into React-compatible JSX.
 */
function toCamelCase(kebabStr) {
  return kebabStr.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export const svgPlugin = () => ({
  name: 'svg',
  setup(build) {
    const attrMap = {
      'class': 'className'
    };
    // Intercept .svg files
    build.onLoad({ filter: /\.svg$/ }, async (args) => {
      // Read SVG content
      const svgContent = await readFile(args.path, 'utf8');
      // Optimize the SVG for React
      const { data: optimizedSvg } = optimize(svgContent, {
        plugins: [
          'removeDoctype',
          'removeXMLProcInst',
          'removeComments',
          'removeTitle',
          'convertStyleToAttrs',
          {
            name: 'convertNamespacedAttributes',
            fn: () => {
              return {
                element: {
                  enter: (node) => {
                    if (node.attributes) {
                      Object.keys(node.attributes).forEach((key) => {
                        // Map attributes like `class` to `className`
                        if (attrMap.hasOwnProperty(key)) {
                          node.attributes[attrMap[key]] = node.attributes[key];
                          delete node.attributes[key];
                        }
                        // Convert attributes like `fill-rule` to `fillRule`
                        if (key.includes('-')) {
                          const newKey = toCamelCase(key);
                          node.attributes[newKey] = node.attributes[key];
                          delete node.attributes[key];
                        }
                        // Convert namespaced attributes like `xmlns:xlink` to `xmlnsXlink`
                        if (key.includes(':')) {
                          const [namespace, attrName] = key.split(':');
                          const newKey = `${namespace}${attrName.charAt(0).toUpperCase()}${attrName.slice(1)}`;
                          node.attributes[newKey] = node.attributes[key];
                          delete node.attributes[key];
                        }
                      });
                    }
                  }
                }
              }
            }
          },
        ],
      });
      // Wrap the optimized SVG in a React component
      const jsxComponent = `export default (props) => (
          ${optimizedSvg.replace(/<svg (.*?)>/, (match, attrs) => {
        return `<svg ${attrs} {...props}>`;
      })}
        );`;
      return {
        contents: jsxComponent,
        loader: 'jsx'
      };
    });
  },
});

export default svgPlugin;