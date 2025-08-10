import { describe, it, expect } from 'vitest';
import { Slider } from './Slider';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Slider', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Slider');
    
    expect(() => {
      renderWithTheme(React.createElement(Slider, defaultProps));
    }).not.toThrow();
  });
});
