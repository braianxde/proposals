# Blockchain Proposals App

A decentralized application for creating and viewing proposals on the Ethereum blockchain.

## Key Features

### Smart Contract Integration

- Secure interaction with Ethereum blockchain using ethers.js
- Custom contract wrapper for type-safe interactions
- Support for different networks (Ethereum, testnet) through configurable providers
- Transaction handling with status tracking and receipt confirmation

### Modern Frontend

- Built with Next.js and React 19 for optimal performance
- Component-based architecture with proper separation of concerns
- Type-safe development with TypeScript
- Responsive UI with Tailwind CSS
- Gradient styling with consistent visual identity across components

### Custom React Hooks

- `useProposals` - Hook for interacting with the Proposals smart contract
- `useProvider` - Hook for getting network-specific Ethereum providers
- State management for loading states and transaction tracking
- Error handling for network and contract interactions

### Wallet Integration

- Seamless connection with Ethereum wallets via Dynamic Labs SDK
- User-friendly connect wallet button
- Wallet state management across the application
- Support for multiple wallet providers

### Production-Ready Features

- Comprehensive test suite for components, hooks, and contracts
- GitHub Actions CI/CD pipeline for automated testing
- Environment-specific configuration
- Error handling and user notifications
- Support for transaction status tracking

### Developer Experience

- Modular code structure
- Reusable UI components
- Well-documented hooks and utilities
- Type safety throughout the codebase
- Automated testing on each commit

## Getting Started

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Run tests
yarn test

# Build for production
yarn build
```

## Testing

The project includes extensive tests for:

- UI components
- Custom React hooks
- Contract interactions

## Project Structure

- `/components` - Reusable UI components
- `/hooks` - Custom React hooks
- `/contracts` - Smart contract integrations
- `/providers` - React context providers
- `/config` - Configuration files
- `/app` - Next.js application routes

## Continuous Integration

The project uses GitHub Actions for CI/CD, automating:

- Dependency installation
- Linting
- Running tests
- Building the application
