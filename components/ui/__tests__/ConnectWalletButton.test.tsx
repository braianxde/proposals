import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { fireEvent, render, screen } from '@testing-library/react';
import ConnectWalletButton from '../connect-wallet-button';

// Mock the useDynamicContext hook
jest.mock('@dynamic-labs/sdk-react-core', () => ({
	useDynamicContext: jest.fn(),
}));

describe('ConnectWalletButton Component', () => {
	beforeEach(() => {
		// Setup the mock implementation for each test
		const setShowAuthFlowMock = jest.fn();
		(useDynamicContext as jest.Mock).mockImplementation(() => ({
			setShowAuthFlow: setShowAuthFlowMock,
		}));
	});

	test('renders connect wallet button', () => {
		render(<ConnectWalletButton />);
		expect(screen.getByText('Connect Wallet')).toBeInTheDocument();
	});

	test('calls setShowAuthFlow when clicked', () => {
		const setShowAuthFlowMock = jest.fn();
		(useDynamicContext as jest.Mock).mockImplementation(() => ({
			setShowAuthFlow: setShowAuthFlowMock,
		}));

		render(<ConnectWalletButton />);
		fireEvent.click(screen.getByText('Connect Wallet'));

		expect(setShowAuthFlowMock).toHaveBeenCalledTimes(1);
		expect(setShowAuthFlowMock).toHaveBeenCalledWith(true);
	});
});
