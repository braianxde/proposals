import { NetworkTypes } from '@/config/network.config';
import { Provider } from '@/config/provider.config';
import { renderHook } from '@testing-library/react';
import { useProvider } from '../use-provider';

// Mock the provider.config
jest.mock('@/config/provider.config', () => ({
	Provider: {
		get: jest.fn(),
	},
}));

describe('useProvider Hook', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('returns null when network is null', () => {
		const { result } = renderHook(() => useProvider(null));
		expect(result.current).toBeNull();
		expect(Provider.get).not.toHaveBeenCalled();
	});

	test('returns null when network is undefined', () => {
		const { result } = renderHook(() => useProvider(undefined));
		expect(result.current).toBeNull();
		expect(Provider.get).not.toHaveBeenCalled();
	});

	test('calls Provider.get with the correct network when network is provided', () => {
		const mockProvider = { provider: 'mockProvider' };
		(Provider.get as jest.Mock).mockReturnValue(mockProvider);

		const { result } = renderHook(() => useProvider(NetworkTypes.ETHEREUM));

		expect(Provider.get).toHaveBeenCalledWith(NetworkTypes.ETHEREUM);
		expect(result.current).toBe(mockProvider);
	});

	test('memoizes the result based on network parameter', () => {
		const mockProvider = { provider: 'mockProvider' };
		(Provider.get as jest.Mock).mockReturnValue(mockProvider);

		const { result, rerender } = renderHook(
			(props) => useProvider(props.network),
			{ initialProps: { network: NetworkTypes.ETHEREUM } }
		);

		expect(Provider.get).toHaveBeenCalledTimes(1);
		expect(result.current).toBe(mockProvider);

		// Rerender with the same network type - should use memoized value
		rerender({ network: NetworkTypes.ETHEREUM });
		expect(Provider.get).toHaveBeenCalledTimes(1);
	});
});
