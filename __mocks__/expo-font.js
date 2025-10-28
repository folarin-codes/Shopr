// This file provides a simple fake implementation for expo-font

export function useFonts() {
  // Returns a "loaded" state immediately
  return [true, null];
}

export const isLoaded = () => true;

export const loadAsync = () => Promise.resolve();