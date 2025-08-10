import { describe, it, expect } from 'vitest';
import { Dropdown } from './Dropdown';
import { renderWithTheme, getDefaultProps } from '../../test-utils';
import React from 'react';

describe('Dropdown', () => {
  it('should render without crashing', () => {
    const defaultProps = getDefaultProps('Dropdown');
    
    expect(() => {
      renderWithTheme(React.createElement(Dropdown, defaultProps));
    }).not.toThrow();
  });
});
