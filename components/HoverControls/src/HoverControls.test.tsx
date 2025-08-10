import { describe, it, expect } from 'vitest';
import { HoverControls } from './HoverControls';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('HoverControls', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('HoverControls');
    
    expect(() => {
      renderWithTheme(React.createElement(HoverControls, defaultProps));
    }).not.toThrow();
  });
});
