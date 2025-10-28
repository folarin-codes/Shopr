
// jest.config.js
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@unimodules|expo(nent)?|@expo(nent)?/.*|react-native-svg|react-native-reanimated|firebase|@firebase/.*|@react-navigation/.*|zod)',
  ],
  moduleNameMapper: {
    // This line tells Jest that "@/(.*)" should map to "<rootDir>/$1"
    // (e.g., "@/component/button" becomes "<rootDir>/component/button")
    '^@/(.*)$': '<rootDir>/$1',
    '^expo-font$': '<rootDir>/__mocks__/expo-font.js',
    
    // ... (any other mappers you already have) ...
  },

};