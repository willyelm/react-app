import { type FunctionComponent } from 'react';
import { Routes, Route } from 'react-router';
import { Home } from './Home';
import { NotFound } from './NotFound';

export const App: FunctionComponent = () => {
  return <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>;
}
