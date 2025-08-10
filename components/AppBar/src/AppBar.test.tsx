import { describe, it, expect } from 'vitest';
import { AppBar } from './AppBar';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('AppBar', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('AppBar');
    
    expect(() => {
      renderWithTheme(React.createElement(AppBar, defaultProps));
    }).not.toThrow();
  });
});
