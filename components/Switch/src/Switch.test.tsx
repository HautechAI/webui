import { describe, it, expect } from 'vitest';
import { Switch } from './Switch';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Switch', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Switch');
    
    expect(() => {
      renderWithTheme(React.createElement(Switch, defaultProps));
    }).not.toThrow();
  });
});
