import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../button';

describe('Button Component', () => {
	test('renders button with children', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText('Click me')).toBeInTheDocument();
	});

	test('calls onClick handler when clicked', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click me</Button>);

		fireEvent.click(screen.getByText('Click me'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('disables button when disabled prop is true', () => {
		render(<Button disabled>Click me</Button>);
		expect(screen.getByText('Click me')).toBeDisabled();
	});

	test('displays loading state', () => {
		render(<Button isLoading>Click me</Button>);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	test('applies fullWidth prop correctly', () => {
		const { container } = render(<Button fullWidth>Click me</Button>);
		const button = container.firstChild;
		expect(button).toHaveClass('w-full');
	});

	test('applies primary variant styles by default', () => {
		const { container } = render(<Button>Click me</Button>);
		const button = container.firstChild;
		expect(button).toHaveClass('bg-blue-600');
		expect(button).toHaveClass('text-white');
	});

	test('applies secondary variant styles when specified', () => {
		const { container } = render(<Button variant='secondary'>Click me</Button>);
		const button = container.firstChild;
		expect(button).toHaveClass('bg-gray-200');
		expect(button).toHaveClass('text-gray-800');
	});
});
