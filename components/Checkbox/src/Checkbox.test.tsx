import { describe, it, expect } from 'vitest';
import { Checkbox } from './Checkbox';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Checkbox', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Checkbox');
    
    expect(() => {
      renderWithTheme(React.createElement(Checkbox, defaultProps));
    }).not.toThrow();
  });
});
