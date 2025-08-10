import { describe, it, expect } from 'vitest';
import { Tile } from './Tile';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Tile', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Tile');
    
    expect(() => {
      renderWithTheme(React.createElement(Tile, defaultProps));
    }).not.toThrow();
  });
});
