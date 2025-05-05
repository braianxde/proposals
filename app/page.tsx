'use client';

import ProposalsList from '@/components/proposals-list';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-between h-screen w-full mx-auto'>
			<ProposalsList />
		</div>
	);
}
