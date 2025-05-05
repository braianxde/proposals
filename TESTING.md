# Testing Documentation

This document outlines the testing approach used in the project.

## Testing Libraries

- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **User Event**: Advanced event simulation for Testing Library
- **Jest DOM**: Custom Jest matchers for DOM testing

## Test Structure

The tests follow a component-based structure:

- UI component tests are located in `components/ui/__tests__/`
- Business component tests are located in `components/__tests__/`
- Page tests are located in their respective directories, e.g., `app/create-proposals/__tests__/`

## Running Tests

You can run tests using the following npm scripts:

```bash
# Run all tests
npm test

# Run tests in watch mode (reruns tests on file changes)
npm run test:watch
```

## Test Patterns

### Component Tests

- Test rendering of components
- Test props behavior
- Test component interactions
- Test component styling

### Page Tests

- Test page rendering based on state
- Test conditional UI elements
- Test form submissions
- Test error handling

## Mocking

For components that rely on external dependencies:

- Hook mocks (`useProposals`, `useSignerContext`, etc.)
- Context mocks (`useDynamicContext`, etc.)
- API mocks

## Test Files

- **Button.test.tsx**: Tests for the reusable Button component
- **Card.test.tsx**: Tests for the Card container component
- **Notification.test.tsx**: Tests for the Notification component
- **ConnectWalletButton.test.tsx**: Tests for the wallet connection
- **ProposalsList.test.tsx**: Tests for the proposals listing component
- **CreateProposals.test.tsx**: Tests for the proposal creation page

## Future Improvements

- Add integration tests for complete user flows
- Add API mocking for backend interactions
- Add snapshot tests for UI components
- Add accessibility testing
