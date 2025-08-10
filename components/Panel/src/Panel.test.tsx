import { describe, it, expect } from 'vitest';
import { Panel } from './Panel';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Panel', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Panel');
    
    expect(() => {
      renderWithTheme(React.createElement(Panel, defaultProps));
    }).not.toThrow();
  });
});
