import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders Home Page text', () => {
  render(<Home />);
  const textElement = screen.getByText('Home Page');
  expect(textElement).toBeInTheDocument();
});