import { describe, it, expect } from 'vitest';
import { AspectRatio } from './AspectRatio';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('AspectRatio', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('AspectRatio');
    
    expect(() => {
      renderWithTheme(React.createElement(AspectRatio, defaultProps));
    }).not.toThrow();
  });
});
