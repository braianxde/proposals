'use client';

import Header from '@/components/ui/header';
import { SignerProvider } from '@/providers/SignerProvider';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import {
	DynamicContextProvider,
	SortWallets,
} from '@dynamic-labs/sdk-react-core';

export default function LayoutClient({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<DynamicContextProvider
			theme={'light'}
			settings={{
				environmentId: process.env.NEXT_PUBLIC_DYNAMIC_PROJECT_ID || '',
				walletConnectors: [EthereumWalletConnectors],
				walletsFilter: SortWallets(['metamask', 'coinbase', 'walletconnect']),
				defaultNumberOfWalletsToShow: 3,
			}}
		>
			<SignerProvider>
				<Header />
				{children}
			</SignerProvider>
		</DynamicContextProvider>
	);
}
