import Header from '@/components/ui/header';
import { render } from '@testing-library/react';

describe('Header Component', () => {
	test('renders header with correct styling', () => {
		const { container } = render(<Header />);
		const header = container.firstChild;

		expect(header).toHaveClass('bg-gradient-to-r');
		expect(header).toHaveClass('from-blue-400');
		expect(header).toHaveClass('to-red-500');
	});
});
