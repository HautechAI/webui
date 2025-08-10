import { describe, it, expect } from 'vitest';
import { IconButton } from './IconButton';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('IconButton', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('IconButton');
    
    expect(() => {
      renderWithTheme(React.createElement(IconButton, defaultProps));
    }).not.toThrow();
  });
});
