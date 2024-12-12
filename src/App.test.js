import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders homepage link', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
