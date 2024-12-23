import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App } from './App/App';

hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
