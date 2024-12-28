import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders Hello, World! text', () => {
  render(<Home />);
  const textElement = screen.getByText('Home Page');
  expect(textElement).toBeInTheDocument();
});