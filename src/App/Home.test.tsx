import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders App text', () => {
  render(<Home />);
  const textElement = screen.getByText('App');
  expect(textElement).toBeInTheDocument();
});