'use client';

import ProposalForm from '@/components/proposal-form';
import Card from '@/components/ui/card';
import ConnectWalletButton from '@/components/ui/connect-wallet-button';
import { useProposals } from '@/hooks/use-proposal';
import { useSignerContext } from '@/providers/SignerProvider';
import { useState } from 'react';

export default function CreateProposals() {
	const [error, setError] = useState('');
	const { createProposal, isLoading, txId } = useProposals();
	const { signer } = useSignerContext();
	const isWalletConnected = !!signer;

	const handleSubmit = async (title: string, description: string) => {
		setError('');

		try {
			await createProposal({ title, description });
		} catch (err: unknown) {
			console.error('Error creating proposal:', err);
			setError(
				err instanceof Error
					? err.message
					: 'Failed to create proposal. Please try again.'
			);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center p-6'>
			<Card className='w-full max-w-md'>
				<h1 className='text-2xl font-bold mb-6 text-center'>Create Proposal</h1>

				{!isWalletConnected ? (
					<div className='text-center p-6 border border-white/20 rounded-lg mb-6'>
						<p className='mb-4'>
							Please connect your wallet to create a proposal
						</p>
						<ConnectWalletButton />
					</div>
				) : (
					<ProposalForm
						onSubmit={handleSubmit}
						isLoading={isLoading}
						error={error}
						txId={txId}
					/>
				)}
			</Card>
		</div>
	);
}
