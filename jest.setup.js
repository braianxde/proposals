// Optional: configure or set up a testing framework before each test
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/router
jest.mock('next/navigation', () => ({
	useRouter() {
		return {
			push: jest.fn(),
			back: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
		};
	},
}));

// Mock dynamic labs context
jest.mock('@dynamic-labs/sdk-react-core', () => ({
	useDynamicContext: () => ({
		setShowAuthFlow: jest.fn(),
	}),
}));
