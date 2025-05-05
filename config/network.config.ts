import { NetworkProvider } from './provider.config';

export type NetworkProviders = {
	ethereum: NetworkProvider;
};

export enum NetworkTypes {
	ETHEREUM = 'ethereum',
}

export type Network = {
	providers: NetworkProviders;
};
/**
 * Network
 */
export const network: Network = {
	/**
	 * Http Providers
	 */
	providers: {
		/**
		 * Ethereum Http Provider
		 */
		ethereum: {
			/**
			 * Ethereum Network Name
			 */
			network: process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_NETWORK || 'homestead',
			name: 'Ethereum',

			/**
			 * Ethereum Network Key
			 */
			key: process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_KEY || '',

			chainId: parseInt(process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_ID || '1'),

			chainIdHex:
				'0x' +
				parseInt(process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_ID || '1').toString(16),
			image: '/chains/ethereum.svg',
		},
	},
};
