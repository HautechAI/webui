import { describe, it, expect } from 'vitest';
import { Price } from './Price';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Price', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Price');
    
    expect(() => {
      renderWithTheme(React.createElement(Price, defaultProps));
    }).not.toThrow();
  });
});
