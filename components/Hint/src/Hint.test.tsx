import { describe, it, expect } from 'vitest';
import { Hint } from './Hint';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Hint', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Hint');
    
    expect(() => {
      renderWithTheme(React.createElement(Hint, defaultProps));
    }).not.toThrow();
  });
});
