import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App } from './App/App';
// Hydrate the pre-rendered #app element
hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);