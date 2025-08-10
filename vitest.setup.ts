import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock Linaria for testing
vi.mock('@linaria/core', () => ({
  css: () => 'mocked-css-class'
}));

// Create a comprehensive styled mock
const createStyledComponent = (BaseComponent: any) => {
  return (props: any) => {
    if (typeof BaseComponent === 'string') {
      return React.createElement(BaseComponent, props, props.children);
    }
    if (typeof BaseComponent === 'function') {
      return React.createElement(BaseComponent, props);
    }
    return React.createElement('div', props, props.children);
  };
};

vi.mock('@linaria/react', () => ({
  styled: new Proxy(createStyledComponent, {
    get: (target, prop) => {
      if (typeof prop === 'string') {
        return createStyledComponent;
      }
      return target;
    },
    apply: (target, thisArg, argumentsList) => {
      return createStyledComponent(argumentsList[0]);
    }
  })
}));

// Mock theme variables
vi.mock('@hautechai/webui.themeprovider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({
    foundation: {
      animation: {
        duration: { fast: 0.2, normal: 0.3, slow: 0.5 },
        timing: { ease: 'ease', easeOut: 'ease-out', easeInOut: 'ease-in-out', customBounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
      },
      cornerRadius: { xs: 2, s: 4, m: 8, l: 12, xl: 16, xxl: 20 },
      elevation: { one: '0 1px 3px rgba(0,0,0,0.1)', two: '0 2px 8px rgba(0,0,0,0.15)' }
    },
    layout: {
      strokes: '#e0e0e0',
      backgrounds: '#ffffff'
    },
    actions: {
      primary: '#007bff',
      onPrimary: '#ffffff'
    },
    stroke: { thin: 1 }
  }),
  themeVars: {
    stroke: { thin: 1 },
    layout: { strokes: '#000', backgrounds: '#fff' },
    actions: { primary: '#007bff', onPrimary: '#fff' },
    cornerRadius: { m: 8 },
    animation: { 
      duration: { fast: 0.2 },
      timing: { easeOut: 'ease-out' }
    }
  }
}));