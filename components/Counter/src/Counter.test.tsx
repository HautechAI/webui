import { describe, it, expect } from 'vitest';
import { Counter } from './Counter';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Counter', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Counter');
    
    expect(() => {
      renderWithTheme(React.createElement(Counter, defaultProps));
    }).not.toThrow();
  });
});
