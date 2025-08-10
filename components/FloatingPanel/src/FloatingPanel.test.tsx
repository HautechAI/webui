import { describe, it, expect } from 'vitest';
import { FloatingPanel } from './FloatingPanel';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('FloatingPanel', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('FloatingPanel');
    
    expect(() => {
      renderWithTheme(React.createElement(FloatingPanel, defaultProps));
    }).not.toThrow();
  });
});
