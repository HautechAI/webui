import { describe, it, expect } from 'vitest';
import { TileTabGroup } from './TileTabGroup';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('TileTabGroup', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('TileTabGroup');
    
    expect(() => {
      renderWithTheme(React.createElement(TileTabGroup, defaultProps));
    }).not.toThrow();
  });
});
