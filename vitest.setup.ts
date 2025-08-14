import '@testing-library/jest-dom';

// Mock IntersectionObserver for components that use it
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {}
  observe() {}
  unobserve() {}
  disconnect() {}
} as any;

// Mock ResizeObserver for components that use it
global.ResizeObserver = class ResizeObserver {
  constructor(callback: ResizeObserverCallback) {}
  observe() {}
  unobserve() {}
  disconnect() {}
} as any;