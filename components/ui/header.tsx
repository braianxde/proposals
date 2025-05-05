'use client';

import Link from 'next/link';

const Header = () => {
	return (
		<header className='flex flex-row justify-center items-center gap-6 py-6 bg-gradient-to-r from-blue-400 via-white-500 to-red-500 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-80'>
			<Link
				href='/'
				className='text-2xl font-bold hover:text-purple-200 transition-colors duration-300'
			>
				Proposals
			</Link>
			<Link
				href='/create-proposals'
				className='text-2xl font-bold hover:text-purple-200 transition-colors duration-300'
			>
				Create Proposal
			</Link>
		</header>
	);
};

export default Header;
