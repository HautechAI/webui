import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Badge', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Badge');
    
    expect(() => {
      renderWithTheme(React.createElement(Badge, defaultProps));
    }).not.toThrow();
  });
});
