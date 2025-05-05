import { NetworkTypes } from '@/config/network.config';
import { Proposals } from '@/contracts/proposals';
import { useCallback, useState } from 'react';
import { useSignerContext } from '../providers/SignerProvider';
import { useProvider } from './use-provider';

interface Proposal {
	title: string;
	description: string;
}

interface UseProposalsReturn {
	getProposals: () => Promise<Proposal[]>;
	createProposal: (proposal: Proposal) => Promise<void>;
	isLoading: boolean;
	txId: string | null;
}

/**
 * useErc20 hook
 * @param {TokenType} type - The type of the token
 * @param {NetworkTypes} network - The network type
 * @returns {UseErc20Return} - The object containing checkAndApprove, balanceOf and decimals functions
 */
export const useProposals = (): UseProposalsReturn => {
	const { signer } = useSignerContext();

	const provider = useProvider(NetworkTypes.ETHEREUM);

	const [isLoading, setIsLoading] = useState(false);
	const [txId, setTxId] = useState<string | null>(null);

	const getContract = useCallback(
		(needSigner: boolean): Proposals => {
			if (!provider) {
				throw new Error(
					'Proposals - Provider is needed to make the transaction'
				);
			}

			const contractAddress = '0xCE7c4fEf0E459C35ADfa98b3413f76101B88FF5f';

			if (needSigner && signer) {
				return new Proposals()
					.setAddress(contractAddress)
					.setSigner(signer)
					.setProvider(provider)
					.getContract();
			} else if (needSigner) {
				throw new Error('Proposals - Signer is needed to make the transaction');
			}

			return new Proposals()
				.setAddress(contractAddress)
				.setProvider(provider)
				.getContract();
		},
		[signer, provider]
	);

	const createProposal = useCallback(
		async (proposal: Proposal): Promise<void> => {
			setIsLoading(true);
			const instance = getContract(true);

			const transaction = await instance.contract.createProposal(
				proposal.title,
				proposal.description
			);
			setTxId(transaction.hash);
			await transaction.wait();
			setIsLoading(false);
		},
		[getContract]
	);

	const getProposals = useCallback(async (): Promise<Proposal[]> => {
		setIsLoading(true);
		const instance = getContract(false);

		const proposals = await instance.contract.getAllProposals();
		setIsLoading(false);

		return proposals;
	}, [getContract]);

	return { createProposal, getProposals, isLoading, txId };
};
