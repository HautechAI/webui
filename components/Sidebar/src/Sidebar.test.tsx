import { describe, it, expect } from 'vitest';
import { Sidebar } from './Sidebar';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Sidebar', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Sidebar');
    
    expect(() => {
      renderWithTheme(React.createElement(Sidebar, defaultProps));
    }).not.toThrow();
  });
});
