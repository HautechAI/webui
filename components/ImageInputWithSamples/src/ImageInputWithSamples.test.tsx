import { describe, it, expect } from 'vitest';
import { ImageInputWithSamples } from './ImageInputWithSamples';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('ImageInputWithSamples', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('ImageInputWithSamples');
    
    expect(() => {
      renderWithTheme(React.createElement(ImageInputWithSamples, defaultProps));
    }).not.toThrow();
  });
});
