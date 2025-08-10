import { describe, it, expect } from 'vitest';
import { Box } from './Box';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Box', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Box');
    
    expect(() => {
      renderWithTheme(React.createElement(Box, defaultProps));
    }).not.toThrow();
  });
});
