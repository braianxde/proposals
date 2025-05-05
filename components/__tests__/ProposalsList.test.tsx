import { useProposals } from '@/hooks/use-proposal';
import { act, render, screen, waitFor } from '@testing-library/react';
import ProposalsList from '../proposals-list';

// Mock the custom hook
jest.mock('@/hooks/use-proposal', () => ({
	useProposals: jest.fn(),
}));

describe('ProposalsList Component', () => {
	const mockProposals = [
		{ title: 'Proposal 1', description: 'Description 1' },
		{ title: 'Proposal 2', description: 'Description 2' },
	];

	test('displays loading component when isLoading is true', () => {
		(useProposals as jest.Mock).mockReturnValue({
			getProposals: jest.fn(),
			isLoading: true,
		});

		render(<ProposalsList />);
		expect(screen.getByText('Loading proposals...')).toBeInTheDocument();
	});

	test('displays proposals when data is loaded', async () => {
		const getProposalsMock = jest.fn().mockResolvedValue(mockProposals);

		(useProposals as jest.Mock).mockReturnValue({
			getProposals: getProposalsMock,
			isLoading: false,
		});

		// Use act to handle the async effect
		await act(async () => {
			render(<ProposalsList />);
		});

		// Wait for the useEffect to call getProposals and update state
		await waitFor(() => {
			expect(getProposalsMock).toHaveBeenCalledTimes(1);
		});

		expect(screen.getByText('Proposals')).toBeInTheDocument();
		expect(screen.getByText('Proposal 1')).toBeInTheDocument();
		expect(screen.getByText('Description 1')).toBeInTheDocument();
		expect(screen.getByText('Proposal 2')).toBeInTheDocument();
		expect(screen.getByText('Description 2')).toBeInTheDocument();
	});
});
