import Card from '@/components/ui/card';
import Loading from '@/components/ui/loading';
import { useProposals } from '@/hooks/use-proposal';
import { useEffect, useState } from 'react';
import ProposalCard from './proposal-card';

const ProposalsList = () => {
	const { getProposals, isLoading } = useProposals();
	const [proposals, setProposals] = useState<
		{ title: string; description: string }[]
	>([]);

	useEffect(() => {
		const fetchProposals = async () => {
			try {
				const data = await getProposals();
				setProposals(data);
			} catch (error) {
				console.error('Failed to fetch proposals:', error);
			}
		};

		fetchProposals();
	}, [getProposals]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Card className='w-full'>
			<h2 className='text-2xl font-bold'>Proposals</h2>
			<ul className='space-y-4 mt-4 cursor-pointer'>
				{proposals.map((proposal, index) => (
					<ProposalCard
						key={index}
						title={proposal.title}
						description={proposal.description}
					/>
				))}
			</ul>
		</Card>
	);
};

export default ProposalsList;
