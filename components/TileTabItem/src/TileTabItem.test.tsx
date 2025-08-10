import { describe, it, expect } from 'vitest';
import { TileTabItem } from './TileTabItem';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('TileTabItem', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('TileTabItem');
    
    expect(() => {
      renderWithTheme(React.createElement(TileTabItem, defaultProps));
    }).not.toThrow();
  });
});
