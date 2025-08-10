import { describe, it, expect } from 'vitest';
import { ButtonBase } from './ButtonBase';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('ButtonBase', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('ButtonBase');
    
    expect(() => {
      renderWithTheme(React.createElement(ButtonBase, defaultProps));
    }).not.toThrow();
  });
});
