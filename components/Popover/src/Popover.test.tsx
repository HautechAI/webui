import { describe, it, expect } from 'vitest';
import { Popover } from './Popover';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Popover', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Popover');
    
    expect(() => {
      renderWithTheme(React.createElement(Popover, defaultProps));
    }).not.toThrow();
  });
});
