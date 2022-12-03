import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count').textContent).toBe("0");
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count').textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  userEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count').textContent).toBe("-1");
});
