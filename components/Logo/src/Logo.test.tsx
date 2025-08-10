import { describe, it, expect } from 'vitest';
import { Logo } from './Logo';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Logo', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Logo');
    
    expect(() => {
      renderWithTheme(React.createElement(Logo, defaultProps));
    }).not.toThrow();
  });
});
