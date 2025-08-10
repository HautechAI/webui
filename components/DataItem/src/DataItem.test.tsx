import { describe, it, expect } from 'vitest';
import { DataItem } from './DataItem';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('DataItem', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('DataItem');
    
    expect(() => {
      renderWithTheme(React.createElement(DataItem, defaultProps));
    }).not.toThrow();
  });
});
