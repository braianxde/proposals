# React Hooks

This directory contains custom React hooks used throughout the application.

## Available Hooks

- **useProvider**: Hook for getting an Ethereum provider instance based on network type
- **useProposals**: Hook for interacting with the Proposals smart contract

## Testing Hooks

All hooks have corresponding test files in the `__tests__` directory. We use React Testing Library's `renderHook` function to test hooks in isolation.

### Testing Approach

1. **Mocking Dependencies**: All external dependencies (like context providers, other hooks, or library calls) are mocked to isolate the hook's behavior.

2. **Testing State Management**: We verify that hooks correctly manage their internal state (loading states, error handling, etc.).

3. **Testing Callbacks**: We test that callbacks (like `createProposal` and `getProposals`) work as expected and interact properly with mocked dependencies.

4. **Testing Error Handling**: We test error cases to ensure hooks handle errors gracefully.

### Running Tests

```bash
# Run all hook tests
npm test -- --testPathPattern='hooks'

# Run a specific hook test
npm test -- use-proposal
```

### Best Practices

When creating new hooks:

1. Keep hooks focused on a single responsibility
2. Handle error cases explicitly
3. Provide loading states for asynchronous operations
4. Use proper TypeScript typings
5. Consider memoization for expensive computations or frequent rerenders
6. Write comprehensive tests for all code paths
