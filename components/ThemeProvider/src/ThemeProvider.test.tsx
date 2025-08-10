import { describe, it, expect } from 'vitest';
import { ThemeProvider } from './ThemeProvider';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('ThemeProvider', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('ThemeProvider');
    
    expect(() => {
      renderWithTheme(React.createElement(ThemeProvider, defaultProps));
    }).not.toThrow();
  });
});
