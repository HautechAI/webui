import { describe, it, expect } from 'vitest';
import { Typography } from './Typography';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Typography', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Typography');
    
    expect(() => {
      renderWithTheme(React.createElement(Typography, defaultProps));
    }).not.toThrow();
  });
});
