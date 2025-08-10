import { describe, it, expect } from 'vitest';
import { Masonry } from './Masonry';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Masonry', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Masonry');
    
    expect(() => {
      renderWithTheme(React.createElement(Masonry, defaultProps));
    }).not.toThrow();
  });
});
