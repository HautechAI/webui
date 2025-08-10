import { describe, it, expect } from 'vitest';
import { Column } from './Column';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Column', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Column');
    
    expect(() => {
      renderWithTheme(React.createElement(Column, defaultProps));
    }).not.toThrow();
  });
});
