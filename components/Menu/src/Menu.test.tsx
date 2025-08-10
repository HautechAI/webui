import { describe, it, expect } from 'vitest';
import { Menu } from './Menu';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Menu', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Menu');
    
    expect(() => {
      renderWithTheme(React.createElement(Menu, defaultProps));
    }).not.toThrow();
  });
});
