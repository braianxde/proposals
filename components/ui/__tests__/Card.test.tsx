import { render } from '@testing-library/react';
import Card from '../card';

describe('Card Component', () => {
	test('renders card with children', () => {
		const { getByText } = render(<Card>Card content</Card>);
		expect(getByText('Card content')).toBeInTheDocument();
	});

	test('applies base styles', () => {
		const { container } = render(<Card>Card content</Card>);
		const card = container.firstChild;
		expect(card).toHaveClass('p-6');
		expect(card).toHaveClass('rounded-lg');
		expect(card).toHaveClass('shadow-lg');
	});

	test('applies additional className when provided', () => {
		const { container } = render(
			<Card className='custom-class'>Card content</Card>
		);
		const card = container.firstChild;
		expect(card).toHaveClass('custom-class');
	});
});
