import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';
import { MemoryRouter } from 'react-router';
import type { ReactElement } from 'react';

function renderWithRouter(element: ReactElement, route = '/') {
  return render(<MemoryRouter initialEntries={[route]}>{element}</MemoryRouter>);
}

test('renders Not Found text', () => {
  renderWithRouter(<NotFound/>);
  const textElement = screen.getByText('Page Not Found');
  expect(textElement).toBeInTheDocument();
});