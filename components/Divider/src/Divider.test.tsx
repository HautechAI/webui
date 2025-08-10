import { describe, it, expect } from 'vitest';
import { Divider } from './Divider';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Divider', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Divider');
    
    expect(() => {
      renderWithTheme(React.createElement(Divider, defaultProps));
    }).not.toThrow();
  });
});
