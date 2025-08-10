import { describe, it, expect } from 'vitest';
import { Tooltip } from './Tooltip';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Tooltip', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Tooltip');
    
    expect(() => {
      renderWithTheme(React.createElement(Tooltip, defaultProps));
    }).not.toThrow();
  });
});
