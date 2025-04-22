// App.test.js
import '@testing-library/jest-dom'; // Importing jest-dom for the matchers
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('pizza checkbox is initially unchecked', () => {
  render(<App />);
  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked(); // Initial state is unchecked
});

test('toppings list initially contains only cheese', () => {
  render(<App />);
  expect(screen.getAllByRole('listitem').length).toBe(1);
  expect(screen.getByText('Cheese')).toBeInTheDocument();
  expect(screen.queryByText('Pepperoni')).not.toBeInTheDocument();
});

test('checkbox appears as checked when user clicks it', () => {
  render(<App />);
  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });
  userEvent.click(addPepperoni); // User clicks checkbox to check it
  expect(addPepperoni).toBeChecked(); // Now it should be checked
});

test('topping appears in toppings list when checked', () => {
  render(<App />);
  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });
  userEvent.click(addPepperoni); // Adds pepperoni
  expect(screen.getByText('Pepperoni')).toBeInTheDocument(); // Pepperoni should appear in list
});

test('selected topping disappears when checked a second time', () => {
  render(<App />);
  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });
  userEvent.click(addPepperoni); // First click adds pepperoni
  expect(addPepperoni).toBeChecked();
  expect(screen.getByText('Pepperoni')).toBeInTheDocument();

  userEvent.click(addPepperoni); // Second click removes pepperoni
  expect(addPepperoni).not.toBeChecked(); // Checkbox should be unchecked
  expect(screen.queryByText('Pepperoni')).not.toBeInTheDocument(); // Pepperoni should be removed
});
