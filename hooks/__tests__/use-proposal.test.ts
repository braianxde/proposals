import { useSignerContext } from '@/providers/SignerProvider';
import { act, renderHook } from '@testing-library/react';
import { useProposals } from '../use-proposal';
import { useProvider } from '../use-provider';

// Mock dependencies
jest.mock('@/providers/SignerProvider', () => ({
	useSignerContext: jest.fn(),
}));

jest.mock('../use-provider', () => ({
	useProvider: jest.fn(),
}));

// Mock the Proposals class
const mockCreateProposal = jest.fn();
const mockGetAllProposals = jest.fn();
const mockContractInstance = {
	contract: {
		createProposal: mockCreateProposal,
		getAllProposals: mockGetAllProposals,
	},
};

jest.mock('@/contracts/proposals', () => ({
	Proposals: jest.fn().mockImplementation(() => ({
		setAddress: jest.fn().mockReturnThis(),
		setSigner: jest.fn().mockReturnThis(),
		setProvider: jest.fn().mockReturnThis(),
		getContract: jest.fn().mockReturnValue(mockContractInstance),
	})),
}));

describe('useProposals Hook', () => {
	// Setup mock values
	const mockSigner = { address: '0x123' };
	const mockProvider = { provider: 'mockProvider' };

	beforeEach(() => {
		jest.clearAllMocks();
		(useSignerContext as jest.Mock).mockReturnValue({ signer: mockSigner });
		(useProvider as jest.Mock).mockReturnValue(mockProvider);
	});

	test('initializes with correct default values', () => {
		const { result } = renderHook(() => useProposals());

		expect(result.current.isLoading).toBe(false);
		expect(result.current.txId).toBeNull();
		expect(typeof result.current.createProposal).toBe('function');
		expect(typeof result.current.getProposals).toBe('function');
	});

	test('getProposals fetches proposals correctly', async () => {
		const mockProposals = [
			{ title: 'Proposal 1', description: 'Description 1' },
			{ title: 'Proposal 2', description: 'Description 2' },
		];

		mockGetAllProposals.mockResolvedValue(mockProposals);

		const { result } = renderHook(() => useProposals());

		let proposals;
		await act(async () => {
			proposals = await result.current.getProposals();
		});

		expect(mockGetAllProposals).toHaveBeenCalledTimes(1);
		expect(proposals).toEqual(mockProposals);
		expect(result.current.isLoading).toBe(false);
	});

	test('createProposal submits a proposal correctly', async () => {
		const mockProposal = { title: 'New Proposal', description: 'Description' };
		const mockTransaction = {
			hash: '0xabc123',
			wait: jest.fn().mockResolvedValue({}),
		};

		mockCreateProposal.mockResolvedValue(mockTransaction);

		const { result } = renderHook(() => useProposals());

		await act(async () => {
			await result.current.createProposal(mockProposal);
		});

		expect(mockCreateProposal).toHaveBeenCalledWith(
			mockProposal.title,
			mockProposal.description
		);
		expect(mockTransaction.wait).toHaveBeenCalledTimes(1);
		expect(result.current.txId).toBe(mockTransaction.hash);
		expect(result.current.isLoading).toBe(false);
	});

	test('handles errors when provider is missing', async () => {
		(useProvider as jest.Mock).mockReturnValue(null);

		const { result } = renderHook(() => useProposals());
		const mockProposal = { title: 'New Proposal', description: 'Description' };

		await expect(async () => {
			await act(async () => {
				await result.current.createProposal(mockProposal);
			});
		}).rejects.toThrow(
			'Proposals - Provider is needed to make the transaction'
		);
	});

	test('handles errors when signer is required but missing', async () => {
		(useSignerContext as jest.Mock).mockReturnValue({ signer: null });

		const { result } = renderHook(() => useProposals());
		const mockProposal = { title: 'New Proposal', description: 'Description' };

		await expect(async () => {
			await act(async () => {
				await result.current.createProposal(mockProposal);
			});
		}).rejects.toThrow('Proposals - Signer is needed to make the transaction');
	});
});
