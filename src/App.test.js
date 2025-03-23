import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to my Portfolio/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders portfolio name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Hi! I'm Fahrezi/i);
  expect(nameElement).toBeInTheDocument();
});
