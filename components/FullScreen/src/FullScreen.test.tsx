import { describe, it, expect } from 'vitest';
import { FullScreen } from './FullScreen';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('FullScreen', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('FullScreen');
    
    expect(() => {
      renderWithTheme(React.createElement(FullScreen, defaultProps));
    }).not.toThrow();
  });
});
