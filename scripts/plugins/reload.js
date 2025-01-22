import { createServer } from 'node:http';

export const reloadPlugin = (options = {}) => {
  const { port = 8000 } = options;
  const clients = new Set();
  const reload = () => {
    for (const res of clients) {
      res.write('data: reload\n\n');
    }
    clients.clear();
  }
  // Start a server for sending reload events
  createServer((req, res) => {
    if (req.url === '/reload') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
      });
      clients.add(res);
      req.on('close', () => clients.delete(res));
    } else {
      res.writeHead(404);
      res.end();
    }
  }).listen(port);

  return {
    name: 'reload',
    setup(build) {
      const reloadScript = `(() => {
          const eventSource = new EventSource("http://localhost:${port}/reload");
          eventSource.onmessage = () => location.reload();
        })();`;
      // Inject reload script as a banner
      build.initialOptions.banner ??= {};
      build.initialOptions.banner.js = 
        (build.initialOptions.banner.js || '') + reloadScript;
      // Notify connected clients on build end
      build.onEnd(({ errors }) => {
        if (errors.length === 0) {
          setTimeout(() => reload(), 500);
        } else {
          console.error(`[reload] Build errors:`, errors);
        }
      });
    },
  };
};

export default reloadPlugin;