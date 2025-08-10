import { describe, it, expect } from 'vitest';
import { Theme } from './Theme';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Theme', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Theme');
    
    expect(() => {
      renderWithTheme(React.createElement(Theme, defaultProps));
    }).not.toThrow();
  });
});
