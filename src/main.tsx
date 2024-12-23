import path from 'node:path';
import express, { type Request, type Response } from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { App } from './App/App';

const app = express();
const port = 3000;
const workspace = process.cwd();

// Serve static files like js bundles and css files
app.use('/static', express.static(path.join(workspace, 'dist', 'static')));
// Server files in public folder 
app.use(express.static(path.join(workspace, 'public')));
// Fallback to render the react app
app.use((request: Request, response: Response) => {
  const { pipe } = renderToPipeableStream(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="language" content="en_US" />
        <meta httpEquiv="content-language" content="en_US" />
        <link rel='stylesheet' href={`/static/style.css?1`} />
      </head>
      <body>
        <base href="/" />
        <div id="app">
          <StaticRouter location={request.url}>
            <App />
          </StaticRouter>
        </div>
      </body>
    </html>,
    { 
      bootstrapModules: [ `/static/index.js?1` ],
      onShellReady() {
        response.setHeader('content-type', 'text/html');
        pipe(response);
      }
    });
});
// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});