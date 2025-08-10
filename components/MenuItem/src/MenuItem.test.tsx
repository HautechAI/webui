import { describe, it, expect } from 'vitest';
import { MenuItem } from './MenuItem';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('MenuItem', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('MenuItem');
    
    expect(() => {
      renderWithTheme(React.createElement(MenuItem, defaultProps));
    }).not.toThrow();
  });
});
