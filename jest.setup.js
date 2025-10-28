// This import gives you .toBeVisible(), etc.
import '@testing-library/jest-native/extend-expect';

// --- ADD THIS MOCK ---
// This mocks all of expo-router
jest.mock("expo-router", () => {
  const originalModule = jest.requireActual("expo-router");
  return {
    ...originalModule,
    // Provide a fake 'router' object
    router: {
      push: jest.fn(),
      navigate: jest.fn(),
      replace: jest.fn(),
    },
    // Provide a fake 'Link' component that just renders its children
    Link: ({ children, ...props }) => <>{children}</>,
  };
});