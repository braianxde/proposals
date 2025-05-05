import { render, screen } from '@testing-library/react';
import Notification from '../notification';

describe('Notification Component', () => {
	test('renders notification with children', () => {
		render(<Notification type='info'>Test notification</Notification>);
		expect(screen.getByText('Test notification')).toBeInTheDocument();
	});

	test('applies success style for success type', () => {
		const { container } = render(
			<Notification type='success'>Success message</Notification>
		);
		const notification = container.firstChild;
		expect(notification).toHaveClass('bg-green-100');
		expect(notification).toHaveClass('border-green-400');
		expect(notification).toHaveClass('text-green-700');
	});

	test('applies error style for error type', () => {
		const { container } = render(
			<Notification type='error'>Error message</Notification>
		);
		const notification = container.firstChild;
		expect(notification).toHaveClass('bg-red-100');
		expect(notification).toHaveClass('border-red-400');
		expect(notification).toHaveClass('text-red-700');
	});

	test('applies info style for info type', () => {
		const { container } = render(
			<Notification type='info'>Info message</Notification>
		);
		const notification = container.firstChild;
		expect(notification).toHaveClass('bg-blue-100');
		expect(notification).toHaveClass('border-blue-400');
		expect(notification).toHaveClass('text-blue-700');
	});

	test('applies additional className when provided', () => {
		const { container } = render(
			<Notification
				type='info'
				className='custom-class'
			>
				Info message
			</Notification>
		);
		const notification = container.firstChild;
		expect(notification).toHaveClass('custom-class');
	});
});
