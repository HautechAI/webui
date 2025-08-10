import { describe, it, expect } from 'vitest';
import { ImageInput } from './ImageInput';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('ImageInput', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('ImageInput');
    
    expect(() => {
      renderWithTheme(React.createElement(ImageInput, defaultProps));
    }).not.toThrow();
  });
});
