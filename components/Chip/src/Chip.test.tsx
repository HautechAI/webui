import { describe, it, expect } from 'vitest';
import { Chip } from './Chip';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Chip', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Chip');
    
    expect(() => {
      renderWithTheme(React.createElement(Chip, defaultProps));
    }).not.toThrow();
  });
});
