import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

test('renders Page Not Found text', () => {
  render(<NotFound />);
  const textElement = screen.getByText('Page Not Found');
  expect(textElement).toBeInTheDocument();
});